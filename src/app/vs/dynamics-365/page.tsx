import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Scale, Check, ArrowRight } from "lucide-react";
import { comparisonMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = comparisonMetadata({
    competitor: "Dynamics 365",
    title: "QUANT LAB USA vs Dynamics 365: Custom Business Software (2026)",
    description:
        "Dynamics 365 is powerful inside a committed Microsoft estate. When licensing, implementation cost, and fit turn against you, custom business software wins. Honest 2026 comparison.",
    slug: "/vs/dynamics-365",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "QUANT LAB USA vs Dynamics 365: Custom Business Software vs Microsoft Suite in 2026",
    description:
        "Honest comparison of Microsoft Dynamics 365 against custom business software. Feature matrix, licensing and implementation cost, lock-in, and the point where a custom build wins.",
    url: "https://quantlabusa.dev/vs/dynamics-365",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    about: {
        "@type": "Thing",
        name: "Dynamics 365 Alternative",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Custom Business Software", item: "https://quantlabusa.dev/services/custom-business-software" },
        { "@type": "ListItem", position: 3, name: "vs Dynamics 365", item: "https://quantlabusa.dev/vs/dynamics-365" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When is custom business software a better fit than Dynamics 365?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom usually wins when your workflow needs heavy customization through Power Platform and plugins to fit Dynamics, when licensing across the modules and the implementation partner cost exceed a build, when you are not otherwise committed to the Microsoft estate, or when your differentiation lives in process the suite cannot model cleanly. For a deep Microsoft shop with standard processes, Dynamics is powerful.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate us from Dynamics 365 to custom software?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Dynamics data exports through the Dataverse Web API and standard export tools, covering entities, custom fields, relationships, and business-process flows. We model it into a clean PostgreSQL schema, port the Power Automate flows and plugins into tested code, and rebuild the forms and dashboards your team relies on.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline to replace a Dynamics 365 deployment?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "12 to 20 weeks for the first production release, depending on how many modules you run and how much customization sits on top. A single-module replacement is faster. A multi-module estate with deep Power Platform customization takes the upper end of that range.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code if we leave Dynamics 365?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the PostgreSQL schema, the deployment configs, and the documentation. No per-user per-module licensing, no Power Platform request limits, no annual partner implementation retainer, and no exit cost.",
            },
        },
        {
            "@type": "Question",
            name: "Can we keep Microsoft 365 and replace only Dynamics?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The hybrid pattern keeps Microsoft 365, Teams, and the productivity stack you rely on and replaces only the Dynamics business-application layer where the workflow has outgrown the suite. Custom code integrates with Microsoft Graph and your existing identity where it is useful.",
            },
        },
        {
            "@type": "Question",
            name: "How does the cost compare at 50 seats?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Dynamics 365 commonly runs $65 to $200+ per user per month depending on the modules, so 50 seats lands in the $40k to $120k per year range before the implementation partner. A custom build at $60k to $120k one-time with a $20k to $30k annual retainer is frequently cheaper from year one once partner and licensing costs are counted.",
            },
        },
    ],
};

const proCustom = [
    "You own the schema, the source code, and the deployment",
    "No per-user per-module licensing ratchet as you grow",
    "Workflow modeled directly, not via Power Platform and plugins",
    "No annual implementation-partner retainer to keep it running",
    "Reporting straight off PostgreSQL, no Dataverse request limits",
];

const proDynamics = [
    "Genuinely powerful inside a committed Microsoft estate",
    "Deep, native integration with Microsoft 365, Teams, and Azure AD",
    "Mature ERP and CRM modules covering complex enterprise processes",
    "Huge partner ecosystem and a well-known compliance posture",
    "Roadmap funded by Microsoft R&D, not your engineering budget",
];

