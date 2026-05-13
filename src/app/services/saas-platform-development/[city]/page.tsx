import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Cloud, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const dynamicParams = false;

type CityConfig = {
    slug: string;
    city: string;
    state: string;
    stateFull: string;
    angle: string;
    intro: string;
    problem: string;
    modules: { title: string; desc: string }[];
    caseStudyParagraph: string;
    pricingNote: string;
    faqs: { q: string; a: string }[];
    siblings: { slug: string; city: string; desc: string }[];
};

const CITIES: Record<string, CityConfig> = {
    "macon-ga": {
        slug: "macon-ga",
        city: "Macon",
        state: "GA",
        stateFull: "Georgia",
        angle: "Middle-Georgia operator-grade SaaS",
        intro: "Most Middle Georgia operators ready to ship a SaaS product are stuck between two bad options. Out-of-state agencies quote enterprise pricing for a single-tenant tool; Upwork developers vanish at week six. A founder-led SaaS partner in the same area code is rare, and it is exactly what gets a real Macon SaaS to production.",
        problem: "SaaS for small-market founders typically gets sold on a SaaS-template platform that bakes in someone else's UI, billing, and data model. By Series A you cannot migrate off without a rewrite. We ship a clean, owned SaaS on day one — Next.js, PostgreSQL, Stripe — that scales with you instead of locking you in.",
        modules: [
            { title: "Multi-tenant Postgres from day one", desc: "Schema-isolated or row-level-isolated tenancy modeled correctly before the first paying customer." },
            { title: "Stripe Billing + subscriptions", desc: "Subscription state drives entitlement. Plans, seats, usage metering, and dunning all flow through one source of truth." },
            { title: "Founder-readable dashboards", desc: "Reporting on Postgres views, not a Looker license. You can grep your own SQL." },
            { title: "Macon-area on-site discovery", desc: "Same area code. We meet at the office, the coffee shop, or the WeWork — no out-of-state handoff." },
        ],
        caseStudyParagraph: "Macon-relevant SaaS reference builds in our portfolio include J5 Sales OS (a multi-tenant sales operations platform), UEhub (an education platform with role-scoped workflows), and operations tooling we have shipped to Middle Georgia clients. Same architecture pattern: Next.js front, PostgreSQL source of truth, Stripe-driven entitlement, role-scoped access — production-grade from day one.",
        pricingNote: "Macon SaaS engagements typically scope between $45,000 and $120,000 for a production-grade MVP with multi-tenancy, Stripe Billing, and admin tooling. Fixed-fee per phase, milestone-based.",
        faqs: [
            { q: "Do you meet with Macon SaaS founders in person?", a: "Yes. QuantLab USA is headquartered in Macon. Discovery sessions across Bibb, Houston, Jones, and Monroe counties are standard — no travel premium." },
            { q: "Multi-tenant or single-tenant for a Macon SaaS MVP?", a: "Multi-tenant by default. Single-tenant only when a buyer's compliance posture demands it. We model the tenancy correctly before the first customer." },
            { q: "Will the SaaS handle a Series A code review?", a: "Yes. TypeScript everywhere, audit trails, signed-token auth, clean module boundaries. Your future CTO can grep it without wincing." },
            { q: "Stripe Billing or Paddle?", a: "Stripe Billing by default. Paddle when the buyer needs merchant-of-record handling for international VAT. Both are in scope." },
            { q: "Who owns the source code?", a: "You do. Full repository handoff at delivery — no platform fees, no vendor lock-in." },
            { q: "How long to ship a Macon SaaS MVP?", a: "Typical Macon engagement ships a usable v1 in 10 to 14 weeks, with the full feature set in 16 to 20." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market SaaS up I-75." },
            { slug: "augusta-ga", city: "Augusta, GA", desc: "Defense-adjacent and CSRA SaaS." },
        ],
    },
    "atlanta-ga": {
        slug: "atlanta-ga",
        city: "Atlanta",
        state: "GA",
        stateFull: "Georgia",
        angle: "Transaction-Alley fintech and logistics SaaS",
        intro: "Atlanta's SaaS market is anchored by Transaction Alley — over 70% of US card payments route through metro processors — and a deep logistics, healthcare-tech, and film-tech base. SaaS founders here ship into Fortune 500 procurement, SOC 2 review, and PCI assessment from day one. Off-the-shelf SaaS scaffolding does not survive any of those reviews intact.",
        problem: "The Atlanta agency ecosystem will ship a $500,000 SaaS that never reaches Series A. The freelance market is too thin for a real multi-tenant build. A founder-led, senior-engineering SaaS shop that ships against fixed scope and produces SOC 2-ready architecture is the gap we fill.",
        modules: [
            { title: "Stripe-native deal-to-cash SaaS", desc: "Subscription state, ACH events, dispute flow, and entitlement modeled on top of Stripe Billing or Stripe Connect — what Transaction Alley clients expect by default." },
            { title: "Logistics + freight SaaS modules", desc: "Freight, load, and dispatch records joined to customer records — multi-tenant from day one for vendors selling into the Atlanta logistics base." },
            { title: "Multi-tenant entitlement reporting", desc: "Per-seat, per-feature, per-tenant rollups built on PostgreSQL views — not vendor metrics packs." },
            { title: "SOC 2-aware audit trails", desc: "User, action, before/after captured on every record. Drops directly into a CC6.1 evidence pack." },
        ],
        caseStudyParagraph: "J5 Sales OS is our reference Atlanta SaaS build — a sales operations platform running contact deduplication, dual-mode lead flow, outreach presets, and embedded reporting on the same Next.js + PostgreSQL pattern we ship to fintech SaaS clients. Bridgepointe Painting demonstrates the Stripe-to-QuickBooks flow at the heart of Atlanta payments-adjacent SaaS. Same data model handles the AE pipeline, the SDR queue, the QuickBooks reconciliation, and the founder dashboard.",
        pricingNote: "Atlanta SaaS engagements typically scope between $60,000 and $180,000 for a production-grade multi-tenant MVP. Fintech and SOC 2-ready builds land at the upper end; logistics and ops platforms land mid-range.",
        faqs: [
            { q: "Will the SaaS survive a Buckhead enterprise procurement review?", a: "Yes. We document the architecture, ship audit trails by default, and produce the security artifacts (data flow, access model, encryption posture) procurement teams actually ask for." },
            { q: "Can you ship a SOC 2 Type II-ready SaaS from day one?", a: "Yes. Audit logging, access scoping, and evidence-ready documentation are in the SDLC. We have shipped SaaS into completed Type II attestations." },
            { q: "Do you understand Stripe Connect, ACH, and PCI?", a: "Yes — Stripe is a core practice. Stripe Connect onboarding, ACH events, and PCI-adjacent flows are frequent scope for our Atlanta clients." },
            { q: "Will you bake-off against an in-house Atlanta engineering team?", a: "Yes. Code samples, architecture walk-through, and a live whiteboard on request." },
            { q: "Multi-tenant or single-tenant?", a: "Multi-tenant by default. Schema-isolated tenancy when a buyer's compliance posture demands it." },
            { q: "Are you available for on-site Atlanta kickoffs?", a: "Yes. Short drive up I-75 from the HQ." },
        ],
        siblings: [
            { slug: "macon-ga", city: "Macon, GA", desc: "Our HQ — same-state SaaS delivery." },
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent SaaS." },
        ],
    },
    "augusta-ga": {
        slug: "augusta-ga",
        city: "Augusta",
        state: "GA",
        stateFull: "Georgia",
        angle: "defense-adjacent and CSRA SMB SaaS",
        intro: "The CSRA SaaS landscape is unusual — Fort Eisenhower and the cyber corridor on one side, small medical, legal, and contracting firms on the other. SaaS vendors selling into this market need to clear federal supply-chain or HIPAA-aligned vendor reviews from day one. Off-the-shelf SaaS scaffolding clears neither.",
        problem: "Most SaaS shops either over-engineer for a Fortune 500 buyer (and price out Augusta SMBs) or under-engineer for a federal vendor review (and lose the deal at procurement). We sit in the middle — security-aware SaaS built at SMB-friendly pricing.",
        modules: [
            { title: "Audit-friendly multi-tenant architecture", desc: "User-level access logs, action history, and exportable evidence packs — useful when a federal supply-chain customer asks for them." },
            { title: "Government-contracting SaaS modules", desc: "Opportunity tracking against SAM.gov, capture and B&P workflows, and contract-vehicle-aware reporting for Augusta vendors." },
            { title: "Medical and legal practice SaaS", desc: "Patient or matter intake on a multi-tenant platform sized for the CSRA SMB base — not a Salesforce Health Cloud bill." },
            { title: "Security-aware SDLC", desc: "Same shop that runs the pen tests writes the code — threat modeling is in the process, not bolted on." },
        ],
        caseStudyParagraph: "Augusta-relevant work crosses into our cybersecurity practice — penetration testing reports formatted for federal supply-chain and SOC 2 review, with the same threat-modeling discipline showing up in our SaaS builds. ProtectWithBri (a client-facing portal handling sensitive communications) is one published reference; SaaS patterns we ship include audit logging, role-scoped record access, and signed-token activation that hold up to a real security review.",
        pricingNote: "Augusta SaaS engagements typically scope between $50,000 and $140,000 — small-clinic or single-vertical SaaS land at the bottom, while federally-reviewable multi-tenant SaaS land at the top.",
        faqs: [
            { q: "Can you produce a SaaS build that passes a federal prime's vendor review?", a: "Yes. We ship security artifacts (data flow, access model, encryption-at-rest documentation) and produce pen test reports against the deployed system on request." },
            { q: "Do you work with medical practices around AU Medical Center?", a: "Yes — provider-facing SaaS for scheduling, intake, and ops is in scope. PHI-touching builds scoped deliberately with BAA and HIPAA-aligned architecture." },
            { q: "Are you available for on-site work in Augusta?", a: "Yes. We are a short drive up I-20 from the HQ." },
            { q: "Can the SaaS work in a SAM.gov-registered contractor environment?", a: "Yes. Government-contracting workflows are in scope, including opportunity tracking and capture." },
            { q: "Multi-tenant or single-tenant for an Augusta vendor?", a: "Multi-tenant by default, with optional schema-isolated tenancy for compliance-heavy customers." },
            { q: "Who owns the source code?", a: "You do. Full repository handoff at delivery." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech SaaS." },
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent SaaS." },
        ],
    },
    "columbus-ga": {
        slug: "columbus-ga",
        city: "Columbus",
        state: "GA",
        stateFull: "Georgia",
        angle: "Chattahoochee Valley SMB SaaS",
        intro: "The Chattahoochee Valley business base — defense-adjacent, family-owned manufacturers, and trades on both sides of the river — runs SaaS purchases through a Goldmine-era buyer mindset. The vendors that survive in this market ship a SaaS that fits the actual workflow on day one. A custom SaaS partner closes that gap.",
        problem: "Most SaaS sold into Columbus is vertical SaaS that nearly fits. Operators end up with three subscriptions, two spreadsheets, and a tribal-knowledge workaround. A custom multi-tenant SaaS modeled on the actual Chattahoochee Valley workflow is the right answer.",
        modules: [
            { title: "Legacy database migration", desc: "Goldmine, ACT!, Access, FileMaker — we model the actual data shape and bring history into a modern Postgres SaaS schema." },
            { title: "Manufacturing + jobsite SaaS", desc: "Lead-to-quote-to-job-to-invoice SaaS for collar-county manufacturers and trades, with crew assignment, materials tracking, and Stripe progress billing." },
            { title: "Cross-state Alabama support", desc: "Phenix City and the Alabama side are first-class — same data model, no edge cases on tax or geography." },
            { title: "QuickBooks Online integration", desc: "Customers, invoices, payments, and deposits flow without rekeying. Month-end closes in minutes." },
        ],
        caseStudyParagraph: "Reference builds for Columbus-relevant SaaS include Northcrest Fence (contractor lead-routing and proposal SaaS), Bridgepointe Painting (Stripe-to-QuickBooks invoice sync), and our contractor estimating engine. Same architecture pattern translates directly to Columbus and Phenix City trades and manufacturers.",
        pricingNote: "Columbus SaaS engagements typically scope between $45,000 and $110,000 for a production-grade MVP. Manufacturing or vertical-SaaS builds land mid-range; full operator-platform builds land at the upper end.",
        faqs: [
            { q: "Do you serve Alabama-side operators?", a: "Yes. Phenix City and the broader Alabama metro are first-class." },
            { q: "Can you replace our Goldmine or ACT! database with a SaaS?", a: "Yes. Legacy migration is standard in our SaaS builds." },
            { q: "How long until our team is using the SaaS?", a: "Typical Columbus engagement ships v1 in 10 to 14 weeks." },
            { q: "Will you integrate with QuickBooks Online?", a: "Yes — standard pattern." },
            { q: "Are you available for on-site work in Columbus?", a: "Yes. Short drive down I-185 from the HQ." },
            { q: "Who owns the source code?", a: "You do." },
        ],
        siblings: [
            { slug: "macon-ga", city: "Macon, GA", desc: "Our HQ — Middle Georgia coverage." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market Atlanta SaaS." },
        ],
    },
    "savannah-ga": {
        slug: "savannah-ga",
        city: "Savannah",
        state: "GA",
        stateFull: "Georgia",
        angle: "port-logistics and hospitality SaaS",
        intro: "Savannah's SaaS demand splits between the Port of Savannah and its drayage and 3PL ecosystem, the deep hospitality and tourism sector, and a SCAD-orbit founder base. Each needs a SaaS modeled on the actual workflow — and almost none of them get it off the shelf.",
        problem: "Generic SaaS templates do not model drayage, do not model tour bookings, and do not survive a SCAD-founder budget. A custom multi-tenant SaaS that fits the actual Savannah workflow at a real price is the gap we close.",
        modules: [
            { title: "Drayage and 3PL SaaS", desc: "Container, load, customer, and dispatcher records joined into one multi-tenant pipeline." },
            { title: "Hospitality + booking SaaS", desc: "Custom alternatives to expensive vertical SaaS for tour operators, boutique hotels, and event venues across Chatham County." },
            { title: "SCAD-founder SaaS MVPs", desc: "Pre-seed and bootstrapped SaaS at a price point real Savannah founders can stomach — Next.js, Postgres, Stripe." },
            { title: "Port-adjacent EDI + freight API integration", desc: "TMS feeds, AES filings, and freight-API integrations modeled into the SaaS data layer." },
        ],
        caseStudyParagraph: "Savannah-relevant portfolio includes operations platforms, recovery and education tooling, and content-driven sites — UEhub, Wilder Recovery, J5 Sales OS. Same patterns we use there ship directly into a drayage SaaS or a boutique-hotel ops platform.",
        pricingNote: "Savannah SaaS engagements typically scope between $40,000 and $110,000 — tour-operator and boutique-hotel builds land at the lower end; freight-integrated drayage builds land at the upper end.",
        faqs: [
            { q: "Can you build SaaS for tour and charter operators?", a: "Yes — bookings, deposits, waivers, and customer comms in one multi-tenant SaaS." },
            { q: "Do you support EDI and freight integrations?", a: "Yes. Drayage scheduling and container tracking are in scope." },
            { q: "Available for on-site Savannah visits?", a: "Yes. We drive down I-16 for kickoffs and reviews." },
            { q: "Can you ship a SaaS MVP at pre-seed budget?", a: "Yes. We size to actual runway, not enterprise pricing." },
            { q: "Multi-tenant or single-tenant?", a: "Multi-tenant by default." },
            { q: "Who owns the source code?", a: "You do." },
        ],
        siblings: [
            { slug: "macon-ga", city: "Macon, GA", desc: "Our HQ." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Atlanta logistics and fintech SaaS." },
        ],
    },
    "miami-fl": {
        slug: "miami-fl",
        city: "Miami",
        state: "FL",
        stateFull: "Florida",
        angle: "LATAM-facing bilingual multi-currency SaaS",
        intro: "Miami SaaS is uniquely shaped — bilingual products, multi-currency billing, LATAM-facing fintechs, and a hospitality sector running on a mess of vertical SaaS. Off-the-shelf SaaS scaffolding gets the language wrong, the currency wrong, or the payment routing wrong. A multi-tenant SaaS that handles LATAM correctly from day one is the gap.",
        problem: "Most SaaS shops bolt Spanish and multi-currency on at the end of the project. By then the data model is wrong and the routing logic is wrong. Miami SaaS demands i18n and multi-currency in the data model, not the UI veneer.",
        modules: [
            { title: "Bilingual ES/EN multi-tenant SaaS", desc: "i18n baked into Next.js builds — tenant-level language preferences flow through every surface." },
            { title: "Multi-currency Stripe Billing", desc: "USD, BRL, MXN, COP, ARS handled correctly — presentment vs settlement currency modeled in the SaaS data layer." },
            { title: "LATAM payment routing", desc: "Stripe by default, with awareness of where local processors (PIX, OXXO, MercadoPago) beat Stripe on conversion." },
            { title: "Hospitality + booking SaaS modules", desc: "Hotel, restaurant, and event-group records with deposit, deposit-forfeit, and folio handling that Mews and Cloudbeds do not get right." },
        ],
        caseStudyParagraph: "Miami-relevant SaaS reference builds in our portfolio span operations platforms (J5 Sales OS for sales operations, UEhub for education workflows) and bilingual-friendly content sites (ProtectWithBri, Aaron Coleman Music). Same architecture pattern: Next.js front, PostgreSQL source of truth, Stripe-driven entitlement, role-scoped access, i18n by default.",
        pricingNote: "Miami SaaS engagements typically scope between $55,000 and $150,000 — bilingual hospitality SaaS land mid-range; fintech and multi-currency Stripe builds land at the upper end.",
        faqs: [
            { q: "Can you ship a Spanish-language SaaS?", a: "Yes — i18n is standard. ES/EN switchable per tenant and per user." },
            { q: "Do you handle LATAM payments correctly?", a: "Stripe is our default. We will tell you straight when PIX, OXXO, or MercadoPago beats Stripe on a given market." },
            { q: "Available for on-site work in Miami?", a: "Yes, for engagements that warrant travel. Most discovery runs remote with full ET overlap." },
            { q: "Will the SaaS survive an institutional buyer's review?", a: "Yes. Pen test reports and architecture documentation on request." },
            { q: "Multi-tenant or single-tenant?", a: "Multi-tenant by default." },
            { q: "Who owns the source code?", a: "You do." },
        ],
        siblings: [
            { slug: "new-york-ny", city: "New York, NY", desc: "Vertical fintech and agency SaaS." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech SaaS." },
        ],
    },
    "austin-tx": {
        slug: "austin-tx",
        city: "Austin",
        state: "TX",
        stateFull: "Texas",
        angle: "founder-grade SaaS MVPs",
        intro: "Austin is a SaaS founder town. The pipeline along MoPac, the venture capital that followed Tesla and Oracle, the East Austin coffee shop full of pre-seed builders — they share one specific problem. They need a SaaS partner who can ship a real production multi-tenant SaaS at a real pre-seed budget, not a $400,000 agency proposal.",
        problem: "Most Austin pre-seeds get pitched a SaaS-as-a-service platform that locks them in by Series A, or an offshore team that produces a codebase the in-house engineers cannot maintain. Senior-engineering, fixed-scope, full-source-handoff at a real pre-seed budget is rare.",
        modules: [
            { title: "MVP-grade multi-tenant SaaS", desc: "What investors want to see in week one — clean Postgres schema, real Stripe Billing, real reporting." },
            { title: "Self-serve + sales-assisted hybrid", desc: "Product-led growth signals (sign-up, activation, expansion) modeled into the SaaS data layer from day one." },
            { title: "Stripe Billing + usage-based pricing", desc: "Plan, seats, usage, dunning, and license state visible on the customer record." },
            { title: "Postgres-native reporting", desc: "Founder-readable dashboards on SQL views — no Looker license, no Tableau seat." },
        ],
        caseStudyParagraph: "J5 Sales OS is our reference SaaS-founder build — a multi-tenant sales operations platform with contact deduplication, outreach presets, dual-mode lead flow, and embedded reporting. We dogfooded the platform on our own sales motion before shipping the pattern. Same architecture works for an Austin pre-seed building a CRM-first SaaS, a Series-A SaaS migrating off a platform, or a bootstrapped founder.",
        pricingNote: "Austin SaaS engagements typically scope between $50,000 and $135,000 for a production-grade multi-tenant MVP. Fixed-fee per phase, milestone-based delivery sized to actual runway.",
        faqs: [
            { q: "Will you work with pre-seed Austin SaaS founders?", a: "Yes — most of our engagements are pre-seed through Series A." },
            { q: "Can the SaaS grow into a product-led growth motion?", a: "Yes. Activation events and expansion signals modeled from day one." },
            { q: "Central time overlap?", a: "Full ET overlap from a Georgia HQ. Most calls land 9-3 CT." },
            { q: "Will the SaaS survive a Series A code review?", a: "Yes." },
            { q: "Multi-tenant or single-tenant?", a: "Multi-tenant by default." },
            { q: "Who owns the source code?", a: "You do." },
        ],
        siblings: [
            { slug: "dallas-tx", city: "Dallas, TX", desc: "Enterprise IT SaaS replacing legacy." },
            { slug: "san-francisco-ca", city: "San Francisco, CA", desc: "Senior-engineering SaaS." },
        ],
    },
    "dallas-tx": {
        slug: "dallas-tx",
        city: "Dallas",
        state: "TX",
        stateFull: "Texas",
        angle: "enterprise IT SaaS replacing legacy",
        intro: "DFW is a corporate IT and supply-chain heavyweight — Fortune 500 headquarters, a massive logistics base, and a deep mid-market layer running internal SaaS built in 2010 that has not aged well. The Big Four wants to replace them with enterprise SaaS at six-figure annual licensing. The freelance market is too thin for an internal multi-tenant SaaS. We sit in the gap.",
        problem: "DFW mid-market SaaS replacements get priced out by the Big Four and out-scoped by the freelance market. Custom multi-tenant SaaS that ships on time, with documentation, against a fixed scope is what closes that gap.",
        modules: [
            { title: "Legacy SaaS modernization", desc: "Replace fragile Access, Lotus Notes, or VB6 stacks with multi-tenant Next.js + PostgreSQL SaaS your team will actually use." },
            { title: "Logistics + freight SaaS records", desc: "DFW's freight density is real — we model load, lane, customer, and broker into one multi-tenant pipeline." },
            { title: "Procurement-ready documentation", desc: "Architecture diagrams, data-flow diagrams, SBOM-style summaries — what IT leadership and audit teams actually want." },
            { title: "Fixed-scope SaaS modernization", desc: "Quoted up front, delivered against milestones." },
        ],
        caseStudyParagraph: "Production builds in our portfolio span operations platforms (J5 Sales OS, UEhub) and trade-side SaaS patterns (Bridgepointe Painting for Stripe-to-QuickBooks invoice flow, Northcrest Fence for contractor lead routing). Same architecture pattern translates into a DFW mid-market SaaS modernization project.",
        pricingNote: "Dallas SaaS engagements typically scope between $65,000 and $200,000 for a production-grade multi-tenant modernization, with enterprise-procurement-ready documentation included.",
        faqs: [
            { q: "Can you modernize our existing internal SaaS?", a: "Often yes. We assess first — sometimes a UI rewrite is enough, sometimes a clean rebuild is cheaper than another round of patches." },
            { q: "Fixed scope or T&M?", a: "Fixed scope on most engagements." },
            { q: "How do you handle a fifty-user internal rollout?", a: "Phased — usable v1 to one team in 10 weeks, then expansion." },
            { q: "Will the SaaS survive enterprise procurement?", a: "Yes." },
            { q: "Multi-tenant?", a: "Multi-tenant by default." },
            { q: "Who owns the source code?", a: "You do." },
        ],
        siblings: [
            { slug: "austin-tx", city: "Austin, TX", desc: "Founder-grade SaaS MVPs." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech SaaS." },
        ],
    },
    "chicago-il": {
        slug: "chicago-il",
        city: "Chicago",
        state: "IL",
        stateFull: "Illinois",
        angle: "trading-desk and logistics SaaS",
        intro: "Chicago's SaaS demand is unusually rich — the trading and proprietary-finance ecosystem around the CBOT and CME, the rail-and-truck logistics hub that moves the Midwest, and a deep manufacturing base across the collar counties. Each needs a SaaS that mirrors how the actual business runs — and almost none of them get it off the shelf.",
        problem: "Chicago vertical SaaS markets get sold generic CRM and ERP platforms that almost fit the trading desk, the freight broker, or the Schaumburg manufacturer. A custom multi-tenant SaaS modeled on the actual workflow closes that gap.",
        modules: [
            { title: "Trading-desk relationship SaaS", desc: "Counterparty, broker, and venue records joined to position, exposure, and conversation history — the actual data a desk uses." },
            { title: "Freight + logistics SaaS pipeline", desc: "Load, lane, customer, and dispatcher visibility consolidated from legacy TMS and WMS feeds into one multi-tenant record." },
            { title: "Manufacturing + jobsite SaaS", desc: "Quote-to-job-to-invoice for collar-county manufacturers and trades, with materials tracking and Stripe progress billing." },
            { title: "Algorithmic ops integration", desc: "We build trading bots — we know how to wire P/L, fill, and slippage data into a SaaS operator view." },
        ],
        caseStudyParagraph: "Our Chicago-relevant capability includes algorithmic trading systems (TypeScript/Node integrated with broker APIs like IBKR, Alpaca, Tradier), ops dashboards, and operations platforms — J5 Sales OS for sales operations. Same data architecture supports a trading-desk SaaS, a freight broker pipeline, or a Schaumburg manufacturer's quote-to-cash SaaS.",
        pricingNote: "Chicago SaaS engagements typically scope between $60,000 and $160,000 for a production-grade multi-tenant MVP. Trading-desk and real-time SaaS land at the upper end.",
        faqs: [
            { q: "Do you build SaaS for prop trading desks?", a: "Yes. Counterparty-and-broker relationship SaaS is a real niche." },
            { q: "Can a SaaS consolidate legacy TMS and WMS feeds?", a: "Yes." },
            { q: "Do you fly in for kickoffs?", a: "For engagements that warrant it. Most discovery remote with Central-time overlap." },
            { q: "Real-time market data on SaaS?", a: "Yes — we have built trading systems against IBKR, Alpaca, and Tradier." },
            { q: "Multi-tenant?", a: "Multi-tenant by default." },
            { q: "Who owns the source code?", a: "You do." },
        ],
        siblings: [
            { slug: "new-york-ny", city: "New York, NY", desc: "Vertical finance and agency SaaS." },
            { slug: "dallas-tx", city: "Dallas, TX", desc: "Enterprise IT and logistics SaaS." },
        ],
    },
    "seattle-wa": {
        slug: "seattle-wa",
        city: "Seattle",
        state: "WA",
        stateFull: "Washington",
        angle: "dev-tools and cloud-native SaaS",
        intro: "Seattle is anchored by Amazon and Microsoft, surrounded by a fast-moving SaaS and dev-tools ecosystem, and threaded through with bootstrapped indie SaaS founders. Most companies here speak fluent cloud — they want a SaaS that ships Docker-native, cloud-portable, API-first, and does not fight their stack.",
        problem: "Most agencies ship SaaS on top of vendor SDKs that lock you into a specific cloud and a specific billing platform. Seattle technical buyers want the SaaS equivalent of an API-first product — clean module boundaries, documented endpoints, no vendor lock-in.",
        modules: [
            { title: "Docker-native multi-tenant SaaS", desc: "Container-first builds that drop into AWS, GCP, Azure, or your own Kubernetes without theater." },
            { title: "API-first SaaS data layer", desc: "Every SaaS action is a documented REST or GraphQL endpoint — your dev tools and SaaS product talk to it like a peer service." },
            { title: "Stripe Billing + usage-based pricing", desc: "Plan, meter, dunning, and license state visible on the customer record. Built for developer-tool pricing models." },
            { title: "Single-sign-on + IAM-grade access", desc: "OIDC, SAML, fine-grained RBAC. Your security review team sees what they expect." },
        ],
        caseStudyParagraph: "Seattle-relevant SaaS reference work includes operations platforms (J5 Sales OS, UEhub) and developer-tool patterns we ship across the portfolio — Docker-native deploys, OpenAPI-documented endpoints, Stripe metering, Postgres-native reporting. The architecture meets what a Seattle-grade engineering reviewer expects.",
        pricingNote: "Seattle SaaS engagements typically scope between $60,000 and $160,000 for a production-grade multi-tenant MVP. Senior-engineering bake-off included.",
        faqs: [
            { q: "Will the SaaS deploy to AWS or our own Kubernetes?", a: "Yes. Docker-native by default. Terraform or Helm at delivery." },
            { q: "Can the SaaS be queried by our product as a peer service?", a: "Yes — every action is a documented endpoint." },
            { q: "Pacific time overlap?", a: "Morning through early afternoon Pacific from a Georgia HQ." },
            { q: "Bake-off against in-house Seattle engineers?", a: "Yes." },
            { q: "SAML/OIDC SSO?", a: "Yes." },
            { q: "Who owns the source code?", a: "You do." },
        ],
        siblings: [
            { slug: "san-francisco-ca", city: "San Francisco, CA", desc: "Senior-engineering SaaS." },
            { slug: "austin-tx", city: "Austin, TX", desc: "Founder-grade SaaS MVPs." },
        ],
    },
    "new-york-ny": {
        slug: "new-york-ny",
        city: "New York",
        state: "NY",
        stateFull: "New York",
        angle: "vertical SaaS for finance and agency operations",
        intro: "New York is the toughest SaaS buyer's market in the country — fintech, ad-tech, agency holding companies, hedge funds, and SaaS founders. Everyone has been burned by Salesforce, HubSpot, Affinity. The SaaS pattern that survives is a vertical multi-tenant build modeled on the specific workflow, built by someone who can actually ship.",
        problem: "NYC buyers do not buy generic SaaS templates. They buy verticalized SaaS that mirror their actual deal flow, pitch process, or client engagement. Most shops cannot ship that — they ship a CRUD app and call it SaaS.",
        modules: [
            { title: "Agency client + project SaaS", desc: "Client, campaign, retainer, and deliverable records joined into one multi-tenant pipeline." },
            { title: "Fund-administration-aware deal SaaS", desc: "Pipeline, deal IC, capital call, and LP communication records modeled into one schema." },
            { title: "Ad-tech revenue ops SaaS", desc: "Insertion order, campaign, and pacing data joined to AE and AM records." },
            { title: "Procurement-ready architecture", desc: "Data-flow diagrams, SBOM-style summaries, and security artifacts that survive an institutional investor's due diligence." },
        ],
        caseStudyParagraph: "Reference work for NYC-style buyers spans operations platforms (J5 Sales OS, UEhub), trade and brand sites (ProtectWithBri, Wilder Recovery, Northcrest Fence), and quantitative tooling. Same architecture pattern: clean Postgres schema, audit trails by default, role-scoped access, and reporting on SQL views.",
        pricingNote: "NYC SaaS engagements typically scope between $70,000 and $200,000 for a production-grade multi-tenant SaaS. Institutional-investor-ready builds with formal security documentation land at the upper end.",
        faqs: [
            { q: "Institutional investor due-diligence packet?", a: "Yes. Pen test reports, architecture diagrams, SBOM-style summaries." },
            { q: "Fly in for kickoffs?", a: "For engagements above a certain scope." },
            { q: "Agency holding-company SaaS?", a: "Yes." },
            { q: "Will the SaaS survive hedge fund tech review?", a: "Yes." },
            { q: "Multi-tenant?", a: "Multi-tenant by default." },
            { q: "Who owns the source code?", a: "You do." },
        ],
        siblings: [
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent SaaS." },
            { slug: "chicago-il", city: "Chicago, IL", desc: "Trading-desk and logistics SaaS." },
        ],
    },
    "charlotte-nc": {
        slug: "charlotte-nc",
        city: "Charlotte",
        state: "NC",
        stateFull: "North Carolina",
        angle: "banking-adjacent compliance-aware SaaS",
        intro: "Charlotte is the southeast's banking capital — Bank of America and Truist headquartered here, plus a fintech and supplier ecosystem in Uptown and South End selling into the big banks. Every SaaS in this market has to survive two reviews: an internal audit and a customer's vendor-risk assessment. Generic SaaS scaffolding fails both.",
        problem: "SaaS vendors selling into Charlotte have to clear bank-grade security review. Generic shops do not understand vendor-risk and lose the deal at procurement. We build for the regulated environment from day one.",
        modules: [
            { title: "Vendor-risk-ready architecture", desc: "Data-flow diagrams, access model, encryption-at-rest documentation, and audit logs that survive a BoA or Truist review." },
            { title: "Customer-record audit trails", desc: "User, action, before/after on every record. Drops into SOC 2 CC6.1 and CC7.2 evidence packs." },
            { title: "Stripe + bank-grade billing flows", desc: "Subscription and licensing state tied to entitlement, with reconciliation outputs auditors can pull." },
            { title: "Fintech-vendor SaaS modules", desc: "Pipeline, deal IC, security-review state, and contract redline tracking for vendors selling into a regulated bank." },
        ],
        caseStudyParagraph: "Charlotte-relevant reference work includes J5 Sales OS (sales operations SaaS), ProtectWithBri (client-facing portal handling sensitive communications), and contractor-grade SaaS patterns. Same audit-trail and access-model discipline shows up across the portfolio.",
        pricingNote: "Charlotte SaaS engagements typically scope between $60,000 and $180,000 for a production-grade multi-tenant SaaS with bank-grade security documentation included.",
        faqs: [
            { q: "Will the SaaS survive BoA or Truist vendor-risk?", a: "Yes." },
            { q: "Do you understand the bank questionnaire game?", a: "Yes — same shop ships the SaaS and runs the pen test." },
            { q: "In-person Charlotte meetings?", a: "Yes. Short drive up I-85." },
            { q: "SOC 2 Type II audit?", a: "Yes." },
            { q: "Enterprise SSO?", a: "Yes — SAML, OIDC, RBAC." },
            { q: "Who owns the source code?", a: "You do." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech SaaS." },
            { slug: "nashville-tn", city: "Nashville, TN", desc: "Healthcare and music-tech SaaS." },
        ],
    },
    "nashville-tn": {
        slug: "nashville-tn",
        city: "Nashville",
        state: "TN",
        stateFull: "Tennessee",
        angle: "healthcare-admin and music-tech SaaS",
        intro: "Nashville's economy is anchored by healthcare administration — HCA Healthcare plus a wide ecosystem of provider, payer, and admin-tech companies — and music and entertainment tech around publishing, streaming, and royalty management. SaaS into either market needs to model the actual workflow correctly. Off-the-shelf scaffolding fits neither.",
        problem: "Generic SaaS does not understand HIPAA-aligned architecture, does not understand royalty data modeling, and ships SaaS that nearly fits but never quite gets to production. Custom multi-tenant SaaS closes that gap.",
        modules: [
            { title: "Provider-facing healthcare SaaS", desc: "Scheduling, intake, and ops on a multi-tenant SaaS for healthcare-adjacent operators. PHI-touching builds scoped with BAA and HIPAA-aligned architecture." },
            { title: "Royalty and catalog SaaS", desc: "Catalog, writer, publisher, and recipient records joined to royalty statement data — multi-tenant for publishers." },
            { title: "Payer + admin-tech vendor SaaS", desc: "Pipeline, deal IC, contract redline, and HIPAA-vendor-review state for companies selling into HCA." },
            { title: "Audit-ready access logs", desc: "Drops into HIPAA risk-analysis documentation and vendor-review packets." },
        ],
        caseStudyParagraph: "Aaron Coleman Music informs how we model catalog and royalty data for Nashville music-tech operators. Broader reference work includes UEhub (education platform with provider-facing workflows), Wilder Recovery (recovery-services platform with audit-aware records), and J5 Sales OS.",
        pricingNote: "Nashville SaaS engagements typically scope between $55,000 and $160,000 for a production-grade multi-tenant SaaS. HIPAA-aligned and royalty-modeling SaaS land mid-to-upper range.",
        faqs: [
            { q: "PHI-touching SaaS?", a: "Case-by-case with BAA and HIPAA-aligned architecture." },
            { q: "Royalty SaaS?", a: "Yes — catalog, writer, publisher, and statement modeling in Postgres." },
            { q: "Available for on-site Nashville work?", a: "Yes — short drive up I-24." },
            { q: "Survive HCA vendor-risk review?", a: "Yes." },
            { q: "Multi-tenant?", a: "Multi-tenant by default." },
            { q: "Who owns the source code?", a: "You do." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech SaaS." },
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent SaaS." },
        ],
    },
    "san-francisco-ca": {
        slug: "san-francisco-ca",
        city: "San Francisco",
        state: "CA",
        stateFull: "California",
        angle: "peer-credible senior-engineering SaaS",
        intro: "San Francisco is the most technical SaaS buyer market in the country. Every founder is one degree of separation from a senior engineer, every CTO has built the thing before, and contract pitches that lean on agency theater die fast on the technical screen. What survives is genuine senior engineering, clean schema, and the ability to ship.",
        problem: "Bay SaaS buyers see through agency theater fast. The competition is in-house engineers, ex-FAANG SaaS leads, and the partner that wins the contract has to clear a code review the same week they pitch.",
        modules: [
            { title: "Senior-quality multi-tenant SaaS", desc: "Postgres schema designed for the actual workflow — not a Salesforce object model translated into JSON." },
            { title: "Code that reviews well", desc: "TypeScript, Server Components done correctly, audit trails, idempotent webhooks." },
            { title: "Stripe + entitlement architecture", desc: "Subscription state drives entitlement. License-server-grade activation when needed." },
            { title: "Algorithmic-ops integration", desc: "We build trading bots — we know how to wire low-latency P/L, fill, or product-event data into a SaaS operator view." },
        ],
        caseStudyParagraph: "Bay-relevant reference work spans operations platforms (J5 Sales OS, UEhub), trading systems (algorithmic bot development on TypeScript/Node integrated with broker APIs), and trade brands we ship sites for (HobbsPeak, ProtectWithBri). Technical bake-offs work in our favor — code walk-through or live architecture session on request.",
        pricingNote: "SF SaaS engagements typically scope between $70,000 and $200,000 for a production-grade multi-tenant SaaS with senior-engineering bake-off included.",
        faqs: [
            { q: "Technical bake-off against in-house engineers?", a: "Yes." },
            { q: "Quant-adjacent SaaS?", a: "Yes." },
            { q: "Pacific time overlap?", a: "Morning through early afternoon Pacific from a Georgia HQ." },
            { q: "Survive a Series A code review?", a: "Yes." },
            { q: "Multi-tenant?", a: "Multi-tenant by default." },
            { q: "Who owns the source code?", a: "You do." },
        ],
        siblings: [
            { slug: "seattle-wa", city: "Seattle, WA", desc: "Dev-tools and cloud-native SaaS." },
            { slug: "austin-tx", city: "Austin, TX", desc: "Founder-grade SaaS MVPs." },
        ],
    },
};

const CITY_SLUGS = Object.keys(CITIES);

export function generateStaticParams() {
    return CITY_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string }>;
}): Promise<Metadata> {
    const { city } = await params;
    const config = CITIES[city];
    if (!config) return { title: "SaaS Platform Development | QUANT LAB USA" };

    const title = `SaaS Platform Development in ${config.city}, ${config.state} | QUANT LAB USA`;
    const description = `Custom multi-tenant SaaS development for ${config.city} ${config.stateFull} founders. Next.js, Postgres, Stripe Billing. Founder-led, fixed-scope.`;

    return pageMetadata({
        title,
        description,
        slug: `services/saas-platform-development/${config.slug}`,
        image: "/og-services.png",
        type: "article",
    });
}

export default async function SaaSPlatformCityPage({
    params,
}: {
    params: Promise<{ city: string }>;
}) {
    const { city } = await params;
    const config = CITIES[city];
    if (!config) notFound();

    const url = `https://quantlabusa.dev/services/saas-platform-development/${config.slug}`;

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "SaaS Platform Development",
        name: `SaaS Platform Development in ${config.city}, ${config.state}`,
        provider: { "@id": "https://quantlabusa.dev/#organization" },
        areaServed: {
            "@type": "City",
            name: config.city,
            address: {
                "@type": "PostalAddress",
                addressLocality: config.city,
                addressRegion: config.state,
                addressCountry: "US",
            },
        },
        description: `Custom multi-tenant SaaS development for ${config.city}, ${config.stateFull} businesses. Next.js + PostgreSQL builds with Stripe Billing, audit trails, and full source-code ownership.`,
        url,
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${url}#localbusiness`,
        name: `QUANT LAB USA — SaaS Platform Development in ${config.city}`,
        url,
        areaServed: {
            "@type": "City",
            name: config.city,
            address: {
                "@type": "PostalAddress",
                addressLocality: config.city,
                addressRegion: config.state,
                addressCountry: "US",
            },
        },
        telephone: "+1-770-652-1282",
        parentOrganization: { "@id": "https://quantlabusa.dev/#organization" },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
            {
                "@type": "ListItem",
                position: 3,
                name: "SaaS Platform Development",
                item: "https://quantlabusa.dev/services/saas-platform-development",
            },
            { "@type": "ListItem", position: 4, name: `${config.city}, ${config.state}`, item: url },
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: config.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
                        <li>
                            <Link href="/services/saas-platform-development" className="hover:text-sky-400 transition-colors">
                                SaaS Platform Development
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">{config.city}, {config.state}</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        SaaS Platform Development in {config.city}, {config.state}
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        {config.intro}
                    </p>
                    <ConsultationCTA
                        label={`Scope a ${config.city} SaaS Build`}
                        service="SaaS Platform Development"
                        city={`${config.city}, ${config.state}`}
                        source={`saas-${config.slug}`}
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        The problem with off-the-shelf SaaS scaffolding in {config.city}
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{config.problem}</p>
                        <p>
                            A custom multi-tenant SaaS puts your schema, billing, entitlement, and tenancy under your control. No platform tax. No vendor SDK lock-in. For {config.city} founders specifically, that means SaaS shaped for {config.angle} — not a generic template that nearly fits.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        What we ship for {config.city} SaaS founders
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {config.modules.map((m) => (
                            <div key={m.title} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-5">
                                <h3 className="text-white font-semibold mb-2">{m.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Next.js 15 + App Router",
                            "TypeScript",
                            "PostgreSQL (multi-tenant)",
                            "Prisma",
                            "Node API layer",
                            "Stripe Billing",
                            "Stripe Connect",
                            "SAML / OIDC SSO",
                            "Docker / Kubernetes",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Hosted on Vercel, AWS, GCP, or your own infrastructure. PostgreSQL is the source of truth.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference builds</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{config.caseStudyParagraph}</p>
                        <p className="text-sm">
                            Reference SaaS work: <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link>, <Link href="/work/protectwithbri" className="text-sky-400 hover:underline">ProtectWithBri</Link>, and <Link href="/work/wilder-recovery" className="text-sky-400 hover:underline">Wilder Recovery</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remote from Georgia</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA is founder-led from Macon, Georgia. William Beltz runs every SaaS engagement from kickoff through handoff — no agency middleman, no offshore handoff at the framework boundary. Discovery is a structured video session; weekly demos run on the same cadence; staging is live from week two.
                        </p>
                        <p>
                            For {config.city} founders, that means full Eastern-time overlap, fixed-scope contracting against milestones, and on-site work when scope warrants. <Link href="/contact" className="text-sky-400 hover:underline">Book a scope call</Link> to walk through your SaaS plan and get a written estimate.
                        </p>
                    </div>
                    <div className="mt-6">
                        <ConsultationCTA
                            label={`Talk to William about ${config.city} SaaS`}
                            service="SaaS Platform Development"
                            city={`${config.city}, ${config.state}`}
                            source={`saas-${config.slug}-mid`}
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing for {config.city} SaaS builds</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{config.pricingNote}</p>
                        <p>
                            We quote fixed-fee scope after a 30-minute discovery call. Engagements include the multi-tenant data model, Stripe Billing wiring, admin tooling, customer-facing UI, and the API surface. Source-code handoff at delivery. See our <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">parent SaaS service page</Link> for the broader engagement model.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Full source code repository (yours, no lock-in)",
                            "Multi-tenant Postgres schema + Stripe Billing wiring",
                            "Production deployment + staging environment",
                            "Admin tooling + customer-facing UI",
                            "API documentation (OpenAPI / GraphQL schema)",
                            "30-day post-launch support included",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{config.city} SaaS FAQ</h2>
                    <div className="space-y-6">
                        {config.faqs.map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "Pair your SaaS with a CRM your team will actually use." },
                            { slug: "stripe-integration", title: "Stripe Integration", desc: "Stripe Billing, Stripe Connect, and entitlement on day one." },
                            { slug: "mobile-app-development", title: "Mobile App Development", desc: "iOS and Android clients sharing your SaaS data model." },
                            { slug: "ai-integration-services", title: "AI Integration", desc: "LLM features wired into your multi-tenant SaaS." },
                            { slug: "devops-engineering", title: "DevOps + CI/CD", desc: "Docker, Kubernetes, Terraform — production-grade infra." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Nearby cities we serve</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {config.siblings.map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/saas-platform-development/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-sky-400" />
                                        <h3 className="text-white font-semibold">{s.city}</h3>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Build a SaaS you actually own in {config.city}.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA
                            label={`Book a ${config.city} SaaS Scope Call`}
                            service="SaaS Platform Development"
                            city={`${config.city}, ${config.state}`}
                            source={`saas-${config.slug}-footer`}
                        />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
