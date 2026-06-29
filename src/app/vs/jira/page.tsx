import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Jira",
    title: "QUANT LAB USA vs Jira: Custom Workflow Tooling in 2026",
    description:
        "Jira is the default for engineering issue tracking and agile boards. When your real process lives outside dev and the configuration sprawls, custom workflow tooling wins. Honest 2026 comparison.",
    slug: "/vs/jira",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB USA vs Jira: Custom Workflow Tooling vs Issue Tracker in 2026",
    description:
        "Honest comparison of Jira against a custom-built workflow application. Feature matrix, configuration overhead, per-seat cost compounding, and the point where a purpose-built app beats a configured issue tracker.",
    url: "https://quantlabusa.dev/vs/jira",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Jira Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Custom Business Software", item: "https://quantlabusa.dev/services/custom-business-software" },
        { "@type": "ListItem", position: 3, name: "vs Jira", item: "https://quantlabusa.dev/vs/jira" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is custom workflow tooling a better fit than Jira?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom usually wins when the process you are tracking is not software development, your Jira instance has become a maze of custom fields, screens, and automation rules nobody fully understands, you need the workflow tightly fused with your own data, or per-seat pricing across non-engineering teams has passed the cost of a one-time build. For pure engineering issue tracking and sprint boards, Jira is hard to beat.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate our Jira projects to a custom app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Jira exposes a full REST API covering issues, custom fields, workflows, transitions, comments, and attachments, plus CSV export. We model the work items into a proper PostgreSQL schema with real states and constraints, port the automation rules into tested code, and rebuild the boards and screens your team relies on as application views.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to replace a Jira workflow?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "6 to 12 weeks for the first production release. A single project with a simple workflow is fast. A multi-project instance with interlinked issue types, heavy automation, and a wall of custom fields takes the upper end of that range.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code if we leave Jira?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the PostgreSQL schema, the deployment configs, and the documentation. No per-seat pricing, no marketplace app subscriptions, no configuration that only one administrator understands, and no exit cost as the team grows.",
            },
        },
        {
            "@type": "Question",
            name: "Is Jira ever the right long-term choice?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Often, yes. For software teams running Scrum or Kanban, Jira's boards, backlog, reporting, and deep ecosystem are excellent and should not be replaced. The hybrid pattern keeps Jira for engineering delivery and builds custom only for the cross-functional process that has been forced awkwardly into an issue tracker.",
            },
        },
        {
            "@type": "Question",
            name: "How does the cost compare at 50 seats?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Jira Standard and Premium run roughly $8 to $16 per seat per month, so 50 seats lands somewhere around $5k to $10k per year before marketplace apps, which often add meaningfully on top. A custom workflow app at $45k to $80k one-time with a $14k to $22k annual retainer is usually cost-neutral to slightly more in year one, then cheaper from year two as seats and add-ons grow.",
            },
        },
    ],
};

const proCustom = [
    "You own the schema, the source code, and the deployment",
    "Workflow states modeled as real, enforced data, not configured screens",
    "No per-seat ratchet as non-engineering teams get access",
    "Business logic in tested TypeScript, not stacked automation rules",
    "The process is fused with your own data, not bolted onto an issue model",
];

const proJira = [
    "The category standard for engineering issue tracking and agile boards",
    "Mature backlog, sprint, and release reporting out of the box",
    "Vast marketplace of integrations and add-ons",
    "Deep Git, CI, and developer-tool integrations",
    "Roadmap funded by Atlassian R&D, not your engineering budget",
];

