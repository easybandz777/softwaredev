import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is Blue-Green Deployment? Plain-English | QUANT LAB USA",
    description:
        "Blue-green deployment ships new code with zero downtime by running two identical environments. Plain-English definition, tradeoffs, examples. By QUANT LAB USA.",
    slug: "/glossary/what-is-blue-green-deployment",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Blue-Green Deployment",
    description:
        "Blue-green deployment is a release strategy in which two identical production environments — blue and green — are maintained, with traffic served from one while the other is updated, validated, and ready to take over at the flip of a router setting.",
    url: "https://quantlabusa.dev/glossary/what-is-blue-green-deployment",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is blue-green deployment?", item: "https://quantlabusa.dev/glossary/what-is-blue-green-deployment" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is blue-green deployment?", acceptedAnswer: { "@type": "Answer", text: "It is a release strategy where two identical production environments are maintained side by side. One serves traffic (blue), the other is updated and validated (green), and the cutover is a router change rather than a redeploy." } },
        { "@type": "Question", name: "Who coined the term?", acceptedAnswer: { "@type": "Answer", text: "Daniel Terhorst-North and Jez Humble popularized the term in writings on continuous delivery in the late 2000s, including in Humble's 2010 book Continuous Delivery." } },
        { "@type": "Question", name: "How is blue-green different from canary deployment?", acceptedAnswer: { "@type": "Answer", text: "Blue-green flips 100% of traffic from old to new at once. Canary gradually shifts a small percentage to the new version first, watches metrics, and increases the share if everything looks healthy." } },
        { "@type": "Question", name: "Does blue-green double infrastructure cost?", acceptedAnswer: { "@type": "Answer", text: "It can during the cutover window, though for short windows on elastic cloud infrastructure the cost is modest. Many teams scale the inactive environment down between deployments and back up just before a release." } },
        { "@type": "Question", name: "Is blue-green still relevant with serverless platforms?", acceptedAnswer: { "@type": "Answer", text: "Yes, but it often takes a different form. Platforms like Vercel, Cloudflare Pages, and AWS Lambda support immutable deployments and atomic alias switches, which give you the blue-green property without explicitly running two environments." } },
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
                        <li className="text-gray-300">What is blue-green deployment?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Blue-Green Deployment?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Blue-green deployment is a release pattern in which two identical production environments run side by side — one (call it blue) serving live traffic, the other (green) receiving the new version. Releases are not redeploys; they are router flips. Rollbacks are flips in the other direction. Downtime collapses to roughly zero.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the pattern came from</h2>
                    <p>
                        Daniel Terhorst-North described an early version in the mid-2000s, and Jez Humble's 2010 Continuous Delivery book made the pattern the standard reference. The motivating problem was very real for teams of that era: an in-place deploy meant a window during which the application was partly old and partly new, which was a window during which weird things could happen — half-broken pages, dropped sessions, mid-request errors. Blue-green eliminated the window by treating the two environments as atomic units.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How a release actually flows</h2>
                    <p>
                        A typical cycle: blue is serving production traffic. The team builds and deploys the new version to green. Smoke tests run against green from inside the data center. Synthetic users hit green's endpoints. A small percentage of real traffic — sometimes employees only, sometimes a single internal customer — is routed to green for confidence. Then the load balancer or DNS record flips, and green becomes the production environment. Blue stays alive, untouched, for a defined window. If anything goes wrong, the flip is reversed and blue is serving traffic again within seconds.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The database problem</h2>
                    <p>
                        The hardest part of blue-green deployment is the database, because both environments need to share one (or at minimum, the two databases have to stay in sync), and schema changes have to be backward compatible across both versions of the application for the duration of the cutover. The standard discipline is the "expand and contract" pattern: deploy schema changes additively (new columns, new tables) first, deploy the application code that uses them second, and only later remove the old schema in a clean-up release. Teams that ignore the discipline learn the hard way during their first rollback.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Blue-green vs canary</h2>
                    <p>
                        Both patterns aim to make releases safer. Blue-green is binary — at any moment, 100% of traffic is on one version. Canary is gradient — 1% on the new version first, then 5%, then 25%, with metrics watched at each step. Canary handles "the new version is slightly slower" or "the new version's error rate is 0.3% higher" better than blue-green does, because blue-green only shows you the problem after the full flip. Many mature teams combine both: blue-green for the safety property, canary inside the cutover for the gradient.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        For the platforms we ship on managed serverless infrastructure — typically Vercel for <Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">Next.js</Link> applications — blue-green is essentially built in. Each deployment gets its own immutable URL, the production alias is an atomic flip, and rollbacks take a single command. We pair that with <Link href="/glossary/what-is-feature-flagging" className="text-sky-400 hover:underline">feature flags</Link> so risky behavior changes can be staged independently of the release itself.
                    </p>
                    <p>
                        For clients on AWS, GCP, or Azure, our <Link href="/services/devops-engineering" className="text-sky-400 hover:underline">DevOps engineering</Link> practice builds blue-green into the deployment pipeline directly — ECS or Kubernetes services behind a load balancer that flips between target groups, with smoke tests and automated rollback gates. Read our <Link href="/blog/internal-tools-platform-engineering-guide" className="text-sky-400 hover:underline">platform engineering guide</Link> for the broader picture, or <Link href="/contact" className="text-sky-400 hover:underline">book a call</Link> for a one-hour review of your release process.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-feature-flagging" className="text-sky-400 hover:underline">What is feature flagging?</Link></li>
                        <li><Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">What is Next.js?</Link></li>
                        <li><Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">What is microservices architecture?</Link></li>
                        <li><Link href="/glossary/what-is-server-side-rendering" className="text-sky-400 hover:underline">What is server-side rendering?</Link></li>
                        <li><Link href="/glossary/what-is-a-monorepo" className="text-sky-400 hover:underline">What is a monorepo?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Releases that should not scare you</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We build deployment pipelines that make pushing on Friday a non-event — with rollbacks that finish before the incident channel does.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-blue-green" />
                        <Link href="/services/devops-engineering" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            DevOps engineering
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
