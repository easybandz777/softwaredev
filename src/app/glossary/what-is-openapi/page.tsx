import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is OpenAPI (Swagger)? Plain-English Guide | QUANT LAB USA",
    description:
        "OpenAPI is a standard, machine-readable spec that describes a REST API so tools can generate docs, clients, and tests. Swagger explained. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-openapi" },
    openGraph: {
        title: "What is OpenAPI (Swagger)? Plain-English Guide | QUANT LAB USA",
        description:
            "OpenAPI is a standard, machine-readable spec describing a REST API so tools can generate docs, clients, and tests. How it relates to Swagger, explained.",
        url: "https://quantlabusa.dev/glossary/what-is-openapi",
        type: "article",
    },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "OpenAPI Specification",
    description:
        "OpenAPI is a standard, language-agnostic format for describing a REST API in a machine-readable document, defining its endpoints, parameters, request and response schemas, and authentication so tooling can generate docs, clients, and tests.",
    url: "https://quantlabusa.dev/glossary/what-is-openapi",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "OpenAPI", item: "https://quantlabusa.dev/glossary/what-is-openapi" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is OpenAPI in one sentence?", acceptedAnswer: { "@type": "Answer", text: "OpenAPI is a standard, machine-readable document that describes a REST API — its endpoints, parameters, schemas, and auth — so that tools can generate documentation, client SDKs, mock servers, and tests from it." } },
        { "@type": "Question", name: "Is OpenAPI the same as Swagger?", acceptedAnswer: { "@type": "Answer", text: "Effectively yes, historically. The spec was called Swagger until it was donated to the OpenAPI Initiative in 2015 and renamed OpenAPI. 'Swagger' now refers to the popular tooling (Swagger UI, Swagger Editor) around the spec." } },
        { "@type": "Question", name: "What format is an OpenAPI document?", acceptedAnswer: { "@type": "Answer", text: "A single YAML or JSON file. It is human-readable and version-controllable, and most teams keep it in the repo alongside the code it describes." } },
        { "@type": "Question", name: "What can you generate from an OpenAPI spec?", acceptedAnswer: { "@type": "Answer", text: "Interactive documentation, typed client SDKs in many languages, server stubs, mock servers, contract tests, and request validation middleware — all from the same source of truth." } },
        { "@type": "Question", name: "Design-first or code-first?", acceptedAnswer: { "@type": "Answer", text: "Design-first writes the spec before the code, so teams agree on the contract up front. Code-first generates the spec from annotated code. Both work; design-first tends to produce cleaner, more deliberate APIs." } },
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
                        <li className="text-gray-300">OpenAPI</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · APIs</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is OpenAPI (Swagger)?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        OpenAPI is a standard, machine-readable way to describe a REST API in a single YAML or JSON file — every endpoint, parameter, request and response shape, and authentication scheme — so that documentation, client SDKs, mock servers, and tests can all be generated from one source of truth instead of drifting out of sync by hand.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Swagger, renamed</h2>
                    <p>
                        The format began life as Swagger, created in 2011. In 2015 it was
                        donated to a Linux Foundation working group, the OpenAPI Initiative,
                        and the specification itself was renamed OpenAPI. The word "Swagger"
                        survives as the name of the popular tooling built around it — Swagger
                        UI for interactive docs, Swagger Editor for authoring. So when people
                        say "the Swagger file," they almost always mean an OpenAPI document.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What lives in the document</h2>
                    <p>
                        An OpenAPI file describes paths (the endpoints), the operations on
                        each (GET, POST, and so on), the parameters and request bodies they
                        accept, the responses and status codes they return, reusable schema
                        components, and the security schemes — API keys,{" "}
                        <Link href="/glossary/what-is-oauth2" className="text-sky-400 hover:underline">OAuth2</Link>,
                        or bearer{" "}
                        <Link href="/glossary/what-is-an-jwt" className="text-sky-400 hover:underline">JWT</Link>{" "}
                        tokens. It is the complete contract of a{" "}
                        <Link href="/glossary/what-is-a-rest-api" className="text-sky-400 hover:underline">REST API</Link>,
                        written down in a form both humans and machines can read.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why it is worth the effort</h2>
                    <p>
                        The payoff is automation, end to end. From one spec you can render always-current
                        interactive documentation, generate typed client SDKs in a dozen
                        languages, stand up a mock server before the backend exists, validate
                        incoming requests against the schema, and run contract tests that
                        fail the build when the implementation drifts from the contract. The
                        spec stops being paperwork and becomes a tool that does real work
                        across the whole API lifecycle.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Design-first vs code-first</h2>
                    <p>
                        Teams take two routes. Design-first means writing the OpenAPI spec
                        before any code, so consumers and providers agree on the contract up
                        front and frontend work can start against a mock immediately.
                        Code-first means generating the spec from annotations in the
                        implementation. Design-first tends to produce more deliberate,
                        consistent APIs because the contract is a decision rather than a
                        byproduct — though it only stays honest if you also test the running
                        API against the spec.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The drift trap</h2>
                    <p>
                        The single biggest failure mode is a spec that no longer matches
                        reality. Hand-maintained documentation rots the moment someone ships
                        a change and forgets to update the file — and a lying spec is worse
                        than none, because integrators trust it. The defense is to wire the
                        spec into CI: validate requests and responses against it, generate
                        clients from it, and break the build when code and contract diverge.
                        That is also where{" "}
                        <Link href="/glossary/what-is-api-versioning" className="text-sky-400 hover:underline">API versioning</Link>{" "}
                        discipline pays off — the spec makes breaking changes visible.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We treat the OpenAPI document as a first-class deliverable, not an
                        afterthought. On our{" "}
                        <Link href="/services/api-development" className="text-sky-400 hover:underline">API development</Link>{" "}
                        engagements the spec lives in the repo, drives the generated client
                        SDKs and the published docs, and is enforced in CI so the contract
                        cannot silently drift from the code. A client integrating with the
                        API gets accurate documentation and a typed SDK on day one — which is
                        what turns a{" "}
                        <Link href="/glossary/what-is-a-rest-api" className="text-sky-400 hover:underline">REST API</Link>{" "}
                        from a support burden into a product people enjoy building on.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack","saas"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-a-rest-api" className="text-sky-400 hover:underline">What is a REST API?</Link></li>
                        <li><Link href="/glossary/what-is-api-versioning" className="text-sky-400 hover:underline">What is API versioning?</Link></li>
                        <li><Link href="/glossary/what-is-graphql" className="text-sky-400 hover:underline">What is GraphQL?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-oauth2" className="text-sky-400 hover:underline">What is OAuth2?</Link></li>
                        <li><Link href="/glossary/what-is-an-api-gateway" className="text-sky-400 hover:underline">What is an API gateway?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Want a spec-driven API?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design APIs spec-first, with generated SDKs and docs and contract
                        tests that keep them honest. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-openapi" />
                        <Link href="/services/api-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            API development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
