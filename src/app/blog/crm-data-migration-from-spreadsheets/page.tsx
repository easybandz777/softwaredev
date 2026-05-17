import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { ArrowRight, Check, Database } from "lucide-react";

const SLUG = "crm-data-migration-from-spreadsheets";
const TITLE = "CRM Data Migration from Spreadsheets: Step-by-Step Playbook";
const DESCRIPTION =
    "The 9-step playbook for migrating a sales team from Excel/Sheets to a real CRM in 2026. Schema design, dedup, history preservation, rollback, and going live without losing the team's trust.";
const PUBLISHED_ISO = "2026-05-12";

export const metadata: Metadata = articleMetadata({
    title: TITLE,
    description: DESCRIPTION,
    slug: `/blog/${SLUG}`,
    image: "/og-crm.png",
    imageAlt: "CRM data migration from spreadsheets playbook 2026",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: PUBLISHED_ISO,
    authors: ["Bill Beltz"],
    keywords: [
        "CRM migration from spreadsheets",
        "Excel to CRM",
        "Google Sheets to CRM",
        "CRM data import",
        "sales data migration",
    ],
});

const faqItems = [
    {
        q: "How long does a spreadsheet-to-CRM migration take?",
        a: "2 to 8 weeks of calendar time for the migration itself, depending on data volume, dedup complexity, and how messy the source data is. The actual ETL work is usually 1 to 3 weeks of engineering. The other time is spent on team alignment, change management, and parallel-run validation. Cutover day takes 2 to 6 hours of hands-on work plus standby for issues.",
    },
    {
        q: "How much does CRM migration cost?",
        a: "Light migrations (under 5K contacts, single source spreadsheet): $5K to $15K. Standard mid-market migration (10K to 100K contacts, multiple spreadsheets, light dedup): $15K to $40K. Complex migrations (multiple sources, deep dedup, historical email/activity preservation, custom field mapping): $40K to $120K.",
    },
    {
        q: "Should I migrate to a SaaS CRM or a custom CRM?",
        a: "Most teams should pick a SaaS CRM (HubSpot, Pipedrive, Close) as the first migration target. Custom CRM becomes the right answer when the SaaS CRM cannot model your sales motion, or when per-seat economics break above 30 to 50 reps. We have built custom CRMs for clients whose Salesforce bill hit $300K a year and whose data model the platform fought.",
    },
    {
        q: "What is the biggest risk in spreadsheet-to-CRM migration?",
        a: "Trust loss with the sales team. If a rep opens the CRM on day one and their pipeline looks different from what they had in the spreadsheet, they will abandon the CRM and go back to the spreadsheet. The fix: parallel run for 2 weeks, validate at the individual rep level, and let reps confirm their data before cutover. Bad migrations fail on people, not on data.",
    },
    {
        q: "How do I handle duplicate contacts?",
        a: "Three-pass dedup. Pass 1: exact match on email (high confidence). Pass 2: fuzzy match on email domain + name (medium confidence, flag for review). Pass 3: phone normalization + company match (low confidence, review). Reps validate the ambiguous matches. Auto-merging without human review burns trust.",
    },
    {
        q: "Can I preserve email history during migration?",
        a: "Yes, if your source has it or you have backup access. The pattern: export email threads from Gmail/Outlook with the contact email as the join key, transform into CRM-compatible activity records, import with proper timestamp preservation. Volume can be heavy — 100K contacts often imply 1M to 5M activity records. Plan storage and import API rate limits accordingly.",
    },
    {
        q: "Should I migrate everything or start fresh?",
        a: "Migrate the last 12 to 24 months of active records. Archive older inactive data in cold storage that the CRM can reference if needed. Migrating 10 years of legacy spreadsheet data into a new CRM is usually a mistake — it pollutes search, slows reporting, and confuses reps. Active book of business plus 12 to 24 months of context is the right scope.",
    },
    {
        q: "What if my spreadsheets are inconsistent across reps?",
        a: "Treat each rep's sheet as its own source. Map each one to the canonical schema separately. Reconcile naming conventions (Status: 'Open' vs 'In Pipeline' vs 'Active' all collapse to one value). This adds 30 to 50% to the engineering time but is unavoidable if the source data is heterogeneous. Plan for it.",
    },
    {
        q: "How do I roll back if the migration goes wrong?",
        a: "Keep the source spreadsheets intact during the entire migration. Cutover does not mean deletion. Run the CRM in parallel with read-only spreadsheet access for at least 30 days. If the migration is unrecoverable, you have not lost the source data. Most rollbacks happen because of trust failure, not data corruption.",
    },
    {
        q: "Should I assign a 'migration lead' from sales?",
        a: "Yes — non-negotiable. The migration lead validates data at the rep level, owns the parallel-run validation, and represents the team in the daily standup. Without a sales-side owner, engineering ships a technically clean migration that the team rejects. Pay the migration lead overtime if needed; it is the cheapest insurance in the project.",
    },
    {
        q: "How do I train reps on the new CRM?",
        a: "Two formats. A 60-minute group walkthrough that covers the daily workflow. Then per-rep 30-minute 1:1s where you sit with each rep, open their actual pipeline, and walk them through their first day in the new system. Group training alone fails for 30 to 50% of teams; the 1:1s recover that.",
    },
    {
        q: "What about ongoing data hygiene after migration?",
        a: "Implement field validation rules (required fields, format constraints, dropdown values). Schedule monthly dedup reviews. Auto-archive contacts with no activity in 12+ months. Most CRM data quality decay starts in month 3 to 6 after launch — set the hygiene cadence early.",
    },
];

