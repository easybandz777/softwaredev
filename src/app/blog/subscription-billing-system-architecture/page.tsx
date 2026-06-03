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
import { ArrowRight, Check, Boxes } from "lucide-react";

const SLUG = "subscription-billing-system-architecture";
const TITLE = "Subscription Billing System Architecture: A 2026 Engineering Blueprint";
const DESCRIPTION =
    "How to architect a robust subscription billing system: entitlements, proration, invoicing, webhook-driven state, idempotency, and reconciliation — with concrete Stripe-backed patterns.";
const PUBLISHED_ISO = "2026-06-03";

const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: TITLE,
    description: DESCRIPTION,
    slug: `/blog/${SLUG}`,
    image: "/og-stripe.png",
    imageAlt: "Subscription billing system architecture blueprint with entitlements, webhooks, and reconciliation",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: PUBLISHED_ISO,
    authors: [author.name],
    keywords: [
        "subscription billing architecture",
        "billing system design",
        "entitlements",
        "proration",
        "billing reconciliation",
    ],
});

const faqItems = [
    {
        q: "What are the core components of a subscription billing system?",
        a: "Six: a system of record for customers, plans, and subscriptions; an entitlements layer that maps a subscription to the features it unlocks; a billing engine (usually Stripe) that handles charges, invoices, and proration; a webhook ingestion pipeline that syncs the billing engine's state into your database idempotently; an invoicing and tax layer; and a reconciliation process that detects and resolves drift between your records and the provider's. The architectural principle tying them together is that your application reads entitlements from your own database, never inline from the provider.",
    },
    {
        q: "Should my application call Stripe directly to check a subscription?",
        a: "No. Checking entitlements by calling the Stripe API on every request is slow, rate-limited, and brittle if Stripe is briefly unavailable. Instead, sync subscription state into your own database via webhooks and read entitlements locally. Your app stays fast and resilient, and you gain a provider-agnostic boundary that makes switching or adding billing providers far less painful. Webhooks are the source of truth that keeps your local copy correct.",
    },
    {
        q: "How do I handle proration in a billing system?",
        a: "Proration is the partial charge or credit when a subscription changes mid-cycle. Let Stripe compute the proration math — it is more correct than rolling your own — but make the policy decisions explicitly: prorate upgrades immediately, defer downgrades to the next period, and decide whether seat removals issue credit or wait. Surface a preview to the customer before they confirm a change so the invoice is never a surprise, and store the resulting invoice items for your own reporting.",
    },
    {
        q: "Why is idempotency critical in billing systems?",
        a: "Because both your billing provider and your own infrastructure retry. Stripe re-delivers webhooks; your queue retries failed jobs; a user double-clicks a button. Without idempotency, those retries become double charges, duplicate credits, or duplicate provisioning. Every state-changing operation must produce the same result no matter how many times it runs — using the Stripe event ID as a dedup key, unique database constraints, and idempotency keys on outbound API calls.",
    },
    {
        q: "How do I reconcile my billing data with Stripe?",
        a: "Run a periodic reconciliation job that compares your local subscription and invoice records against Stripe's API and flags any drift — a subscription Stripe shows as canceled that your database still shows active, or an invoice paid in Stripe but not reflected locally. Drift happens from dropped webhooks during outages, bugs, or manual dashboard edits. Reconciliation is your safety net: it catches what webhooks missed and keeps entitlements honest.",
    },
    {
        q: "Can I rebuild my billing state if my database is lost?",
        a: "If you architect for it, yes. Treat your webhook_events table as a durable audit log and keep Stripe as the ultimate source of truth for money state. Your subscriptions, invoices, and payment history can be reconstructed by replaying Stripe events and re-syncing from the Stripe API. Designing the system so billing state is derivable from the provider — rather than only existing in your database — is what makes a billing system disaster-recoverable.",
    },
];

const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Subscription Billing System Architecture", href: `/blog/${SLUG}` },
];

