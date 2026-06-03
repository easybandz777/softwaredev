import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { EditorialFooter } from "@/components/EditorialFooter";
import { Sources } from "@/components/Sources";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, faqSchema } from "@/lib/schemas";
import { getAuthor, authorUrl } from "@/lib/authors";
import { ArrowRight, Check, AlertTriangle } from "lucide-react";

const SLUG = "handling-failed-payments-in-stripe";
const TITLE = "Handling Failed Payments in Stripe: Dunning, Retries & Recovering Churn";
const DESCRIPTION =
    "How to reduce involuntary churn in Stripe: Smart Retries, dunning emails, the invoice.payment_failed webhook, grace periods, card-update flows, and what actually recovers revenue.";
const PUBLISHED_ISO = "2026-06-03";

const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: TITLE,
    description: DESCRIPTION,
    slug: `/blog/${SLUG}`,
    image: "/og-stripe.png",
    imageAlt: "Handling failed payments and dunning in Stripe to reduce involuntary churn",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: PUBLISHED_ISO,
    authors: [author.name],
    keywords: [
        "Stripe failed payments",
        "Stripe dunning",
        "Stripe Smart Retries",
        "involuntary churn",
        "invoice.payment_failed webhook",
    ],
});

const faqItems = [
    {
        q: "What is involuntary churn and why does it matter?",
        a: "Involuntary churn is when a subscriber leaves not because they wanted to cancel, but because their payment failed — an expired card, an insufficient-funds decline, or a bank's fraud block. For most SaaS, failed payments account for 20% to 40% of total churn. Because these customers still want your product, recovering them is the cheapest revenue you will ever earn; no acquisition spend is required.",
    },
    {
        q: "What are Stripe Smart Retries?",
        a: "Smart Retries is Stripe's machine-learning retry engine. Instead of retrying a failed charge on a fixed schedule, it uses signals across the Stripe network to pick the moment a retry is most likely to succeed — for example, retrying after a payday pattern or once a temporary bank block clears. You enable it in the Stripe Dashboard under Billing retry settings, and it typically recovers a meaningfully higher share of failed invoices than fixed-interval retries.",
    },
    {
        q: "Which Stripe webhook tells me a payment failed?",
        a: "Listen for invoice.payment_failed. It fires whenever a subscription invoice charge is declined, and the invoice object includes next_payment_attempt (when Stripe will retry) and the attempt_count. Pair it with invoice.payment_action_required for charges that need 3D Secure authentication, customer.subscription.updated to track the subscription moving into past_due, and customer.subscription.deleted for when Stripe finally gives up and cancels.",
    },
    {
        q: "How long should the grace period be before I cut off access?",
        a: "Match it to your retry window. If Smart Retries runs for up to roughly two to three weeks, keep access during past_due so you do not punish a customer whose card will recover on its own. A common pattern: full access during past_due with an in-app banner, then downgrade or suspend only when the subscription transitions to canceled or unpaid. Cutting access on the first decline destroys recoverable revenue and generates support tickets.",
    },
    {
        q: "Should I build my own dunning emails or use Stripe's?",
        a: "Start with Stripe's built-in dunning emails and the hosted card-update page — they require zero engineering and recover a large share of failures. Build custom dunning (your own branded emails, in-app prompts, SMS) when you have data showing meaningful revenue still leaking after Stripe's defaults, or when you want the messaging on-brand. Most teams over-invest in custom dunning before exhausting the free built-in recovery.",
    },
    {
        q: "How do I handle a customer whose card needs 3D Secure to retry?",
        a: "When a retry requires authentication, the invoice triggers invoice.payment_action_required and the PaymentIntent carries a status of requires_action. You cannot complete 3DS server-side — the customer must authenticate. Send them to the Stripe-hosted invoice page or your own page using the PaymentIntent client secret and the confirmPayment flow so they can complete the challenge. Surface this clearly in-app, because these recover only with customer interaction.",
    },
];

