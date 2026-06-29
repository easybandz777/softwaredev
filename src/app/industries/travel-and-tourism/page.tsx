import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Plane, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Custom Software for Travel & Tourism | QUANT LAB USA",
    description:
        "Custom travel software — booking and reservation systems, channel manager and GDS/OTA integrations, PCI-DSS Stripe payments, peak-season scaling, WCAG accessibility. Founder-led.",
    slug: "industries/travel-and-tourism",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Software for Travel & Tourism",
    url: "https://quantlabusa.dev/industries/travel-and-tourism",
    description:
        "Travel-specific software development with booking engines, channel manager and GDS/OTA integrations, PCI-DSS card handling, and peak-season scaling built in. Founder-led, US-based, mutual NDA from day one.",
    isPartOf: {
        "@type": "WebSite",
        url: "https://quantlabusa.dev",
        name: "QUANT LAB USA",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://quantlabusa.dev/industries" },
        { "@type": "ListItem", position: 3, name: "Travel & Tourism", item: "https://quantlabusa.dev/industries/travel-and-tourism" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Travel & Tourism Software Development",
    name: "Custom Software Development for Travel & Tourism",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for travel and tourism — booking and reservation engines, channel manager integrations with OTAs and the GDS, PMS connections, itinerary builders, and OTA marketplaces. PCI-DSS-aware payment handling with Stripe tokenization, peak-season scaling, fraud and chargeback defenses, and WCAG-accessible booking flows.",
    url: "https://quantlabusa.dev/industries/travel-and-tourism",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the PCI-DSS scope for a travel booking site?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "If you take card payments at booking, you are in PCI scope. Our default architecture tokenizes cards with Stripe Elements or Checkout so the card number never touches your servers and you stay in SAQ A — the lightest validation level. Scope only widens to SAQ A-EP or SAQ D when you capture card fields directly, take phone bookings into your own forms, or store PANs, which we avoid by design.",
            },
        },
        {
            "@type": "Question",
            name: "Can you integrate a channel manager and the OTAs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We connect to channel managers and OTAs — Expedia, Booking.com, and Airbnb — so rates and availability sync both ways and a booking on any channel decrements your real-time inventory. We build idempotent sync with conflict resolution so two channels selling the last room never produce a double-booking, and we reconcile cancellations and modifications across every connected channel.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle peak-season traffic spikes and flash sales?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Availability and pricing reads are served from cache and the edge so a holiday spike or flash sale does not melt your database. Writes — the actual bookings — run through an idempotent, queue-backed path that holds inventory atomically, so overselling cannot happen even at peak concurrency. Rate limiting protects checkout and search from bots and scrapers during the surge.",
            },
        },
        {
            "@type": "Question",
            name: "Can you connect to the GDS — Amadeus, Sabre, or Travelport?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We integrate the global distribution systems — Amadeus, Sabre, and Travelport — for air, hotel, and car content where your business model needs it, alongside direct OTA and supplier APIs. Each system has its own session model, rate limits, and pricing-then-booking flow; we build the adapter layer, caching, and retry semantics so the booking path stays reliable under their quirks.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle refunds, cancellations, and chargebacks?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Cancellation and refund rules are modeled as policy — tiered penalties, non-refundable rates, deposit forfeiture, date-based windows — and enforced in code so the right amount is returned automatically. Refunds go back through Stripe with a full audit trail. For chargebacks we wire Stripe's dispute evidence flow, capture booking and consent records at purchase, and surface a dispute queue so your team responds inside the network deadline.",
            },
        },
        {
            "@type": "Question",
            name: "Do travel booking sites need to be ADA and WCAG accessible?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, and travel is a frequent ADA-litigation target. We build booking flows to WCAG 2.2 AA — keyboard-operable date pickers, labeled form fields, sufficient contrast, screen-reader-friendly availability calendars, and accessible error handling at checkout. Accessibility is wired in from the first component, not retrofitted after a demand letter arrives.",
            },
        },
        {
            "@type": "Question",
            name: "Is offshore development an IP and data risk for travel companies?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It can be. Your booking engine, pricing logic, and a database of travelers' passport numbers, payment tokens, and itineraries are exactly the assets you do not want on a foreign contractor's laptop — especially with GDPR and CCPA exposure on international guests. We are US-based, founder-led, and signing mutual NDAs is the first step of every engagement.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 travel build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Around $25,000 covers a focused MVP — a single high-value workflow built well. Example: a single-property booking engine with an availability calendar, Stripe Checkout for the deposit, automated confirmation email, and a clean owner dashboard. The build is scoped tight, ships in 4 to 8 weeks, and avoids feature creep — channel manager and dynamic pricing come in a later phase once the core books reliably.",
            },
        },
    ],
};

