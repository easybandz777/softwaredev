import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { EditorialFooter } from "@/components/EditorialFooter";
import { Sources } from "@/components/Sources";
import { ArrowRight, Check, Database } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, faqSchema } from "@/lib/schemas";
import { getAuthor, authorUrl } from "@/lib/authors";

const SLUG = "database-migrations-without-downtime-2026";
const PUBLISHED = "2026-06-03";
const TITLE = "Database Migrations Without Downtime (2026)";
const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: "Database Migrations Without Downtime: A 2026 Guide",
    description:
        "How to ship schema changes to a live production database with zero downtime: expand-and-contract, online DDL, backfills, dual writes, and safe rollbacks — with code.",
    slug: `blog/${SLUG}`,
    image: "/og-image.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [author.name],
    keywords: [
        "zero downtime database migration",
        "expand and contract migration",
        "online schema change postgres",
        "safe database backfill 2026",
    ],
});

const faqs = [
    {
        q: "How do you run a database migration without downtime?",
        a: "Use the expand-and-contract pattern. First expand the schema in a fully backward-compatible way — add the new column or table while leaving the old one in place. Deploy code that writes to both and reads from the old shape. Backfill historical rows in small batches. Switch reads to the new shape. Only after the old shape is provably unused do you contract by dropping it. Every step is independently deployable and reversible, so no single deploy requires a maintenance window.",
    },
    {
        q: "What is the expand-and-contract migration pattern?",
        a: "Also called parallel-change, it splits a breaking schema change into a sequence of non-breaking ones. The expand phase adds new structures alongside the old. A transition phase runs code compatible with both shapes while data is backfilled and reads move over. The contract phase removes the old structures once nothing depends on them. Because old and new code coexist at every deploy boundary, you can roll a release backward or forward without corrupting data.",
    },
    {
        q: "Why are some Postgres migrations dangerous on large tables?",
        a: "Certain DDL statements take an ACCESS EXCLUSIVE lock or rewrite the whole table, which blocks reads and writes for the duration. Adding a NOT NULL column with a non-constant default on older Postgres, changing a column type, or creating an index without CONCURRENTLY can lock a large table for minutes. The fix is to add nullable columns, set defaults separately, backfill in batches, and build indexes with CREATE INDEX CONCURRENTLY so the table stays writable.",
    },
    {
        q: "How do you backfill a column on a huge table safely?",
        a: "Never run a single UPDATE across millions of rows — it holds locks and bloats the transaction log. Instead, backfill in bounded batches (a few thousand rows each) keyed on the primary key, commit between batches, and sleep briefly to leave headroom for production traffic. Make the operation idempotent and resumable so a crash mid-backfill can restart from the last processed id without double-applying.",
    },
    {
        q: "Should migrations and application deploys be coupled?",
        a: "Decouple them. Run the schema migration as its own step that lands before the code that depends on it, and design each migration so the currently running application version keeps working against the new schema. Coupling a breaking schema change to the same deploy that consumes it creates a window where old pods see a schema they cannot handle. The expand-and-contract sequence exists precisely to keep migration and deploy independent.",
    },
    {
        q: "How do you roll back a database migration?",
        a: "By making forward steps reversible rather than relying on a down-migration that drops data. Additive expand steps are trivially reversible — you simply stop using the new column. Destructive contract steps should run only once the new path has been verified in production for long enough to be confident. For data changes, prefer a feature flag that flips reads back to the old shape over a schema rollback that loses writes made in the interim.",
    },
];

const sources = [
    {
        label: "PostgreSQL Documentation — ALTER TABLE",
        href: "https://www.postgresql.org/docs/current/sql-altertable.html",
        publisher: "PostgreSQL",
    },
    {
        label: "PostgreSQL Documentation — CREATE INDEX (CONCURRENTLY)",
        href: "https://www.postgresql.org/docs/current/sql-createindex.html",
        publisher: "PostgreSQL",
    },
    {
        label: "ParallelChange (expand and contract)",
        href: "https://martinfowler.com/bliki/ParallelChange.html",
        publisher: "Martin Fowler",
    },
    {
        label: "Strong Migrations — safe Rails/Postgres migration rules",
        href: "https://github.com/ankane/strong_migrations",
        publisher: "Andrew Kane",
    },
];

