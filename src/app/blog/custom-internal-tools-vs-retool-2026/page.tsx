import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { ArrowRight, Check, Wrench } from "lucide-react";

const SLUG = "custom-internal-tools-vs-retool-2026";
const TITLE = "Custom Internal Tools vs Retool: 2026 Cost & Capability Comparison";
const DESCRIPTION =
    "Retool vs custom internal tools in 2026. Real cost math, capability boundaries, hidden Retool fees, and when to switch. From a firm that builds both.";
const PUBLISHED_ISO = "2026-05-12";

export const metadata: Metadata = articleMetadata({
    title: TITLE,
    description: DESCRIPTION,
    slug: `/blog/${SLUG}`,
    image: "/og-services.png",
    imageAlt: "Custom internal tools vs Retool comparison 2026",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: PUBLISHED_ISO,
    authors: ["Bill Beltz"],
    keywords: [
        "Retool alternatives",
        "Retool vs custom",
        "internal tools cost",
        "custom internal tools",
        "Retool pricing 2026",
    ],
});

const faqItems = [
    {
        q: "How much does Retool actually cost at scale in 2026?",
        a: "Retool's Business plan starts at $50 per standard user per month, with Pro user seats at $65 and end-user seats at $18 plus Enterprise adders for SSO, audit logs, and self-hosting. A 25-employee team mixing 5 builders, 15 standard users, and 5 end-user seats lands at roughly $20,000 to $30,000 per year. Add a workflow runs bill, a Retool Database row bill, and the per-app limits and most mid-market builds land between $40K and $90K a year fully loaded.",
    },
    {
        q: "What does a custom internal tools build cost?",
        a: "A focused internal tool (one operator workflow, 4 to 8 screens, integrated with 1 to 2 external systems) runs $25K to $60K to build in 2026, with $300 to $1,500 a month in hosting and maintenance. An internal tools platform (admin dashboards, support ops, fulfillment ops, all unified) runs $80K to $250K to build and $1K to $3K a month to run.",
    },
    {
        q: "When does custom beat Retool on pure cost?",
        a: "When your Retool bill crosses $30K to $40K annually with no end in sight. We have helped clients exit Retool plans that had grown to $60K to $90K a year because of seat creep and rebuild for a one-time $80K with $500 a month hosting. Payback under 18 months. For teams under $20K a year on Retool, custom rarely wins on cost alone.",
    },
    {
        q: "Is Retool good enough for production-critical workflows?",
        a: "For internal-only workflows operated by trained employees, yes — we run client Retool apps that process millions of dollars a month. For customer-facing flows, regulatory workflows (PHI, PCI), or anything you want to embed inside a SaaS product, no. Retool is not designed to live behind your product brand or be audited as part of your trust boundary.",
    },
    {
        q: "What are the hidden costs of staying on Retool?",
        a: "Five big ones: seat creep as new ops hires join, workflow execution overages, Retool Database row limits, audit log requirements for SOC 2 (which jump you to Enterprise), and developer time spent fighting Retool limitations. We have seen $20K Retool bills become $80K within two years just from headcount and audit needs.",
    },
    {
        q: "Can I export my Retool apps and run them elsewhere?",
        a: "Retool offers JSON exports of app definitions but they only restore inside Retool. The component model, the query model, and the data sources are proprietary. Migrating out means rebuilding, not exporting. Plan for a 60 to 80% rebuild cost when switching off Retool.",
    },
    {
        q: "What does Retool do well that we should not try to rebuild?",
        a: "Form builders, table widgets, drag-and-drop layout, and JS scripting for ad-hoc queries. If your team is non-technical and only needs CRUD over a Postgres database, Retool will outperform a custom build on speed-to-launch. The break-even is when you need integrations, role logic, or audit depth Retool's primitives do not support cleanly.",
    },
    {
        q: "How long does a custom internal tool take to build?",
        a: "A single tool with one or two workflows: 4 to 8 weeks. A platform replacement covering 4 to 6 operator workflows: 12 to 24 weeks. We staged most of our recent platform builds — replace the heaviest workflow first, run Retool and the custom platform in parallel for 60 days, then sunset Retool.",
    },
    {
        q: "Should I consider open-source alternatives like Tooljet or Appsmith?",
        a: "Tooljet, Appsmith, and Budibase are credible open-source alternatives in 2026. Self-hosting saves the per-seat bill. The trade-off is you own the platform — security patching, upgrades, plugin maintenance. For teams without dedicated platform engineers, self-hosted open-source ends up costing similar to Retool by the time you account for engineering time.",
    },
    {
        q: "What stack do you typically use for custom internal tools?",
        a: "Next.js 16 (App Router) for the UI, Postgres for the database, Drizzle or Prisma for the ORM, Clerk or Auth.js for authentication, Tailwind and shadcn/ui for the design system. We sometimes add Inngest for background jobs or BullMQ on Redis. Hosting on Vercel, Render, or Fly.io depending on the workload shape.",
    },
    {
        q: "How do you handle SOC 2 audit requirements on a custom build?",
        a: "Audit logs in Postgres with row-level immutability triggers, SSO via Okta or Google Workspace through the auth provider, role-based access at the data layer (not just the UI layer), and a 90-day evidence retention policy. We design every internal tool to be SOC 2 ready from day one. See our SOC 2 pentest prep guide for the rest of the program.",
    },
    {
        q: "Can I migrate from Retool to custom incrementally?",
        a: "Yes, and we recommend it. Pick the workflow that costs the most Retool seats or limits the most ops productivity. Build that in custom first. Run both systems in parallel for 30 to 60 days. Sunset the Retool app once usage flips. Repeat per workflow. Most clients exit Retool fully in 9 to 14 months on this cadence.",
    },
];

