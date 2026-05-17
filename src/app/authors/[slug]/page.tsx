import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    Award,
    ArrowRight,
    Briefcase,
    ExternalLink,
    Linkedin,
    Github,
    MapPin,
    Twitter,
} from "lucide-react";
import {
    AUTHORS,
    AUTHOR_BY_SLUG,
    authorPersonSchema,
    authorUrl,
} from "@/lib/authors";
import { pageMetadata } from "@/lib/seoMeta";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export async function generateStaticParams() {
    return AUTHORS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const author = AUTHOR_BY_SLUG[slug];
    if (!author) {
        return pageMetadata({
            title: "Author not found",
            description: "This author does not exist on QUANT LAB USA.",
            slug: `authors/${slug}`,
            noindex: true,
        });
    }
    return pageMetadata({
        title: `${author.name} — ${author.role} | QUANT LAB USA`,
        description: author.tagline ?? author.bio[0] ?? `Author bio for ${author.name}.`,
        slug: `authors/${author.slug}`,
        image: author.imagePath ?? "/og-image.png",
        type: "profile",
    });
}

function socialIcon(label: string) {
    const l = label.toLowerCase();
    if (l.includes("linkedin")) return <Linkedin className="h-4 w-4" />;
    if (l.includes("github")) return <Github className="h-4 w-4" />;
    if (l.includes("twitter") || l.includes("x")) return <Twitter className="h-4 w-4" />;
    return <ExternalLink className="h-4 w-4" />;
}

export default async function AuthorPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const author = AUTHOR_BY_SLUG[slug];
    if (!author) notFound();

    const personLd = authorPersonSchema(author);

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
            {
                "@type": "ListItem",
                position: 2,
                name: "Authors",
                item: "https://quantlabusa.dev/authors",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: author.name,
                item: authorUrl(author.slug),
            },
        ],
    };

    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
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
                        <li>
                            <Link
                                href="/authors"
                                className="hover:text-sky-400 transition-colors"
                            >
                                Authors
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">
                            ›
                        </li>
                        <li className="text-gray-300">{author.name}</li>
                    </ol>
                </nav>

                <header className="mb-12 flex flex-col gap-8 md:flex-row md:items-start">
                    {author.imagePath ? (
                        <div className="relative h-40 w-40 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 md:h-48 md:w-48">
                            <Image
                                src={author.imagePath}
                                alt={`${author.name}, ${author.role}`}
                                fill
                                sizes="(min-width:768px) 192px, 160px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    ) : null}
                    <div className="flex-1">
                        <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                            {author.isEditorialEntity ? "Editorial Entity" : "Author"}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-2">
                            {author.name}
                        </h1>
                        <p className="text-sky-400 text-sm font-medium tracking-wide mb-4">
                            {author.role}
                        </p>
                        {author.tagline ? (
                            <p className="text-gray-300 text-base leading-relaxed">
                                {author.tagline}
                            </p>
                        ) : null}
                        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            {author.location ? (
                                <span className="inline-flex items-center gap-1.5">
                                    <MapPin className="h-4 w-4" />
                                    {author.location}
                                </span>
                            ) : null}
                            {author.yearsExperience ? (
                                <span className="inline-flex items-center gap-1.5">
                                    <Briefcase className="h-4 w-4" />
                                    {author.yearsExperience}+ years engineering
                                </span>
                            ) : null}
                        </div>
                        {author.social && author.social.length ? (
                            <div className="mt-5 flex flex-wrap items-center gap-3">
                                {author.social.map((s) => (
                                    <a
                                        key={s.url}
                                        href={s.url}
                                        target="_blank"
                                        rel="noopener noreferrer me"
                                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300 hover:border-sky-400/30 hover:text-white transition-colors"
                                    >
                                        {socialIcon(s.label)}
                                        {s.label}
                                    </a>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </header>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Bio
                    </h2>
                    <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                        {author.bio.map((p, idx) => (
                            <p key={idx}>{p}</p>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Expertise & topics
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {author.expertise.map((e) => (
                            <div
                                key={e.label}
                                className="flex items-center gap-3 rounded-xl border border-white/8 bg-[#0d1526]/60 p-4 text-sm text-gray-300"
                            >
                                <Award className="h-4 w-4 flex-shrink-0 text-sky-400" />
                                {e.href ? (
                                    <Link
                                        href={e.href}
                                        className="text-sky-400 hover:underline"
                                    >
                                        {e.label}
                                    </Link>
                                ) : (
                                    <span>{e.label}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {!author.isEditorialEntity ? (
                    <section className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                            Editorial standards
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-3">
                            Posts attributed to {author.name} are written from inside
                            live engagements, not from a marketing brief. Every claim
                            that is not common knowledge is sourced to an authoritative
                            reference — primary vendor docs, .gov, .edu, or
                            peer-reviewed material — and linked inline.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            See the full{" "}
                            <Link
                                href="/about/editorial-policy"
                                className="text-sky-400 hover:underline"
                            >
                                editorial policy
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/about/fact-checking"
                                className="text-sky-400 hover:underline"
                            >
                                fact-checking process
                            </Link>
                            .
                        </p>
                    </section>
                ) : null}

                <section>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Work with {author.isEditorialEntity ? "QUANT LAB USA" : author.name.split(" ")[0]}
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-6 leading-relaxed">
                            Founder-led engagements only. Direct line to the engineer
                            who scopes, builds, and ships.
                        </p>
                        <ConsultationCTA
                            label="Book a Consultation"
                            source={`author-${author.slug}`}
                        />
                        <div className="mt-5">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-1 text-sm text-sky-400 hover:underline"
                            >
                                Read more posts on the blog
                                <ArrowRight className="h-3 w-3" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
