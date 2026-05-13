import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ArrowRight, Check, Database } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";

const SLUG = "crm-migration-from-salesforce-checklist";
const PUBLISHED = "2026-05-12";

export const metadata: Metadata = articleMetadata({
    title: "Custom CRM Migration from Salesforce: The 30-Point Checklist (2026)",
    description:
        "A 30-point engineering checklist for migrating off Salesforce to a custom CRM in 2026. Data extraction, mapping, automation parity, integrations, and cutover order.",
    slug: `blog/${SLUG}`,
    image: "/og-crm.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ["Bill Beltz"],
    keywords: ["salesforce migration checklist", "salesforce to custom crm", "crm migration"],
});

const faqs = [
    { q: "How long does a Salesforce migration to a custom CRM take?", a: "A clean Salesforce-to-custom migration runs 8 to 16 weeks for a sales org under 50 seats, including data archeology, mapping, parallel-run, and cutover. Heavily customized orgs with 200+ Apex triggers, dozens of Flow processes, and a decade of Validation Rules can stretch to 6 to 9 months. The size of the data is rarely the bottleneck; the size of the workflow logic is." },
    { q: "Should I migrate all Salesforce history or only active records?", a: "Migrate active records (opportunities open or closed within the last 24 months, accounts with activity, contacts with engagement) into the new CRM and archive the rest to an S3-hosted Parquet warehouse with a read-only viewer. Migrating ten years of stale leads inflates timelines and slows day-one performance for no business value." },
    { q: "Can I run Salesforce and a custom CRM in parallel during cutover?", a: "Yes, and you should for at least 2 to 4 weeks. Run the new CRM as the system of record while keeping Salesforce read-only. Use a sync job (one direction, new to old) so anything created in the new system also appears in Salesforce for the holdouts. Cut Salesforce access entirely only after the sales team has signed off on the new system." },
    { q: "What does a Salesforce export actually give me?", a: "The Data Export Service produces zipped CSVs for every object — Accounts, Contacts, Opportunities, Custom Objects, Activities, Attachments, ContentDocuments. What you do not get is the workflow logic: Flows, Apex classes, validation rules, page layouts. Those have to be rebuilt from documentation or reverse-engineered from the Metadata API." },
    { q: "How do I handle Salesforce Files and attachments?", a: "Use the Bulk API plus ContentVersion queries to pull every file as a binary plus its parent record reference. Stream directly into S3 (or your storage provider), regenerate signed URLs in the new CRM, and re-link them via the parent ID mapping table. Plan for 200 to 500 GB on a 50-seat org with five years of attachments." },
    { q: "What is the highest-risk step in a Salesforce migration?", a: "Identifier remapping. Every Salesforce ID (18-character) becomes a new identifier in the custom CRM. If you do not store the original Salesforce ID as a foreign reference on every migrated record, you lose the ability to retroactively merge data, reconcile with legacy reports, or unwind a bad migration. Always keep the Salesforce ID on every record forever." },
    { q: "How much does a Salesforce migration cost?", a: "Migration engineering alone runs $40K to $150K for a typical small-business org, on top of the cost to build the new CRM. The variables are the number of custom objects, the depth of automation logic, the integration count, and whether the source org uses managed packages that need replacement logic. Big consultancies quote $250K to $1M for the same scope." },
    { q: "Will my Salesforce integrations still work on the new CRM?", a: "No. Every integration that calls the Salesforce REST or Bulk API has to be rewritten against the new CRM API. Outbound integrations (Salesforce sending to other systems) are usually easier because the new CRM emits the events. Inbound integrations (other systems writing to Salesforce) are harder and typically take 60 to 80% of the integration rebuild effort." },
    { q: "What happens to Salesforce reports and dashboards?", a: "They are not migrated. The new CRM will have its own reporting layer, usually built on Postgres views or a warehouse like BigQuery or Snowflake. Plan a separate reporting workstream that catalogs the 10 to 20 reports the team actually uses (not the 400 that exist) and rebuilds them natively. Anything else gets archived." },
    { q: "What about Pardot, Marketing Cloud, or Account Engagement?", a: "Marketing automation is a separate migration. The CRM holds the system of record for contacts and accounts; the marketing tool holds engagement history. Decouple them in the project: cut the CRM over first, then migrate marketing automation in a second phase. Trying to do both at once doubles the risk." },
    { q: "What is the worst-case failure mode for a Salesforce migration?", a: "Cutting over the CRM before integration parity is complete, then realizing the order-to-cash flow is broken and there is no way back without paying Salesforce again. The mitigation is a strict pre-cutover checklist requiring every integration, automation, and report to be live and validated in the new system for two full sales cycles before retiring Salesforce access." },
    { q: "Can QUANT LAB USA run our Salesforce migration?", a: "Yes. We have run migrations for sales orgs of 5 to 80 seats. We treat migration as a series of engineering deliverables — extract scripts, mapping tables, validation harnesses, cutover playbook — not a one-shot import. Engagements run 12 to 20 weeks end-to-end and include parallel-run, training, and a 30-day post-cutover support window." },
];