export default function TravelTourismIndustryPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
                        <li><Link href="/industries" className="hover:text-sky-400 transition-colors">Industries</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Travel & Tourism</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-400 mb-6">
                        <Plane className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Travel &amp; Tourism — Booking That Holds Up at Peak Season
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Booking engines, channel manager and GDS/OTA integrations, itinerary builders, and OTA marketplaces — built by a US-based, founder-led team that takes PCI-DSS card handling, peak-season scaling, and WCAG accessibility seriously from day one.
                    </p>
                    <ConsultationCTA label="Scope a Travel Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Travel is a high-concurrency, payment-heavy environment. Build like it.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A booking platform is one of the harder things to build well in consumer software. You are taking card payments under PCI-DSS, holding a shared pool of perishable inventory that can only be sold once, syncing rates and availability across OTAs and a channel manager, and absorbing holiday and flash-sale traffic spikes that can be ten times a normal Tuesday. An off-the-shelf widget will not survive your busiest weekend, and a code base built by a contractor who has never reasoned about overbooking will sell the last room twice and refund a guest at the airport.
                        </p>
                        <p>
                            We build with those realities in mind from the first architecture diagram. Card data is tokenized at the edge — Stripe Elements or Checkout — so your environment stays in SAQ A. Availability and pricing are served from cache and the CDN so a spike does not touch the database; the actual booking runs through an idempotent, queue-backed path that holds inventory atomically so overselling cannot happen. Cancellation and refund policy lives in code, not in a support agent's memory, and the booking site is built to WCAG so an ADA demand letter does not become a rebuild.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why travel is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most consumer apps deal with a forgiving write path — a like, a comment, a profile edit. Travel deals with money and scarcity at the same time. A single booking flow has to charge a card under PCI scope, decrement a finite inventory of rooms or seats that may also be selling on Expedia and Booking.com that exact second, apply the right cancellation penalty, send a confirmation, and push the reservation back to the property management system — and it has to do all of that correctly under flash-sale concurrency where dozens of guests are racing for the last unit. Get the ordering wrong and you have an oversell, a chargeback, and a one-star review.
                        </p>
                        <p>
                            Scale compounds it. Travel traffic is spiky by nature — a holiday weekend, a destination going viral, a 24-hour flash sale — and the spikes land precisely when a bad release hurts most. And the integrations are intricate: channel managers, OTA APIs (Expedia, Booking.com, Airbnb), the global distribution systems (Amadeus, Sabre, Travelport), property management systems, payment and multi-currency settlement, fraud screening, and travel-insurance providers. Each one has its own rate limits, its own session and pricing-then-booking model, its own retry semantics, and its own failure modes when something breaks at 2 a.m. during your peak season. We have wired this stack and know where the time gets eaten on a build.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for travel operators</h2>
                    <ul className="space-y-3">
                        {[
                            "Booking and reservation engines — availability calendars, real-time inventory, overbooking logic, and cancellation/refund flows",
                            "Channel manager and OTA integrations — two-way sync with Expedia, Booking.com, and Airbnb so one booking updates every channel",
                            "GDS connections — Amadeus, Sabre, and Travelport for air, hotel, and car content where the model needs it",
                            "Property management system (PMS) integrations — push reservations, pull rates and room types, reconcile folios",
                            "Itinerary builders and tour/activity booking platforms — multi-day, multi-component trips with per-component availability",
                            "OTA marketplaces — multi-supplier listings, commission and payout accounting, and supplier dashboards",
                            "Dynamic pricing and rate-management tools — seasonal rates, length-of-stay rules, demand-based adjustments, and yield controls",
                            "Loyalty and membership programs — points accrual, tiers, member rates, and redemption at booking",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common travel projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Single-property booking engine", d: "Availability calendar, real-time inventory, rate plans, Stripe Checkout for deposits or full payment, automated confirmation email, and an owner dashboard. The clean, fast direct-booking channel that cuts OTA commission." },
                            { t: "Multi-property platform with channel manager", d: "Central inventory across properties with two-way OTA sync (Expedia, Booking.com, Airbnb), conflict-safe booking, and per-property rate and policy management. Built so the channel manager and your direct site can never oversell the same night." },
                            { t: "OTA marketplace with multiple suppliers", d: "Supplier onboarding, multi-supplier search and availability, commission accounting, and payout reconciliation through Stripe Connect. Supplier dashboards, booking lifecycle, and dispute handling baked in." },
                            { t: "Tour and activity operator booking", d: "Per-departure capacity, time-slot scheduling, add-ons and upsells, group and waitlist handling, and waiver/liability capture at checkout. Mobile-first because most activity bookings happen on a phone." },
                            { t: "Itinerary builder for trip planners", d: "Multi-day, multi-component trips — flights, stays, transfers, activities — with per-component availability, packaged pricing, and a single shareable, bookable itinerary." },
                            { t: "Dynamic pricing and yield engine", d: "Seasonal calendars, length-of-stay and minimum-night rules, demand-based rate adjustment, and channel-specific pricing, with overrides and a clear audit of why a rate changed." },
                            { t: "GDS-connected agency or consolidator tool", d: "Amadeus, Sabre, or Travelport content surfaced into a booking workflow, with caching, fare/availability re-validation before purchase, and reliable ticketing or confirmation handling." },
                            { t: "Loyalty and membership system", d: "Points accrual and redemption, member tiers and member-only rates, referral mechanics, and clean accounting of the liability the program creates." },
                            { t: "Group, corporate, or wholesale booking portal", d: "Negotiated rates, allotments and release-back rules, approval workflows, consolidated invoicing, and reporting for travel managers or wholesalers." },
                            { t: "Back-office reconciliation and reporting", d: "Channel-by-channel revenue, commission and payout matching, refund and chargeback tracking, occupancy and ADR/RevPAR reporting, and exports that close the books cleanly." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Compliance and security considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">PCI-DSS.</span> If you take card payments at booking, you are in PCI scope. Our default architecture tokenizes card data with Stripe Elements or Checkout so the PAN never touches your servers and you live in SAQ A — the lightest validation level. Scope only widens to SAQ A-EP or SAQ D-Merchant if you capture card fields directly, key phone bookings into your own forms, or store card data — which we design out. We document the boundary so your assessor sees exactly where cardholder data does and does not flow.
                        </p>
                        <p>
                            <span className="text-white font-semibold">GDPR and CCPA.</span> Travel is inherently international — your guests are EU and California residents, and you are holding names, contact details, passport and ID numbers, and itineraries. We build data-subject access and deletion, consent capture, retention limits, and a clean record of processing so your counsel can defend the product. Personal data is encrypted at rest and in transit, and access is role-based and logged.
                        </p>
                        <p>
                            <span className="text-white font-semibold">ADA and WCAG accessibility.</span> Booking sites are a frequent ADA-litigation target in the US. We build to WCAG 2.2 AA from the first component — keyboard-operable date pickers and availability calendars, labeled fields, sufficient contrast, screen-reader support, and accessible checkout error handling — so accessibility is a property of the build, not a scramble after a demand letter.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Fraud, chargebacks, and account takeover.</span> Travel is a top fraud target — high ticket values, instant fulfillment, and resaleable inventory. We wire Stripe Radar and 3-D Secure on risky transactions, velocity and rate limiting on checkout, and capture the booking and consent evidence that wins chargeback disputes. Account-takeover defenses — MFA, anomalous-login detection, and re-auth on payout or refund — protect both guests and your own back office.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Disclosure and consumer-protection rules.</span> Mandatory fees and total-price display, DOT advertising rules where air content is sold, and clear, accurate cancellation and travel-insurance disclosures all matter in travel. We do not give legal advice — but we build the disclosure capture, total-price logic, and consent logging your counsel will want to see when a guest disputes what they were shown at checkout.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for travel</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 15 or 16 on the App Router with React 19 and TypeScript end-to-end. Postgres for the system of record — usually Neon, Supabase, or RDS depending on your scale and data-residency needs. Prisma or Drizzle as the type-safe ORM. Stripe for card payments, deposits and installments, multi-currency, and Connect payouts for marketplaces. Resend for transactional confirmations and itineraries with a verified domain and DMARC alignment. Sentry plus a log aggregator (Datadog or Better Stack) for observability, with PII-aware redaction baked into the logger so passport and payment data never lands in a log line.
                        </p>
                        <p>
                            The booking path is where the architecture earns its keep. Availability and pricing reads are cached and served from the edge and a CDN so search and the calendar stay fast during a spike; the actual booking runs through idempotent, queue-backed workers — Inngest or BullMQ on Redis — that hold inventory atomically and make payment retries safe, so a double-tap or a webhook replay never charges twice or oversells. Channel manager, OTA, GDS, and PMS calls go through a dedicated adapter layer with per-provider rate limiting, retries, and reconciliation. Rate limiting and bot defenses sit in front of search and checkout for flash sales. Deployment goes to Vercel for the web tier, with the queue and data plane sized for your peak-season concurrency rather than your average day.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused MVP", body: "A single-property booking engine shipped clean — availability calendar, real-time inventory, Stripe Checkout for the deposit, confirmation email, and an owner dashboard. 4 to 8 weeks. Channel manager and dynamic pricing deferred to a later phase." },
                            { tier: "$60K", title: "Production platform", body: "A real multi-property booking product — central inventory, two-way OTA/channel-manager sync, conflict-safe booking, rate and policy management, a full admin console, and WCAG-accessible checkout. 10 to 16 weeks." },
                            { tier: "$150K+", title: "Marketplace or GDS-connected platform", body: "An OTA marketplace with multi-supplier listings, commission and payout reconciliation, and a channel manager, or a GDS-connected booking platform with dynamic pricing and yield controls. 16 to 28 weeks with phased delivery." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-emerald-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and is creditable against any full engagement. See the <Link href="/contact" className="text-emerald-400 hover:underline">contact page</Link> for the full scoping flow.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Three patterns repeat. First, overbooking from a naive write path. A team builds the booking flow as a simple read-then-write — check availability, then insert the reservation — and under flash-sale concurrency two guests pass the check before either insert lands. The last room sells twice. The fix is holding inventory atomically inside the transaction and making the whole path idempotent so retries and races cannot oversell. Retrofitting that after the first oversell means re-instrumenting every booking write.
                        </p>
                        <p>
                            Second, peak-season meltdown. Everything is fine in development and on a normal Tuesday, then a holiday weekend or a 24-hour flash sale drives ten times the traffic and the database — serving uncached availability lookups on every page view — falls over at exactly the moment every booking matters. Reads belong in cache and at the edge; bookings belong in a queue. Build for the spike you know is coming, not the average you tested against.
                        </p>
                        <p>
                            Third, channel sync treated as fire-and-forget. The integration pushes a rate change or a booking to an OTA, the call fails or times out, nobody notices, and now your channel manager and your direct site disagree about what is available — which produces the very oversell the channel manager was supposed to prevent. Sync has to be reconciled, retried, and monitored, with alerting when a channel drifts. We build the reconciliation loop in from the start, not after the first walk-the-guest incident.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led matters for travel</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The thing that hurts a travel company is rarely a missing feature. It is the double-booking that turns into a one-star review during peak week, the chargeback wave from a fraud ring that found an unguarded checkout, or the database of travelers&apos; passport numbers and payment tokens sitting on a contractor&apos;s laptop in another country with GDPR and CCPA exposure attached. Those are the quiet existential risks in travel engineering — and they are precisely why we are US-based, founder-led, and engagement-first on every project.
                        </p>
                        <p>
                            William Beltz writes or reviews every line of code that touches your bookings, your money flows, or your travelers&apos; data. NDAs are mutual and signed before discovery. Source code lives in your GitHub organization, not ours. The handoff is documented for either ongoing collaboration or in-house ownership — your call.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Penetration testing tied to travel-industry threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Travel platforms get attacked where the money and the inventory are — payment fraud and carding at checkout, credential stuffing against loyalty accounts, and abuse of booking and refund logic to drain points or trigger fraudulent refunds. Our <Link href="/services/web-app-pentest" className="text-emerald-400 hover:underline">web app penetration testing</Link> targets exactly those surfaces: the booking and payment flow, authentication and account recovery, the search and availability endpoints that bots scrape, and the business logic around cancellations, refunds, and loyalty redemption where the costliest bugs hide.
                        </p>
                        <p>
                            Broader <Link href="/services/penetration-testing" className="text-emerald-400 hover:underline">penetration testing</Link> covers the rest — the external perimeter, internal network, and the API surface behind your booking engine and channel integrations. Findings are evidence-backed and audit-ready, which matters when a card brand, a PCI assessor, or a cyber-insurance carrier asks for proof that your booking platform was tested. For ongoing coverage between engagements, <Link href="/services/managed-security-services" className="text-emerald-400 hover:underline">managed security services</Link> keep monitoring and patching steady through your peak seasons.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Architecture patterns for booking systems</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">Read fast, write safe.</span> The pattern that makes a booking platform survive peak season separates the read path from the write path entirely. Availability, pricing, and search are denormalized into a cache and served from the edge so a holiday spike or flash sale is absorbed before it reaches the database. The booking itself — the only operation that must be exactly correct — runs through an idempotent, queue-backed transaction that holds inventory atomically. The same shape powers single-property engines and multi-property platforms; only the inventory model and the scale of the queue change.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Idempotent payments and bookings.</span> Every booking and every charge carries an idempotency key so a double-tapped button, a retried request, or a replayed Stripe webhook produces one reservation and one charge — never two. Payment state is reconciled against Stripe as the source of truth, and a held-then-confirmed flow ensures a guest is never charged for a room the system could not actually secure.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Channel sync as a reconciliation loop.</span> Channel manager, OTA, GDS, and PMS integrations live behind a dedicated adapter layer with per-provider rate limiting and retries. Sync is never fire-and-forget: every push is confirmed, drift between channels is detected and corrected, and the system alerts when a channel falls out of step — so the channel manager prevents oversells instead of causing them. These are the same patterns we apply across <Link href="/services/third-party-api-integration" className="text-emerald-400 hover:underline">third-party API integration</Link> and <Link href="/services/api-development" className="text-emerald-400 hover:underline">API development</Link> engagements.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "What is the PCI-DSS scope for a travel booking site?",
                                a: "If you take card payments at booking, you are in PCI scope. Our default architecture tokenizes cards with Stripe Elements or Checkout so the card number never touches your servers and you stay in SAQ A. Scope only widens to SAQ A-EP or SAQ D when you capture card fields directly or store PANs, which we avoid by design.",
                            },
                            {
                                q: "Can you integrate a channel manager and the OTAs?",
                                a: "Yes. We connect to channel managers and OTAs — Expedia, Booking.com, and Airbnb — with two-way rate and availability sync, idempotent updates, and conflict resolution so two channels selling the last room never produce a double-booking. Cancellations and modifications reconcile across every connected channel.",
                            },
                            {
                                q: "How do you handle peak-season traffic spikes and flash sales?",
                                a: "Availability and pricing reads are served from cache and the edge so a spike does not melt your database. Bookings run through an idempotent, queue-backed path that holds inventory atomically, so overselling cannot happen even at peak concurrency. Rate limiting protects checkout and search from bots during the surge.",
                            },
                            {
                                q: "Can you connect to the GDS — Amadeus, Sabre, or Travelport?",
                                a: "Yes. We integrate Amadeus, Sabre, and Travelport for air, hotel, and car content where the model needs it, alongside direct OTA and supplier APIs. We build the adapter layer, caching, and retry semantics so the booking path stays reliable under each system's session model and rate limits.",
                            },
                            {
                                q: "How do you handle refunds, cancellations, and chargebacks?",
                                a: "Cancellation and refund rules are modeled as policy and enforced in code, so the right amount is returned automatically with a full audit trail. Refunds go back through Stripe. For chargebacks we wire Stripe's dispute evidence flow and capture booking and consent records at purchase so your team responds inside the network deadline.",
                            },
                            {
                                q: "Do travel booking sites need to be ADA and WCAG accessible?",
                                a: "Yes, and travel is a frequent ADA-litigation target. We build booking flows to WCAG 2.2 AA — keyboard-operable date pickers, labeled fields, sufficient contrast, screen-reader-friendly calendars, and accessible checkout errors — wired in from the first component, not retrofitted after a demand letter.",
                            },
                            {
                                q: "Is offshore development an IP and data risk for travel companies?",
                                a: "It can be. Your booking engine, pricing logic, and a database of travelers' passport numbers, payment tokens, and itineraries are exactly the assets you do not want on a foreign contractor's laptop — especially with GDPR and CCPA exposure. We are US-based, founder-led, and signing mutual NDAs is the first step of every engagement.",
                            },
                            {
                                q: "What does a $25,000 travel build look like?",
                                a: "A focused MVP — one high-value workflow shipped well. Example: a single-property booking engine with an availability calendar, Stripe Checkout for the deposit, automated confirmation email, and an owner dashboard, scoped to 4 to 8 weeks. Channel manager and dynamic pricing come in a later phase once the core books reliably.",
                            },
                        ].map((item) => (
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
                            { slug: "ecommerce-development", title: "E-commerce Development", desc: "Conversion-focused checkout and storefronts — the backbone of a direct-booking flow." },
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Deposits, installments, multi-currency, refunds, and Connect payouts for marketplaces." },
                            { slug: "third-party-api-integration", title: "Third-Party API Integration", desc: "Channel manager, OTA, GDS, and PMS connections with reconciliation and retries." },
                            { slug: "web-app-pentest", title: "Web App Pentest", desc: "Booking-flow, payment, auth, and business-logic testing — audit-ready findings." },
                            { slug: "saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant booking and marketplace platforms built to scale through peak season." },
                            { slug: "cloud-infrastructure", title: "Cloud Infrastructure", desc: "Caching, queues, and edge delivery sized for holiday and flash-sale traffic spikes." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-emerald-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["stripe","compliance","build-vs-buy"]}
                        heading="Travel & hospitality engineering reading"
                        pinned={["nextjs-stripe-integration-guide","pci-dss-compliance-saas-checklist","handling-failed-payments-in-stripe"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ship booking that holds up at peak season.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-emerald-400 hover:underline">book a 20-minute scope call</Link>. Mutual NDA signed before discovery. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
