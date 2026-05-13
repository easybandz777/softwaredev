import type { Metadata } from "next";
import { FAQAccordion } from "./FAQAccordion";
import { faqCategories } from "./faq-data";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "Custom Software & Pentest FAQs | QUANT LAB USA",
    description:
        "Real answers to 30 pre-sales questions about custom software, pentest pricing, timelines, code ownership, MITRE ATT&CK, and how QUANT LAB USA works.",
    openGraph: {
        title: "Custom Software & Pentest FAQs | QUANT LAB USA",
        description:
            "Real answers to 30 pre-sales questions about custom software, pentest pricing, timelines, code ownership, MITRE ATT&CK, and how QUANT LAB USA works.",
        url: "https://quantlabusa.dev/faq",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Software & Pentest FAQs | QUANT LAB USA",
        description:
            "Real answers to 30 pre-sales questions about custom software, pentest pricing, timelines, code ownership, MITRE ATT&CK, and how QUANT LAB USA works.",
    },
    alternates: {
        canonical: "https://quantlabusa.dev/faq",
    },
};

export default function FAQPage() {
    const allQAs = faqCategories.flatMap((cat) => cat.questions);

    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        name: "QUANT LAB USA Frequently Asked Questions",
        url: "https://quantlabusa.dev/faq",
        publisher: {
            "@type": "Organization",
            name: "QUANT LAB USA",
            url: "https://quantlabusa.dev",
            founder: {
                "@type": "Person",
                name: "William Beltz",
            },
            address: {
                "@type": "PostalAddress",
                addressLocality: "Macon",
                addressRegion: "GA",
                addressCountry: "US",
            },
        },
        mainEntity: allQAs.map((qa) => ({
            "@type": "Question",
            name: qa.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: qa.a,
            },
        })),
    };

    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqStructuredData),
                }}
            />

            {/* Header */}
            <section className="pt-32 pb-14 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        FAQ
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        Thirty real answers to the questions we get before
                        engagements — pricing, timelines, stack choices, code
                        ownership, pentest methodology, and how QUANT LAB USA
                        actually works.
                    </p>
                </div>
            </section>

            <section className="pb-8 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">What is QUANT LAB USA and how does it work?</h2>
                        <p className="text-gray-200 leading-relaxed text-center max-w-3xl mx-auto">
                            <strong>QUANT LAB USA INC is a Macon, Georgia-based custom software and cybersecurity firm. Engagements are fixed-fee per phase, range from $4,000 to $200,000+, and ship in 6 to 20 weeks. The founder (Bill Beltz) is on every call and writes code on every project. You own the source code and the PostgreSQL schema at delivery. Three engagement models: fixed-fee project, monthly retainer, or one-shot audit / pentest.</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* Accordion */}
            <section className="pb-24 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <FAQAccordion />
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Still have questions?
                    </h2>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                        The easiest way to find out if we're a fit is a short call. No
                        pressure, no slide deck.
                    </p>
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                        Or talk to us directly: <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> · <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a>
                    </p>
                    <ConsultationCTA label="Book a Consultation" />
                </div>
            </section>
        </main>
    );
}