export default function DatabaseMigrationsPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        articleSchema({
                            headline:
                                "Database Migrations Without Downtime: A 2026 Guide",
                            description:
                                "Expand-and-contract, online DDL, batched backfills, dual writes, and safe rollbacks for live production databases.",
                            datePublished: PUBLISHED,
                            slug: SLUG,
                            image: "https://quantlabusa.dev/og-image.png",
                            author: { name: author.name, url: authorUrl(author.slug) },
                            section: "Engineering",
                            keywords: [
                                "zero downtime database migration",
                                "expand and contract migration",
                                "online schema change postgres",
                            ],
                        }),
                    ),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <Breadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: TITLE },
                    ]}
                />

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Database className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">
                        Database Engineering · 2026
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Database Migrations Without Downtime: A 2026 Guide
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        A schema change should never require a maintenance window. This is
                        the practitioner&apos;s guide to shipping migrations against a live
                        production database — expand-and-contract, online DDL, batched
                        backfills, dual writes, and rollbacks that don&apos;t lose data.
                    </p>
                    <AuthorByline
                        author={author}
                        publishedDate={PUBLISHED}
                        readMinutes={12}
                        className="mb-8"
                    />
                    <ConsultationCTA
                        label="Talk Through a Migration"
                        service="Custom Software Development"
                        source="blog-db-migrations"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Quick answer
                        </h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                Ship zero-downtime migrations with the expand-and-contract
                                pattern: add new schema in a backward-compatible way, deploy
                                code that writes to both shapes, backfill historical rows in
                                small batches, switch reads to the new shape, and only then drop
                                the old one. Keep every step independently deployable and
                                reversible, build indexes with CREATE INDEX CONCURRENTLY, and
                                never couple a breaking schema change to the deploy that consumes
                                it.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Most outages attributed to &quot;the database&quot; are not capacity
                            problems — they are a single migration that took a table-level lock
                            during peak traffic. The good news is that nearly every schema change
                            can be expressed as a sequence of small, safe, backward-compatible
                            steps. We build and operate production systems for a living, and our{" "}
                            <Link
                                href="/services"
                                className="text-sky-400 hover:underline"
                            >
                                custom software practice
                            </Link>{" "}
                            treats &quot;no maintenance window&quot; as a baseline requirement,
                            not a luxury. If you are still deciding on an engine, our{" "}
                            <Link
                                href="/blog/postgres-vs-mysql-for-saas-2026"
                                className="text-sky-400 hover:underline"
                            >
                                Postgres vs MySQL comparison
                            </Link>{" "}
                            covers the operational tradeoffs that make online DDL easier or
                            harder.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        1. The expand-and-contract pattern
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A breaking change — renaming a column, splitting a table, tightening a
                            constraint — becomes safe when you decompose it into an{" "}
                            <strong className="text-white">expand</strong> phase, a{" "}
                            <strong className="text-white">transition</strong> phase, and a{" "}
                            <strong className="text-white">contract</strong> phase. The rule that
                            makes it work: at every deploy boundary, both the previous and the
                            next version of your application must run correctly against the
                            schema that exists at that moment.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Expand.</strong> Add the new column,
                                table, or index. This is purely additive and breaks nothing.
                            </li>
                            <li>
                                <strong className="text-white">Transition.</strong> Deploy code
                                that writes to both old and new, backfill historical data, then
                                move reads to the new shape.
                            </li>
                            <li>
                                <strong className="text-white">Contract.</strong> Once nothing
                                reads or writes the old structure, drop it in a final migration.
                            </li>
                        </ul>
                        <p>
                            A &quot;rename&quot; that would normally lock a table and break
                            in-flight requests turns into four boring, reversible deploys. That is
                            the whole trick.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        2. Online DDL: the statements that lock
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The danger is not the migration concept — it is specific DDL that
                            takes an <code className="text-sky-300">ACCESS EXCLUSIVE</code> lock or
                            rewrites the table. Adding an index without{" "}
                            <code className="text-sky-300">CONCURRENTLY</code> blocks writes for
                            the entire build. Knowing which statements are safe is most of the
                            battle.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`-- DANGEROUS — locks the table while the index builds
CREATE INDEX idx_orders_user ON orders (user_id);

-- SAFE — builds the index without blocking writes
CREATE INDEX CONCURRENTLY idx_orders_user ON orders (user_id);

-- DANGEROUS on older Postgres — rewrites every row
ALTER TABLE orders ADD COLUMN status text NOT NULL DEFAULT 'open';

-- SAFE — split it: add nullable, set default, backfill, then enforce
ALTER TABLE orders ADD COLUMN status text;          -- instant
ALTER TABLE orders ALTER COLUMN status SET DEFAULT 'open';  -- instant
-- backfill in batches (see below), then:
ALTER TABLE orders ALTER COLUMN status SET NOT NULL;`}</code>
                        </pre>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Always build indexes with{" "}
                                <code className="text-sky-300">CONCURRENTLY</code> on populated
                                tables; it is slower but never blocks writes.
                            </li>
                            <li>
                                Add columns as nullable first. Setting a default is metadata-only
                                on modern Postgres, but a backfill of existing rows is not.
                            </li>
                            <li>
                                Adding a foreign key or check constraint{" "}
                                <code className="text-sky-300">NOT VALID</code> first, then{" "}
                                <code className="text-sky-300">VALIDATE CONSTRAINT</code>, avoids a
                                full-table lock.
                            </li>
                            <li>
                                Set a short{" "}
                                <code className="text-sky-300">lock_timeout</code> on migration
                                sessions so a blocked DDL fails fast instead of queueing behind
                                production traffic.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        3. Backfilling without bloat
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A single <code className="text-sky-300">UPDATE</code> across millions
                            of rows is the second most common self-inflicted outage. It holds row
                            locks, balloons the write-ahead log, and can starve vacuum. Backfill in
                            bounded, resumable batches instead.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// Batched, resumable backfill — a few thousand rows at a time
