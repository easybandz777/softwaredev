import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "What is an MVP? Definition & Examples | QUANT LAB",
    description:
        "An MVP (Minimum Viable Product) is the smallest version of a product that delivers real value and lets you learn from paying customers. Definition, examples, scoping rules.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-an-mvp" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "MVP (Minimum Viable Product)",
    description:
        "An MVP is the smallest version of a product that ships fast, delivers genuine value to early users, and produces signal on whether to invest more.",
    url: "https://quantlabusa.dev/glossary/what-is-an-mvp",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is an MVP?", item: "https://quantlabusa.dev/glossary/what-is-an-mvp" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does MVP stand for?", acceptedAnswer: { "@type": "Answer", text: "Minimum Viable Product. The smallest version of a product that delivers usable value to real users and produces enough learning signal to decide what to build next." } },
        { "@type": "Question", name: "How long should an MVP take?", acceptedAnswer: { "@type": "Answer", text: "Three months is the soft ceiling. If you cannot get a usable product into a paying customer's hands inside one quarter, the scope is not minimum." } },
        { "@type": "Question", name: "Is an MVP the same as a prototype?", acceptedAnswer: { "@type": "Answer", text: "No. A prototype demonstrates an idea to internal stakeholders. An MVP is a real product real users use to do real work. Confusing the two is the most common reason MVPs fail." } },
        { "@type": "Question", name: "Should an MVP charge money?", acceptedAnswer: { "@type": "Answer", text: "Almost always yes, even a token amount. Free users tell you flattering lies. Paying customers tell you uncomfortable truths." } },
        { "@type": "Question", name: "How much does an MVP cost?", acceptedAnswer: { "@type": "Answer", text: "A serious MVP from a senior team typically runs $50K to $150K depending on scope, integrations, and how regulated the domain is." } },
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
                        <li className="text-gray-300">What is an MVP?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is an MVP?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        An MVP — Minimum Viable Product — is the smallest version of a product that real users can use to do real work, designed so the team can learn what to build next from paying customer behavior rather than from internal speculation.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the term came from</h2>
                    <p>
                        Frank Robinson coined the term in 2001, but it entered the founder
                        vocabulary through Eric Ries and the Lean Startup movement around 2011.
                        The original idea was disciplined and useful: build the smallest thing
                        that delivers actual value, ship it to actual users, and let the data
                        decide what comes next. Over the next decade the term got diluted into
                        meaning "anything you launch before the polished thing" — which is how
                        teams end up with six-month MVPs that are neither minimum nor viable.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The minimum and viable both matter</h2>
                    <p>
                        Most MVP failures come from honoring one of those two words and ignoring
                        the other. "Minimum" without "viable" produces clickable wireframes that
                        prove nothing, because they cannot be used to do work. "Viable" without
                        "minimum" produces an eighteen-month build that is really a v1.0 dressed
                        up in MVP clothing — by the time it ships, the team is too invested in
                        the assumptions baked into it to change anything.
                    </p>
                    <p>
                        A healthy MVP is uncomfortable for everyone involved. The founder feels
                        like the product is embarrassingly limited. The engineers worry about
                        the corners they cut. The first users hit rough edges. That discomfort
                        is the price of the learning loop being fast.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The MVP scoping rules we actually use</h2>
                    <p>
                        Pick exactly one user persona. If you cannot describe the
                        primary user in one sentence, you have not picked yet. Pick
                        exactly one workflow that ends in measurable value — closing
                        a deal, scheduling an appointment, generating a report. Cut
                        every feature whose absence does not break that workflow.
                        Charge for it from day one even if the price is small. And
                        instrument everything: which buttons get clicked, which
                        screens get abandoned, which features get used twice and
                        never again. Without instrumentation you have shipped a
                        product, not an MVP.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What an MVP is not</h2>
                    <p>
                        An MVP is not a prototype — prototypes show ideas to investors, MVPs
                        deliver value to users. It is not a "phase one" with phases two through
                        five already designed — that is just a regular product with the painful
                        parts deferred. And it is not free-forever — anything that does not
                        produce honest pricing signal is a hobby, not an MVP.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We ship MVPs in 8 to 12 weeks for founders who have validated demand and
                        need to move fast. Our{" "}
                        <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom business software</Link> work
                        starts with a one-week scoping sprint where we cut the proposed feature
                        list roughly in half — not because we are cheap, but because every
                        unshipped feature is one less thing slowing your first ten conversations
                        with customers. The technical stack defaults to Next.js, Postgres, and{" "}
                        <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe</Link>, with{" "}
                        <Link href="/services/api-development" className="text-sky-400 hover:underline">API integrations</Link> for the
                        third-party services your workflow depends on.
                    </p>
                    <p>
                        If you are weighing whether to start at all, read our{" "}
                        <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build versus buy framework</Link> first
                        — half the MVPs we get asked to build should not exist.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">After the MVP — what comes next</h2>
                    <p>
                        Shipping the MVP is the start of the work, not the end.
                        The next 90 days are about converting the first ten paying
                        customers into reference accounts, watching where they
                        struggle, and deciding what to build versus what to kill.
                        Most MVPs need three things before the next stage:
                        retention measurement (does anyone still use it after week
                        four?), a clear next pricing tier, and a backlog driven by
                        usage data rather than founder intuition. Teams that skip
                        this phase end up building v2.0 from the same speculative
                        list of features they had before launch.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">What is SaaS?</Link></li>
                        <li><Link href="/glossary/what-is-a-crm" className="text-sky-400 hover:underline">What is a CRM?</Link></li>
                        <li><Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">What is Next.js?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-jamstack" className="text-sky-400 hover:underline">What is JAMstack?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Scoping an MVP?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        Spend 30 minutes with the engineer who would build it. We will tell you
                        which features to cut before you spend a dollar.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-mvp" />
                        <Link href="/services/custom-business-software" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Custom business software
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
