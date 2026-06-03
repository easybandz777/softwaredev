import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Database Indexing? Definition + How It Works | QUANT LAB USA",
    description:
        "A database index is a lookup structure that lets queries find rows fast instead of scanning every record. Plain-English definition and how it works — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-database-indexing" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Database Indexing",
    description:
        "A database index is a separate, ordered data structure that lets the database locate matching rows quickly without scanning an entire table, trading extra storage and write cost for far faster reads.",
    url: "https://quantlabusa.dev/glossary/what-is-database-indexing",
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
            name: "What is Database Indexing?",
            item: "https://quantlabusa.dev/glossary/what-is-database-indexing",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is a database index in simple terms?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A database index is like the index at the back of a book. Instead of reading every page to find a topic, you look it up in the sorted index and jump straight to the right page. The database uses an index to find matching rows without scanning the whole table.",
            },
        },
        {
            "@type": "Question",
            name: "Why not index every column?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Because every index must be kept up to date on every insert, update, and delete, and it consumes storage. Too many indexes slow down writes and waste space. You index the columns your queries actually filter, join, or sort on.",
            },
        },
        {
            "@type": "Question",
            name: "What is a B-tree index?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A B-tree is the most common index type, a balanced tree that keeps keys sorted so the database can find any value, or a range of values, in a few steps. It is the default in databases like PostgreSQL and handles equality and range queries efficiently.",
            },
        },
        {
            "@type": "Question",
            name: "What is a composite index?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A composite index covers more than one column in a specific order. It speeds up queries that filter on those columns together, but the column order matters — the index helps most when queries use the leading columns first.",
            },
        },
        {
            "@type": "Question",
            name: "How do I know if my query needs an index?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Run the database's query plan tool, such as EXPLAIN in PostgreSQL. If it shows a full table scan on a large table for a query you run often, an index on the filtered or joined column is usually the fix.",
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
                        <li className="text-gray-300">What is Database Indexing?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Software
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is Database Indexing?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A database index is a separate, sorted lookup structure that lets the database find matching rows almost instantly — like the index at the back of a book — instead of reading every record in the table to answer a query.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What database indexing means</h2>
                    <p>
                        <strong>Database indexing</strong> is the practice of building auxiliary data
                        structures that make reads fast. Without an index, finding the rows that match a
                        query means a <em>full table scan</em> — the database reads every row and checks
                        each one. On a small table that is fine; on a table with millions of rows it is
                        painfully slow. An index sidesteps the scan by keeping the relevant values in a
                        sorted, quickly searchable structure that points to where each matching row lives.
                    </p>
                    <p>
                        The analogy is exactly the index of a book. To find every mention of a topic, you
                        do not read all 400 pages — you flip to the alphabetized index and jump to the
                        listed pages. A database index does the same job: it answers &quot;where are the
                        rows where this column equals that value?&quot; in a handful of steps rather than a
                        linear march through the data.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it came from</h2>
                    <p>
                        Indexing is as old as databases themselves. As relational databases took hold in
                        the 1970s and 1980s, the B-tree — a balanced, sorted tree structure — became the
                        workhorse index because it handles both exact matches and range lookups
                        efficiently while staying balanced as data changes. It remains the default index
                        type in most relational databases today.
                    </p>
                    <p>
                        Since then the toolbox has grown. Hash indexes optimize pure equality lookups,
                        specialized indexes accelerate full-text search and geographic data, and partial or
                        expression indexes target specific query shapes. But the central trade has never
                        changed: an index spends storage and a little write overhead to buy dramatically
                        faster reads.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works</h2>
                    <p>
                        A typical B-tree index keeps the indexed column&apos;s values sorted in a tree
                        whose depth stays shallow even as the table grows. To find a value, the database
                        walks a few nodes from the top of the tree to a leaf and follows a pointer to the
                        actual row. Because the keys are sorted, the same structure also answers range
                        queries — everything between two dates, say — and can satisfy <code>ORDER BY</code>{" "}
                        without a separate sort step.
                    </p>
                    <p>
                        The cost is paid on writes. Every insert, update, or delete that touches an indexed
                        column must also update the index to keep it correct, so each additional index makes
                        writes a little slower and uses more disk. That is why you do not index everything:
                        you index the columns your queries filter on, join on, or sort by. Composite indexes
                        cover several columns at once, and their column order determines which queries they
                        can accelerate. To decide what to add, engineers read the database&apos;s query plan
                        — for example via <code>EXPLAIN</code> — to see whether a query is scanning a table
                        it should be looking up.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        Indexing matters the moment a table grows large enough that scanning it becomes
                        noticeable — which happens sooner than most teams expect. A missing index on a
                        frequently filtered column is the single most common cause of a query that was
                        instant in development crawling in production. Indexing also matters in the other
                        direction: a table peppered with unused indexes pays a write penalty for no read
                        benefit. The discipline is to index for the queries you actually run, measure with
                        the query planner, and revisit as access patterns change.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We build on PostgreSQL, and getting the indexes right is part of how we keep the
                        applications we ship fast as they grow. During development we read query plans on
                        the hot paths — the dashboard queries, the search endpoints, the foreign-key joins —
                        and add exactly the indexes those queries need, no more. For the{" "}
                        <Link href="/glossary/what-is-multi-tenant-saas" className="text-sky-400 hover:underline">multi-tenant SaaS</Link>{" "}
                        products we build, indexing the tenant identifier alongside the columns each query
                        filters on is often the difference between a snappy app and one that bogs down as
                        accounts pile up.
                    </p>
                    <p>
                        Indexing is also a recurring theme in our{" "}
                        <Link href="/services/api-development" className="text-sky-400 hover:underline">API development</Link> work and a
                        frequent quick win when we are brought in to fix a slow{" "}
                        <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom business application</Link>.
                        More often than not, the worst performance complaint traces back to a single
                        large table being scanned where one well-chosen index makes the query instant.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack", "saas"]}
                        pinned={["building-multi-tenant-saas-postgres-rls", "custom-crm-development-guide", "nextjs-stripe-integration-guide"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-an-orm" className="text-sky-400 hover:underline">What is an ORM?</Link></li>
                        <li><Link href="/glossary/what-is-multi-tenant-saas" className="text-sky-400 hover:underline">What is multi-tenant SaaS?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-a-message-queue" className="text-sky-400 hover:underline">What is a message queue?</Link></li>
                        <li><Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">What is microservices architecture?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If a slow database is dragging your app down and you want a 30-minute
                        conversation about fixing it — not a pitch — book a call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-database-indexing" />
                        <Link href="/services/custom-business-software" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Custom business software
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
