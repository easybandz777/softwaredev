import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Compass, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Fractional CTO Services: Part-Time Technical Leadership | QUANT LAB USA",
    description:
        "Fractional CTO services — senior, part-time technical leadership for founders without a full-time CTO. Architecture, hiring, and roadmap. Founder-led, USA. Free intro call.",
    slug: "services/fractional-cto-services",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fractional CTO Services",
    name: "Fractional CTO Services",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Founder-led fractional CTO services for companies that need senior technical leadership without a full-time hire. Architecture decisions, technology strategy, engineering hiring, vendor oversight, and a roadmap leadership and investors can trust — on a part-time retainer, with the goal of making the role unnecessary as your own team matures.",
    url: "https://quantlabusa.dev/services/fractional-cto-services",
    offers: {
        "@type": "Offer",
        priceRange: "$4,000-$15,000",
        priceCurrency: "USD",
        description: "Monthly retainer, scoped to engagement",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Fractional CTO Services", item: "https://quantlabusa.dev/services/fractional-cto-services" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does a fractional CTO actually do?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Senior technical leadership on a part-time basis: setting technology strategy and architecture direction, making build-versus-buy calls, overseeing engineers or outside vendors, defining the product roadmap from a technical standpoint, and translating between the technical reality and the founders, board, and investors. It is the judgment of a CTO without the cost of a full-time executive hire.",
            },
        },
        {
            "@type": "Question",
            name: "How is a fractional CTO different from hiring a development firm?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A development firm builds what you ask for; a fractional CTO helps you decide what to build and how, then makes sure it is being built well — whoever is doing the building. Many founders use both: a fractional CTO for direction and oversight, plus a build team for execution. We are candid about which model, or which mix, actually fits your situation.",
            },
        },
        {
            "@type": "Question",
            name: "How many hours per week or month is the engagement?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It scales to your stage. Early on it might be a few hours a week — architecture reviews, hiring, key decisions. During a heavy period like a fundraise, a migration, or a first engineering hire, it can be more. We set a retainer that matches the real need and adjust it as that need changes.",
            },
        },
        {
            "@type": "Question",
            name: "Can you help us hire and manage our own engineers?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, and that is often the most valuable part. We write the role definitions, screen candidates technically, run the technical interviews, and onboard and mentor your first engineers. Building your in-house team — and making the fractional role unnecessary — is an explicit goal, not a threat to the engagement.",
            },
        },
        {
            "@type": "Question",
            name: "Will you represent the technology side to our investors and board?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We can sit in board meetings and investor conversations to speak to the architecture, the roadmap, the security posture, and the engineering plan with the credibility investors expect. Having a senior technical voice in the room is often exactly why founders bring in a fractional CTO before a raise.",
            },
        },
        {
            "@type": "Question",
            name: "Is this a long-term commitment?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No long lock-in. It is a month-to-month retainer, and the explicit aim is to work ourselves out of the role as your own engineering leadership matures. Some founders use us for a few intense months around a specific milestone; others keep a lighter ongoing relationship. You are never trapped.",
            },
        },
    ],
};