export default function CrmMigrationFromSalesforcePage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: "Custom CRM Migration from Salesforce: The 30-Point Checklist (2026)", description: "A 30-point engineering checklist for migrating off Salesforce to a custom CRM in 2026.", datePublished: PUBLISHED, slug: SLUG, image: "https://quantlabusa.dev/og-crm.png", author: { name: "Bill Beltz", url: "https://quantlabusa.dev/about" }, section: "CRM" })) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Salesforce migration checklist", url: `/blog/${SLUG}` }])) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Salesforce migration checklist</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Database className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">MOFU Migration Guide · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Custom CRM Migration from Salesforce: The 30-Point Checklist (2026)
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        Thirty engineering checkpoints we run for every Salesforce-to-custom CRM migration. Data extraction, identifier mapping, automation parity, integration rebuild, parallel-run, and cutover order — without losing a single deal.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">Bill Beltz</Link>, founder of QUANT LAB USA INC · Published May 12, 2026
                    </p>
                    <ConsultationCTA label="Scope a Salesforce Migration" service="Custom CRM Development" source="blog-crm-salesforce-migration" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>A Salesforce-to-custom CRM migration in 2026 takes 8 to 20 weeks and runs across five engineering phases: data archeology, schema mapping, automation parity, integration rebuild, and parallel-run cutover. The thirty checkpoints in this guide are the ones we run on every engagement to avoid the three migration killers: lost history, broken automations, and integration drift. Budget $40K to $150K for migration engineering alone, on top of the cost to build the new CRM.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Salesforce migrations fail the same way every time. The data comes over clean. The automation does not. Three weeks after cutover someone discovers that the renewal-notification Flow was running on a custom object that did not get mapped, and forty renewals slipped past the team because nobody was watching that queue anymore. The CRM is fine. The business process is broken.
                        </p>
                        <p>
                            I have run enough <Link href="/services/custom-crm-development" className="text-sky-400 hover:underline">custom CRM migrations</Link> off Salesforce to know that the spreadsheet of objects is the easy part. The hard part is reproducing every Workflow Rule, Process Builder, Flow, and Apex trigger as explicit business logic in the new system — and proving that logic works before the legacy org goes read-only.
                        </p>
                        <p>
                            This checklist is the one we run end-to-end. Use it as a scope document, a sequencing guide, or a sanity check on whatever your current vendor proposed.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Phase 1: Data archeology (weeks 1 to 3)</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol className="list-decimal pl-6 space-y-3">
                            <li><strong>Catalog every object.</strong> Standard objects (Account, Contact, Lead, Opportunity, Case, Campaign) and every Custom Object. List record counts, recent activity, and last-write timestamps per object.</li>
                            <li><strong>Catalog every field.</strong> For each object, dump the full field schema with data type, picklist values, required flag, formula logic, and validation rules. The Metadata API is your friend here.</li>
                            <li><strong>Identify the long tail.</strong> Most Salesforce orgs have 30 to 60% of fields with under 5% population. Flag them for deletion-on-migration, not rebuild.</li>
                            <li><strong>Map Record Types.</strong> Each Record Type usually represents a distinct business process. The new CRM has to express that distinction explicitly — usually as a separate route or a type discriminator.</li>
                            <li><strong>Catalog every automation.</strong> Workflow Rules, Process Builder flows, Flow Builder flows, Apex triggers, scheduled batch jobs, and managed packages. This list is usually 3 to 5x longer than the team thinks.</li>
                            <li><strong>Catalog every integration.</strong> Both directions. Outbound (Salesforce-to-other) and inbound (other-to-Salesforce). Include the bidirectional ones that pretend to be one-way.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Phase 2: Schema mapping (weeks 3 to 5)</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol className="list-decimal pl-6 space-y-3" start={7}>
                            <li><strong>Build a master mapping table.</strong> Source object plus field, target table plus column, transform rule, validation rule, default value, and notes. One row per source field. This becomes the contract for every extract-transform-load script.</li>
                            <li><strong>Decide what to consolidate.</strong> Salesforce orgs accumulate duplicate fields (`Status__c` vs `Stage__c` vs `Phase__c`). Migration is the chance to fix the data model.</li>
                            <li><strong>Decide what to deprecate.</strong> Anything with under 1% population, no automation, no report, and no integration consumer. Document the decision and the count of affected records.</li>
                            <li><strong>Define identifier strategy.</strong> Every migrated record gets a new UUID plus a `salesforce_id` foreign reference. The Salesforce ID stays on the record forever. Never throw it away.</li>
                            <li><strong>Pick the primary key for de-dupe.</strong> Accounts on domain plus company name. Contacts on email. Opportunities on Salesforce ID (always). Run a dry-pass to surface duplicates before the real migration.</li>
                            <li><strong>Build the validation harness.</strong> A script that runs after every load and compares row counts, sum-of-amount, distinct-owner-count, and ten other sanity checks between source and target. Run it after every load forever.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Phase 3: Automation parity (weeks 5 to 10)</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol className="list-decimal pl-6 space-y-3" start={13}>
                            <li><strong>Translate each Workflow Rule.</strong> Most become Postgres triggers, application-layer event handlers, or scheduled jobs in the new CRM. Document the trigger, the condition, and the action explicitly.</li>
                            <li><strong>Translate each Process Builder process.</strong> These are often chained workflow rules. Re-express them as state machines in the new application layer — clearer to maintain.</li>
                            <li><strong>Translate each Flow.</strong> Flows can branch and call sub-flows. Map each one to a typed function or service module with explicit inputs, outputs, and side effects.</li>
                            <li><strong>Re-express Apex triggers.</strong> Where Apex was a workaround for declarative limits, rewrite as plain application code with proper tests. Where Apex implemented complex business logic, port the algorithm and write coverage tests.</li>
                            <li><strong>Identify managed-package replacements.</strong> Conga, DocuSign, Apttus, Pardot. Each becomes either a third-party integration in the new CRM or a custom feature.</li>
                            <li><strong>Build the parity test suite.</strong> A set of scenarios — "create a deal, change stage to closed-won, observe X" — that runs against both old and new systems and asserts identical outcomes.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Salesforce migration cost ranges (2026)</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Org profile</th>
                                    <th className="px-4 py-3 border-b border-white/10">Migration engineering</th>
                                    <th className="px-4 py-3 border-b border-white/10">Timeline</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Lite — under 20 seats, standard objects only</td><td className="px-4 py-3">$25K to $55K</td><td className="px-4 py-3">8 to 12 weeks</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Standard — 20 to 60 seats, 5 to 15 custom objects, moderate automation</td><td className="px-4 py-3">$55K to $120K</td><td className="px-4 py-3">12 to 18 weeks</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Heavy — 60 to 200 seats, deep Apex and Flow customization</td><td className="px-4 py-3">$120K to $300K</td><td className="px-4 py-3">18 to 28 weeks</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Enterprise — 200+ seats, multiple business units, regulatory data</td><td className="px-4 py-3">$300K to $800K</td><td className="px-4 py-3">28 to 52 weeks</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        These ranges cover migration engineering only. The cost to build the new CRM is separate. Get a sense of total cost via the <Link href="/calculators/crm-roi" className="text-sky-400 hover:underline">CRM ROI calculator</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Phase 4: Integration rebuild (weeks 8 to 14)</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol className="list-decimal pl-6 space-y-3" start={19}>
                            <li><strong>Inventory every integration consumer.</strong> ERP, marketing automation, support tool, data warehouse, accounting, billing — anything that talks to Salesforce in either direction.</li>
                            <li><strong>Document the contract.</strong> What payload, what frequency, what auth, what failure mode. This document is the spec for the rebuild.</li>
                            <li><strong>Rebuild outbound first.</strong> The new CRM emits events. Subscribe each downstream consumer to the new event stream. Compare against legacy Salesforce events for two weeks.</li>
                            <li><strong>Rebuild inbound second.</strong> Anything writing to Salesforce gets pointed at the new CRM. This is where you find the integration that nobody documented because it was a one-off Zapier zap from 2019.</li>
                            <li><strong>Preserve the audit trail.</strong> Every record write from an integration logs source, payload, timestamp, and result. Auditors will ask.</li>
                        </ol>
                        <p className="mt-4">
                            For more on building integrations on a custom stack, see <Link href="/services/api-development" className="text-sky-400 hover:underline">our API development service</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Phase 5: Parallel-run and cutover (weeks 12 to 20)</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol className="list-decimal pl-6 space-y-3" start={24}>
                            <li><strong>Run both systems in parallel.</strong> The new CRM is the system of record; Salesforce is read-only mirror. Sync new-to-old for 2 to 4 weeks.</li>
                            <li><strong>Train every user.</strong> Recorded sessions plus live workshops. Capture every "where did X go" question — those become release-note items.</li>
                            <li><strong>Migrate attachments and files.</strong> Stream from ContentVersion to S3, regenerate references, verify checksums on every file.</li>
                            <li><strong>Rebuild the top 20 reports.</strong> Not all 400. Just the ones the team actually opens weekly. Archive the rest to a static-export viewer.</li>
                            <li><strong>Run the cutover checklist.</strong> Every integration green for 14 days. Every automation green for 14 days. Sales sign-off in writing.</li>
                            <li><strong>Cut Salesforce to read-only.</strong> Not deactivated. Read-only with a 90-day window for retroactive lookups.</li>
                            <li><strong>Plan the Salesforce contract exit.</strong> Renewal notice is usually 30 days. Coordinate the cancel date with the read-only window expiry. Do not pay for another year.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Mid-post: free quote</h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">Salesforce renewal is coming up. We can scope a migration in a single 60-minute call.</p>
                        <ConsultationCTA label="Scope My Salesforce Exit" service="Custom CRM Development" source="blog-crm-salesforce-migration-mid" />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The three migration killers</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Every failed Salesforce migration we have audited (and we have audited a few that other vendors ran) failed in one of three predictable ways.
                        </p>
                        <ol className="list-decimal pl-6 space-y-3">
                            <li><strong>Lost history.</strong> Activities, notes, attachments, or email logs that did not come over. Sales loses the last-touched timestamp on an account and the renewal conversation falls apart.</li>
                            <li><strong>Broken automation.</strong> The notification, escalation, or assignment rule that was implicit in Salesforce is silently missing in the new system. Deals sit in queues with no owner.</li>
                            <li><strong>Integration drift.</strong> An inbound integration keeps writing to Salesforce after cutover because nobody documented it. Data shows up on neither side cleanly.</li>
                        </ol>
                        <p>
                            The checklist above is designed to surface all three before they bite. Real-world examples: see the <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS case study</Link> and the <Link href="/work/wilder-recovery" className="text-sky-400 hover:underline">Wilder Recovery operations platform case study</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">When you should not migrate off Salesforce</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Not every Salesforce org is a candidate to leave. We have told prospects to stay on Salesforce more than once. The honest signal that custom is wrong:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>You actively use Salesforce-native analytics (CRM Analytics / Tableau CRM) and the dashboards drive revenue decisions.</li>
                            <li>Your sales process is genuinely commodity (lead-to-opp-to-quote-to-close) and matches Sales Cloud out of the box.</li>
                            <li>You have under 20 seats and your team's pain is process discipline, not tooling.</li>
                            <li>Your AppExchange managed packages do work that would take 6+ months to rebuild.</li>
                        </ul>
                        <p>
                            The honest signal that custom is right: you have built a Frankenstein of Apex, Flows, and managed packages to force Salesforce to behave like the system you actually need. At that point you are paying a license fee for a custom application you already built — just on someone else&apos;s runtime. See the full <Link href="/blog/custom-crm-development-guide" className="text-sky-400 hover:underline">custom CRM development guide</Link> for the deeper build-vs-stay framework.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The cutover playbook (the 30th checkpoint)</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Cutover is the only step the team will remember. The playbook we run, in order, the week of cutover:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Friday 5 PM: freeze writes to Salesforce. Communicate to the team in three channels.</li>
                            <li>Friday 6 PM: run final delta extract. Apply to the new CRM. Run validation harness.</li>
                            <li>Saturday 9 AM: flip integration endpoints. Verify outbound and inbound traffic flowing to the new CRM.</li>
                            <li>Saturday 12 PM: open the new CRM to a pilot group. They run real sales workflows for 4 hours.</li>
                            <li>Saturday 5 PM: open to the full team. Salesforce becomes read-only.</li>
                            <li>Monday 8 AM: first business day on the new system. Engineering on standby in shared chat.</li>
                            <li>Friday week 1: post-cutover review. Triage the top 10 issues. Patch.</li>
                            <li>Day 90: kill the read-only Salesforce instance. Cancel the contract.</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Frequently asked questions</h2>
                    <div className="space-y-6">
                        {faqs.map((item) => (
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
                            { href: "/services/api-development", label: "API Development service" },
                            { href: "/services/saas-platform-development", label: "SaaS Platform Development" },
                            { href: "/services/stripe-integration", label: "Stripe Integration service" },
                            { href: "/blog/custom-crm-development-guide", label: "Custom CRM development pillar guide" },
                            { href: "/blog/custom-crm-vs-salesforce-vs-hubspot-2026", label: "Custom CRM vs Salesforce vs HubSpot (2026)" },
                            { href: "/vs/salesforce", label: "QUANT LAB USA vs Salesforce" },
                            { href: "/work/j5-sales-os", label: "Case study — J5 Sales OS" },
                            { href: "/work/wilder-recovery", label: "Case study — Wilder Recovery operations platform" },
                            { href: "/software-development-atlanta-ga", label: "Atlanta software development" },
                            { href: "/calculators/crm-roi", label: "CRM ROI calculator" },
                            { href: "/resources/crm-rollout-playbook", label: "CRM rollout playbook (free download)" },
                            { href: "/contact", label: "Talk to Bill about your Salesforce exit" },
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to leave Salesforce.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            We will scope your migration in a single call. Free, no obligation, no sales engineer. Just an engineer asking the right questions.
                        </p>
                        <ConsultationCTA label="Book the Scoping Call" service="Custom CRM Development" source="blog-crm-salesforce-migration-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill directly at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
                        </div>
                    </div>
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
