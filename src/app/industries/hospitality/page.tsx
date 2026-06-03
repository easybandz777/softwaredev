import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Hotel, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Hospitality Software Development & Security | QUANT LAB USA",
    description:
        "Custom hospitality software — booking engines, PMS and POS integrations, guest apps, and loyalty. PCI-DSS aware builds plus MITRE ATT&CK pentests. Founder-led, US-based.",
    slug: "industries/hospitality",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Software for Hospitality",
    url: "https://quantlabusa.dev/industries/hospitality",
    description:
        "Hospitality-specific software development — direct booking engines, PMS and POS integrations, guest apps, and loyalty programs with PCI-DSS controls baked in. Founder-led, US-based, mutual NDA from day one.",
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
        { "@type": "ListItem", position: 3, name: "Hospitality", item: "https://quantlabusa.dev/industries/hospitality" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Hospitality Software Development",
    name: "Custom Software Development for Hospitality",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for hospitality — direct booking engines, property management and point-of-sale integrations, guest mobile apps, and loyalty programs. PCI-DSS-aware builds with pentesting tied to hospitality threat models via MITRE ATT&CK.",
    url: "https://quantlabusa.dev/industries/hospitality",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can you build a direct booking engine that avoids OTA commissions?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — that is one of the highest-ROI builds in hospitality. We build a fast, mobile-first booking flow with real-time availability and rate sync to your PMS, integrated payments, and a rate-parity-aware design. Every direct booking you capture is a commission you do not pay an OTA, and the build typically pays for itself in a season.",
            },
        },
        {
            "@type": "Question",
            name: "Do you integrate with PMS and POS systems?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We integrate with common property-management systems (Opera, Cloudbeds, Mews, RoomRaccoon) and point-of-sale platforms (Toast, Square, Lightspeed) through their APIs, plus channel managers and OTA connectivity. We normalize availability, rates, and folio data so your guest-facing app and back office stay in sync.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle PCI-DSS for hospitality payments?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Our default architecture tokenizes card data with Stripe Elements or a PCI-validated gateway so your environment stays in the lightest SAQ scope. We never store raw card numbers on your servers. For properties capturing cards at the front desk or for incidentals, we scope the boundary honestly and document where card data flows.",
            },
        },
        {
            "@type": "Question",
            name: "Is hospitality software a real security target?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Hotels and restaurants are among the most-breached sectors because they process high volumes of card data and guest PII across many endpoints. We map pentests to the techniques hospitality attackers actually use — point-of-sale malware, credential theft, and booking-engine fraud — and harden the payment and guest-data paths first.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build a guest mobile app with mobile check-in and keyless entry?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We build guest apps with mobile check-in, digital room keys via the lock vendor's SDK (Assa Abloy, Salto, Dormakaba), in-stay messaging, service requests, and folio review. The app integrates with your PMS so the front desk and the guest see the same state.",
            },
        },
        {
            "@type": "Question",
            name: "Why is hospitality treated as a specialized software domain?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Three things make it hard. Inventory is perishable and rate logic is complex — availability, rate plans, and parity rules change by the hour. The integration surface spans PMS, POS, channel managers, payment gateways, and lock vendors that all have to agree. And the sector is a top breach target, so payment security cannot be an afterthought. A generic team underestimates all three.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 hospitality build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Around $25,000 covers a focused MVP — one high-value workflow shipped well. Example: a direct booking engine with real-time availability from your PMS, Stripe payments, and a clean mobile-first flow that starts winning bookings back from the OTAs. Scoped tight, it ships in 4 to 8 weeks.",
            },
        },
    ],
};

