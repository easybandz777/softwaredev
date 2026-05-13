import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog | Custom Software, CRMs, Pentesting | QUANT LAB USA",
    description:
        "Engineer-written guides on custom software, CRM builds, Stripe, Next.js, and penetration testing — by Bill Beltz, founder of QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/blog" },
    openGraph: {
        title: "Blog | QUANT LAB USA",
        description:
            "Founder-written essays on custom software, CRMs, Stripe, Next.js, and offensive security.",
        url: "https://quantlabusa.dev/blog",
        type: "website",
    },
};

type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    category: "Software" | "Cybersecurity" | "Local";
    date: string;
    readMinutes: number;
};

const posts: BlogPost[] = [
    {
        slug: "build-vs-buy-software-2026",
        title: "Build vs Buy Software: A 2026 Decision Framework for SaaS Founders",
        excerpt:
            "Three-year TCO math, the 80/20 rule, and a 12-question checklist for deciding whether to write the check or write the code.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 11,
    },
    {
        slug: "what-is-penetration-testing",
        title: "What Is Penetration Testing? A Founder's 2026 Buyer Guide",
        excerpt:
            "What a pentest actually is, the five types you can buy, what a real report looks like, and how much one should cost.",
        category: "Cybersecurity",
        date: "2026-05-12",
        readMinutes: 12,
    },
    {
        slug: "atlanta-software-development-guide-2026",
        title: "Atlanta Software Development: A Founder's 2026 Guide",
        excerpt:
            "The Atlanta tech scene, what local shops cost, the industries we know best, and the questions every ATL founder should ask before signing.",
        category: "Local",
        date: "2026-05-12",
        readMinutes: 10,
    },
    {
        slug: "what-is-mitre-attack-framework",
        title: "What Is the MITRE ATT&CK Framework? A Plain-English 2026 Guide",
        excerpt:
            "Tactics, techniques, sub-techniques, and how red teams and blue teams use the matrix in real engagements.",
        category: "Cybersecurity",
        date: "2026-05-12",
        readMinutes: 11,
    },
    {
        slug: "nextjs-stripe-integration-guide",
        title: "Next.js + Stripe: The Complete 2026 Integration Guide",
        excerpt:
            "Server Actions, the Payment Element, webhook idempotency, subscriptions, multi-tenant billing, and a production-grade testing pattern.",
        category: "Software",
        date: "2026-05-12",
        readMinutes: 14,
    },
];

const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://quantlabusa.dev/blog",
    name: "QUANT LAB USA Blog",
    description:
        "Founder-written essays on custom software, CRMs, Stripe, Next.js, and offensive security.",
    url: "https://quantlabusa.dev/blog",
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        "@id": "https://quantlabusa.dev/#organization",
    },
    blogPost: posts.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `https://quantlabusa.dev/blog/${p.slug}`,
        datePublished: p.date,
        author: {
            "@type": "Person",
            name: "William Beltz",
            url: "https://quantlabusa.dev/about",
        },
    })),
};

export default function BlogIndexPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />

            <section className="pt-32 pb-12 relative overflow-hidden">
                <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-5xl">
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
                            <li className="text-gray-300">Blog</li>
                        </ol>
                    </nav>
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        Field Notes
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        The QUANT LAB USA Blog
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        Long-form essays written by Bill Beltz, founder of QUANT LAB USA INC. No
                        SEO sludge, no agency-speak — opinions backed by code we&apos;ve shipped
                        for paying clients.
                    </p>
                </div>
            </section>

            <section className="pb-24 relative">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {posts.map((post) => (
                            <AnimatedSection key={post.slug}>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="group relative flex h-full flex-col rounded-2xl border border-white/8 bg-[#0d1526]/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-quant-blue/40 hover:bg-[#0d1526] overflow-hidden"
                                >
                                    <div className="flex items-center gap-3 mb-5">
                                        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-sky-400">
                                            {post.category}
                                        </span>
                                        <span className="text-gray-700">·</span>
                                        <span className="inline-flex items-center gap-1 text-xs text-gray-400 font-mono">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </span>
                                        <span className="text-gray-700">·</span>
                                        <span className="text-xs text-gray-400 font-mono">
                                            {post.readMinutes} min read
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-sky-100 transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                                            <User className="w-3 h-3" />
                                            Bill Beltz
                                        </span>
                                        <div className="flex items-center gap-2 text-sky-400 text-sm font-medium group-hover:gap-3 transition-all">
                                            Read post
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Have a project that needs an engineer who writes like this?
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Most of these posts started as questions paying clients asked. If yours
                        is in here, let&apos;s talk about building it.
                    </p>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        Or call directly:{" "}
                        <a
                            href="tel:+17706521282"
                            className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400"
                        >
                            (770) 652-1282
                        </a>{" "}
                        ·{" "}
                        <a
                            href="mailto:beltz@quantlabusa.dev"
                            className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400"
                        >
                            beltz@quantlabusa.dev
                        </a>
                    </p>
                    <ConsultationCTA label="Book a Consultation" source="blog-index" />
                </div>
            </section>
        </main>
    );
}