const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "CRM Data Migration from Spreadsheets", url: `/blog/${SLUG}` },
];

const articleLd = articleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED_ISO,
    image: "https://quantlabusa.dev/og-crm.png",
    slug: SLUG,
    section: "CRM Migration",
    keywords: ["CRM migration", "spreadsheet migration", "Excel to CRM", "data migration"],
});
const breadcrumbLd = breadcrumbSchema(breadcrumbItems, `/blog/${SLUG}`);
const faqLd = faqSchema(faqItems);

export default function CrmDataMigrationFromSpreadsheetsPage() {
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
                        <li className="text-gray-300">CRM data migration from spreadsheets</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Database className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">MOFU Migration Playbook · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        CRM Data Migration from Spreadsheets: Step-by-Step Playbook
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        The 9-step playbook for moving a sales team from Excel or Google Sheets to a real CRM. Schema design, dedup strategy, history preservation, parallel run, rollback, and going live without losing the team's trust.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">Bill Beltz</Link>, founder of QUANT LAB USA INC · Published May 12, 2026
                    </p>
                    <ConsultationCTA label="Talk About a Migration" service="Custom CRM Development" source="blog-crm-migration" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer: how do I migrate from spreadsheets to a CRM?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Nine steps: 1) Inventory every spreadsheet and identify owners. 2) Design the target schema. 3) Profile the source data for quality and gaps. 4) Build the ETL with a sales-side migration lead. 5) Three-pass dedup with rep validation. 6) Stage in a test environment. 7) Run CRM and spreadsheets in parallel for 2 to 4 weeks. 8) Train reps with group sessions plus 1:1s. 9) Cut over on a Friday afternoon with the team paused, validate Saturday, soft-launch Monday. Migrations fail on people, not on data — invest in change management.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Sales teams that run on spreadsheets do it for a reason. The sheet bends to the rep's workflow. The CRM rep hires impose a schema that the sales team did not design. Most CRM rollouts fail not because the CRM is bad but because the migration loses the team's trust.
                        </p>
                        <p>
                            This playbook is what we ship at <Link href="/" className="text-sky-400 hover:underline">QUANT LAB USA</Link> when we migrate sales teams onto a <Link href="/services/custom-crm-development" className="text-sky-400 hover:underline">custom CRM</Link> or onto HubSpot/Pipedrive/Close. The mechanics are the same regardless of destination. See also our <Link href="/blog/crm-migration-from-salesforce-checklist" className="text-sky-400 hover:underline">Salesforce migration checklist</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The 9 steps</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Inventory every spreadsheet and identify owners</li>
                            <li>Design the target schema</li>
                            <li>Profile the source data</li>
                            <li>Build the ETL with a sales-side migration lead</li>
                            <li>Three-pass dedup with rep validation</li>
                            <li>Stage in a test environment</li>
                            <li>Parallel run for 2 to 4 weeks</li>
                            <li>Train reps with group sessions plus 1:1s</li>
                            <li>Cutover with rollback plan</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Step 1: Inventory every spreadsheet</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Most sales teams have 3 to 30 spreadsheets in active use. Find them all. Talk to every rep, every sales ops person, every marketing lead. Ask: 'What spreadsheet do you open at the start of each day?' and 'What sheet do you use to pull weekly reports?' The answers will surprise you.
                        </p>
                        <p>
                            Catalog: owner, purpose, row count, last modified, columns, who else has access. Identify which sheets are canonical and which are derived. The derived ones can be auto-generated post-migration; the canonical ones are the migration source.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Step 2: Design the target schema</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The CRM schema is the model your team will live in for years. Get it right. Standard objects for B2B sales:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Account / Company:</strong> the buying organization</li>
                            <li><strong>Contact:</strong> individual people at the account</li>
                            <li><strong>Opportunity / Deal:</strong> the active sales process</li>
                            <li><strong>Activity:</strong> calls, emails, meetings, notes</li>
                            <li><strong>Owner:</strong> the rep responsible</li>
                        </ul>
                        <p>
                            Add custom fields only when they earn their place. Each custom field costs cognitive load. We commonly start with 10 to 15 custom fields per object and grow from there. See our <Link href="/blog/custom-crm-development-guide" className="text-sky-400 hover:underline">Custom CRM Development Guide</Link> for deeper schema patterns.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Step 3: Profile the source data</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Before you transform anything, profile the source. Questions to answer per spreadsheet:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Total row count and unique-row count after trivial dedup</li>
                            <li>Column-level null rate</li>
                            <li>Date column formats (one column will have 5 different formats)</li>
                            <li>Status column values (one column will have 20 free-text variants)</li>
                            <li>Email validity (regex check)</li>
                            <li>Phone normalizable rate</li>
                            <li>Cross-sheet collisions (same email in 3 sheets, different status in each)</li>
                        </ul>
                        <p>
                            Output a 1-page profile per sheet. Share with the migration lead. Decisions about data treatment must be explicit, not implicit.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Step 4: Build the ETL</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Build an ETL pipeline that is rerunnable. Migrations are not one-shot. Expect to run the ETL 5 to 15 times during validation. Each run should reset the staging environment.
                        </p>
                        <p>
                            Stack we use:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Python or TypeScript scripts for transformation</li>
                            <li>Source: gspread or pandas for Sheets/Excel</li>
                            <li>Destination: CRM API (HubSpot, Pipedrive) or direct Postgres for custom CRMs</li>
                            <li>Logging at every transformation step</li>
                            <li>Reject queue for rows that fail validation</li>
                            <li>Idempotent imports keyed on a stable external_id</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Step 5: Three-pass dedup with rep validation</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Dedup is where automated migrations fail. The three-pass approach:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>Pass 1 (high confidence):</strong> Exact email match. Auto-merge with the most-recent record winning on conflicting fields.</li>
                            <li><strong>Pass 2 (medium confidence):</strong> Fuzzy email match (whitespace, case), name match within company. Flag for review.</li>
                            <li><strong>Pass 3 (low confidence):</strong> Phone normalization match, name + company match. Always flag for review.</li>
                        </ol>
                        <p>
                            For passes 2 and 3, the migration lead reviews flagged matches. Approve, reject, or merge with custom field selection. Budget 2 to 8 hours of migration lead time per 10K records.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Step 6: Stage in a test environment</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Never migrate directly to production. Stage in a copy environment that the migration lead and 1 to 2 reps can validate. Look for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Record counts match expected (source minus dedups)</li>
                            <li>Sample contacts open correctly (5 random per rep)</li>
                            <li>Sample deals show correct stage</li>
                            <li>Activity history attached to correct contacts</li>
                            <li>Reports run without errors</li>
                            <li>Search returns expected results</li>
                            <li>Permissions enforce correctly</li>
                        </ul>
                        <p>
                            Iterate the ETL until the staging environment passes rep validation. Most migrations run staging through 3 to 8 cycles.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Step 7: Parallel run for 2 to 4 weeks</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Once staging passes, promote to production but keep spreadsheets in read-write mode. Reps use both systems for 2 to 4 weeks. Daily sync from spreadsheets to CRM during this period catches any data the team enters into the sheet that did not get into the CRM.
                        </p>
                        <p>
                            Track usage. If reps are still entering data in spreadsheets after 2 weeks, something is missing in the CRM and you need to fix it. If usage is shifting to the CRM, schedule the cutover.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Step 8: Train reps</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Two-format training:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Group walkthrough (60 minutes):</strong> daily workflow, key features, where to find things. Record it.</li>
                            <li><strong>Per-rep 1:1 (30 minutes each):</strong> sit with each rep, open their pipeline, walk them through their first hour in the new system.</li>
                        </ul>
                        <p>
                            Group-only training fails for 30 to 50% of reps. The 1:1s catch the workflow-specific issues. Pay your time for the 1:1s — it is the cheapest insurance on adoption.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Step 9: Cutover with rollback plan</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Cutover on Friday afternoon. Team pauses entering new data into spreadsheets. ETL runs the final sync. Validation checks fire. Migration lead spot-checks 10 records per rep.
                        </p>
                        <p>
                            Spreadsheets go read-only Friday evening. Saturday morning: validate again. Monday morning: soft launch — team starts using the CRM as their primary system. Spreadsheets remain read-only for 30 days as a rollback option.
                        </p>
                        <p>
                            If a rollback is needed: revert CRM to read-only, return spreadsheets to read-write, debug the issue, replan the cutover. Never delete the source data during the rollback window.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Migration timeline reference</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Data complexity</th>
                                    <th className="px-4 py-3 border-b border-white/10">Calendar weeks</th>
                                    <th className="px-4 py-3 border-b border-white/10">Engineering cost</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Single sheet, &lt;5K contacts, low dedup need</td><td className="px-4 py-3">2 to 4</td><td className="px-4 py-3">$5K to $15K</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Multiple sheets, 10K to 50K contacts, light dedup</td><td className="px-4 py-3">4 to 6</td><td className="px-4 py-3">$15K to $30K</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Many sheets, 50K to 200K contacts, complex dedup, activity history</td><td className="px-4 py-3">6 to 10</td><td className="px-4 py-3">$30K to $60K</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Enterprise — multiple regions, languages, regulatory constraints</td><td className="px-4 py-3">10 to 20</td><td className="px-4 py-3">$60K to $150K</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Post-migration: data hygiene</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Migration is not the end. Data quality decays within 3 to 6 months without active hygiene. Build in:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Field validation rules (required, format, dropdown)</li>
                            <li>Monthly dedup review by sales ops</li>
                            <li>Auto-archive of contacts with no activity in 12+ months</li>
                            <li>Quarterly schema audit (are fields still earning their place?)</li>
                            <li>CRM adoption metrics (records updated per rep per week)</li>
                        </ul>
                        <p>
                            For ROI math on a clean CRM rollout, use our <Link href="/calculators/crm-roi" className="text-sky-400 hover:underline">CRM ROI calculator</Link>.
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
                            { href: "/services/custom-crm-development", label: "Custom CRM Development service" },
                            { href: "/services/custom-business-software", label: "Custom Business Software" },
                            { href: "/blog/custom-crm-development-guide", label: "Custom CRM Development Guide" },
                            { href: "/blog/custom-crm-vs-salesforce-vs-hubspot-2026", label: "Custom CRM vs Salesforce vs HubSpot" },
                            { href: "/blog/crm-migration-from-salesforce-checklist", label: "Salesforce Migration Checklist" },
                            { href: "/blog/build-vs-buy-software-2026", label: "Build vs Buy Software 2026" },
                            { href: "/blog/internal-tools-platform-engineering-guide", label: "Internal Tools Platform Engineering Guide" },
                            { href: "/glossary/what-is-a-crm", label: "What is a CRM?" },
                            { href: "/calculators/crm-roi", label: "CRM ROI calculator" },
                            { href: "/work/j5-sales-os", label: "Case study — J5 Sales OS" },
                            { href: "/work/coastal-yacht-services", label: "Case study — Coastal Yacht Services" },
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Plan your migration with someone who has done this.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute migration scoping call. Tell us about your spreadsheets, your team, and your target CRM. We will sketch the plan and a fair budget.
                        </p>
                        <ConsultationCTA label="Get a Migration Plan" service="Custom CRM Development" source="blog-migration-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug="crm-data-migration-from-spreadsheets"
                        topics={["crm"]}
                        heading="More custom CRM reading"
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
