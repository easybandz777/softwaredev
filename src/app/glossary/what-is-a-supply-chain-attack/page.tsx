import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is a Supply Chain Attack? Plain-English Guide | QUANT LAB USA",
    description:
        "A supply chain attack compromises a trusted vendor or dependency to reach its customers. Plain-English definition, real patterns, and how to defend. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-supply-chain-attack" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Supply Chain Attack",
    description:
        "A supply chain attack compromises a trusted third party — a software vendor, dependency, or service provider — in order to reach and harm that party's downstream customers through the trust they place in it.",
    url: "https://quantlabusa.dev/glossary/what-is-a-supply-chain-attack",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Supply Chain Attack", item: "https://quantlabusa.dev/glossary/what-is-a-supply-chain-attack" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is a supply chain attack in one sentence?", acceptedAnswer: { "@type": "Answer", text: "A supply chain attack compromises a trusted vendor, dependency, or update mechanism so that the malicious code reaches all of that vendor's customers at once." } },
        { "@type": "Question", name: "Why are supply chain attacks so effective?", acceptedAnswer: { "@type": "Answer", text: "They exploit existing trust. A signed update or a popular open-source package is installed without suspicion, so one compromise can fan out to thousands of downstream organizations." } },
        { "@type": "Question", name: "What is a software dependency attack?", acceptedAnswer: { "@type": "Answer", text: "An attack on the open-source libraries an application pulls in — by hijacking a maintainer account, publishing a malicious version, or typosquatting a package name so developers install the wrong one." } },
        { "@type": "Question", name: "What is an SBOM?", acceptedAnswer: { "@type": "Answer", text: "A software bill of materials — an inventory of every component and dependency in an application. It lets you quickly tell whether a newly disclosed compromised package is anywhere in your stack." } },
        { "@type": "Question", name: "How do you defend against supply chain attacks?", acceptedAnswer: { "@type": "Answer", text: "Pin and verify dependencies, maintain an SBOM, vet vendors and their access, apply least privilege to third-party integrations, and monitor for unexpected behavior from trusted software." } },
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
                        <li className="text-gray-300">Supply Chain Attack</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is a Supply Chain Attack?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A supply chain attack does not break into your systems directly — it compromises something you already trust and let inside: a software vendor, an open-source dependency, a build pipeline, or an update server. Because the poisoned component arrives signed, expected, and welcome, it sails past the defenses guarding the perimeter. A single compromise upstream can reach thousands of organizations downstream at once.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Trust is the attack surface</h2>
                    <p>
                        Every modern system is built on a tower of other people&apos;s code
                        and services — operating systems, libraries, cloud platforms,
                        managed integrations. Each one is a relationship of trust, and each
                        one is a potential way in. Supply chain attacks weaponize that trust:
                        rather than fight through your firewall, the attacker subverts a
                        component you install without a second thought. The economics are
                        brutal for defenders. Compromise one popular package or one widely
                        used vendor and you inherit the access of everyone who depends on it,
                        which is why these attacks have grown sharply in recent years.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The common patterns</h2>
                    <p>
                        Several shapes recur. A poisoned software update inserts malicious
                        code into a legitimate product&apos;s signed release, so customers
                        install the backdoor themselves during a routine patch. A dependency
                        attack targets the open-source libraries developers pull in — by
                        hijacking a maintainer&apos;s account, publishing a malicious version,
                        or typosquatting a package name that is one keystroke from a real
                        one. A compromised vendor with standing access to many clients
                        becomes a hub the attacker uses to pivot outward. And a tampered
                        build pipeline injects the malice between source code and shipped
                        artifact, where few people are looking.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why they are hard to catch</h2>
                    <p>
                        Most detection assumes malice comes from outside or from obviously
                        bad files. Supply chain attacks defeat that assumption: the malicious
                        code is signed by a trusted publisher, runs inside a process you
                        expect to run, and may lie dormant for weeks before activating. By
                        the time anyone notices, it has been deployed across an entire
                        customer base. This is also why a freshly disclosed compromise sets
                        off a frantic scramble — every organization has to answer
                        &ldquo;are we running the affected version anywhere?&rdquo; and many
                        cannot answer quickly because they never inventoried what they
                        depend on.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How to defend against it</h2>
                    <p>
                        You cannot eliminate dependencies, so the goal is visibility and
                        containment. Maintain a software bill of materials — a current
                        inventory of every component — so you can answer the &ldquo;are we
                        affected?&rdquo; question in minutes. Pin dependencies to known-good
                        versions and verify their integrity rather than blindly pulling the
                        latest. Apply least privilege to third-party integrations so a
                        compromised vendor cannot reach everything. Vet suppliers&apos;
                        security posture and the access you grant them. And monitor for
                        trusted software behaving in untrusted ways — the unexpected outbound
                        connection from a tool that should never make one.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Supply chain risk runs straight through the way modern software is
                        built, so we address it in the build. The applications we{" "}
                        <Link href="/services" className="text-sky-400 hover:underline">ship</Link>{" "}
                        pin and audit their dependencies, run automated checks for known-bad
                        packages in{" "}
                        <Link href="/glossary/what-is-ci-cd" className="text-sky-400 hover:underline">CI/CD</Link>,
                        and apply least privilege to every third-party integration so a
                        poisoned component cannot reach more than it needs. During a{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration test</Link>{" "}
                        we map the trust relationships an attacker would target — the
                        over-permissioned API keys and standing vendor access that turn one
                        compromise into many. Treating dependencies as part of your attack
                        surface is no longer optional.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The overlap with zero-days</h2>
                    <p>
                        Supply chain attacks and{" "}
                        <Link href="/glossary/what-is-a-zero-day-exploit" className="text-sky-400 hover:underline">zero-day exploits</Link>{" "}
                        often travel together: a previously unknown flaw in a widely used
                        dependency is, in effect, a zero-day delivered through the supply
                        chain to everyone who uses it. That is why dependency hygiene and
                        rapid patching are two sides of the same coin. The faster you know
                        what you run and the faster you can update it, the smaller the window
                        in which a compromised component — disclosed or not — can do damage
                        across your environment.
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
                        <li><Link href="/glossary/what-is-a-zero-day-exploit" className="text-sky-400 hover:underline">What is a zero-day exploit?</Link></li>
                        <li><Link href="/glossary/what-is-a-cve" className="text-sky-400 hover:underline">What is a CVE?</Link></li>
                        <li><Link href="/glossary/what-is-ci-cd" className="text-sky-400 hover:underline">What is CI/CD?</Link></li>
                        <li><Link href="/glossary/what-is-secrets-management" className="text-sky-400 hover:underline">What is secrets management?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Do you know what your code depends on?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We build with audited, pinned dependencies and least-privilege
                        integrations, and map your trust relationships. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-supplychain" />
                        <Link href="/services/penetration-testing" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Penetration testing
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
