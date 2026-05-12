import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "What is a CRM? Definition & Examples | QUANT LAB",
    description:
        "A CRM is the system of record for every customer relationship. Plain-English definition, history, what it does, when you actually need one, and how QUANT LAB builds custom ones.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-crm" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "CRM (Customer Relationship Management)",
    description:
        "A CRM is the system of record for every interaction with a customer or prospect — leads, deals, conversations, contracts, and revenue all in one searchable database.",
    url: "https://quantlabusa.dev/glossary/what-is-a-crm",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        {
            "@type": "ListItem",
            position: 3,
            name: "What is a CRM?",
            item: "https://quantlabusa.dev/glossary/what-is-a-crm",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does CRM stand for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "CRM stands for Customer Relationship Management. It refers both to the business strategy of managing customer interactions and to the software that supports it.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need a CRM if I only have 50 customers?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Usually yes. The pain point is rarely the count, it is the number of touchpoints per customer. If you have repeat conversations, multiple stakeholders per deal, or anyone besides the founder talking to customers, you need a CRM.",
            },
        },
        {
            "@type": "Question",
            name: "Salesforce, HubSpot, or custom?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Salesforce wins on enterprise compliance and ecosystem. HubSpot wins on time-to-value for marketing-led teams. Custom wins when your sales process is your moat and per-seat licensing would cost more than building the thing you actually need.",
            },
        },
        {
            "@type": "Question",
            name: "What data should a CRM hold?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Contacts and companies, deals and pipelines, every conversation thread, every contract and document, billing and revenue events, and the activity log of who did what to which record.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a custom CRM take to build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A focused MVP for a single sales motion typically ships in 6 to 10 weeks. A full multi-pipeline CRM with integrations, reporting, and per-role permissions usually runs 12 to 20 weeks.",
            },
        },
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
                        <li className="text-gray-300">What is a CRM?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Software
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is a CRM?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A CRM (Customer Relationship Management system) is the single database of every interaction your company has with a prospect or customer — contacts, deals, conversations, contracts, and revenue — designed so any teammate can pick up any account and immediately know where it stands.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the term came from</h2>
                    <p>
                        The phrase "Customer Relationship Management" entered mainstream business
                        vocabulary in the mid-1990s, when client-server databases became cheap
                        enough that mid-sized companies could replace their Rolodexes with something
                        searchable. Siebel Systems was the early category leader; Salesforce was
                        founded in 1999 with the radical proposition that the CRM should live in
                        the browser instead of on a sales rep's laptop. By 2010 "CRM" had become
                        the umbrella term for every piece of revenue-facing software — pipeline
                        tracking, marketing automation, customer support, e-signature, even
                        billing in some definitions.
                    </p>
                    <p>
                        The vocabulary creep is part of why buying one is confusing. A founder
                        asked "do you have a CRM?" might say yes because they use HubSpot for
                        email blasts, even though their pipeline lives in a spreadsheet and their
                        contracts live in Google Drive. None of those things talk to each other,
                        which means none of them are actually doing the job of a CRM.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What a CRM actually does</h2>
                    <p>
                        A working CRM holds five kinds of objects and keeps them in sync. Contacts
                        and companies — the people and organizations you sell to. Deals or
                        opportunities — the open conversations with a dollar value and a stage.
                        Activities — calls, emails, meetings, notes, and tasks. Documents —
                        proposals, contracts, SOWs, and signed agreements. And revenue events —
                        bookings, invoices, payments, churn.
                    </p>
                    <p>
                        Every one of those objects has a relationship to the others, and the
                        value of a CRM is that you can pivot through them in a single query.
                        "Show me every open deal over fifty thousand where we have not had a
                        meeting in 21 days, grouped by sales rep, with the most recent contract
                        version attached" is a one-line question in a CRM and an afternoon of
                        spreadsheet work without one.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When founders actually need one</h2>
                    <p>
                        The trigger is rarely customer count and almost always "someone besides
                        the founder is talking to customers." The moment a second teammate is
                        emailing prospects, the founder loses the in-the-head context that was
                        keeping the pipeline coherent, and a CRM becomes the cheapest way to
                        rebuild that shared brain. Other common triggers: an investor asks for
                        a pipeline forecast you cannot produce in twenty minutes, a customer
                        complains you forgot something they told a teammate last quarter, or you
                        miss a renewal because the renewal date lived in a Calendar event nobody
                        thought to check.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We build custom CRMs for teams whose sales process is their moat — agencies
                        with complex retainer ladders, professional-services firms with multi-party
                        deal teams, vertical SaaS companies whose pipeline shape does not match
                        anything Salesforce ships out of the box. Our{" "}
                        <Link href="/services/custom-crm-development" className="text-sky-400 hover:underline">custom CRM development</Link> work usually
                        starts with a two-week discovery phase where we map your current pipeline,
                        identify the three or four custom fields that everyone reaches for, and
                        decide whether to start from a blank database or fork an open-source base.
                        The build itself is typically Next.js on the frontend, Postgres for the
                        database, and{" "}
                        <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe</Link> wired in for billing.
                    </p>
                    <p>
                        If you already use Salesforce or HubSpot and the pain is that you cannot
                        get them to do one specific thing your business depends on, we usually
                        recommend extending instead of replacing — read our{" "}
                        <Link href="/blog/custom-crm-vs-salesforce-vs-hubspot-2026" className="text-sky-400 hover:underline">custom CRM vs Salesforce vs HubSpot</Link> comparison
                        before deciding which path you are on.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">What is SaaS?</Link></li>
                        <li><Link href="/glossary/what-is-multi-tenant-saas" className="text-sky-400 hover:underline">What is multi-tenant SaaS?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-webhooks" className="text-sky-400 hover:underline">What are webhooks?</Link></li>
                        <li><Link href="/glossary/what-is-an-mvp" className="text-sky-400 hover:underline">What is an MVP?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If you are scoping a CRM and want a 30-minute conversation about whether
                        to build, buy, or extend — not a pitch — book a call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-crm" />
                        <Link href="/services/custom-crm-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Custom CRM development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
