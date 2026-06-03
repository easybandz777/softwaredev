import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Agile? Definition + Core Principles | QUANT LAB USA",
    description:
        "Agile is an iterative approach to building software in small, frequent increments with constant feedback. Plain-English definition, the Agile Manifesto, and how it works in practice — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-agile" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Agile",
    description:
        "Agile is an iterative approach to software development in which work is delivered in small, frequent increments, guided by continuous customer feedback and a willingness to adapt the plan as understanding improves.",
    url: "https://quantlabusa.dev/glossary/what-is-agile",
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
            name: "What is Agile?",
            item: "https://quantlabusa.dev/glossary/what-is-agile",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is Agile in simple terms?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Agile is a way of building software in small, frequent steps instead of one giant launch. You ship a little, get feedback, and adjust the plan, repeating that loop so the product improves continuously and surprises surface early rather than at the end.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between Agile and Waterfall?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Waterfall plans the entire project up front and builds it in sequential phases, delivering everything at the end. Agile delivers working software in short cycles and expects the plan to evolve as the team learns, trading certainty of scope for adaptability.",
            },
        },
        {
            "@type": "Question",
            name: "Is Agile the same as Scrum?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Agile is the broad philosophy described in the Agile Manifesto. Scrum is one specific framework that implements Agile ideas with defined roles, sprints, and ceremonies. Kanban is another. You can be Agile without using Scrum.",
            },
        },
        {
            "@type": "Question",
            name: "What are the core values of Agile?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The Agile Manifesto values individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, and responding to change over following a plan.",
            },
        },
        {
            "@type": "Question",
            name: "Does Agile mean no planning or documentation?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Agile values working software and responding to change more highly than exhaustive up-front documentation, but it still involves planning and documentation. The point is to keep them lightweight and useful rather than treating a fixed plan as sacred.",
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
                        <li className="text-gray-300">What is Agile?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Methodology
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is Agile?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Agile is an iterative approach to building software in which work is delivered in small, frequent increments — guided by continuous customer feedback and a deliberate willingness to change the plan as the team learns — rather than designed in full up front and built in one long sequence.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What Agile means</h2>
                    <p>
                        At its core, Agile is a bet about uncertainty: that nobody can fully specify a complex piece of software before building it, so the smartest move is to ship something small, watch how real users respond, and let that feedback steer the next step. Instead of a single launch at the end of a year-long plan, an Agile team produces working software every couple of weeks and treats each increment as a chance to learn.
                    </p>
                    <p>
                        This stands in contrast to the older <strong>Waterfall</strong> model, where requirements, design, build, and testing happen as sequential phases and the finished product appears only at the end. Waterfall optimizes for certainty of scope; Agile optimizes for adaptability, accepting that the destination will shift as understanding improves. The trade-off is real, and which one fits depends on how well the problem is understood at the outset.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the term came from</h2>
                    <p>
                        Agile was formalized in 2001, when seventeen software practitioners met in Snowbird, Utah, and wrote the <strong>Agile Manifesto</strong>. They were reacting against heavyweight, documentation-driven processes that often produced software nobody wanted by the time it shipped. The manifesto distilled their shared beliefs into four values: individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, and responding to change over following a plan.
                    </p>
                    <p>
                        Crucially, the manifesto says there is value in the items on both sides — it favors the left, but does not discard the right. That nuance is routinely lost. &quot;Agile&quot; quickly became an umbrella term, and a whole ecosystem of frameworks grew up under it, most prominently&nbsp;
                        <Link href="/glossary/what-is-scrum" className="text-sky-400 hover:underline">Scrum</Link> and Kanban, each offering a concrete way to put the values into practice.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How Agile works in practice</h2>
                    <p>
                        In practice, an Agile team breaks work into small, independently valuable pieces — often called user stories — and pulls them through short delivery cycles. Each cycle ends with something that actually works and can be shown to users, and the team uses what it learns to reprioritize the next cycle. Priorities live in a continuously reordered backlog rather than a frozen spec, so the most valuable work rises to the top as circumstances change.
                    </p>
                    <p>
                        Frequent feedback is the engine. By putting working software in front of users every couple of weeks, the team catches misunderstandings while they are cheap to fix, instead of discovering at launch that the requirements were wrong. Engineering practices like automated testing, continuous integration, and&nbsp;
                        <Link href="/glossary/what-is-feature-flagging" className="text-sky-400 hover:underline">feature flagging</Link> make this rhythm sustainable, because they let a team ship often without breaking what already works.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When Agile matters</h2>
                    <p>
                        Agile shines when the problem is poorly understood or likely to change — which describes almost every startup building something new. When you are still hunting for&nbsp;
                        <Link href="/glossary/what-is-product-market-fit" className="text-sky-400 hover:underline">product-market fit</Link>, the ability to ship, measure, and pivot quickly is worth far more than a detailed plan that will be obsolete in a month. Agile lets you treat the roadmap as a hypothesis rather than a promise.
                    </p>
                    <p>
                        It matters less, or needs adaptation, when requirements are genuinely fixed and well known — a regulated integration with an immovable specification, for instance. Agile is also frequently misapplied: teams adopt the ceremonies and vocabulary without the underlying values, ending up with daily meetings and sprint labels but none of the responsiveness that made the approach valuable. Going through the motions is not the same as being Agile.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We work in tight iterations because it protects our clients&apos; budgets, not because it is fashionable. Shipping a working slice every couple of weeks means a founder sees real progress they can click on, course-corrects early, and never discovers six months in that we built the wrong thing. For an&nbsp;
                        <Link href="/glossary/what-is-an-mvp" className="text-sky-400 hover:underline">MVP</Link> especially, that feedback loop is the entire point — the goal is to learn what the market wants as cheaply as possible.
                    </p>
                    <p>
                        Our pragmatic stance is that Agile is a means, not a religion. We keep the parts that create value — frequent working software, a living backlog, fast feedback — and skip the ritual for its own sake. We still plan and document; we just keep it lightweight enough that the plan can change without a crisis. When we build&nbsp;
                        <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom business software</Link>, that iterative cadence is also what lets us absorb the inevitable &quot;can it also do this?&quot; without blowing up the timeline.
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
                        <li><Link href="/glossary/what-is-scrum" className="text-sky-400 hover:underline">What is Scrum?</Link></li>
                        <li><Link href="/glossary/what-is-a-design-sprint" className="text-sky-400 hover:underline">What is a design sprint?</Link></li>
                        <li><Link href="/glossary/what-is-technical-debt" className="text-sky-400 hover:underline">What is technical debt?</Link></li>
                        <li><Link href="/glossary/what-is-an-mvp" className="text-sky-400 hover:underline">What is an MVP?</Link></li>
                        <li><Link href="/glossary/what-is-product-market-fit" className="text-sky-400 hover:underline">What is product-market fit?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If you want a team that ships working software every couple of weeks — so you
                        course-correct early — book a 30-minute conversation, not a pitch.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-agile" />
                        <Link href="/services/custom-business-software" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Custom business software
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