const articleLd = articleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED_ISO,
    image: "https://quantlabusa.dev/og-stripe.png",
    slug: SLUG,
    section: "Billing Architecture",
    author: { name: author.name, url: authorUrl(author.slug) },
    keywords: ["billing architecture", "entitlements", "proration", "idempotency", "reconciliation"],
});
const faqLd = faqSchema(faqItems);

const layerRows = [
    { layer: "System of record", owns: "Customers, plans, subscriptions", note: "Your DB, tenant-scoped" },
    { layer: "Entitlements", owns: "Feature ↔ plan mapping", note: "Config table, synced from subs" },
    { layer: "Billing engine", owns: "Charges, invoices, proration", note: "Stripe, the money authority" },
    { layer: "Webhook pipeline", owns: "State sync, idempotent ingest", note: "Ack fast, process async" },
    { layer: "Invoicing & tax", owns: "Invoices, tax calc, receipts", note: "Stripe Invoicing + Tax" },
    { layer: "Reconciliation", owns: "Drift detection & repair", note: "Periodic job vs Stripe API" },
];

export default function SubscriptionBillingArchitecturePage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

            <div className="container mx-auto px-6 max-w-4xl">
                <Breadcrumbs items={breadcrumbItems} />

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Boxes className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">Billing Architecture · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Subscription Billing System Architecture: A 2026 Engineering Blueprint
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        A subscription billing system is a distributed state machine that touches real money. Get the
                        architecture right — entitlements, webhook-driven sync, idempotency, reconciliation — and it
                        runs itself. Get it wrong and you ship double charges and missing access. This is the blueprint.
                    </p>
                    <AuthorByline
                        author={author}
                        publishedDate={PUBLISHED_ISO}
                        readMinutes={13}
                        className="mb-8"
                    />
                    <ConsultationCTA label="Architect Your Billing System" service="Subscription Billing" source="blog-billing-architecture" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer: how do I architect billing?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                Build six layers: a tenant-scoped system of record, an entitlements layer your app reads
                                from locally, Stripe as the billing engine, a webhook pipeline that syncs Stripe&apos;s
                                state into your database idempotently, an invoicing and tax layer, and a reconciliation
                                job that detects drift. The governing principle is that your application reads
                                entitlements from your own database — never inline from Stripe — with webhooks keeping
                                the local copy in sync and reconciliation catching anything webhooks miss. Make every
                                state change idempotent so retries never double-bill.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Most billing bugs are not Stripe bugs — they are architecture bugs in the seam between
                            Stripe and the application. At <Link href="/" className="text-sky-400 hover:underline">QUANT LAB USA</Link> we
                            have rebuilt enough billing systems to recognize the same failure patterns repeatedly, and
                            this blueprint is how we avoid them. It builds on our{" "}
                            <Link href="/blog/nextjs-stripe-integration-guide" className="text-sky-400 hover:underline">Next.js + Stripe integration guide</Link>,{" "}
                            <Link href="/blog/stripe-webhook-security-best-practices" className="text-sky-400 hover:underline">webhook security best practices</Link>, and{" "}
                            <Link href="/blog/saas-pricing-models-explained-2026" className="text-sky-400 hover:underline">SaaS pricing models</Link>{" "}
                            — read those for the lower-level mechanics this post assembles into a whole.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The six-layer model</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Layer</th>
                                    <th className="px-4 py-3 border-b border-white/10">Owns</th>
                                    <th className="px-4 py-3 border-b border-white/10">Note</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                {layerRows.map((r) => (
                                    <tr key={r.layer} className="border-b border-white/5">
                                        <td className="px-4 py-3 font-medium text-white">{r.layer}</td>
                                        <td className="px-4 py-3">{r.owns}</td>
                                        <td className="px-4 py-3">{r.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Entitlements: the layer everyone skips</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The single most important architectural decision is to separate <em>billing state</em> from{" "}
                            <em>entitlements</em>. Billing state is &quot;this customer is on the Pro plan, paid through
                            the 15th.&quot; Entitlements are &quot;this customer can use SSO, has a 50-seat cap, and gets
                            priority support.&quot; Hard-coding the second into feature checks (<code className="text-cyan-300">if (plan === &apos;pro&apos;)</code>)
                            is the mistake that makes every future pricing change a code deploy.
                        </p>
                        <p>
                            Instead, maintain an entitlements mapping — a configuration table that says which features
                            and limits each plan unlocks — and sync the customer&apos;s current plan from Stripe into
                            your database via webhooks. Your application reads <code className="text-cyan-300">tenant.entitlements.sso</code>,
                            never the plan name directly. Launching a new tier or changing a limit becomes a data
                            change. This pattern also makes pricing experiments and grandfathering trivial, and it is
                            the backbone of the <Link href="/blog/saas-pricing-models-explained-2026" className="text-sky-400 hover:underline">tiered and hybrid models</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Webhook-driven state: your app reads locally</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Never check entitlements by calling Stripe inline on a request. It is slow, rate-limited,
                            and fragile if Stripe is briefly unreachable. The correct shape is a one-way sync: Stripe
                            emits webhooks, your pipeline ingests them idempotently, your database holds the current
                            subscription state, and your application reads only from your database.
                        </p>
                        <p>
                            The ingestion pipeline follows the fast-ack pattern: verify the signature against the raw
                            body, persist the event to a <code className="text-cyan-300">webhook_events</code> table
                            keyed by the Stripe event ID, return 200 in under 200ms, and process asynchronously on a
                            worker. The event ID primary key gives you free deduplication — a re-delivered event hits a
                            unique-constraint conflict and is safely ignored. Handle the subscription lifecycle events
                            (<code className="text-cyan-300">created</code>, <code className="text-cyan-300">updated</code>,{" "}
                            <code className="text-cyan-300">deleted</code>) and the invoice events
                            (<code className="text-cyan-300">paid</code>, <code className="text-cyan-300">payment_failed</code>),
                            each routed to its own handler. The full hardening checklist lives in our{" "}
                            <Link href="/blog/stripe-webhook-security-best-practices" className="text-sky-400 hover:underline">webhook security guide</Link>,
                            and you can exercise payloads with our{" "}
                            <Link href="/tools/stripe-webhook-tester" className="text-sky-400 hover:underline">Stripe webhook tester</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Idempotency: the property that prevents double charges</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Everything in a billing system retries — Stripe re-delivers webhooks, your job queue retries
                            failures, users double-click. Idempotency is the guarantee that running the same operation
                            twice produces the same result once. It is not optional in billing; it is the difference
                            between a correct system and one that occasionally charges a customer twice.
                        </p>
                        <p>
                            Apply it in three places. On outbound Stripe API calls (creating a PaymentIntent, an invoice),
                            pass an <code className="text-cyan-300">Idempotency-Key</code> header so a retried call
                            returns the original result instead of creating a duplicate. On webhook ingestion, dedupe by
                            event ID. On internal mutations, use unique database constraints and{" "}
                            <code className="text-cyan-300">ON CONFLICT DO NOTHING</code> so a replayed job cannot
                            double-provision or double-credit. Wrap each unit of work in a transaction so partial
                            failures roll back cleanly.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Proration and invoicing</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Proration is the partial charge or credit when a subscription changes mid-cycle. Do not roll
                            your own proration math — Stripe&apos;s is correct and handles the calendar edge cases. Your
                            job is the <em>policy</em>: prorate upgrades immediately so the customer pays for the value
                            they just unlocked, defer downgrades to the next cycle to avoid refund churn, and decide
                            explicitly whether removing a seat issues a credit or simply reduces the next invoice. The{" "}
                            <code className="text-cyan-300">proration_behavior</code> parameter controls this on
                            subscription updates.
                        </p>
                        <p>
                            Always preview before you confirm. Use Stripe&apos;s upcoming-invoice preview to show the
                            customer the exact prorated amount before they commit to a plan change — a billing surprise
                            is one of the fastest ways to lose trust. For invoicing and tax, lean on Stripe Invoicing
                            and Stripe Tax rather than building your own; store the resulting invoice line items in your
                            database for reporting and support. This whole revenue surface is what we wrap end to end in
                            our{" "}
                            <Link href="/services/payments-invoicing-licensing" className="text-sky-400 hover:underline">payments, invoicing, and licensing service</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Reconciliation: the safety net</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Webhooks will occasionally be missed — an outage on your side, a deploy that drops requests,
                            a manual edit in the Stripe Dashboard that your handlers never saw. Drift between your
                            records and Stripe is inevitable over a long enough horizon. Reconciliation is the periodic
                            job that finds and fixes it.
                        </p>
                        <p>
                            Run a scheduled job that pulls subscriptions and invoices from the Stripe API and compares
                            them against your database: a subscription Stripe shows canceled but you show active, an
                            invoice paid in Stripe but unrecorded locally, a plan mismatch. Flag drift, auto-repair the
                            safe cases, and alert a human on the ambiguous ones. Combined with treating your{" "}
                            <code className="text-cyan-300">webhook_events</code> table as a durable audit log,
                            reconciliation is what lets you reconstruct billing state from Stripe if your database is
                            ever lost — the mark of a genuinely disaster-recoverable billing system. In a multi-tenant
                            deployment, scope all of this per tenant, the same way you isolate the rest of your data;
                            see our{" "}
                            <Link href="/blog/building-multi-tenant-saas-postgres-rls" className="text-sky-400 hover:underline">multi-tenant Postgres RLS guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Build or buy this?</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Stripe gives you the billing engine; the six-layer architecture around it is yours to build
                            or to have built. For straightforward tiered or per-seat pricing, the Stripe primitives plus
                            a disciplined entitlements-and-webhooks layer get you a long way. For usage-based, hybrid,
                            marketplace, or licensing-heavy models, the surrounding system is real engineering — exactly
                            the kind of work in our{" "}
                            <Link href="/services/subscription-billing" className="text-sky-400 hover:underline">subscription billing</Link>{" "}
                            and{" "}
                            <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link>{" "}
                            services. Whether to build it in-house at all is the classic{" "}
                            <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy</Link>{" "}
                            question, and for billing the honest answer is usually a hybrid: buy the engine (Stripe),
                            build the architecture that fits your model.
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
                            { href: "/services/payments-invoicing-licensing", label: "Payments, Invoicing & Licensing" },
                            { href: "/services/license-server", label: "License Server service" },
                            { href: "/blog/nextjs-stripe-integration-guide", label: "Next.js + Stripe integration guide" },
                            { href: "/blog/stripe-webhook-security-best-practices", label: "Stripe webhook security best practices" },
                            { href: "/blog/building-multi-tenant-saas-postgres-rls", label: "Building multi-tenant SaaS on Postgres RLS" },
                            { href: "/glossary/what-is-multi-tenant-saas", label: "What is multi-tenant SaaS?" },
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
                            { label: "Subscriptions overview and lifecycle", href: "https://docs.stripe.com/billing/subscriptions/overview", publisher: "Stripe Docs" },
                            { label: "Proration on subscription changes", href: "https://docs.stripe.com/billing/subscriptions/prorations", publisher: "Stripe Docs" },
                            { label: "Idempotent requests", href: "https://docs.stripe.com/api/idempotent_requests", publisher: "Stripe Docs" },
                            { label: "Best practices for using webhooks", href: "https://docs.stripe.com/webhooks", publisher: "Stripe Docs" },
                        ]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build a billing system that runs itself.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Book a 30-minute call and we will sketch the architecture for your pricing model —
                            entitlements, webhooks, proration, reconciliation — and scope the build. One engineer,
                            production-grade from day one.
                        </p>
                        <ConsultationCTA label="Book an Architecture Call" service="Subscription Billing" source="blog-billing-architecture-cta" />
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
                        topics={["stripe", "saas", "stack"]}
                        pinned={[
                            "nextjs-stripe-integration-guide",
                            "stripe-webhook-security-best-practices",
                            "building-multi-tenant-saas-postgres-rls",
                        ]}
                        heading="More billing engineering reading"
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
