import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { Scale, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "llc-vs-c-corp-decision-checklist";
const TITLE = "LLC vs C-Corp: The Founder's Entity Decision Checklist";
const PDF_FILENAME = "llc-vs-c-corp-decision-checklist.pdf";

export const metadata: Metadata = {
    title: "LLC vs C-Corp Decision Checklist for Founders | QUANT LAB USA",
    description:
        "30-page founder's checklist with tax, funding, and equity comparisons across LLC, S-Corp, and C-Corp — plus a real Georgia-incorporated C-Corp case study.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "LLC vs C-Corp Decision Checklist for Founders (Free PDF) | QUANT LAB USA",
        description:
            "30-page entity decision checklist with tax, funding, and equity comparisons across LLC, S-Corp, and C-Corp — with a real C-Corp case study.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "LLC vs C-Corp Decision Checklist for Founders (Free PDF) | QUANT LAB USA",
        description:
            "30-page checklist with tax, funding, and equity comparisons across entity types.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "Downloadable 30-page founder's checklist comparing LLC, S-Corp, and C-Corp on tax treatment, funding readiness, ownership transfer, and exit math, with a real Georgia C-Corp case study.",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Who is the LLC vs C-Corp checklist for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Founders, co-founders, and operators incorporating a new technology company or restructuring an existing one. It is especially useful when you are deciding whether to organize as an LLC, elect S-Corp status, or incorporate as a C-Corp at the federal level, and when you are deciding which state to incorporate in.",
            },
        },
        {
            "@type": "Question",
            name: "Is this checklist tax or legal advice?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. This is a structured decision framework so you can have a productive conversation with your CPA, tax attorney, and incorporation specialist. The checklist surfaces the questions a competent advisor will ask and gives you the vocabulary to evaluate their answers. Always confirm the final structure with a licensed professional.",
            },
        },
        {
            "@type": "Question",
            name: "Why does the checklist reference QUANT LAB USA?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Because we made the decision ourselves recently. QUANT LAB USA INC is a Georgia-incorporated technology C-Corp. The case study in Section 9 walks through the trade-offs we evaluated, what we picked, and the Form 2553 S-Corp election deadline we are still tracking. Seeing a live example of the framework applied to a real entity is the most useful part of the document for most founders.",
            },
        },
        {
            "@type": "Question",
            name: "Does it cover state-level decisions?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Section 5 covers state-of-incorporation trade-offs across Delaware, Georgia, Texas, Wyoming, Florida, and California, including franchise tax math, annual filing burden, and the Delaware question for non-Delaware operations. The checklist will not pick a state for you, but it will tell you which questions actually matter.",
            },
        },
        {
            "@type": "Question",
            name: "What happens after I download?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You receive the 30-page PDF immediately plus one short follow-up email. If you would like a software-side scoping conversation tied to your entity choice — for example, whether your custom platform needs multi-entity support, billing under a parent C-Corp, or international subsidiary considerations — book a 20-minute call directly.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://quantlabusa.dev/resources" },
        { "@type": "ListItem", position: 3, name: "LLC vs C-Corp Decision Checklist", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

export default function LlcVsCCorpPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="container mx-auto px-6 max-w-6xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/resources" className="hover:text-sky-400 transition-colors">Resources</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">LLC vs C-Corp Decision Checklist</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <Scale className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                30-page playbook · PDF + worksheet
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Stop guessing your entity. Pick LLC or C-Corp on a framework, not on a forum thread.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A 30-page decision checklist comparing LLC, S-Corp, and C-Corp on tax treatment,
                                funding readiness, ownership transfer, and exit math — with a real case study from
                                a Georgia-incorporated technology C-Corp that walked the same decision in 2026.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>30 pages, 9 sections</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>2-hour read</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For founders &amp; co-founders</span></div>
                            </div>
                        </AnimatedSection>
                    </div>
                    <div className="lg:col-span-2">
                        <AnimatedSection>
                            <ResourceLeadForm
                                slug={SLUG}
                                title={TITLE}
                                pdfFilename={PDF_FILENAME}
                                drip="D1"
                                successHeadline="The LLC vs C-Corp Decision Checklist is yours."
                                relatedServiceHref="/services/custom-business-software"
                                relatedServiceLabel="custom business software development"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Why the entity decision matters more than most founders realize
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                The entity choice is one of the first three decisions a founder makes, and it is the
                                one most likely to be made in five minutes on a state filing site after watching a
                                YouTube video. That works fine if the company stays small and you never raise
                                outside capital. It is expensive every other way. We have watched founders unwind an
                                LLC mid-fundraise because the lead investor would not subscribe to a partnership
                                interest, double-tax dividends out of a C-Corp because they did not understand the
                                S-Corp election window, and pay a New Jersey CPA to do their Georgia franchise tax
                                because the original incorporation state was picked by an internet meme.
                            </p>
                            <p>
                                This checklist exists because we made the decision ourselves recently. QUANT LAB
                                USA INC is a Georgia C-Corp with a Form 2553 S-Corp election deadline still open
                                until mid-2026. Section 9 of the PDF is a live case study of the trade-offs we
                                evaluated against the same checklist you are about to download. Most founders find
                                that the most useful section of the document, because seeing a real example with
                                real numbers makes the abstract framework concrete. The same framework underpins
                                how we scope{" "}
                                <Link href="/services/custom-business-software" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom business software
                                </Link>{" "}
                                builds when client entity structure has implications for multi-tenant data isolation,
                                billing routing, or international subsidiary support.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Inside the 30-page PDF
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Section 1 — The four-question filter. Will you raise priced equity? Will you have foreign owners or institutional investors? Do you need to issue ISOs? Is the company a single-member operation? These four questions resolve 80% of entity decisions before you read another page.",
                                "Section 2 — LLC deep dive. Single-member vs multi-member, default tax classification, the K-1 problem at scale, the self-employment tax surface area, and why a venture-backable company almost never stays an LLC past Series Seed.",
                                "Section 3 — C-Corp deep dive. Double taxation explained honestly, Section 1202 qualified small business stock and the $10M / 10x basis exclusion, the 83(b) election, ISO vs NSO grants, and the dividend-versus-salary mechanics for owner-employees.",
                                "Section 4 — S-Corp election as a middle path. Who can elect, who cannot (any non-US shareholder kills it), the reasonable compensation rule, and why most operators electing S-Corp do so to manage self-employment tax — not because S-Corp is the long-term endgame.",
                                "Section 5 — State of incorporation. Delaware, Georgia, Texas, Wyoming, Florida, California. Franchise tax math, annual filing burden, foreign qualification cost, and a direct answer to the perennial Delaware-for-everything question — which is wrong for most non-VC-backed companies.",
                                "Section 6 — Funding readiness. The exact entity structures venture investors, angel groups, and 506(c) syndicates require — and the entity structures that disqualify your round before the term sheet is drafted.",
                                "Section 7 — Equity and exit math. How the same $5M acquisition pays out differently across LLC, S-Corp, and C-Corp owners after federal, state, and self-employment tax. The numbers will surprise most founders.",
                                "Section 8 — The conversion path. What it costs and what it breaks to convert LLC to C-Corp at Series Seed, including F-reorganization mechanics and the QSBS holding period reset trap.",
                                "Section 9 — Case study: QUANT LAB USA INC. Why a Georgia C-Corp, why not an LLC, why the Form 2553 S-Corp election decision is still open as of 2026, and what we are tracking to resolve it.",
                            ].map((item) => (
                                <li key={item} className="flex gap-3 text-gray-300">
                                    <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Who this is for
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                The checklist is targeted at four founder profiles. First, technical founders who
                                are about to incorporate a new venture and want to make the entity choice on the
                                same level of rigor they apply to architecture decisions. Second, solo operators
                                running an LLC who are about to start raising priced equity and need to evaluate
                                whether and when to convert. Third, co-founder teams where two of three founders
                                want a C-Corp and one wants a Wyoming LLC because of a forum thread. Fourth,
                                consulting practices and small agency operators evaluating whether the S-Corp
                                election is worth the additional payroll administration.
                            </p>
                            <p>
                                If you build product in any of the verticals we work in — including{" "}
                                <Link href="/industries/fintech" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    fintech
                                </Link>
                                ,{" "}
                                <Link href="/industries/saas" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SaaS
                                </Link>
                                , or{" "}
                                <Link href="/industries/e-commerce" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    e-commerce
                                </Link>{" "}
                                — the entity decision has knock-on effects on your billing infrastructure, your
                                multi-state sales-tax surface area, and whether your investors will require a
                                Delaware flip before they fund.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            What you will learn
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                You will leave with a defensible answer to the entity question for your specific
                                situation, the math to back it up across a 5-year horizon, and a list of the next
                                steps to take with your CPA and incorporation specialist. You will also have the
                                vocabulary to push back on the most common bad advice founders receive — including
                                the reflexive Delaware-for-everything default, the LLC-because-it-is-cheaper
                                default, and the no-S-Corp-election-ever default that costs single-member operators
                                a meaningful amount of self-employment tax.
                            </p>
                            <p>
                                On the funding side, you will understand exactly what a SAFE looks like inside an
                                LLC versus a C-Corp (hint: most SAFE templates assume C-Corp and break inside an
                                LLC), what a priced equity round actually requires, and what a Delaware flip costs
                                and breaks if you do it after raising on a YC SAFE.
                            </p>
                            <p>
                                On the exit side, the worksheet walks through the QSBS Section 1202 calculation
                                for a hypothetical $10M exit, side-by-side with the same exit out of an LLC. The
                                gap is large enough that it is the single biggest reason most venture-track founders
                                land on C-Corp regardless of every other factor. Pair this with our{" "}
                                <Link href="/resources/mvp-to-prod-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    MVP to Production Playbook
                                </Link>{" "}
                                if you are also actively shipping product.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                QUANT LAB scopes most engagements with entity-aware questions on the first call —
                                because the right{" "}
                                <Link href="/services/stripe-integration" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Stripe integration
                                </Link>{" "}
                                pattern is different for an LLC selling SaaS subscriptions than for a C-Corp
                                operating a multi-tenant marketplace. Multi-entity billing, intercompany transfers,
                                and international subsidiary support are decisions that get baked into the{" "}
                                <Link href="/services/saas-platform-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SaaS platform architecture
                                </Link>{" "}
                                early — fixing them later is expensive. Likewise for{" "}
                                <Link href="/services/payments-invoicing-licensing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    payments, invoicing, and licensing systems
                                </Link>{" "}
                                where the legal entity is the unit of revenue recognition.
                            </p>
                            <p>
                                If you are also evaluating whether to build or buy your billing stack, see{" "}
                                <Link href="/resources/build-vs-buy-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    the build-vs-buy playbook
                                </Link>{" "}
                                and the{" "}
                                <Link href="/calculators/build-vs-buy" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    build-vs-buy calculator
                                </Link>
                                . If your entity decision unlocks a custom build,{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    our discovery sprint pricing
                                </Link>{" "}
                                is the next step. For a sense of how we engage,{" "}
                                <Link href="/about" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    read our about page
                                </Link>{" "}
                                or browse{" "}
                                <Link href="/work" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    recent case studies
                                </Link>
                                .
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Frequently asked questions
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "Who is the LLC vs C-Corp checklist for?",
                                    a: "Founders, co-founders, and operators incorporating a new technology company or restructuring an existing one. It is especially useful when you are deciding whether to organize as an LLC, elect S-Corp status, or incorporate as a C-Corp at the federal level.",
                                },
                                {
                                    q: "Is this checklist tax or legal advice?",
                                    a: "No. This is a structured decision framework so you can have a productive conversation with your CPA, tax attorney, and incorporation specialist. The checklist surfaces the questions a competent advisor will ask and gives you the vocabulary to evaluate their answers.",
                                },
                                {
                                    q: "Why does the checklist reference QUANT LAB USA?",
                                    a: "Because we made the decision ourselves. QUANT LAB USA INC is a Georgia C-Corp. The case study in Section 9 walks through the trade-offs we evaluated, what we picked, and the Form 2553 S-Corp election deadline we are still tracking.",
                                },
                                {
                                    q: "Does it cover state-level decisions?",
                                    a: "Yes. Section 5 covers state-of-incorporation trade-offs across Delaware, Georgia, Texas, Wyoming, Florida, and California, including franchise tax math, annual filing burden, and the Delaware question for non-Delaware operations.",
                                },
                                {
                                    q: "What happens after I download?",
                                    a: "You receive the 30-page PDF immediately plus one short follow-up email. If you would like a software-side scoping conversation tied to your entity choice, book a 20-minute call directly.",
                                },
                            ].map((item) => (
                                <details key={item.q} className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 open:bg-[#0d1526]">
                                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-white">
                                        <span>{item.q}</span>
                                        <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-open:rotate-90" />
                                    </summary>
                                    <p className="text-gray-400 mt-3 leading-relaxed text-sm">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Related resources &amp; reading
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/resources/build-vs-buy-playbook" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Build vs Buy Decision Playbook</p>
                                <p className="text-xs text-gray-400 leading-relaxed">For the software decision that follows the entity decision.</p>
                            </Link>
                            <Link href="/resources/mvp-to-prod-playbook" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">MVP to Production Playbook</p>
                                <p className="text-xs text-gray-400 leading-relaxed">If you are also actively shipping product alongside the incorporation work.</p>
                            </Link>
                            <Link href="/resources/stripe-integration-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Stripe Integration Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Entity choice has direct implications for how your billing stack is wired.</p>
                            </Link>
                            <Link href="/services/payments-invoicing-licensing" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Payments, Invoicing &amp; Licensing</p>
                                <p className="text-xs text-gray-400 leading-relaxed">How we build revenue infrastructure with entity structure in mind.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Want a second set of eyes on your entity choice and the software that follows?
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                We do not give tax or legal advice. We do scope custom software builds that fit
                                the entity structure you land on — including multi-entity billing, intercompany
                                transfers, and the cross-border edge cases that surface when you incorporate one
                                way and operate another. See{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how the discovery sprint is priced
                                </Link>{" "}
                                or just book a call.
                            </p>
                            <ConsultationCTA label="Book a 20-min call" source={`${SLUG}-resource`} service="Custom Business Software" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
