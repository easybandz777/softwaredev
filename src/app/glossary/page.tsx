import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Software & Security Glossary | QUANT LAB USA",
    description:
        "Plain-English definitions of the 20 software engineering and cybersecurity terms our clients ask about most — CRM, SaaS, MVP, API, SOC 2, OWASP, pentest, and more.",
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
        slug: "what-is-active-directory",
        name: "Active Directory",
        category: "Security",
        snippet: "Microsoft's identity directory — the backbone of most enterprise networks and the first thing internal pentesters target.",
    },
    {
        slug: "what-is-an-api",
        name: "API (Application Programming Interface)",
        category: "Software",
        snippet: "The contract that lets two pieces of software talk to each other — REST, GraphQL, webhooks, and SDKs all sit on top of this idea.",
    },
    {
        slug: "what-is-a-crm",
        name: "CRM (Customer Relationship Management)",
        category: "Software",
        snippet: "The system of record for every customer relationship — leads, deals, conversations, contracts, and revenue.",
    },
    {
        slug: "what-is-hipaa-compliance",
        name: "HIPAA Compliance",
        category: "Security",
        snippet: "US healthcare data law — the privacy, security, and breach notification rules that govern PHI.",
    },
    {
        slug: "what-is-jamstack",
        name: "JAMstack Architecture",
        category: "Software",
        snippet: "JavaScript, APIs, and prerendered Markup — the architecture pattern behind the fastest sites on the web.",
    },
    {
        slug: "what-is-mitre-attack",
        name: "MITRE ATT&CK Framework",
        category: "Security",
        snippet: "The standard taxonomy of attacker tactics, techniques, and procedures — used by red teams, blue teams, and detection engineers.",
    },
    {
        slug: "what-is-multi-tenant-saas",
        name: "Multi-Tenant SaaS",
        category: "Software",
        snippet: "One application serving many customer organizations from shared infrastructure with strict data isolation.",
    },
    {
        slug: "what-is-an-mvp",
        name: "MVP (Minimum Viable Product)",
        category: "Software",
        snippet: "The smallest version of a product that delivers real value, ships fast, and lets you learn from paying customers.",
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
        slug: "what-is-a-red-team",
        name: "Red Team",
        category: "Security",
        snippet: "Goal-driven adversary simulation that tests not just your software but your people, processes, and detection capability.",
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
        slug: "what-is-server-side-rendering",
        name: "Server-Side Rendering (SSR)",
        category: "Software",
        snippet: "Generating HTML on the server for every request so users (and search engines) see content immediately.",
    },
    {
        slug: "what-is-soc-2",
        name: "SOC 2 Compliance",
        category: "Security",
        snippet: "The AICPA's trust-services audit that mid-market and enterprise buyers ask for before signing a SaaS contract.",
    },
    {
        slug: "what-is-a-web-app-firewall",
        name: "Web Application Firewall (WAF)",
        category: "Security",
        snippet: "A reverse-proxy layer that inspects HTTP traffic and blocks common attacks before they hit your app.",
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
        name: "QUANT LAB USA INC",
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
                        Twenty plain-English definitions of the software engineering and
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
