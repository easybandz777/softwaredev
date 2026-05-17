import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { CreditCard, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const dynamicParams = false;

const PHONE_DISPLAY = "(770) 652-1282";
const PHONE_HREF = "tel:+17706521282";
const EMAIL_ADDRESS = "beltz@quantlabusa.dev";
const TAP_LINK_CLASS =
    "inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400";

function renderTaglineWithLinks(text: string) {
    const tokenRegex = /(\(770\) 652-1282|beltz@quantlabusa\.dev)/g;
    const parts = text.split(tokenRegex);
    return parts.map((part, i) => {
        if (part === PHONE_DISPLAY) {
            return (
                <a key={i} href={PHONE_HREF} className={TAP_LINK_CLASS}>
                    {PHONE_DISPLAY}
                </a>
            );
        }
        if (part === EMAIL_ADDRESS) {
            return (
                <a key={i} href={`mailto:${EMAIL_ADDRESS}`} className={TAP_LINK_CLASS}>
                    {EMAIL_ADDRESS}
                </a>
            );
        }
        return <span key={i}>{part}</span>;
    });
}

interface CityConfig {
    slug: string;
    city: string;
    state: string;
    stateFull: string;
    h1: string;
    metaDescription: string;
    intro: string;
    angle: string;
    whatWeBuild: string;
    industryDetail: string;
    faq: { q: string; a: string }[];
    siblings: { slug: string; label: string }[];
    related: { slug: string; label: string; desc: string }[];
    ctaTagline: string;
}

const CITIES: Record<string, CityConfig> = {
    "macon-ga": {
        slug: "macon-ga",
        city: "Macon",
        state: "GA",
        stateFull: "Georgia",
        h1: "Custom Stripe Integration in Macon, GA",
        metaDescription:
            "Custom Stripe integration for Macon, GA businesses: Stripe + QuickBooks Online sync, custom checkout, invoicing, subscription billing. Founder-led, Macon HQ.",
        intro:
            "Macon is our HQ. We sit on Mulberry Street and ship Stripe integrations for Middle Georgia businesses every week. Painters, fence contractors, landscapers, dental offices, and family-run trades along I-75 all have the same problem with payments: Stripe's hosted checkout covers maybe 60% of what they need, and the other 40% — clean QuickBooks Online sync, retainer-style invoicing, partial payments, deposits applied to the right job — is custom code that nobody locally is willing to write. We write it.",
        angle: "Macon ↔ QuickBooks Online integrations are our home-field specialty.",
        whatWeBuild:
            "For Macon clients we focus on Stripe + QuickBooks Online — line-item accurate, with retainer and deposit accounting, partial payments mapped to the right invoice, and refunds that reconcile against the original transaction. Around that core we add custom checkout flows for service businesses, customer portals for repeat clients, and ACH or card-not-present setups for contractors who invoice via email.",
        industryDetail:
            "Bridgepointe Painting is the reference architecture. They are an Atlanta-metro luxury painter with deep Macon ties — and we built them a Stripe → QuickBooks Online bridge that turned a three-day month-end into a thirty-minute month-end. Customers, vendors, items, and chart-of-accounts entities sync bi-directionally. Estimates and invoices generated in-app mirror to QBO automatically. Their bookkeeper stopped re-entering data, full stop. That same architecture is available to any Macon business running QuickBooks Online today.",
        faq: [
            {
                q: "Do you work with Macon businesses in person on Stripe integrations?",
                a: "Yes. We are headquartered in Macon and meet on-site across Bibb, Houston, Jones, Monroe, and Peach counties. Discovery is usually in person; the build phase is remote with weekly check-ins; cutover and handoff are on-site if you want them to be.",
            },
            {
                q: "Can you connect Stripe to my QuickBooks Online file without breaking my existing chart of accounts?",
                a: "Yes — that is the most common Macon engagement. We map every Stripe event (charge, refund, payout, dispute) to specific QBO accounts and classes that match your existing books. Your bookkeeper signs off on the mapping before any data flows.",
            },
            {
                q: "We take deposits and progress payments. Will Stripe handle that cleanly?",
                a: "Yes, with custom code on top. Stripe out of the box treats every charge as standalone. We add an invoice-aware ledger in PostgreSQL that knows which charge applied to which job, which deposit was retained, and how the final invoice reconciles — that is the layer Bridgepointe runs on.",
            },
        ],
        siblings: [
            { slug: "atlanta-ga", label: "Atlanta" },
            { slug: "savannah-ga", label: "Savannah" },
        ],
        related: [
            { slug: "custom-crm-development", label: "Custom CRM Development", desc: "Wire payment status into the customer record from day one." },
            { slug: "payments-invoicing-licensing", label: "Payments, Invoicing & Licensing", desc: "Broader scope — invoicing systems and license servers." },
        ],
        ctaTagline: "Call (770) 652-1282 or book a 20-minute scoping call. Macon HQ, founder-led from quote to handoff.",
    },
    "atlanta-ga": {
        slug: "atlanta-ga",
        city: "Atlanta",
        state: "GA",
        stateFull: "Georgia",
        h1: "Custom Stripe Integration in Atlanta, GA",
        metaDescription:
            "Stripe Connect, fintech-grade subscription billing, and marketplace payouts for Atlanta SaaS and Transaction Alley companies. Founder-led from Georgia HQ.",
        intro:
            "Atlanta is Transaction Alley — over 70% of US card payments touch metro-Atlanta payment processors and the fintech ecosystem that orbits them. That density of card brands, processors, and venture-backed SaaS startups means Atlanta companies need Stripe integrations that go well past the hosted Checkout page: Stripe Connect marketplaces, subscription billing with tiered usage, dispute and chargeback workflows, and multi-tenant entitlements wired through to PostgreSQL. We build the custom 40% that the hosted product cannot reach.",
        angle: "Fintech SaaS and Stripe Connect marketplaces — the Transaction Alley specialty.",
        whatWeBuild:
            "For Atlanta fintech and SaaS clients we ship full Stripe Connect marketplaces — Express, Custom, and Standard accounts, onboarding flows, platform fees, payouts, 1099-K reporting, dispute routing. On the subscription side we build tiered plans, usage-based billing, mid-cycle proration without double-charging, dunning with retry logic, and customer self-serve portals. Every webhook is idempotent and queued with retry/audit logs.",
        industryDetail:
            "Atlanta SaaS founders pitch Fortune 500 buyers in Buckhead with their Stripe integration in the diligence packet. That puts a real bar on quality: signed webhook endpoints, PostgreSQL as the source of truth ledger, side-by-side production-parity testing before cutover, and explicit Stripe API version pinning so a Stripe-side change does not break your billing overnight. Our reference Stripe + QuickBooks Online architecture (Bridgepointe Painting) ships with the same operational discipline — line-item accurate sync, bi-directional reconciliation, and a thirty-minute month-end.",
        faq: [
            {
                q: "Do you build Stripe Connect marketplaces for Atlanta platforms?",
                a: "Yes — Express, Custom, and Standard. Most Atlanta-area engagements involve platform fees, KYC onboarding, payout scheduling, and 1099-K reporting for the connected accounts. We have shipped marketplaces at the $22k–$60k engagement tier.",
            },
            {
                q: "We are pitching a Fortune 500 buyer who wants to see our PCI scope. What can you tell them?",
                a: "If we build with Stripe Elements or Checkout, you stay in SAQ A — minimum PCI scope. We never store card data on your servers. That is exactly the answer their procurement team is hoping to hear.",
            },
            {
                q: "Can you migrate us off Recurly, Chargebee, or Paddle?",
                a: "Yes — subscriptions, customers, payment methods, and historical invoices come over with reconciliation. We have done this for Atlanta SaaS founders moving to Stripe Billing plus custom orchestration code.",
            },
        ],
        siblings: [
            { slug: "macon-ga", label: "Macon" },
            { slug: "charlotte-nc", label: "Charlotte" },
        ],
        related: [
            { slug: "custom-crm-development", label: "Custom CRM Development", desc: "Stripe events tied to your sales pipeline." },
            { slug: "penetration-testing", label: "Penetration Testing", desc: "Audit the payment surface before SOC 2 or enterprise procurement." },
        ],
        ctaTagline: "Call (770) 652-1282 or book a scoping call. Atlanta clients served from Georgia HQ — full ET overlap, no offshore handoff.",
    },
    "augusta-ga": {
        slug: "augusta-ga",
        city: "Augusta",
        state: "GA",
        stateFull: "Georgia",
        h1: "Custom Stripe Integration in Augusta, GA",
        metaDescription:
            "Stripe + ERP integrations for Augusta CSRA businesses: subscription billing, invoicing, ERP sync, custom checkout. Founder-led, short drive up I-20.",
        intro:
            "Augusta is the cyber corridor — Fort Eisenhower, Army Cyber Command, and a growing private-sector ecosystem along Reynolds and Broad. Local mid-market SMBs, medical practices, contracting firms, and CSRA SaaS founders share a common payment problem: a recurring billing model that does not fit Stripe's hosted product, an ERP that needs clean sync, and no senior engineer locally willing to write the bridge. We close that gap.",
        angle: "SMB Stripe + ERP integrations for the CSRA region.",
        whatWeBuild:
            "For Augusta SMB clients we wire Stripe into the back-office ERP of record — QuickBooks Online for smaller shops, NetSuite or Sage Intacct for larger operations, custom ERPs for established contracting firms. Subscription billing for service retainers, milestone invoicing for project work, and self-serve customer portals for repeat clients. Every webhook is signed, queued, and idempotent — no duplicate charges or stale invoice states.",
        industryDetail:
            "Augusta SaaS founders pitching federal-adjacent buyers care about clean audit trails on every payment event. Our standard build keeps PostgreSQL as the source-of-truth ledger, with a full audit log of every Stripe webhook received, processed, and reconciled. That is the operational discipline we used on the Bridgepointe Painting Stripe + QBO build — and it ports cleanly to a CSRA contracting firm running NetSuite or Sage.",
        faq: [
            {
                q: "Do you build Stripe integrations for CSRA medical and dental practices?",
                a: "Yes, with the standard PCI scope discipline (SAQ A via Stripe Elements/Checkout). PHI-touching scope is handled separately — we do not collect PHI through the payment flow.",
            },
            {
                q: "Can you connect Stripe to NetSuite, Sage Intacct, or QuickBooks Online?",
                a: "Yes — those are the three most common Augusta engagements. Bi-directional sync of customers, items, and invoices, with chart-of-accounts mapping signed off by your bookkeeper before any data flows.",
            },
            {
                q: "How long does an Augusta engagement take?",
                a: "Single-purpose Stripe integration (subscriptions or invoicing): 4–8 weeks. Full Stripe + ERP sync: 8–14 weeks. We are a short drive up I-20 for kickoff or cutover.",
            },
        ],
        siblings: [
            { slug: "atlanta-ga", label: "Atlanta" },
            { slug: "columbus-ga", label: "Columbus" },
        ],
        related: [
            { slug: "custom-crm-development", label: "Custom CRM Development", desc: "Pair the Stripe integration with a CRM that knows payment status." },
            { slug: "penetration-testing", label: "Penetration Testing", desc: "Test the payment surface before a federal-adjacent procurement review." },
        ],
        ctaTagline: "Call (770) 652-1282 or email beltz@quantlabusa.dev to scope an Augusta Stripe + ERP build.",
    },
    "columbus-ga": {
        slug: "columbus-ga",
        city: "Columbus",
        state: "GA",
        stateFull: "Georgia",
        h1: "Custom Stripe Integration in Columbus, GA",
        metaDescription:
            "Stripe + QuickBooks Online and Xero integrations for Columbus, GA and Chattahoochee Valley SMBs. Subscription billing, milestone invoicing, founder-led.",
        intro:
            "Columbus and the Chattahoochee Valley run on small and mid-market operators — defense-adjacent contractors around Fort Moore, Aflac and TSYS-legacy fintech alumni, and family-owned businesses on both sides of the river. The recurring payments problem here looks the same: Stripe handles the card swipe; QuickBooks Online or Xero owns the books; nobody bridges the two cleanly without custom code. That is the Columbus engagement.",
        angle: "SMB Stripe + QuickBooks/Xero integrations for the Chattahoochee Valley.",
        whatWeBuild:
            "For Columbus and Phenix City clients we build the bridge: Stripe → QuickBooks Online or Xero with line-item accuracy, retainer and deposit accounting, subscription billing for service plans, and milestone invoicing for project work. The PostgreSQL ledger is the source of truth; QBO or Xero is the bookkeeping layer; Stripe is the rail. Customer portals are optional but recommended for repeat-billing service businesses.",
        industryDetail:
            "Most Columbus clients want one specific outcome: stop manually copy-pasting from Stripe Dashboard into QuickBooks every month. The fix is a bi-directional sync with explicit account mapping and idempotent webhooks — exactly the architecture we shipped to Bridgepointe Painting, which dropped month-end reconciliation from three days to thirty minutes. That same pattern ports cleanly to a Chattahoochee Valley contractor or a Phenix City service business.",
        faq: [
            {
                q: "Do you serve businesses on the Alabama side of the river?",
                a: "Yes — Phenix City and Russell County clients are routine. We work remotely with weekly check-ins; on-site time is available for kickoff or cutover if you want it.",
            },
            {
                q: "We use Xero, not QuickBooks. Do you integrate to that?",
                a: "Yes. Xero integration is functionally similar to QBO — customers, items, invoices, and payments sync bi-directionally with chart-of-accounts mapping signed off before any data flows.",
            },
            {
                q: "What is the typical Columbus engagement cost?",
                a: "Single-purpose Stripe integration: $6k–$14k. Full Stripe + QBO/Xero sync: $12k–$28k. Fixed-fee, with a paid discovery sprint at the front so you can decide before committing to the full build.",
            },
        ],
        siblings: [
            { slug: "augusta-ga", label: "Augusta" },
            { slug: "macon-ga", label: "Macon" },
        ],
        related: [
            { slug: "custom-crm-development", label: "Custom CRM Development", desc: "CRM and Stripe sharing one customer record." },
            { slug: "payments-invoicing-licensing", label: "Payments, Invoicing & Licensing", desc: "Broader payment infrastructure scope." },
        ],
        ctaTagline: "Call (770) 652-1282 to scope a Columbus or Phenix City Stripe + QBO/Xero build.",
    },
    "savannah-ga": {
        slug: "savannah-ga",
        city: "Savannah",
        state: "GA",
        stateFull: "Georgia",
        h1: "Custom Stripe Integration in Savannah, GA",
        metaDescription:
            "Stripe integrations for Savannah hospitality, port-logistics, and SaaS — bookings, deposits, recurring billing, custom checkout. Georgia firm, founder-led.",
        intro:
            "Savannah's economy splits three ways: the Port of Savannah (third-busiest container port in the US), a deep hospitality and tourism sector through the historic district, and a fast-growing SaaS and creative footprint around SCAD. Each generates a very different Stripe problem. Hospitality wants deposit-and-balance flows, group bookings, and cancellation policies. Port-adjacent logistics wants invoicing tied to milestone events and EDI feeds. SaaS founders want subscription billing that does not break at month-end.",
        angle: "Hospitality bookings and port-logistics Stripe integrations.",
        whatWeBuild:
            "For Savannah hospitality clients we build custom checkout flows with deposit-now-balance-later, group rate handling, cancellation and refund policy enforcement, and customer portals that let guests update payment methods. For port-adjacent logistics clients we wire Stripe into TMS feeds and milestone-based invoicing — payment trigger fires when the container is released, not when the invoice is generated.",
        industryDetail:
            "Hospitality and port logistics both share one problem that Stripe's hosted product does not solve cleanly: multi-event payments tied to one customer record. A tour operator collects a deposit on Tuesday, a balance on the day-of, a damage deposit refund a week later, and a tip processed separately. A drayage operator invoices three milestones across two weeks against one container. We model the full lifecycle in PostgreSQL and use Stripe as the rail — same architecture pattern we use for Bridgepointe Painting's retainer accounting.",
        faq: [
            {
                q: "Can you build Stripe-billed bookings for Savannah tour and charter operators?",
                a: "Yes — deposit, balance, damage deposit, refund, and tip handling all on one customer record. Customer self-serve portal for repeat bookings is optional but recommended.",
            },
            {
                q: "Do you handle port-adjacent logistics invoicing?",
                a: "Yes — Stripe tied to TMS or EDI feeds, with milestone-based payment triggers. We have shipped similar architectures for service businesses with multi-event invoicing.",
            },
            {
                q: "Are you available for on-site Savannah work?",
                a: "Yes — we drive down I-16. Discovery and kickoff in person, build remote, cutover on-site if you want it.",
            },
        ],
        siblings: [
            { slug: "atlanta-ga", label: "Atlanta" },
            { slug: "miami-fl", label: "Miami" },
        ],
        related: [
            { slug: "custom-crm-development", label: "Custom CRM Development", desc: "Customer record with payment history baked in." },
            { slug: "payments-invoicing-licensing", label: "Payments, Invoicing & Licensing", desc: "Broader invoicing and license-server scope." },
        ],
        ctaTagline: "Call (770) 652-1282 to start a Savannah Stripe build — hospitality, port logistics, or SaaS.",
    },
    "miami-fl": {
        slug: "miami-fl",
        city: "Miami",
        state: "FL",
        stateFull: "Florida",
        h1: "Custom Stripe Integration in Miami, FL",
        metaDescription:
            "LATAM-ready multi-currency Stripe integrations for Miami fintech, hospitality, and cross-border SaaS. USD, BRL, MXN, COP routing. Founder-led builds.",
        intro:
            "Miami is the LATAM gateway. Fintech founders relocating from New York and the Bay run cross-border products that need to settle in USD but charge in BRL, MXN, COP, or CLP. Hospitality groups from Brickell through South Beach take payments in three currencies a day. Cross-border SaaS startups invoice US enterprise accounts and consumer customers from Bogotá in the same Stripe instance. The hosted product does not handle that gracefully. Custom orchestration code does.",
        angle: "LATAM multi-currency, cross-border, and USD/MXN/COP payment routing.",
        whatWeBuild:
            "For Miami clients we ship multi-currency Stripe orchestration: USD presentment with local-currency settlement, BRL/MXN/COP routing for LATAM-resident customers, FX-aware reconciliation against the source-of-truth PostgreSQL ledger, and customer-facing checkout that auto-detects the right currency without forcing a manual toggle. For cross-border SaaS we add subscription billing in any of the four currencies with proration handled in the customer's chosen currency.",
        industryDetail:
            "The two real problems with multi-currency Stripe are reconciliation and disputes. Reconciliation is solvable with a tight FX-aware ledger and clean Stripe Sigma queries. Disputes are harder — a chargeback in MXN against a USD invoice still has to reconcile in your books, and few teams get that mapping right out of the gate. We build the dispute workflow as a first-class state in PostgreSQL, with explicit FX rate snapshots at every transaction event. Bridgepointe Painting's QBO reconciliation pattern is the bookkeeping discipline; multi-currency just adds an FX dimension.",
        faq: [
            {
                q: "Can you handle USD presentment with local-currency settlement?",
                a: "Yes — Stripe supports it natively for most LATAM countries we work with. The orchestration code on top handles FX-aware reconciliation against your source-of-truth ledger.",
            },
            {
                q: "We have customers in Brazil, Mexico, and Colombia. Will Stripe route correctly?",
                a: "Yes, with custom code on top. Stripe handles BRL, MXN, and COP natively. We add automatic routing based on customer billing country, FX rate snapshots at every transaction, and reconciliation against your reporting currency of choice.",
            },
            {
                q: "Do you support Spanish-language checkout for Miami?",
                a: "Yes — i18n is standard in our Next.js builds. We localize the entire checkout flow plus customer self-serve portal in Spanish (and Portuguese for Brazil-facing products).",
            },
        ],
        siblings: [
            { slug: "atlanta-ga", label: "Atlanta" },
            { slug: "austin-tx", label: "Austin" },
        ],
        related: [
            { slug: "custom-crm-development", label: "Custom CRM Development", desc: "CRM with LATAM-aware customer records." },
            { slug: "payments-invoicing-licensing", label: "Payments, Invoicing & Licensing", desc: "Broader cross-border payment scope." },
        ],
        ctaTagline: "Call (770) 652-1282 to scope a Miami multi-currency Stripe build — LATAM-ready from day one.",
    },
    "austin-tx": {
        slug: "austin-tx",
        city: "Austin",
        state: "TX",
        stateFull: "Texas",
        h1: "Custom Stripe Integration in Austin, TX",
        metaDescription:
            "Stripe Billing → custom subscription migrations for Austin SaaS founders. Tiered plans, usage billing, proration, license-tied entitlements. Founder-led.",
        intro:
            "Austin is a SaaS town. The MoPac corridor, the East Austin coffee-shop founder pool, the venture money that followed Tesla and Oracle in — every other pitch deck involves a recurring revenue model. The classic Austin Stripe problem is that you started with Stripe Billing because it shipped fast, then your pricing model evolved past what the hosted product can express: hybrid SaaS plus services, mid-cycle upgrades with proration that does not double-charge, license-tied entitlements gated by subscription state. That is the migration we ship.",
        angle: "Stripe Billing → custom subscription orchestration for SaaS startups.",
        whatWeBuild:
            "For Austin SaaS founders we migrate from Stripe Billing to custom subscription orchestration: tiered plans with usage-based dimensions, mid-cycle upgrades with clean proration, dunning logic tuned to your churn profile, and license-tied entitlements that activate and deactivate based on subscription state. We keep Stripe as the rail — invoices, charges, payment methods, customer portal — and build the orchestration layer in PostgreSQL plus Node/TypeScript on top.",
        industryDetail:
            "Most Austin migrations hit one of three reasons: investors flagged that the metrics dashboard does not match Stripe's view (data discipline problem); the pricing model evolved past what the dashboard can express (orchestration problem); or the entitlement layer is fragmented across feature flags, Auth0 metadata, and Stripe subscription state (architecture problem). We fix all three by putting PostgreSQL at the center as the source-of-truth ledger and bridging to Stripe with signed, idempotent webhooks. Same operational discipline we apply to Bridgepointe Painting's QBO sync — just with subscription state instead of accounting state.",
        faq: [
            {
                q: "Can you migrate us from Stripe Billing to a custom subscription system without losing data?",
                a: "Yes — that is the most common Austin engagement. Subscriptions, customers, payment methods, and historical invoices come over with reconciliation. We keep Stripe Billing running in parallel during cutover.",
            },
            {
                q: "We use Stripe Billing plus a license server. Will the entitlement layer survive the migration?",
                a: "Yes. Entitlement is one of the core deliverables — Stripe subscription state drives license activation/deactivation automatically, with a grace period of your choice.",
            },
            {
                q: "Do you do usage-based and hybrid pricing models?",
                a: "Yes. Tiered plans plus metered usage dimensions plus one-off add-ons in one customer record is a standard Austin pattern. Proration on mid-cycle changes is handled cleanly.",
            },
        ],
        siblings: [
            { slug: "dallas-tx", label: "Dallas" },
            { slug: "san-francisco-ca", label: "San Francisco" },
        ],
        related: [
            { slug: "custom-crm-development", label: "Custom CRM Development", desc: "CRM and subscription state sharing one customer record." },
            { slug: "payments-invoicing-licensing", label: "Payments, Invoicing & Licensing", desc: "License-tied entitlement and subscription orchestration." },
        ],
        ctaTagline: "Call (770) 652-1282 or book a confidential scoping call. ATX hours covered from Georgia HQ.",
    },
    "dallas-tx": {
        slug: "dallas-tx",
        city: "Dallas",
        state: "TX",
        stateFull: "Texas",
        h1: "Custom Stripe Integration in Dallas, TX",
        metaDescription:
            "Enterprise Stripe + NetSuite, QuickBooks, and ERP integrations for DFW mid-market and corporate IT. Fixed-scope, founder-led, audit-ready deliverables.",
        intro:
            "DFW is corporate IT and mid-market. One of the largest concentrations of Fortune 500 headquarters in the country, a massive logistics base, and a deep pool of mid-market companies running on aging custom software. The Stripe problem here is the enterprise version: you need invoicing that respects existing NetSuite or QuickBooks chart-of-accounts, dispute workflows that hand off to your AR team, and reconciliation reports your CFO can sign without re-keying.",
        angle: "Enterprise Stripe + ERP (NetSuite, QuickBooks Online) sync for DFW mid-market.",
        whatWeBuild:
            "For Dallas mid-market clients we bridge Stripe into the ERP of record — NetSuite for larger operations, QuickBooks Online for smaller ones, Sage Intacct for finance-heavy verticals — with bi-directional sync of customers, items, invoices, and payments. Custom checkout flows for B2B invoicing (ACH plus card), dispute and chargeback workflows handed off to your AR team, and reconciliation reports formatted for your CFO and your auditor.",
        industryDetail:
            "DFW procurement teams ask sharp questions about fixed scope versus T&M, audit trail completeness, and operational handoff. Our standard build addresses all three: fixed-fee per phase, full audit log of every Stripe webhook received and reconciled, and a written operational runbook for your AR and ops teams. The Bridgepointe Painting Stripe + QBO architecture is the reference — bookkeeping reconciliation time dropped from three days to thirty minutes after cutover.",
        faq: [
            {
                q: "Do you integrate Stripe with NetSuite?",
                a: "Yes — NetSuite is one of our three most common DFW engagements alongside QuickBooks Online and Sage Intacct. Bi-directional sync of customers, items, invoices, and payments with chart-of-accounts mapping signed off by your accounting team before any data flows.",
            },
            {
                q: "Do you bill fixed scope or T&M for Dallas engagements?",
                a: "Fixed scope on most engagements. T&M only for open-ended R&D or post-launch retainer. Discovery sprint is paid separately so you can decide on the full build before committing.",
            },
            {
                q: "Can you support a SOX-driven internal audit cycle with payment reconciliation data?",
                a: "Yes — reports are formatted to drop into audit binders, with full audit logs of every Stripe webhook received, processed, and reconciled against your ERP.",
            },
        ],
        siblings: [
            { slug: "austin-tx", label: "Austin" },
            { slug: "chicago-il", label: "Chicago" },
        ],
        related: [
            { slug: "custom-crm-development", label: "Custom CRM Development", desc: "Enterprise CRM with payment status surfaced inline." },
            { slug: "penetration-testing", label: "Penetration Testing", desc: "Audit the payment surface for corporate IT controls review." },
        ],
        ctaTagline: "Call (770) 652-1282 to scope a DFW Stripe + NetSuite, QBO, or Sage Intacct build.",
    },
    "chicago-il": {
        slug: "chicago-il",
        city: "Chicago",
        state: "IL",
        stateFull: "Illinois",
        h1: "Custom Stripe Integration in Chicago, IL",
        metaDescription:
            "Stripe integrations for Chicago trading firms, fintech, and CME-adjacent quant tools. Subscription billing, payment processing, audit-ready reporting.",
        intro:
            "Chicago is finance and trading. The CBOT and CME ecosystem, the prop shops in the Loop, and an unusually deep pool of quant founders and individual operators running trading software for their own books. The Stripe problem in Chicago is half subscription-billing-for-SaaS (quant tooling distributed to other operators) and half trading-firm-adjacent payment processing — clean, audit-ready, with reconciliation that survives a SOX or compliance review.",
        angle: "Trading-firm payment processing and CME-adjacent quant SaaS billing.",
        whatWeBuild:
            "For Chicago trading-firm and quant SaaS clients we ship subscription billing tuned to trader pricing models (monthly with annual prepay, per-account licensing, multi-strategy tiers), and payment processing for trading-tool distribution with audit-ready reporting. Every webhook is idempotent, every reconciliation event is logged, and every payment state is traceable from customer onboarding through subscription cancellation.",
        industryDetail:
            "Chicago compliance teams care about two things: complete audit trail, and clean separation between development, staging, and production payment environments. Our standard build uses Stripe API version pinning, signed webhook endpoints with replay protection, and a PostgreSQL audit log that captures every event received, processed, and reconciled. That same operational discipline ports over from our Bridgepointe Painting Stripe + QBO build — just applied to subscription state instead of contractor invoicing.",
        faq: [
            {
                q: "Do you build subscription billing for trading SaaS and quant tooling?",
                a: "Yes — that is a core Chicago engagement. Monthly, annual, per-account, multi-strategy, and license-tied entitlement all in one customer record.",
            },
            {
                q: "Can you support a SOX-driven internal audit cycle with payment data?",
                a: "Yes — reports are formatted to drop into audit binders, with a full PostgreSQL audit log of every Stripe webhook received, processed, and reconciled.",
            },
            {
                q: "Do you have experience with CME-adjacent broker integrations?",
                a: "We have shipped algorithmic trading systems with broker integration (IBKR, TopstepX, Tradier, others). Payment-side integrations are typically separate but the same engineering discipline applies.",
            },
        ],
        siblings: [
            { slug: "new-york-ny", label: "New York" },
            { slug: "dallas-tx", label: "Dallas" },
        ],
        related: [
            { slug: "custom-crm-development", label: "Custom CRM Development", desc: "Trader-facing CRM with subscription state and license keys." },
            { slug: "payments-invoicing-licensing", label: "Payments, Invoicing & Licensing", desc: "License-tied entitlement and subscription orchestration." },
        ],
        ctaTagline: "Call (770) 652-1282 to scope a Chicago Stripe + trading-SaaS build.",
    },
    "seattle-wa": {
        slug: "seattle-wa",
        city: "Seattle",
        state: "WA",
        stateFull: "Washington",
        h1: "Custom Stripe Integration in Seattle, WA",
        metaDescription:
            "Stripe Billing integrations for Seattle dev-tools SaaS. Usage-based billing, API metering, license-tied entitlements. Docker-native, cloud-portable.",
        intro:
            "Seattle is dev-tools and cloud-adjacent SaaS. Amazon and Microsoft alumni founder pools, a fast-moving indie SaaS scene in Capitol Hill and Fremont, and a steady drumbeat of bootstrapped products selling APIs and developer tooling. The Stripe problem in Seattle is almost always usage-based billing — API requests per month, GB-hours of compute, seats with metered overage — wired into a clean developer-experience portal and a license-tied entitlement layer.",
        angle: "Dev-tools SaaS Stripe Billing with usage metering and API entitlements.",
        whatWeBuild:
            "For Seattle dev-tools SaaS clients we build usage-based Stripe Billing with API metering, GB-hour or seat-overage tracking, mid-cycle plan changes with clean proration, and developer-friendly customer portals (CLI tokens, REST API key issuance, billing-aware rate limiting). The license-tied entitlement layer activates and deactivates API keys based on subscription state. Stack is Docker-native and cloud-portable — AWS, GCP, and Vercel-friendly.",
        industryDetail:
            "Seattle technical buyers care about clean architecture and reviewer-friendly code. Our standard build is TypeScript end-to-end, PostgreSQL as the source-of-truth ledger, signed webhooks with replay protection, and explicit Stripe API version pinning. Cloud-portable from day one — same Docker images run on AWS Fargate, GCP Cloud Run, or self-hosted Kubernetes. The Bridgepointe Painting Stripe + QBO build uses the same operational discipline; just applied to developer-tool subscription state instead of contractor invoicing.",
        faq: [
            {
                q: "Do you do usage-based Stripe Billing for dev-tools SaaS?",
                a: "Yes — API request metering, GB-hour tracking, seat-overage billing all on Stripe's metered subscription primitives plus orchestration code in PostgreSQL.",
            },
            {
                q: "Can you wire Stripe to a license server that gates API keys?",
                a: "Yes — Stripe subscription state drives entitlement state automatically. When a customer pays, API keys activate; when they churn, keys deactivate on a grace schedule you control.",
            },
            {
                q: "AWS-heavy stack — will this deploy cleanly to our infrastructure?",
                a: "Yes — Docker-native, cloud-portable, runs on AWS Fargate, ECS, EKS, or anywhere else you want it. We deploy to Vercel by default but the build does not require it.",
            },
        ],
        siblings: [
            { slug: "san-francisco-ca", label: "San Francisco" },
            { slug: "austin-tx", label: "Austin" },
        ],
        related: [
            { slug: "custom-crm-development", label: "Custom CRM Development", desc: "Developer-facing CRM with API key and usage history." },
            { slug: "payments-invoicing-licensing", label: "Payments, Invoicing & Licensing", desc: "License server and subscription orchestration." },
        ],
        ctaTagline: "Call (770) 652-1282 to scope a Seattle dev-tools Stripe Billing build.",
    },
    "new-york-ny": {
        slug: "new-york-ny",
        city: "New York",
        state: "NY",
        stateFull: "New York",
        h1: "Custom Stripe Integration in New York, NY",
        metaDescription:
            "High-volume Stripe Connect for NYC finance, agency, and managed-services platforms. Marketplace payouts, dispute workflows, audit-ready reporting.",
        intro:
            "New York is the toughest software buyer's market in the country. Fintech, ad-tech, agency holding companies, hedge funds, and a relentless current of SaaS founders all have the same demand: senior engineering, ship fast, no excuses. The Stripe problem in NYC is high-volume Connect — managed-services platforms paying contractors, agency holding companies routing client billing across sub-entities, hedge-fund-adjacent administrative tooling with audit-ready reporting. Hosted Connect onboarding does the easy 60%. We build the other 40%.",
        angle: "High-volume finance and agency Stripe Connect platforms.",
        whatWeBuild:
            "For NYC clients we ship Stripe Connect at scale: Express, Custom, and Standard accounts; KYC and onboarding flows; platform-fee orchestration; payout scheduling tuned to your cash-flow profile; 1099-K reporting; dispute and chargeback routing handed off to your ops team; full reconciliation against your reporting currency. PostgreSQL is the source-of-truth ledger; Stripe is the rail.",
        industryDetail:
            "Two NYC requirements show up on every engagement. First, due-diligence-ready architecture — investors and acquirers want to see the data model, the webhook handling, the dispute workflow, and the reconciliation report in one packet. Second, no-junior-layer execution — the engineer on the kickoff is the engineer in the codebase. Both are baked into how we run engagements. Bridgepointe Painting's QBO reconciliation pattern is the bookkeeping discipline; NYC engagements just add Connect scale and dispute workflow depth.",
        faq: [
            {
                q: "Can you build Stripe Connect at scale for a managed-services platform?",
                a: "Yes — Express, Custom, and Standard accounts at hundreds-to-thousands of connected accounts. Platform fees, payout scheduling, 1099-K reporting, and dispute routing all in scope.",
            },
            {
                q: "We are pitching institutional investors and need due-diligence documentation. Can you produce it?",
                a: "Yes — architecture diagrams, data model walkthroughs, webhook handling spec, reconciliation reports, and SBOM-style summaries on request.",
            },
            {
                q: "Do you fly in for kickoffs and reviews?",
                a: "For engagements above a certain scope, yes. Georgia HQ — full ET overlap, NYC accessible by air.",
            },
        ],
        siblings: [
            { slug: "chicago-il", label: "Chicago" },
            { slug: "charlotte-nc", label: "Charlotte" },
        ],
        related: [
            { slug: "custom-crm-development", label: "Custom CRM Development", desc: "CRM and Connect platform state in one customer record." },
            { slug: "penetration-testing", label: "Penetration Testing", desc: "Audit the payment surface for institutional-investor diligence." },
        ],
        ctaTagline: "Call (770) 652-1282 to talk through your NYC Stripe Connect engagement.",
    },
    "charlotte-nc": {
        slug: "charlotte-nc",
        city: "Charlotte",
        state: "NC",
        stateFull: "North Carolina",
        h1: "Custom Stripe Integration in Charlotte, NC",
        metaDescription:
            "Banking-adjacent custom Stripe checkout flows for Charlotte fintech vendors selling into BofA, Truist, and the Uptown banking ecosystem. Audit-ready.",
        intro:
            "Charlotte is the southeast's banking capital — Bank of America, Truist, and a fintech and supplier ecosystem in Uptown and South End. The Stripe problem in Charlotte is fintech-vendor-adjacent: custom checkout flows for products selling into the big banks, audit-ready dispute and reconciliation workflows that survive a vendor-risk review, and subscription billing for fintech SaaS that has to look as polished as the buyer's own internal tools.",
        angle: "Banking-adjacent custom Stripe checkout flows for fintech vendors.",
        whatWeBuild:
            "For Charlotte fintech-vendor clients we build custom Stripe checkout flows tuned to the procurement requirements of bank buyers: branded checkout, SAQ-A PCI scope, signed webhooks, full audit logging, dispute workflow with ops handoff, and reconciliation reports formatted to drop into a bank vendor-risk review. Subscription billing for fintech SaaS with tiered plans, mid-cycle proration, and customer self-serve portals.",
        industryDetail:
            "Selling into BofA, Truist, or one of the Charlotte regional banks means surviving a security questionnaire and a vendor-risk assessment. The Stripe-side answers your buyer wants to hear: SAQ A PCI scope, no card data on your servers, signed webhook endpoints with replay protection, complete audit log of every payment event, and an architecture diagram their security team can review in one sitting. Same engineering discipline we apply to Bridgepointe Painting's QBO reconciliation — just with bank-vendor procurement as the audience.",
        faq: [
            {
                q: "Can you produce a Stripe integration spec that survives a BofA or Truist vendor review?",
                a: "Yes — architecture diagrams, data model walkthroughs, webhook handling spec, PCI scope statement, and audit log samples on request.",
            },
            {
                q: "Do you build for fintech-adjacent SaaS selling into Charlotte banks?",
                a: "Yes — and we understand the security questionnaire game. We are a short drive up I-85 from Macon HQ, same time zone, full ET overlap.",
            },
            {
                q: "Are you available for in-person Charlotte meetings?",
                a: "Yes — for engagements that warrant it. Discovery and kickoff on-site, build remote, cutover on-site if you want it.",
            },
        ],
        siblings: [
            { slug: "atlanta-ga", label: "Atlanta" },
            { slug: "new-york-ny", label: "New York" },
        ],
        related: [
            { slug: "custom-crm-development", label: "Custom CRM Development", desc: "Bank-vendor CRM with payment audit trail surfaced inline." },
            { slug: "penetration-testing", label: "Penetration Testing", desc: "Audit the payment surface for a bank vendor-risk review." },
        ],
        ctaTagline: "Call (770) 652-1282 to scope your Charlotte fintech Stripe build.",
    },
    "nashville-tn": {
        slug: "nashville-tn",
        city: "Nashville",
        state: "TN",
        stateFull: "Tennessee",
        h1: "Custom Stripe Integration in Nashville, TN",
        metaDescription:
            "Healthcare-adjacent Stripe compliance and music-tech royalty splits via Stripe Connect for Nashville. PHI-aware design, multi-party payouts, founder-led.",
        intro:
            "Nashville's economy is anchored by healthcare administration (HCA Healthcare and a deep ecosystem of provider, payer, and admin tech) and music and entertainment tech (publishing, streaming, royalty management). Each vertical generates a distinct Stripe problem. Healthcare-adjacent payments need clean PHI-aware design and clear PCI scope. Music-tech needs Stripe Connect for royalty splits — one transaction, three or four party payouts, all with audit-ready reporting for the rights-holder side.",
        angle: "Healthcare-adjacent payment compliance and music-tech royalty splits via Connect.",
        whatWeBuild:
            "For Nashville healthcare-adjacent clients we keep PHI out of the payment flow and run Stripe with clean SAQ A PCI scope — no PHI on your servers, no PHI in Stripe metadata. For music-tech and royalty clients we ship Stripe Connect with multi-party payouts on every transaction (artist, publisher, label, manager), audit-ready reporting per rights-holder, and customer-facing checkout for fans, licensees, or sync customers.",
        industryDetail:
            "The Nashville music-tech engagement is one of the more interesting Stripe use cases. A single fan purchase or sync license triggers three or four simultaneous payouts to different connected accounts, each at a different percentage, each with its own 1099-K reporting. We model the split logic explicitly in PostgreSQL with rights-holder records as first-class entities, then orchestrate the Stripe Connect transfers on top. Same engineering discipline as our Bridgepointe Painting QBO sync — just with rights-holder splits instead of bookkeeping accounts.",
        faq: [
            {
                q: "Do you build Stripe integrations that touch PHI?",
                a: "Case-by-case — we scope BAA and HIPAA-aligned engagements deliberately, not casually. The default is to keep PHI out of the payment flow entirely and keep Stripe in SAQ A PCI scope.",
            },
            {
                q: "Can you handle royalty splits with Stripe Connect for music-tech?",
                a: "Yes — multi-party payouts per transaction with rights-holder splits modeled as first-class entities in PostgreSQL. Audit-ready reporting per rights-holder, 1099-K handling on the platform side.",
            },
            {
                q: "Are you available for on-site Nashville work?",
                a: "Yes — for engagements that warrant it. We are a short drive south on I-24. Discovery and kickoff on-site, build remote, cutover on-site if you want it.",
            },
        ],
        siblings: [
            { slug: "atlanta-ga", label: "Atlanta" },
            { slug: "charlotte-nc", label: "Charlotte" },
        ],
        related: [
            { slug: "custom-crm-development", label: "Custom CRM Development", desc: "Catalog or provider CRM with payment state surfaced inline." },
            { slug: "payments-invoicing-licensing", label: "Payments, Invoicing & Licensing", desc: "License-tied entitlement and royalty orchestration." },
        ],
        ctaTagline: "Call (770) 652-1282 to scope a Nashville healthcare-adjacent or music-tech Stripe build.",
    },
    "san-francisco-ca": {
        slug: "san-francisco-ca",
        city: "San Francisco",
        state: "CA",
        stateFull: "California",
        h1: "Custom Stripe Integration in San Francisco, CA",
        metaDescription:
            "Stripe Connect for SF marketplaces and platforms. Series A+ proof, multi-tenant payouts, FX-aware reconciliation, audit-ready architecture.",
        intro:
            "San Francisco is the most technical buyer market in the country. Every founder is one degree of separation from a senior engineer, every CTO has built the thing before, and contract pitches that lean on agency theater die fast. The Bay-area Stripe problem is almost always Connect at scale — multi-sided marketplaces, two-sided platforms, Series A+ companies whose Stripe Billing setup outgrew the hosted product the day they shipped their first enterprise contract.",
        angle: "Stripe Connect marketplaces for Series A+ platforms.",
        whatWeBuild:
            "For SF marketplace and platform clients we ship Stripe Connect at the Series A+ tier: Express, Custom, and Standard accounts; high-throughput KYC and onboarding; platform-fee orchestration tuned to your unit economics; payout scheduling for multi-tenant marketplaces; FX-aware reconciliation across all the currencies your sellers settle in; dispute and chargeback routing into your ops queue; and full audit-ready reporting for diligence packets.",
        industryDetail:
            "SF technical reviewers ask sharp questions about the architecture, not the agency. Our standard build is TypeScript end-to-end, PostgreSQL as the source-of-truth ledger, signed webhooks with replay protection, explicit Stripe API version pinning, full audit log of every event received and reconciled, and a written architecture document your CTO can sit with. Bridgepointe Painting's QBO reconciliation pattern is the bookkeeping discipline; SF engagements add Series A+ scale and architectural depth.",
        faq: [
            {
                q: "Can you handle a technical bake-off against in-house engineers?",
                a: "Yes — code samples, architecture walkthroughs, and live whiteboarding on request. The engineer on the kickoff is the engineer in the codebase.",
            },
            {
                q: "Do you build multi-sided marketplaces with Stripe Connect at Series A+ scale?",
                a: "Yes — Express, Custom, and Standard at hundreds-to-thousands of connected accounts. Platform fees, payout scheduling, FX-aware reconciliation, dispute routing all in scope.",
            },
            {
                q: "Time-zone overlap with PT?",
                a: "Comfortable working morning through early afternoon Pacific from a Georgia HQ. Async-heavy with scheduled synchronous windows.",
            },
        ],
        siblings: [
            { slug: "seattle-wa", label: "Seattle" },
            { slug: "austin-tx", label: "Austin" },
        ],
        related: [
            { slug: "custom-crm-development", label: "Custom CRM Development", desc: "Marketplace CRM with seller and buyer state in one record." },
            { slug: "penetration-testing", label: "Penetration Testing", desc: "Audit the payment surface for Series A+ diligence or SOC 2." },
        ],
        ctaTagline: "Call (770) 652-1282 to scope an SF Stripe Connect engagement — Series A+ proof, founder-led delivery.",
    },
};

const CITY_ORDER = [
    "macon-ga",
    "atlanta-ga",
    "augusta-ga",
    "columbus-ga",
    "savannah-ga",
    "miami-fl",
    "austin-tx",
    "dallas-tx",
    "chicago-il",
    "seattle-wa",
    "new-york-ny",
    "charlotte-nc",
    "nashville-tn",
    "san-francisco-ca",
];

export function generateStaticParams() {
    return CITY_ORDER.map((city) => ({ city }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string }>;
}): Promise<Metadata> {
    const { city } = await params;
    const cfg = CITIES[city];
    if (!cfg) return { title: "Stripe Integration | QUANT LAB USA" };

    const title = `Stripe Integration in ${cfg.city}, ${cfg.state} | QUANT LAB USA`;

    return pageMetadata({
        title,
        description: cfg.metaDescription,
        slug: `services/stripe-integration/${cfg.slug}`,
        image: "/og-stripe.png",
        type: "article",
    });
}

export default async function StripeIntegrationCityPage({
    params,
}: {
    params: Promise<{ city: string }>;
}) {
    const { city } = await params;
    const cfg = CITIES[city];
    if (!cfg) notFound();

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Custom Stripe Integration",
        name: `Custom Stripe Integration in ${cfg.city}, ${cfg.state}`,
        provider: {
            "@type": "Organization",
            name: "QUANT LAB USA",
            url: "https://quantlabusa.dev",
            "@id": "https://quantlabusa.dev/#organization",
        },
        areaServed: {
            "@type": "City",
            name: cfg.city,
            containedInPlace: {
                "@type": "AdministrativeArea",
                name: cfg.stateFull,
            },
        },
        description: cfg.metaDescription,
        url: `https://quantlabusa.dev/services/stripe-integration/${cfg.slug}`,
    };

    const breadcrumbSchema = {
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
                name: "Services",
                item: "https://quantlabusa.dev/services",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Stripe Integration",
                item: "https://quantlabusa.dev/services/stripe-integration",
            },
            {
                "@type": "ListItem",
                position: 4,
                name: `${cfg.city}, ${cfg.state}`,
                item: `https://quantlabusa.dev/services/stripe-integration/${cfg.slug}`,
            },
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: cfg.faq.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
            },
        })),
    };

    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services/stripe-integration" className="hover:text-sky-400 transition-colors">Stripe Integration</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">{cfg.city}, {cfg.state}</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-400 mb-6">
                        <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        {cfg.h1}
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        {cfg.angle} Founder-led from quote to handoff. Modern stack, fixed-scope, no offshore handoff.
                    </p>
                    <ConsultationCTA label="Scope a Stripe Build" service="Stripe Integration" city={`${cfg.city}, ${cfg.state}`} source={`stripe-${cfg.slug}`} />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why {cfg.city} needs custom Stripe code</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{cfg.intro}</p>
                        <p>
                            Stripe&apos;s docs are good and the Dashboard does maybe 60% of what a real business needs. The other 40% — clean ERP or QuickBooks sync, custom checkout flows, Stripe Connect orchestration, multi-currency reconciliation, license-tied entitlements, idempotent webhook handling with retries and audit logs — is custom code. That is what Stripe integration consulting actually means, and that is what we ship.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for {cfg.city}</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{cfg.whatWeBuild}</p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Custom checkout flows (Stripe Elements or Checkout — SAQ A PCI scope by default)",
                            "Stripe Connect marketplaces and platform fee orchestration",
                            "Subscription billing with mid-cycle proration that does not double-charge",
                            "Multi-currency presentment and FX-aware reconciliation",
                            "ERP / QuickBooks Online / Xero / NetSuite / Sage Intacct sync — bi-directional",
                            "Idempotent webhook processing with retry queue and audit log",
                            "Dispute and chargeback workflows handed off to your AR or ops team",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The {cfg.city} angle</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{cfg.industryDetail}</p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Stripe API (version-pinned)",
                            "Next.js 16 + App Router",
                            "TypeScript",
                            "PostgreSQL (source of truth)",
                            "Signed webhook endpoints",
                            "Node API + worker queue",
                            "QuickBooks Online API",
                            "NetSuite / Xero / Sage",
                            "Docker (cloud-portable)",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        PostgreSQL is the source-of-truth ledger. Stripe is the rail. Every webhook is signed, idempotent, and queued with retry and audit logs. API versions are pinned explicitly so a Stripe-side change does not break your billing overnight.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference case study: Bridgepointe Painting</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/bridgepointe-painting" className="text-indigo-400 hover:underline">Bridgepointe Painting</Link> needed Stripe payments that flowed directly into QuickBooks Online with line-item accuracy, retainer accounting, and per-job profitability reporting. QuantLab built a bi-directional Stripe + QuickBooks Online sync — customers, vendors, items, and chart-of-accounts entities all kept in lockstep, with estimates and invoices generated in-app mirrored to QBO automatically.
                        </p>
                        <p>
                            Outcome: month-end reconciliation dropped from three days to thirty minutes. The bookkeeper stopped re-keying data. The crew, the office, and the customer all share a single source of truth — same architecture pattern we port to {cfg.city} engagements today.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs — {cfg.city}</h2>
                    <div className="space-y-6">
                        {cfg.faq.map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">More cities &amp; related services</h2>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <Link
                            href="/services/stripe-integration"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-indigo-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">All Stripe Integration Services</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Full custom Stripe development — checkout, Connect, subscriptions, ERP sync, license-tied entitlement.
                            </p>
                        </Link>
                        <Link
                            href="/services/payments-invoicing-licensing"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-indigo-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Payments, Invoicing &amp; Licensing</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Broader scope — invoicing systems, customer portals, license-server-tied entitlement.
                            </p>
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {cfg.siblings.map((sib) => {
                            const sibCity = CITIES[sib.slug];
                            return (
                                <Link
                                    key={sib.slug}
                                    href={`/services/stripe-integration/${sib.slug}`}
                                    className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-indigo-400/30 transition-all"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-white font-semibold">Stripe Integration in {sib.label}</h3>
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed">{sibCity?.angle ?? "Custom Stripe integration."}</p>
                                </Link>
                            );
                        })}
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {cfg.related.map((r) => (
                            <Link
                                key={r.slug}
                                href={`/services/${r.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-indigo-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{r.label}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{r.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Have a Stripe edge case in {cfg.city}?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            {renderTaglineWithLinks(cfg.ctaTagline)}
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="Stripe Integration" city={`${cfg.city}, ${cfg.state}`} source={`stripe-${cfg.slug}`} />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
