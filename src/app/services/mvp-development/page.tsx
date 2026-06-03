import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Rocket, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "MVP Development for Founders: 6–10 Week Builds | QUANT LAB USA",
    description:
        "MVP development for founders — a real, production-ready first version in 6 to 10 weeks. Founder-led, fixed-quote, you own the code. Call (770) 652-1282 for a free scope call.",
    slug: "services/mvp-development",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "MVP Development",
    name: "MVP Development for Founders",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Founder-led MVP development that ships a real, production-ready first version in 6 to 10 weeks. We scope down to the one feature that proves the idea, build it on a Next.js, TypeScript, and PostgreSQL stack you own outright, and hand off something you can put in front of users and investors — not a throwaway prototype.",
    url: "https://quantlabusa.dev/services/mvp-development",
    offers: {
        "@type": "Offer",
        priceRange: "$15,000-$60,000",
        priceCurrency: "USD",
        description: "Fixed-fee scope per MVP",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "MVP Development", item: "https://quantlabusa.dev/services/mvp-development" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How long does an MVP take to build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Six to ten weeks for most MVPs once scope is locked. The first week is a scoping sprint to cut the idea down to the single feature that proves it, then five to nine weeks of building, with a usable version in your hands partway through rather than only at the end.",
            },
        },
        {
            "@type": "Question",
            name: "What exactly should be in an MVP?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The one thing that proves people want what you are building, and nothing else. Most founder feature lists are three times too long for a first version. We help you find the single core loop — sign up, do the one valuable action, see the result — and cut everything that does not directly test the core assumption. Settings pages, admin tooling, and edge cases come after you have signal.",
            },
        },
        {
            "@type": "Question",
            name: "Is an MVP a throwaway prototype or real software?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Real software. We build MVPs on the same production stack we use for everything else — Next.js, TypeScript, and PostgreSQL — with authentication, a real database, and a deployment that can take real users. It is deliberately small, but it is not disposable. When you get traction, you extend it instead of starting over.",
            },
        },
        {
            "@type": "Question",
            name: "Do I own the code, or am I locked into your platform?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You own everything from day one — the GitHub repository, the database, and the deployment, all in your name. There is no platform to rent and no exit fee. You can keep working with us, hire your own engineers, or bring on a technical cofounder, and the codebase is documented for any of those paths.",
            },
        },
        {
            "@type": "Question",
            name: "I am non-technical — can you still work with me?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Most of our MVP founders are non-technical, and the engagement is built for that. You bring the domain expertise and the vision; we handle the technical decisions and explain the trade-offs in plain language. Because it is founder-led, you talk to the person actually building it, not an account manager relaying messages.",
            },
        },
        {
            "@type": "Question",
            name: "What happens after the MVP launches?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You take it to users and learn. From there you can retain us to build the next iteration based on what you learned, slow down and fundraise, or take the documented codebase in-house. We would rather help you validate cheaply than sell you a bloated v1 — the goal is real signal, fast.",
            },
        },
    ],
};