export default function HospitalityIndustryPage() {
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
                        <li className="text-gray-300">Hospitality</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-rose-500 to-amber-400 mb-6">
                        <Hotel className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Hospitality — Win Direct Bookings, Delight Guests, Stay PCI-Safe
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Direct booking engines, PMS and POS integrations, guest apps, and loyalty programs — built by a US-based, founder-led team that understands perishable inventory, complex rate logic, and why payment security cannot be an afterthought.
                    </p>
                    <ConsultationCTA label="Scope a Hospitality Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Every empty room is revenue you never get back.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Hospitality inventory is perishable in a way few products are — an unsold room-night or an empty table at 8 p.m. is revenue that is gone forever. That puts enormous pressure on the booking funnel, the rate logic, and the channel mix. Meanwhile the OTAs take fifteen to twenty-five percent of every reservation they send, so a property that cannot win direct bookings is handing margin to a middleman on every stay.
                        </p>
                        <p>
                            We build the software that captures more direct revenue and runs the operation behind it. A fast, mobile-first booking engine with real-time availability synced to your PMS. Guest apps with mobile check-in and digital keys. Loyalty programs that give guests a reason to book direct next time. And it is all wired with payment security as a first principle, because hospitality is one of the most-breached sectors in the economy and a card-data incident can end a property&apos;s reputation overnight.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why hospitality is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Rate and availability logic is deceptively hard. A single room type can carry a dozen rate plans, length-of-stay restrictions, channel-specific pricing, and parity rules that the OTAs enforce contractually. Availability changes by the hour as bookings land across multiple channels. Get the sync wrong and you either oversell — and walk a guest at midnight — or undersell and leave money on the table. The booking engine has to be exactly consistent with the PMS, in real time, across every channel.
                        </p>
                        <p>
                            The integration surface compounds it. A reservation touches the PMS, a channel manager, the OTA connectivity layer, a payment gateway, and increasingly a lock vendor for keyless entry. A restaurant order touches the POS, the kitchen display, online ordering, and delivery aggregators. Each system has its own API, its own latency, and its own idea of the truth. We have wired these stacks before and know where the time goes — usually in the rate-and-availability reconciliation and the payment boundary, not the front end.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for hospitality operators</h2>
                    <ul className="space-y-3">
                        {[
                            "Direct booking engines — real-time availability, rate-plan logic, parity-aware design, and integrated payments",
                            "PMS and POS integrations — Opera, Cloudbeds, Mews, Toast, Square, Lightspeed via API and channel managers",
                            "Guest mobile apps — mobile check-in, digital room keys, in-stay messaging, service requests, and folio review",
                            "Loyalty and CRM — guest profiles, stay history, points, segmented offers, and a reason to book direct",
                            "Restaurant ordering and reservations — online ordering, table management, waitlists, and kitchen display sync",
                            "Revenue and channel dashboards — occupancy, ADR, RevPAR, and channel-mix analytics in one view",
                            "Back-office tooling — housekeeping, maintenance, group bookings, and event-and-banquet management",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common hospitality projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Direct booking engine", d: "A fast, mobile-first booking flow with real-time availability from your PMS, rate-plan logic, Stripe or gateway payments, and a design that wins reservations back from the OTAs." },
                            { t: "Guest app with mobile check-in", d: "Mobile check-in, digital room keys via the lock vendor's SDK, in-stay messaging, service requests, and folio review, all synced to the PMS so the front desk sees the same state." },
                            { t: "Loyalty and direct-booking incentive", d: "Guest profiles, stay history, points, member-only rates, and segmented offers that give guests a concrete reason to skip the OTA next time." },
                            { t: "Restaurant online ordering and reservations", d: "Online ordering with POS and kitchen-display sync, table management, waitlists, and delivery-aggregator integration where it earns its keep." },
                            { t: "Channel and revenue dashboard", d: "Occupancy, ADR, RevPAR, pace, and channel mix in one view, pulling from the PMS and channel manager so revenue managers stop living in spreadsheets." },
                            { t: "Group, event, and banquet management", d: "Room blocks, function-space scheduling, banquet event orders, and billing for groups and events that the PMS handles poorly." },
                            { t: "Housekeeping and maintenance ops", d: "Room-status board, assignment, inspection, and maintenance ticketing on mobile so the floor and the front desk stay coordinated." },
                            { t: "Multi-property management layer", d: "A unified dashboard across a portfolio — consolidated reporting, shared guest profiles, and cross-property loyalty for a small group or brand." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Security and compliance considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">PCI-DSS.</span> Hospitality processes high volumes of card data across many endpoints — booking engine, front desk, restaurant, spa, parking. Our default architecture tokenizes cards with Stripe Elements or a PCI-validated gateway so you stay in the lightest SAQ scope. We never store raw PAN data, and we document the card-data boundary honestly where front-desk or incidental capture is unavoidable.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Point-of-sale malware and breach history.</span> The sector is a top breach target, and POS-resident malware that scrapes card data has cost major brands dearly. We isolate the payment path, harden the endpoints we control, and instrument the booking and payment flows so anomalous activity surfaces fast.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Guest PII and privacy.</span> Guest profiles, loyalty data, and stay history are attractive and increasingly regulated. We minimize what we store, encrypt PII at rest and in transit, and support data-access and deletion requests where state privacy laws require them.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Account takeover and loyalty fraud.</span> Loyalty points are a currency, and points-draining fraud is real. We wire MFA on accounts that hold value, rate-limit redemption, and log the activity needed to claw back fraudulent transactions.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Rate-parity and contractual obligations.</span> OTA contracts often impose rate-parity rules. We do not give legal advice, but we build the rate logic and audit trail your revenue and legal teams need to manage parity deliberately rather than by accident.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for hospitality</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 16 on the App Router with React and TypeScript end-to-end for booking engines and dashboards; React Native or a progressive web app for the guest-facing mobile experience. Postgres for the system of record, with Stripe for tokenized payments so PCI scope stays light. Prisma or Drizzle as the type-safe ORM. A background worker layer (Inngest or BullMQ on Redis) for availability sync, channel updates, and loyalty rollups.
                        </p>
                        <p>
                            PMS, POS, and channel-manager integrations get a normalized model so availability and rate data are consistent regardless of the upstream vendor. Lock-vendor SDKs (Assa Abloy, Salto, Dormakaba) power keyless entry where the property supports it. Sentry plus a log aggregator for observability, with card-data and PII redaction in the logger. The web tier deploys to Vercel; the payment and data plane move to a hardened, PCI-scoped environment when card flows require it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused MVP", body: "A single high-value workflow shipped clean — a direct booking engine with real-time PMS availability, Stripe payments, and a mobile-first flow that starts winning bookings back from the OTAs. 4 to 8 weeks." },
                            { tier: "$60K", title: "Production platform", body: "A real guest-facing product — booking engine plus a guest app with mobile check-in, loyalty, payments, and PMS sync, with the payment boundary scoped cleanly. 10 to 16 weeks." },
                            { tier: "$150K+", title: "Portfolio or multi-system", body: "A multi-property platform with consolidated reporting, cross-property loyalty, POS and channel-manager integration, and revenue analytics. 16 to 28 weeks with phased delivery." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-rose-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and is creditable against any full engagement. See the <Link href="/contact" className="text-rose-400 hover:underline">contact page</Link> for the full scoping flow, or the <Link href="/pricing" className="text-rose-400 hover:underline">pricing page</Link> for engagement models.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            First, a booking engine that is not truly real-time with the PMS. A cached availability layer feels faster until it oversells a room and the property has to walk a guest at midnight. Availability and rate sync has to be authoritative, not eventually consistent, for the inventory that matters.
                        </p>
                        <p>
                            Second, treating payment security as a launch-week checkbox. Hospitality is a top breach target, and a card-data incident is existential for a property&apos;s reputation. The payment boundary belongs in the first architecture diagram, with tokenization at the edge and the PCI scope mapped honestly — not retrofitted after a QSA flags it.
                        </p>
                        <p>
                            Third, building features no guest uses. Operators get pitched augmented-reality lobby tours and AI concierges before they have a booking flow that loads fast on a phone. The revenue is in the fundamentals — fast direct booking, frictionless check-in, a loyalty reason to come back. We push hard to ship those first.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led matters for hospitality</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Hospitality software touches guest payment data and runs the revenue engine of the property. You do not want the payment boundary designed by a contractor overseas who rotates off before the first PCI review. We are US-based and founder-led, and the person who designs your card-data flow is reachable when a gateway changes its API or a channel manager starts returning bad availability.
                        </p>
                        <p>
                            William Beltz writes or reviews every line that touches guest payments, rates, and reservations. NDAs are mutual and signed before discovery. Source code lives in your GitHub organization, not ours. The handoff is documented for either ongoing collaboration or in-house ownership — your call.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MITRE ATT&amp;CK pentests tied to hospitality threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Hotels and restaurants are among the most-breached sectors because they process card data and guest PII across many endpoints. We run <Link href="/services/penetration-testing" className="text-rose-400 hover:underline">penetration tests</Link> mapped to the MITRE ATT&amp;CK techniques hospitality attackers actually use — point-of-sale malware, credential theft, and booking-engine fraud — then deliver a heatmap of which techniques succeed, which get detected, and which get blocked.
                        </p>
                        <p>
                            For the booking engine, guest app, and loyalty surfaces that carry payment and guest data, <Link href="/services/web-app-pentest" className="text-rose-400 hover:underline">web application penetration testing</Link> covers authentication, the payment boundary, and the API surface that ties into your PMS and POS. Every finding maps to ATT&amp;CK technique IDs so your team knows what to alert on.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Can you build a direct booking engine that avoids OTA commissions?",
                                a: "Yes — one of the highest-ROI builds in hospitality. We build a fast, mobile-first booking flow with real-time availability and rate sync to your PMS, integrated payments, and a parity-aware design. Every direct booking is a commission you do not pay an OTA, and it typically pays for itself in a season.",
                            },
                            {
                                q: "Do you integrate with PMS and POS systems?",
                                a: "Yes — Opera, Cloudbeds, Mews, RoomRaccoon on the PMS side and Toast, Square, Lightspeed on POS, plus channel managers and OTA connectivity. We normalize availability, rates, and folio data so your guest app and back office stay in sync.",
                            },
                            {
                                q: "How do you handle PCI-DSS for hospitality payments?",
                                a: "Our default architecture tokenizes card data with Stripe Elements or a PCI-validated gateway so you stay in the lightest SAQ scope. We never store raw card numbers. For front-desk or incidental capture, we scope the boundary honestly and document where card data flows.",
                            },
                            {
                                q: "Is hospitality software a real security target?",
                                a: "Yes. Hotels and restaurants are among the most-breached sectors because they process high volumes of card data and guest PII across many endpoints. We map pentests to hospitality attacker techniques — POS malware, credential theft, booking fraud — and harden the payment and guest-data paths first.",
                            },
                            {
                                q: "Can you build a guest app with mobile check-in and keyless entry?",
                                a: "Yes — mobile check-in, digital room keys via the lock vendor's SDK (Assa Abloy, Salto, Dormakaba), in-stay messaging, service requests, and folio review. The app integrates with your PMS so the front desk and the guest see the same state.",
                            },
                            {
                                q: "Why is hospitality treated as a specialized software domain?",
                                a: "Inventory is perishable and rate logic is complex, the integration surface spans PMS, POS, channel managers, gateways, and lock vendors that all have to agree, and the sector is a top breach target so payment security cannot be an afterthought. A generic team underestimates all three.",
                            },
                            {
                                q: "What does a $25,000 hospitality build look like?",
                                a: "A focused MVP — a direct booking engine with real-time availability from your PMS, Stripe payments, and a clean mobile-first flow that starts winning bookings back from the OTAs. Scoped tight, it ships in 4 to 8 weeks.",
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
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Tokenized booking payments and deposits that keep your PCI scope light." },
                            { slug: "mobile-app-development", title: "Mobile App Development", desc: "Guest apps with mobile check-in, digital keys, and in-stay messaging." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Booking engines and operations tooling built around perishable inventory." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "MITRE ATT&CK-aligned testing for POS malware and booking-engine fraud." },
                            { slug: "web-app-pentest", title: "Web App Pentest", desc: "Booking engine, guest app, and loyalty surfaces tested at the payment boundary." },
                            { slug: "api-development", title: "API Development", desc: "PMS, POS, and channel-manager integrations with a normalized availability model." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-rose-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-rose-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["stripe", "compliance", "build-vs-buy"]}
                        heading="Hospitality engineering & build reading"
                        pinned={["nextjs-stripe-integration-guide", "build-vs-buy-software-2026", "what-is-penetration-testing"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Win direct bookings and keep guest data safe.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-rose-400 hover:underline">book a 20-minute scope call</Link>. Mutual NDA signed before discovery. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
