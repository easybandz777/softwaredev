import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Smartphone, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

const cities: { slug: string; city: string; state: string }[] = [
    { slug: "atlanta-ga", city: "Atlanta", state: "GA" },
    { slug: "macon-ga", city: "Macon", state: "GA" },
    { slug: "augusta-ga", city: "Augusta", state: "GA" },
    { slug: "columbus-ga", city: "Columbus", state: "GA" },
    { slug: "savannah-ga", city: "Savannah", state: "GA" },
    { slug: "miami-fl", city: "Miami", state: "FL" },
    { slug: "austin-tx", city: "Austin", state: "TX" },
    { slug: "dallas-tx", city: "Dallas", state: "TX" },
    { slug: "chicago-il", city: "Chicago", state: "IL" },
    { slug: "seattle-wa", city: "Seattle", state: "WA" },
    { slug: "new-york-ny", city: "New York", state: "NY" },
    { slug: "charlotte-nc", city: "Charlotte", state: "NC" },
    { slug: "nashville-tn", city: "Nashville", state: "TN" },
    { slug: "san-francisco-ca", city: "San Francisco", state: "CA" },
];

export const metadata = pageMetadata({
    title: "Mobile App Development (iOS/Android) | QUANT LAB USA",
    description:
        "Custom mobile app development for iOS, Android, and React Native. App Store and Play Store ready, with TestFlight, OTA updates, and analytics. By QUANT LAB USA.",
    slug: "services/mobile-app-development",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mobile App Development",
    name: "iOS, Android, and React Native Mobile App Development",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Founder-led mobile app development for iOS and Android, on React Native, Swift, and Kotlin. Includes API and backend, push notifications, offline sync, in-app purchase wiring, App Store and Play Console submission, and post-launch monitoring.",
    url: "https://quantlabusa.dev/services/mobile-app-development",
    offers: {
        "@type": "Offer",
        priceRange: "$25,000-$120,000",
        priceCurrency: "USD",
        description: "Fixed-fee scope per phase",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Mobile App Development", item: "https://quantlabusa.dev/services/mobile-app-development" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Should we build native iOS and Android or use React Native?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Default to React Native if your app is content-heavy, form-driven, or backend-bound. Go native (Swift or Kotlin) when you need deep hardware integration, complex animations, or platform-specific frameworks like ARKit, HealthKit, or CarPlay. We scope this in week one based on your actual feature list, not a sales pitch.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a custom mobile app take to ship?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "10 to 20 weeks for a production v1 across both stores. Discovery and design take 2 to 3 weeks, the build runs 8 to 16 weeks, and submission plus review handles the last 1 to 2 weeks. Apps with complex backends, payments, or audit requirements land at the upper end.",
            },
        },
        {
            "@type": "Question",
            name: "Do you handle App Store and Google Play submission?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We prepare screenshots, copy, privacy declarations, IAP product setup, and TestFlight or internal-testing tracks. We manage the first submission and the first one or two rejections — most are minor metadata or privacy-disclosure issues we know how to handle.",
            },
        },
        {
            "@type": "Question",
            name: "What about the backend, push notifications, and analytics?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Standard part of the scope. We build the API on Node and PostgreSQL, wire push through APNs and FCM, and instrument analytics with PostHog or a tool you already use. The app is one piece of a system, not a standalone deliverable.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the backend, the signing certificates, the App Store and Play Console accounts in your name, and the documentation. There is no platform fee and no exit ransom.",
            },
        },
    ],
};

