import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { FlaskConical, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "QA & Test Automation: Strategy, CI Testing & E2E | QUANT LAB USA",
    description:
        "QA and test automation: a test strategy, CI testing gates, and end-to-end suites that stop regressions. Founder-led, fixed-quote, USA. Call (770) 652-1282 for a free scope call.",
    slug: "services/qa-and-test-automation",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "QA and Test Automation",
    name: "QA and Test Automation",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Founder-led QA and test automation for teams that ship with their fingers crossed. We define a test strategy matched to your risk, build fast and reliable unit, integration, and end-to-end suites, and wire them into CI so a broken build is caught before it reaches users. You own the tests and the pipeline.",
    url: "https://quantlabusa.dev/services/qa-and-test-automation",
    offers: {
        "@type": "Offer",
        priceRange: "$8,000-$70,000",
        priceCurrency: "USD",
        description: "Fixed-fee scope per engagement",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "QA and Test Automation", item: "https://quantlabusa.dev/services/qa-and-test-automation" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Where should we start if we have almost no tests?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Not by chasing a coverage percentage. We start with the handful of flows where a bug actually costs you money or customers — checkout, signup, the core feature — and write end-to-end tests around those first. That small set catches the regressions that matter most, and we build out from there in priority order rather than testing trivial code to hit a number.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between unit, integration, and end-to-end tests?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Unit tests check a single function in isolation and run in milliseconds. Integration tests check that pieces work together — a route, a database query, an external call. End-to-end tests drive the real application the way a user would, in a browser. A healthy suite uses all three: many fast unit tests, fewer integration tests, and a focused set of end-to-end tests on the critical journeys.",
            },
        },
        {
            "@type": "Question",
            name: "Our test suite is flaky and everyone ignores it — can you fix that?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, and a flaky suite is worse than no suite because the team learns to ignore red. We hunt down the causes — race conditions, shared state, timing assumptions, brittle selectors — and rebuild the unreliable tests so green means green. A trustworthy suite that runs in minutes is the goal, not a giant one nobody believes.",
            },
        },
        {
            "@type": "Question",
            name: "How does testing fit into our CI pipeline?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Tests should gate every merge automatically. We wire the suite into GitHub Actions, GitLab CI, or CircleCI so a pull request cannot merge until it passes, with fast feedback for developers and end-to-end runs on a deployed preview. A regression gets caught in the pull request, not in production.",
            },
        },
        {
            "@type": "Question",
            name: "Do you do manual QA, or only automation?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Mostly automation, because automated tests run on every change for free while manual passes do not scale. We will do manual exploratory testing for areas that are genuinely hard to automate or for a one-time release hardening, but the lasting deliverable is an automated suite your team owns and runs continuously.",
            },
        },
        {
            "@type": "Question",
            name: "How long does it take to get a real test suite in place?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "End-to-end coverage of your critical flows plus a CI gate typically lands in 3 to 6 weeks. Broader coverage across the codebase, with integration and unit layers and a flaky-test cleanup, runs 6 to 12 weeks. We get the highest-value tests guarding your riskiest paths first.",
            },
        },
    ],
};

