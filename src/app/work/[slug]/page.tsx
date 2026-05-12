import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowRight, Check, ExternalLink } from "lucide-react";
import {
    caseStudies,
    getCaseStudyBySlug,
    getRelatedCaseStudies,
} from "@/lib/case-studies";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export function generateStaticParams() {
    return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const study = getCaseStudyBySlug(slug);
    if (!study) return { title: "Case Study Not Found | QuantLab" };

    const title = study.metaTitle ?? `${study.title} | QuantLab Case Study`;
    const description = study.metaDescription ?? study.summary;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://quantlabusa.dev/work/${study.slug}`,
            type: "article",
        },
        alternates: {
            canonical: `https://quantlabusa.dev/work/${study.slug}`,
        },
    };
}

export default async function CaseStudyPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const study = getCaseStudyBySlug(slug);
    if (!study) notFound();

    const related = getRelatedCaseStudies(slug, 2);

    const articleStructuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: study.title,
        description: study.metaDescription ?? study.summary,
        articleSection: "Case Study",
        image: `https://quantlabusa.dev/og/work-${study.slug}.png`,
        about: {
            "@type": "Thing",
            name: study.industry,
        },
        author: {
            "@type": "Person",
            name: "William Beltz",
            url: "https://quantlabusa.dev/about",
        },
        publisher: {
            "@type": "Organization",
            "@id": "https://quantlabusa.dev/#organization",
            name: "QuantLab Software Solutions",
            url: "https://quantlabusa.dev",
            logo: {
                "@type": "ImageObject",
                url: "https://quantlabusa.dev/logo.png",
            },
        },
        url: `https://quantlabusa.dev/work/${study.slug}`,
        datePublished: `${study.year}-01-01`,
        dateModified: `${study.year}-12-31`,
    };

    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://quantlabusa.dev/",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Case Studies",
                item: "https://quantlabusa.dev/work",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: study.client,
                item: `https://quantlabusa.dev/work/${study.slug}`,
            },
        ],
    };

    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleStructuredData),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbStructuredData),
                }}
            />

            {/* Header / Hero */}
            <section className="pt-32 pb-14 relative overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    {/* Breadcrumb */}
                    <nav
                        aria-label="Breadcrumb"
                        className="flex items-center gap-2 text-xs text-gray-500 mb-8"
                    >
                        <Link href="/" className="hover:text-sky-400 transition-colors">
                            Home
                        </Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link
                            href="/work"
                            className="hover:text-sky-400 transition-colors"
                        >
                            Case Studies
                        </Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-gray-400 truncate">{study.client}</span>
                    </nav>

                    {/* Tag row */}
                    <div className="flex items-center gap-3 mb-6 flex-wrap">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-[0.15em] uppercase text-sky-400 bg-sky-400/10 border border-sky-400/20">
                            {study.industry}
                        </span>
                        <span className="text-xs text-gray-500 font-mono">
                            {study.year}
                        </span>
                        {study.duration && (
                            <>
                                <span className="text-gray-700">·</span>
                                <span className="text-xs text-gray-500 font-mono">
                                    {study.duration}
                                </span>
                            </>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        {study.title}
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                        {study.summary}
                    </p>

                    {/* Client + Live URL meta row */}
                    <div className="mt-6 flex items-center gap-4 flex-wrap text-sm">
                        <div className="text-gray-500">
                            <span className="text-gray-600">Client:</span>{" "}
                            <span className="text-gray-300">{study.client}</span>
                        </div>
                        {study.liveUrl && (
                            <a
                                href={study.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors font-medium"
                            >
                                Visit live site
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        )}
                    </div>

                    {/* Highlights strip */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {study.highlights.map((h, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 rounded-xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm px-4 py-3"
                            >
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-300">{h}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Body */}
            <article className="py-16 relative">
                <div className="container mx-auto px-6 max-w-3xl">
                    {study.situation && (
                        <Section label="The Situation" body={study.situation} />
                    )}
                    <Section label="The Challenge" body={study.challenge} />
                    <Section label="Our Approach" body={study.approach} />

                    {/* What we built (optional) */}
                    {study.solution && study.solution.length > 0 && (
                        <div className="mb-14">
                            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-4">
                                What We Built
                            </p>
                            <ul className="space-y-3 text-gray-300 text-base md:text-lg leading-relaxed">
                                {study.solution.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Tech stack */}
                    <div className="mb-16">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-4">
                            Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {study.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3.5 py-1.5 rounded-full text-sm font-medium border border-white/8 bg-white/4 text-gray-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <Section label="The Outcome" body={study.outcome} />

                    {/* Client quote (DRAFT — confirm before publishing) */}
                    {study.clientQuote && (
                        <figure className="mb-16 rounded-2xl border border-sky-400/15 bg-sky-400/5 p-7 md:p-9">
                            {study.clientQuote.draftNote && (
                                <p className="text-[10px] uppercase tracking-[0.2em] text-amber-400 font-semibold mb-4">
                                    {study.clientQuote.draftNote}
                                </p>
                            )}
                            <blockquote className="text-gray-200 text-lg md:text-xl leading-relaxed italic">
                                &ldquo;{study.clientQuote.text}&rdquo;
                            </blockquote>
                            <figcaption className="mt-4 text-sm text-sky-400 font-medium">
                                — {study.clientQuote.author}
                            </figcaption>
                        </figure>
                    )}

                    {/* Related links (services + city) */}
                    {(study.relatedServices?.length || study.relatedCity) && (
                        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {study.relatedServices && study.relatedServices.length > 0 && (
                                <div>
                                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">
                                        Related Services
                                    </p>
                                    <ul className="space-y-2">
                                        {study.relatedServices.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors text-sm font-medium"
                                                >
                                                    {link.label}
                                                    <ArrowRight className="w-3.5 h-3.5" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {study.relatedCity && (
                                <div>
                                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-3">
                                        Service Area
                                    </p>
                                    <Link
                                        href={study.relatedCity.href}
                                        className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors text-sm font-medium"
                                    >
                                        Software Development in {study.relatedCity.label}
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </article>

            {/* CTA */}
            <section className="py-16 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Have a similar problem? Let's talk.
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Tell us what you're dealing with. We'll be honest about whether we
                        can help.
                    </p>
                    <ConsultationCTA label="Book a Consultation" />
                </div>
            </section>

            {/* Related */}
            {related.length > 0 && (
                <section className="py-20 relative">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-6">
                            More Case Studies
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {related.map((cs) => (
                                <Link
                                    key={cs.slug}
                                    href={`/work/${cs.slug}`}
                                    className="group relative rounded-2xl border border-white/8 bg-[#0d1526]/80 backdrop-blur-sm p-7 transition-all duration-300 hover:border-quant-blue/40"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-sky-400">
                                            {cs.industry}
                                        </span>
                                        <span className="text-gray-700">·</span>
                                        <span className="text-xs text-gray-500 font-mono">
                                            {cs.year}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                                        {cs.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {cs.summary}
                                    </p>
                                    <div className="flex items-center gap-2 text-sky-400 text-sm font-medium group-hover:gap-3 transition-all">
                                        Read case study
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}

function Section({ label, body }: { label: string; body: string }) {
    return (
        <div className="mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-4">
                {label}
            </p>
            <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4">
                {body.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                ))}
            </div>
        </div>
    );
}
