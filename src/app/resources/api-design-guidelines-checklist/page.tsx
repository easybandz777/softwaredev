import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { Code2, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "api-design-guidelines-checklist";
const TITLE = "The API Design Guidelines Checklist";
const PDF_FILENAME = "api-design-guidelines-checklist.pdf";

export const metadata: Metadata = {
    title: "API Design Guidelines Checklist (REST, Free) | QUANT LAB USA",
    description:
        "A REST API design checklist covering resource naming, versioning, authentication, consistent error handling, and pagination — conventions to ship an API your consumers will not curse.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "API Design Guidelines Checklist (REST, Free) | QUANT LAB USA",
        description:
            "A REST API design checklist: resource naming, versioning, authentication, consistent errors, and pagination conventions for APIs your consumers will not curse.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "API Design Guidelines Checklist (REST, Free) | QUANT LAB USA",
        description:
            "Resource naming, versioning, auth, error handling, and pagination conventions for a REST API.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "A REST API design guidelines checklist covering resource naming and structure, versioning, authentication and security, consistent error handling, and pagination.",
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
            name: "Does this checklist apply to GraphQL APIs too?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It is written for REST, which is still the most common style for public and partner APIs. Many principles — consistent errors, authentication, pagination, and versioning discipline — carry over to GraphQL, but the specifics of resource naming and HTTP status codes are REST-oriented.",
            },
        },
        {
            "@type": "Question",
            name: "Why does API consistency matter so much?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Because consumers learn your API once and expect it to behave the same everywhere. If one endpoint paginates with a cursor and another with page numbers, or errors arrive in three different shapes, every integration becomes guesswork. Consistency is the difference between an API people adopt and one they tolerate.",
            },
        },
        {
            "@type": "Question",
            name: "When should I version my API?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Decide on a versioning strategy before your first external consumer integrates, even if you launch at v1 and never bump it for a while. Adding versioning after consumers depend on you is painful. The cheap move is to design for it from day one and only break compatibility behind a new version.",
            },
        },
        {
            "@type": "Question",
            name: "Is good API design really worth the extra effort up front?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The cost of a poorly designed API is paid every day by every consumer and by your own future team. Inconsistent errors, surprise breaking changes, and missing pagination generate support load and erode trust. A day spent on conventions up front saves months of friction later.",
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
        { "@type": "ListItem", position: 3, name: "API Design Guidelines Checklist", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

const resourceItems = [
    "Name resources with plural nouns, not verbs: use /invoices, not /getInvoices. The HTTP method already supplies the verb.",
    "Map operations to HTTP methods correctly: GET to read, POST to create, PUT or PATCH to update, DELETE to remove. GET requests never change state.",
    "Express relationships through nesting where it reads naturally, such as /customers/{id}/invoices, but avoid nesting more than two levels deep.",
    "Use consistent casing for paths and fields, pick one convention for JSON keys, and apply it everywhere without exception.",
    "Return the right status codes: 200 for success, 201 for created, 204 for no content, 400 for bad input, 401 and 403 for auth, 404 for missing, 409 for conflict, 422 for validation, 429 for rate limits, and 500 for server errors.",
    "Keep responses predictable: the same resource should serialize the same way whether it is returned alone or inside a list.",
];

const versioningItems = [
    "Choose a versioning strategy before the first external consumer integrates; retrofitting versioning later is painful.",
    "Prefer a clear scheme — a URL path segment like /v1/ or a version header — and document which one you use and why.",
    "Never make a breaking change within a version. Adding optional fields is safe; removing or renaming fields, or changing types, is not.",
    "Publish a deprecation policy: how long old versions are supported, how consumers are warned, and the sunset timeline.",
    "Maintain a changelog so consumers can see what changed between versions without diffing responses by hand.",
];

const authItems = [
    "Require authentication on every non-public endpoint, and serve the entire API over HTTPS only.",
    "Use a standard mechanism — OAuth 2.0 bearer tokens or signed API keys — rather than inventing your own scheme.",
    "Enforce authorization server-side on every request; never trust a client-supplied role or rely on an unguessable ID for access control.",
    "Apply rate limiting and return clear 429 responses with headers that tell the consumer their limit, remaining quota, and reset time.",
    "Validate and sanitize all input, and design with the OWASP API security risks in mind, including broken object-level authorization.",
    "Scope credentials to least privilege and support rotation, so a leaked key can be revoked without taking down every integration.",
];

const errorItems = [
    "Return one consistent error shape across the entire API: a machine-readable code, a human-readable message, and where useful, a field-level detail array.",
    "Make error codes stable and documented so consumers can branch on them programmatically instead of parsing message strings.",
    "Match the HTTP status to the error category, and never return 200 with an error payload buried inside it.",
    "Include enough context to debug — what failed and why — without leaking stack traces, internal identifiers, or sensitive data.",
    "Provide a request or correlation ID in responses so a consumer can quote it when they ask your team for help.",
];

const paginationItems = [
    "Paginate every endpoint that returns a collection; an unbounded list is a performance and reliability incident waiting to happen.",
    "Pick one pagination style — cursor-based for large or frequently changing datasets, offset or page-based for small stable ones — and apply it consistently.",
    "Return pagination metadata clearly: the next cursor or page, the page size, and where feasible a total count.",
    "Set a sensible default and maximum page size, and reject requests that exceed the maximum rather than silently truncating.",
    "Support filtering and sorting with documented query parameters, and keep their naming consistent across endpoints.",
];

const sections = [
    { heading: "1. Resource naming & structure", items: resourceItems },
    { heading: "2. Versioning", items: versioningItems },
    { heading: "3. Authentication & security", items: authItems },
    { heading: "4. Error handling", items: errorItems },
    { heading: "5. Pagination, filtering & sorting", items: paginationItems },
];

export default function ApiDesignGuidelinesChecklistPage() {
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
                        <li className="text-gray-300">API Design Guidelines Checklist</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <Code2 className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                REST design checklist · naming, versioning, auth, errors, pagination
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Design a REST API your consumers will not curse.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A practical checklist of REST conventions covering resource naming, versioning,
                                authentication, consistent error handling, and pagination. Decide these
                                conventions once, write them down, and every endpoint your team ships will feel
                                like it came from the same API — because it did.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>5 sections, REST conventions</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>Review in under an hour</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For engineers &amp; tech leads</span></div>
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
                                successHeadline="The API Design Guidelines Checklist is yours."
                                relatedServiceHref="/services/api-development"
                                relatedServiceLabel="API development services"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Why API design conventions matter
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                An API is a contract, and consumers learn it once and expect it to hold. When
                                one endpoint paginates with a cursor and another with page numbers, when errors
                                arrive in three different shapes, or when a field quietly disappears in a
                                release, every integration turns into guesswork and every change generates
                                support tickets. The cost of inconsistency is not paid once — it is paid every
                                day, by every consumer, and by your own future team trying to extend the thing.
                            </p>
                            <p>
                                This checklist captures the conventions we apply on every{" "}
                                <Link href="/services/api-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    API we build
                                </Link>
                                . None of it is exotic; it is the boring discipline that separates an API people
                                adopt from one they tolerate. If you want the formal definition of the terms
                                here, the{" "}
                                <Link href="/glossary/what-is-an-api" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    API glossary entry
                                </Link>{" "}
                                is a quick primer, and the choice between styles is covered in our{" "}
                                <Link href="/glossary/what-is-rest-vs-graphql" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    REST vs GraphQL explainer
                                </Link>
                                .
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
                            How to apply the checklist
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Turn this into your team&apos;s written API style guide. Decide each convention
                                once — your casing, your versioning scheme, your single error shape, your
                                pagination style — and document the decision so nobody re-litigates it in every
                                pull request. Then enforce it in code review, because conventions that live only
                                in a document drift the moment the team is busy. The goal is that a new endpoint
                                written by a new engineer is indistinguishable from one written a year ago.
                            </p>
                            <p>
                                Decide the versioning and authentication strategies before your first external
                                consumer integrates; both are painful to retrofit once people depend on you.
                                Pair this checklist with a security review, since the authentication section
                                only scratches the surface of what a real audit covers — our{" "}
                                <Link href="/blog/nextjs-stripe-integration-guide" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Next.js and Stripe integration guide
                                </Link>{" "}
                                shows the same error-handling and webhook-verification discipline applied to a
                                payments API in practice.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                These conventions are the default starting point for every{" "}
                                <Link href="/services/api-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    API development
                                </Link>{" "}
                                engagement we take on, whether we are building a public API for a SaaS product
                                or an internal service that other teams will consume. Good API design is not a
                                separate phase; it is baked into how we structure resources, version safely, and
                                handle errors from the first endpoint. The same discipline shows up in our{" "}
                                <Link href="/services/saas-platform-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SaaS platform development
                                </Link>{" "}
                                and{" "}
                                <Link href="/services/stripe-integration" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Stripe integration
                                </Link>{" "}
                                work, where a clean API surface and verified webhooks are non-negotiable.
                            </p>
                            <p>
                                If you are designing a new API and want a second opinion on the conventions, or
                                you have inherited one that has drifted and needs a cleanup plan, see{" "}
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
                                    q: "Does this checklist apply to GraphQL APIs too?",
                                    a: "It is written for REST, which is still the most common style for public and partner APIs. Many principles — consistent errors, authentication, pagination, and versioning discipline — carry over to GraphQL, but the specifics of resource naming and HTTP status codes are REST-oriented.",
                                },
                                {
                                    q: "Why does API consistency matter so much?",
                                    a: "Because consumers learn your API once and expect it to behave the same everywhere. If one endpoint paginates with a cursor and another with page numbers, or errors arrive in three different shapes, every integration becomes guesswork. Consistency is the difference between an API people adopt and one they tolerate.",
                                },
                                {
                                    q: "When should I version my API?",
                                    a: "Decide on a versioning strategy before your first external consumer integrates, even if you launch at v1 and never bump it for a while. Adding versioning after consumers depend on you is painful. The cheap move is to design for it from day one and only break compatibility behind a new version.",
                                },
                                {
                                    q: "Is good API design really worth the extra effort up front?",
                                    a: "Yes. The cost of a poorly designed API is paid every day by every consumer and by your own future team. Inconsistent errors, surprise breaking changes, and missing pagination generate support load and erode trust. A day spent on conventions up front saves months of friction later.",
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
                            <Link href="/resources/saas-launch-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">SaaS Launch Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The broader pre-launch review your API ships inside of.</p>
                            </Link>
                            <Link href="/resources/web-app-pentest-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Web App Pentest Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Go deeper on the authentication and security section.</p>
                            </Link>
                            <Link href="/blog/nextjs-stripe-integration-guide" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Next.js Stripe Integration Guide</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Error handling and webhook verification applied to a real payments API.</p>
                            </Link>
                            <Link href="/services/api-development" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">API Development</p>
                                <p className="text-xs text-gray-400 leading-relaxed">How we design and build APIs with these conventions baked in.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Designing or cleaning up an API?
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                Whether you are starting fresh or untangling an API that drifted, we can help
                                you set conventions, version safely, and ship a surface your consumers trust.
                                See{" "}
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