let lastId = 0;
const BATCH = 2000;
for (;;) {
  const rows = await db.query(
    \`UPDATE orders SET status = 'open'
       WHERE id > $1 AND status IS NULL
       ORDER BY id
       LIMIT $2
     RETURNING id\`,
    [lastId, BATCH],
  );
  if (rows.length === 0) break;
  lastId = rows[rows.length - 1].id;
  await sleep(50); // leave headroom for live traffic
}`}</code>
                        </pre>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Key batches on the primary key and commit between them — short
                                transactions release locks and let vacuum keep up.
                            </li>
                            <li>
                                Make the backfill idempotent (the{" "}
                                <code className="text-sky-300">status IS NULL</code> guard) so it
                                can crash and resume without double-applying.
                            </li>
                            <li>
                                Throttle. A backfill that finishes in twenty minutes with zero user
                                impact beats one that finishes in two and spikes latency.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        4. Dual writes during the transition
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            While historical rows backfill, new rows keep arriving. The transition
                            phase keeps both shapes correct by writing to each and reading from the
                            old one until the new column is fully populated and verified.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Deploy code that writes the new column on every insert/update while
                                still reading the old one. Now no new row is ever missing data.
                            </li>
                            <li>
                                Run the backfill to fill the gap left by old rows. When it
                                completes, every row has the new value.
                            </li>
                            <li>
                                Flip reads to the new column behind a flag, watch your metrics, then
                                stop writing the old one.
                            </li>
                            <li>
                                Prefer a database trigger or application-layer dual write over a
                                long-lived ETL job — fewer moving parts to fail mid-migration.
                            </li>
                        </ul>
                        <p>
                            This is the same discipline that keeps a sharded or partitioned system
                            consistent. For the broader scaling picture, see our{" "}
                            <Link
                                href="/blog/scaling-a-saas-database-guide-2026"
                                className="text-sky-400 hover:underline"
                            >
                                guide to scaling a SaaS database
                            </Link>
                            .
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Mid-post: decouple the migration from the deploy
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">
                            The single highest-leverage habit is running the schema change as its
                            own step that lands before the code depending on it. Need a second set
                            of eyes on a risky migration plan? Book a free scoping call.
                        </p>
                        <ConsultationCTA
                            label="Review My Migration Plan"
                            service="Custom Software Development"
                            source="blog-db-migrations-mid"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Safe vs dangerous operations at a glance
                    </h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">
                                        Operation
                                    </th>
                                    <th className="px-4 py-3 border-b border-white/10">
                                        Safe approach
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Add index</td>
                                    <td className="px-4 py-3">CREATE INDEX CONCURRENTLY</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Add column</td>
                                    <td className="px-4 py-3">
                                        Nullable first; set default + backfill separately
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Add constraint</td>
                                    <td className="px-4 py-3">
                                        Add NOT VALID, then VALIDATE CONSTRAINT
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Rename column</td>
                                    <td className="px-4 py-3">
                                        New column + dual write + backfill + drop old
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Change type</td>
                                    <td className="px-4 py-3">
                                        New column of new type, migrate, swap, drop old
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Drop column</td>
                                    <td className="px-4 py-3">
                                        Stop using it in code first; drop in a later deploy
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Operational practices that hold over time
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Tooling discipline keeps migrations boring as a team grows:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Lint migrations in CI.</strong> A
                                guard that rejects a non-concurrent index or a blocking type change
                                stops the outage before review.
                            </li>
                            <li>
                                <strong className="text-white">Test on production-shaped data.</strong>{" "}
                                A migration that is instant on an empty staging table can lock for
                                minutes on a hundred-million-row production table.
                            </li>
                            <li>
                                <strong className="text-white">Observe the rollout.</strong> Watch
                                lock waits, replication lag, and error rates during and after each
                                step — covered in our{" "}
                                <Link
                                    href="/blog/observability-for-startups-2026"
                                    className="text-sky-400 hover:underline"
                                >
                                    observability for startups guide
                                </Link>
                                .
                            </li>
                        </ul>
                        <p>
                            If your migrations run from a background worker or a one-off job runner,
                            the same batching and idempotency rules apply — see{" "}
                            <Link
                                href="/blog/background-jobs-and-queues-in-production-2026"
                                className="text-sky-400 hover:underline"
                            >
                                background jobs and queues in production
                            </Link>
                            .
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Frequently asked questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((item) => (
                            <div
                                key={item.q}
                                className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6"
                            >
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <Sources items={sources} />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Related reading and next steps
                    </h2>
                    <ul className="space-y-3">
                        {[
                            { href: "/blog/scaling-a-saas-database-guide-2026", label: "Scaling a SaaS database (2026)" },
                            { href: "/blog/postgres-vs-mysql-for-saas-2026", label: "Postgres vs MySQL for SaaS (2026)" },
                            { href: "/blog/building-multi-tenant-saas-postgres-rls", label: "Building multi-tenant SaaS on Postgres RLS" },
                            { href: "/blog/background-jobs-and-queues-in-production-2026", label: "Background jobs and queues in production" },
                            { href: "/blog/observability-for-startups-2026", label: "Observability for startups (2026)" },
                            { href: "/services", label: "Custom software development services" },
                            { href: "/blog", label: "All engineering articles" },
                            { href: "/contact", label: "Talk to Bill about your migration" },
                        ].map((l) => (
                            <li key={l.href} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                <Link href={l.href} className="text-sky-400 hover:underline">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <EditorialFooter reviewedDate={PUBLISHED} />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ship the schema change. Skip the maintenance window.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            We design and run zero-downtime migrations on live production
                            databases. Book a free scoping call and we&apos;ll map your change to
                            a safe, reversible sequence.
                        </p>
                        <ConsultationCTA
                            label="Book the Scoping Call"
                            service="Custom Software Development"
                            source="blog-db-migrations-cta"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug={SLUG}
                        topics={["stack", "saas"]}
                        pinned={[
                            "scaling-a-saas-database-guide-2026",
                            "postgres-vs-mysql-for-saas-2026",
                            "building-multi-tenant-saas-postgres-rls",
                        ]}
                        heading="More engineering reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link
                            href="/blog"
                            className="hover:text-sky-400 inline-flex items-center gap-1"
                        >
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated June 3, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
