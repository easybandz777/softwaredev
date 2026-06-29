import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is ABAC? Attribute-Based Access Control | QUANT LAB USA",
    description:
        "ABAC decides access from attributes of the user, resource, action, and environment at request time. Plain-English definition vs RBAC. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-abac" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Attribute-Based Access Control (ABAC)",
    description:
        "ABAC is an authorization model that evaluates a policy against attributes of the subject, resource, action, and environment at request time to allow or deny each individual access.",
    url: "https://quantlabusa.dev/glossary/what-is-abac",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Attribute-Based Access Control (ABAC)", item: "https://quantlabusa.dev/glossary/what-is-abac" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is ABAC in one sentence?", acceptedAnswer: { "@type": "Answer", text: "ABAC is an authorization model that allows or denies each request by evaluating a policy against attributes of the user, the resource, the action, and the environment, rather than against a fixed role." } },
        { "@type": "Question", name: "How is ABAC different from RBAC?", acceptedAnswer: { "@type": "Answer", text: "RBAC grants access from a user's role. ABAC grants access from attributes evaluated at request time, so one policy can express rules like 'editors can edit documents in their own department during business hours' without minting a role per case." } },
        { "@type": "Question", name: "What is a policy decision point?", acceptedAnswer: { "@type": "Answer", text: "A policy decision point, or PDP, is the component that evaluates the ABAC policy and returns allow or deny. The policy enforcement point, or PEP, sits in front of the resource and actually blocks or permits the request based on that decision." } },
        { "@type": "Question", name: "What is XACML?", acceptedAnswer: { "@type": "Answer", text: "XACML is an OASIS standard for expressing attribute-based access policies in XML, along with a reference architecture of decision, enforcement, and information points. Newer engines often use lighter languages like Rego instead." } },
        { "@type": "Question", name: "Is ABAC better than RBAC?", acceptedAnswer: { "@type": "Answer", text: "Neither is strictly better. ABAC is more expressive and avoids role explosion, but policies are harder to audit and reason about. Many real systems use RBAC for coarse access and ABAC for the fine-grained, data-dependent rules." } },
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
                        <li className="text-gray-300">Attribute-Based Access Control (ABAC)</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Attribute-Based Access Control (ABAC)?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        ABAC is an authorization model that decides every request by running a policy over attributes — who the user is, what the resource is, what action they want, and the surrounding context like time or location. Instead of asking "what role does this person have," it asks "do this user's attributes, this resource's attributes, and this moment's context satisfy the rule?"
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why it exists</h2>
                    <p>
                        Role-based access control is clean and auditable, but it
                        struggles the moment access depends on data rather than job
                        title. "A nurse can view a chart, but only for patients on their
                        own ward" is awkward to express as roles — you would need a role
                        per ward, then per shift, then per combination, and the catalog
                        explodes. The US National Institute of Standards and Technology
                        published SP 800-162 in 2014 to define ABAC precisely as the
                        answer: model the rule directly, in terms of attributes, and let
                        a policy engine evaluate it fresh on every request.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The four attribute categories</h2>
                    <p>
                        Every ABAC policy draws on four kinds of attributes. Subject
                        attributes describe the user — department, clearance, employment
                        status. Resource attributes describe the thing being accessed —
                        owner, classification, project. Action attributes describe what
                        is being attempted — read, write, delete, export. Environment
                        attributes describe the context — time of day, source network,
                        device posture, threat level. A policy is just a boolean
                        expression over these four sets, and the engine returns allow or
                        deny by evaluating it against the specific request in front of it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Decision and enforcement points</h2>
                    <p>
                        ABAC's reference architecture separates the decision from the
                        enforcement. The policy enforcement point sits in front of the
                        resource and intercepts every request. It hands the request to a
                        policy decision point, which gathers the relevant attributes from
                        a policy information point, evaluates the policy, and returns
                        allow or deny. Keeping the decision logic in one engine — rather
                        than scattered across application code — is what makes ABAC
                        powerful and what makes it hard: one wrong policy can silently
                        open or close access everywhere at once.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">ABAC vs RBAC, honestly</h2>
                    <p>
                        ABAC is strictly more expressive than{" "}
                        <Link href="/glossary/what-is-rbac" className="text-sky-400 hover:underline">RBAC</Link>{" "}
                        — you can model a role as "user has attribute role=X," but you
                        cannot model an arbitrary attribute rule as a role without
                        explosion. The trade-off is auditability. With RBAC you can look
                        at a role and know exactly what it permits; with ABAC, answering
                        "who can access this record" may require evaluating policies
                        against the entire attribute space. That is why most production
                        systems are hybrids: RBAC for the coarse, stable buckets, and
                        ABAC layered on top for the fine-grained, data-dependent rules
                        that would otherwise cause role explosion.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        When a product's access rules genuinely depend on data — regional
                        ownership, document classification, tenant boundaries — we reach
                        for attribute-based policies rather than fighting role explosion.
                        In our{" "}
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform builds</Link>{" "}
                        that often means a central policy engine evaluating tenant and
                        ownership attributes on every request, wired into the same{" "}
                        <Link href="/glossary/what-is-an-iam" className="text-sky-400 hover:underline">identity and access management</Link>{" "}
                        layer. It also pairs naturally with a{" "}
                        <Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">zero trust</Link>{" "}
                        model, where device posture and context are first-class inputs to
                        every authorization decision.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Making ABAC maintainable</h2>
                    <p>
                        ABAC's failure mode is policy sprawl: hundreds of rules that
                        nobody fully understands, with subtle overlaps that allow or deny
                        more than intended. The discipline that keeps it sane is treating
                        policy as code — version-controlled, peer-reviewed, and tested
                        against a suite of allow and deny cases before it ships. Keep the
                        attribute vocabulary small and well-defined, prefer deny-by-default,
                        and write automated tests that assert specific people can and
                        cannot reach specific resources. Without that rigor, ABAC trades
                        role explosion for an equally unmanageable policy explosion.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["pentest","saas"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-rbac" className="text-sky-400 hover:underline">What is RBAC?</Link></li>
                        <li><Link href="/glossary/what-is-an-iam" className="text-sky-400 hover:underline">What is IAM?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">What is Zero Trust?</Link></li>
                        <li><Link href="/glossary/what-is-multi-factor-authentication" className="text-sky-400 hover:underline">What is MFA?</Link></li>
                        <li><Link href="/glossary/what-is-oauth2" className="text-sky-400 hover:underline">What is OAuth 2.0?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Authorization rules getting complicated?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design attribute-based policy engines for data-dependent
                        access and test that they hold under pressure. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-abac" />
                        <Link href="/services/saas-platform-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            SaaS platform development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
