import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is SaaS? Plain-English Definition | QUANT LAB USA",
    description:
        "SaaS (Software as a Service) is subscription software delivered over the web. Plain-English definition, history, examples, 2026 trends. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-saas" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "SaaS (Software as a Service)",
    description:
        "SaaS is software hosted by the vendor and delivered to customers over the internet on a subscription basis — no installs, no servers, multi-tenant by default.",
    url: "https://quantlabusa.dev/glossary/what-is-saas",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is SaaS?", item: "https://quantlabusa.dev/glossary/what-is-saas" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does SaaS stand for?",
            acceptedAnswer: { "@type": "Answer", text: "Software as a Service — software you access through a browser on a recurring subscription instead of installing locally." },
        },
        {
            "@type": "Question",
            name: "What is the difference between SaaS and a website?",
            acceptedAnswer: { "@type": "Answer", text: "A website mostly shows you information. A SaaS is a multi-user application with accounts, data, and stateful workflows — the difference between reading a brochure and using Notion." },
        },
        {
            "@type": "Question",
            name: "Is SaaS always multi-tenant?",
            acceptedAnswer: { "@type": "Answer", text: "Almost always. A single-tenant deployment per customer is technically still a service, but most people use SaaS to mean shared infrastructure with logical isolation between customers." },
        },
        {
            "@type": "Question",
            name: "What is the typical SaaS pricing model?",
            acceptedAnswer: { "@type": "Answer", text: "Per-seat monthly or annual subscriptions are the default. Usage-based pricing — per API call, per record, per gigabyte — is increasingly common for infrastructure-adjacent SaaS." },
        },
        {
            "@type": "Question",
            name: "How long does it take to build a SaaS MVP?",
            acceptedAnswer: { "@type": "Answer", text: "A focused MVP that handles signup, billing, and one core workflow typically ships in 8 to 12 weeks if scope discipline holds." },
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
                        <li className="text-gray-300">What is SaaS?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is SaaS?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        SaaS — Software as a Service — is software you rent through a web browser on a recurring subscription, where the vendor runs the servers, owns the upgrades, and is paid monthly or annually instead of with a one-time license.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What does SaaS stand for?</h2>
                    <p>
                        SaaS stands for <strong>Software as a Service</strong>. It refers to software you access through a browser on a recurring subscription instead of installing locally. Real SaaS has four traits: multi-tenancy (one app instance, many customers), stateful user data, recurring subscription billing, and continuous delivery to all customers simultaneously without scheduling upgrade windows.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A brief history</h2>
                    <p>
                        Before SaaS, business software was something you bought on a CD, installed
                        on a server you owned, and patched yourself when something broke. The
                        upfront license cost was enormous, the maintenance overhead was a job in
                        itself, and upgrading meant scheduling weekend downtime. Salesforce
                        launched in 1999 on the slogan "No Software" — meaning no CDs, no
                        installs, no servers in your closet — and the SaaS model was born.
                    </p>
                    <p>
                        Over the next two decades, broadband, browsers, virtualization, and
                        eventually the cloud removed every technical reason not to ship this way.
                        Today, the question for a new B2B product is rarely whether to be SaaS —
                        it is which slice of SaaS you are: horizontal (Slack, Notion, Linear),
                        vertical (Toast for restaurants, Procore for construction), or
                        infrastructure (Stripe, Twilio, Vercel).
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What makes something actually SaaS</h2>
                    <p>
                        Four characteristics tend to define a real SaaS rather than a website
                        with a login form. Multi-tenancy: one application instance serves many
                        customer organizations, with strict data isolation between them. State:
                        users do not just read content, they create and modify data that persists
                        across sessions. Subscription billing: revenue is recurring, usually
                        per-seat or usage-based. And continuous delivery: the vendor ships
                        improvements to every customer simultaneously, without anyone scheduling
                        an upgrade window.
                    </p>
                    <p>
                        Everything downstream of that — the unit economics of SaaS, the focus on
                        net revenue retention, the obsession with churn — falls out of those
                        four traits. If you understand those, you understand the business.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">SaaS economics in one paragraph</h2>
                    <p>
                        Three numbers run the business. CAC (customer acquisition
                        cost): everything you spent to land one customer, divided by
                        the number you landed. LTV (lifetime value): the gross profit
                        you expect from one customer over the time they stay. Net
                        Revenue Retention (NRR): how much your existing customer
                        base grows or shrinks year over year, before any new logos.
                        Healthy SaaS has LTV:CAC of 3:1 or better, NRR above 100
                        percent, and a payback period under 18 months. If you do not
                        know your numbers, your investors will, and the conversation
                        will be uncomfortable.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The hard parts nobody tells you about</h2>
                    <p>
                        Founders building their first SaaS underestimate four things. Billing is
                        not a feature, it is a system — proration, dunning, tax, refunds, plan
                        changes, and the audit trail behind all of it. Multi-tenant data
                        isolation has to be designed in from the start; retrofitting it later
                        means rebuilding the database layer. Webhooks and event delivery are
                        their own discipline once you have a few integrations. And SOC 2 will
                        come for you the moment you sell to anyone with a procurement team.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We build production SaaS platforms for founders who are either replatforming
                        off no-code or starting fresh after a failed offshore build. Our{" "}
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link> work
                        is opinionated: Next.js for the application, Postgres for the data layer,{" "}
                        <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe</Link> for billing, and{" "}
                        <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">Vercel or AWS</Link> for hosting. The
                        first eight weeks always go into the boring foundation — auth, billing,
                        permissions, audit log — because everything fun depends on it.
                    </p>
                    <p>
                        If you are still validating, read our guide on{" "}
                        <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build versus buy software</Link>{" "}
                        before committing to a custom build.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Vertical vs horizontal SaaS</h2>
                    <p>
                        Horizontal SaaS solves a workflow that exists across many
                        industries — Slack for chat, Notion for docs, Linear for
                        engineering teams. Larger total addressable market, more
                        competition, harder to differentiate. Vertical SaaS
                        targets one industry deeply — Toast for restaurants,
                        Procore for construction, Veeva for life sciences. Smaller
                        market, less competition, much easier to charge premium
                        prices because the product becomes the operating system
                        for that industry. Most new SaaS opportunities in 2026 are
                        vertical — the horizontal categories are largely won.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["saas"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-multi-tenant-saas" className="text-sky-400 hover:underline">What is multi-tenant SaaS?</Link></li>
                        <li><Link href="/glossary/what-is-an-mvp" className="text-sky-400 hover:underline">What is an MVP?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">What is SOC 2?</Link></li>
                        <li><Link href="/glossary/what-is-a-crm" className="text-sky-400 hover:underline">What is a CRM?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Building a SaaS? Skip the buzzwords</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        Book a no-pressure 30-minute consultation with the engineer who would
                        write your foundation.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-saas" />
                        <Link href="/services/saas-platform-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            SaaS platform development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
