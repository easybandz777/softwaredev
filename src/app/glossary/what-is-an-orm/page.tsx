import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is an ORM? Object-Relational Mapping Explained | QUANT LAB USA",
    description:
        "An ORM lets you work with your database using objects in your programming language instead of raw SQL. Plain-English definition and how it works — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-an-orm" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "ORM (Object-Relational Mapping)",
    description:
        "An ORM is a library that maps database tables to objects in a programming language, letting developers read and write data through native code instead of writing raw SQL by hand.",
    url: "https://quantlabusa.dev/glossary/what-is-an-orm",
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
            name: "What is an ORM?",
            item: "https://quantlabusa.dev/glossary/what-is-an-orm",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does ORM stand for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ORM stands for Object-Relational Mapping. It is the technique, and the library that implements it, for translating between rows in a relational database and objects in a programming language so developers can work with data as native code.",
            },
        },
        {
            "@type": "Question",
            name: "Does using an ORM mean I never write SQL?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Mostly, but not entirely. An ORM handles the common reads and writes for you, but complex reports or heavily tuned queries are often still written in raw SQL. Good ORMs let you drop down to SQL when you need to.",
            },
        },
        {
            "@type": "Question",
            name: "What is the N+1 query problem?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It is a common ORM performance trap where loading a list and then a related record for each item fires one query for the list plus one per row. The fix is to tell the ORM to load the related data together in a single query.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between an ORM and a query builder?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A query builder gives you a programmatic way to compose SQL while staying close to the database. An ORM goes further and maps tables to full objects with relationships and lifecycle behavior. ORMs offer more abstraction; query builders offer more transparency.",
            },
        },
        {
            "@type": "Question",
            name: "Are ORMs slower than raw SQL?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "They can be, mostly when misused — the N+1 problem is the usual culprit. For typical operations the overhead is negligible, and the safety and speed of development usually outweigh it. Hot paths can always be hand-tuned with raw SQL.",
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
                        <li className="text-gray-300">What is an ORM?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Software
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is an ORM?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        An ORM (Object-Relational Mapping library) lets developers read and write database data using objects in their programming language — like calling a method on a User object — instead of hand-writing the SQL queries that move data in and out of tables.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What an ORM means</h2>
                    <p>
                        <strong>ORM</strong> stands for <strong>Object-Relational Mapping</strong>. It
                        names both a technique and the libraries that implement it. The problem it solves
                        is a mismatch: relational databases store data in flat tables of rows and columns,
                        while application code thinks in terms of objects with fields and relationships.
                        An ORM bridges the two, mapping a database table to a class and each row to an
                        object so you can load, modify, and save records as if they were ordinary
                        in-memory data.
                    </p>
                    <p>
                        In practice that means writing something like &quot;find the user with this id,
                        then save the user&apos;s new email&quot; in your own programming language, and
                        letting the ORM generate the underlying <code>SELECT</code> and <code>UPDATE</code>{" "}
                        statements. It handles the translation in both directions — turning your objects
                        into SQL on the way down, and database rows back into objects on the way up.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it came from</h2>
                    <p>
                        ORMs rose to prominence in the early 2000s as object-oriented programming and
                        relational databases collided in nearly every application. Tools like Hibernate in
                        the Java world and the Active Record pattern popularized by Ruby on Rails made the
                        mapping a standard part of building software, sparing developers from writing the
                        same repetitive create-read-update-delete SQL for every table.
                    </p>
                    <p>
                        The pattern carried into every ecosystem. In the JavaScript and TypeScript world
                        that modern web apps are built on, tools such as Prisma and Drizzle bring strong
                        type safety to the mapping, so the shape of your database is reflected directly in
                        your code and mistakes are caught by the compiler before they ever run. The goal
                        throughout has stayed constant: less boilerplate, fewer hand-written queries, and
                        a database layer that feels native to the language.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works</h2>
                    <p>
                        You define your data <em>models</em> — classes or schema definitions that mirror
                        your tables and declare how they relate, such as a user having many orders. The
                        ORM uses those definitions to generate SQL for the everyday operations: fetching a
                        record by id, filtering a list, inserting a new row, updating fields, deleting.
                        Many ORMs also manage <em>migrations</em>, generating the SQL that evolves your
                        database schema as your models change so the structure and the code stay in sync.
                    </p>
                    <p>
                        The main thing to watch is performance, and the classic pitfall is the{" "}
                        <em>N+1 query problem</em>: loading a list of records and then lazily fetching a
                        related record for each one, firing one query plus one per row. The remedy is to
                        tell the ORM to load the related data in a single query up front. Good ORMs make
                        this easy and also let you drop to raw SQL for the rare query that needs hand
                        tuning, so abstraction never becomes a cage.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        An ORM matters most when an application has many tables and a lot of routine data
                        access, which describes almost every business application. It speeds development,
                        reduces the surface area for SQL injection bugs because queries are parameterized
                        by default, and — with a type-safe ORM — catches whole categories of errors at
                        compile time. The trade-off is a layer of abstraction that can hide what the
                        database is actually doing, so the discipline is to stay aware of the generated
                        queries on your busiest paths and to reach for raw SQL when a query genuinely
                        warrants it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We build in TypeScript on PostgreSQL, and we use a type-safe ORM as the default
                        data layer so the database schema flows straight into the application&apos;s types.
                        That means a typo in a column name or a wrong field type is a compile error rather
                        than a production incident, and the editor autocompletes every query against the
                        real shape of the data. Migrations live in version control alongside the code, so
                        the schema evolves through the same reviewed pipeline as everything else.
                    </p>
                    <p>
                        We treat the ORM as a sharp tool, not a crutch. On the hot paths of an{" "}
                        <Link href="/services/api-development" className="text-sky-400 hover:underline">API</Link> we watch the
                        generated SQL, eliminate N+1 patterns, and lean on{" "}
                        <Link href="/glossary/what-is-database-indexing" className="text-sky-400 hover:underline">database indexing</Link>{" "}
                        so the queries the ORM emits stay fast. For the reporting corners of a{" "}
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform</Link> where
                        a complex aggregate beats anything an ORM would generate, we simply write the SQL by
                        hand. The mapping handles the ninety percent that is routine; we hand-tune the rest.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack", "saas"]}
                        pinned={["building-multi-tenant-saas-postgres-rls", "nextjs-stripe-integration-guide", "custom-crm-development-guide"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-database-indexing" className="text-sky-400 hover:underline">What is database indexing?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">What is Next.js?</Link></li>
                        <li><Link href="/glossary/what-is-multi-tenant-saas" className="text-sky-400 hover:underline">What is multi-tenant SaaS?</Link></li>
                        <li><Link href="/glossary/what-is-server-side-rendering" className="text-sky-400 hover:underline">What is server-side rendering?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If you want a 30-minute conversation about designing a clean, type-safe data
                        layer for your app — not a pitch — book a call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-orm" />
                        <Link href="/services/api-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            API development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
