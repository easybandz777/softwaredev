import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is DevSecOps? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "DevSecOps builds security into the development pipeline instead of bolting it on at the end. Plain-English definition, shift-left, and the toolchain. QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-devsecops" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "DevSecOps",
    description:
        "DevSecOps is a practice that integrates security testing and controls directly into the automated software delivery pipeline, making security a shared, continuous responsibility rather than a final gate.",
    url: "https://quantlabusa.dev/glossary/what-is-devsecops",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "DevSecOps", item: "https://quantlabusa.dev/glossary/what-is-devsecops" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is DevSecOps in one sentence?", acceptedAnswer: { "@type": "Answer", text: "DevSecOps is the practice of building security checks directly into the automated CI/CD pipeline so that vulnerabilities are caught continuously during development rather than discovered in a single audit right before release." } },
        { "@type": "Question", name: "What does shift left mean?", acceptedAnswer: { "@type": "Answer", text: "Shifting left means moving security activities earlier in the development lifecycle — into coding and the build pipeline — instead of waiting until just before deployment. Defects caught early are far cheaper and faster to fix." } },
        { "@type": "Question", name: "What is the difference between DevOps and DevSecOps?", acceptedAnswer: { "@type": "Answer", text: "DevOps unites development and operations to ship software quickly and reliably. DevSecOps adds security as a first-class member of that loop, so the speed of DevOps does not come at the cost of shipping insecure code." } },
        { "@type": "Question", name: "What tools are used in DevSecOps?", acceptedAnswer: { "@type": "Answer", text: "Common categories are SAST for static code analysis, DAST for testing running apps, SCA for scanning open-source dependencies, secret scanning, container and infrastructure-as-code scanning, all wired into the CI/CD pipeline as automated gates." } },
        { "@type": "Question", name: "Does DevSecOps replace penetration testing?", acceptedAnswer: { "@type": "Answer", text: "No. Automated pipeline scanning catches known classes of issues continuously, but it cannot replace a skilled human probing business logic and chaining flaws. Mature programs use both: automation for breadth, pentesting for depth." } },
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
                        <li className="text-gray-300">DevSecOps</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is DevSecOps?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        DevSecOps folds security into the same automated pipeline that builds, tests, and ships software — so security becomes a continuous, shared responsibility instead of a one-time inspection bolted on right before launch. The shorthand is "shift left": catch problems while code is being written and built, where they are cheap to fix, rather than after release, where they are expensive and embarrassing.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The problem with security as a gate</h2>
                    <p>
                        For decades, security lived at the end of the line: build the
                        software, then hand it to a security team for a review weeks
                        before launch. That model collided head-on with modern delivery,
                        where teams deploy many times a day. A security gate that takes
                        weeks cannot keep up with a pipeline that ships hourly, so it
                        either becomes a bottleneck everyone resents or gets skipped under
                        deadline pressure. Worse, a flaw found at the end is the most
                        expensive kind to fix, because it may be baked into architecture
                        that is now hard to change. DevSecOps exists to dissolve that
                        end-of-line gate.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Shift left, but everywhere</h2>
                    <p>
                        "Shift left" is the slogan, but the real idea is broader: embed
                        security at every stage rather than concentrating it at one. That
                        means threat modeling during design, secure coding standards and
                        IDE warnings while developing, automated scans in the build,
                        security checks before merge, and continuous monitoring in
                        production — "shift right" too. The point is not to dump security
                        work onto developers, but to make the secure path the easy,
                        automated default so that doing the right thing requires no extra
                        heroics. Culture matters as much as tooling: security stops being
                        someone else's job.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The automated toolchain</h2>
                    <p>
                        A DevSecOps pipeline stacks several kinds of automated checks.
                        Static application security testing (SAST) scans source code for
                        risky patterns. Software composition analysis (SCA) inspects your
                        open-source dependencies for known{" "}
                        <Link href="/glossary/what-is-a-cve" className="text-sky-400 hover:underline">CVEs</Link>.
                        Dynamic testing (DAST) probes the running application. Secret
                        scanning blocks credentials from being committed. Container and
                        infrastructure-as-code scanning catch misconfigurations before
                        they deploy. These run inside{" "}
                        <Link href="/glossary/what-is-ci-cd" className="text-sky-400 hover:underline">CI/CD</Link>{" "}
                        as gates, so a build with a critical finding fails fast instead of
                        reaching production.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Automation is not the whole job</h2>
                    <p>
                        The honest caveat: automated scanning is necessary but not
                        sufficient. Tools are excellent at finding known classes of bugs
                        at scale, but they are blind to business-logic flaws, to clever
                        chains of individually minor issues, and to the kind of "this
                        feature does exactly what it was told to do, and that is the
                        problem" vulnerability. They also generate false positives that,
                        left unmanaged, train teams to ignore the alerts entirely. That is
                        why DevSecOps complements rather than replaces{" "}
                        <Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">penetration testing</Link>{" "}
                        and{" "}
                        <Link href="/glossary/what-is-threat-modeling" className="text-sky-400 hover:underline">threat modeling</Link>:
                        automation for continuous breadth, humans for periodic depth.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We build DevSecOps into the pipelines we deliver rather than
                        treating it as a separate product. Our{" "}
                        <Link href="/services/devops-engineering" className="text-sky-400 hover:underline">DevOps engineering</Link>{" "}
                        work wires dependency, secret, and static-analysis scanning into{" "}
                        <Link href="/glossary/what-is-ci-cd" className="text-sky-400 hover:underline">CI/CD</Link>{" "}
                        so insecure code fails the build before it ever merges. Because we
                        also do{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration testing</Link>,
                        we tune those gates with an attacker's perspective — we know which
                        findings actually matter and which scanner noise to suppress, so
                        the pipeline stays fast and developers keep trusting it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A pragmatic rollout</h2>
                    <p>
                        Trying to bolt on every scanner at once produces a wall of alerts
                        and a revolt. A saner path: start with dependency and secret
                        scanning, which have high signal and low friction; fail the build
                        only on genuinely critical findings at first, and tighten over
                        time; give developers fast, in-context feedback rather than a
                        report they read once a quarter; and ruthlessly tune out false
                        positives so the gates stay credible. The measure of success is
                        not how many tools you run — it is whether security findings get
                        fixed early as a normal part of shipping, without slowing the team
                        to a crawl.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["pentest","stack"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-ci-cd" className="text-sky-400 hover:underline">What is CI/CD?</Link></li>
                        <li><Link href="/glossary/what-is-the-secure-sdlc" className="text-sky-400 hover:underline">What is the Secure SDLC?</Link></li>
                        <li><Link href="/glossary/what-is-vulnerability-scanning" className="text-sky-400 hover:underline">What is vulnerability scanning?</Link></li>
                        <li><Link href="/glossary/what-is-threat-modeling" className="text-sky-400 hover:underline">What is threat modeling?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Want security built into your pipeline?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We wire security scanning into CI/CD and tune it with an
                        attacker's eye so it actually helps. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-devsecops" />
                        <Link href="/services/devops-engineering" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            DevOps engineering
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