const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Custom Internal Tools vs Retool 2026", url: `/blog/${SLUG}` },
];

const articleLd = articleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED_ISO,
    image: "https://quantlabusa.dev/og-services.png",
    slug: SLUG,
    section: "Internal Tools",
    keywords: ["Retool", "internal tools", "custom software", "build vs buy"],
});
const breadcrumbLd = breadcrumbSchema(breadcrumbItems, `/blog/${SLUG}`);
const faqLd = faqSchema(faqItems);

export default function CustomInternalToolsVsRetool2026Page() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Custom internal tools vs Retool 2026</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Wrench className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">MOFU Cost & Capability Comparison · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Custom Internal Tools vs Retool: The Honest 2026 Math
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        Retool is fast to start and expensive to scale. Custom is the reverse. Here is the real cost math, the capability boundaries, and the migration path we use when clients outgrow Retool.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">Bill Beltz</Link>, founder of QUANT LAB USA INC · Published May 12, 2026
                    </p>
                    <ConsultationCTA label="Talk About Your Internal Tools" service="Custom Business Software" source="blog-retool-comparison" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer: when does custom beat Retool?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Custom internal tools beat Retool on pure cost when your Retool bill crosses about $30K to $40K a year. Below that, Retool's speed-to-launch usually wins. Above $40K, an $80K to $150K custom build pays back in 18 to 30 months and removes the seat-creep ceiling. Custom also wins by default when you need SOC 2 audit depth, customer-facing embeds, or workflows Retool's primitives cannot model.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Retool is genuinely good. It is also genuinely expensive at scale, in ways that are not obvious on the pricing page. We build both — custom internal tools as our primary service, and Retool integrations when speed-to-launch outweighs the lifetime cost. This guide is what we tell clients during the build-vs-buy conversation.
                        </p>
                        <p>
                            The most common pattern: a client starts on Retool because they need to ship something in two weeks. By year two, the Retool bill has tripled, seat additions are slowing operations, and the workflow has outgrown what Retool's primitives model cleanly. That is the inflection point. See our <Link href="/blog/internal-tools-platform-engineering-guide" className="text-sky-400 hover:underline">Internal Tools Platform Engineering Guide</Link> for the architectural pattern we ship.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">2026 Retool pricing — the real math</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Retool publishes per-seat prices. The actual bill is the sum of seats plus workflow runs plus storage plus enterprise adders. Honest 2026 ranges:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Free:</strong> 5 users, 5 apps, basic features. Useful for prototypes only.</li>
                            <li><strong>Team:</strong> $10 standard user / $5 end-user. Caps at 5 apps and is missing audit logs.</li>
                            <li><strong>Business:</strong> $50 standard / $65 Pro / $18 end-user. The most common tier for real ops teams.</li>
                            <li><strong>Enterprise:</strong> Custom. Required for SSO + audit logs + custom roles + self-hosting. Typically 1.5 to 2.5x Business prices in our deal-review experience.</li>
                            <li><strong>Workflow runs:</strong> Included up to a cap (usually 5K Business / 25K Enterprise). Overages bill per 1K runs.</li>
                            <li><strong>Retool Database:</strong> Row caps and storage caps per tier. Overages are not cheap.</li>
                            <li><strong>Retool AI:</strong> Separate billing for AI-assisted queries and copilots.</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">3-year cost comparison: Retool vs custom</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Scenario</th>
                                    <th className="px-4 py-3 border-b border-white/10">3-year Retool</th>
                                    <th className="px-4 py-3 border-b border-white/10">3-year Custom (build + run)</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Small team, 5 standard users, 1 app</td><td className="px-4 py-3">$9K to $15K</td><td className="px-4 py-3">$45K to $80K</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Mid team, 15 standard + 10 end-user, 5 apps</td><td className="px-4 py-3">$45K to $80K</td><td className="px-4 py-3">$70K to $130K</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Growing team, 30 standard + 20 end-user, 12 apps, audit logs</td><td className="px-4 py-3">$120K to $220K</td><td className="px-4 py-3">$120K to $200K</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Mid-market, 80+ users, 25+ apps, Enterprise + AI</td><td className="px-4 py-3">$350K to $700K</td><td className="px-4 py-3">$200K to $400K</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        Numbers from actual 2024 to 2026 client engagements. The crossover is usually around the third row — 25 to 30 active users and 10+ apps.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Where Retool wins — without exception</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Honest list of cases where Retool is the right call:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>You need an MVP internal tool in 2 weeks and have no engineering bandwidth.</li>
                            <li>You have 1 to 3 power users and that is unlikely to change.</li>
                            <li>The workflow is pure CRUD over a Postgres or MySQL database.</li>
                            <li>The data lives in 1 or 2 places (one database, one API).</li>
                            <li>You do not have to embed the tool inside a customer-facing product.</li>
                            <li>You are not in a regulated industry that demands custom audit depth.</li>
                        </ul>
                        <p>
                            If five or more of those apply, ship in Retool. We help clients <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">build custom internal tools</Link> mostly when those bullets fail.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Where Retool breaks — the failure modes</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The patterns we see most often when clients hit Retool's walls:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>Seat math becomes punishing.</strong> Ops team grows from 8 to 30. Retool bill grows from $9K to $50K with no offsetting feature gain.</li>
                            <li><strong>Audit logs force Enterprise.</strong> SOC 2 auditor asks for 12 months of action logs with user attribution. That requires Enterprise. Bill jumps 70%+.</li>
                            <li><strong>Complex role logic outgrows custom JS.</strong> When the role matrix is "users in region X with permission Y and active status Z," Retool's permission model becomes a maintenance liability.</li>
                            <li><strong>Workflow runs overage.</strong> A new automation fires 50K times a month and the workflow bill triples.</li>
                            <li><strong>Customer-facing embed.</strong> Retool is designed for internal use. Embedding inside a product means buying Retool Embed (expensive) or rebuilding.</li>
                            <li><strong>Performance.</strong> Complex tables with 50K+ rows and joins start feeling slow. Retool's component model has a ceiling.</li>
                            <li><strong>Branding and white-label.</strong> The Retool URL, the Retool look, the Retool login — fine internally, not fine when it sits in front of partners or contractors.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Capability comparison: what each does well</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Capability</th>
                                    <th className="px-4 py-3 border-b border-white/10">Retool</th>
                                    <th className="px-4 py-3 border-b border-white/10">Custom (Next.js + Postgres)</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Speed to first tool</td><td className="px-4 py-3">1 to 2 weeks</td><td className="px-4 py-3">4 to 8 weeks</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Drag-and-drop layout</td><td className="px-4 py-3">Excellent</td><td className="px-4 py-3">No (design system)</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Complex role logic</td><td className="px-4 py-3">Limited</td><td className="px-4 py-3">Unlimited</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">SOC 2 audit depth</td><td className="px-4 py-3">Enterprise only</td><td className="px-4 py-3">First-class</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Custom branding</td><td className="px-4 py-3">Limited</td><td className="px-4 py-3">Full</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Customer-facing embed</td><td className="px-4 py-3">Retool Embed (paid)</td><td className="px-4 py-3">Native</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Performance at scale</td><td className="px-4 py-3">Adequate to 50K rows</td><td className="px-4 py-3">Unlimited (per Postgres limits)</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Per-user cost</td><td className="px-4 py-3">High & linear</td><td className="px-4 py-3">Near zero</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Vendor lock-in</td><td className="px-4 py-3">High</td><td className="px-4 py-3">Low (you own it)</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The migration playbook (incremental, not big-bang)</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            We do not rip-and-replace Retool in one cutover. We do it workflow by workflow. The pattern:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Rank Retool apps by seat cost and operational pain. Start with the heaviest one.</li>
                            <li>Build the custom replacement (typically 4 to 8 weeks for a single workflow).</li>
                            <li>Run both in parallel for 30 to 60 days. Operators choose. Track which one they use.</li>
                            <li>Cut traffic to the custom tool once 80%+ of operators have switched.</li>
                            <li>Decommission the Retool app and reduce seats. Real bill savings hit here.</li>
                            <li>Repeat for the next workflow.</li>
                        </ol>
                        <p>
                            Most clients exit Retool fully in 9 to 14 months on this cadence. Our <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS case study</Link> is a recent example of this pattern.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The stack we ship for custom internal tools</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Frontend:</strong> Next.js 16 App Router, TypeScript, Tailwind, shadcn/ui.</li>
                            <li><strong>Auth:</strong> Clerk or Auth.js with SSO via Google Workspace or Okta.</li>
                            <li><strong>Database:</strong> Postgres on Neon, Supabase, or Render. Drizzle ORM or Prisma.</li>
                            <li><strong>Background jobs:</strong> Inngest or BullMQ on Redis.</li>
                            <li><strong>Audit logs:</strong> Append-only Postgres table with row-level immutability triggers.</li>
                            <li><strong>RBAC:</strong> Permissions enforced at the data layer, not just UI hiding.</li>
                            <li><strong>Hosting:</strong> Vercel, Render, or Fly.io.</li>
                            <li><strong>Observability:</strong> Sentry, Axiom or Logflare for structured logs.</li>
                        </ul>
                        <p>
                            Detail on this stack in our <Link href="/blog/internal-tools-platform-engineering-guide" className="text-sky-400 hover:underline">Internal Tools Platform Engineering Guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">When self-hosted open source makes sense</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Tooljet, Appsmith, and Budibase are credible Retool alternatives that you can self-host. They eliminate the per-seat bill and the vendor lock-in. The tradeoff is platform ownership — security patching, upgrades, plugin maintenance, and infrastructure.
                        </p>
                        <p>
                            For teams without dedicated platform engineering, self-hosted open source ends up costing similar to Retool by the time you account for engineering time spent maintaining it. For teams that already run platform engineering and want the per-seat cost to disappear, it can be a great middle path.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Decision framework: a 5-question filter</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>What is your current Retool annual run rate? (Above $40K? Custom math gets serious.)</li>
                            <li>How many users will operate the tools in 24 months? (50+? Custom wins on cost.)</li>
                            <li>Is the tool customer-facing or partner-facing? (Yes? Build custom.)</li>
                            <li>Do you need SOC 2 / HIPAA / PCI audit depth? (Yes? Custom is cleaner.)</li>
                            <li>Do you have engineering bandwidth or a partner? (No? Stay on Retool for now.)</li>
                        </ol>
                        <p>
                            For larger build-vs-buy decisions, see our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">Build vs Buy 2026 guide</Link> and the <Link href="/calculators/build-vs-buy" className="text-sky-400 hover:underline">build vs buy calculator</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">FAQ</h2>
                    <div className="space-y-6">
                        {faqItems.map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Related reading and next steps</h2>
                    <ul className="space-y-3">
                        {[
                            { href: "/services/custom-business-software", label: "Custom Business Software service" },
                            { href: "/services/saas-platform-development", label: "SaaS Platform Development" },
                            { href: "/services/api-development", label: "API Development" },
                            { href: "/blog/internal-tools-platform-engineering-guide", label: "Internal Tools Platform Engineering Guide" },
                            { href: "/blog/build-vs-buy-software-2026", label: "Build vs Buy Software 2026" },
                            { href: "/blog/dedicated-development-team-vs-agency", label: "Dedicated Dev Team vs Agency" },
                            { href: "/work/j5-sales-os", label: "Case study — J5 Sales OS" },
                            { href: "/work/motorcycle-shop-ops-platform", label: "Case study — Motorcycle Shop Ops Platform" },
                            { href: "/glossary/what-is-saas", label: "What is SaaS?" },
                            { href: "/calculators/build-vs-buy", label: "Build vs Buy calculator" },
                            { href: "/calculators/crm-roi", label: "CRM ROI calculator" },
                            { href: "/contact", label: "Talk to an engineer" },
                        ].map((l) => (
                            <li key={l.href} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                <Link href={l.href} className="text-sky-400 hover:underline">{l.label}</Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Audit your Retool bill.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute review. Send us your Retool seat count, app count, and workflow run volume. We will tell you honestly whether custom makes sense yet.
                        </p>
                        <ConsultationCTA label="Get a Cost Review" service="Custom Business Software" source="blog-retool-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug="custom-internal-tools-vs-retool-2026"
                        topics={["internal-tools","build-vs-buy"]}
                        heading="More internal tools reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link href="/blog" className="hover:text-sky-400 inline-flex items-center gap-1">
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated May 12, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
