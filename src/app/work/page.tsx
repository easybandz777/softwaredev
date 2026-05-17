import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "Case Studies & Past Work (2026) | QUANT LAB USA",
    description:
        "Real shipped projects from QUANT LAB USA: trading systems, CRMs, ops platforms, estimating tools, and pentests across fintech, automotive, construction, SaaS.",
    openGraph: {
        title: "Case Studies | QUANT LAB USA",
        description:
            "Real projects we've shipped — trading systems, operations platforms, estimating tools, and penetration tests.",
        url: "https://quantlabusa.dev/work",
        type: "website",
    },
    alternates: {
        canonical: "https://quantlabusa.dev/work",
    },
};

const itemListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "QuantLab Case Studies",
    url: "https://quantlabusa.dev/work",
    itemListElement: caseStudies.map((cs, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://quantlabusa.dev/work/${cs.slug}`,
        name: cs.title,
    })),
};

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(itemListStructuredData),
                }}
            />

            {/* Header */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div
                    className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none"
                />
                <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        Our Work
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Case Studies
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        A few of the projects we've built and deployed. Names are redacted
                        where clients prefer it, but the problems, the approach, and the
                        results are real.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="pb-24 relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {caseStudies.map((cs) => (
                            <Link
                                key={cs.slug}
                                href={`/work/${cs.slug}`}
                                className="group relative rounded-2xl border border-white/8 bg-[#0d1526]/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-quant-blue/40 hover:bg-[#0d1526] overflow-hidden"
                            >
                                {/* Industry + year tag row */}
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-sky-400">
                                        {cs.industry}
                                    </span>
                                    <span className="text-gray-700">·</span>
                                    <span className="text-xs text-gray-400 font-mono">
                                        {cs.year}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-sky-100 transition-colors">
                                    {cs.title}
                                </h2>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {cs.summary}
                                </p>

                                <div className="flex items-center gap-2 text-sky-400 text-sm font-medium group-hover:gap-3 transition-all">
                                    Read the case study
                                    <ArrowRight className="w-4 h-4" />
                                </div>

                                {/* Accent line on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Working on something similar?
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Tell us what you're trying to build. We'll tell you whether we can
                        help and what it would take.
                    </p>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed text-center">
                        Or talk to us directly: <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> · <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a>
                    </p>
                    <ConsultationCTA label="Book a Consultation" />
                </div>
            </section>
        </main>
    );
}
