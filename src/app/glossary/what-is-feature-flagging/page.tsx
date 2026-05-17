import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is Feature Flagging? Examples & Tools | QUANT LAB USA",
    description:
        "Feature flags decouple deploy from release so you can ship safely. Plain-English definition, LaunchDarkly vs OSS, 2026 patterns. By QUANT LAB USA.",
    slug: "/glossary/what-is-feature-flagging",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Feature Flagging",
    description:
        "Feature flagging is the practice of wrapping new code paths behind runtime toggles so that the act of deploying code is separated from the act of releasing the feature to users, enabling controlled rollouts and instant rollbacks.",
    url: "https://quantlabusa.dev/glossary/what-is-feature-flagging",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is feature flagging?", item: "https://quantlabusa.dev/glossary/what-is-feature-flagging" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is a feature flag?", acceptedAnswer: { "@type": "Answer", text: "A feature flag (also called a feature toggle) is a runtime configuration value that gates a piece of code so it can be turned on or off without redeploying — used for safe rollouts, A/B tests, kill switches, and gating premium features." } },
        { "@type": "Question", name: "What are the four kinds of feature flags?", acceptedAnswer: { "@type": "Answer", text: "Pete Hodgson's well-known taxonomy: release toggles (short-lived, for rolling out new features), experiment toggles (A/B tests), ops toggles (kill switches and circuit breakers), and permission toggles (premium-tier or entitlement gates)." } },
        { "@type": "Question", name: "What tools provide feature flags?", acceptedAnswer: { "@type": "Answer", text: "LaunchDarkly, Statsig, Flagsmith, ConfigCat, Unleash, and PostHog all provide hosted feature-flag platforms. Many teams also roll their own using a database table and a small SDK." } },
        { "@type": "Question", name: "Are feature flags technical debt?", acceptedAnswer: { "@type": "Answer", text: "Long-lived flags often are. A flag that has been at 100% for six months is debt. The discipline is to treat release toggles as having an expiration date and to delete them once the rollout is complete." } },
        { "@type": "Question", name: "Do small teams need a flag platform?", acceptedAnswer: { "@type": "Answer", text: "Not at first. A small team can ship with a simple flags table in Postgres and a typed accessor in code. The case for an external platform grows with the number of experiments and the need for non-engineers to flip flags." } },
    ],
};

export default function Page() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <article className="container mx-auto px-6 max-w-3xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/glossary" className="hover:text-sky-400 transition-colors">Glossary</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">What is feature flagging?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Feature Flagging?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Feature flagging is the practice of wrapping new code paths behind runtime toggles so that deploying code and releasing a feature become two separate decisions — engineering ships in small, low-risk increments, and product turns the feature on for users when the timing is right.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why the pattern exists</h2>
                    <p>
                        Without feature flags, a deploy and a release are the same event. Pushing code to production means making the change visible to everyone simultaneously, and rolling back means a hot deploy in the middle of an incident. Feature flags decouple the two. The code can sit in production for weeks, off by default, and be enabled for 1% of users, then 5%, then 50%, then everyone — or turned off in a second if the metrics go sideways. The pattern is what enables modern continuous delivery without the heartburn of "every Friday is risky."
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The four kinds of flags</h2>
                    <p>
                        Pete Hodgson's 2017 taxonomy is the standard reference. Release toggles hide work-in-progress features from users until they are ready; they are short-lived and should be deleted after the rollout. Experiment toggles route different cohorts of users through different code paths so the team can measure which converts better. Ops toggles are kill switches that disable a feature, vendor integration, or expensive code path in a hurry — they tend to live forever and exist precisely so they can be flipped at 2am. Permission toggles gate paid features or beta access on a per-customer or per-plan basis and are essentially a part of the entitlement system.
                    </p>
                    <p>
                        Conflating the four is a common source of trouble. A flag built as a quick release toggle that grows into a permanent permission gate without anyone deciding it should becomes a long-tailed mess.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the debt accumulates</h2>
                    <p>
                        A feature flag is a fork in the code. Every flag doubles the number of paths through whatever it gates, and a system with fifty long-lived flags has 2^50 theoretical configurations, of which roughly four are actually tested. The cost shows up as bugs that only reproduce when an unusual combination of flags is enabled, and as code that no engineer can read confidently because there are six branches gated on six toggles. The fix is process: every release toggle has a removal ticket, and "did you delete the flag" is part of the rollout checklist.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Build vs buy</h2>
                    <p>
                        Hosted platforms — LaunchDarkly, Statsig, Flagsmith, ConfigCat, Unleash, PostHog — give you a UI for non-engineers, audit trails, targeted rollouts by cohort, and SDKs in every language. They are worth the cost the moment product managers want to flip flags themselves, or the moment the experiment count crosses ten or so. For smaller teams, a flags table in Postgres with a typed accessor in code is plenty — usually less than a day of work, and trivial to migrate to a hosted platform later.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Every <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform</Link> we ship has flag infrastructure on day one — even when the first feature behind a flag doesn't exist yet. The marginal cost of building it in early is hours; the marginal cost of retrofitting it during an incident is the incident. Most projects use a Postgres-backed flag system with an admin panel; the cost of LaunchDarkly stops being worth it for clients under a few thousand users.
                    </p>
                    <p>
                        Flags pair naturally with <Link href="/glossary/what-is-blue-green-deployment" className="text-sky-400 hover:underline">blue-green</Link> and canary deployments — the deployment infrastructure ships the code safely, the flags govern who sees it. Read our <Link href="/blog/internal-tools-platform-engineering-guide" className="text-sky-400 hover:underline">platform engineering guide</Link> for how this fits the broader rollout story, or <Link href="/contact" className="text-sky-400 hover:underline">book a call</Link> if you are planning a risky launch and want a sober review of your rollout plan.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack","saas"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-blue-green-deployment" className="text-sky-400 hover:underline">What is blue-green deployment?</Link></li>
                        <li><Link href="/glossary/what-is-product-led-growth" className="text-sky-400 hover:underline">What is product-led growth?</Link></li>
                        <li><Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">What is microservices architecture?</Link></li>
                        <li><Link href="/glossary/what-is-an-mvp" className="text-sky-400 hover:underline">What is an MVP?</Link></li>
                        <li><Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">What is SaaS?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Risky launch coming up?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        Half an hour to review your rollout plan, your flag hygiene, and the kill switches you wish you had.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-feature-flagging" />
                        <Link href="/services/devops-engineering" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            DevOps engineering
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