const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Handling Failed Payments in Stripe", href: `/blog/${SLUG}` },
];

const articleLd = articleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED_ISO,
    image: "https://quantlabusa.dev/og-stripe.png",
    slug: SLUG,
    section: "Stripe Engineering",
    author: { name: author.name, url: authorUrl(author.slug) },
    keywords: ["failed payments", "dunning", "Smart Retries", "involuntary churn", "Stripe"],
});
const faqLd = faqSchema(faqItems);

const declineCodes = [
    { code: "insufficient_funds", meaning: "Account lacks funds", recoverable: "Yes — retry near payday" },
    { code: "expired_card", meaning: "Card past expiry", recoverable: "Yes — prompt card update" },
    { code: "card_declined (generic)", meaning: "Issuer declined, no detail", recoverable: "Often — Smart Retry" },
    { code: "do_not_honor", meaning: "Issuer block, unspecified", recoverable: "Sometimes — retry later" },
    { code: "lost_card / stolen_card", meaning: "Card reported lost/stolen", recoverable: "No — require new card" },
    { code: "authentication_required", meaning: "3DS challenge needed", recoverable: "Yes — customer must auth" },
];

export default function HandlingFailedPaymentsPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

            <div className="container mx-auto px-6 max-w-4xl">
                <Breadcrumbs items={breadcrumbItems} />

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">Revenue Recovery Engineering · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Handling Failed Payments in Stripe: Dunning, Retries &amp; Recovering Churn
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        Failed payments quietly drain 20% to 40% of subscription revenue at most SaaS companies.
                        This is the engineering and product playbook for recovering it: Smart Retries, dunning,
                        the right webhooks, grace periods, and card-update flows that actually convert.
                    </p>
                    <AuthorByline
                        author={author}
                        publishedDate={PUBLISHED_ISO}
                        readMinutes={12}
                        className="mb-8"
                    />
                    <ConsultationCTA label="Plug Your Revenue Leak" service="Subscription Billing" source="blog-failed-payments" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer: how do I reduce failed-payment churn?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                Turn on Smart Retries and Stripe&apos;s built-in dunning emails first — that is free
                                recovery. Listen for the invoice.payment_failed webhook to drive in-app banners and
                                feature gating, keep access during the past_due grace period instead of cutting it on
                                the first decline, and give customers a one-click card-update link. Handle the
                                authentication_required case explicitly, because 3D Secure retries only succeed with
                                customer interaction. Done well, this recovers the majority of involuntary churn at
                                near-zero ongoing engineering cost.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            A churned customer who never wanted to leave is the most frustrating kind of lost revenue
                            — and the easiest to win back. At <Link href="/" className="text-sky-400 hover:underline">QUANT LAB USA</Link> we
                            treat failed-payment recovery as core billing infrastructure, not an afterthought. This
                            post is the playbook we implement on a{" "}
                            <Link href="/services/subscription-billing" className="text-sky-400 hover:underline">subscription billing engagement</Link>.
                            It assumes you already have the basics from our{" "}
                            <Link href="/blog/nextjs-stripe-integration-guide" className="text-sky-400 hover:underline">Next.js + Stripe guide</Link>{" "}
                            and reliable webhooks per our{" "}
                            <Link href="/blog/stripe-webhook-security-best-practices" className="text-sky-400 hover:underline">webhook security best practices</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Why payments fail (and which are recoverable)</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Not every decline is equal. The recovery strategy depends entirely on <em>why</em> the
                            charge failed, which Stripe surfaces in the charge&apos;s <code className="text-cyan-300">decline_code</code>{" "}
                            and the PaymentIntent&apos;s <code className="text-cyan-300">last_payment_error</code>. Hard
                            declines (lost or stolen card, fraud) will never recover on retry and need a new card. Soft
                            declines (insufficient funds, a temporary issuer block) are exactly what Smart Retries was
                            built for.
                        </p>
                    </div>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Decline code</th>
                                    <th className="px-4 py-3 border-b border-white/10">Meaning</th>
                                    <th className="px-4 py-3 border-b border-white/10">Recoverable?</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                {declineCodes.map((d) => (
                                    <tr key={d.code} className="border-b border-white/5">
                                        <td className="px-4 py-3"><code className="text-cyan-300">{d.code}</code></td>
                                        <td className="px-4 py-3">{d.meaning}</td>
                                        <td className="px-4 py-3">{d.recoverable}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Layer 1: Smart Retries (free, turn it on first)</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Stripe&apos;s default behavior retries failed subscription charges on a fixed schedule.
                            Smart Retries replaces that with a model trained across the Stripe network that times each
                            retry for when it is most likely to clear — after a likely payday, once a temporary block
                            lifts, or when the issuer is most responsive. You configure the retry window and the
                            cancel-or-leave-unpaid endpoint behavior in the Dashboard under Billing settings.
                        </p>
                        <p>
                            The key decision is what happens when retries are exhausted: Stripe can cancel the
                            subscription, mark it unpaid, or leave it past_due. Choose deliberately. Cancellation is
                            clean but ends the relationship; leaving it unpaid keeps the subscription alive for a
                            longer manual-recovery tail. Whatever you pick, make sure your webhook handler reflects
                            the final state into your own database so your app&apos;s entitlements stay correct.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Layer 2: dunning emails and the card-update flow</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Dunning is the sequence of nudges that asks the customer to fix their payment method.
                            Stripe ships built-in dunning emails plus a hosted, secure card-update page — enable both
                            before you write a single line of custom code. The hosted page is PCI-friendly: the
                            customer enters new card details directly with Stripe, so your servers never touch the
                            number.
                        </p>
                        <p>
                            The single highest-leverage improvement is reducing friction on the update. One click from
                            the dunning email straight to a pre-authenticated update page beats &quot;log in, find
                            billing, locate the update form&quot; by a wide margin. The Stripe Customer Portal gives
                            you that hosted update surface for free; link to it from your in-app banner as well as
                            from email. Build fully custom branded dunning only once you have evidence that revenue is
                            still leaking after the defaults.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Layer 3: webhooks that drive your app state</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Stripe handles the money side, but your application has to reflect the failure so you can
                            show banners, gate features, and trigger account-management work. Subscribe to and handle
                            these events:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><code className="text-cyan-300">invoice.payment_failed</code> — a charge was declined; read <code className="text-cyan-300">next_payment_attempt</code> and <code className="text-cyan-300">attempt_count</code> to decide messaging severity.</li>
                            <li><code className="text-cyan-300">invoice.payment_action_required</code> — the retry needs 3D Secure; route the customer to authenticate.</li>
                            <li><code className="text-cyan-300">customer.subscription.updated</code> — the subscription moved into <code className="text-cyan-300">past_due</code> or back to <code className="text-cyan-300">active</code> after recovery.</li>
                            <li><code className="text-cyan-300">invoice.paid</code> — a previously failed invoice recovered; clear the banner and restore any gated features.</li>
                            <li><code className="text-cyan-300">customer.subscription.deleted</code> — Stripe gave up; downgrade or suspend.</li>
                        </ul>
                        <p>
                            Make every handler idempotent and keyed off the event ID, exactly as covered in our{" "}
                            <Link href="/blog/stripe-webhook-security-best-practices" className="text-sky-400 hover:underline">webhook security best practices</Link>.
                            A double-processed <code className="text-cyan-300">invoice.paid</code> that grants a duplicate
                            credit is its own kind of revenue bug. Use our{" "}
                            <Link href="/tools/stripe-webhook-tester" className="text-sky-400 hover:underline">Stripe webhook tester</Link>{" "}
                            to validate the payloads before you ship.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The grace-period question: when to actually cut access</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            This is where teams quietly torch recoverable revenue. The instinct is to suspend the
                            account the moment a payment fails. Do not. A first decline is frequently a soft decline
                            that Smart Retries clears within days. If you cut access immediately, you punish a paying
                            customer, generate a support ticket, and often trigger a real cancellation out of
                            frustration.
                        </p>
                        <p>
                            The pattern that works: keep full access during <code className="text-cyan-300">past_due</code>,
                            show a non-blocking in-app banner with a one-click update link, and only downgrade or
                            suspend when the subscription transitions to <code className="text-cyan-300">canceled</code> or{" "}
                            <code className="text-cyan-300">unpaid</code> after retries are exhausted. Align your grace
                            window to your retry window — there is no reason to gate features while Stripe is still
                            actively retrying a card that will likely succeed.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Advanced: pre-dunning and card-expiry prevention</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The cheapest failed payment is the one that never happens. Two preventive plays. First,
                            <strong className="text-white"> card-account updater</strong>: Stripe can automatically
                            receive updated card numbers and expiry dates from participating networks when a customer&apos;s
                            bank reissues a card, so many expirations heal silently with no customer action. Second,
                            <strong className="text-white"> pre-dunning</strong>: listen for{" "}
                            <code className="text-cyan-300">customer.subscription.trial_will_end</code> and watch for
                            cards approaching their expiry month, then proactively prompt an update before the renewal
                            charge ever fails.
                        </p>
                        <p>
                            For teams running this at scale across many customers and plans, the recovery system
                            becomes part of the broader billing architecture — entitlements, invoicing, and reconciliation
                            all have to agree on the subscription&apos;s state. That whole surface is what we wrap in our{" "}
                            <Link href="/services/payments-invoicing-licensing" className="text-sky-400 hover:underline">payments, invoicing, and licensing service</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">FAQ</h2>
                    <div className="space-y-6">
                        {faqItems.map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Related reading and next steps</h2>
                    <ul className="space-y-3">
                        {[
                            { href: "/services/subscription-billing", label: "Subscription Billing service" },
                            { href: "/services/stripe-integration", label: "Stripe Integration service" },
                            { href: "/services/payments-invoicing-licensing", label: "Payments, Invoicing & Licensing" },
                            { href: "/blog/nextjs-stripe-integration-guide", label: "Next.js + Stripe integration guide" },
                            { href: "/blog/stripe-webhook-security-best-practices", label: "Stripe webhook security best practices" },
                            { href: "/glossary/what-is-webhooks", label: "What is a webhook?" },
                            { href: "/tools/stripe-webhook-tester", label: "Stripe webhook tester" },
                            { href: "/contact", label: "Talk to an engineer" },
                        ].map((l) => (
                            <li key={l.href} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                <Link href={l.href} className="text-sky-400 hover:underline">{l.label}</Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <Sources
                        items={[
                            { label: "Smart Retries and automatic collection", href: "https://docs.stripe.com/billing/revenue-recovery/smart-retries", publisher: "Stripe Docs" },
                            { label: "Managing failed payments and dunning", href: "https://docs.stripe.com/billing/subscriptions/overview", publisher: "Stripe Docs" },
                            { label: "Decline codes reference", href: "https://docs.stripe.com/declines/codes", publisher: "Stripe Docs" },
                            { label: "Customer portal for card updates", href: "https://docs.stripe.com/customer-management", publisher: "Stripe Docs" },
                        ]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Find out how much revenue you are leaking.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute review of your dunning, retry, and grace-period setup. If involuntary churn
                            is bigger than you think — and it usually is — we will show you exactly where it leaks.
                        </p>
                        <ConsultationCTA label="Get a Recovery Review" service="Subscription Billing" source="blog-failed-payments-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <EditorialFooter reviewedDate={PUBLISHED_ISO} />
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug={SLUG}
                        topics={["stripe", "saas"]}
                        pinned={[
                            "stripe-webhook-security-best-practices",
                            "nextjs-stripe-integration-guide",
                            "building-multi-tenant-saas-postgres-rls",
                        ]}
                        heading="More Stripe engineering reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link href="/blog" className="hover:text-sky-400 inline-flex items-center gap-1">
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Published June 3, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
