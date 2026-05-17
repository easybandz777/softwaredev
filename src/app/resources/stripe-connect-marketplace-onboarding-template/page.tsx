import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { CreditCard, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "stripe-connect-marketplace-onboarding-template";
const TITLE = "Stripe Connect Marketplace Onboarding Template";
const PDF_FILENAME = "stripe-connect-marketplace-onboarding-template.pdf";

export const metadata: Metadata = {
    title: "Stripe Connect Marketplace Onboarding Template | QUANT LAB USA",
    description:
        "25-page founder + COO checklist for launching a Stripe Connect marketplace — KYC, payout, dispute, escrow, and reserve patterns from real production builds.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "Stripe Connect Marketplace Onboarding Template (Free PDF) | QUANT LAB USA",
        description:
            "25-page founder + COO checklist for launching a Stripe Connect marketplace, with KYC, payout, dispute, escrow, and reserve patterns.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Stripe Connect Marketplace Onboarding Template (Free PDF) | QUANT LAB USA",
        description:
            "25-page checklist for launching Stripe Connect with KYC, payouts, disputes, and escrow patterns.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "Downloadable 25-page Stripe Connect marketplace onboarding template covering KYC, account types, payout cadence, dispute handling, reserves, escrow patterns, and tax form generation.",
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
            name: "Who is this Stripe Connect template for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Founders, COOs, and product leads launching a two-sided marketplace, a creator platform, a SaaS-with-marketplace product, or any product that needs to split payments between the platform and third-party sellers. It assumes you have already decided to use Stripe Connect — the template helps you scope the build, not pick a payments processor.",
            },
        },
        {
            "@type": "Question",
            name: "Does it cover Standard, Express, and Custom Connect account types?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Section 2 walks through the trade-offs across Standard accounts (sellers manage their own Stripe relationship), Express accounts (Stripe-hosted onboarding with platform-owned UX), and Custom accounts (platform-fully-controlled with full Stripe API responsibility). The decision tree covers KYC ownership, dispute liability, and onboarding-flow conversion considerations.",
            },
        },
        {
            "@type": "Question",
            name: "What about escrow and held funds?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Section 6 covers three production patterns for holding funds — separate charges and transfers with explicit holding periods, on-behalf-of charges with payout schedule overrides, and the Stripe Treasury pattern when you need stronger custody guarantees. Each pattern has a sample data model and a list of state money-transmitter implications you should run by counsel.",
            },
        },
        {
            "@type": "Question",
            name: "Does it include dispute and chargeback handling?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Section 7 covers chargeback liability allocation across account types, reserve mechanics, automated dispute evidence submission, the chargeback rate threshold that triggers Stripe risk review, and the operational playbook for handling disputes when your seller has gone unresponsive.",
            },
        },
        {
            "@type": "Question",
            name: "What happens after I download?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You get the PDF immediately and one short follow-up email. If you want a working session on your specific marketplace build — including the data model, the API surface, and the multi-account Stripe configuration — book a 20-minute scoping call.",
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
        { "@type": "ListItem", position: 3, name: "Stripe Connect Marketplace Onboarding Template", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

export default function StripeConnectMarketplacePage() {
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
                        <li className="text-gray-300">Stripe Connect Marketplace Onboarding Template</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <CreditCard className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                25-page playbook · PDF + checklist
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Launch a Stripe Connect marketplace on a checklist, not on Stripe&apos;s docs.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A 25-page onboarding template covering KYC, account types, payouts, disputes,
                                escrow, reserves, and tax forms — built from real production Stripe Connect
                                marketplaces. So your launch goes live in weeks, not after the third Stripe
                                support escalation.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>25 pages, 9 sections</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>2-hour read</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For founders &amp; COOs</span></div>
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
                                successHeadline="The Stripe Connect Marketplace Template is yours."
                                relatedServiceHref="/services/stripe-integration"
                                relatedServiceLabel="Stripe integration services"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Stripe Connect rewards careful planning — and punishes everything else
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Stripe Connect is the right answer for almost every marketplace, creator platform,
                                and software-with-payouts product. It is also the place where most of those products
                                lose six weeks of engineering time on rework because the account type was picked
                                wrong, the onboarding flow does not pass Stripe risk review, the payout schedule was
                                copied from an example and now produces unexpected reserves, or the dispute liability
                                landed on the platform when the team thought it had transferred to the seller.
                                Stripe&apos;s documentation is good but it is reference documentation, not a launch
                                checklist.
                            </p>
                            <p>
                                This template is what we hand to founders and COOs before kicking off a{" "}
                                <Link href="/services/stripe-integration" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Stripe Connect integration build
                                </Link>
                                . It assumes you have already decided to use Stripe Connect, and walks you through
                                the 50+ decisions you need to make before line one of integration code gets written
                                — so the build phase is mechanical, not exploratory. Many of these decisions overlap
                                with patterns we cover in our{" "}
                                <Link href="/resources/stripe-integration-checklist" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    base Stripe Integration Checklist
                                </Link>{" "}
                                — the marketplace template is the Connect-specific extension.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Inside the 25-page PDF
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Section 1 — Marketplace anatomy. The four roles in a Stripe Connect marketplace (platform, connected account, customer, end-buyer) and the seven money-movement patterns built on top.",
                                "Section 2 — Account type decision. Standard vs Express vs Custom. KYC ownership, dispute liability, onboarding conversion, branding control, and the dashboard-access trade-off — with a one-page decision tree.",
                                "Section 3 — KYC and verification flow. The fields Stripe requires from a US LLC seller versus a foreign individual versus a UK Ltd, what triggers additional verification, how to design the resumable flow, and how to handle rejected verifications without breaking your onboarding funnel.",
                                "Section 4 — Money movement architecture. Direct charges, destination charges, separate charges and transfers, on-behalf-of charges. Sample data models for each pattern and the operational implications.",
                                "Section 5 — Payouts and payout schedule. Daily, weekly, monthly, manual. How payout schedule interacts with Stripe&apos;s automatic reserve logic. How to handle multi-currency payouts. The minimum-balance rules that surprise platform operators on launch day.",
                                "Section 6 — Escrow and held funds. Three production patterns, sample data models, and the state money-transmitter implications to run by counsel before you ship.",
                                "Section 7 — Disputes and chargebacks. Liability allocation across account types, automated evidence submission, the dispute-rate threshold that triggers Stripe risk review, and the operational playbook for a seller-side dispute when the seller has gone unresponsive.",
                                "Section 8 — Reserves and risk. When Stripe places a reserve, why, how to predict it, and how to design platform-level reserves on top of Stripe&apos;s.",
                                "Section 9 — Tax forms and 1099-K. Issuance thresholds (federal and per-state), how Connect issuance works, what data you need to capture during onboarding, and the December-deadline operational pattern you want to set up before October.",
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
                                The template is targeted at four profiles. First, founders launching a two-sided
                                marketplace where buyers pay sellers through your platform and you take a cut.
                                Second, creator platforms — courses, communities, subscription content — that need
                                to route payments to creators on a recurring schedule. Third, SaaS products with a
                                marketplace adjacency (think a job board, a directory with paid listings, or a
                                booking platform). Fourth, COOs at existing marketplaces evaluating whether to
                                migrate from a different processor to Stripe Connect, or to migrate between Stripe
                                account types as the business scales.
                            </p>
                            <p>
                                It is especially useful if you operate in or adjacent to{" "}
                                <Link href="/industries/fintech" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    fintech
                                </Link>
                                ,{" "}
                                <Link href="/industries/e-commerce" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    e-commerce
                                </Link>
                                , or{" "}
                                <Link href="/industries/saas" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SaaS
                                </Link>{" "}
                                where payment infrastructure is the core product, not a side dependency.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            What you will learn
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                You will leave with the account type picked, the money-movement pattern picked, the
                                payout schedule picked, the dispute liability allocation understood, and a written
                                onboarding flow you can hand to engineering for build. You will also have the
                                vocabulary to ask Stripe&apos;s solutions team specific questions during your
                                pre-launch review — which is the single fastest way to surface integration issues
                                before they become customer-facing bugs.
                            </p>
                            <p>
                                On the operational side, you will understand exactly what your weekly Stripe Connect
                                operations rhythm looks like: which dashboards to monitor, which alerts to wire up,
                                what to do when a connected account is rejected by Stripe risk review, and how to
                                handle the inevitable seller who logs a customer complaint by chargeback rather
                                than refund request. The template includes a 30/60/90 operational rollout schedule
                                that pairs with the technical integration.
                            </p>
                            <p>
                                On the engineering side, you will receive sample webhook handler patterns, idempotency
                                key conventions for transfer creation, and the test-mode rehearsal script we run
                                before flipping to live mode. Pair this with our{" "}
                                <Link href="/resources/mvp-to-prod-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    MVP to Production Playbook
                                </Link>{" "}
                                for the broader production-readiness checklist.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Most of our{" "}
                                <Link href="/services/saas-platform-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SaaS platform builds
                                </Link>{" "}
                                that include a marketplace component start with this template and the related{" "}
                                <Link href="/services/payments-invoicing-licensing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    payments and invoicing scoping
                                </Link>{" "}
                                conversation. We use the checklist on the first call to identify which decisions are
                                already made, which need a working session, and which need legal review before
                                engineering can scope further. The template feeds directly into the{" "}
                                <Link href="/services/api-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    API development scope
                                </Link>{" "}
                                for the Stripe webhook handlers and the connected-account management surface.
                            </p>
                            <p>
                                For the broader build-vs-buy question on payments infrastructure, read{" "}
                                <Link href="/resources/build-vs-buy-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    the build-vs-buy playbook
                                </Link>
                                . If you are deciding between Connect and an alternative like Adyen for Platforms,
                                we have a comparison page that walks through the trade-offs at{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    our pricing page
                                </Link>{" "}
                                or on a{" "}
                                <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    scoping call
                                </Link>
                                . For sample builds, see the case studies on{" "}
                                <Link href="/work" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    our work page
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
                                    q: "Who is this Stripe Connect template for?",
                                    a: "Founders, COOs, and product leads launching a two-sided marketplace, a creator platform, or any product that needs to split payments between the platform and third-party sellers. It assumes you have already decided to use Stripe Connect.",
                                },
                                {
                                    q: "Does it cover Standard, Express, and Custom Connect account types?",
                                    a: "Yes. Section 2 walks through the trade-offs across all three account types with a decision tree for KYC ownership, dispute liability, and onboarding-flow conversion.",
                                },
                                {
                                    q: "What about escrow and held funds?",
                                    a: "Section 6 covers three production patterns for holding funds — separate charges and transfers, on-behalf-of charges with payout schedule overrides, and Stripe Treasury — with sample data models and money-transmitter implications.",
                                },
                                {
                                    q: "Does it include dispute and chargeback handling?",
                                    a: "Yes. Section 7 covers chargeback liability, reserve mechanics, automated evidence submission, and the operational playbook for handling disputes when your seller has gone unresponsive.",
                                },
                                {
                                    q: "What happens after I download?",
                                    a: "You get the PDF immediately and one short follow-up email. If you want a working session on your specific marketplace build, book a 20-minute scoping call.",
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
                            <Link href="/resources/stripe-integration-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Stripe Integration Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The base Stripe checklist; the Connect template is its marketplace-specific extension.</p>
                            </Link>
                            <Link href="/resources/mvp-to-prod-playbook" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">MVP to Production Playbook</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Production-readiness checklist that complements the Connect integration work.</p>
                            </Link>
                            <Link href="/services/stripe-integration" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Stripe Integration Services</p>
                                <p className="text-xs text-gray-400 leading-relaxed">How we build the integration when the template is filled in.</p>
                            </Link>
                            <Link href="/services/subscription-billing" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Subscription Billing</p>
                                <p className="text-xs text-gray-400 leading-relaxed">For the SaaS-plus-marketplace pattern where you have both subscriptions and Connect transfers.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Already filled in the template? Get a second set of eyes on it.
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                If you have walked the template and want to validate the account type, money-movement
                                pattern, and payout schedule before engineering kicks off the build, a 20-minute
                                scoping call is the cheapest way to catch the issue that costs three weeks of
                                rework on day 45. Read{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how the discovery sprint is priced
                                </Link>{" "}
                                or just book a call.
                            </p>
                            <ConsultationCTA label="Book a 20-min call" source={`${SLUG}-resource`} service="Stripe Integration" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
