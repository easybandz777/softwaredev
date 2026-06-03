import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Software & Cybersecurity Glossary 2026 | QUANT LAB USA",
    description:
        "Plain-English definitions for 30+ software engineering and cybersecurity terms — CRM, SaaS, MVP, API, SOC 2, OWASP, pentest, and more. Curated by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary" },
    openGraph: {
        title: "The QUANT LAB Glossary",
        description:
            "Definitions and worked examples for the software and security terms QUANT LAB clients ask about every week.",
        url: "https://quantlabusa.dev/glossary",
        type: "website",
    },
};

type Term = {
    slug: string;
    name: string;
    category: "Software" | "Security";
    snippet: string;
};

const terms: Term[] = [
    {
        slug: "what-is-a-cdn",
        name: "CDN (Content Delivery Network)",
        category: "Software",
        snippet: "A globally distributed network of servers that caches your content close to each visitor, cutting latency and offloading the origin.",
    },
    {
        slug: "what-is-a-crm",
        name: "CRM (Customer Relationship Management)",
        category: "Software",
        snippet: "The system of record for every customer relationship — leads, deals, conversations, contracts, and revenue.",
    },
    {
        slug: "what-is-a-cve",
        name: "CVE (Common Vulnerabilities and Exposures)",
        category: "Security",
        snippet: "A unique, public ID assigned to a specific known security flaw, so every scanner, vendor, and defender refers to the same vulnerability by the same name.",
    },
    {
        slug: "what-is-a-design-sprint",
        name: "Design Sprint",
        category: "Software",
        snippet: "A time-boxed, classically five-day process for solving a big problem by mapping, sketching, deciding, prototyping, and testing with real users before a full build.",
    },
    {
        slug: "what-is-a-load-balancer",
        name: "Load Balancer",
        category: "Software",
        snippet: "A component that spreads incoming traffic across multiple backend servers, improving capacity and reliability by routing each request to a healthy server.",
    },
    {
        slug: "what-is-a-message-queue",
        name: "Message Queue",
        category: "Software",
        snippet: "A buffer that holds tasks sent by one part of a system until another is ready to process them, enabling asynchronous, decoupled, reliable communication.",
    },
    {
        slug: "what-is-a-red-team",
        name: "Red Team",
        category: "Security",
        snippet: "Goal-driven adversary simulation that tests not just your software but your people, processes, and detection capability.",
    },
    {
        slug: "what-is-a-security-operations-center",
        name: "Security Operations Center (SOC)",
        category: "Security",
        snippet: "The people, processes, and technology whose full-time job is to watch your systems for attacks, investigate what looks wrong, and coordinate the response.",
    },
    {
        slug: "what-is-a-vulnerability",
        name: "Vulnerability",
        category: "Security",
        snippet: "A weakness in software, configuration, or process that an attacker can exploit to read, change, or take down something they should not be able to.",
    },
    {
        slug: "what-is-a-web-app-firewall",
        name: "Web Application Firewall (WAF)",
        category: "Security",
        snippet: "A reverse-proxy layer that inspects HTTP traffic and blocks common attacks before they hit your app.",
    },
    {
        slug: "what-is-active-directory",
        name: "Active Directory",
        category: "Security",
        snippet: "Microsoft's identity directory — the backbone of most enterprise networks and the first thing internal pentesters target.",
    },
    {
        slug: "what-is-agile",
        name: "Agile",
        category: "Software",
        snippet: "An iterative approach to building software in small, frequent increments, guided by continuous customer feedback and a willingness to adapt the plan.",
    },
    {
        slug: "what-is-an-api",
        name: "API (Application Programming Interface)",
        category: "Software",
        snippet: "The contract that lets two pieces of software talk to each other — REST, GraphQL, webhooks, and SDKs all sit on top of this idea.",
    },
    {
        slug: "what-is-an-mvp",
        name: "MVP (Minimum Viable Product)",
        category: "Software",
        snippet: "The smallest version of a product that delivers real value, ships fast, and lets you learn from paying customers.",
    },
    {
        slug: "what-is-an-orm",
        name: "ORM (Object-Relational Mapping)",
        category: "Software",
        snippet: "A library that maps database tables to objects in your language, letting you read and write data through native code instead of raw SQL.",
    },
    {
        slug: "what-is-arr",
        name: "ARR (Annual Recurring Revenue)",
        category: "Software",
        snippet: "The annualized value of a subscription business's recurring revenue — the predictable income it expects over a twelve-month period, excluding one-time fees.",
    },
    {
        slug: "what-is-ci-cd",
        name: "CI/CD (Continuous Integration / Continuous Delivery)",
        category: "Software",
        snippet: "The practice of automatically building, testing, and deploying software on every change, so a small edit can reach production safely in minutes.",
    },
    {
        slug: "what-is-customer-acquisition-cost",
        name: "CAC (Customer Acquisition Cost)",
        category: "Software",
        snippet: "The total sales and marketing spend required to win one new customer over a given period — salaries, ad spend, tools, and commissions included.",
    },
    {
        slug: "what-is-customer-churn",
        name: "Customer Churn",
        category: "Software",
        snippet: "The rate at which customers stop doing business with you over a period — canceling a subscription, ending a contract, or otherwise no longer paying.",
    },
    {
        slug: "what-is-customer-lifetime-value",
        name: "Customer Lifetime Value (LTV)",
        category: "Software",
        snippet: "The total revenue or gross profit a business expects to earn from a single customer over the entire span of their relationship, before they churn.",
    },
    {
        slug: "what-is-database-indexing",
        name: "Database Indexing",
        category: "Software",
        snippet: "A separate, ordered data structure that lets the database locate matching rows fast without scanning a whole table — trading storage for far faster reads.",
    },
    {
        slug: "what-is-docker",
        name: "Docker",
        category: "Software",
        snippet: "A tool that packages an application with everything it needs into a portable, isolated container, so it runs identically on a laptop, a test server, and production.",
    },
    {
        slug: "what-is-edr",
        name: "EDR (Endpoint Detection and Response)",
        category: "Security",
        snippet: "Software on each laptop and server that records device behavior, detects malicious activity even from unseen threats, and lets responders contain attacks remotely.",
    },
    {
        slug: "what-is-encryption-at-rest",
        name: "Encryption at Rest",
        category: "Security",
        snippet: "Scrambling your data while it sits in storage — on disk, in a database, in backups — so a stolen drive yields unreadable gibberish instead of your information.",
    },
    {
        slug: "what-is-hipaa-compliance",
        name: "HIPAA Compliance",
        category: "Security",
        snippet: "US healthcare data law — the privacy, security, and breach notification rules that govern PHI.",
    },
    {
        slug: "what-is-idempotency",
        name: "Idempotency",
        category: "Software",
        snippet: "The property of an operation whereby performing it many times produces the same result as performing it once — what makes retries safe in networked systems.",
    },
    {
        slug: "what-is-jamstack",
        name: "JAMstack Architecture",
        category: "Software",
        snippet: "JavaScript, APIs, and prerendered Markup — the architecture pattern behind the fastest sites on the web.",
    },
    {
        slug: "what-is-kubernetes",
        name: "Kubernetes",
        category: "Software",
        snippet: "An open-source orchestration system that automatically deploys, scales, and heals containerized apps across a cluster of machines.",
    },
    {
        slug: "what-is-mitre-attack",
        name: "MITRE ATT&CK Framework",
        category: "Security",
        snippet: "The standard taxonomy of attacker tactics, techniques, and procedures — used by red teams, blue teams, and detection engineers.",
    },
    {
        slug: "what-is-mrr",
        name: "MRR (Monthly Recurring Revenue)",
        category: "Software",
        snippet: "The total predictable revenue a subscription business expects every month, normalized so annual and multi-month plans show up as a single monthly figure.",
    },
    {
        slug: "what-is-multi-factor-authentication",
        name: "Multi-Factor Authentication (MFA)",
        category: "Security",
        snippet: "A login method that requires two or more independent kinds of proof, so an attacker who steals just your password still cannot get into your account.",
    },
    {
        slug: "what-is-multi-tenant-saas",
        name: "Multi-Tenant SaaS",
        category: "Software",
        snippet: "One application serving many customer organizations from shared infrastructure with strict data isolation.",
    },
    {
        slug: "what-is-nextjs",
        name: "Next.js",
        category: "Software",
        snippet: "The React framework that powers the majority of modern production web apps — SSR, SSG, ISR, routing, and edge runtime.",
    },
    {
        slug: "what-is-owasp-top-10",
        name: "OWASP Top 10",
        category: "Security",
        snippet: "The community-maintained list of the ten most critical web application security risks — broken access control, injection, and friends.",
    },
    {
        slug: "what-is-pci-dss",
        name: "PCI-DSS Compliance",
        category: "Security",
        snippet: "The credit-card-industry security standard — twelve requirements every business that stores, processes, or transmits card data must follow.",
    },
    {
        slug: "what-is-penetration-testing",
        name: "Penetration Testing",
        category: "Security",
        snippet: "A time-boxed, authorized, human-driven attempt to compromise your systems the way a real attacker would.",
    },
    {
        slug: "what-is-phishing",
        name: "Phishing",
        category: "Security",
        snippet: "A social-engineering attack that tricks a person into handing over passwords, money, or malware access by impersonating someone or something they trust.",
    },
    {
        slug: "what-is-product-market-fit",
        name: "Product-Market Fit",
        category: "Software",
        snippet: "The stage at which a product satisfies strong market demand — when a defined group of customers value it enough to buy, stay, and refer others.",
    },
    {
        slug: "what-is-rest-vs-graphql",
        name: "REST vs GraphQL",
        category: "Software",
        snippet: "Two API paradigms — REST exposes resources at URLs, GraphQL exposes a typed schema clients query directly.",
    },
    {
        slug: "what-is-saas",
        name: "SaaS (Software as a Service)",
        category: "Software",
        snippet: "Software delivered as a subscription over the web — no installs, no servers, just login and use.",
    },
    {
        slug: "what-is-scrum",
        name: "Scrum",
        category: "Software",
        snippet: "An Agile framework for delivering software in fixed-length sprints, structured around defined roles, a prioritized backlog, and a few recurring ceremonies.",
    },
    {
        slug: "what-is-server-side-rendering",
        name: "Server-Side Rendering (SSR)",
        category: "Software",
        snippet: "Generating HTML on the server for every request so users (and search engines) see content immediately.",
    },
    {
        slug: "what-is-serverless",
        name: "Serverless Computing",
        category: "Software",
        snippet: "A cloud execution model where the provider runs your code on demand, auto-provisioning and scaling the servers and billing only for the compute used.",
    },
    {
        slug: "what-is-siem",
        name: "SIEM (Security Information and Event Management)",
        category: "Security",
        snippet: "The central platform that collects log and event data from across your environment, correlates it to spot patterns, and raises alerts for a security team.",
    },
    {
        slug: "what-is-soc-2",
        name: "SOC 2 Compliance",
        category: "Security",
        snippet: "The AICPA's trust-services audit that mid-market and enterprise buyers ask for before signing a SaaS contract.",
    },
    {
        slug: "what-is-technical-debt",
        name: "Technical Debt",
        category: "Software",
        snippet: "The implied future cost of choosing a quick solution now instead of a robust one — extra effort the team must spend later to extend or maintain the code.",
    },
    {
        slug: "what-is-threat-modeling",
        name: "Threat Modeling",
        category: "Security",
        snippet: "A structured exercise that diagrams what you are building, thinks like an attacker about how each piece could be abused, and decides what to do before code ships.",
    },
    {
        slug: "what-is-tls",
        name: "TLS (Transport Layer Security)",
        category: "Security",
        snippet: "The cryptographic protocol that encrypts data in transit, proves you are talking to the real server, and detects tampering — the technology behind HTTPS.",
    },
    {
        slug: "what-is-webhooks",
        name: "Webhooks",
        category: "Software",
        snippet: "HTTP callbacks — when something happens in System A, it POSTs JSON to a URL you own in System B.",
    },
    {
        slug: "what-is-zero-trust",
        name: "Zero Trust Architecture",
        category: "Security",
        snippet: "Never trust, always verify — the network security model that assumes the perimeter is already breached.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        {
            "@type": "ListItem",
            position: 2,
            name: "Glossary",
            item: "https://quantlabusa.dev/glossary",
        },
    ],
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "The QUANT LAB Glossary",
    description:
        "Plain-English definitions of the software engineering and cybersecurity terms QUANT LAB USA clients ask about most.",
    url: "https://quantlabusa.dev/glossary",
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        "@id": "https://quantlabusa.dev/#organization",
    },
    mainEntity: {
        "@type": "ItemList",
        itemListElement: terms.map((term, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: term.name,
            url: `https://quantlabusa.dev/glossary/${term.slug}`,
        })),
    },
};