export default function CustomAppVsJiraPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
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
                        <li><Link href="/services/custom-business-software" className="hover:text-sky-400 transition-colors">Custom Business Software</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">vs Jira</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB USA vs Jira
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Jira is the category standard for engineering issue tracking. For a software team running sprints and a backlog, very little competes with its boards and reporting. The math turns when the process you are really tracking is not software development, the configuration sprawls into custom fields and automation rules nobody fully understands, and you start forcing a cross-functional workflow into an issue model that a <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom app</Link> would model directly. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Jira Replacement" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom tooling vs Jira: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Jira when the work is software delivery, your team lives in Scrum or Kanban, and the value of mature boards, backlog, and release reporting outweighs everything else. Choose a custom app when the process is not engineering, your instance has become a configuration maze, you need the workflow fused with your own business data, or per-seat pricing across non-engineering teams has passed the cost of a build. The hybrid pattern keeps Jira for engineering delivery and builds custom for the cross-functional process that has outgrown it.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Quick verdict</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Scenario</th>
                                    <th className="px-4 py-3 border-b border-white/10">Best choice</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Software team, sprints, backlog, release tracking</td><td className="px-4 py-3 font-semibold text-white">Jira</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Cross-functional process fused with your own data</td><td className="px-4 py-3 font-semibold text-white">Custom app</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep Jira for engineering, build the ops workflow custom</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Jira is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Jira earned its place by being the best general-purpose issue tracker for software teams. Sprints, backlogs, swimlane boards, burndown and velocity reporting, and a workflow engine flexible enough to model most delivery processes. For an engineering org that lives in agile ceremonies and wants its work items tightly wired to Git, CI, and release tooling, the depth is genuinely hard to match by writing an application.
                        </p>
                        <p>
                            If your team is shipping software, your process maps cleanly onto issues, epics, and sprints, and you value the marketplace of add-ons and the integration surface, Jira is the right call. Atlassian&apos;s investment in reporting and developer-tool connectivity covers an enormous amount of ground, and the product is purpose-built for exactly that job. That is the use case it was designed for, and it serves it extremely well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Jira starts to break</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Jira hits a ceiling at a predictable point. The first squeeze is fit — when the process you are tracking is not software development, you end up bending sales, onboarding, compliance, or operations workflows into an issue-and-status model that was never shaped for them. Custom fields multiply, statuses pile up, and the tool starts describing your process instead of serving it.
                        </p>
                        <p>
                            The second squeeze is configuration sprawl. What began as one tidy workflow becomes a tangle of screens, field configurations, permission schemes, and automation rules with no version control and no real way to test a change before it surprises a whole project. The third squeeze is data isolation and per-seat economics — the work lives inside Jira rather than alongside your own business data, and as non-engineering teams need access, the per-seat bill plus marketplace-app subscriptions starts to move the value math that drew you in.
                        </p>
                        <p>
                            None of this is Jira being a bad product. It is the cost of running a non-engineering operational process on a tool built for software delivery. Most organizations that push Jira beyond its home turf meet some version of this curve. The broader framing lives in our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy software guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A custom app tends to win when the process is not engineering, your Jira configuration has become something nobody wants to touch, you need the workflow fused with your own data, or per-seat pricing across non-engineering teams has passed the amortized cost of a build. <Link href="/services/web-applications" className="text-sky-400 hover:underline">Custom web applications</Link> give you a proper PostgreSQL schema with real states and constraints, a UI tuned to the exact workflow, and logic that lives in tested code rather than stacked automation rules.
                        </p>
                        <p>
                            The other common driver is integration with the rest of the business. When the workflow needs to read and write your customer records, billing, or inventory directly, a custom build gives you that natively along with a clean API and reporting straight off the database. If you are modernizing an aging internal process tool rather than starting fresh, our <Link href="/services/legacy-system-modernization" className="text-sky-400 hover:underline">legacy system modernization</Link> path picks up from there, and our <Link href="/blog/internal-tools-platform-engineering-guide" className="text-sky-400 hover:underline">internal tools guide</Link> covers the patterns.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Side-by-side feature matrix</h2>
                    <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#0d1526]/60">
                        <table className="min-w-full text-sm">
                            <thead className="bg-[#0a1120]/80 text-gray-400">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold">Dimension</th>
                                    <th className="px-4 py-3 text-left font-semibold text-white">Custom app (QUANT LAB USA)</th>
                                    <th className="px-4 py-3 text-left font-semibold">Jira</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + optional retainer</td>
                                    <td className="px-4 py-3">$8 to $16 per seat / month + apps</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Seat scaling</td>
                                    <td className="px-4 py-3">Flat infrastructure cost</td>
                                    <td className="px-4 py-3">Linear per-seat ratchet</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Best-fit process</td>
                                    <td className="px-4 py-3">Any workflow, modeled directly</td>
                                    <td className="px-4 py-3">Software delivery, agile</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Workflow states</td>
                                    <td className="px-4 py-3">Real, enforced data states</td>
                                    <td className="px-4 py-3">Configured statuses + transitions</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data model</td>
                                    <td className="px-4 py-3">Fused with your business data</td>
                                    <td className="px-4 py-3">Issue-centric, siloed</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Customization</td>
                                    <td className="px-4 py-3">Anything, in code</td>
                                    <td className="px-4 py-3">Fields, screens, schemes</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Automation</td>
                                    <td className="px-4 py-3">Tested TypeScript, version-controlled</td>
                                    <td className="px-4 py-3">Automation rules + apps</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Agile reporting</td>
                                    <td className="px-4 py-3">Built only if you need it</td>
                                    <td className="px-4 py-3">Mature, out of the box</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Integrations</td>
                                    <td className="px-4 py-3">Native API code, no markup</td>
                                    <td className="px-4 py-3">Marketplace, some paid</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data residency</td>
                                    <td className="px-4 py-3">Your infrastructure / region</td>
                                    <td className="px-4 py-3">Atlassian-managed (Cloud)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Long-term TCO at 50+ seats</td>
                                    <td className="px-4 py-3">Flat after build</td>
                                    <td className="px-4 py-3">Compounds with seats + apps</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                            <h3 className="text-white font-semibold mb-4">Where custom wins</h3>
                            <ul className="space-y-2">
                                {proCustom.map((item) => (
                                    <li key={item} className="flex gap-2 text-gray-300 text-sm">
                                        <Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                            <h3 className="text-white font-semibold mb-4">Where Jira wins</h3>
                            <ul className="space-y-2">
                                {proJira.map((item) => (
                                    <li key={item} className="flex gap-2 text-gray-300 text-sm">
                                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Cost comparison at 50 seats</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Run the simple version. A team on Jira Premium, 50 seats, three years:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$15/seat/mo</span><span className="text-gray-400">=</span><span className="text-white">Jira Premium at 50 seats</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">× 36 months</span><span className="text-gray-400">=</span><span className="text-white font-semibold">~$27k</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$20k</span><span className="text-gray-400">=</span><span className="text-white">marketplace apps + add-ons</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$26k</span><span className="text-gray-400">=</span><span className="text-white">admin time keeping config sane</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~$73k</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year Jira TCO at this size</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a custom workflow app at $45k to $80k one-time, plus $14k to $22k annually for feature work and maintenance. That comes to $87k to $146k over three years — typically a touch more in year one and competitive from year two as seats and add-ons grow, with the gap closing fastest when the alternative to a build is more marketplace apps patching around poor process fit.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The math stays firmly with Jira for engineering teams whose process genuinely is agile delivery. The flip happens for cross-functional or non-engineering processes, where seats plus apps plus the cost of administering a sprawling configuration exceed the amortized cost of a one-time custom build.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-1 text-sky-400 hover:underline text-sm"
                        >
                            See our pricing for custom workflow work <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off Jira</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover follows a predictable pattern. Week one is process modeling — we map your projects, issue types, and statuses into a clean PostgreSQL schema with real, enforced states, and we decide which sprawling custom fields become first-class columns and which were never needed. Week two is extraction through the Jira REST API and CSV export, covering issues, custom fields, comments, attachments, and the workflow transitions themselves, with reconciliation reports so nothing goes missing.
                        </p>
                        <p>
                            From there it is a normal build — application screens and boards that replace the views your team relied on, automation rules rewritten as tested code, and integrations wired natively into the rest of your stack. Jira stays live in parallel during the build so day-to-day work never stops, then you cut over once the new app reaches parity. Jira can remain a read-only archive for a window before being retired, so there is never a moment where the work history is only in one place.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get a Jira Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When is custom workflow tooling a better fit than Jira?",
                                a: "Custom usually wins when the process you are tracking is not software development, your Jira instance has become a maze of custom fields, screens, and automation rules nobody fully understands, you need the workflow fused with your own data, or per-seat pricing across non-engineering teams has passed the cost of a one-time build. For pure engineering issue tracking and sprint boards, Jira is hard to beat.",
                            },
                            {
                                q: "Can you migrate our Jira projects to a custom app?",
                                a: "Yes. Jira exposes a full REST API covering issues, custom fields, workflows, transitions, comments, and attachments, plus CSV export. We model the work items into a proper PostgreSQL schema with real states and constraints, port the automation rules into tested code, and rebuild the boards and screens your team relies on as application views.",
                            },
                            {
                                q: "Is Jira ever the right long-term choice?",
                                a: "Often, yes. For software teams running Scrum or Kanban, Jira's boards, backlog, reporting, and deep ecosystem are excellent and should not be replaced. The hybrid pattern keeps Jira for engineering delivery and builds custom only for the cross-functional process that has been forced awkwardly into an issue tracker.",
                            },
                            {
                                q: "How does the cost compare at 50 seats?",
                                a: "Jira Standard and Premium run roughly $8 to $16 per seat per month, so 50 seats lands somewhere around $5k to $10k per year before marketplace apps, which often add meaningfully on top. A custom workflow app at $45k to $80k one-time with a $14k to $22k annual retainer is usually cost-neutral to slightly more in year one, then cheaper from year two as seats and add-ons grow.",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related comparisons and services</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link
                            href="/services/custom-business-software"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Custom Business Software</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The full service page — what we build, methodology, pricing.</p>
                        </Link>
                        <Link
                            href="/vs/asana"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Asana</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Work management compared to a custom workflow app you own.</p>
                        </Link>
                        <Link
                            href="/vs/clickup"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs ClickUp</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">All-in-one work platform versus a purpose-built tool.</p>
                        </Link>
                        <Link
                            href="/blog/build-vs-buy-software-2026"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Build vs Buy Software (2026)</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Three-year TCO math and a decision framework.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy","internal-tools"]}
                        heading="Related build-vs-buy reading"
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Do the math on your Jira instance.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through your projects, your configuration, and your seat count and tell you straight whether Jira is still right, custom is right, or you should run a hybrid.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