export default function MvpDevelopmentPage() {
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
                        <li className="text-gray-300">MVP Development</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 mb-6">
                        <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        MVP Development That Ships in 6 to 10 Weeks
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        A real, production-ready first version in six to ten weeks — scoped down to the one feature that proves your idea, built on a stack you own, ready for users and investors.
                    </p>
                    <ConsultationCTA label="Scope an MVP" service="MVP Development" source="services-mvp" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The MVP that actually validates</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The fastest way to waste a year and a budget is to build everything you imagined the product would be before a single user touches it. Founders come to us with a feature list three times longer than it needs to be — onboarding flows, settings, an admin panel, integrations — for an idea that has never been tested. An MVP is not a smaller version of the whole vision. It is the one experiment that tells you whether the vision is worth pursuing.
                        </p>
                        <p>
                            Our job is to find that experiment with you and build only it. We look for the core loop: a user signs up, does the single valuable action, and sees a result worth coming back for. Everything that does not directly test that loop gets deferred. The result ships in weeks instead of quarters, costs a fraction of a full build, and gives you real signal — paying users, retention, investor interest — instead of an expensive guess.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <ul className="space-y-3">
                        {[
                            "A scoping sprint that cuts your idea down to the single core loop worth testing",
                            "Authentication, accounts, and the one valuable action your product is built around",
                            "A real PostgreSQL database — not mocked data — so the MVP can take live users",
                            "Stripe checkout or subscriptions when charging is part of the validation",
                            "A clean, credible interface that looks ready to investors and early users",
                            "Production deployment with a custom domain, analytics, and basic monitoring",
                            "The minimum integrations the core loop actually requires, and nothing more",
                            "A documented codebase you can extend, hand off, or grow a team around",
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
                            A one-week scoping sprint comes first. We pressure-test the idea, define the core loop, and decide together what is in v1 and what waits. You walk away with wireframes, a fixed scope, and a fixed quote — billed separately at $2,500 so you can commit to the build with the price and plan already settled. The scope doc is yours to keep even if you build it elsewhere.
                        </p>
                        <p>
                            Then five to nine weeks of building, founder-led, with a working version in your hands partway through so you are never waiting in the dark. You own the repository, the database, and the deployment from the first commit. When the MVP launches, the next move is yours — iterate with us, fundraise, or take it in-house.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Process &amp; timeline</h2>
                    <ul className="space-y-3">
                        {[
                            "Week 1: Scoping sprint — core-loop definition, wireframes, fixed scope, fixed quote",
                            "Week 2-3: Foundation — auth, database schema, deployment pipeline, the first screens",
                            "Week 4-7: Core build — the valuable action end to end, payments if needed, working preview",
                            "Week 8-10: Polish — interface refinement, analytics, monitoring, and launch to real users",
                            "Optional retainer: iterate on the next feature based on what your first users actually do",
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
                            "Next.js 16 + App Router",
                            "TypeScript",
                            "PostgreSQL",
                            "Prisma",
                            "Stripe",
                            "Auth + sessions",
                            "Tailwind CSS",
                            "Vercel",
                            "Product analytics",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        The same production stack behind our <Link href="/services/saas-platform-development" className="text-emerald-400 hover:underline">SaaS platform</Link> and <Link href="/services/web-applications" className="text-emerald-400 hover:underline">web application</Link> work — so a validated MVP grows up instead of getting rebuilt. New to the term? See <Link href="/glossary/what-is-an-mvp" className="text-emerald-400 hover:underline">what is an MVP</Link>. Hosted in your name from day one.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we keep it honest</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The hardest and most valuable part of MVP work is saying no. A firm that bills by scope has every incentive to build the long feature list; we would rather you spend fifteen thousand dollars learning your idea works than sixty thousand learning it does not. Every feature you propose gets one question: does it help us find out whether people want this? If not, it waits. That discipline is what gets you to signal in weeks.
                        </p>
                        <p>
                            We dogfood this approach on our own products — ship the smallest thing that proves the assumption, put it in front of real usage, and only then invest in the parts that earned it. We build your MVP the way we build our own first versions: small, real, and extendable.
                        </p>
                        <p>
                            Founder-led from the scoping sprint through launch, delivered remotely to founders across the United States from our base in Macon, Georgia.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fixed-fee per MVP. Typical ranges:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>One-week scoping sprint with wireframes and a fixed quote: $2,500 flat</li>
                            <li>Focused single-loop MVP, no payments: $15k – $28k</li>
                            <li>MVP with Stripe checkout or subscriptions and accounts: $25k – $45k</li>
                            <li>Two-sided or marketplace-style MVP with richer flows: $40k – $60k</li>
                            <li>Post-launch iteration retainer based on early user behavior: scoped monthly</li>
                        </ul>
                        <p>
                            Fixed scope and fixed price set before the build starts. No hourly surprises, no scope you did not approve.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "A production-ready MVP, not a throwaway prototype",
                            "The GitHub repository, database, and deployment in your name",
                            "Authentication, a real database, and payments if your validation needs them",
                            "A clean interface ready to show users and investors",
                            "Product analytics so you can see what early users actually do",
                            "Documentation so you can extend it or hand it to a team",
                            "Direct access to the founder building it, not an account manager",
                            "Optional retainer to iterate on what you learn",
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
                                q: "How long does an MVP take to build?",
                                a: "Six to ten weeks for most MVPs once scope is locked. The first week is a scoping sprint to cut the idea down to the single feature that proves it, then five to nine weeks of building, with a usable version in your hands partway through rather than only at the end.",
                            },
                            {
                                q: "What exactly should be in an MVP?",
                                a: "The one thing that proves people want what you are building, and nothing else. Most founder feature lists are three times too long for a first version. We help you find the single core loop — sign up, do the one valuable action, see the result — and cut everything that does not directly test the core assumption. Settings pages, admin tooling, and edge cases come after you have signal.",
                            },
                            {
                                q: "Is an MVP a throwaway prototype or real software?",
                                a: "Real software. We build MVPs on the same production stack we use for everything else — Next.js, TypeScript, and PostgreSQL — with authentication, a real database, and a deployment that can take real users. It is deliberately small, but it is not disposable. When you get traction, you extend it instead of starting over.",
                            },
                            {
                                q: "Do I own the code, or am I locked into your platform?",
                                a: "You own everything from day one — the GitHub repository, the database, and the deployment, all in your name. There is no platform to rent and no exit fee. You can keep working with us, hire your own engineers, or bring on a technical cofounder, and the codebase is documented for any of those paths.",
                            },
                            {
                                q: "I am non-technical — can you still work with me?",
                                a: "Most of our MVP founders are non-technical, and the engagement is built for that. You bring the domain expertise and the vision; we handle the technical decisions and explain the trade-offs in plain language. Because it is founder-led, you talk to the person actually building it, not an account manager relaying messages.",
                            },
                            {
                                q: "What happens after the MVP launches?",
                                a: "You take it to users and learn. From there you can retain us to build the next iteration based on what you learned, slow down and fundraise, or take the documented codebase in-house. We would rather help you validate cheaply than sell you a bloated v1 — the goal is real signal, fast.",
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
                        heading="Founder & build reading"
                        pinned={["build-vs-buy-software-2026", "hire-fractional-cto-vs-software-firm", "2026-state-of-custom-software-development"]}
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "saas-platform-development", title: "SaaS Platform Development", desc: "Grow a validated MVP into a full multi-tenant SaaS product." },
                            { slug: "fractional-cto-services", title: "Fractional CTO Services", desc: "Part-time technical leadership as your product and team scale." },
                            { slug: "stripe-integration", title: "Stripe Integration", desc: "Add real payments when charging is part of the validation." },
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
                        Building first versions for founders in <Link href="/industries/saas" className="text-emerald-400 hover:underline">SaaS</Link> and <Link href="/industries/fintech" className="text-emerald-400 hover:underline">fintech</Link>. To scope your MVP, <Link href="/contact" className="text-emerald-400 hover:underline">contact us</Link> or review <Link href="/pricing" className="text-emerald-400 hover:underline">pricing</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-emerald-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">MVP Development — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team working with founders nationwide. MVP builds run remotely with weekly check-ins; in-person working sessions are available in Atlanta and the Southeast.
                    </p>
                    <p className="text-gray-400 leading-relaxed max-w-3xl">
                        Founder-led from scoping through launch. Browse the full <Link href="/services" className="text-emerald-400 hover:underline">services lineup</Link> or, if you are weighing your options, read about <Link href="/services/technical-due-diligence" className="text-emerald-400 hover:underline">technical due diligence</Link> for when investors enter the picture.
                    </p>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Validate the idea, not the feature list.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. We will find the one feature worth testing and tell you what it takes to ship it.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="MVP Development" source="services-mvp" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
