import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is RBAC? Role-Based Access Control Explained | QUANT LAB USA",
    description:
        "RBAC grants permissions to roles, then assigns users to roles. Plain-English definition, how it differs from ABAC, and where it breaks. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-rbac" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Role-Based Access Control (RBAC)",
    description:
        "RBAC is an authorization model that assigns permissions to named roles rather than to individual users, then grants users access by placing them into one or more roles.",
    url: "https://quantlabusa.dev/glossary/what-is-rbac",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Role-Based Access Control (RBAC)", item: "https://quantlabusa.dev/glossary/what-is-rbac" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is RBAC in one sentence?", acceptedAnswer: { "@type": "Answer", text: "RBAC is an authorization model that attaches permissions to roles rather than to people, so you grant access by assigning a user to a role instead of editing dozens of individual permissions." } },
        { "@type": "Question", name: "What is the difference between RBAC and ABAC?", acceptedAnswer: { "@type": "Answer", text: "RBAC decides access from a user's role. ABAC decides access from attributes — user, resource, action, and environment — evaluated by a policy at request time, which is more flexible but harder to audit." } },
        { "@type": "Question", name: "What is role explosion?", acceptedAnswer: { "@type": "Answer", text: "Role explosion is when an organization creates so many narrowly scoped roles to handle edge cases that the role catalog becomes larger and harder to manage than the per-user permissions RBAC was meant to replace." } },
        { "@type": "Question", name: "Is RBAC the same as least privilege?", acceptedAnswer: { "@type": "Answer", text: "No. RBAC is a mechanism; least privilege is a goal. RBAC makes least privilege easier to implement, but a sloppily designed role with too many permissions violates least privilege just as much as a sloppily permissioned user." } },
        { "@type": "Question", name: "Does RBAC work for multi-tenant SaaS?", acceptedAnswer: { "@type": "Answer", text: "Yes, but roles usually have to be scoped per tenant so an admin in one customer's workspace cannot act in another's. Most SaaS products combine tenant-scoped RBAC with a small set of platform-level roles." } },
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
                        <li className="text-gray-300">Role-Based Access Control (RBAC)</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Role-Based Access Control (RBAC)?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        RBAC is an authorization model that attaches permissions to named roles — like "billing-admin" or "support-readonly" — instead of to individual people. You grant someone access by assigning them to a role, and you revoke it by removing the role, so access is managed in a handful of well-understood buckets rather than one user at a time.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it came from</h2>
                    <p>
                        The model was formalized by David Ferraiolo and Richard Kuhn
                        at the US National Institute of Standards and Technology in a
                        1992 paper, and it became an official standard — INCITS 359 —
                        in 2004. The motivating insight was simple: in any real
                        organization, what someone is allowed to do follows from their
                        job, not from their identity, so you should model permissions
                        around jobs. A new accountant should inherit the accountant
                        permission set on day one rather than have an administrator
                        hand-pick thirty individual grants.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The three moving parts</h2>
                    <p>
                        RBAC has exactly three things to reason about. Permissions are
                        the low-level "can do" facts — read this table, refund this
                        charge, deploy this service. Roles are named bundles of
                        permissions that map to a job function. Assignments connect
                        users to roles. The whole point is that the two ends — people
                        and permissions — never touch directly; everything goes through
                        the role in the middle. That indirection is what makes a quarterly
                        access review tractable: you review a dozen roles, not ten
                        thousand individual grants.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Role hierarchies and constraints</h2>
                    <p>
                        Mature RBAC adds two refinements. Role hierarchies let a senior
                        role inherit a junior role's permissions — a "manager" role
                        automatically gets everything "employee" can do, plus more, so
                        you do not duplicate permission lists. Constraints enforce rules
                        like separation of duties: the person who submits a payment must
                        not be the person who approves it, so the two roles are declared
                        mutually exclusive and no single user can hold both. These two
                        features are what separate a real RBAC implementation from a
                        flat list of permission groups.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where RBAC breaks: role explosion</h2>
                    <p>
                        RBAC's weakness shows up when access depends on data, not just
                        job function — "a regional manager can edit orders, but only in
                        their own region." Pure RBAC handles this by minting a separate
                        role per region, and then per department, and then per
                        combination, until the role catalog has thousands of entries and
                        is harder to manage than the per-user mess it replaced. This is
                        called role explosion, and it is the standard signal that you
                        have outgrown plain RBAC and need attribute-based rules layered
                        on top — which is exactly what{" "}
                        <Link href="/glossary/what-is-abac" className="text-sky-400 hover:underline">ABAC</Link>{" "}
                        provides.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Almost every product we build needs an authorization model, and
                        RBAC is usually the right default. In our{" "}
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform builds</Link>{" "}
                        we scope roles per tenant so a customer admin can never act
                        outside their own workspace, and we wire role assignments into
                        the same{" "}
                        <Link href="/glossary/what-is-an-iam" className="text-sky-400 hover:underline">identity and access management</Link>{" "}
                        layer that handles login. When we run a{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration test</Link>,
                        broken access control — a user reaching a resource their role
                        should not allow — is one of the most common and most damaging
                        findings, so we test role boundaries directly rather than
                        trusting the diagram.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Designing roles that last</h2>
                    <p>
                        The practical advice is to start coarse and resist the urge to
                        create a role for every exception. Model roles on durable job
                        functions, not on individual people or temporary projects. Keep
                        the role count low enough that a human can read the whole catalog
                        in one sitting. When a request genuinely depends on data
                        attributes rather than job function, reach for an attribute rule
                        instead of inventing another role. And review assignments on a
                        schedule — RBAC's auditability is its biggest advantage, but only
                        if someone actually performs the audit.
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
                        <li><Link href="/glossary/what-is-abac" className="text-sky-400 hover:underline">What is ABAC?</Link></li>
                        <li><Link href="/glossary/what-is-an-iam" className="text-sky-400 hover:underline">What is IAM?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">What is Zero Trust?</Link></li>
                        <li><Link href="/glossary/what-is-multi-factor-authentication" className="text-sky-400 hover:underline">What is MFA?</Link></li>
                        <li><Link href="/glossary/what-is-active-directory" className="text-sky-400 hover:underline">What is Active Directory?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Designing an access model?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design and test authorization for SaaS platforms and internal
                        tools, then verify the boundaries hold. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-rbac" />
                        <Link href="/services/saas-platform-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            SaaS platform development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