export default function QaAndTestAutomationPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">QA and Test Automation</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-rose-500 to-pink-400 mb-6">
                        <FlaskConical className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QA and Test Automation for Teams That Ship Scared
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        A test strategy matched to your real risk, fast end-to-end and integration suites, and CI gates that catch regressions in the pull request instead of in production — so deploying stops feeling like a gamble.
                    </p>
                    <ConsultationCTA label="Scope a Test Strategy" service="QA and Test Automation" source="services-qa-automation" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why deploys feel like a gamble</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A lot of teams ship by clicking around the app, holding their breath, and hoping nothing important broke. Every release is a small act of faith because there is no safety net — fixing one thing quietly breaks another, and you find out from a customer. The usual reaction is to slow down, add manual sign-offs, and ship less often, which makes the codebase scarier to touch and the problem worse.
                        </p>
                        <p>
                            Automated testing replaces faith with evidence. The point is not a coverage badge or testing every trivial function; it is a focused suite that guards the flows where a bug actually costs you — and runs automatically on every change so a regression is caught before it merges. Done well, good tests let you move faster, not slower, because the safety net means you can change code confidently instead of tiptoeing around it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <ul className="space-y-3">
                        {[
                            "A test strategy that targets the flows where bugs actually cost money, not a blanket coverage number",
                            "End-to-end tests with Playwright or Cypress driving the real app the way a user would",
                            "Integration tests for routes, database queries, and external service calls",
                            "Fast unit tests on the logic that benefits most from isolated verification",
                            "CI testing gates so a pull request cannot merge until the suite passes",
                            "A cleanup of flaky, unreliable tests so green actually means green",
                            "Visual regression and accessibility checks where the interface matters",
                            "Load and performance testing for the endpoints that have to stay fast under traffic",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A one-week test audit comes first. We map your critical flows, find where bugs have actually hurt you, review whatever tests exist, and write a test strategy that says what to cover, in what order, and with which type of test. The audit is billed separately at $2,500 so you can decide before committing, and the strategy document is useful even if your own team executes it.
                        </p>
                        <p>
                            From there we build the highest-value tests first — usually end-to-end coverage of the riskiest journeys — and wire them into CI so they start paying off immediately. We work in priority order rather than chasing a coverage percentage, and we hand off the suite, the pipeline configuration, and the patterns so your developers can keep extending it. Optional retainer for ongoing test maintenance.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Process &amp; timeline</h2>
                    <ul className="space-y-3">
                        {[
                            "Week 1: Test audit — critical-flow mapping, risk review, test strategy with prioritized coverage plan",
                            "Week 2-3: Critical paths — end-to-end tests on the highest-risk journeys, wired into CI",
                            "Week 4-6: Breadth — integration and unit layers across the priority areas of the codebase",
                            "Week 7-12: Hardening — flaky-test cleanup, visual and accessibility checks, performance tests",
                            "Optional retainer: keep the suite green and extend coverage as the product changes",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Playwright",
                            "Cypress",
                            "Vitest + Jest",
                            "Testing Library",
                            "GitHub Actions",
                            "GitLab CI + CircleCI",
                            "k6 load testing",
                            "Axe accessibility",
                            "Preview deployments",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        The CI gating side overlaps with our <Link href="/services/devops-engineering" className="text-rose-400 hover:underline">DevOps engineering</Link> work, and a strong test suite underpins every <Link href="/services/saas-platform-development" className="text-rose-400 hover:underline">SaaS platform</Link> we ship. Background reading: <Link href="/glossary/what-is-ci-cd" className="text-rose-400 hover:underline">what is CI/CD</Link>. You own the tests and the pipeline.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we keep it honest</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A test suite can be busywork or a safety net, and the difference is what you choose to test. We do not pad coverage numbers by testing getters and setters, and we will not bill you to write a thousand low-value tests. We aim every test at a real risk — a flow whose failure loses revenue, corrupts data, or breaks the core experience — so the suite earns its keep and stays small enough to run fast and trust.
                        </p>
                        <p>
                            We dogfood this. The same CI testing gates we ship to clients run on our own systems: tests on the critical paths, a pipeline that blocks a broken merge, and a suite kept lean enough that the team actually believes it. We build your tests the way we want our own — focused on what matters and reliable enough that red means stop.
                        </p>
                        <p>
                            Founder-led from audit through handoff, delivered remotely to clients across the United States from our base in Macon, Georgia.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fixed-fee per scope. Typical ranges:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>One-week test audit with a prioritized test strategy: $2,500 flat</li>
                            <li>End-to-end coverage of critical flows plus a CI gate: $8k – $20k</li>
                            <li>Broad suite with integration, unit, and end-to-end layers: $22k – $45k</li>
                            <li>Flaky-suite rescue plus full coverage and performance testing: $40k – $70k</li>
                            <li>One-time release hardening before a major launch: $10k – $25k</li>
                        </ul>
                        <p>
                            Coverage built in priority order so the highest-value tests land first. Optional retainer for ongoing test maintenance.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "A test strategy aimed at your real risk, not a coverage vanity metric",
                            "Reliable end-to-end, integration, and unit suites in your GitHub repository",
                            "CI gates that block a broken merge automatically",
                            "A flaky-test cleanup so green means green",
                            "Fast feedback for developers and full runs on deployed previews",
                            "Performance and accessibility checks where they matter",
                            "Documented patterns so your team can extend the suite",
                            "Optional retainer to keep the suite green as the product evolves",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Where should we start if we have almost no tests?",
                                a: "Not by chasing a coverage percentage. We start with the handful of flows where a bug actually costs you money or customers — checkout, signup, the core feature — and write end-to-end tests around those first. That small set catches the regressions that matter most, and we build out from there in priority order rather than testing trivial code to hit a number.",
                            },
                            {
                                q: "What is the difference between unit, integration, and end-to-end tests?",
                                a: "Unit tests check a single function in isolation and run in milliseconds. Integration tests check that pieces work together — a route, a database query, an external call. End-to-end tests drive the real application the way a user would, in a browser. A healthy suite uses all three: many fast unit tests, fewer integration tests, and a focused set of end-to-end tests on the critical journeys.",
                            },
                            {
                                q: "Our test suite is flaky and everyone ignores it — can you fix that?",
                                a: "Yes, and a flaky suite is worse than no suite because the team learns to ignore red. We hunt down the causes — race conditions, shared state, timing assumptions, brittle selectors — and rebuild the unreliable tests so green means green. A trustworthy suite that runs in minutes is the goal, not a giant one nobody believes.",
                            },
                            {
                                q: "How does testing fit into our CI pipeline?",
                                a: "Tests should gate every merge automatically. We wire the suite into GitHub Actions, GitLab CI, or CircleCI so a pull request cannot merge until it passes, with fast feedback for developers and end-to-end runs on a deployed preview. A regression gets caught in the pull request, not in production.",
                            },
                            {
                                q: "Do you do manual QA, or only automation?",
                                a: "Mostly automation, because automated tests run on every change for free while manual passes do not scale. We will do manual exploratory testing for areas that are genuinely hard to automate or for a one-time release hardening, but the lasting deliverable is an automated suite your team owns and runs continuously.",
                            },
                            {
                                q: "How long does it take to get a real test suite in place?",
                                a: "End-to-end coverage of your critical flows plus a CI gate typically lands in 3 to 6 weeks. Broader coverage across the codebase, with integration and unit layers and a flaky-test cleanup, runs 6 to 12 weeks. We get the highest-value tests guarding your riskiest paths first.",
                            },
                        ].map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["stack", "build-vs-buy", "saas"]}
                        heading="Quality & engineering reading"
                        pinned={["2026-state-of-custom-software-development", "building-multi-tenant-saas-postgres-rls"]}
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "devops-engineering", title: "DevOps Engineering", desc: "The CI/CD pipeline your test gates run inside." },
                            { slug: "saas-platform-development", title: "SaaS Platform Development", desc: "Full product builds with testing baked into the spec." },
                            { slug: "web-app-pentest", title: "Web App Pentest", desc: "Security testing that complements functional QA." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-rose-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-rose-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        Test automation for teams in <Link href="/industries/saas" className="text-rose-400 hover:underline">SaaS</Link>, <Link href="/industries/fintech" className="text-rose-400 hover:underline">fintech</Link>, and <Link href="/industries/healthcare" className="text-rose-400 hover:underline">healthcare</Link>. To scope a test strategy, <Link href="/contact" className="text-rose-400 hover:underline">contact us</Link> or review <Link href="/pricing" className="text-rose-400 hover:underline">pricing</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-rose-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">QA &amp; Test Automation — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team serving clients nationwide. Test automation runs remotely against your repository and preview environments; in-person working sessions are available in Atlanta and the Southeast.
                    </p>
                    <p className="text-gray-400 leading-relaxed max-w-3xl">
                        Founder-led from the test audit through handoff. Browse the full <Link href="/services" className="text-rose-400 hover:underline">services lineup</Link> or read about our <Link href="/services/api-development" className="text-rose-400 hover:underline">API development</Link> work, where contract testing keeps integrations honest.
                    </p>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Stop shipping with your fingers crossed.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. We will map your riskiest flows and lay out a test strategy that makes deploys boring again.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="QA and Test Automation" source="services-qa-automation" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
