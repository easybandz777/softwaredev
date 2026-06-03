import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Houston Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Houston TX custom software, energy and medical ops dashboards, and pen testing for the Energy Corridor and Texas Medical Center. Founder-led. Call (770) 652-1282.",
    slug: "software-development-houston-tx",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-houston-tx#localbusiness",
    name: "QUANT LAB USA — Houston Coverage",
    url: "https://quantlabusa.dev/software-development-houston-tx",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Houston", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Sugar Land" },
        { "@type": "City", name: "The Woodlands" },
        { "@type": "City", name: "Pasadena" },
        { "@type": "City", name: "Pearland" },
        { "@type": "City", name: "Katy" },
        { "@type": "AdministrativeArea", name: "Harris County" },
        { "@type": "AdministrativeArea", name: "Fort Bend County" },
        { "@type": "AdministrativeArea", name: "Montgomery County" },
        { "@type": "AdministrativeArea", name: "Greater Houston" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 29.7604, longitude: -95.3698 },
    address: { "@type": "PostalAddress", addressLocality: "Houston", addressRegion: "TX", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Penetration Testing",
    name: "Custom Software Development & Penetration Testing in Houston, TX",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Houston", containedInPlace: { "@type": "State", name: "Texas" } },
    description:
        "Energy and medical operations software, OWASP-aligned web app testing, and MITRE ATT&CK assessments for the Greater Houston metro.",
    url: "https://quantlabusa.dev/software-development-houston-tx",
};

const services = [
    {
        title: "Energy & Oilfield Operations Dashboards",
        desc: "Production tracking, field-ticket capture, and equipment scheduling for upstream and midstream operators along the Energy Corridor. Typical: $30k–$120k.",
    },
    {
        title: "Healthcare Intake & Scheduling Platforms",
        desc: "HIPAA-aware patient intake, referral routing, and ops tooling for Texas Medical Center-adjacent practices and clinics. Typical: $25k–$90k.",
    },
    {
        title: "Web Application Penetration Testing",
        desc: "OWASP-aligned testing for customer portals, patient apps, and energy-trading interfaces. Typical: $8k–$28k.",
    },
    {
        title: "Custom CRMs for Services & Distribution",
        desc: "Purpose-built pipelines for industrial distributors, services firms, and brokers across Harris and Fort Bend counties. Typical: $25k–$90k.",
    },
    {
        title: "Stripe & Subscription Billing Systems",
        desc: "Recurring billing, licensing, and payment infrastructure for Houston SaaS founders and product teams. Typical: $8k–$28k.",
    },
    {
        title: "MITRE ATT&CK Assessments",
        desc: "Full attack-chain documentation for energy, healthcare, and logistics security programs. Typical: $14k–$40k.",
    },
];

const faqs = [
    {
        q: "Do you build software for energy and oilfield companies?",
        a: "Yes — production tracking, field-ticket capture, equipment scheduling, and operations dashboards are routine work for us. ICS/SCADA assessments require specialized scope and are quoted separately from corporate-network and web application tests.",
    },
    {
        q: "Can you handle HIPAA-aware healthcare software for the Texas Medical Center area?",
        a: "Yes — we build HIPAA-aware intake, scheduling, and ops platforms on BAA-eligible cloud with encrypted data flows and audit-friendly logging. We scope BAAs and security controls up front, not as an afterthought.",
    },
    {
        q: "Do you do web application penetration testing?",
        a: "Yes — OWASP-aligned testing for customer portals, patient apps, and energy-trading interfaces. Every finding is mapped to a MITRE ATT&CK technique and delivered with reproduction steps and a remediation roadmap.",
    },
    {
        q: "Can you fly in for kickoffs in Houston?",
        a: "Yes — for engagements above roughly $25k we fly into IAH or HOU for an on-site kickoff afternoon. The Energy Corridor, downtown, the Medical Center, Sugar Land, and The Woodlands are all easy to reach.",
    },
    {
        q: "Do you bill fixed scope or time and materials?",
        a: "Fixed scope on most engagements. Time and materials is reserved for open-ended R&D or staff augmentation. Most Houston procurement teams prefer the predictability of a fixed quote for budget approval.",
    },
    {
        q: "What pen testing methodology do you use?",
        a: "Our framework is MITRE ATT&CK end-to-end. Every finding is mapped to a technique ID across recon, credential spraying, Kerberoasting, ADCS abuse, lateral movement, and C2 infrastructure.",
    },
    {
        q: "How does the time zone work with your Georgia HQ?",
        a: "Houston is one hour behind Georgia HQ, so our morning and your late morning overlap completely for standups and design reviews. Communication stays tight throughout the build.",
    },
    {
        q: "What is a typical timeline for a Houston engagement?",
        a: "A standalone external or web app pen test runs 2–3 weeks including reporting. A meaningful custom build typically runs 4–6 months, with a staging URL shipped weekly during development.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Houston, TX", item: "https://quantlabusa.dev/software-development-houston-tx" },
    ],
};