export default function MobileAppDevelopmentPage() {
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
                        <li className="text-gray-300">Mobile App Development</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 mb-6">
                        <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Mobile App Development for Companies Past the MVP Stage
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        iOS, Android, and React Native apps with the backend, App Store, and Play Console handled end to end. Founder-led from scope through launch — no offshore handoffs, no agency markup, no half-finished cross-platform demos.
                    </p>
                    <ConsultationCTA label="Scope a Mobile Build" service="Mobile App Development" source="services-mobile" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why most mobile builds stall</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Three failure modes show up over and over. The first is the cross-platform demo that looked fine in Figma and falls apart the moment a real device runs out of memory or loses connectivity. The second is the native build that took eighteen months because the agency had a junior pool, a project manager, and three layers of bureaucracy between the founder and the engineer writing code. The third is the app that launched, passed App Store review, and immediately broke because nobody planned for production analytics, crash reporting, or a backend that could survive a real install base.
                        </p>
                        <p>
                            Custom mobile app development is not just writing a Swift or Kotlin file. It is the API, the auth flow, the push notification routing, the in-app purchase reconciliation, the offline-first sync, the deep-link routing, and the operational layer that catches problems before your users do. We ship apps that survive that whole list.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <ul className="space-y-3">
                        {[
                            "Native iOS apps in Swift and SwiftUI for App Store distribution",
                            "Native Android apps in Kotlin and Jetpack Compose for Play Store distribution",
                            "Cross-platform React Native apps when shared code wins on velocity and maintenance cost",
                            "Backend API on Node, PostgreSQL, and Prisma — same stack we use for every custom build",
                            "Authentication flows including Sign in with Apple, Google Sign-In, magic link, and biometric unlock",
                            "Push notifications wired through APNs and Firebase Cloud Messaging with delivery audit logs",
                            "Offline-first data sync with conflict resolution for field-worker, retail, and contractor apps",
                            "In-app purchase and subscription wiring through StoreKit 2 and Google Play Billing, reconciled server-side",
                            "Deep linking, universal links, and App Links so marketing channels land users in the right screen",
                            "Crash reporting, performance monitoring, and analytics instrumented from day one",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Two-week discovery — user flows, screen map, platform decision (native vs React Native), backend schema, and a phased build plan. From there we run a six- to sixteen-week build with weekly TestFlight and Play Internal Testing drops so you are clicking through a real app from week three onward, not waiting for a demo at the end.
                        </p>
                        <p>
                            Discovery is paid separately at $2,500. You walk away with wireframes, a data model, a phased estimate, and a platform recommendation. Useful even if you take it to another developer — but most clients sign for the build because the spec is already done.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Process &amp; timeline</h2>
                    <ul className="space-y-3">
                        {[
                            "Week 1-2: Discovery sprint — user flows, platform decision, data model, phased estimate",
                            "Week 3-4: Design pass and backend foundations — auth, data model, initial API endpoints",
                            "Week 5-12: Build sprints — TestFlight and Play Internal Testing builds every Friday",
                            "Week 13-15: Hardening — accessibility, edge cases, App Store screenshots, privacy declarations",
                            "Week 16-18: Submission, review iteration, production launch, 30-day post-launch support",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Swift + SwiftUI",
                            "Kotlin + Jetpack Compose",
                            "React Native + Expo",
                            "Node + TypeScript API",
                            "PostgreSQL + Prisma",
                            "APNs + Firebase FCM",
                            "StoreKit 2 + Play Billing",
                            "Sentry + PostHog",
                            "Fastlane + EAS Build",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Backend hosted on Vercel, Fly.io, AWS, or your own infrastructure — your call. The same patterns that power our <Link href="/services/web-applications" className="text-emerald-400 hover:underline">Next.js web applications</Link> and <Link href="/services/custom-crm-development" className="text-emerald-400 hover:underline">custom CRMs</Link> sit underneath the mobile layer.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference builds</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Mobile patterns we have shipped in production show up across our case studies. <Link href="/work/motorcycle-shop-ops-platform" className="text-emerald-400 hover:underline">A motorcycle shop ops platform</Link> uses a tablet-grade interface designed for service-bay workflows. <Link href="/work/contractor-estimating-proposal-engine" className="text-emerald-400 hover:underline">A contractor estimating engine</Link> ships proposals from the field with offline support. <Link href="/work/northcrest-fence" className="text-emerald-400 hover:underline">Northcrest Fence</Link> runs a mobile-first lead intake and routing flow.
                        </p>
                        <p>
                            We dogfood our own architecture before we ship it. The patterns we use for client mobile work are the same ones we run internally. No experiments paid for by clients.
                        </p>
                        <p>
                            Served from <Link href="/software-development-macon-ga" className="text-emerald-400 hover:underline">Macon, GA</Link>, with mobile clients across <Link href="/software-development-atlanta-ga" className="text-emerald-400 hover:underline">Atlanta</Link>, <Link href="/software-development-austin-tx" className="text-emerald-400 hover:underline">Austin</Link>, <Link href="/software-development-miami-fl" className="text-emerald-400 hover:underline">Miami</Link>, and beyond.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fixed-fee per phase. Typical ranges by scope:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Single-platform v1 (React Native, simple backend): $25k – $55k</li>
                            <li>Dual-platform v1 (iOS + Android, full backend, payments): $45k – $90k</li>
                            <li>Native iOS or Android with deep platform features (HealthKit, ARKit, CarPlay): $60k – $120k</li>
                            <li>Discovery sprint: $2,500 flat, billed separately so you can decide before committing</li>
                        </ul>
                        <p>
                            Optional retainer for continued feature work after launch. 30-day post-launch support included on every build.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Full source code repository — mobile clients and backend, in your GitHub org",
                            "App Store Connect and Google Play Console accounts in your name",
                            "Signing certificates, provisioning profiles, and the keys to the kingdom",
                            "30-day post-launch support — bug fixes, App Store re-review handling, hot patches",
                            "Crash reporting, analytics, and performance monitoring wired and operational",
                            "Admin and user documentation, plus a runbook for backend operations",
                            "Optional retainer for continued feature work and platform upgrades",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Should we build native iOS and Android or use React Native?",
                                a: "Default to React Native if your app is content-heavy, form-driven, or backend-bound. Go native (Swift or Kotlin) when you need deep hardware integration, complex animations, or platform-specific frameworks like ARKit, HealthKit, or CarPlay. We scope this in week one based on your actual feature list, not a sales pitch.",
                            },
                            {
                                q: "How long does a custom mobile app take to ship?",
                                a: "10 to 20 weeks for a production v1 across both stores. Discovery and design take 2 to 3 weeks, the build runs 8 to 16 weeks, and submission plus review handles the last 1 to 2 weeks. Apps with complex backends, payments, or audit requirements land at the upper end.",
                            },
                            {
                                q: "Do you handle App Store and Google Play submission?",
                                a: "Yes. We prepare screenshots, copy, privacy declarations, IAP product setup, and TestFlight or internal-testing tracks. We manage the first submission and the first one or two rejections — most are minor metadata or privacy-disclosure issues we know how to handle.",
                            },
                            {
                                q: "What about the backend, push notifications, and analytics?",
                                a: "Standard part of the scope. We build the API on Node and PostgreSQL, wire push through APNs and FCM, and instrument analytics with PostHog or a tool you already use. The app is one piece of a system, not a standalone deliverable.",
                            },
                            {
                                q: "Do we own the code?",
                                a: "Completely. You get the GitHub repository, the backend, the signing certificates, the App Store and Play Console accounts in your name, and the documentation. There is no platform fee and no exit ransom.",
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
                    <RelatedPosts
                        topics={["stack","saas"]}
                        heading="Engineering reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "api-development", title: "API Development", desc: "REST and GraphQL APIs to back your mobile clients." },
                            { slug: "web-applications", title: "Next.js Web Apps", desc: "Companion web dashboards and admin portals." },
                            { slug: "saas-platform-development", title: "SaaS Platform Development", desc: "Full multi-tenant SaaS with mobile as a first-class client." },
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
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        Most mobile builds connect to a custom backend — see our <Link href="/blog/custom-crm-development-guide" className="text-emerald-400 hover:underline">custom CRM development guide</Link> for how we approach data ownership, or <Link href="/contact" className="text-emerald-400 hover:underline">contact us</Link> directly to scope a mobile project.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-emerald-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Mobile App Development — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team, working with clients across 14 US metros. Mobile discovery and build run remotely; in-person scoping sessions easy to schedule in Atlanta and the Southeast.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {cities.map((c) => (
                            <Link
                                key={c.slug}
                                href={`/software-development-${c.slug}`}
                                className="group flex items-center justify-between rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 transition-all hover:border-emerald-400/30 hover:bg-[#0d1526]"
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                        {c.city}, {c.state}
                                    </span>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to ship a mobile app that actually launches.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. We will tell you in the first conversation whether your idea is a React Native build, a native build, or a problem mobile cannot actually solve.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="Mobile App Development" source="services-mobile" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
