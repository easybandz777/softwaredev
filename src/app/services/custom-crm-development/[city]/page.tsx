import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Terminal, Check, ArrowRight, MapPin } from "lucide-react";

export const dynamicParams = false;

type CityConfig = {
    slug: string;
    city: string;
    state: string;
    stateFull: string;
    headline: string;
    intro: string;
    angle: string;
    modules: { title: string; desc: string }[];
    caseStudyParagraph: string;
    faqs: { q: string; a: string }[];
    siblings: { slug: string; city: string; desc: string }[];
};

const CITIES: Record<string, CityConfig> = {
    "macon-ga": {
        slug: "macon-ga",
        city: "Macon",
        state: "GA",
        stateFull: "Georgia",
        headline: "Custom CRM Development in Macon, GA",
        intro: "Most Middle Georgia operators are still running their sales process out of three spreadsheets, a Gmail folder, and a head full of tribal knowledge. The off-the-shelf CRMs that promise to fix that either cost more than the operator nets in a month, or get abandoned by the team inside ninety days because the forms feel like tax paperwork.",
        angle: "local-business CRMs replacing spreadsheets",
        modules: [
            { title: "Quote-to-cash pipelines for the trades", desc: "Lead form to estimate to job to invoice — sized to a small office, not a Salesforce admin." },
            { title: "Customer record consolidation", desc: "One contact, every job, every call, every invoice — no duplicate Bobs across two tools." },
            { title: "QuickBooks + Stripe wiring", desc: "Deposits, retainers, and final payments flow directly to your books without re-keying." },
            { title: "Mobile-first crew + dispatch screens", desc: "Field crews log job notes from the truck, the office sees them on the dashboard." },
        ],
        caseStudyParagraph: "Our reference build for Macon-area clients is the Northcrest Fence proposal portal — a contractor-grade lead-to-proposal workflow with automatic CRM lead creation, signed-quote tracking, and QuickBooks invoice handoff. Same architecture pattern translates cleanly to HVAC, painting, roofing, electrical, and other Middle Georgia trades operating out of Bibb, Houston, and Monroe counties.",
        faqs: [
            { q: "Do you meet with Macon businesses in person?", a: "Yes. Our HQ is in Macon and we run on-site kickoffs across Bibb, Houston, Jones, and Monroe counties. Most discovery still happens over a working session at the office or jobsite." },
            { q: "We currently run on spreadsheets — is custom worth it for our size?", a: "When your monthly SaaS spend tops $400 or your team is rekeying the same lead three times, a custom CRM usually pays back inside 18 months. We can give you a straight answer at discovery." },
            { q: "Can you integrate with QuickBooks Desktop or just Online?", a: "Both. Most Macon clients are on QuickBooks Online and we wire Stripe, deposits, and final invoices straight into it. Desktop is supported via the SDK when needed." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech and logistics CRM builds up I-75." },
            { slug: "augusta-ga", city: "Augusta, GA", desc: "Defense-adjacent and CSRA SMB CRMs." },
        ],
    },
    "atlanta-ga": {
        slug: "atlanta-ga",
        city: "Atlanta",
        state: "GA",
        stateFull: "Georgia",
        headline: "Custom CRM Development in Atlanta, GA",
        intro: "Atlanta's mid-market fintech, logistics, and SaaS operators all hit the same wall: Salesforce or HubSpot can't model how they actually sell, but the consulting bill to bend it into shape costs more than building the thing from scratch. Custom fields stack up, workflows get bolted on, reps stop logging activity, and the founder still can't trust the forecast. We replace that stack with a CRM that mirrors the actual motion.",
        angle: "mid-market fintech and logistics CRMs replacing Salesforce",
        modules: [
            { title: "Stripe-native deal-to-cash", desc: "Pipeline stages tied to Stripe subscription state, ACH events, and dispute flow. Transaction Alley clients expect this by default." },
            { title: "Logistics + dispatch CRM modules", desc: "Freight, load, and dispatch records joined to the customer record so your AE sees the actual operations history before the renewal call." },
            { title: "Multi-tenant entitlement reporting", desc: "Per-seat, per-feature, per-tenant rollups built on PostgreSQL views — not vendor 'metrics packs'." },
            { title: "SOC 2-aware audit trails", desc: "User, action, before/after captured on every record. Drops directly into a CC6.1 evidence pack." },
        ],
        caseStudyParagraph: "J5 Sales OS is our reference Atlanta build — a sales operations platform running contact deduplication, dual-mode lead flow (auto + curated), outreach presets, and embedded reporting on the same Next.js + PostgreSQL pattern we ship to custom CRM clients. The same data model handles the AE pipeline, the SDR queue, the QuickBooks reconciliation, and the founder dashboard without forcing anyone into a different tool.",
        faqs: [
            { q: "Will the CRM hold up during a Fortune 500 procurement review?", a: "Yes. We document the architecture, ship audit trails by default, and produce the security artifacts (data flow, access model, encryption posture) procurement teams in Buckhead actually ask for." },
            { q: "Can the CRM replace Salesforce entirely or sit alongside it?", a: "Both paths work. Most Atlanta clients fully migrate after a 60-day parallel run. A few keep Salesforce for one team and route the rest of the org to the custom build — the data sync is part of scope either way." },
            { q: "Do you support Stripe Connect marketplace data in the CRM?", a: "Yes. Platform fees, connected account onboarding state, payout cadence, and 1099 reporting all flow into the customer record so your account team sees the same picture as finance." },
        ],
        siblings: [
            { slug: "macon-ga", city: "Macon, GA", desc: "Our HQ — same-state delivery up I-75." },
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent compliance-aware CRMs." },
        ],
    },
    "augusta-ga": {
        slug: "augusta-ga",
        city: "Augusta",
        state: "GA",
        stateFull: "Georgia",
        headline: "Custom CRM Development in Augusta, GA",
        intro: "The CSRA business landscape is unusual — Fort Eisenhower and the cyber corridor next door to small medical, legal, and contracting firms running 1990s desktop databases. The CRMs being sold into this market either assume a Fortune 500 IT department or assume a single-laptop operator. Almost nothing fits the actual Augusta SMB profile. We build for the middle.",
        angle: "defense-adjacent and SMB CRMs for the CSRA",
        modules: [
            { title: "Audit-friendly contact + case records", desc: "User-level access logs, action history, and exportable evidence packs — useful when a federal customer asks for them." },
            { title: "Government-contracting pipeline modules", desc: "Opportunity tracking against SAM.gov and SAP-style proposal stages, with capture and B&P workflows." },
            { title: "Medical and legal practice CRMs", desc: "Patient or matter intake without forcing your team into a vertical SaaS that costs more than your rent." },
            { title: "Security-aware build practices", desc: "Same shop that runs the pen tests writes the code — threat modeling is in the SDLC, not bolted on." },
        ],
        caseStudyParagraph: "Augusta-area work crosses into our cybersecurity practice — we deliver penetration testing reports formatted for federal supply-chain and SOC 2 review, and the same threat-modeling discipline shows up in our CRM builds. ProtectWithBri, a client-facing portal handling sensitive communications, is one published reference; CRM patterns we ship include audit logging, role-scoped record access, and signed-token activation that hold up to a real security review.",
        faqs: [
            { q: "Can you produce a CRM build that passes a federal prime's vendor review?", a: "Yes. We ship the security artifacts (data flow, access model, encryption-at-rest documentation) and produce a pen test report against the deployed system on request." },
            { q: "Do you work with medical practices around Doctor's Hospital and AU Medical Center?", a: "Yes — provider-facing CRMs for scheduling, intake, and ops are in scope. PHI-touching builds are scoped deliberately with BAA and HIPAA-aligned architecture." },
            { q: "Are you available for on-site work in Augusta?", a: "Yes. We are a short drive up I-20 from the HQ and travel into Augusta for kickoff and review sessions when scope warrants it." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech and logistics CRMs." },
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent compliance-aware CRMs." },
        ],
    },
    "columbus-ga": {
        slug: "columbus-ga",
        city: "Columbus",
        state: "GA",
        stateFull: "Georgia",
        headline: "Custom CRM Development in Columbus, GA",
        intro: "The Chattahoochee Valley is a real and underserved business market — Fort Moore's defense-adjacent economy on one side of the river, family-owned manufacturers and contractors on both sides, and the long shadow of TSYS and Aflac in the legacy fintech infrastructure. Operators here typically run on Goldmine, ACT!, or homegrown Access databases that hit their limit five years ago. A custom CRM closes that gap without enterprise pricing.",
        angle: "Chattahoochee Valley SMB CRMs",
        modules: [
            { title: "Legacy database migration", desc: "Goldmine, ACT!, Access, FileMaker, or hand-built Excel — we model the actual data shape and bring history into a modern Postgres schema." },
            { title: "Manufacturing + jobsite CRM", desc: "Lead-to-quote-to-job pipelines with crew assignment, materials tracking, and Stripe-driven progress billing." },
            { title: "Cross-state Alabama support", desc: "Phenix City and the Alabama side of the river are first-class — same data model, no edge cases." },
            { title: "QuickBooks Online integration", desc: "Customers, invoices, payments, and deposits flow without rekeying. Month-end closes in minutes." },
        ],
        caseStudyParagraph: "We've shipped contractor-grade CRMs and proposal workflows across Middle Georgia — Northcrest Fence (a contractor lead-routing and proposal portal), Bridgepointe Painting (Stripe-to-QuickBooks invoice sync), and a contractor estimating engine that auto-creates CRM leads. Same patterns translate directly to the Columbus and Phenix City trades, manufacturers, and service businesses operating across the river.",
        faqs: [
            { q: "Do you serve operators on the Alabama side of the Chattahoochee?", a: "Yes. Phenix City and the broader Alabama metro are first-class — we model state-tax differences, route assignment, and customer-record geography from day one." },
            { q: "Can you replace our Goldmine or ACT! database?", a: "Yes — legacy contact-database migration is a standard part of the build. Your history comes with you into the new schema." },
            { q: "How long until our team is actually using the new CRM?", a: "Typical Columbus engagement ships a usable v1 in 8 to 10 weeks, with the full feature set in 12 to 16. We train on real records during the rollout, not a sandbox demo." },
        ],
        siblings: [
            { slug: "macon-ga", city: "Macon, GA", desc: "Our HQ — Middle Georgia coverage." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market Atlanta CRM builds." },
        ],
    },
    "savannah-ga": {
        slug: "savannah-ga",
        city: "Savannah",
        state: "GA",
        stateFull: "Georgia",
        headline: "Custom CRM Development in Savannah, GA",
        intro: "Savannah's economy splits cleanly into three demand pools: the Port of Savannah and the drayage and 3PL ecosystem feeding it, the deep hospitality and tourism sector running on aging vertical SaaS, and a growing creative and SaaS founder base orbiting SCAD and the historic district. Each needs a CRM that fits how it actually books, dispatches, or sells — and almost none of them get one off the shelf.",
        angle: "port-logistics and hospitality CRMs",
        modules: [
            { title: "Drayage and 3PL CRMs", desc: "Container, load, and customer records joined into one pipeline so your dispatcher and your salesperson see the same record." },
            { title: "Hospitality booking + ops platforms", desc: "Custom alternatives to expensive vertical SaaS for tour operators, boutique hotels, and event venues across Chatham County." },
            { title: "SCAD-founder SaaS MVPs", desc: "Pre-seed and bootstrapped CRMs at a price point real Savannah founders can stomach — Next.js, Postgres, Stripe." },
            { title: "Port-adjacent EDI + freight API integration", desc: "TMS feeds, AES filings, and freight-API integrations modeled into the CRM data layer." },
        ],
        caseStudyParagraph: "Our Savannah-relevant portfolio includes operations platforms, recovery and education tooling, and content-driven sites we've shipped to production — UEhub, Wilder Recovery, and Aaron Coleman Music are publicly browsable references. The same patterns we use there (clean data model, role-scoped access, embedded reporting on PostgreSQL views) ship directly into a drayage CRM or a boutique-hotel ops platform.",
        faqs: [
            { q: "Can you build software for tour and charter operators in the historic district?", a: "Yes — bookings, deposits, waivers, and customer comms in one app, plus reporting that doesn't require a Tableau license." },
            { q: "Do you support port-adjacent logistics integrations and EDI?", a: "Yes. We have shipped EDI, freight APIs, and ops dashboards into CRM data layers — drayage scheduling and container tracking are in scope." },
            { q: "Are you available for on-site Savannah visits?", a: "Yes. We drive down I-16 for kickoffs and reviews — same-state, no out-of-market handoff." },
        ],
        siblings: [
            { slug: "macon-ga", city: "Macon, GA", desc: "Our HQ — Middle Georgia coverage." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Atlanta logistics and fintech CRMs." },
        ],
    },
    "miami-fl": {
        slug: "miami-fl",
        city: "Miami",
        state: "FL",
        stateFull: "Florida",
        headline: "Custom CRM Development in Miami, FL",
        intro: "Miami has quietly become one of the most interesting CRM markets in the country — bilingual products, multi-currency billing, LATAM-facing fintechs, and a hospitality sector from Brickell through South Beach that runs on a mess of vertical SaaS. Off-the-shelf CRMs get the language wrong, the currency wrong, or the timezone wrong, and the workaround usually costs more than building the right thing.",
        angle: "LATAM-facing bilingual multi-currency CRMs",
        modules: [
            { title: "Bilingual ES/EN UI from day one", desc: "i18n is baked into our Next.js builds — your AE in Doral and your customer in São Paulo see the same record in their language." },
            { title: "Multi-currency Stripe", desc: "USD, BRL, MXN, COP, ARS handled correctly — including edge cases around presentment vs settlement currency that off-the-shelf billing tools fumble." },
            { title: "LATAM payment routing logic", desc: "Stripe by default, with awareness of where local processors (PIX, OXXO, MercadoPago) beat Stripe on conversion." },
            { title: "Hospitality + booking CRM modules", desc: "Hotel, restaurant, and event-group records with deposit, deposit-forfeit, and folio handling that Mews and Cloudbeds don't quite get right." },
        ],
        caseStudyParagraph: "Miami-relevant reference builds in our portfolio span operations platforms (J5 Sales OS for sales operations, UEhub for education workflows) and bilingual-friendly content sites (ProtectWithBri, Aaron Coleman Music). Same architecture pattern: Next.js front, PostgreSQL source of truth, Stripe-driven entitlement, role-scoped access, i18n by default. Production-grade from day one, sized to a Miami founder's cash flow.",
        faqs: [
            { q: "Can you ship a Spanish-language CRM UI?", a: "Yes — i18n is standard in our Next.js builds, with ES/EN switchable per user and date/currency/timezone formatting handled correctly." },
            { q: "Do you handle LATAM payments correctly?", a: "Stripe is our default and we model multi-currency correctly. We also know the limitations and will tell you straight when local processors (PIX, OXXO) beat Stripe on a given market." },
            { q: "Are you available for on-site work in Miami?", a: "Yes, for engagements that warrant travel. Most discovery runs remotely with full ET overlap from our Georgia HQ." },
        ],
        siblings: [
            { slug: "new-york-ny", city: "New York, NY", desc: "Vertical fintech and agency CRMs." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech CRMs." },
        ],
    },
    "austin-tx": {
        slug: "austin-tx",
        city: "Austin",
        state: "TX",
        stateFull: "Texas",
        headline: "Custom CRM Development in Austin, TX",
        intro: "Austin is a founder town. The SaaS pipeline along MoPac, the venture money that followed Tesla and Oracle, the East Austin coffee shop full of pre-seed builders — they share one specific problem: they need a CRM that grows with the product and doesn't lock them into HubSpot Sales Hub Enterprise the moment they hit Series A. We build the CRM that ships with the MVP and scales with the company.",
        angle: "SaaS startup MVP CRMs",
        modules: [
            { title: "MVP-grade pipeline + customer record", desc: "What investors want to see in week one — clean data model, real reporting, no vapor demoware." },
            { title: "Self-serve + sales-assisted hybrid", desc: "Product-led growth signals (sign-up, activation, expansion) joined to the SDR queue so the AE sees PQL state, not a dead lead list." },
            { title: "Stripe Billing + usage-based pricing CRM hooks", desc: "Plan, seats, usage, and dunning state visible on the customer record without exporting a CSV." },
            { title: "Postgres-native reporting", desc: "Founder-readable dashboards on SQL views — no Looker license, no Tableau seat, no 'ask data team' tickets." },
        ],
        caseStudyParagraph: "J5 Sales OS is our reference SaaS-founder build — a sales operations platform with contact deduplication, outreach presets, dual-mode lead flow, and embedded reporting. We dogfooded the platform on our own sales motion before shipping the pattern. Same architecture works for an Austin pre-seed building a CRM-first product, a Series-A SaaS shifting from HubSpot to in-house, or a bootstrapped founder who just wants the thing to work.",
        faqs: [
            { q: "Will you work with pre-seed Austin founders?", a: "Yes — most of our SaaS engagements are pre-seed through Series A. We size the build to your actual runway, not a notional enterprise price." },
            { q: "Can the CRM grow into a product-led growth motion?", a: "Yes. We model self-serve signups, activation events, and expansion signals alongside the traditional pipeline from day one — no rip-and-replace at scale." },
            { q: "Do you have East Coast or Central time overlap?", a: "Georgia HQ — full ET overlap, which lines up cleanly with Austin's CT working hours. Most calls land 9-3 CT." },
        ],
        siblings: [
            { slug: "dallas-tx", city: "Dallas, TX", desc: "Enterprise IT CRMs replacing legacy." },
            { slug: "san-francisco-ca", city: "San Francisco, CA", desc: "Senior-engineering SaaS CRMs." },
        ],
    },
    "dallas-tx": {
        slug: "dallas-tx",
        city: "Dallas",
        state: "TX",
        stateFull: "Texas",
        headline: "Custom CRM Development in Dallas, TX",
        intro: "DFW is a corporate IT and supply-chain heavyweight — Fortune 500 headquarters, a massive logistics base, and a deep pool of mid-market companies running CRMs that were custom-built in 2008 and have not aged well. The Big Four wants to replace them with Salesforce at enterprise pricing. The freelance market is too thin to take on a forty-user internal tool. We sit in the gap.",
        angle: "enterprise IT CRMs replacing legacy",
        modules: [
            { title: "Legacy internal-CRM modernization", desc: "Replace fragile Access, Lotus Notes, or VB6 stacks with Next.js + PostgreSQL apps your team will actually use." },
            { title: "Logistics + freight customer records", desc: "DFW's freight density is real — we model load, lane, customer, and broker into one pipeline that consolidates legacy WMS feeds." },
            { title: "Procurement-ready documentation", desc: "Architecture diagrams, data-flow diagrams, SBOM-style summaries — what your IT leadership and audit team actually want to see." },
            { title: "Fixed-scope CRM modernization", desc: "Quoted up front, delivered against milestones. No T&M creep, no rolling change-order theater." },
        ],
        caseStudyParagraph: "Production builds in our portfolio span operations platforms (J5 Sales OS for sales operations, UEhub for education workflows) and trade-side CRM patterns (Bridgepointe Painting for Stripe-to-QuickBooks invoice flow, Northcrest Fence for contractor lead routing). Same architecture pattern translates into a DFW mid-market modernization project: clean data model, role-scoped access, audit trails, and reporting on PostgreSQL views.",
        faqs: [
            { q: "Can you modernize our existing internal CRM instead of rebuilding from scratch?", a: "Often yes — we do an assessment first. If the data model is sound and the UI is the problem, we rewrite the front and keep the schema. If both are broken, a clean rebuild is usually cheaper than another round of patches." },
            { q: "Do you bill fixed scope or T&M?", a: "Fixed scope on most engagements. T&M only on open-ended R&D or live-incident response work where scope can't be defined." },
            { q: "How do you handle a fifty-user internal rollout?", a: "Phased — a usable v1 to one team in 8 weeks, then expansion. We train on real records during rollout and run a parallel period before sunset of the legacy tool." },
        ],
        siblings: [
            { slug: "austin-tx", city: "Austin, TX", desc: "SaaS startup MVP CRMs." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech and logistics CRMs." },
        ],
    },
    "chicago-il": {
        slug: "chicago-il",
        city: "Chicago",
        state: "IL",
        stateFull: "Illinois",
        headline: "Custom CRM Development in Chicago, IL",
        intro: "Chicago's economy is unusually rich for CRM demand: the trading and proprietary-finance ecosystem around the CBOT and CME, the rail-and-truck logistics hub that moves the Midwest, and a deep manufacturing base across the collar counties. Each of these markets needs a CRM that mirrors how the actual business runs — broker relationships, freight lanes, jobsite progress — and almost none of them get one off the shelf.",
        angle: "trading-desk and logistics CRMs",
        modules: [
            { title: "Trading-desk relationship CRM", desc: "Counterparty, broker, and venue records joined to position, exposure, and conversation history — the actual data a desk uses, not a generic Salesforce object model." },
            { title: "Freight + logistics pipeline", desc: "Load, lane, customer, and dispatcher visibility consolidated from legacy TMS and WMS feeds into one record." },
            { title: "Manufacturing + jobsite CRM", desc: "Quote-to-job-to-invoice for collar-county manufacturers and trades, with materials tracking and Stripe-driven progress billing." },
            { title: "Algorithmic ops integration", desc: "We build trading bots — we know how to wire P/L, fill, and slippage data into a CRM-style operator view." },
        ],
        caseStudyParagraph: "Our Chicago-relevant capability includes algorithmic trading systems, ops dashboards, and operations platforms — J5 Sales OS for sales operations, plus reference work in algorithmic trading bot development on TypeScript/Node integrated with broker APIs (IBKR, Alpaca, Tradier). Same data architecture supports a trading-desk CRM, a freight broker pipeline, or a Schaumburg manufacturer's quote-to-cash flow without forcing the team into a vertical SaaS that nearly fits.",
        faqs: [
            { q: "Do you build CRMs for prop trading desks or only retail?", a: "Both. Counterparty-and-broker relationship CRMs for desks are a real niche; we have algorithmic-trading capability and ops dashboard experience that translates directly." },
            { q: "Can a CRM consolidate our legacy TMS and WMS feeds?", a: "Yes — that's the standard pattern for Chicago logistics clients. Loads, lanes, and customers join into one record on the CRM side; the legacy systems keep running on their own schedule." },
            { q: "Do you fly in for kickoffs?", a: "For engagements that warrant it, yes. Most discovery runs remotely with full Central-time overlap from our Georgia HQ." },
        ],
        siblings: [
            { slug: "new-york-ny", city: "New York, NY", desc: "Vertical finance and agency CRMs." },
            { slug: "dallas-tx", city: "Dallas, TX", desc: "Enterprise IT and logistics CRMs." },
        ],
    },
    "seattle-wa": {
        slug: "seattle-wa",
        city: "Seattle",
        state: "WA",
        stateFull: "Washington",
        headline: "Custom CRM Development in Seattle, WA",
        intro: "Seattle is anchored by Amazon and Microsoft, surrounded by a fast-moving SaaS and dev-tools ecosystem, and threaded through with a steady current of bootstrapped indie SaaS founders. Most companies here speak fluent cloud — what they want from a CRM is a Docker-native, cloud-portable, API-first system that doesn't fight their stack. Off-the-shelf CRMs get the integration story wrong almost every time.",
        angle: "dev-tools and cloud-native CRMs",
        modules: [
            { title: "Docker-native deployment", desc: "Container-first builds that drop into AWS, GCP, Azure, or your own Kubernetes without theater." },
            { title: "API-first customer records", desc: "Every CRM action is a documented REST or GraphQL endpoint — your dev tools and SaaS product talk to it like a peer service, not a black box." },
            { title: "Stripe + usage-based billing CRM hooks", desc: "Plan, meter, dunning, and license state visible on the customer record. Built for developer-tool pricing models that HubSpot won't model." },
            { title: "Single-sign-on + IAM-grade access", desc: "OIDC, SAML, fine-grained RBAC. Your security review team sees what they expect to see." },
        ],
        caseStudyParagraph: "Our Seattle-relevant reference work includes SaaS operations platforms (J5 Sales OS, UEhub) and developer-tool patterns we ship across the portfolio — Docker-native deploys, OpenAPI-documented endpoints, Stripe metering, Postgres-native reporting. The architecture meets what a Seattle-grade engineering reviewer expects: TypeScript, Postgres, Docker, signed-token authentication, audit trails, and clean API surfaces — not vendor lock-in.",
        faqs: [
            { q: "Will the CRM deploy cleanly to AWS or our own Kubernetes?", a: "Yes. Docker-native by default, cloud-portable, and we'll hand you the Terraform or Helm chart at delivery." },
            { q: "Can the CRM be queried by our SaaS product as a peer service?", a: "Yes — every action is a documented endpoint with stable auth. Your product and your sales team look at the same data through different surfaces." },
            { q: "Time-zone overlap with Pacific?", a: "Comfortable working morning through early afternoon Pacific from a Georgia HQ. Async-first for the rest." },
        ],
        siblings: [
            { slug: "san-francisco-ca", city: "San Francisco, CA", desc: "Senior-engineering SaaS CRMs." },
            { slug: "austin-tx", city: "Austin, TX", desc: "Startup MVP CRMs." },
        ],
    },
    "new-york-ny": {
        slug: "new-york-ny",
        city: "New York",
        state: "NY",
        stateFull: "New York",
        headline: "Custom CRM Development in New York, NY",
        intro: "New York is the toughest CRM buyer's market in the country — fintech, ad-tech, agency holding companies, hedge funds, and a relentless stream of SaaS founders. Everyone has been burned by Salesforce. Everyone has tried HubSpot, Pipedrive, and Affinity. The pattern that survives is a vertical CRM modeled on the specific workflow — pitch process, deal IC, fund administration, client engagement — and built by someone who can actually ship.",
        angle: "vertical CRMs for finance and agency operations",
        modules: [
            { title: "Agency client + project CRMs", desc: "Client, campaign, retainer, and deliverable records joined into one pipeline that survives a CMO change without losing context." },
            { title: "Fund-administration-aware deal CRMs", desc: "Pipeline, deal IC, capital call, and LP communication records modeled into one schema — built for the actual workflow of a small fund or family office." },
            { title: "Ad-tech revenue ops", desc: "Insertion order, campaign, and pacing data joined to AE and AM records, with reporting on PostgreSQL views your finance team can audit." },
            { title: "Procurement-ready architecture", desc: "Data-flow diagrams, SBOM-style summaries, and security artifacts that survive an institutional investor's due diligence packet." },
        ],
        caseStudyParagraph: "Reference work for NYC-style buyers spans operations platforms (J5 Sales OS for sales ops, UEhub for education ops), trade and brand sites (ProtectWithBri, Wilder Recovery, Northcrest Fence), and quantitative tooling. Same architecture pattern: clean Postgres schema, audit trails by default, role-scoped access, and reporting on SQL views. Every line is reviewed before it ships — which matters when the cost of a bug is a real eight-figure account.",
        faqs: [
            { q: "Can you support an institutional investor's due-diligence packet?", a: "Yes — pen test reports, architecture diagrams, and SBOM-style summaries are deliverables we ship on request. Same shop runs the security review and the CRM build." },
            { q: "Do you fly in for kickoffs and reviews?", a: "For engagements above a certain scope, yes. Otherwise full ET overlap from a Georgia HQ makes most reviews trivial to run remote." },
            { q: "Can you build for agency holding-company operations?", a: "Yes — client, campaign, retainer, and deliverable records modeled correctly. We have shipped operations platforms that work the same way at smaller scale." },
        ],
        siblings: [
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent compliance-aware CRMs." },
            { slug: "chicago-il", city: "Chicago, IL", desc: "Trading-desk and logistics CRMs." },
        ],
    },
    "charlotte-nc": {
        slug: "charlotte-nc",
        city: "Charlotte",
        state: "NC",
        stateFull: "North Carolina",
        headline: "Custom CRM Development in Charlotte, NC",
        intro: "Charlotte is the southeast's banking capital — Bank of America and Truist headquartered here, plus a fast-growing fintech and supplier ecosystem in Uptown and South End selling into the big banks. Every CRM in this market has to survive two reviews: an internal audit and a customer's vendor-risk assessment. Generic SaaS CRMs fail both routinely. We build for the regulated environment from day one.",
        angle: "banking-adjacent compliance-aware CRMs",
        modules: [
            { title: "Vendor-risk-ready architecture", desc: "Data-flow diagrams, access model, encryption-at-rest documentation, and audit logs that survive a BoA or Truist vendor-risk review." },
            { title: "Customer-record audit trails", desc: "User, action, before/after on every record. Drops directly into SOC 2 CC6.1 and CC7.2 evidence packs." },
            { title: "Stripe + bank-grade billing flows", desc: "Subscription and licensing state tied to entitlement, with reconciliation outputs your customer's audit team can pull." },
            { title: "Fintech-vendor CRM modules", desc: "Pipeline, deal IC, security-review state, and contract redline tracking — the actual workflow of a vendor selling into a regulated bank." },
        ],
        caseStudyParagraph: "Charlotte-relevant reference work includes J5 Sales OS (sales operations), ProtectWithBri (client-facing portal handling sensitive communications), and contractor-grade CRM patterns we ship into other regulated-adjacent markets — Northcrest Fence, Bridgepointe Painting. Same audit-trail and access-model discipline shows up across the portfolio because the same shop that runs the pen test writes the CRM code.",
        faqs: [
            { q: "Will the CRM survive a BoA or Truist vendor-risk review?", a: "Yes — we ship the data-flow, access-model, and encryption documentation procurement teams actually ask for, and produce a pen test report against the deployed system on request." },
            { q: "Do you understand the bank security-questionnaire game?", a: "Yes — same shop ships the CRM and runs the pen test. Threat modeling is in the SDLC, not added at the end." },
            { q: "Are you available for in-person Charlotte meetings?", a: "Yes — short drive up I-85 from the HQ. Kickoffs and major reviews on-site when scope warrants it." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech and logistics CRMs." },
            { slug: "nashville-tn", city: "Nashville, TN", desc: "Healthcare and music-tech CRMs." },
        ],
    },
    "nashville-tn": {
        slug: "nashville-tn",
        city: "Nashville",
        state: "TN",
        stateFull: "Tennessee",
        headline: "Custom CRM Development in Nashville, TN",
        intro: "Nashville's economy is anchored by two unusually large verticals: healthcare administration — HCA Healthcare plus a wide ecosystem of provider, payer, and admin tech companies — and music and entertainment tech around publishing, streaming, and royalty management. Add a maturing SaaS founder pool and a strong professional services base, and you have a city that punches well above its size for CRM demand. Off-the-shelf tools fit none of these workflows cleanly.",
        angle: "healthcare and music-tech royalty CRMs",
        modules: [
            { title: "Provider-facing healthcare CRMs", desc: "Scheduling, intake, and ops dashboards for healthcare-adjacent operators. PHI-touching builds scoped deliberately with BAA and HIPAA-aligned architecture." },
            { title: "Royalty and catalog CRMs", desc: "Catalog, writer, publisher, and recipient records joined to royalty statement and earnings data — the actual workflow of a music publisher or independent artist." },
            { title: "Payer + admin-tech vendor CRM", desc: "Pipeline, deal IC, contract redline, and HIPAA-vendor-review state for companies selling into HCA and the surrounding admin-tech ecosystem." },
            { title: "Audit-ready access logs", desc: "User, action, before/after captured on every record — drops into HIPAA risk-analysis documentation and vendor-review packets." },
        ],
        caseStudyParagraph: "Aaron Coleman Music is one of our published portfolio sites — a music-adjacent build that informs how we model catalog and royalty data for Nashville music-tech operators. Broader reference work includes UEhub (education platform with provider-facing workflows), Wilder Recovery (recovery-services platform with audit-aware records), and J5 Sales OS (sales operations). Same patterns ship into a healthcare admin-tech CRM or a music publisher's royalty system.",
        faqs: [
            { q: "Do you build software that touches PHI?", a: "Case-by-case. We scope BAA and HIPAA-aligned engagements deliberately — not casually. The pen test team that ships the threat model also reviews the build." },
            { q: "Can you build royalty or catalog management tools?", a: "Yes — custom platforms for music publishers and independent artists are in scope. Catalog, writer, publisher, and statement modeling is doable cleanly in Postgres." },
            { q: "Are you available for on-site work in Nashville?", a: "Yes, for engagements that warrant it. Short drive up I-24 from the HQ." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech and logistics CRMs." },
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent compliance-aware CRMs." },
        ],
    },
    "san-francisco-ca": {
        slug: "san-francisco-ca",
        city: "San Francisco",
        state: "CA",
        stateFull: "California",
        headline: "Custom CRM Development in San Francisco, CA",
        intro: "San Francisco is the most technical CRM buyer market in the country. Every founder is one degree of separation from a senior engineer, every CTO has built the thing before, and contract pitches that lean on agency theater die fast on the technical screen. What survives is genuine senior engineering, clean schema, and the ability to ship. That is the entire pitch behind a custom CRM build in the Bay.",
        angle: "peer-credible senior-engineering CRMs",
        modules: [
            { title: "Senior-quality data model", desc: "Postgres schema designed for the actual workflow — not a Salesforce object model translated into JSON." },
            { title: "Code that reviews well", desc: "TypeScript, Server Components done correctly, audit trails, idempotent webhooks. Your CTO can grep it and not wince." },
            { title: "Stripe + entitlement architecture", desc: "Subscription state drives entitlement. License-server-grade activation when needed. We have shipped both." },
            { title: "Algorithmic-ops integration", desc: "We build trading bots — we know how to wire low-latency P/L, fill, or product-event data into a CRM-style operator view." },
        ],
        caseStudyParagraph: "Bay-relevant reference work spans operations platforms (J5 Sales OS for sales operations, UEhub for education workflows), trading systems (algorithmic bot development on TypeScript/Node integrated with broker APIs), and trade brands we ship Next.js sites for (HobbsPeak, ProtectWithBri). The technical bake-off works in our favor — we'll do a code walk-through or live architecture session before a contract closes if that's what gets a Bay technical buyer comfortable.",
        faqs: [
            { q: "Can you handle a technical bake-off against in-house engineers?", a: "Yes. Code samples, architecture walk-through, and a live whiteboard on request. We assume your CTO is going to read the code." },
            { q: "Do you build CRMs for quant-adjacent operators?", a: "Yes — trading-desk relationship CRMs and ops dashboards. Same shop builds algorithmic trading systems, so the integration story is real." },
            { q: "Time-zone overlap with Pacific?", a: "Comfortable working morning through early afternoon Pacific from a Georgia HQ. Async-first for the rest of the day." },
        ],
        siblings: [
            { slug: "seattle-wa", city: "Seattle, WA", desc: "Dev-tools and cloud-native CRMs." },
            { slug: "austin-tx", city: "Austin, TX", desc: "SaaS startup MVP CRMs." },
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
    if (!config) return { title: "Custom CRM Development | QUANT LAB USA" };

    const title = `Custom CRM Development in ${config.city}, ${config.state} | QUANT LAB USA`;
    const description = `Custom CRM software built for ${config.city} businesses tired of Salesforce/HubSpot bloat. From discovery to launch in 8-16 weeks. Founder-led.`;
    const url = `https://quantlabusa.dev/services/custom-crm-development/${config.slug}`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: "article",
        },
        twitter: {
            card: "summary",
            title,
            description,
        },
    };
}

export default async function CustomCRMCityPage({
    params,
}: {
    params: Promise<{ city: string }>;
}) {
    const { city } = await params;
    const config = CITIES[city];
    if (!config) notFound();

    const url = `https://quantlabusa.dev/services/custom-crm-development/${config.slug}`;

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Custom CRM Development",
        name: `Custom CRM Development in ${config.city}, ${config.state}`,
        provider: { "@id": "https://quantlabusa.dev/#org" },
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
        description: `Custom CRM software development for ${config.city}, ${config.stateFull} businesses — Next.js + PostgreSQL builds replacing HubSpot, Salesforce, and Pipedrive. Founder-led delivery, 8 to 16 week timelines, full source-code ownership.`,
        url,
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
                name: "Custom CRM Development",
                item: "https://quantlabusa.dev/services/custom-crm-development",
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-500">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li>
                            <Link href="/services/custom-crm-development" className="hover:text-sky-400 transition-colors">
                                Custom CRM Development
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">{config.city}, {config.state}</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Terminal className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        {config.headline}
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        {config.intro}
                    </p>
                    <ConsultationCTA label={`Scope a ${config.city} CRM Build`} />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        The problem with off-the-shelf CRMs in {config.city}
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Off-the-shelf CRMs force your team to work the software's way. Custom fields fill up. Workflows get bolted on. Your reps stop logging activity because the tool is in their way. Meanwhile your AE pulls deals into a spreadsheet, your operations lead manages a parallel Notion board, and your founder still can't get a clean revenue forecast.
                        </p>
                        <p>
                            A custom CRM puts the database schema, the UI, and the automation layer around how you actually sell. No Salesforce object-model tax. No per-seat ratchet. No vendor-defined report types when the report you need is one SQL view away. For {config.city} operators specifically, that means a CRM modeled on {config.angle} — not a generic template.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        What we build for {config.city} companies
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
                            "PostgreSQL",
                            "Prisma",
                            "Node API layer",
                            "Stripe",
                            "QuickBooks API",
                            "Twilio / SMTP",
                            "Docker",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Hosted on Vercel, AWS, or your own infrastructure. PostgreSQL is the source of truth for everything; the rest of the stack defers to it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference builds</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{config.caseStudyParagraph}</p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Full source code repository (yours, no lock-in)",
                            "Production deployment + staging environment",
                            "Admin and user documentation",
                            "30-day post-launch support included",
                            "Data migration from your existing CRM or spreadsheets",
                            "Integrations with Stripe, QuickBooks, Gmail, Calendar, Slack, Twilio as scoped",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{config.city} CRM FAQ</h2>
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
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Wire billing into the CRM record from day one." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Beyond the CRM — ops dashboards, internal tools, ERP." },
                            { slug: "web-applications", title: "Next.js Development", desc: "Same stack, broader scope — portals, dashboards, SaaS." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
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
                                href={`/services/custom-crm-development/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-sky-400" />
                                        <h3 className="text-white font-semibold">{s.city}</h3>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Stop fighting your CRM in {config.city}.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at (770) 652-1282 or book a 20-minute scope call to walk through your sales process. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label={`Book a ${config.city} Scope Call`} />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
