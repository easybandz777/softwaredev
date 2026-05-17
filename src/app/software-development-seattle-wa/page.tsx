import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RelatedIndustries } from "@/components/RelatedIndustries";
import { MapPin, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Seattle Software Development & Pen Testing | QUANT LAB USA",
    description:
        "Seattle WA SaaS, dev-tools, and cloud-adjacent custom software. Stripe billing, Docker-native, AWS-portable, and pen testing. Call (770) 652-1282.",
    slug: "software-development-seattle-wa",
    image: "/og-image.png",
    type: "article",
});

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://quantlabusa.dev/software-development-seattle-wa#localbusiness",
    name: "QUANT LAB USA — Seattle Coverage",
    url: "https://quantlabusa.dev/software-development-seattle-wa",
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    areaServed: [
        { "@type": "City", name: "Seattle", containedInPlace: { "@type": "State", name: "Washington" } },
        { "@type": "City", name: "Bellevue" },
        { "@type": "City", name: "Redmond" },
        { "@type": "City", name: "Kirkland" },
        { "@type": "City", name: "Tacoma" },
        { "@type": "AdministrativeArea", name: "King County" },
        { "@type": "AdministrativeArea", name: "Puget Sound" },
    ],
    geo: { "@type": "GeoCoordinates", latitude: 47.6062, longitude: -122.3321 },
    address: { "@type": "PostalAddress", addressLocality: "Seattle", addressRegion: "WA", addressCountry: "US" },
    priceRange: "$$-$$$",
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Seattle, WA",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "City", name: "Seattle", containedInPlace: { "@type": "State", name: "Washington" } },
    description:
        "SaaS, dev-tools, Stripe-billed licensing infrastructure, and penetration testing for Seattle-area founders and companies.",
    url: "https://quantlabusa.dev/software-development-seattle-wa",
};

const services = [
    {
        title: "SaaS Products & Dev Tools",
        desc: "Next.js + TypeScript builds that fit naturally into AWS and GCP environments. Typical: $25k–$90k.",
    },
    {
        title: "Stripe & Licensing Infrastructure",
        desc: "Subscription billing, usage metering, license key issuance, and developer-friendly API surfaces. Typical: $10k–$30k.",
    },
    {
        title: "Cloud Infrastructure & IaC",
        desc: "Terraform, AWS CDK, Docker-native deployments, and cloud-portable architectures. Typical: $12k–$40k.",
    },
    {
        title: "Penetration Testing",
        desc: "Web app, cloud-perimeter, and AD engagements before enterprise procurement reviews. Typical: $10k–$30k.",
    },
    {
        title: "Aerospace & Logistics Adjacent Tooling",
        desc: "Custom dashboards and supplier tooling for the Boeing supplier network and Port of Seattle operators. Typical: $20k–$80k.",
    },
    {
        title: "AI/ML Wrapper SaaS",
        desc: "Production-grade OpenAI, Anthropic, and Bedrock-backed products with cost controls and rate-limit handling. Typical: $20k–$70k.",
    },
];

const faqs = [
    {
        q: "Do you work with AWS-heavy stacks?",
        a: "Yes — most of our builds are cloud-portable and deploy cleanly to AWS, GCP, and Vercel. Our default deploy target for Seattle clients is AWS via Docker, with IaC managed in Terraform or AWS CDK as preferred.",
    },
    {
        q: "Can you ship a Stripe-billed SaaS MVP for a Seattle founder?",
        a: "Yes — that is our most common SaaS engagement. Subscription billing, usage metering, license keys, and customer self-serve portals on a Docker-native stack the next engineering hire can pick up cleanly.",
    },
    {
        q: "Time-zone overlap?",
        a: "Georgia HQ — comfortable working morning through early afternoon Pacific. Our late morning is your early morning, and our late afternoon is your mid-morning. We run standups at 11am ET / 8am PT routinely.",
    },
    {
        q: "Do you work with Boeing supplier-network or aerospace operators?",
        a: "Yes — supplier portal, compliance tracking, and tier-N supplier visibility tooling is in scope. ITAR-aware workflows are scoped per requirement.",
    },
    {
        q: "Are you familiar with WA state B&O tax and SaaS taxability?",
        a: "Yes — Washington has a unique B&O tax structure and treats SaaS as taxable for retail sales tax in many cases. We wire Stripe Tax correctly at billing time so multi-state nexus is handled.",
    },
    {
        q: "Can you fly in for an in-person kickoff?",
        a: "Yes, for engagements above ~$25k. We fly into SEA for kickoffs and major milestones — South Lake Union, Bellevue, Redmond, and Kirkland are all easy.",
    },
    {
        q: "Do you support AI/ML product builds?",
        a: "Yes — production OpenAI, Anthropic, and AWS Bedrock-backed builds are routine in 2026. We handle rate limits, prompt versioning, cost monitoring, and fallback chains as standard.",
    },
    {
        q: "How do you handle code review and Seattle-grade engineering standards?",
        a: "Every build runs ESLint, Prettier, strict TypeScript, and includes a CI pipeline before any deploy. Architecture docs and a README that an Amazon or Microsoft engineer would not laugh at are part of every handover.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://quantlabusa.dev/locations" },
        { "@type": "ListItem", position: 3, name: "Software Development Seattle, WA", item: "https://quantlabusa.dev/software-development-seattle-wa" },
    ],
};

