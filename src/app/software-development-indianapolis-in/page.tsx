import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Indianapolis Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Indianapolis custom software for SaaS, insurance, and sports-tech — custom CRMs vs Salesforce, ops dashboards, Stripe billing, and pen testing. Call (770) 652-1282.",
    slug: "software-development-indianapolis-in",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-indianapolis-in#localbusiness",
    name: "QUANT LAB USA — Indianapolis Coverage",
    url: "https://quantlabusa.dev/software-development-indianapolis-in",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Indianapolis", containedInPlace: { "@type": "State", name: "Indiana" } },
        { "@type": "City", name: "Carmel" },
        { "@type": "City", name: "Fishers" },
        { "@type": "City", name: "Noblesville" },
        { "@type": "City", name: "Greenwood" },
        { "@type": "AdministrativeArea", name: "Marion County" },
        { "@type": "AdministrativeArea", name: "Hamilton County" },
        { "@type": "AdministrativeArea", name: "Central Indiana" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 39.7684, longitude: -86.1581 },
    address: { "@type": "PostalAddress", addressLocality: "Indianapolis", addressRegion: "IN", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Cybersecurity",
    name: "Custom Software Development & Cybersecurity in Indianapolis, IN",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Indianapolis", containedInPlace: { "@type": "State", name: "Indiana" } },
    description:
        "SaaS platforms, custom CRMs, insurance and sports-tech tooling, Stripe billing, and MITRE ATT&CK penetration testing for Central Indiana.",
    url: "https://quantlabusa.dev/software-development-indianapolis-in",
};

const services = [
    {
        title: "Custom CRMs & Salesforce Alternatives",
        desc: "When Salesforce licensing and customization costs outrun the value, we build a system you own outright. Typical: $25k–$90k.",
    },
    {
        title: "SaaS Platforms & Multi-Tenant Apps",
        desc: "Production multi-tenant architecture, onboarding, billing, and admin tooling for Indy SaaS founders. Typical: $30k–$120k.",
    },
    {
        title: "Insurance Admin & Claims Tooling",
        desc: "Policy management, claims intake, and broker portals for the deep Central Indiana insurance market. Typical: $25k–$90k.",
    },
    {
        title: "Penetration Testing (Web, Network, AD)",
        desc: "Full-scope engagements with formal reports for SOC 2 and customer security reviews. Typical: $10k–$35k.",
    },
    {
        title: "Sports & Events Tech Platforms",
        desc: "Ticketing, scheduling, and operations tooling for the amateur-sports and events ecosystem Indy is known for. Typical: $20k–$80k.",
    },
    {
        title: "Stripe & Subscription Billing",
        desc: "Subscription products, metered usage, and software licensing infrastructure for local SaaS founders. Typical: $8k–$28k.",
    },
];

const faqs = [
    {
        q: "We outgrew Salesforce. Can you build a custom CRM we own?",
        a: "Yes — this is one of our most common engagements. When per-seat licensing, admin overhead, and customization costs outrun the value, a custom CRM you own outright often wins on three-year total cost of ownership. We map your pipeline, migrate your data, and ship a system tailored to how your team actually sells.",
    },
    {
        q: "Can you build and secure a SaaS platform end to end?",
        a: "Yes — multi-tenant architecture, onboarding, billing, and admin tooling, plus the security testing to back it up. We have shipped multi-tenant systems with strict per-tenant data isolation and run pen tests against our own builds before customers ever see a security questionnaire.",
    },
    {
        q: "Do you build software for insurance carriers and agencies?",
        a: "Yes — Central Indiana has a deep insurance labor market, and policy administration, claims intake, and broker-portal tooling are recurring work for us. We integrate with carrier systems and rating engines rather than replacing them.",
    },
    {
        q: "Can you produce a pen test report for a SOC 2 audit?",
        a: "Yes — our reports are formatted to drop straight into audit binders and vendor-security questionnaires, with technical reproduction steps for engineers and an executive summary with a prioritized remediation roadmap for leadership. Every finding is mapped to a MITRE ATT&CK technique.",
    },
    {
        q: "Are you local to Indianapolis, or remote?",
        a: "We are headquartered in Macon, Georgia and work remote-first across the United States. For engagements above roughly $25k we travel to Indianapolis for an on-site kickoff and for internal pen tests that require physical network access — downtown, Carmel, and the Fishers tech corridor are all easy from the airport.",
    },
    {
        q: "What is your timezone overlap with Indianapolis?",
        a: "Indianapolis runs on Eastern Time, the same as our Georgia headquarters, so we share the full business day — complete overlap for standups, reviews, and same-day responses.",
    },
    {
        q: "What is a typical timeline for an Indianapolis engagement?",
        a: "A standalone external pen test runs two to three weeks including reporting. A custom CRM or SaaS build typically runs eight to sixteen weeks depending on scope. We give a fixed scope and fixed price before any work begins.",
    },
    {
        q: "Do you follow up after remediation?",
        a: "Yes — most pen testing engagements include one round of retest on remediated findings within 60 days of the initial report at no additional charge.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Software Development Indianapolis, IN", item: "https://quantlabusa.dev/software-development-indianapolis-in" },
    ],
};

