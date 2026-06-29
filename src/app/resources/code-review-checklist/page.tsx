import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { GitPullRequest, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "code-review-checklist";
const TITLE = "The Code Review Checklist";
const PDF_FILENAME = "code-review-checklist.pdf";

export const metadata: Metadata = {
    title: "Code Review Checklist (Practical, Free) | QUANT LAB USA",
    description:
        "A practical pull-request review checklist covering correctness, security, readability, tests, performance, and dependencies — so reviews catch real problems instead of bikeshedding style.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "Code Review Checklist (Practical, Free) | QUANT LAB USA",
        description:
            "A pull-request review checklist: correctness, security, readability, tests, performance, and dependencies — so reviews catch real problems, not just style.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Code Review Checklist (Practical, Free) | QUANT LAB USA",
        description:
            "Correctness, security, readability, tests, performance, and dependencies — what to actually check in a pull request.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "A practical code review checklist covering correctness and edge cases, security, readability and maintainability, tests, performance, and dependencies for pull-request review.",
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
            name: "What is the most important thing to check in a code review?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Correctness first: does the change actually do what it claims, including the edge cases, error paths, and boundary conditions the happy path skips? Style and naming matter, but a readable function that returns the wrong answer is still a bug. Lead with correctness and security, then move to readability, tests, and performance.",
            },
        },
        {
            "@type": "Question",
            name: "How do I stop code reviews from turning into style arguments?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Automate style. Run a formatter and a linter in CI so whitespace, import order, and formatting are settled before a human ever looks at the diff. That frees the review to focus on the things a tool cannot judge — correctness, security, design, and whether the tests actually prove the change works.",
            },
        },
        {
            "@type": "Question",
            name: "How long should a code review take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Long enough to understand the change, which is why small pull requests get better reviews. A focused diff of a few hundred lines can be reviewed carefully in well under an hour; a thousand-line PR usually gets a rubber stamp because nobody can hold it all in their head. Keep changes small and the checklist stays fast.",
            },
        },
        {
            "@type": "Question",
            name: "Should reviewers check security on every pull request?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, at least at the checklist level — untrusted input handling, authorization on new endpoints, secrets, and injection risks. A review is not a substitute for a real security audit or a penetration test, but catching the obvious issues in review is far cheaper than catching them in production or in an incident.",
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
        { "@type": "ListItem", position: 3, name: "Code Review Checklist", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

const correctnessItems = [
    "Confirm the change does what the pull request description and the linked ticket say it does — and only that. Scope creep hides bugs.",
    "Walk the edge cases: empty inputs, zero, negative numbers, very large values, null and undefined, and unicode or unusual strings.",
    "Check every error path, not just the happy path. What happens when the API call fails, the row is missing, or the timeout fires?",
    "Look for off-by-one and boundary mistakes in loops, slices, ranges, and pagination — the classic source of silent wrong answers.",
    "Verify concurrency assumptions: shared state, race conditions, and whether two requests hitting this code at once stay correct.",
    "Make sure failures fail loudly and safely — no swallowed exceptions, no error states that leave data half-written.",
];

const securityItems = [
    "Treat all external input as untrusted: validate and sanitize anything from users, query params, headers, webhooks, or third-party APIs.",
    "Check authorization on every new or changed endpoint — confirm the code verifies the caller may act on this specific object, not just that they are logged in.",
    "Look for injection risks: parameterized queries instead of string-built SQL, escaped output instead of raw interpolation into HTML.",
    "Confirm no secrets, tokens, or credentials are hardcoded, logged, or committed — they belong in environment configuration, not the diff.",
    "Verify sensitive data is not leaked in responses, error messages, or logs, including stack traces and internal identifiers.",
    "Flag new dependencies and external calls for their security posture, and ensure anything handling auth uses a vetted library, not a homemade scheme.",
];

const readabilityItems = [
    "Check that names say what they mean: variables, functions, and types should read clearly without a comment to decode them.",
    "Watch for functions doing too much — a single responsibility per unit keeps the change reviewable and the code testable.",
    "Prefer clarity over cleverness; a clever one-liner the next engineer has to puzzle over is a maintenance cost, not a win.",
    "Confirm comments explain why, not what. The code already says what it does; comments should capture the reasoning a reader cannot infer.",
    "Look for duplicated logic that should be shared, and premature abstraction that should not — both make the codebase harder to change.",
    "Make sure the change fits the surrounding conventions; consistency is what lets a reviewer trust the parts they did not read line by line.",
];

const testItems = [
    "Confirm the change ships with tests, and that those tests would actually fail if the new behavior broke — assert on outcomes, not just that nothing threw.",
    "Check that the edge cases and error paths from the correctness section are covered, not only the happy path.",
    "For a bug fix, look for a regression test that reproduces the original bug, so it cannot quietly come back later.",
    "Watch for brittle tests tied to implementation details or wall-clock time; they create false failures and erode trust in the suite.",
    "Verify tests are deterministic and isolated — no shared state, no ordering dependencies, no reliance on a live external service.",
    "Make sure the tests are readable themselves; a test nobody understands is a test nobody will maintain.",
];

const performanceItems = [
    "Scan for N+1 query patterns — a database call inside a loop is the single most common avoidable performance problem.",
    "Check that queries hitting large tables are indexed and bounded, and that list endpoints paginate rather than returning everything.",
    "Look for unnecessary work in hot paths: repeated computation that could be hoisted, or data fetched and then discarded.",
    "Confirm expensive or slow operations (large uploads, third-party calls, heavy reports) run async or in a background job, not in the request path.",
    "Weigh added caching for correctness, not just speed — a cache with no invalidation story trades a speed problem for a staleness bug.",
    "Right-size the concern: optimize what the workload actually exercises, and do not trade readability for micro-optimizations that never run hot.",
];

const dependencyItems = [
    "Question every new dependency: is it worth the maintenance, supply-chain, and bundle-size cost, or would a few lines of your own code do?",
    "Check that added packages are reputable and maintained — recent releases, real usage, and no obvious abandonment or single-maintainer risk.",
    "Confirm versions are pinned and the lockfile is updated and committed, so builds are reproducible across machines and CI.",
    "Review the license of anything new for compatibility with how the project ships and is distributed.",
    "Watch for dependencies that duplicate something already in the project, and for transitive bloat a single small package can drag in.",
    "Make sure new packages are scoped to where they are needed, and that nothing pulls a dev-only tool into the production bundle.",
];

const sections = [
    { heading: "1. Correctness & edge cases", items: correctnessItems },
    { heading: "2. Security", items: securityItems },
    { heading: "3. Readability & maintainability", items: readabilityItems },
    { heading: "4. Tests", items: testItems },
    { heading: "5. Performance", items: performanceItems },
    { heading: "6. Dependencies", items: dependencyItems },
];

export default function CodeReviewChecklistPage() {
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
                        <li className="text-gray-300">Code Review Checklist</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <GitPullRequest className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                Pull-request review · correctness, security, readability, tests, performance, dependencies
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Review code for the problems that actually matter.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A practical checklist for reviewing a pull request — correctness and edge cases,
                                security, readability, tests, performance, and dependencies. Use it to catch real
                                defects and design problems instead of arguing about whitespace, and to make sure
                                every reviewer on the team is looking for the same things.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>6 sections, practical checks</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>Read in under an hour</span></div>
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
                                successHeadline="The Code Review Checklist is yours."
                                relatedServiceHref="/services/qa-and-test-automation"
                                relatedServiceLabel="QA & test automation services"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Why a code review checklist
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Code review is one of the highest-leverage habits a team has, and it is also where
                                that leverage quietly leaks away. Without a shared idea of what a review is for, two
                                reviewers look at the same diff and check completely different things — one
                                rewrites the variable names, the other waves through a missing authorization check.
                                The result is reviews that feel thorough but miss the defects that actually reach
                                production. A checklist turns review from a matter of taste into a repeatable pass
                                everyone runs the same way.
                            </p>
                            <p>
                                This is the checklist we apply on every change we ship, and the discipline that sits
                                behind our{" "}
                                <Link href="/services/qa-and-test-automation" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    QA and test automation
                                </Link>{" "}
                                work. None of it is exotic — it is the boring, ordered attention that keeps a
                                codebase from accumulating{" "}
                                <Link href="/glossary/what-is-technical-debt" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    technical debt
                                </Link>{" "}
                                one rushed merge at a time. The single biggest force multiplier is automation:
                                let CI handle formatting and linting so humans spend their attention on the things
                                a tool cannot judge.
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
                                Read the change in priority order. Start with correctness and security, because a
                                defect or a vulnerability is the most expensive thing to let through; only then move
                                to readability, tests, performance, and dependencies. Working top-down means that if
                                a review runs out of time, the most important checks already happened. Keep pull
                                requests small so the whole checklist stays fast — a focused diff gets a careful
                                review, while a thousand-line change gets a rubber stamp because nobody can hold it
                                all in their head.
                            </p>
                            <p>
                                Push everything mechanical into the pipeline. A formatter and a linter settle
                                whitespace, import order, and style before a human ever opens the diff, so review
                                comments stay about substance. Treat the checklist as a floor, not a ceiling: a
                                review catches the obvious security mistakes, but it is not a substitute for a real{" "}
                                <Link href="/services/penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    penetration test
                                </Link>{" "}
                                or a{" "}
                                <Link href="/services/saas-security-audit" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    security audit
                                </Link>
                                . Finally, keep the tone constructive — phrase comments as questions and reasons, not
                                verdicts, so review stays a way the team learns rather than a gate it dreads.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                This is not a document we wrote for a blog post — it is how we actually ship. Every
                                change on a{" "}
                                <Link href="/services/custom-business-software" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom software
                                </Link>{" "}
                                engagement goes through review against these checks, backed by a{" "}
                                <Link href="/glossary/what-is-ci-cd" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    CI/CD
                                </Link>{" "}
                                pipeline that runs the formatter, linter, and test suite before anyone merges. The
                                same standard carries into our{" "}
                                <Link href="/services/qa-and-test-automation" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    QA and test automation
                                </Link>{" "}
                                and{" "}
                                <Link href="/services/web-app-pentest" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    web app penetration testing
                                </Link>{" "}
                                work, where the security section of this list becomes a much deeper audit.
                            </p>
                            <p>
                                If you have inherited a codebase with no review discipline and want help putting one
                                in place, or you want a second set of eyes on the quality of work a vendor is
                                shipping you, see{" "}
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
                                    q: "What is the most important thing to check in a code review?",
                                    a: "Correctness first: does the change actually do what it claims, including the edge cases, error paths, and boundary conditions the happy path skips? Style and naming matter, but a readable function that returns the wrong answer is still a bug. Lead with correctness and security, then move to readability, tests, and performance.",
                                },
                                {
                                    q: "How do I stop code reviews from turning into style arguments?",
                                    a: "Automate style. Run a formatter and a linter in CI so whitespace, import order, and formatting are settled before a human ever looks at the diff. That frees the review to focus on the things a tool cannot judge — correctness, security, design, and whether the tests actually prove the change works.",
                                },
                                {
                                    q: "How long should a code review take?",
                                    a: "Long enough to understand the change, which is why small pull requests get better reviews. A focused diff of a few hundred lines can be reviewed carefully in well under an hour; a thousand-line PR usually gets a rubber stamp because nobody can hold it all in their head. Keep changes small and the checklist stays fast.",
                                },
                                {
                                    q: "Should reviewers check security on every pull request?",
                                    a: "Yes, at least at the checklist level — untrusted input handling, authorization on new endpoints, secrets, and injection risks. A review is not a substitute for a real security audit or a penetration test, but catching the obvious issues in review is far cheaper than catching them in production or in an incident.",
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
                            <Link href="/resources/api-design-guidelines-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">API Design Guidelines Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The conventions a reviewer holds new API endpoints to.</p>
                            </Link>
                            <Link href="/resources/web-app-pentest-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Web App Pentest Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Go far deeper on the security section than a review can.</p>
                            </Link>
                            <Link href="/resources/software-project-estimate-worksheet" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Software Project Estimate Worksheet</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Budget review and test time into the plan from the start.</p>
                            </Link>
                            <Link href="/services/qa-and-test-automation" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">QA &amp; Test Automation</p>
                                <p className="text-xs text-gray-400 leading-relaxed">How we build the test discipline this checklist relies on.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Want better reviews on your codebase?
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                Whether you are setting up review discipline for the first time or want a second
                                opinion on the quality of work being shipped to you, we can help you put the
                                process, the CI checks, and the test coverage in place. See{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how engagements are priced
                                </Link>{" "}
                                or book a call.
                            </p>
                            <ConsultationCTA label="Book a 20-min call" source={`${SLUG}-resource`} service="QA & Test Automation" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
