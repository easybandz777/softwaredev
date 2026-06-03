import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Scrum? Roles, Sprints & Ceremonies | QUANT LAB USA",
    description:
        "Scrum is an Agile framework that organizes work into fixed-length sprints with defined roles and ceremonies. Plain-English definition of sprints, the product owner, stand-ups, and more — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-scrum" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Scrum",
    description:
        "Scrum is an Agile framework for delivering software in fixed-length iterations called sprints, structured around defined roles, a prioritized backlog, and a small set of recurring ceremonies.",
    url: "https://quantlabusa.dev/glossary/what-is-scrum",
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
            name: "What is Scrum?",
            item: "https://quantlabusa.dev/glossary/what-is-scrum",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is Scrum in simple terms?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Scrum is a structured way of running Agile software work. A small team commits to a set of tasks for a short, fixed period called a sprint, meets briefly each day to stay aligned, and reviews the results at the end before planning the next sprint.",
            },
        },
        {
            "@type": "Question",
            name: "What is a sprint in Scrum?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A sprint is a fixed-length iteration, usually one to four weeks, during which the team delivers a usable increment of working software. The sprint length stays constant so the team can build a reliable sense of how much it can accomplish.",
            },
        },
        {
            "@type": "Question",
            name: "What are the three roles in Scrum?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The product owner owns the backlog and decides what gets built and in what order. The scrum master facilitates the process and removes blockers. The developers are the cross-functional team that builds the increment each sprint.",
            },
        },
        {
            "@type": "Question",
            name: "What are the Scrum ceremonies?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "There are four: sprint planning at the start, a short daily stand-up, a sprint review to demonstrate the increment, and a sprint retrospective to improve how the team works. Together they create a predictable rhythm.",
            },
        },
        {
            "@type": "Question",
            name: "Is Scrum the same as Agile?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Agile is the broad philosophy of iterative, feedback-driven development. Scrum is one specific framework that implements Agile with particular roles, sprints, and ceremonies. You can practice Agile through Scrum, Kanban, or other approaches.",
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
                        <li className="text-gray-300">What is Scrum?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Methodology
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is Scrum?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Scrum is the most widely used Agile framework: it organizes software work into fixed-length iterations called sprints, run by a small cross-functional team with three defined roles and a handful of recurring ceremonies that create a predictable, inspect-and-adapt rhythm.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What Scrum means</h2>
                    <p>
                        If&nbsp;
                        <Link href="/glossary/what-is-agile" className="text-sky-400 hover:underline">Agile</Link> is the philosophy, Scrum is one concrete way to live it. Where Agile says &quot;deliver in small increments and respond to change,&quot; Scrum supplies the actual machinery: who does what, how long an iteration lasts, and which meetings keep everyone aligned. It is a lightweight framework, not a heavy process — the rulebook fits on a few pages — but those few rules give a team enough structure to ship reliably.
                    </p>
                    <p>
                        The defining unit is the <strong>sprint</strong>: a fixed window, typically one to four weeks, in which the team commits to a chunk of work and delivers a usable increment by the end. Keeping the length constant is deliberate. Over a few sprints the team learns roughly how much it can finish, which makes planning and forecasting far more honest than open-ended estimates.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the term came from</h2>
                    <p>
                        The name comes from rugby, where a &quot;scrum&quot; is the tight formation a team uses to restart play and move the ball forward together. The metaphor was borrowed in a 1986 Harvard Business Review article by Takeuchi and Nonaka about fast, cross-functional product teams. Ken Schwaber and Jeff Sutherland then developed it into a formal software framework in the early 1990s and presented it publicly in 1995.
                    </p>
                    <p>
                        Scrum predates the 2001 Agile Manifesto, but it became one of the flagship ways to implement Agile values and is today the most adopted framework by a wide margin. The official rules live in a short document called the Scrum Guide, which Schwaber and Sutherland have periodically revised to keep it lean.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How Scrum works</h2>
                    <p>
                        Scrum defines <strong>three roles</strong>. The <strong>product owner</strong> owns the backlog and decides what gets built and in what priority, acting as the voice of the customer and the business. The <strong>scrum master</strong> facilitates the process, coaches the team, and clears away blockers. The <strong>developers</strong> are the cross-functional group that actually designs, builds, and tests the increment. Work flows from a prioritized <strong>product backlog</strong> into a focused <strong>sprint backlog</strong> the team commits to for the iteration.
                    </p>
                    <p>
                        Around that sit <strong>four ceremonies</strong>. <strong>Sprint planning</strong> opens the sprint by selecting what the team will build. A brief <strong>daily stand-up</strong> keeps everyone synchronized and surfaces blockers within a day. The <strong>sprint review</strong> demonstrates the working increment to stakeholders and gathers feedback. And the <strong>retrospective</strong> turns the team&apos;s attention on itself, asking what to improve next time. That last meeting is what makes Scrum a learning system rather than a fixed routine.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When Scrum matters</h2>
                    <p>
                        Scrum fits teams that benefit from rhythm and predictability — a group of several engineers building a product over many months, where regular checkpoints and a clear backlog keep everyone pulling in the same direction. The cadence makes it easy for a founder or stakeholder to see steady progress and reprioritize between sprints without derailing the team mid-iteration.
                    </p>
                    <p>
                        It fits less well for very small teams or highly unpredictable, interrupt-driven work, where the overhead of four ceremonies can outweigh the benefit and a flow-based approach like Kanban is often lighter. The most common failure mode is <strong>cargo-cult Scrum</strong>: a team adopts the meetings and the vocabulary but ignores the empirical heart of it, holding stand-ups that are really status reports and skipping the retrospective that was supposed to drive improvement. Scrum without inspection and adaptation is just meetings.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We borrow the parts of Scrum that earn their keep and leave the rest. For a small senior team building&nbsp;
                        <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom business software</Link>, that usually means short sprints, a tightly prioritized backlog that the client effectively acts as product owner over, and a regular review where you see working software rather than a status slide. We do not impose a heavyweight ceremony schedule on a three-person engagement where it would just be theater.
                    </p>
                    <p>
                        Our pragmatic view is that the framework serves the work, not the other way around. The genuinely valuable ideas in Scrum — a fixed cadence, a single prioritized list, demonstrating real increments, and a standing habit of asking how to improve — map cleanly onto the&nbsp;
                        <Link href="/glossary/what-is-agile" className="text-sky-400 hover:underline">Agile</Link> way we already work. What we avoid is process for its own sake, which quietly adds&nbsp;
                        <Link href="/glossary/what-is-technical-debt" className="text-sky-400 hover:underline">overhead</Link> without adding value. The result is a delivery rhythm that keeps a founder informed and the project honest.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["build-vs-buy", "saas"]}
                        pinned={["build-vs-buy-software-2026", "custom-crm-development-guide", "custom-crm-vs-salesforce-vs-hubspot-2026"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-agile" className="text-sky-400 hover:underline">What is Agile?</Link></li>
                        <li><Link href="/glossary/what-is-a-design-sprint" className="text-sky-400 hover:underline">What is a design sprint?</Link></li>
                        <li><Link href="/glossary/what-is-technical-debt" className="text-sky-400 hover:underline">What is technical debt?</Link></li>
                        <li><Link href="/glossary/what-is-an-mvp" className="text-sky-400 hover:underline">What is an MVP?</Link></li>
                        <li><Link href="/glossary/what-is-product-market-fit" className="text-sky-400 hover:underline">What is product-market fit?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If you want a delivery rhythm that keeps you informed without drowning the team
                        in ceremony, book a 30-minute conversation, not a pitch.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-scrum" />
                        <Link href="/services/custom-business-software" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Custom business software
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
