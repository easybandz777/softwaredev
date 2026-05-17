import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { ArrowRight, Check, Webhook } from "lucide-react";

const SLUG = "stripe-webhook-security-best-practices";
const TITLE = "Stripe Webhook Security: 12 Patterns That Survive Production";
const DESCRIPTION =
    "Twelve production-grade Stripe webhook patterns: signature verification, idempotency, retries, replay protection, queue-based processing, and the gotchas that lose money.";
const PUBLISHED_ISO = "2026-05-12";

export const metadata: Metadata = articleMetadata({
    title: TITLE,
    description: DESCRIPTION,
    slug: `/blog/${SLUG}`,
    image: "/og-stripe.png",
    imageAlt: "Stripe webhook security best practices 12 patterns",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: PUBLISHED_ISO,
    authors: ["Bill Beltz"],
    keywords: [
        "Stripe webhook security",
        "webhook signature verification",
        "Stripe webhook idempotency",
        "webhook retries",
        "Stripe production patterns",
    ],
});

const faqItems = [
    {
        q: "How do I verify a Stripe webhook signature?",
        a: "Capture the raw request body (not the parsed JSON), retrieve the Stripe-Signature header, and pass both to stripe.webhooks.constructEvent with your webhook signing secret. The function throws on any signature mismatch, timestamp deviation greater than the tolerance window, or replay risk. Never roll your own verification. In Next.js App Router, you must read the body as text or arrayBuffer to preserve the original bytes.",
    },
    {
        q: "Why is the raw body required for signature verification?",
        a: "Stripe signs the exact bytes it sent you. JSON parsing reorders keys, normalizes whitespace, and changes the byte sequence. The signed payload no longer matches what you reconstruct. Read the raw body first, verify the signature, then parse the JSON. This catches 80% of broken webhook integrations.",
    },
    {
        q: "How do I prevent webhook replay attacks?",
        a: "Three layers. First, verify the signature so the request must have come from Stripe. Second, enforce the timestamp tolerance window (default 5 minutes — anything older is rejected). Third, track processed event IDs in your database and reject duplicates. Stripe will sometimes legitimately re-deliver an event; idempotency handling is required.",
    },
    {
        q: "What is webhook idempotency and why does it matter?",
        a: "Stripe retries webhook delivery up to 3 days if your endpoint returns non-2xx or times out. The same event will arrive multiple times. Your handler must produce the same outcome on a 2nd, 5th, or 50th delivery — no double charges, no duplicate emails. Idempotency keys on every side effect plus event ID tracking in your database is the pattern.",
    },
    {
        q: "What does Stripe consider a successful webhook?",
        a: "Any 2xx response within the timeout window (default 30 seconds, less than 10 strongly recommended). Anything else triggers retry. Slow handlers that eventually succeed still count as failures from Stripe's perspective if they exceed the timeout. Always acknowledge fast and queue the work — do not process inline.",
    },
    {
        q: "Should I process webhook work inline or queue it?",
        a: "Queue it. The handler should verify, persist, ack with 200, and return. Heavy work (sending emails, updating downstream systems, triggering jobs) belongs on a background worker. Inline processing risks timeouts, double-execution on retry, and database lock contention at scale.",
    },
    {
        q: "How do I rotate a webhook signing secret without downtime?",
        a: "Stripe lets you have multiple active signing secrets per endpoint during rotation windows. Add the new secret to your environment, deploy code that tries the new secret first and falls back to the old secret, rotate the endpoint in the Stripe dashboard, deploy code that only uses the new secret, and remove the old secret from the environment.",
    },
    {
        q: "What is the Stripe Workbench or Stripe CLI's role in webhook development?",
        a: "Stripe CLI forwards live webhook events to localhost for development. Stripe Workbench is the dashboard panel where you inspect event details, signing secrets, and delivery history. Both are essential for iterating safely. Never use production signing secrets in development environments.",
    },
    {
        q: "How do I handle webhook events I don't care about?",
        a: "Return 200 and move on. Stripe sends every enabled event type. Filtering at the endpoint configuration level (only subscribe to events you handle) reduces noise. Always return 2xx for unhandled event types — never 4xx or 5xx, which signals retry-worthy failure.",
    },
    {
        q: "How do I test webhook handlers?",
        a: "Three layers. Unit test the handler with fixture events from the Stripe API (real JSON shapes). Integration test against a Stripe test account using stripe CLI trigger to fire real events. Pre-prod test with a sandbox account that mirrors production setup. Production-test by replaying events from the Stripe dashboard.",
    },
    {
        q: "What happens if my webhook endpoint is down for a day?",
        a: "Stripe retries with exponential backoff for up to 3 days. After that, the event is marked failed and not retried. You can manually replay events from the Stripe dashboard. Best practice: monitor your webhook endpoint's success rate as a critical SLO. Below 99.5% should page somebody.",
    },
    {
        q: "How do I monitor webhook health in production?",
        a: "Three signals. Stripe dashboard delivery success rate (alert below 99%). Your own metrics on event types received vs processed. Latency of inline ack time (P95 under 200ms is healthy). We export Stripe webhook metrics into Datadog/Sentry and alert on anomalies.",
    },
];

