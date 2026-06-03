import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Orlando FL Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Orlando custom software for tourism, simulation, healthcare, and SaaS — plus penetration testing from a founder-led firm. Macon-based, remote-first. Call (770) 652-1282.",
    slug: "software-development-orlando-fl",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-orlando-fl#localbusiness",
    name: "QUANT LAB USA — Orlando Coverage",
    url: "https://quantlabusa.dev/software-development-orlando-fl",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Orlando", containedInPlace: { "@type": "State", name: "Florida" } },
        { "@type": "City", name: "Winter Park" },
        { "@type": "City", name: "Lake Mary" },
        { "@type": "City", name: "Kissimmee" },
        { "@type": "City", name: "Sanford" },
        { "@type": "AdministrativeArea", name: "Orange County" },
        { "@type": "AdministrativeArea", name: "Seminole County" },
        { "@type": "AdministrativeArea", name: "Osceola County" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 28.5383, longitude: -81.3792 },
    address: { "@type": "PostalAddress", addressLocality: "Orlando", addressRegion: "FL", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Orlando, FL",
    provider: {
        "@id": "https://quantlabusa.dev/#organization",
        "@type": "Organization",
        name: "QUANT LAB USA",
    },
    areaServed: { "@type": "City", name: "Orlando", containedInPlace: { "@type": "State", name: "Florida" } },
    description:
        "Custom CRMs, booking and operations platforms, Stripe billing, and full-scope penetration testing for Orlando tourism, simulation, and healthcare operators.",
    url: "https://quantlabusa.dev/software-development-orlando-fl",
};

const services = [
    {
        title: "Booking & Guest-Experience Platforms",
        desc: "Reservation engines, capacity management, and guest portals for attraction, resort, and hospitality operators. Typical: $25k–$80k.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Replace spreadsheet-and-HubSpot stacks for Lake Nona health, I-Drive hospitality, and Lake Mary tech operators. Typical: $20k–$70k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Ticketing, memberships, metered usage, and multi-property entitlements wired to Stripe. Typical: $8k–$28k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full engagements with formal reports for PCI scope, vendor reviews, and SOC 2. Typical: $8k–$28k.",
    },
    {
        title: "Simulation & Training Tooling",
        desc: "Data dashboards and integration layers for the Research Park modeling and simulation cluster. Typical: $25k–$90k.",
    },
    {
        title: "MITRE ATT&CK Assessments",
        desc: "Attack-chain documentation mapped to MITRE techniques for leadership and security teams. Typical: $12k–$35k.",
    },
];

const faqs = [
    {
        q: "Do you work with Orlando tourism and hospitality operators?",
        a: "Yes — booking engines, capacity and queue management, guest portals, and ticketing are core to our Orlando work. We integrate with existing property-management and point-of-sale systems rather than forcing a rip-and-replace.",
    },
    {
        q: "Can you support PCI scope reduction for high-volume ticketing?",
        a: "Yes — when payments route through Stripe we keep card data out of your servers, which collapses most of your PCI footprint. We document the architecture so your QSA review goes smoothly.",
    },
    {
        q: "Do you serve the Lake Nona Medical City healthcare cluster?",
        a: "Yes — we build HIPAA-aware intake, scheduling, and operations dashboards. Protected health information stays in BAA-eligible infrastructure with encrypted flows and audit-friendly logging.",
    },
    {
        q: "Are you based in Orlando?",
        a: "We are headquartered in Macon, Georgia and serve Orlando remote-first across the same Eastern Time zone. For major builds and on-site network pen tests we travel to Orange, Seminole, and Osceola counties. We do not claim a physical Orlando office.",
    },
    {
        q: "Do you work with the Research Park modeling and simulation cluster?",
        a: "Yes — the Central Florida simulation, training, and defense ecosystem near UCF generates demand for data dashboards and integration tooling. We scope unclassified support case-by-case.",
    },
    {
        q: "What is your typical timeline for an Orlando MVP?",
        a: "Most Orlando SaaS, booking, and ops platforms ship a usable MVP in 8–12 weeks on a fixed-scope quote. Full builds run 3–6 months. A standalone external pen test runs 2–3 weeks including reporting.",
    },
    {
        q: "Do you handle Florida sales tax for digital products?",
        a: "Yes — Florida does not tax most pure SaaS, but ticketing, admissions, and tangible-adjacent products have specific rules. We wire Stripe Tax up correctly at billing time so multi-state sales stay compliant.",
    },
    {
        q: "Do you offer ongoing maintenance after launch?",
        a: "Yes — monthly retainers cover hosting, security patching, and small feature work, or you can take the codebase fully in-house. No lock-in.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://quantlabusa.dev/locations" },
        { "@type": "ListItem", position: 3, name: "Software Development Orlando, FL", item: "https://quantlabusa.dev/software-development-orlando-fl" },
    ],
};

