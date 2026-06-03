import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is a Design Sprint? The 5-Day Process | QUANT LAB USA",
    description:
        "A design sprint is a five-day process for solving big problems and testing ideas with real users before writing production code. Plain-English definition of each day and when to run one — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-design-sprint" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Design Sprint",
    description:
        "A design sprint is a structured, time-boxed process, classically five days, for solving a critical problem by rapidly mapping, sketching, deciding, prototyping, and testing an idea with real users before committing to a full build.",
    url: "https://quantlabusa.dev/glossary/what-is-a-design-sprint",
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
            name: "What is a Design Sprint?",
            item: "https://quantlabusa.dev/glossary/what-is-a-design-sprint",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is a design sprint?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A design sprint is a structured, time-boxed process, classically five days, for solving a big product problem fast. A small team maps the challenge, sketches solutions, decides on one, builds a realistic prototype, and tests it with real users before writing production code.",
            },
        },
        {
            "@type": "Question",
            name: "Who invented the design sprint?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The design sprint was developed by Jake Knapp at Google Ventures, along with John Zeratsky and Braden Kowitz. They documented it in the 2016 book Sprint, drawing on design thinking and agile ideas.",
            },
        },
        {
            "@type": "Question",
            name: "What are the five days of a design sprint?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Monday maps the problem and picks a target. Tuesday sketches competing solutions. Wednesday decides which sketch to build and storyboards it. Thursday builds a realistic prototype. Friday tests that prototype with five real users.",
            },
        },
        {
            "@type": "Question",
            name: "How is a design sprint different from a Scrum sprint?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "They are unrelated despite the shared word. A Scrum sprint is a recurring multi-week development cycle that produces working software. A design sprint is a one-off, typically five-day workshop to validate an idea before building it.",
            },
        },
        {
            "@type": "Question",
            name: "When should a startup run a design sprint?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Run one when the stakes are high and the direction is uncertain — a major new feature, a risky pivot, or a brand-new product. It is most valuable for testing a big assumption cheaply before committing months of engineering to it.",
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
                        <li className="text-gray-300">What is a Design Sprint?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Methodology
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is a Design Sprint?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A design sprint is a structured, time-boxed process — classically five days — for solving a big product problem fast: a small team maps the challenge, sketches competing solutions, decides on one, builds a realistic prototype, and tests it with real users, all before a single line of production code is written.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What a design sprint means</h2>
                    <p>
                        A design sprint compresses what would normally take months of debate, design, and a half-built feature into a single focused week. The premise is that the most expensive way to test an idea is to build it, ship it, and wait to see if anyone uses it. A design sprint short-circuits that by producing a prototype convincing enough to test with real users in days — so you learn whether the idea is worth pursuing before committing serious engineering time and money.
                    </p>
                    <p>
                        The first thing to clear up is the name. A design sprint has nothing to do with a&nbsp;
                        <Link href="/glossary/what-is-scrum" className="text-sky-400 hover:underline">Scrum</Link> sprint despite the shared word. A Scrum sprint is a recurring, multi-week cycle that produces working, shippable software. A design sprint is a one-off, typically five-day workshop whose only output is validated learning and a throwaway prototype. One builds the product; the other decides whether the product is worth building.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it came from</h2>
                    <p>
                        The design sprint was developed by Jake Knapp at Google Ventures, working alongside John Zeratsky and Braden Kowitz, and documented in the 2016 book <em>Sprint</em>. Knapp had noticed that the best progress in teams came from a combination of focused individual work and hard deadlines, and he packaged that insight into a repeatable five-day recipe that GV ran with dozens of its portfolio companies.
                    </p>
                    <p>
                        The method draws on the broader tradition of <strong>design thinking</strong> — empathize, define, ideate, prototype, test — but gives it a strict schedule and a clear deliverable, which is part of why it spread so quickly. It pairs naturally with&nbsp;
                        <Link href="/glossary/what-is-agile" className="text-sky-400 hover:underline">Agile</Link> and lean-startup ideas: all three share the conviction that fast feedback from real users beats lengthy upfront planning.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How the five days work</h2>
                    <p>
                        The classic structure assigns one job to each day. <strong>Monday</strong> is for mapping: the team aligns on the long-term goal, diagrams the problem, and picks a single target to focus on. <strong>Tuesday</strong> is for sketching, where everyone individually draws competing solutions rather than brainstorming out loud. <strong>Wednesday</strong> is for deciding: the team critiques the sketches, votes, and storyboards the winning concept into a step-by-step plan.
                    </p>
                    <p>
                        <strong>Thursday</strong> is for prototyping — building a realistic facade of the idea, just enough to feel real to a user without being functional underneath. And <strong>Friday</strong> is for testing, interviewing five real users one at a time as they react to the prototype. By the end of the week the team has watched actual people use their idea and knows, with far more confidence than a meeting could provide, whether it is worth building for real. Modern practitioners often compress this into four days or even two, but the sequence stays the same.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        A design sprint earns its cost when the stakes are high and the direction is uncertain. A major new feature, a risky pivot, or a brand-new product line are ideal candidates, because the week-long investment is trivial compared to the months of engineering you might otherwise spend building the wrong thing. It is a tool for de-risking a big bet, which makes it especially useful for founders hunting&nbsp;
                        <Link href="/glossary/what-is-product-market-fit" className="text-sky-400 hover:underline">product-market fit</Link>.
                    </p>
                    <p>
                        It is overkill for small, obvious decisions where the answer is already clear, and it requires real commitment — clearing a team&apos;s calendar for a focused week and recruiting genuine target users to test with. Done half-heartedly, with the wrong people in the room or a prototype that does not feel real, it produces shallow feedback. A design sprint and an&nbsp;
                        <Link href="/glossary/what-is-an-mvp" className="text-sky-400 hover:underline">MVP</Link> often work in sequence: the sprint validates the concept in a week, and the MVP is the first real build of whatever survives that test.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We like the design sprint for the same reason we like an&nbsp;
                        <Link href="/glossary/what-is-an-mvp" className="text-sky-400 hover:underline">MVP</Link>: it is the cheapest way to avoid building the wrong thing. Before committing a founder&apos;s budget to months of engineering on a major new&nbsp;
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform</Link> or a risky feature, a focused sprint can answer the make-or-break question with a clickable prototype and a handful of user interviews. A week spent learning the idea does not land beats a quarter spent building it anyway.
                    </p>
                    <p>
                        Our pragmatic take is that we do not run sprints by the book for ceremony&apos;s sake. We adapt the format to the decision in front of you — sometimes a full five days, often a tighter version — and we are honest about when a sprint is genuinely worth it versus when the right move is simply to build a small slice and ship it. The goal is always the same: spend the least money necessary to learn the most about whether your idea works. If you are weighing how much to invest before validating demand, our&nbsp;
                        <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy framework</Link> is a useful companion.
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
                        <li><Link href="/glossary/what-is-an-mvp" className="text-sky-400 hover:underline">What is an MVP?</Link></li>
                        <li><Link href="/glossary/what-is-product-market-fit" className="text-sky-400 hover:underline">What is product-market fit?</Link></li>
                        <li><Link href="/glossary/what-is-agile" className="text-sky-400 hover:underline">What is Agile?</Link></li>
                        <li><Link href="/glossary/what-is-scrum" className="text-sky-400 hover:underline">What is Scrum?</Link></li>
                        <li><Link href="/glossary/what-is-technical-debt" className="text-sky-400 hover:underline">What is technical debt?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If you have a big bet to de-risk and want to test it with real users before
                        committing to a build, book a 30-minute conversation, not a pitch.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-design-sprint" />
                        <Link href="/services/saas-platform-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            SaaS platform development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