export default function HoustonLandingPage() {
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
                        <li className="text-gray-300">Houston, TX</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Penetration Testing in Houston, TX
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Houston runs on energy and medicine. The Energy Corridor along I-10, the Texas Medical Center — the largest medical complex in the world — and the Port of Houston each generate enormous demand for software that off-the-shelf SaaS cannot serve cleanly.
                    </p>
                    <ConsultationCTA label="Scope a Houston Engagement" city="Houston, TX" source="city-houston" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA combines custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — not just selling development hours. Houston buyers expect a vendor who understands both how to build a production system and how an attacker would try to break it. We do both in-house.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Houston organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Houston is the energy capital of the world. ExxonMobil&apos;s campus near Spring, Chevron, ConocoPhillips, Phillips 66, Halliburton, Baker Hughes, and SLB anchor an upstream-to-downstream ecosystem that runs on field data, production tracking, and trading workflows. The Texas Medical Center pulls together MD Anderson, Houston Methodist, Texas Children&apos;s, Memorial Hermann, and Baylor College of Medicine into the densest healthcare cluster on the planet — every one of them surrounded by practices, labs, and device vendors that need HIPAA-aware software. The Port of Houston and the petrochemical complex along the Ship Channel add a logistics and industrial layer on top. Underneath all of it sits a deep services and distribution mid-market across Harris, Fort Bend, and Montgomery counties.
                        </p>
                        <p>
                            Most generalist agencies cannot credibly speak to penetration testing methodology, and most security shops cannot ship production software. We do both. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, and web application exploitation are in-house capability, not a subcontracted line item — and every line of software we ship is reviewed against the same threat models we use on offensive engagements. For Houston operators running compliance programs or selling into enterprise procurement, that combination is the entire pitch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Houston clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Proof of work</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Our pen testing track record includes a full Active Directory engagement for a regional financial services firm — an end-to-end internal assessment running eleven attack modules, every finding mapped to a MITRE ATT&amp;CK technique, with the full attack chain from standard user to Domain Admin documented in screenshots and timestamps. The client passed their compliance audit on the first attempt and re-engaged us on a six-month cadence. That is the same methodology we apply to every Houston engagement, whether the buyer is an energy operator, a Medical Center-adjacent practice, or a logistics firm on the Ship Channel.
                        </p>
                        <p>
                            QUANT LAB USA is founder-led and accountable end-to-end. We ship production web and SaaS applications on a modern Next.js, TypeScript, PostgreSQL, and Docker stack, and we keep our proof generic and our references available under NDA — no name-dropping clients who did not sign up to be a marketing line.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Founder-led and accountable end-to-end",
                            "In-house offensive security capability (AD abuse paths, web app, network)",
                            "HIPAA-aware architecture for Medical Center-adjacent work",
                            "MITRE ATT&CK technique mapping on every finding",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Houston teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Houston is one hour behind Georgia HQ, so our morning and your late morning overlap completely for standups and design reviews. Most engagements start with a 60-minute scope by video, followed by a fly-in for an on-site kickoff afternoon — the Energy Corridor, downtown, the Medical Center, Sugar Land, or The Woodlands. After kickoff, build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Pen testing runs from a secure remote infrastructure with strict source IP allowlisting and authenticated VPN tunnels for internal scope; internal tests requiring on-site network access are scheduled on-site for the active window with remote reporting following. We bill fixed scope on virtually every Houston engagement, and code, database, hosting accounts, and full documentation transfer at acceptance — exactly what procurement needs for ownership and audit review.
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
                        industries={["healthcare","fintech","saas","manufacturing"]}
                        heading="Industries we serve in Houston"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["pentest","saas","build-vs-buy"]}
                        pinned={["what-is-penetration-testing","build-vs-buy-software-2026","penetration-test-cost-2026"]}
                        heading="Reading for Houston founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, wireless, and AD engagements." },
                            { href: "/services/web-app-pentest", title: "Web Application Pen Test", desc: "OWASP-aligned web app testing." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Energy and ops dashboards." },
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Pipelines for services and distribution." },
                            { href: "/services/subscription-billing", title: "Subscription Billing", desc: "Stripe, licensing, recurring revenue." },
                            { href: "/blog/what-is-penetration-testing", title: "What Is Penetration Testing?", desc: "Founder's buyer guide to pen tests." },
                            { href: "/blog/penetration-test-cost-2026", title: "Penetration Test Cost 2026", desc: "Pricing benchmarks and scope drivers." },
                            { href: "/software-development-san-antonio-tx", title: "San Antonio, TX", desc: "Cybersecurity, healthcare, military." },
                            { href: "/software-development-fort-worth-tx", title: "Fort Worth, TX", desc: "Logistics, aerospace, manufacturing." },
                            { href: "/pricing", title: "Pricing", desc: "Fixed-quote ranges by engagement type." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls, fixed-quote proposals." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-red-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Scope a Houston engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Houston engagements.
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