export default function CustomVsDynamics365Page() {
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
                        <li className="text-gray-300">vs Dynamics 365</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        QUANT LAB USA vs Dynamics 365
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Dynamics 365 is genuinely powerful inside a committed Microsoft estate, where its native ties to Microsoft 365, Teams, and Azure AD are hard to match. The math turns when your workflow needs heavy Power Platform customization to fit, the per-user per-module licensing and the implementation partner add up, and a <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom business application</Link> would model your process directly. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Dynamics Replacement" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Custom software vs Dynamics 365: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Dynamics 365 when you are a committed Microsoft shop, your processes fit the standard ERP and CRM modules, and the native integration with the Microsoft estate is worth the licensing. Choose custom business software when fitting Dynamics needs heavy Power Platform customization, when licensing and the implementation partner exceed a build, or when your differentiation lives in process the suite cannot model. The hybrid pattern keeps Microsoft 365 and replaces only the Dynamics layer.</strong>
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
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Committed Microsoft estate, standard ERP/CRM processes</td><td className="px-4 py-3 font-semibold text-white">Dynamics 365</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Heavy customization, distinctive workflow, licensing pressure</td><td className="px-4 py-3 font-semibold text-white">Custom software</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep Microsoft 365, replace the Dynamics business layer</td><td className="px-4 py-3 font-semibold text-white">Hybrid</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Dynamics 365 is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Dynamics 365 is a serious platform. The ERP and CRM modules cover deep, complex enterprise processes that took Microsoft decades to refine, and inside an organization already standardized on Microsoft 365, Teams, and Azure AD, the native integration is genuinely valuable. Identity, documents, and collaboration are all already wired in, which removes a class of integration work that other suites would require.
                        </p>
                        <p>
                            If you are a committed Microsoft shop, your processes map onto the standard modules without heavy bending, and you have a partner relationship to lean on, Dynamics is the right call. The compliance posture is well understood, the partner ecosystem is vast, and the platform is built to handle scale and regulatory complexity that smaller suites cannot. That is exactly the enterprise buyer it was designed for.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Dynamics 365 starts to break</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Dynamics 365 strains at a predictable point. The first squeeze is the customization stretch — when your workflow does not map onto the standard modules, you fit it with Power Platform, custom plugins, and business-process flows that grow into a layer only a specialist understands. The platform can do almost anything, but every deviation from the standard model adds cost and fragility.
                        </p>
                        <p>
                            The second squeeze is total cost — per-user per-module licensing stacks quickly, and most real deployments carry an implementation partner whose retainer never fully goes away. The third squeeze is fit and lock-in — if you are not deeply committed to the Microsoft estate, you are paying for integration you do not use, and your business logic lives inside Dataverse and Power Platform rather than in code you own. None of this is Dynamics being a bad product; it is the cost of bending a broad enterprise suite to a specific motion, which is the heart of our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy framework</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When custom wins</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Custom business software tends to win when fitting Dynamics requires heavy Power Platform customization, when licensing across modules plus the implementation partner exceeds the amortized cost of a build, when you are not otherwise committed to the Microsoft estate, or when your differentiation lives in process the suite cannot model cleanly. <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">Custom business software</Link> models your workflow directly in code you own, instead of as a configuration layer over a generic platform.
                        </p>
                        <p>
                            The other common driver is rate of change and cost predictability. A custom build lets you change the schema and the UI in a sprint without a partner change request, and the running cost is flat infrastructure rather than a licensing curve that climbs with headcount. Reporting comes straight off PostgreSQL with no Dataverse request limits. When the workflow is really a product, our <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link> path extends the same foundation.
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
                                    <th className="px-4 py-3 text-left font-semibold text-white">Custom software (QUANT LAB USA)</th>
                                    <th className="px-4 py-3 text-left font-semibold">Dynamics 365</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + optional retainer</td>
                                    <td className="px-4 py-3">$65 to $200+ per user / month per module</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Seat scaling</td>
                                    <td className="px-4 py-3">Flat infrastructure cost</td>
                                    <td className="px-4 py-3">Per-user per-module ratchet</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Implementation</td>
                                    <td className="px-4 py-3">Your build team, no partner tax</td>
                                    <td className="px-4 py-3">Usually a partner + retainer</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Workflow fit</td>
                                    <td className="px-4 py-3">Modeled directly in code</td>
                                    <td className="px-4 py-3">Power Platform + plugins</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Microsoft estate integration</td>
                                    <td className="px-4 py-3">Via Graph where useful</td>
                                    <td className="px-4 py-3">Deep and native</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Automation</td>
                                    <td className="px-4 py-3">Tested TypeScript</td>
                                    <td className="px-4 py-3">Power Automate, request-limited</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Reporting</td>
                                    <td className="px-4 py-3">PostgreSQL, any BI tool</td>
                                    <td className="px-4 py-3">Dataverse + Power BI licensing</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Data residency</td>
                                    <td className="px-4 py-3">Your infrastructure / region</td>
                                    <td className="px-4 py-3">Microsoft-managed regions</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Proprietary platform</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Best fit</td>
                                    <td className="px-4 py-3">Distinctive workflow, cost control</td>
                                    <td className="px-4 py-3">Deep Microsoft enterprise</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Time to v1</td>
                                    <td className="px-4 py-3">12 to 20 weeks</td>
                                    <td className="px-4 py-3">Months, partner-led</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Long-term TCO at 50+ seats</td>
                                    <td className="px-4 py-3">Flat after build</td>
                                    <td className="px-4 py-3">Compounds with seats + modules</td>
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
                            <h3 className="text-white font-semibold mb-4">Where Dynamics 365 wins</h3>
                            <ul className="space-y-2">
                                {proDynamics.map((item) => (
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
                            Run the simple version. An organization on Dynamics 365 across a couple of modules, 50 seats, three years:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">~$110/user/mo</span><span className="text-gray-400">=</span><span className="text-white">blended Dynamics modules at 50 seats</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">× 36 months</span><span className="text-gray-400">=</span><span className="text-white font-semibold">~$198k</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$90k</span><span className="text-gray-400">=</span><span className="text-white">implementation partner + customization</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$30k</span><span className="text-gray-400">=</span><span className="text-white">Power Platform + Power BI licensing</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~$318k</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year Dynamics TCO at this size</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Compare against a custom build at $60k to $120k one-time, plus $20k to $30k annually for feature work and maintenance. That comes to $120k to $210k over three years — frequently cheaper from year one once partner and licensing costs are counted, with the gap widening as headcount and modules grow. New capability lives in your repo, not behind another module license.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The math can favor Dynamics for a deep Microsoft enterprise where the native integration removes real cost elsewhere and the processes fit the standard modules. The flip happens when licensing across modules, plus the partner retainer, plus customization exceed the amortized cost of a one-time custom build.
                        </p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center gap-1 text-sky-400 hover:underline text-sm"
                        >
                            See our pricing for custom software work <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Migration path off Dynamics 365</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The cutover follows a predictable pattern, sized for the platform&apos;s surface area. Weeks one and two are data modeling — we map your Dataverse entities, custom fields, relationships, and business-process flows into a clean PostgreSQL schema that matches the actual workflow rather than the platform defaults. Extraction runs through the Dataverse Web API and standard export tools, with reconciliation reports so nothing goes missing.
                        </p>
                        <p>
                            From there it is the build — a Next.js application, the forms and dashboards your team relies on, embedded reporting, and integration with Microsoft Graph and your existing identity where it stays useful. Power Automate flows and plugins get triaged: the ones doing real work are rewritten as tested code, the ones patching around the data model are retired. Dynamics stays live in parallel, then moves to read-only as an archive before being decommissioned.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <ConsultationCTA label="Get a Dynamics Migration Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When is custom business software a better fit than Dynamics 365?",
                                a: "Custom usually wins when your workflow needs heavy customization through Power Platform and plugins to fit Dynamics, when licensing across the modules and the implementation partner cost exceed a build, when you are not otherwise committed to the Microsoft estate, or when your differentiation lives in process the suite cannot model cleanly. For a deep Microsoft shop with standard processes, Dynamics is powerful.",
                            },
                            {
                                q: "Can you migrate us from Dynamics 365 to custom software?",
                                a: "Yes. Dynamics data exports through the Dataverse Web API and standard export tools, covering entities, custom fields, relationships, and business-process flows. We model it into a clean PostgreSQL schema, port the Power Automate flows and plugins into tested code, and rebuild the forms and dashboards your team relies on.",
                            },
                            {
                                q: "Can we keep Microsoft 365 and replace only Dynamics?",
                                a: "Yes. The hybrid pattern keeps Microsoft 365, Teams, and the productivity stack you rely on and replaces only the Dynamics business-application layer where the workflow has outgrown the suite. Custom code integrates with Microsoft Graph and your existing identity where it is useful.",
                            },
                            {
                                q: "How does the cost compare at 50 seats?",
                                a: "Dynamics 365 commonly runs $65 to $200+ per user per month depending on the modules, so 50 seats lands in the $40k to $120k per year range before the implementation partner. A custom build at $60k to $120k one-time with a $20k to $30k annual retainer is frequently cheaper from year one once partner and licensing costs are counted.",
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
                            href="/vs/netsuite"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs NetSuite</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The other enterprise-suite comparison — same framing, different platform.</p>
                        </Link>
                        <Link
                            href="/vs/salesforce"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">vs Salesforce</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The CRM-focused enterprise comparison with the same honest math.</p>
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
                        topics={["build-vs-buy","saas"]}
                        heading="Related build-vs-buy reading"
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Do the math on your Dynamics estate.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. We will walk through your modules, your seat count, your Power Platform customization, and your partner spend and tell you straight whether Dynamics is still right, custom is right, or you should run a hybrid.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
