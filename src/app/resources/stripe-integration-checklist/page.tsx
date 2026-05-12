import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { CreditCard, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "stripe-integration-checklist";
const TITLE = "The Stripe Integration Checklist";
const PDF_FILENAME = "stripe-integration-checklist.pdf";

export const metadata: Metadata = {
    title: "The Stripe Integration Checklist (Free PDF) | QUANT LAB",
    description:
        "A pre-launch checklist covering dunning, SCA, webhook resilience, idempotency, and reconciliation for SaaS teams shipping a custom Stripe integration.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "The Stripe Integration Checklist (Free PDF) | QUANT LAB",
        description:
            "A pre-launch checklist covering dunning, SCA, webhook resilience, idempotency, and reconciliation for SaaS teams shipping custom Stripe.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "The Stripe Integration Checklist (Free PDF) | QUANT LAB",
        description:
            "Pre-launch checklist for SaaS teams shipping custom Stripe. Dunning, SCA, webhooks, idempotency, reconciliation.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "Downloadable pre-launch checklist covering dunning, SCA, webhook resilience, idempotency, reconciliation, and post-launch monitoring for SaaS teams shipping a custom Stripe integration.",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA INC",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#org",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Who is the Stripe Integration Checklist for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Engineering leaders, CTOs, and SaaS founders who are about to ship a custom Stripe integration — subscriptions, metered billing, marketplace payouts, or a Connect implementation. It is also useful for teams replacing Stripe Checkout or Payment Links with custom Stripe Elements and for teams migrating from a legacy payment processor.",
            },
        },
        {
            "@type": "Question",
            name: "What does the checklist actually cover?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Pre-launch readiness across eight categories: webhook resilience (idempotency, retry queues, dead-letter queues), subscription state management, dunning and smart-retries, SCA and 3D Secure, multi-currency and tax, refund and dispute handling, reconciliation jobs and accounting exports, and post-launch monitoring. Plus an environment-parity audit for sandbox vs production.",
            },
        },
        {
            "@type": "Question",
            name: "Is this for a brand-new Stripe integration or for hardening an existing one?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Both. The pre-launch sections are useful for greenfield builds. The reconciliation, dunning, and webhook resilience sections are equally useful for teams running an existing Stripe integration that has started leaking edge cases — failed webhook retries, customer billing disputes, dunning recovery rates that look wrong, or accounting reconciliation that takes 12 hours per month.",
            },
        },
        {
            "@type": "Question",
            name: "How does this relate to your Stripe integration service?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The checklist is the internal QA artifact we use on every custom Stripe build. We ship it to clients on day one of the engagement and walk through it together at the dress-rehearsal stage. If you want our team to run the build, reply to the confirmation email or book a scoping call — we will tell you whether a fixed-fee build or a co-pilot review of your existing integration is the better fit.",
            },
        },
        {
            "@type": "Question",
            name: "What is the most commonly missed item on the checklist?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Webhook idempotency. Most teams handle Stripe webhook events as if they will arrive exactly once. In production, Stripe will replay events under network failure conditions. Without an idempotency key check, a single charge.succeeded event can grant a customer two months of access. This is the single most common bug we find in inbound code reviews.",
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
        { "@type": "ListItem", position: 3, name: "Stripe Integration Checklist", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

export default function StripeIntegrationChecklistPage() {
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
                        <li className="text-gray-300">Stripe Integration Checklist</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-400 mb-6">
                                <CreditCard className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-3">
                                Pre-launch PDF · 8 categories · Idempotency tested
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Do not launch your custom Stripe integration without this checklist.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                The same pre-launch and post-launch checklist our team runs on every custom
                                Stripe build — webhook idempotency, dunning recovery, SCA and 3D Secure,
                                subscription state, multi-currency, refunds and disputes, reconciliation, and
                                the post-launch monitoring stack that catches a dropped webhook before your
                                customers do.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-indigo-400" /><span>8 categories, 60+ items</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>45-minute review</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For SaaS engineering leaders</span></div>
                            </div>
                        </AnimatedSection>
                    </div>
                    <div className="lg:col-span-2">
                        <AnimatedSection>
                            <ResourceLeadForm
                                slug={SLUG}
                                title={TITLE}
                                pdfFilename={PDF_FILENAME}
                                drip="D3"
                                successHeadline="The Stripe Integration Checklist is yours."
                                relatedServiceHref="/services/stripe-integration"
                                relatedServiceLabel="custom Stripe integration"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Why custom Stripe integrations leak money
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                The reason custom Stripe integrations leak money is rarely the obvious one.
                                The Stripe SDK is good. The Stripe documentation is good. The mistakes are
                                upstream of the API. A team treats Stripe webhooks as exactly-once delivery
                                instead of at-least-once, and a single replay grants a customer two months
                                of free access. A team forgets to set a 3D Secure fallback on a non-US
                                payment method and the entire EU customer base hits a silent decline. A
                                team writes the subscription state machine without modeling
                                past_due-to-canceled transitions correctly and ends up with hundreds of
                                customers stuck in zombie subscription states. None of those bugs are caught
                                by Stripe's own test mode. They surface in production with revenue impact.
                            </p>
                            <p>
                                This checklist is the QA artifact our team runs on every{" "}
                                <Link href="/services/stripe-integration" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom Stripe integration engagement
                                </Link>
                                . It is also what we use when we do an inbound review of a Stripe integration
                                a client built in-house. The pre-launch sections catch the bugs that hit
                                you in Week 1. The post-launch monitoring sections catch the ones that hit
                                you in Month 6.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Inside the PDF
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Section 1 — Webhook resilience. Idempotency-key strategy, signature verification, retry queue, dead-letter queue, replay tooling, and the canonical event-handler structure for charge.succeeded, invoice.paid, customer.subscription.updated, and the 14 other events most products need.",
                                "Section 2 — Subscription state management. The full state machine for trial-to-active-to-past-due-to-canceled, the four hidden edge cases (grace periods, paused subscriptions, downgrade-at-period-end, immediate proration), and the database schema that survives a year of customer support edge cases.",
                                "Section 3 — Dunning and smart retries. Stripe Smart Retries configuration, the recovery email cadence, the in-app reactivation prompt, and the metrics dashboard that surfaces dunning recovery rate as a board-level number.",
                                "Section 4 — SCA, 3D Secure, and authentication. Required-authentication paths, off-session payment flows, recurring-payment exemptions, and the EU and UK specific fallback flows that most US-built integrations forget about.",
                                "Section 5 — Multi-currency, tax, and Stripe Tax integration. Currency rounding rules, tax calculation triggers, the Stripe Tax pre-launch checklist, and the reconciliation gotchas for cross-currency refunds.",
                                "Section 6 — Refunds, disputes, and chargebacks. The customer-facing refund UI, the internal admin refund flow with audit logging, the dispute evidence template, and the chargeback rate threshold that triggers Stripe risk review.",
                                "Section 7 — Reconciliation and accounting export. The nightly reconciliation job, the QuickBooks / NetSuite / Xero export schema, the cash-basis vs accrual-basis split, and the year-end closing checklist.",
                                "Section 8 — Post-launch monitoring. Webhook delivery dashboard, dunning recovery dashboard, subscription state distribution dashboard, refund and dispute rate dashboards, plus the four alerts your on-call engineer actually needs.",
                            ].map((item) => (
                                <li key={item} className="flex gap-3 text-gray-300">
                                    <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
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
                                The checklist is built for three audiences. First, engineering leaders and
                                CTOs at SaaS or marketplace companies shipping a custom Stripe integration
                                for the first time — replacing Stripe Checkout or Payment Links with a custom
                                Stripe Elements flow, or moving from a legacy payment processor onto Stripe.
                                Second, technical founders building a billing system into a post-MVP SaaS
                                product who need a defensible pre-launch QA artifact for an upcoming
                                enterprise sale. Third, engineering teams running an existing Stripe
                                integration that has started producing customer support fires they cannot
                                explain — failed webhook retries, dunning recovery numbers that look wrong,
                                or reconciliation reports that take a half-day per month to close.
                            </p>
                            <p>
                                If you are using Stripe Checkout or Payment Links and have no plans to
                                customize, the checklist is overkill — Stripe handles most of these concerns
                                for you. If you are building marketplace payouts on Stripe Connect, several
                                additional categories apply that are outside the scope of this checklist
                                (KYC flows, payout schedules, capability lifecycle, dispute pass-through).
                                We can cover those in a scoping call.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            What you will learn
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                You will learn the idempotency-key pattern that survives Stripe's
                                at-least-once webhook delivery semantics — and why the version that works
                                in your test environment will fail under real load. You will learn the four
                                hidden edge cases in the subscription state machine and the database schema
                                that handles all of them. You will learn how to configure Stripe Smart
                                Retries for the highest dunning recovery rate at your customer profile, the
                                in-app reactivation prompt that adds 5-12 percentage points of recovery on
                                top of the email cadence, and the metrics that turn dunning into a
                                board-level number.
                            </p>
                            <p>
                                You will learn how to handle SCA-required payments correctly for EU and UK
                                customers — the single most common source of silent decline rate inflation
                                for US-built SaaS. You will learn the multi-currency rounding rules that
                                Stripe applies and where they break your accounting reconciliation. You
                                will learn the canonical refund flow that satisfies both customer-success
                                expectations and finance audit requirements.
                            </p>
                            <p>
                                On the monitoring side, you will learn the four production dashboards
                                you actually need — webhook delivery, subscription state distribution,
                                dunning recovery, dispute and refund rate — and the threshold alerts that
                                page your on-call engineer before customers tweet at support. Section 1
                                of this checklist is also a prerequisite for the payments pillar in the{" "}
                                <Link href="/resources/mvp-to-prod-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    MVP to Production Playbook
                                </Link>
                                .
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                The checklist is the internal QA artifact we ship to every{" "}
                                <Link href="/services/stripe-integration" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom Stripe integration client
                                </Link>{" "}
                                on day one. It is also the framework our{" "}
                                <Link href="/services/payments-invoicing-licensing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    payments, invoicing, and licensing service
                                </Link>{" "}
                                runs against when we audit an existing integration. For broader billing
                                systems —{" "}
                                <Link href="/services/subscription-billing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    subscription billing
                                </Link>
                                ,{" "}
                                <Link href="/services/license-server" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    license servers
                                </Link>
                                , or full revenue stack — the checklist is one of the four artifacts that
                                governs the build.
                            </p>
                            <p>
                                To estimate the cost of a custom Stripe build at your scope, run the{" "}
                                <Link href="/calculators/stripe-cost" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Stripe integration cost calculator
                                </Link>
                                . To see how a Stripe integration sits inside a larger SaaS architecture,
                                read the{" "}
                                <Link href="/resources/mvp-to-prod-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    MVP to Production Playbook
                                </Link>
                                . For engagement pricing, see{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    the pricing page
                                </Link>{" "}
                                or browse{" "}
                                <Link href="/work" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    sample builds
                                </Link>{" "}
                                and read{" "}
                                <Link href="/about" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    about QUANT LAB
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
                                { q: "Who is the Stripe Integration Checklist for?", a: "Engineering leaders, CTOs, and SaaS founders about to ship a custom Stripe integration — subscriptions, metered billing, marketplace payouts, or Connect. Also useful for teams replacing Stripe Checkout with custom Stripe Elements." },
                                { q: "What does the checklist actually cover?", a: "Eight categories: webhook resilience, subscription state management, dunning and smart-retries, SCA and 3D Secure, multi-currency and tax, refund and dispute handling, reconciliation and accounting export, and post-launch monitoring." },
                                { q: "Is this for a brand-new Stripe integration or for hardening an existing one?", a: "Both. Pre-launch sections are useful for greenfield builds. Reconciliation, dunning, and webhook resilience sections are equally useful for existing integrations that have started leaking edge cases." },
                                { q: "How does this relate to your Stripe integration service?", a: "It is the internal QA artifact we ship to every custom Stripe build client on day one. If you want our team to run the build, reply to the confirmation email." },
                                { q: "What is the most commonly missed item on the checklist?", a: "Webhook idempotency. Most teams handle Stripe webhook events as if they will arrive exactly once. Stripe replays events under network failure conditions, and without an idempotency key check, a single charge.succeeded event can grant a customer two months of access." },
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
                            <Link href="/calculators/stripe-cost" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Stripe Integration Cost Calculator</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Size a custom Stripe build before you scope.</p>
                            </Link>
                            <Link href="/resources/mvp-to-prod-playbook" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">MVP to Production Playbook</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Where the payments pillar fits in the broader SaaS roadmap.</p>
                            </Link>
                            <Link href="/services/stripe-integration" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Custom Stripe Integration</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The service that uses this checklist on every engagement.</p>
                            </Link>
                            <Link href="/services/subscription-billing" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Subscription Billing</p>
                                <p className="text-xs text-gray-400 leading-relaxed">For broader recurring-revenue infrastructure.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-blue-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Want a second set of eyes on your Stripe integration?
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                Reply to the confirmation email with your repo or integration overview and
                                we will run the checklist against it for free. Or book a 20-minute scoping
                                call to walk through your specific build. See{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    pricing
                                </Link>{" "}
                                first if you want to anchor the budget.
                            </p>
                            <ConsultationCTA label="Book a 20-min payments call" source={`${SLUG}-resource`} service="Stripe Integration" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