export default function IndianapolisLandingPage() {
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
                        <li className="text-gray-300">Indianapolis, IN</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Cybersecurity in Indianapolis, IN
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Indianapolis has quietly become one of the Midwest&apos;s strongest software towns, anchored by a major cloud-software employer, a deep insurance industry, and a reputation as the amateur-sports capital of the country. That combination generates real demand for SaaS platforms, custom CRMs, and operations tooling.
                    </p>
                    <ConsultationCTA label="Talk Indianapolis Projects" city="Indianapolis, IN" source="city-indianapolis-in" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA pairs custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — not just selling development hours. For a SaaS-heavy market where teams know the difference between a real platform and a thin wrapper, that combination fits unusually well.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Indianapolis organizations choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Indianapolis has a software DNA that few peer cities can claim. Salesforce&apos;s second-largest hub sits downtown in the building bearing its name, the legacy of ExactTarget seeding a deep bench of cloud-software, marketing-tech, and SaaS talent across the metro. The insurance industry runs deep here too — carriers, agencies, and the claims and policy operations behind them. Indianapolis is also the headquarters of the NCAA and a long list of amateur-sports governing bodies, which has grown into a genuine sports-and-events technology niche around ticketing, scheduling, and event operations. Add Eli Lilly&apos;s life-sciences footprint, a strong logistics base around the FedEx hub, and a fast-growing startup scene out in the Carmel and Fishers corridors, and you have a market that produces and consumes software at a high level.
                        </p>
                        <p>
                            Indianapolis has plenty of staffing firms and Salesforce implementation partners. What is harder to find is a founder-led shop that ships modern SaaS platforms, builds the custom CRM that finally replaces an overgrown Salesforce org, and runs credible offensive security engagements — all under one roof. That is what we offer. Active Directory abuse paths, lateral movement, ADCS certificate abuse, Kerberoasting, web app exploitation — that is in-house capability, not a subcontracted line item. And every line of software we ship is reviewed against the same threat models we use on offensive engagements.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Indianapolis clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Portfolio note</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA is a founder-led shop with a track record of shipping production software and running full-scope security engagements. Our pen testing work includes an end-to-end internal Active Directory assessment for a regional financial-services firm — eleven attack modules, every finding mapped to a MITRE ATT&amp;CK technique, the full attack chain from standard user to Domain Admin documented with screenshots and timestamps. The client passed their compliance audit on the first attempt. That is the same methodology we apply to every Indianapolis-region engagement, whether the buyer is a SaaS founder, an insurance agency, or a sports-tech operator.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Founder-led — you work directly with the engineer building your system",
                            "Custom CRMs that replace overgrown Salesforce orgs",
                            "Multi-tenant SaaS architecture with strict data isolation",
                            "In-house offensive security and MITRE ATT&CK reporting",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Indianapolis teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Indianapolis runs on Eastern Time, the same as our Macon, Georgia headquarters, so we share the entire business day — no awkward windows for standups, reviews, or same-day questions. Most engagements start with a 60-minute scope by video. For engagements above roughly $25k we travel to Indianapolis for an on-site kickoff and for internal pen tests that require physical network access. Build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Pen test reports are delivered in two formats: a technical deliverable with reproduction steps and remediation detail for the security team, and a board-readable executive summary with a prioritized remediation roadmap. Fixed-scope, fixed-price proposals on most engagements; full code, database, and infrastructure handover at acceptance.
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
                        industries={["saas","insurance","fintech","e-commerce"]}
                        heading="Industries we serve in Indianapolis"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["crm","build-vs-buy","saas"]}
                        pinned={["custom-crm-vs-salesforce-vs-hubspot-2026","custom-crm-development-guide","build-vs-buy-software-2026"]}
                        heading="Reading for Indianapolis founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/custom-crm-development", title: "Custom CRM Development", desc: "Own your CRM instead of renting Salesforce." },
                            { href: "/services/saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant apps, billing, onboarding." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "Insurance and ops tooling." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, and AD engagements." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Subscription billing and licensing." },
                            { href: "/services/mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Full attack-chain mapping and reporting." },
                            { href: "/blog/custom-crm-vs-salesforce-vs-hubspot-2026", title: "Custom CRM vs Salesforce 2026", desc: "Capability and TCO comparison." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy." },
                            { href: "/software-development-columbus-oh", title: "Columbus, OH", desc: "Insurance and retail-tech software." },
                            { href: "/software-development-cincinnati-oh", title: "Cincinnati, OH", desc: "CPG, fintech, and ops tooling." },
                            { href: "/industries/saas", title: "SaaS Software", desc: "Multi-tenant architecture and billing." },
                            { href: "/contact", title: "Start a Project", desc: "Scoping calls, fixed-quote proposals." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-indigo-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Talk Indianapolis projects.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Indianapolis engagements.
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