export default function SeattleLandingPage() {
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
                        <li className="text-gray-300">Seattle, WA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Seattle, WA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Seattle&apos;s software economy is anchored by Amazon and Microsoft, surrounded by a fast-moving SaaS and dev-tools ecosystem and a steady current of bootstrapped indie SaaS founders working out of Capitol Hill and Fremont.
                    </p>
                    <ConsultationCTA label="Scope a Seattle Project" city="Seattle, WA" source="city-seattle" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most companies here speak fluent cloud — what they need is senior-quality custom development at a price point that does not require a full FTE hire. QUANT LAB USA is built for that.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Seattle businesses choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Seattle&apos;s software economy is unusually consolidated. Amazon employs over 60,000 in the metro across South Lake Union, the Spheres, and the Bellevue expansion. Microsoft&apos;s Redmond campus anchors a second cluster across Lake Washington. Around them sits a deep dev-tools and cloud-native SaaS ecosystem — Snowflake&apos;s Bellevue office, Datadog&apos;s presence, Auth0/Okta, Tableau (now part of Salesforce), Smartsheet — plus the indie SaaS and bootstrapped-founder pool working out of Capitol Hill, Fremont, and Ballard. Boeing&apos;s Everett operations anchor an aerospace supplier network that stretches across Snohomish County. The Port of Seattle and the Port of Tacoma together form the third-largest container gateway on the West Coast, generating logistics-tooling demand for inland operators. And the AI/ML labor market — Allen Institute for AI, OpenAI&apos;s expanding Seattle office, Microsoft Research — keeps pushing the technical bar buyers expect from outside vendors.
                        </p>
                        <p>
                            Most contract shops in the Pacific Northwest are either expensive enterprise consultancies or thin freelancer marketplaces. We sit in the middle. Senior, founder-led, fixed-scope. Our stack is Docker-native, cloud-portable, and built on modern TypeScript — exactly what a Seattle-grade engineering reviewer expects to see. For founders here, that translates to senior-quality engineering at a contract price tier well below hiring a full-time engineer, on a stack the eventual full-time hire can pick up without translation.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we ship for Seattle clients</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Selected work</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Live work includes <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link> (AI-powered lead-gen and pipeline SaaS combining Google Places, concurrent email scraping, and OpenAI qualification), UEhub (education platform), and <Link href="/work/hobbspeak" className="text-sky-400 hover:underline">HobbsPeak</Link> (headless commerce platform with live S&amp;S Activewear catalog sync and an AI-assisted artwork digitizing pipeline). The HobbsPeak build in particular demonstrates the technical bar Seattle reviewers expect: production OpenAI integration, server-side catalog sync, vector tracing pipelines, and a full admin console replacing five separate tools.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Docker-native, cloud-portable builds",
                            "Cleanly deploys to AWS, GCP, and Vercel",
                            "Pacific morning overlap from Georgia HQ",
                            "Pen testing for enterprise procurement reviews",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remotely with Seattle teams</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Seattle sits three hours behind Georgia HQ, which means we work your morning. We run standups at 11am ET / 8am PT for most engagements, with afternoon Pacific reserved for async code review and our late afternoon work. For engagements above ~$25k we fly into SEA for an on-site kickoff afternoon — South Lake Union, Bellevue, Redmond, or Kirkland. Build cycles run weekly with a Friday staging URL, written notes, and the next-week plan. Most Seattle engagements close on fixed-scope, fixed-price proposals, with code reviewed before every merge and architecture docs that hold up to an Amazon or Microsoft engineer&apos;s scrutiny. Full code, infrastructure, and account handover at acceptance — the eventual full-time hire picks up the codebase without translation.
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
                        industries={["saas","fintech","healthcare","e-commerce"]}
                        heading="Industries we serve in Seattle"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["saas","stack","build-vs-buy"]}
                        pinned={["building-multi-tenant-saas-postgres-rls","nextjs-vs-remix-vs-sveltekit-2026","build-vs-buy-software-2026"]}
                        heading="Reading for Seattle founders"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/cloud-infrastructure", title: "Cloud Infrastructure", desc: "AWS/GCP-portable, Docker-native builds." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments & Licensing", desc: "Stripe-billed SaaS infrastructure." },
                            { href: "/services/stripe-integration", title: "Stripe Integration", desc: "Subscription, metered, and licensing." },
                            { href: "/services/web-applications", title: "Web Applications", desc: "SaaS MVPs and customer-facing builds." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web app and cloud-perimeter engagements." },
                            { href: "/services/license-server", title: "License Server", desc: "Software licensing infrastructure." },
                            { href: "/services/subscription-billing", title: "Subscription Billing", desc: "Recurring revenue infrastructure." },
                            { href: "/work/hobbspeak", title: "Case Study: HobbsPeak", desc: "Headless commerce with AI digitizing." },
                            { href: "/work/j5-sales-os", title: "Case Study: J5 Sales OS", desc: "AI prospecting and pipeline SaaS." },
                            { href: "/blog/custom-crm-development-guide", title: "Custom CRM Development Guide", desc: "Pillar resource — build vs. buy." },
                            { href: "/software-development-san-francisco-ca", title: "San Francisco, CA", desc: "Bay Area SaaS, fintech, and quant." },
                            { href: "/software-development-austin-tx", title: "Austin, TX", desc: "Startup SaaS and quant tooling." },
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
                            Scope a Seattle project.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope a Seattle project.
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
