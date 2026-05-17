import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Smartphone, Check, ArrowRight, MapPin } from "lucide-react";
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
        angle: "field-crew and patient-facing mobile apps",
        intro: "Middle Georgia operators are not building consumer-grade social apps — they need mobile tools that work in a truck cab in Houston County, on a hospital floor in Bibb, or on a job site outside Warner Robins. That kind of app rarely needs the App Store's marketing apparatus; it needs to be fast, offline-tolerant, and shipped by someone who understands the operational context.",
        problem: "Most off-the-shelf mobile builders push a consumer template that does not survive contact with a real Macon trade or clinic operation. Either the app is too heavy to load on the older Android handsets your field crews actually use, or it locks you into a vendor's backend that you can never migrate off. Custom mobile development closes that gap.",
        modules: [
            { title: "Field crew + jobsite apps", desc: "Offline-tolerant React Native builds for the trades — job notes, photos, signatures, and time clocks that sync the moment a crew gets back into 5G coverage." },
            { title: "Patient-facing healthcare companions", desc: "HIPAA-aligned scoping for Macon-area providers — appointment reminders, intake forms, and secure messaging, sized to a single-practice clinic budget." },
            { title: "Manufacturing line + warehouse apps", desc: "Barcode and QR-scan-driven mobile tools for plant-floor traceability across Middle Georgia manufacturers." },
            { title: "Native iOS and Android when you need it", desc: "Swift and Kotlin for hardware-deep features — Bluetooth peripherals, CarPlay, push-to-talk — when React Native is the wrong tool." },
        ],
        caseStudyParagraph: "Mobile-relevant reference builds in our portfolio include Northcrest Fence (a contractor proposal portal where field-side mobile capture is part of the workflow), Bridgepointe Painting (a Stripe-driven invoice and deposit flow that field crews trigger from the truck), and our own contractor estimating engine that auto-creates CRM leads from a mobile-first form. The same shop ships the backend, the API, and the mobile client — no agency handoff.",
        pricingNote: "Macon mobile builds typically scope between $30,000 and $75,000 for a single-platform MVP with backend, with most clients on a fixed-fee per-phase model. Smaller utility apps for trades and clinics often land under $40,000.",
        faqs: [
            { q: "Do you meet with Macon clients in person?", a: "Yes. QUANT LAB USA is headquartered in Macon. On-site kickoffs across Bibb, Houston, Jones, and Monroe counties are standard — no travel premium." },
            { q: "Can the app work without service on a job site?", a: "Yes. Offline-first is a default pattern for our field-crew builds — local SQLite or AsyncStorage with background sync the moment the device reconnects." },
            { q: "Do you handle the App Store and Play Console submission?", a: "Yes. We ship the app under your developer account, handle review responses, and stay on for the typical 1-3 review cycles before approval." },
            { q: "Will the app integrate with our existing QuickBooks or CRM?", a: "Yes. We wire the mobile client to the same Postgres source of truth as your back-office tools — invoices, customers, and jobs stay consistent across desktop and mobile." },
            { q: "React Native or native iOS/Android for a Macon trades app?", a: "React Native by default — faster to ship, one codebase. We pick native only when a specific hardware feature (deep Bluetooth, CarPlay, Android Auto, HealthKit) actually demands it." },
            { q: "Who owns the source code?", a: "You do. Full repository handoff at delivery — no vendor lock-in, no per-seat fees, no platform tax." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Fintech and logistics mobile builds up I-75." },
            { slug: "augusta-ga", city: "Augusta, GA", desc: "Defense-adjacent and CSRA SMB mobile apps." },
        ],
    },
    "atlanta-ga": {
        slug: "atlanta-ga",
        city: "Atlanta",
        state: "GA",
        stateFull: "Georgia",
        angle: "fintech, logistics, and film-tech mobile apps",
        intro: "Atlanta's mobile market is shaped by three big industries: Transaction Alley fintech operators who need payments-grade mobile clients, the freight and logistics base that needs driver and dispatcher apps that survive a rough warehouse, and a growing film and entertainment-tech scene around Tyler Perry Studios and Trilith. Each of those buyers needs a mobile partner who can hold up to a CTO's code review.",
        problem: "The Atlanta agency ecosystem will happily ship you a $250,000 mobile app on a fixed promise that never quite gets to production. Or you can hire offshore for a fraction and inherit a codebase your in-house team cannot maintain. The middle path — senior-engineering, fixed-scope, full-source-handoff — is rare. That is the gap we sit in.",
        modules: [
            { title: "Stripe-native mobile payments", desc: "Apple Pay, Google Pay, Stripe Connect onboarding, and ACH flows inside a React Native or native client. Transaction Alley clients expect this on day one." },
            { title: "Driver + dispatcher logistics apps", desc: "Load assignment, route, POD capture, and signature workflows for the Atlanta freight base — offline-tolerant by default." },
            { title: "Film and entertainment ops apps", desc: "Production-day apps for crew comms, call sheets, and on-set approvals — built for the studio operations base." },
            { title: "SOC 2-aware audit trails", desc: "User, action, before/after captured on every mobile event. Drops directly into a CC6.1 evidence pack." },
        ],
        caseStudyParagraph: "Atlanta-relevant reference work spans J5 Sales OS (a sales operations platform whose mobile surface lets AEs work pipeline from the road), Bridgepointe Painting (Stripe-driven invoice and deposit flow), and our algorithmic trading systems work (TypeScript/Node broker integrations whose mobile dashboards run on the same architecture). Same data layer drives a fintech mobile client, a logistics driver app, or a film ops tool.",
        pricingNote: "Atlanta mobile engagements typically scope between $45,000 and $120,000 for a production-grade MVP with backend, with fintech and payments-heavy clients on the higher end. Fixed-fee per-phase delivery, milestone-based.",
        faqs: [
            { q: "Will the mobile app survive a Buckhead enterprise procurement review?", a: "Yes. We document architecture, ship audit trails by default, and produce the security artifacts (data flow, access model, encryption posture) procurement teams actually ask for." },
            { q: "Do you understand Stripe Connect and mobile payments?", a: "Yes — Stripe is a core practice. We have shipped Stripe Connect onboarding, ACH, and Apple Pay / Google Pay flows inside mobile clients for Transaction Alley clients." },
            { q: "Can you handle a SOC 2 Type II audit on a mobile codebase?", a: "Yes. Same shop runs the pen test and writes the code — audit logging, access scoping, and evidence-ready documentation are in the SDLC from day one." },
            { q: "Will you bake-off against an in-house Atlanta engineering team?", a: "Yes. Code samples, architecture walk-through, and a live whiteboard on request. We assume your CTO is going to read the React Native source." },
            { q: "Do you support iOS and Android from one codebase?", a: "Default React Native — one codebase, both platforms. Native Swift or Kotlin only when a specific feature demands it." },
            { q: "Are you available for on-site Atlanta meetings?", a: "Yes. Short drive up I-75 from the HQ. Kickoffs and major reviews on-site when scope warrants it." },
        ],
        siblings: [
            { slug: "macon-ga", city: "Macon, GA", desc: "Our HQ — Middle Georgia mobile builds." },
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent compliance-aware mobile." },
        ],
    },
    "augusta-ga": {
        slug: "augusta-ga",
        city: "Augusta",
        state: "GA",
        stateFull: "Georgia",
        angle: "defense-adjacent and CSRA SMB mobile apps",
        intro: "Augusta's mobile landscape splits between the Fort Eisenhower cyber corridor — vendors selling tools into defense-adjacent customers — and the medical, legal, and contracting base running the rest of the CSRA economy. The mobile apps these operators need do not look like Atlanta consumer apps; they need to survive a vendor risk review or a HIPAA-aligned architecture conversation.",
        problem: "Most mobile shops are either too consumer-focused to take security seriously, or too expensive to scale down for a small Augusta medical practice. Augusta SMB mobile work needs a partner who treats security as a first-class concern from day one and can still size the budget for a single-practice clinic or a small contractor.",
        modules: [
            { title: "Audit-friendly mobile architecture", desc: "User-level access logs, action history, and exportable evidence packs for a federal supply-chain customer review." },
            { title: "Provider-facing healthcare mobile", desc: "HIPAA-aligned scoping for Augusta providers around Doctor's Hospital and AU Medical Center — intake, scheduling, and secure messaging." },
            { title: "Government-contracting field tools", desc: "Offline-tolerant capture for vendors with SAM.gov-registered contracts — opportunity tracking, capture, and B&P workflows on mobile." },
            { title: "Security-aware mobile SDLC", desc: "Same shop that runs the pen tests writes the mobile code — threat modeling is in the process, not bolted on after the App Store review." },
        ],
        caseStudyParagraph: "Augusta-relevant work crosses into our cybersecurity practice — penetration testing reports formatted for federal supply-chain and SOC 2 review, with the same threat-modeling discipline showing up in our mobile builds. ProtectWithBri (a client-facing portal handling sensitive communications) is one published reference; mobile patterns we ship include audit logging, role-scoped record access, and signed-token activation that hold up to a real security review.",
        pricingNote: "Augusta mobile engagements typically scope between $30,000 and $90,000 — small clinic or contractor apps land near the bottom of that range, while federally-reviewable builds with formal security documentation land near the top.",
        faqs: [
            { q: "Can you produce a mobile build that passes a federal prime's vendor review?", a: "Yes. We ship security artifacts (data flow, access model, encryption-at-rest documentation) and produce a pen test report against the deployed mobile + backend system on request." },
            { q: "Do you work with medical practices around Doctor's Hospital and AU Medical Center?", a: "Yes — provider-facing mobile for scheduling, intake, and ops is in scope. PHI-touching builds scoped deliberately with BAA and HIPAA-aligned architecture." },
            { q: "Are you available for on-site work in Augusta?", a: "Yes. We are a short drive up I-20 from the HQ and travel into Augusta for kickoff and review sessions when scope warrants it." },
            { q: "Will you handle the App Store and Play Console submission?", a: "Yes. We ship under your developer account, handle review responses, and stay on for the typical 1-3 review cycles before approval." },
            { q: "Can the app work in an air-gapped or restricted-connectivity environment?", a: "Yes. Offline-first is standard for our field-tool builds, and we can scope mobile clients that operate against a fully-on-prem backend when the customer environment demands it." },
            { q: "Who owns the source code?", a: "You do. Full repository handoff at delivery — no vendor lock-in, no platform fees." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Fintech and logistics mobile builds." },
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent compliance-aware mobile." },
        ],
    },
    "columbus-ga": {
        slug: "columbus-ga",
        city: "Columbus",
        state: "GA",
        stateFull: "Georgia",
        angle: "Chattahoochee Valley manufacturing and trades mobile",
        intro: "The Chattahoochee Valley business base — Fort Moore's defense-adjacent contractors, family-owned manufacturers, and the trades on both sides of the river — runs on a mobile stack two generations behind their Atlanta peers. The mobile apps these operators actually use are vertical SaaS clients that nearly fit, with a workaround spreadsheet for the parts that do not. A custom mobile client closes that gap without enterprise pricing.",
        problem: "Generic field-services SaaS makes you contort your jobsite workflow to fit their schema. Custom mobile lets you keep your existing process and put a thin, fast, offline-tolerant client on top of it — the kind of build that a Columbus or Phenix City crew lead will actually use instead of fighting.",
        modules: [
            { title: "Manufacturing + plant-floor mobile", desc: "Barcode scan, traceability, and shift handoff for the Columbus manufacturing base — works on the older Android handsets your floor team already carries." },
            { title: "Trades + jobsite mobile", desc: "Quote-to-job-to-invoice from the truck, photo capture, signed estimates, and Stripe-driven progress billing." },
            { title: "Cross-state Alabama coverage", desc: "Phenix City and the Alabama side of the river are first-class — same data model, no edge cases on customer record geography." },
            { title: "QuickBooks Online sync", desc: "Customer, invoice, payment, and deposit flow between mobile capture and your back office without rekeying." },
        ],
        caseStudyParagraph: "Reference builds for Columbus-relevant work include Northcrest Fence (a contractor proposal portal whose mobile capture surface drives lead-to-quote flow), Bridgepointe Painting (a Stripe-to-QuickBooks invoice sync), and our contractor estimating engine. The same architecture pattern ships into a Phenix City manufacturer's plant-floor mobile app or a Columbus trades crew's jobsite tool.",
        pricingNote: "Columbus mobile builds typically scope between $30,000 and $70,000 for a single-platform MVP with backend, with most clients on fixed-fee per-phase delivery. Manufacturing line apps with hardware integration scope higher.",
        faqs: [
            { q: "Do you serve operators on the Alabama side of the Chattahoochee?", a: "Yes. Phenix City and the broader Alabama metro are first-class — we model state-tax differences, route assignment, and customer-record geography from day one." },
            { q: "Can the app work on older Android handsets our crew already carries?", a: "Yes. We target a low minimum API level on Android by default and test on real hardware, not just emulators. React Native plus a lean native bridge handles most field cases." },
            { q: "How long until our team is actually using the new app?", a: "Typical Columbus engagement ships a usable v1 in 8 to 10 weeks, with the full feature set in 12 to 16. We train on real jobsite scenarios during rollout." },
            { q: "Will you integrate with our QuickBooks Online?", a: "Yes — invoices, customers, payments, and deposits flow without rekeying. Month-end closes in minutes." },
            { q: "Are you available for on-site work in Columbus?", a: "Yes. Short drive down I-185 from the HQ. Kickoffs and rollout work on-site when scope warrants it." },
            { q: "Who owns the source code?", a: "You do. Full repository handoff at delivery." },
        ],
        siblings: [
            { slug: "macon-ga", city: "Macon, GA", desc: "Our HQ — Middle Georgia coverage." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market Atlanta mobile builds." },
        ],
    },
    "savannah-ga": {
        slug: "savannah-ga",
        city: "Savannah",
        state: "GA",
        stateFull: "Georgia",
        angle: "port-logistics and hospitality mobile",
        intro: "Savannah's mobile demand splits cleanly into the Port of Savannah and its drayage and 3PL ecosystem, the deep hospitality and tourism economy in the historic district, and a growing creative founder base around SCAD. Each of those buyers needs a mobile partner who can ship a real production app — not a Bubble prototype, not an offshore handoff.",
        problem: "Drayage and tour operators usually get pushed into vertical SaaS that nearly fits the workflow but never quite gets there. The mobile clients these vendors ship are heavy, slow on older handsets, and lock the operator into a contract with a vendor that does not understand the Savannah business cycle. Custom mobile fixes that.",
        modules: [
            { title: "Drayage and 3PL driver apps", desc: "Container, load, and POD capture in a mobile client that joins your dispatcher and your salesperson on the same record." },
            { title: "Hospitality + tour-operator mobile", desc: "Bookings, deposits, waivers, and customer comms in one app for boutique hotels, tour operators, and event venues across Chatham County." },
            { title: "SCAD-founder MVP builds", desc: "Pre-seed and bootstrapped mobile MVPs at a price point real Savannah founders can stomach — React Native, Stripe, Postgres." },
            { title: "Port-adjacent EDI + freight APIs", desc: "TMS feeds, AES filings, and freight-API integrations modeled into the mobile data layer." },
        ],
        caseStudyParagraph: "Savannah-relevant work includes UEhub (an education platform with mobile-first workflows), Wilder Recovery (a recovery-services platform with audit-aware records and mobile surfaces), and Aaron Coleman Music (a content-driven build whose mobile experience runs on the same Next.js + Postgres stack). Same patterns ship into a drayage driver app or a boutique-hotel ops platform.",
        pricingNote: "Savannah mobile engagements typically scope between $30,000 and $80,000 for a production-grade MVP. Tour-operator and boutique-hotel apps land at the bottom of that range; freight-integrated drayage builds land at the top.",
        faqs: [
            { q: "Can you build mobile for tour and charter operators in the historic district?", a: "Yes — bookings, deposits, waivers, and customer comms in one app, plus reporting that does not require a Tableau license." },
            { q: "Do you support port-adjacent logistics integrations and EDI?", a: "Yes. We have shipped EDI, freight APIs, and ops dashboards into mobile data layers — drayage scheduling and container tracking are in scope." },
            { q: "Are you available for on-site Savannah visits?", a: "Yes. We drive down I-16 for kickoffs and reviews — same-state, no out-of-market handoff." },
            { q: "Can you ship a mobile MVP at a pre-seed budget for a SCAD founder?", a: "Yes. We size the build to your actual runway, not a notional enterprise price. Fixed-scope, milestone-based." },
            { q: "Will the app work without service inside a steel warehouse or shipping container yard?", a: "Yes. Offline-first is a default pattern for our logistics and field builds." },
            { q: "Who owns the source code?", a: "You do. Full repository handoff at delivery." },
        ],
        siblings: [
            { slug: "macon-ga", city: "Macon, GA", desc: "Our HQ — Middle Georgia coverage." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Atlanta logistics and fintech mobile." },
        ],
    },
    "miami-fl": {
        slug: "miami-fl",
        city: "Miami",
        state: "FL",
        stateFull: "Florida",
        angle: "LATAM-facing bilingual multi-currency mobile",
        intro: "Miami is one of the most interesting mobile markets in the country — bilingual products, multi-currency billing, LATAM-facing fintechs, and a hospitality sector from Brickell through South Beach that runs on a mess of vertical SaaS. Off-the-shelf mobile templates get the language wrong, the currency wrong, or the payments-routing wrong, and the workaround usually costs more than building the right thing.",
        problem: "Most mobile shops bolt Spanish on at the end. The language switches mid-flow, the currency formatting breaks, and the payment routing assumes a US-only buyer. Miami mobile demands i18n, multi-currency, and an actual understanding of LATAM payment behavior — none of which a generic mobile agency builds in.",
        modules: [
            { title: "Bilingual ES/EN UI from day one", desc: "i18n is baked into our React Native and native builds — your user in Doral and your user in São Paulo see the same app in their language." },
            { title: "Multi-currency Stripe in-app", desc: "USD, BRL, MXN, COP, ARS handled correctly inside the mobile checkout — including edge cases around presentment vs settlement currency that off-the-shelf templates fumble." },
            { title: "LATAM payment routing", desc: "Stripe by default, with awareness of where local processors (PIX, OXXO, MercadoPago) beat Stripe on conversion." },
            { title: "Hospitality + booking mobile", desc: "Hotel, restaurant, and event-group records with deposit, deposit-forfeit, and folio handling that Mews and Cloudbeds do not quite get right." },
        ],
        caseStudyParagraph: "Miami-relevant reference builds in our portfolio span operations platforms (J5 Sales OS for sales operations, UEhub for education workflows) and bilingual-friendly content-driven mobile builds (ProtectWithBri, Aaron Coleman Music). Same architecture pattern: React Native or native client, PostgreSQL source of truth, Stripe-driven entitlement, role-scoped access, i18n by default. Production-grade from day one.",
        pricingNote: "Miami mobile engagements typically scope between $40,000 and $110,000 for a production-grade bilingual MVP. Hospitality and booking apps land mid-range; fintech and multi-currency Stripe builds land at the upper end.",
        faqs: [
            { q: "Can you ship a Spanish-language mobile UI?", a: "Yes — i18n is standard in our React Native and native builds, with ES/EN switchable per user and date/currency/timezone formatting handled correctly." },
            { q: "Do you handle LATAM payments correctly inside the app?", a: "Stripe is our default and we model multi-currency correctly. We also know the limitations and will tell you straight when local processors (PIX, OXXO) beat Stripe on a given market." },
            { q: "Are you available for on-site work in Miami?", a: "Yes, for engagements that warrant travel. Most discovery runs remotely with full ET overlap from our Georgia HQ." },
            { q: "Will the app survive an institutional buyer's security review?", a: "Yes. We document architecture, ship audit trails by default, and produce pen test reports on request." },
            { q: "Do you support Apple Pay and Google Pay?", a: "Yes — both, with proper Stripe integration." },
            { q: "Who owns the source code?", a: "You do. Full repository handoff at delivery." },
        ],
        siblings: [
            { slug: "new-york-ny", city: "New York, NY", desc: "Vertical fintech and agency mobile." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech mobile." },
        ],
    },
    "austin-tx": {
        slug: "austin-tx",
        city: "Austin",
        state: "TX",
        stateFull: "Texas",
        angle: "SaaS startup MVP mobile",
        intro: "Austin is a founder town. The SaaS pipeline along MoPac, the venture money that followed Tesla and Oracle, the East Austin coffee shop full of pre-seed builders — they share one specific problem with mobile. They need a mobile client that ships alongside the MVP, scales with the product, and does not lock them into a vendor's UI kit the moment they hit Series A.",
        problem: "Most pre-seed Austin founders get pushed into a mobile shop that wants $250,000 up front, or an offshore team that produces a codebase the in-house engineers cannot maintain. Senior-engineering, fixed-scope, full-source-handoff at a real pre-seed budget is rare. That is the gap we sit in.",
        modules: [
            { title: "MVP-grade React Native client", desc: "What investors want to see in week one — clean code, real backend, no demoware." },
            { title: "Self-serve + sales-assisted hybrid", desc: "Product-led growth signals (sign-up, activation, expansion) fired from the mobile client into your CRM or sales tool." },
            { title: "Stripe Billing + usage-based pricing", desc: "Plan, seats, usage, and dunning state visible inside the mobile app — no exporting CSVs to figure out which user is on which plan." },
            { title: "Postgres-native event capture", desc: "Mobile analytics fire into your own Postgres, not a vendor SaaS — founder-readable dashboards on SQL views, not Amplitude seats." },
        ],
        caseStudyParagraph: "J5 Sales OS is our reference SaaS-founder build — a sales operations platform with contact deduplication, outreach presets, dual-mode lead flow, and embedded reporting whose mobile surface lets AEs work pipeline from the road. We dogfooded the platform on our own sales motion before shipping the pattern. Same architecture works for an Austin pre-seed building a CRM-first mobile MVP or a Series-A SaaS shifting from a SaaS mobile vendor to in-house.",
        pricingNote: "Austin mobile engagements typically scope between $35,000 and $95,000 for a production-grade MVP with backend, sized to actual runway. Fixed-fee per phase, milestone-based delivery.",
        faqs: [
            { q: "Will you work with pre-seed Austin founders?", a: "Yes — most of our SaaS mobile engagements are pre-seed through Series A. We size the build to your actual runway, not a notional enterprise price." },
            { q: "Can the mobile client grow into a product-led growth motion?", a: "Yes. We model self-serve signups, activation events, and expansion signals alongside the traditional pipeline from day one — no rip-and-replace at scale." },
            { q: "Do you have East Coast or Central time overlap?", a: "Georgia HQ — full ET overlap, which lines up cleanly with Austin's CT working hours. Most calls land 9-3 CT." },
            { q: "Will the app survive a Series A code review?", a: "Yes. Senior-engineering, TypeScript everywhere, audit trails, and clean module boundaries. Your future CTO can grep it without wincing." },
            { q: "iOS first or Android first?", a: "Depends on your buyer. Most Austin SaaS pre-seeds default to iOS for ICP fit; we are equally comfortable shipping Android first when the market demands it." },
            { q: "Who owns the source code?", a: "You do. Full repository handoff at delivery — no vendor lock-in." },
        ],
        siblings: [
            { slug: "dallas-tx", city: "Dallas, TX", desc: "Enterprise IT mobile replacing legacy." },
            { slug: "san-francisco-ca", city: "San Francisco, CA", desc: "Senior-engineering SaaS mobile." },
        ],
    },
    "dallas-tx": {
        slug: "dallas-tx",
        city: "Dallas",
        state: "TX",
        stateFull: "Texas",
        angle: "enterprise IT mobile replacing legacy",
        intro: "DFW is a corporate IT and supply-chain heavyweight — Fortune 500 headquarters, a massive logistics base, and a deep pool of mid-market companies running internal mobile tools that were custom-built in 2014 on a now-deprecated platform. The Big Four wants to replace them with a $400,000 SaaS subscription. The freelance market is too thin to take on a forty-user internal mobile tool. We sit in the gap.",
        problem: "Mid-market DFW operators sit between a Big Four consulting bill that prices them out and a freelance market that cannot hold a forty-user internal mobile rollout. Custom mobile that ships on time, with documentation, against a fixed scope is what closes that gap.",
        modules: [
            { title: "Legacy internal-mobile modernization", desc: "Replace fragile Ionic 1, Cordova, or Xamarin builds with React Native + native modules — apps your team will actually use." },
            { title: "Logistics + freight driver apps", desc: "DFW's freight density is real — we model load, lane, customer, and broker into one mobile pipeline that consolidates legacy WMS feeds." },
            { title: "Procurement-ready documentation", desc: "Architecture diagrams, data-flow diagrams, SBOM-style summaries — what your IT leadership and audit team actually want to see." },
            { title: "Fixed-scope mobile modernization", desc: "Quoted up front, delivered against milestones. No T&M creep, no rolling change-order theater." },
        ],
        caseStudyParagraph: "Production builds in our portfolio span operations platforms (J5 Sales OS, UEhub) and trade-side mobile patterns (Bridgepointe Painting for Stripe-to-QuickBooks invoice flow, Northcrest Fence for contractor lead routing). Same architecture pattern translates into a DFW mid-market modernization project: clean React Native code, role-scoped access, audit trails, and reporting on PostgreSQL views.",
        pricingNote: "Dallas mobile engagements typically scope between $45,000 and $130,000 for a production-grade rollout, with enterprise-procurement-ready documentation included. Fixed-fee per phase, milestone-based.",
        faqs: [
            { q: "Can you modernize our existing internal mobile app instead of rebuilding?", a: "Often yes — we do an assessment first. If the data model is sound and the UI is the problem, we rewrite the front and keep the schema. If both are broken, a clean rebuild is usually cheaper than another round of patches." },
            { q: "Do you bill fixed scope or T&M?", a: "Fixed scope on most engagements. T&M only on open-ended R&D or live-incident response work where scope cannot be defined." },
            { q: "How do you handle a fifty-user internal rollout?", a: "Phased — a usable v1 to one team in 8 weeks, then expansion. We train on real records during rollout and run a parallel period before sunset of the legacy app." },
            { q: "Will the app survive an enterprise procurement review?", a: "Yes. We document architecture, ship audit trails by default, and produce the security artifacts (data flow, access model, encryption posture) procurement teams actually ask for." },
            { q: "Do you fly in for DFW kickoffs?", a: "For engagements above a certain scope, yes. Otherwise full Central-time overlap from a Georgia HQ makes most reviews trivial to run remote." },
            { q: "Who owns the source code?", a: "You do. Full repository handoff at delivery." },
        ],
        siblings: [
            { slug: "austin-tx", city: "Austin, TX", desc: "SaaS startup MVP mobile." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech and logistics mobile." },
        ],
    },
    "chicago-il": {
        slug: "chicago-il",
        city: "Chicago",
        state: "IL",
        stateFull: "Illinois",
        angle: "trading-desk and logistics mobile",
        intro: "Chicago's mobile demand is unusually rich — the trading and proprietary-finance ecosystem around the CBOT and CME, the rail-and-truck logistics hub that moves the Midwest, and a deep manufacturing base across the collar counties. Each of these markets needs a mobile partner who can hold up to a CTO review and ship a real production app.",
        problem: "Off-the-shelf mobile templates do not model how a trading desk, a freight broker, or a Schaumburg manufacturer actually runs day-to-day. The custom mobile pattern closes that gap — but only if the partner has the engineering depth to handle real-time data, offline capture, and integration with legacy systems.",
        modules: [
            { title: "Trading-desk operator mobile", desc: "Position, exposure, and conversation history on a mobile surface — the actual data a desk uses, not a generic dashboard template." },
            { title: "Freight + logistics driver apps", desc: "Load, lane, customer, and dispatcher visibility consolidated from legacy TMS and WMS feeds into one mobile record." },
            { title: "Manufacturing + jobsite mobile", desc: "Quote-to-job-to-invoice for collar-county manufacturers and trades, with materials tracking and Stripe-driven progress billing from the truck." },
            { title: "Algorithmic ops integration", desc: "We build trading bots — we know how to wire P/L, fill, and slippage data into a mobile operator view." },
        ],
        caseStudyParagraph: "Chicago-relevant reference work includes our algorithmic trading systems (TypeScript/Node integrated with broker APIs like IBKR, Alpaca, Tradier), J5 Sales OS (sales operations whose mobile surface lets reps work pipeline from the road), and operations platforms with real-time capture. Same architecture supports a trading-desk mobile app, a freight broker driver tool, or a Schaumburg manufacturer's plant-floor capture.",
        pricingNote: "Chicago mobile engagements typically scope between $45,000 and $120,000 for a production-grade MVP. Trading-desk and real-time builds land at the higher end; logistics and manufacturing builds land mid-range.",
        faqs: [
            { q: "Do you build mobile for prop trading desks or only retail?", a: "Both. Counterparty-and-broker relationship mobile for desks is a real niche; we have algorithmic-trading capability and ops dashboard experience that translates directly." },
            { q: "Can a mobile client consolidate our legacy TMS and WMS feeds?", a: "Yes — that is the standard pattern for Chicago logistics clients. Loads, lanes, and customers join into one mobile record; the legacy systems keep running on their own schedule." },
            { q: "Do you fly in for kickoffs?", a: "For engagements that warrant it, yes. Most discovery runs remotely with full Central-time overlap from our Georgia HQ." },
            { q: "Will the app handle real-time market data?", a: "Yes — we have built trading systems against IBKR, Alpaca, and Tradier. WebSocket and streaming data on mobile is in scope." },
            { q: "Can the app survive an offline period during a warehouse run?", a: "Yes. Offline-first is a default pattern for our field and logistics builds." },
            { q: "Who owns the source code?", a: "You do. Full repository handoff at delivery." },
        ],
        siblings: [
            { slug: "new-york-ny", city: "New York, NY", desc: "Vertical finance and agency mobile." },
            { slug: "dallas-tx", city: "Dallas, TX", desc: "Enterprise IT and logistics mobile." },
        ],
    },
    "seattle-wa": {
        slug: "seattle-wa",
        city: "Seattle",
        state: "WA",
        stateFull: "Washington",
        angle: "dev-tools and cloud-native mobile",
        intro: "Seattle is anchored by Amazon and Microsoft, surrounded by a fast-moving SaaS and dev-tools ecosystem, and threaded through with a steady current of bootstrapped indie SaaS founders. Most companies here speak fluent cloud — what they want from a mobile partner is a Docker-native backend, a cloud-portable API, and a mobile client that does not fight their stack.",
        problem: "Off-the-shelf mobile shops bring vendor SDKs that lock you into their analytics, their billing, their crash reporting. Seattle technical buyers want the mobile equivalent of an API-first product — clean module boundaries, documented endpoints, and no vendor lock-in.",
        modules: [
            { title: "Docker-native backend for mobile", desc: "Container-first APIs that drop into AWS, GCP, Azure, or your own Kubernetes without theater." },
            { title: "API-first mobile data layer", desc: "Every mobile action is a documented REST or GraphQL endpoint — your dev tools and SaaS product talk to it like a peer service, not a black box." },
            { title: "Stripe + usage-based billing in-app", desc: "Plan, meter, dunning, and license state visible on the mobile customer record. Built for developer-tool pricing models that vendor mobile templates will not model." },
            { title: "Single-sign-on + IAM-grade access", desc: "OIDC, SAML, fine-grained RBAC inside the mobile client. Your security review team sees what they expect to see." },
        ],
        caseStudyParagraph: "Seattle-relevant reference work includes SaaS operations platforms (J5 Sales OS, UEhub) and developer-tool patterns we ship across the portfolio — Docker-native deploys, OpenAPI-documented endpoints, Stripe metering, Postgres-native reporting. The mobile client meets what a Seattle-grade engineering reviewer expects: TypeScript, React Native, signed-token authentication, audit trails, and clean API surfaces — not vendor lock-in.",
        pricingNote: "Seattle mobile engagements typically scope between $45,000 and $115,000 for a production-grade MVP with backend. Senior-engineering bake-off included.",
        faqs: [
            { q: "Will the backend deploy cleanly to AWS or our own Kubernetes?", a: "Yes. Docker-native by default, cloud-portable, and we will hand you the Terraform or Helm chart at delivery." },
            { q: "Can the mobile app be queried by our SaaS product as a peer service?", a: "Yes — every action is a documented endpoint with stable auth. Your product and your mobile users look at the same data through different surfaces." },
            { q: "Time-zone overlap with Pacific?", a: "Comfortable working morning through early afternoon Pacific from a Georgia HQ. Async-first for the rest." },
            { q: "Will you bake-off against an in-house Seattle engineering team?", a: "Yes. Code samples, architecture walk-through, and a live whiteboard on request." },
            { q: "Do you support SAML/OIDC SSO in the mobile client?", a: "Yes. Enterprise-grade SSO with fine-grained RBAC." },
            { q: "Who owns the source code?", a: "You do. Full repository handoff at delivery — no vendor lock-in." },
        ],
        siblings: [
            { slug: "san-francisco-ca", city: "San Francisco, CA", desc: "Senior-engineering SaaS mobile." },
            { slug: "austin-tx", city: "Austin, TX", desc: "Startup MVP mobile." },
        ],
    },
    "new-york-ny": {
        slug: "new-york-ny",
        city: "New York",
        state: "NY",
        stateFull: "New York",
        angle: "vertical mobile for finance and agency operations",
        intro: "New York is the toughest mobile buyer's market in the country — fintech, ad-tech, agency holding companies, hedge funds, and a relentless stream of SaaS founders. Everyone has been burned by an agency build that never shipped. Everyone has tried the offshore route. The pattern that survives is a vertical mobile client modeled on the specific workflow, built by someone who can actually ship.",
        problem: "NYC buyers do not buy generic mobile templates. They buy verticalized clients that mirror their actual deal flow, pitch process, or client engagement model. Most mobile shops cannot ship that — they ship a CRUD app and call it custom.",
        modules: [
            { title: "Agency client + project mobile", desc: "Client, campaign, retainer, and deliverable records on a mobile surface that survives a CMO change without losing context." },
            { title: "Fund-administration-aware mobile", desc: "Pipeline, deal IC, capital call, and LP communication records on mobile — built for the actual workflow of a small fund or family office." },
            { title: "Ad-tech revenue ops mobile", desc: "Insertion order, campaign, and pacing data on a mobile dashboard, with reporting on PostgreSQL views your finance team can audit." },
            { title: "Procurement-ready architecture", desc: "Data-flow diagrams, SBOM-style summaries, and security artifacts that survive an institutional investor's due diligence packet." },
        ],
        caseStudyParagraph: "Reference work for NYC-style buyers spans operations platforms (J5 Sales OS for sales ops, UEhub for education ops), trade and brand mobile surfaces (ProtectWithBri, Wilder Recovery, Northcrest Fence), and quantitative tooling. Same architecture pattern: clean Postgres schema, audit trails by default, role-scoped access, and reporting on SQL views. Every line is reviewed before it ships — which matters when the cost of a bug is a real eight-figure account.",
        pricingNote: "NYC mobile engagements typically scope between $55,000 and $150,000 for a production-grade MVP. Institutional-investor-ready builds with formal security documentation land at the upper end.",
        faqs: [
            { q: "Can you support an institutional investor's due-diligence packet?", a: "Yes — pen test reports, architecture diagrams, and SBOM-style summaries are deliverables we ship on request. Same shop runs the security review and the mobile build." },
            { q: "Do you fly in for kickoffs and reviews?", a: "For engagements above a certain scope, yes. Otherwise full ET overlap from a Georgia HQ makes most reviews trivial to run remote." },
            { q: "Can you build for agency holding-company operations?", a: "Yes — client, campaign, retainer, and deliverable records modeled correctly on mobile. We have shipped operations platforms that work the same way at smaller scale." },
            { q: "Will the app survive a hedge fund tech review?", a: "Yes. Senior-engineering, signed-token auth, audit trails, and clean module boundaries. Your CTO can grep the React Native source without wincing." },
            { q: "Do you support Apple Pay, Google Pay, and Stripe Connect on mobile?", a: "Yes — Stripe is a core practice." },
            { q: "Who owns the source code?", a: "You do. Full repository handoff at delivery." },
        ],
        siblings: [
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent compliance-aware mobile." },
            { slug: "chicago-il", city: "Chicago, IL", desc: "Trading-desk and logistics mobile." },
        ],
    },
    "charlotte-nc": {
        slug: "charlotte-nc",
        city: "Charlotte",
        state: "NC",
        stateFull: "North Carolina",
        angle: "banking-adjacent compliance-aware mobile",
        intro: "Charlotte is the southeast's banking capital — Bank of America and Truist headquartered here, plus a fast-growing fintech and supplier ecosystem in Uptown and South End selling into the big banks. Every mobile app in this market has to survive two reviews: an internal audit and a customer's vendor-risk assessment. Generic SaaS mobile templates fail both routinely.",
        problem: "Mobile vendors selling into Charlotte have to clear bank-grade security review. Generic shops do not understand the vendor-risk game, ship without audit trails, and lose the deal at procurement. We build for the regulated environment from day one.",
        modules: [
            { title: "Vendor-risk-ready architecture", desc: "Data-flow diagrams, access model, encryption-at-rest documentation, and audit logs that survive a BoA or Truist vendor-risk review." },
            { title: "Customer-record audit trails on mobile", desc: "User, action, before/after on every record. Drops directly into SOC 2 CC6.1 and CC7.2 evidence packs." },
            { title: "Stripe + bank-grade billing flows in-app", desc: "Subscription and licensing state tied to entitlement, with reconciliation outputs your customer's audit team can pull." },
            { title: "Fintech-vendor mobile modules", desc: "Pipeline, deal IC, security-review state, and contract redline tracking — on mobile, for vendors selling into a regulated bank." },
        ],
        caseStudyParagraph: "Charlotte-relevant reference work includes J5 Sales OS (sales operations whose mobile surface lets AEs work pipeline from the road), ProtectWithBri (client-facing portal handling sensitive communications), and contractor-grade mobile patterns we ship into other regulated-adjacent markets. Same audit-trail and access-model discipline shows up across the portfolio because the same shop that runs the pen test writes the mobile code.",
        pricingNote: "Charlotte mobile engagements typically scope between $50,000 and $130,000 for a production-grade MVP with bank-grade security documentation included.",
        faqs: [
            { q: "Will the app survive a BoA or Truist vendor-risk review?", a: "Yes — we ship the data-flow, access-model, and encryption documentation procurement teams actually ask for, and produce a pen test report against the deployed system on request." },
            { q: "Do you understand the bank security-questionnaire game?", a: "Yes — same shop ships the mobile app and runs the pen test. Threat modeling is in the SDLC, not added at the end." },
            { q: "Are you available for in-person Charlotte meetings?", a: "Yes — short drive up I-85 from the HQ. Kickoffs and major reviews on-site when scope warrants it." },
            { q: "Can you handle a SOC 2 Type II audit on a mobile codebase?", a: "Yes. Audit logging, access scoping, and evidence-ready documentation are in the SDLC from day one." },
            { q: "Do you support enterprise SSO in the mobile client?", a: "Yes — SAML, OIDC, and fine-grained RBAC are standard." },
            { q: "Who owns the source code?", a: "You do. Full repository handoff at delivery." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech and logistics mobile." },
            { slug: "nashville-tn", city: "Nashville, TN", desc: "Healthcare and music-tech mobile." },
        ],
    },
    "nashville-tn": {
        slug: "nashville-tn",
        city: "Nashville",
        state: "TN",
        stateFull: "Tennessee",
        angle: "healthcare and music-tech mobile",
        intro: "Nashville's economy is anchored by two unusually large verticals: healthcare administration — HCA Healthcare plus a wide ecosystem of provider, payer, and admin tech companies — and music and entertainment tech around publishing, streaming, and royalty management. Add a maturing SaaS founder pool and you have a city that punches well above its size for mobile demand.",
        problem: "Generic mobile shops do not understand HIPAA-aligned architecture, do not understand royalty data modeling, and ship apps that nearly fit but never quite get to production for a healthcare or music-tech buyer. The custom mobile pattern closes that gap.",
        modules: [
            { title: "Provider-facing healthcare mobile", desc: "Scheduling, intake, and ops on a mobile surface for healthcare-adjacent operators. PHI-touching builds scoped deliberately with BAA and HIPAA-aligned architecture." },
            { title: "Royalty and catalog mobile", desc: "Catalog, writer, publisher, and recipient records joined to royalty statement and earnings data — on mobile, for music publishers and independent artists." },
            { title: "Payer + admin-tech vendor mobile", desc: "Pipeline, deal IC, contract redline, and HIPAA-vendor-review state on mobile for companies selling into HCA and the surrounding admin-tech ecosystem." },
            { title: "Audit-ready access logs on mobile", desc: "User, action, before/after captured on every event — drops into HIPAA risk-analysis documentation and vendor-review packets." },
        ],
        caseStudyParagraph: "Aaron Coleman Music is one of our published portfolio sites — a music-adjacent build that informs how we model catalog and royalty data for Nashville music-tech operators. Broader reference work includes UEhub (education platform with provider-facing workflows and mobile surfaces), Wilder Recovery (recovery-services platform with audit-aware records), and J5 Sales OS (sales operations). Same patterns ship into a healthcare admin-tech mobile app or a music publisher's royalty surface.",
        pricingNote: "Nashville mobile engagements typically scope between $40,000 and $110,000 for a production-grade MVP. HIPAA-aligned and royalty-modeling builds land mid-to-upper range.",
        faqs: [
            { q: "Do you build mobile software that touches PHI?", a: "Case-by-case. We scope BAA and HIPAA-aligned engagements deliberately — not casually. The pen test team that ships the threat model also reviews the build." },
            { q: "Can you build royalty or catalog management mobile tools?", a: "Yes — custom platforms for music publishers and independent artists are in scope. Catalog, writer, publisher, and statement modeling is doable cleanly in Postgres with a React Native surface." },
            { q: "Are you available for on-site work in Nashville?", a: "Yes, for engagements that warrant it. Short drive up I-24 from the HQ." },
            { q: "Will the app survive a HCA vendor-risk review?", a: "Yes. Architecture documentation, audit trails, and pen test reports are deliverables we ship on request." },
            { q: "Can the mobile client work in a clinical environment with restricted connectivity?", a: "Yes. Offline-first patterns are standard for our healthcare-adjacent builds." },
            { q: "Who owns the source code?", a: "You do. Full repository handoff at delivery." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech and logistics mobile." },
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent compliance-aware mobile." },
        ],
    },
    "san-francisco-ca": {
        slug: "san-francisco-ca",
        city: "San Francisco",
        state: "CA",
        stateFull: "California",
        angle: "peer-credible senior-engineering mobile",
        intro: "San Francisco is the most technical mobile buyer market in the country. Every founder is one degree of separation from a senior mobile engineer, every CTO has built the thing before, and contract pitches that lean on agency theater die fast on the technical screen. What survives is genuine senior engineering, clean architecture, and the ability to ship.",
        problem: "Bay mobile buyers see through agency theater fast. The competition is in-house engineers, ex-FAANG mobile leads, and the partner that wins the contract has to clear a code review the same week they pitch. We build for that bar.",
        modules: [
            { title: "Senior-quality React Native and native code", desc: "Mobile code designed for the actual workflow — not a vendor template translated into Swift." },
            { title: "Code that reviews well", desc: "TypeScript, clean module boundaries, idempotent network handling. Your CTO can grep it and not wince." },
            { title: "Stripe + entitlement architecture in-app", desc: "Subscription state drives entitlement. License-server-grade activation when needed. We have shipped both." },
            { title: "Algorithmic-ops integration", desc: "We build trading bots — we know how to wire low-latency P/L, fill, or product-event data into a mobile operator view." },
        ],
        caseStudyParagraph: "Bay-relevant reference work spans operations platforms (J5 Sales OS for sales operations, UEhub for education workflows), trading systems (algorithmic bot development on TypeScript/Node integrated with broker APIs), and trade brands we ship mobile surfaces for (HobbsPeak, ProtectWithBri). The technical bake-off works in our favor — we will do a code walk-through or live architecture session before a contract closes if that is what gets a Bay technical buyer comfortable.",
        pricingNote: "SF mobile engagements typically scope between $55,000 and $150,000 for a production-grade MVP with senior-engineering bake-off included.",
        faqs: [
            { q: "Can you handle a technical bake-off against in-house mobile engineers?", a: "Yes. Code samples, architecture walk-through, and a live whiteboard on request. We assume your CTO is going to read the React Native source." },
            { q: "Do you build mobile for quant-adjacent operators?", a: "Yes — trading-desk operator mobile and ops dashboards. Same shop builds algorithmic trading systems, so the integration story is real." },
            { q: "Time-zone overlap with Pacific?", a: "Comfortable working morning through early afternoon Pacific from a Georgia HQ. Async-first for the rest of the day." },
            { q: "Will the app survive a Series A code review?", a: "Yes. Senior-engineering, TypeScript everywhere, audit trails, and clean module boundaries." },
            { q: "Do you support SwiftUI, Jetpack Compose, or just React Native?", a: "All three. React Native by default; native when the feature demands it." },
            { q: "Who owns the source code?", a: "You do. Full repository handoff at delivery." },
        ],
        siblings: [
            { slug: "seattle-wa", city: "Seattle, WA", desc: "Dev-tools and cloud-native mobile." },
            { slug: "austin-tx", city: "Austin, TX", desc: "SaaS startup MVP mobile." },
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
    if (!config) return { title: "Mobile App Development | QUANT LAB USA" };

    const title = `Mobile App Development in ${config.city}, ${config.state} | QUANT LAB USA`;
    const description = `Custom iOS, Android, and React Native mobile development for ${config.city} ${config.stateFull}. Founder-led, fixed-scope, full source-code handoff. Book a scope call.`;

    return pageMetadata({
        title,
        description,
        slug: `services/mobile-app-development/${config.slug}`,
        image: "/og-services.png",
        type: "article",
    });
}

export default async function MobileAppCityPage({
    params,
}: {
    params: Promise<{ city: string }>;
}) {
    const { city } = await params;
    const config = CITIES[city];
    if (!config) notFound();

    const url = `https://quantlabusa.dev/services/mobile-app-development/${config.slug}`;

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Mobile App Development",
        name: `Mobile App Development in ${config.city}, ${config.state}`,
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
        description: `Custom iOS, Android, and React Native mobile app development for ${config.city}, ${config.stateFull} businesses. Founder-led delivery, fixed-scope engagements, full source-code ownership.`,
        url,
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${url}#localbusiness`,
        name: `QUANT LAB USA — Mobile App Development in ${config.city}`,
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
                name: "Mobile App Development",
                item: "https://quantlabusa.dev/services/mobile-app-development",
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
                            <Link href="/services/mobile-app-development" className="hover:text-sky-400 transition-colors">
                                Mobile App Development
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">{config.city}, {config.state}</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Mobile App Development in {config.city}, {config.state}
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        {config.intro}
                    </p>
                    <ConsultationCTA
                        label={`Scope a ${config.city} Mobile Build`}
                        service="Mobile App Development"
                        city={`${config.city}, ${config.state}`}
                        source={`mobile-${config.slug}`}
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        The problem with off-the-shelf mobile in {config.city}
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{config.problem}</p>
                        <p>
                            A custom mobile build puts the data model, the UI, and the platform layer around how you actually operate. No vendor SDK tax. No per-seat ratchet. For {config.city} operators specifically, that means mobile shaped for {config.angle} — not a generic template.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        What we ship for {config.city} companies
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
                            "React Native + Expo",
                            "Swift / SwiftUI (iOS)",
                            "Kotlin / Jetpack Compose",
                            "TypeScript",
                            "Node API + PostgreSQL",
                            "Stripe + Apple/Google Pay",
                            "Push (APNs / FCM)",
                            "Offline-first sync",
                            "App Store + Play submission",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Hosted on Vercel, AWS, or your own infrastructure. PostgreSQL is the source of truth; the mobile client defers to it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference builds</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{config.caseStudyParagraph}</p>
                        <p className="text-sm">
                            Reference work: <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link>, <Link href="/work/northcrest-fence" className="text-sky-400 hover:underline">Northcrest Fence</Link>, and <Link href="/work/bridgepointe-painting" className="text-sky-400 hover:underline">Bridgepointe Painting</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remote from Georgia</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA is founder-led from Macon, Georgia. William Beltz runs every engagement from kickoff through handoff — no agency middleman, no offshore handoff at the framework boundary. Discovery happens over a structured video session; weekly demos run on the same cadence; staging is live from week two so you can put a real mobile build in your team's hands before final delivery.
                        </p>
                        <p>
                            For {config.city} clients, that means full Eastern-time overlap, fixed-scope contracting against milestones, and on-site work when the engagement warrants it. <Link href="/contact" className="text-sky-400 hover:underline">Book a scope call</Link> to walk through your workflow and get a written estimate.
                        </p>
                    </div>
                    <div className="mt-6">
                        <ConsultationCTA
                            label={`Talk to William about ${config.city} Mobile`}
                            service="Mobile App Development"
                            city={`${config.city}, ${config.state}`}
                            source={`mobile-${config.slug}-mid`}
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing for {config.city} mobile builds</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{config.pricingNote}</p>
                        <p>
                            We quote fixed-fee scope after a 30-minute discovery call. Engagements include the mobile client, the backend, the API surface, Stripe and payments wiring as scoped, and App Store and Play Console submission. Source-code handoff is included at delivery — no platform fees, no per-seat charges, no vendor lock-in. See our <Link href="/services/mobile-app-development" className="text-sky-400 hover:underline">parent mobile service page</Link> for the broader engagement model.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Full source code repository (yours, no lock-in)",
                            "iOS and Android builds submitted under your developer accounts",
                            "Backend API + PostgreSQL database",
                            "Stripe / Apple Pay / Google Pay wiring as scoped",
                            "Push notification setup (APNs + FCM)",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{config.city} mobile FAQ</h2>
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
                            { slug: "saas-platform-development", title: "SaaS Platform Development", desc: "Full-stack SaaS builds — same data model behind your mobile app." },
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "Pair your mobile app with a CRM your team will actually use." },
                            { slug: "stripe-integration", title: "Stripe Integration", desc: "Apple Pay, Google Pay, Stripe Connect inside your mobile client." },
                            { slug: "ai-integration-services", title: "AI Integration", desc: "On-device and server AI features wired into the mobile app." },
                            { slug: "devops-engineering", title: "DevOps + CI/CD", desc: "Mobile CI/CD, EAS, Fastlane, and release management." },
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
                                href={`/services/mobile-app-development/${s.slug}`}
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
                            Ship a real mobile app in {config.city}.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call to walk through your mobile build. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA
                            label={`Book a ${config.city} Mobile Scope Call`}
                            service="Mobile App Development"
                            city={`${config.city}, ${config.state}`}
                            source={`mobile-${config.slug}-footer`}
                        />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