export default function FractionalCtoServicesPage() {
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
                        <li className="text-gray-300">Fractional CTO Services</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-400 mb-6">
                        <Compass className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Fractional CTO Services for Founders Without a Full-Time CTO
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Senior, part-time technical leadership — architecture, technology strategy, hiring, and a roadmap your board can trust — on a month-to-month retainer, with the goal of making the role unnecessary as your own team grows.
                    </p>
                    <ConsultationCTA label="Discuss a Fractional CTO" service="Fractional CTO Services" source="services-fractional-cto" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The gap a fractional CTO fills</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Plenty of companies are at a stage where they need senior technical judgment but cannot yet justify a full-time CTO. A non-technical founder is making architecture decisions on instinct. A growing team of contractors has nobody senior reviewing their work. An investor is asking technical questions the founders cannot confidently answer. A first engineering hire is coming and nobody knows how to interview for it. Each of these is a real risk, and none of them needs a two-hundred-thousand-dollar executive on the payroll to solve.
                        </p>
                        <p>
                            A fractional CTO gives you that judgment on a part-time basis. We make and document the architecture decisions, set the technology strategy, oversee whoever is building, and stand behind the roadmap with your board and investors. The point is not to be indispensable — it is to steer the technical side well now and to build the in-house capability that eventually makes the role unnecessary.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we do</h2>
                    <ul className="space-y-3">
                        {[
                            "Set technology strategy and make the architecture decisions that are expensive to reverse later",
                            "Make honest build-versus-buy calls instead of defaulting to building everything",
                            "Oversee in-house engineers or outside vendors and hold the quality bar",
                            "Define the product roadmap from a technical standpoint and keep it realistic",
                            "Write role definitions, screen candidates, and run the technical interviews for your hires",
                            "Onboard and mentor your first engineers so the team can stand on its own",
                            "Own the security and compliance posture and the plan to mature it",
                            "Represent the technology side in board meetings and investor conversations",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We start with a paid two-week assessment: where the technology and team stand today, the biggest risks, and what leadership the next two quarters actually require. You get a written technical assessment and a proposed engagement shape — billed separately at $2,500 — so you can decide whether a fractional CTO is even the right answer. Sometimes it is not, and we will say so.
                        </p>
                        <p>
                            From there it is a month-to-month retainer sized to your stage, with a regular cadence of decisions, reviews, and check-ins, plus availability for the urgent calls that come up. Everything we decide gets documented so your team and your investors have a record. As your own leadership matures, we deliberately wind the role down rather than entrench it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Engagement shape</h2>
                    <ul className="space-y-3">
                        {[
                            "Weeks 1-2: Technical assessment — current state, risk register, and a proposed engagement scope",
                            "Ongoing: A regular cadence of architecture reviews, roadmap planning, and decision-making",
                            "Hiring cycles: Role definitions, technical screening, interviews, and onboarding for new engineers",
                            "Milestones: Heavier involvement around fundraises, migrations, audits, or a first engineering hire",
                            "Wind-down: A documented handoff to your in-house leadership when the role is no longer needed",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where we add value</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Architecture decisions",
                            "Technology strategy",
                            "Engineering hiring",
                            "Vendor oversight",
                            "Roadmap planning",
                            "Security posture",
                            "Build vs buy calls",
                            "Investor & board readouts",
                            "Team mentoring",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Often paired with hands-on <Link href="/services/mvp-development" className="text-indigo-400 hover:underline">MVP development</Link> or <Link href="/services/custom-business-software" className="text-indigo-400 hover:underline">custom software</Link> for execution, and with <Link href="/services/technical-due-diligence" className="text-indigo-400 hover:underline">technical due diligence</Link> before a raise. Deciding between models? Read <Link href="/blog/hire-fractional-cto-vs-software-firm" className="text-indigo-400 hover:underline">fractional CTO vs a software firm</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we keep it honest</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The fractional CTO role has an obvious conflict of interest: the longer we stay, the more we bill. We reject that. The whole engagement is oriented toward building your in-house capability and reducing your dependence on us — hiring your engineers, documenting decisions, and handing off cleanly. If the honest recommendation is to bring the role in-house or that you do not need a fractional CTO at all, that is what we tell you.
                        </p>
                        <p>
                            We are also candid about build-versus-buy. A founder paying for technical leadership deserves a leader who will say &quot;buy the off-the-shelf tool&quot; or &quot;do not build that yet&quot; when it is true, even when building it would mean more work for us. Direction you can trust is the entire product.
                        </p>
                        <p>
                            Founder-led and delivered remotely to companies across the United States from our base in Macon, Georgia.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Monthly retainer, sized to your stage. Typical ranges:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Two-week technical assessment with a written report and engagement proposal: $2,500 flat</li>
                            <li>Light advisory — architecture reviews and key decisions, a few hours weekly: $4k – $6k / month</li>
                            <li>Standard fractional CTO — strategy, oversight, and hiring support: $7k – $11k / month</li>
                            <li>Intensive — heavy involvement around a fundraise, migration, or first hires: $11k – $15k / month</li>
                            <li>Add-on build execution via our team: scoped separately as a fixed-fee project</li>
                        </ul>
                        <p>
                            Month-to-month, adjusted as your needs change. The aim is to wind the role down as your team matures, not to entrench it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "A senior technical decision-maker accountable for the architecture and roadmap",
                            "Documented decisions your team and investors can rely on",
                            "Honest build-versus-buy guidance, even when it means less work for us",
                            "Technical hiring support — role definitions, screening, interviews, onboarding",
                            "Oversight of in-house engineers or outside vendors against a real quality bar",
                            "A credible technical voice in board and investor conversations",
                            "A security and compliance posture plan appropriate to your stage",
                            "A deliberate wind-down plan as your own leadership matures",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
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
                                q: "What does a fractional CTO actually do?",
                                a: "Senior technical leadership on a part-time basis: setting technology strategy and architecture direction, making build-versus-buy calls, overseeing engineers or outside vendors, defining the product roadmap from a technical standpoint, and translating between the technical reality and the founders, board, and investors. It is the judgment of a CTO without the cost of a full-time executive hire.",
                            },
                            {
                                q: "How is a fractional CTO different from hiring a development firm?",
                                a: "A development firm builds what you ask for; a fractional CTO helps you decide what to build and how, then makes sure it is being built well — whoever is doing the building. Many founders use both: a fractional CTO for direction and oversight, plus a build team for execution. We are candid about which model, or which mix, actually fits your situation.",
                            },
                            {
                                q: "How many hours per week or month is the engagement?",
                                a: "It scales to your stage. Early on it might be a few hours a week — architecture reviews, hiring, key decisions. During a heavy period like a fundraise, a migration, or a first engineering hire, it can be more. We set a retainer that matches the real need and adjust it as that need changes.",
                            },
                            {
                                q: "Can you help us hire and manage our own engineers?",
                                a: "Yes, and that is often the most valuable part. We write the role definitions, screen candidates technically, run the technical interviews, and onboard and mentor your first engineers. Building your in-house team — and making the fractional role unnecessary — is an explicit goal, not a threat to the engagement.",
                            },
                            {
                                q: "Will you represent the technology side to our investors and board?",
                                a: "Yes. We can sit in board meetings and investor conversations to speak to the architecture, the roadmap, the security posture, and the engineering plan with the credibility investors expect. Having a senior technical voice in the room is often exactly why founders bring in a fractional CTO before a raise.",
                            },
                            {
                                q: "Is this a long-term commitment?",
                                a: "No long lock-in. It is a month-to-month retainer, and the explicit aim is to work ourselves out of the role as your own engineering leadership matures. Some founders use us for a few intense months around a specific milestone; others keep a lighter ongoing relationship. You are never trapped.",
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
                        topics={["build-vs-buy", "saas", "stack"]}
                        heading="Leadership & strategy reading"
                        pinned={["hire-fractional-cto-vs-software-firm", "build-vs-buy-software-2026", "2026-state-of-custom-software-development"]}
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "mvp-development", title: "MVP Development", desc: "Execution muscle to build the first version while we steer." },
                            { slug: "technical-due-diligence", title: "Technical Due Diligence", desc: "An independent technical read before a raise or acquisition." },
                            { slug: "saas-platform-development", title: "SaaS Platform Development", desc: "Full product builds when strategy turns into execution." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
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
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        Technical leadership for founders in <Link href="/industries/saas" className="text-indigo-400 hover:underline">SaaS</Link> and <Link href="/industries/fintech" className="text-indigo-400 hover:underline">fintech</Link>. To talk through your situation, <Link href="/contact" className="text-indigo-400 hover:underline">contact us</Link> or review <Link href="/pricing" className="text-indigo-400 hover:underline">pricing</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-indigo-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Fractional CTO — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team working with founders nationwide. The fractional CTO role runs remotely with a regular cadence of calls and reviews; in-person board and planning sessions are available in Atlanta and the Southeast.
                    </p>
                    <p className="text-gray-400 leading-relaxed max-w-3xl">
                        Founder-led from the first assessment through wind-down. Browse the full <Link href="/services" className="text-indigo-400 hover:underline">services lineup</Link> or read about our <Link href="/services/devops-engineering" className="text-indigo-400 hover:underline">DevOps engineering</Link> work that often follows a technology-strategy reset.
                    </p>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Senior technical judgment, part-time.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute call. We will assess where your technology and team stand and tell you honestly whether a fractional CTO is the right move.
                        </p>
                        <ConsultationCTA label="Book an Intro Call" service="Fractional CTO Services" source="services-fractional-cto" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