const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Stripe Webhook Security Best Practices", url: `/blog/${SLUG}` },
];

const articleLd = articleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED_ISO,
    image: "https://quantlabusa.dev/og-stripe.png",
    slug: SLUG,
    section: "Stripe Engineering",
    keywords: ["Stripe webhooks", "webhook security", "signature verification", "idempotency"],
});
const breadcrumbLd = breadcrumbSchema(breadcrumbItems, `/blog/${SLUG}`);
const faqLd = faqSchema(faqItems);

export default function StripeWebhookSecurityPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Stripe webhook security</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Webhook className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">MOFU Engineering Reference · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Stripe Webhook Security: 12 Patterns That Survive Production
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        Engineering reference for production-grade Stripe webhooks. Signature verification, idempotency, retries, replay protection, queue-based processing, monitoring — and the gotchas that lose money.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">Bill Beltz</Link>, founder of QUANT LAB USA INC · Published May 12, 2026
                    </p>
                    <ConsultationCTA label="Talk to a Stripe Engineer" service="Stripe Integration" source="blog-webhook-security" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer: how do I secure Stripe webhooks?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Verify the signature using the raw request body, enforce the timestamp tolerance, persist every event ID for deduplication, return a 2xx response under 200ms and queue the actual work, make every side-effect idempotent, monitor delivery success rate as an SLO, and rotate signing secrets through a dual-secret window. The most common production bug is parsing the JSON before verifying the signature — which silently breaks verification because the raw byte sequence changes.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Stripe webhooks are how the money state machine in your application stays consistent with the money state machine at Stripe. Every subscription created, every payment failure, every refund, every dispute — they all arrive as webhooks. Get this wrong and you have double-charges, missing entitlements, ghost subscriptions, and angry support emails.
                        </p>
                        <p>
                            We ship Stripe integrations as a core service at <Link href="/" className="text-sky-400 hover:underline">QUANT LAB USA</Link>. These twelve patterns are the production handbook. See also our <Link href="/blog/nextjs-stripe-integration-guide" className="text-sky-400 hover:underline">Next.js + Stripe integration guide</Link> and our <Link href="/blog/stripe-connect-marketplace-architecture" className="text-sky-400 hover:underline">Stripe Connect Marketplace Architecture</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The 12 patterns at a glance</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Verify signatures with the raw request body</li>
                            <li>Enforce timestamp tolerance for replay protection</li>
                            <li>Persist every event ID for deduplication</li>
                            <li>Acknowledge fast, process async</li>
                            <li>Idempotency keys on every downstream side effect</li>
                            <li>Subscribe only to events you handle</li>
                            <li>Return 2xx for unhandled event types</li>
                            <li>Queue-based processing with a durable worker</li>
                            <li>Dead-letter queue for permanent failures</li>
                            <li>Rotate signing secrets through dual-secret windows</li>
                            <li>Monitor delivery success rate as an SLO</li>
                            <li>Replay missed events from the dashboard</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">1. Verify signatures with the raw request body</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Stripe signs the exact bytes it sent. JSON parsing reorders keys and normalizes whitespace, which changes the byte sequence. Read the body as a string or ArrayBuffer first, verify, then parse.
                        </p>
                        <p>
                            In Next.js App Router, the route handler must call <code className="text-cyan-300">request.text()</code> before any JSON parsing. Use <code className="text-cyan-300">stripe.webhooks.constructEvent(rawBody, signature, secret)</code> — never roll your own HMAC. The Stripe SDK handles signature scheme version (v1) and timestamp parsing.
                        </p>
                        <p>
                            Signing secrets begin with <code className="text-cyan-300">whsec_</code>. Store in environment variables. Never log them.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">2. Enforce timestamp tolerance for replay protection</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Stripe's signed payload includes a Unix timestamp. The SDK rejects anything older than 5 minutes by default. This prevents an attacker who captures a valid webhook from replaying it weeks later.
                        </p>
                        <p>
                            Default tolerance is fine for most workloads. Tighten it (60 seconds) for high-value flows; loosen it (10 minutes) only if you operate in a degraded clock-skew environment.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">3. Persist every event ID for deduplication</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Stripe will sometimes re-deliver the same event legitimately — even after you returned 200. Maintain a database table of processed event IDs and reject duplicates at the handler entry point.
                        </p>
                        <p>
                            Use the event's <code className="text-cyan-300">id</code> field (which starts with <code className="text-cyan-300">evt_</code>) as the primary key. Add a unique constraint and catch the integrity violation. Retention can be capped at 30 days — older replays are unusual and Stripe documents the cap as 3 days.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">4. Acknowledge fast, process async</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Stripe's webhook delivery timeout is 30 seconds. Anything slower retries. Inline processing — sending emails, calling third-party APIs, running database transactions — risks timeouts and double-execution.
                        </p>
                        <p>
                            The pattern: verify, persist the event to a durable queue (BullMQ, SQS, Inngest, Trigger.dev), return 200. The worker processes the event asynchronously. If the worker fails, the queue handles retry without Stripe re-delivering.
                        </p>
                        <p>
                            Target inline ack time: under 200ms P95. We monitor this as an SLO.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">5. Idempotency keys on every downstream side effect</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Every downstream side effect — sending email, calling external API, writing to your database, triggering a fulfillment job — must be idempotent. The same event arriving twice should produce the same observable outcome.
                        </p>
                        <p>
                            Pattern: use the Stripe event ID as the idempotency key for downstream API calls (Stripe APIs natively support an Idempotency-Key header). For internal mutations, use unique constraints and ON CONFLICT DO NOTHING. For email, dedupe by event_id + recipient.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">6. Subscribe only to events you handle</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Stripe lets you enable all events or specific event types per endpoint. Subscribe only to what your handler implements. Reduces noise, reduces handler logic surface area, and reduces the risk that a new Stripe event type triggers behavior you did not intend.
                        </p>
                        <p>
                            Common event types for SaaS: <code className="text-cyan-300">customer.subscription.created</code>, <code className="text-cyan-300">customer.subscription.updated</code>, <code className="text-cyan-300">customer.subscription.deleted</code>, <code className="text-cyan-300">invoice.paid</code>, <code className="text-cyan-300">invoice.payment_failed</code>, <code className="text-cyan-300">customer.subscription.trial_will_end</code>, <code className="text-cyan-300">checkout.session.completed</code>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">7. Return 2xx for unhandled event types</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            If an event arrives that your code does not handle, return 200, not 4xx. Returning 4xx signals "permanent failure" but Stripe will still retry for a while, and you will spam your error logs and alerting.
                        </p>
                        <p>
                            Pattern: log the unknown event type at info level for visibility, then return 200. Add a handler when you actually want to act on it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">8. Queue-based processing with a durable worker</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The webhook handler enqueues. A separate worker process consumes. The worker has its own retry policy, its own scaling profile, and its own dead-letter behavior.
                        </p>
                        <p>
                            Our default stack: Inngest or Trigger.dev for managed; BullMQ on Redis for self-hosted. For higher-volume customers, SQS + Lambda. Each event becomes a job with the Stripe event ID as the deduplication key.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">9. Dead-letter queue for permanent failures</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Jobs that fail after all retries land in a dead-letter queue. A human reviews them, fixes the root cause, and replays. Without this, a transient bug becomes silent data drift.
                        </p>
                        <p>
                            Alert on any item in the DLQ. The bar for "you should know about this" is low — these are events your money state machine could not absorb.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">10. Rotate signing secrets through dual-secret windows</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Stripe lets you add a second active signing secret to the same endpoint during rotation. The pattern:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Generate a new signing secret in Stripe dashboard.</li>
                            <li>Deploy code that tries the new secret first, falls back to old secret. Both signing keys verify.</li>
                            <li>Wait 24 hours to confirm new secret is in use and stable.</li>
                            <li>Delete the old secret in Stripe dashboard.</li>
                            <li>Deploy code that only uses the new secret.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">11. Monitor delivery success rate as an SLO</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The Stripe dashboard surfaces delivery success rate per endpoint. Alert when it drops below 99%. Alongside that, monitor:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>P95 ack latency (target under 200ms)</li>
                            <li>Worker processing latency (target under 30s)</li>
                            <li>DLQ depth (target zero)</li>
                            <li>Duplicate event rejections per day (informational)</li>
                            <li>Unhandled event types per week (capture for triage)</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">12. Replay missed events from the dashboard</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            When an outage causes Stripe to give up retrying, the Stripe dashboard lets you replay individual events or a time-window batch. Document the replay process in your runbook. Test it in staging at least once a year.
                        </p>
                        <p>
                            For very large replay windows, ask Stripe support for a bulk export — they can ship you a JSONL file of events for a date range that your worker can ingest offline.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Common failure modes in production</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Symptom</th>
                                    <th className="px-4 py-3 border-b border-white/10">Root cause</th>
                                    <th className="px-4 py-3 border-b border-white/10">Fix</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">All signatures fail</td><td className="px-4 py-3">Body parsed before verification</td><td className="px-4 py-3">Read raw bytes first</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Duplicate emails after retry</td><td className="px-4 py-3">No idempotency on email send</td><td className="px-4 py-3">Dedupe by event_id + recipient</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Timeouts on busy endpoints</td><td className="px-4 py-3">Inline processing</td><td className="px-4 py-3">Queue and ack fast</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Out-of-order event processing</td><td className="px-4 py-3">Worker concurrency without ordering</td><td className="px-4 py-3">Use Stripe's request ordering or sort by created</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Missing entitlements after upgrade</td><td className="px-4 py-3">Event dropped during outage</td><td className="px-4 py-3">Replay from dashboard</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Testing strategy: three layers</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>Unit tests:</strong> Mock Stripe SDK, fixture event payloads, assert handler side effects.</li>
                            <li><strong>Integration tests:</strong> Use Stripe CLI <code className="text-cyan-300">stripe trigger</code> against a test Stripe account.</li>
                            <li><strong>Pre-prod tests:</strong> Mirror production webhook config in a sandbox; run full E2E flows.</li>
                        </ol>
                        <p>
                            For PCI considerations around webhooks, see our <Link href="/blog/pci-dss-compliance-saas-checklist" className="text-sky-400 hover:underline">PCI-DSS Compliance for SaaS Checklist</Link>.
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
                            { href: "/services/stripe-integration", label: "Stripe Integration service" },
                            { href: "/services/subscription-billing", label: "Subscription Billing" },
                            { href: "/services/payments-invoicing-licensing", label: "Payments, Invoicing & Licensing" },
                            { href: "/blog/nextjs-stripe-integration-guide", label: "Next.js + Stripe integration guide" },
                            { href: "/blog/stripe-connect-marketplace-architecture", label: "Stripe Connect Marketplace Architecture" },
                            { href: "/blog/pci-dss-compliance-saas-checklist", label: "PCI-DSS Compliance for SaaS" },
                            { href: "/glossary/what-is-webhooks", label: "What is a webhook?" },
                            { href: "/glossary/what-is-an-api", label: "What is an API?" },
                            { href: "/glossary/what-is-pci-dss", label: "What is PCI-DSS?" },
                            { href: "/calculators/stripe-cost", label: "Stripe cost calculator" },
                            { href: "/work/j5-sales-os", label: "Case study — J5 Sales OS" },
                            { href: "/contact", label: "Talk to an engineer" },
                        ].map((l) => (
                            <li key={l.href} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                <Link href={l.href} className="text-sky-400 hover:underline">{l.label}</Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get your Stripe integration audited.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute Stripe integration review. We will walk through your webhook handler, idempotency posture, and SLO setup. If something is leaking money, you want to know.
                        </p>
                        <ConsultationCTA label="Get an Integration Review" service="Stripe Integration" source="blog-webhook-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug="stripe-webhook-security-best-practices"
                        topics={["stripe","stack"]}
                        heading="More Stripe engineering reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link href="/blog" className="hover:text-sky-400 inline-flex items-center gap-1">
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated May 12, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
