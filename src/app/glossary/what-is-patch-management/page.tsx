import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Patch Management? Plain-English Guide | QUANT LAB USA",
    description:
        "Patch management is the disciplined process of finding, testing, and deploying software updates that fix security flaws. Plain-English definition. QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-patch-management" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Patch Management",
    description:
        "Patch management is the systematic process of identifying, acquiring, testing, and deploying software updates to remediate known vulnerabilities and bugs across an organization's systems.",
    url: "https://quantlabusa.dev/glossary/what-is-patch-management",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Patch Management", item: "https://quantlabusa.dev/glossary/what-is-patch-management" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is patch management in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Patch management is the disciplined process of finding out which of your systems need software updates, testing those updates, and deploying them on a timeline that closes security holes before attackers can exploit them." } },
        { "@type": "Question", name: "Why is patch management hard?", acceptedAnswer: { "@type": "Answer", text: "Because patches can break things. The tension is between deploying fast to close a security hole and testing enough to avoid an outage. At scale, with thousands of components and dependencies, knowing what to patch and in what order is a genuine operational challenge." } },
        { "@type": "Question", name: "What is a patch window?", acceptedAnswer: { "@type": "Answer", text: "A patch window, or maintenance window, is a scheduled period when updates are applied, chosen to minimize disruption — often nights or weekends. Critical security patches sometimes have to be applied out of band, outside the normal window." } },
        { "@type": "Question", name: "What is the difference between patching and vulnerability scanning?", acceptedAnswer: { "@type": "Answer", text: "Vulnerability scanning identifies what is out of date or exposed; patch management is the process of actually fixing it. Scanning finds the problem, patching closes it. The two are tightly linked stages of the same lifecycle." } },
        { "@type": "Question", name: "How fast should critical patches be applied?", acceptedAnswer: { "@type": "Answer", text: "For actively exploited critical vulnerabilities, the target is days, not months. Frameworks like the CISA Known Exploited Vulnerabilities catalog set firm deadlines, and the gap between disclosure and exploitation has shrunk dramatically." } },
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
                        <li className="text-gray-300">Patch Management</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Patch Management?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Patch management is the disciplined, repeatable process of figuring out which of your systems need software updates, testing those updates, and rolling them out on a timeline that closes security holes before someone exploits them. It sounds mundane, and that is precisely the danger — unpatched, publicly known vulnerabilities are among the most common root causes of serious breaches, year after year.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why "just update it" is harder than it sounds</h2>
                    <p>
                        Everyone knows you should keep software up to date. The reason
                        organizations fall behind is that patching carries real risk:
                        an update can break a critical application, introduce a
                        regression, or require downtime. So every patch is a small bet
                        between two failure modes — deploy too slowly and you stay
                        exposed to a known exploit; deploy too hastily and you cause an
                        outage. Multiply that decision across thousands of servers,
                        libraries, containers, and devices, each with its own
                        dependencies, and "just update it" becomes a genuine operational
                        discipline rather than a one-click chore.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The patch lifecycle</h2>
                    <p>
                        A mature process runs in stages. First, maintain an accurate
                        inventory — you cannot patch what you do not know you have.
                        Second, monitor for available patches and disclosed
                        vulnerabilities, often fed directly by{" "}
                        <Link href="/glossary/what-is-vulnerability-scanning" className="text-sky-400 hover:underline">vulnerability scanning</Link>.
                        Third, prioritize by real risk: a critical, actively exploited
                        flaw on an internet-facing system jumps the queue. Fourth, test
                        the patch in a staging environment to catch breakage. Fifth,
                        deploy in a controlled way, ideally automated and staged. Finally,
                        verify the patch actually applied and the vulnerability is closed.
                        Each stage exists because skipping it has burned someone.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The shrinking window</h2>
                    <p>
                        The timeline pressure has intensified. Once a vulnerability is
                        publicly disclosed and a{" "}
                        <Link href="/glossary/what-is-a-cve" className="text-sky-400 hover:underline">CVE</Link>{" "}
                        is published, attackers reverse-engineer the patch and weaponize
                        it — sometimes within hours. The gap between disclosure and
                        mass exploitation has collapsed from months to days. That is why
                        the US Cybersecurity and Infrastructure Security Agency maintains
                        a Known Exploited Vulnerabilities catalog with hard remediation
                        deadlines for federal agencies, and why "we patch quarterly" is
                        no longer a defensible posture for anything internet-facing.
                        Critical patches increasingly demand out-of-band, same-week
                        deployment.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Dependencies are the hidden surface</h2>
                    <p>
                        Modern applications are mostly other people's code. A typical web
                        app pulls in hundreds of open-source packages, each with its own
                        transitive dependencies, and a vulnerability deep in that tree is
                        still your vulnerability. Patch management therefore extends well
                        beyond operating systems to the software supply chain: keeping
                        libraries current, watching for advisories on the components you
                        depend on, and rebuilding when an upstream fix lands. This is
                        where software composition analysis and a{" "}
                        <Link href="/glossary/what-is-devsecops" className="text-sky-400 hover:underline">DevSecOps</Link>{" "}
                        pipeline earn their keep — they turn dependency patching from a
                        manual scavenger hunt into an automated, continuous flow.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We build patching into the way systems are delivered rather than
                        leaving it as an afterthought. Our{" "}
                        <Link href="/services/devops-engineering" className="text-sky-400 hover:underline">DevOps engineering</Link>{" "}
                        work automates dependency updates and rebuilds through{" "}
                        <Link href="/glossary/what-is-ci-cd" className="text-sky-400 hover:underline">CI/CD</Link>,
                        with staging tests that catch breakage before it reaches
                        production. When we perform a{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration test</Link>,
                        outdated, exploitable components are one of the most reliable ways
                        in — and finding them is often a direct indictment of a missing or
                        neglected patch process. Closing that gap is frequently the
                        highest-leverage security improvement a client can make.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Making patching sustainable</h2>
                    <p>
                        The programs that succeed make patching boring and automatic.
                        They keep a real-time asset inventory, automate testing and
                        deployment so updates do not depend on someone remembering, and
                        define clear SLAs — critical flaws in days, lower-severity ones on
                        a regular cadence. They use staged rollouts and quick rollback so
                        a bad patch is a minor blip, not an outage. And they reduce the
                        surface to begin with: fewer components, immutable infrastructure
                        rebuilt from patched images, and managed services where the
                        provider patches for you. The goal is not heroic emergency
                        patching — it is a steady cadence that rarely needs heroics.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["pentest","compliance"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-vulnerability-scanning" className="text-sky-400 hover:underline">What is vulnerability scanning?</Link></li>
                        <li><Link href="/glossary/what-is-a-cve" className="text-sky-400 hover:underline">What is a CVE?</Link></li>
                        <li><Link href="/glossary/what-is-devsecops" className="text-sky-400 hover:underline">What is DevSecOps?</Link></li>
                        <li><Link href="/glossary/what-is-the-secure-sdlc" className="text-sky-400 hover:underline">What is the Secure SDLC?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Falling behind on patches?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We automate patching and dependency updates through your pipeline
                        so staying current stops being a fire drill. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-patch" />
                        <Link href="/services/devops-engineering" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            DevOps engineering
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