export default function GlossaryIndex() {
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

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li>
                            <Link href="/" className="hover:text-sky-400 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">
                            ›
                        </li>
                        <li className="text-gray-300">Glossary</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Reference · Definitions
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        The QUANT LAB Glossary
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-6">
                        Fifty plain-English definitions of the software engineering and
                        cybersecurity terms our clients ask about most. No marketing fluff, no
                        analyst jargon — just what the term means, why it matters, and how it
                        shows up in actual engagements.
                    </p>
                    <p className="text-base text-gray-400 leading-relaxed max-w-3xl">
                        Half the difficulty of buying custom software or a security engagement
                        is decoding the vocabulary. A founder is asked whether their app is
                        multi-tenant, whether their API is REST or GraphQL, whether they need
                        SOC 2 or just a SOC 2 letter, whether a pentest counts as a red team —
                        and the honest answer to most of those questions is "it depends on what
                        you mean by that word." This page tries to fix that. If you only have
                        five minutes, skim the snippets. If you have an hour, the individual
                        definitions go deeper — history, mechanics, examples, and how QUANT LAB
                        actually works with each concept.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Software Engineering
                    </h2>
                    <ul className="space-y-4">
                        {terms
                            .filter((t) => t.category === "Software")
                            .map((term) => (
                                <li
                                    key={term.slug}
                                    className="border border-white/10 rounded-2xl p-5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                                >
                                    <Link
                                        href={`/glossary/${term.slug}`}
                                        className="block group"
                                    >
                                        <h3 className="text-lg font-semibold text-white group-hover:text-sky-400 transition-colors mb-1.5 flex items-center gap-2">
                                            {term.name}
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {term.snippet}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6">
                        Cybersecurity & Compliance
                    </h2>
                    <ul className="space-y-4">
                        {terms
                            .filter((t) => t.category === "Security")
                            .map((term) => (
                                <li
                                    key={term.slug}
                                    className="border border-white/10 rounded-2xl p-5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                                >
                                    <Link
                                        href={`/glossary/${term.slug}`}
                                        className="block group"
                                    >
                                        <h3 className="text-lg font-semibold text-white group-hover:text-sky-400 transition-colors mb-1.5 flex items-center gap-2">
                                            {term.name}
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {term.snippet}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-5">
                        Have a project? Skip the glossary
                    </h2>
                    <p className="text-base text-gray-300 leading-relaxed mb-6 max-w-3xl">
                        Definitions are useful, but a 30-minute conversation with the engineer
                        who would actually do the work is more useful. If you have a CRM build,
                        a SaaS platform, an API integration, or a pentest in your near future,
                        book a no-pressure consultation and skip the buzzword phase entirely.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-index" />
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors"
                        >
                            Browse all services
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