export default function OrlandoLandingPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.map((f) => ({
                            "@type": "Question",
                            name: f.q,
                            acceptedAnswer: { "@type": "Answer", text: f.a },
                        })),
                    }),
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />


            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Orlando, FL</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development &amp; Penetration Testing in Orlando, FL
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Orlando runs on three engines: the largest tourism economy in the country, the Lake Nona health and life-sciences cluster, and a defense-grade modeling and simulation industry near UCF. Each one demands custom software that off-the-shelf SaaS does not fit cleanly.
                    </p>
                    <ConsultationCTA label="Talk Through an Orlando Build" city="Orlando, FL" source="city-orlando" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework. We are a Macon, Georgia firm serving Orlando remote-first across the same Eastern Time zone, with travel into Orange, Seminole, and Osceola counties for major builds and on-site network work. Orlando operators typically need the same things: high-volume booking and billing that does not buckle on a peak weekend, ops dashboards that unify legacy systems, and security reports that survive a PCI or vendor review.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Orlando businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Orlando&apos;s software demand is unusually diverse for a metro its size. The tourism corridor along International Drive and the attractions belt — Walt Disney World, Universal Orlando, SeaWorld, and the resort and convention economy feeding the Orange County Convention Center — runs on reservations, ticketing, capacity management, and guest-experience tooling at enormous transaction volume. Lake Nona&apos;s Medical City pulled the University of Central Florida College of Medicine, Nemours Children&apos;s, the VA Medical Center, and a deep life-sciences tenant base into one district, all of which need HIPAA-aware platforms. The Central Florida Research Park beside UCF is the densest modeling, simulation, and training cluster in the nation, anchored by the military&apos;s simulation commands and a long bench of defense contractors. Add a fast-growing fintech and SaaS scene around Lake Mary and downtown, and you have a city that is hungry for serious custom software.
                        </p>
                        <p>
                            Most Orlando shops are either large tourism-IT integrators or solo freelancers. We sit in the middle: founder-led delivery with enterprise-grade engineering practices and in-house offensive security. No offshore handoff and no junior outsourcing — William Beltz scopes, builds, and ships. That matters when a peak-season booking flow has to stay up under load, or when a Lake Nona health operator needs both a custom platform and a pen test report that maps to their compliance obligations.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Orlando clients</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {services.map((s) => (
                            <div key={s.title} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-5">
                                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led delivery wins here</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Orlando buyers have been burned by agencies that win the pitch with a senior team and deliver with offshore juniors. Our model removes that risk. Every engagement is scoped, built, and shipped by the founder, on a fixed-scope and fixed-price proposal with a written acceptance milestone — no open-ended time-and-materials billing. Our pen testing is in-house capability, not a subcontracted line item: Active Directory abuse paths, lateral movement, web application exploitation, and wireless attacks, with every finding mapped to a MITRE ATT&amp;CK technique ID. And every line of software we ship is reviewed against the same threat models we use on offensive engagements.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Macon-based, full Eastern Time overlap with Orlando teams",
                            "Tourism booking, healthcare, simulation, and SaaS specialization",
                            "Pen test reports that map to PCI and SOC 2 review",
                            "MITRE ATT&CK technique mapping on every finding",
                            "Fixed-scope quotes — no T&M billing surprises",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work with Orlando teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We run full Eastern Time overlap from Macon, which keeps standups and reviews on Orlando&apos;s clock. Most kickoffs are a video call followed by a single on-site afternoon — typically downtown, in Lake Mary, or near Lake Nona — to walk the workflow we are replacing. From there, build cycles run weekly: every Friday you get a deployed staging URL, written notes on what changed, and the next-week plan. Pen testing engagements run from secure remote infrastructure with strict source-IP allowlisting and authenticated VPN tunnels for internal scope, and we travel to Orlando for sensitive scoping and for internal tests requiring on-site network access. Reports ship in two formats: a technical deliverable with reproduction steps for the security team, and a board-readable executive summary with a prioritized remediation roadmap. Most Orlando engagements close inside 4–6 weeks from kickoff to final report.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQ</h2>
                    <div className="space-y-6">
                        {faqs.map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedIndustries
                        industries={["e-commerce","healthcare","saas","fintech"]}
                        heading="Industries we serve in Orlando"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["saas","pentest","stripe"]}
                        pinned={["custom-crm-development-guide","nextjs-stripe-integration-guide","what-is-penetration-testing"]}
                        heading="Reading for Orlando founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services &amp; nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Booking and ops tooling built around your workflow." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM — don&apos;t rent it." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Ticketing, memberships, and subscription billing." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, wireless, and AD engagements." },
                            { href: "/services/web-app-pentest", title: "Web Application Pen Test", desc: "OWASP-aligned testing for booking platforms." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant architecture and billing." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy, cost models." },
                            { href: "/blog/nextjs-stripe-integration-guide", title: "Next.js + Stripe Guide", desc: "Webhooks, subscriptions, and the Payment Element." },
                            { href: "/blog/penetration-test-cost-2026", title: "Penetration Test Cost 2026", desc: "Pricing benchmarks and scope drivers." },
                            { href: "/software-development-tampa-fl", title: "Tampa, FL", desc: "Finance, healthcare, and cyber." },
                            { href: "/software-development-miami-fl", title: "Miami, FL", desc: "Fintech, trade, and SaaS." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls, fixed-quote proposals." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
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

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to talk Orlando?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to talk through your Orlando build.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-quant-bg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Start a Project <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
