import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is a CVE? Common Vulnerabilities and Exposures | QUANT LAB USA",
    description:
        "A CVE is a public, unique ID for a known security flaw. Plain-English definition, how CVE IDs and CVSS scores work, and why they matter — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-cve" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "CVE (Common Vulnerabilities and Exposures)",
    description:
        "A CVE is a unique, public identifier assigned to a specific known security vulnerability so that every tool, vendor, and defender can refer to the same flaw by the same name.",
    url: "https://quantlabusa.dev/glossary/what-is-a-cve",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is a CVE?", item: "https://quantlabusa.dev/glossary/what-is-a-cve" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does CVE stand for?", acceptedAnswer: { "@type": "Answer", text: "CVE stands for Common Vulnerabilities and Exposures. It is a public catalog, run with MITRE Corporation as editor, that assigns a unique ID to each known security flaw so everyone refers to it by the same name." } },
        { "@type": "Question", name: "What does a CVE ID look like?", acceptedAnswer: { "@type": "Answer", text: "A CVE ID has the form CVE-YEAR-NUMBER, for example CVE-2021-44228, the identifier for the Log4Shell flaw. The year is when the ID was reserved, and the number is a sequential identifier." } },
        { "@type": "Question", name: "What is the difference between a CVE and a CVSS score?", acceptedAnswer: { "@type": "Answer", text: "A CVE is the name of a specific flaw. CVSS, the Common Vulnerability Scoring System, is the 0.0 to 10.0 severity number attached to it. The CVE tells you which flaw; the CVSS suggests how bad it is." } },
        { "@type": "Question", name: "Does having a CVE mean my system is exploitable?", acceptedAnswer: { "@type": "Answer", text: "Not necessarily. A CVE means a flaw exists in a product or version. Whether you are exploitable depends on whether you run the affected version, whether the vulnerable feature is reachable, and whether compensating controls block the path." } },
        { "@type": "Question", name: "Where can I look up a CVE?", acceptedAnswer: { "@type": "Answer", text: "The two main sources are the CVE program's own list and the U.S. National Vulnerability Database (NVD), which enriches each CVE with CVSS scores and affected-version data." } },
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
                        <li className="text-gray-300">What is a CVE?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is a CVE?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A CVE (Common Vulnerabilities and Exposures entry) is a unique, public ID assigned to a specific known security flaw, so that every scanner, vendor, news article, and defender can talk about the exact same vulnerability by the exact same name.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What does it mean?</h2>
                    <p>
                        Before CVEs existed, two security tools could find the same flaw and call it
                        two different things, and a defender had no reliable way to know they were
                        looking at one problem instead of two. A CVE solves that with a shared
                        dictionary entry. Each entry has an ID in the form{" "}
                        <strong>CVE-YEAR-NUMBER</strong> — for example CVE-2021-44228, the famous
                        Log4Shell flaw — plus a short description and a list of affected products
                        and versions. The CVE itself is deliberately just an identifier and a brief
                        description; it is the lookup key, not the full story.
                    </p>
                    <p>
                        Think of it as the ISBN of security flaws. An ISBN does not tell you whether
                        a book is good; it just guarantees that when two people say a number, they
                        mean the same book. A CVE does the same for vulnerabilities, which turns out
                        to be the unglamorous foundation that the entire patching and scanning
                        ecosystem is built on.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the term came from</h2>
                    <p>
                        The CVE program launched in 1999, run by the nonprofit MITRE Corporation
                        with funding from the U.S. government, precisely to end the naming chaos
                        described above. The original list held a few hundred entries; today there
                        are well over two hundred thousand. The program works through a federated
                        model: organizations called CVE Numbering Authorities (CNAs) — major
                        vendors like Microsoft, Google, and Apple, plus coordination bodies — are
                        authorized to assign CVE IDs for flaws in their own products, which spreads
                        the workload across the industry instead of bottlenecking on one team.
                    </p>
                    <p>
                        Alongside the CVE list, the U.S. National Vulnerability Database (NVD), run
                        by NIST, takes each CVE and enriches it with a severity score, structured
                        affected-version data, and references. So in practice, people say &quot;CVE&quot;
                        but pull the actionable details from the NVD.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works</h2>
                    <p>
                        The number that usually drives action is not the CVE ID itself but the CVSS
                        score attached to it. CVSS, the Common Vulnerability Scoring System, rates
                        each flaw from 0.0 to 10.0 based on factors like whether it can be exploited
                        remotely, whether it needs authentication, and how much damage it does.
                        Scores bucket roughly into Low, Medium, High, and Critical. A CVE with a
                        9.8 makes headlines; one with a 3.1 rarely does.
                    </p>
                    <p>
                        The crucial nuance is that a CVE describes a flaw in a <em>product</em>, not
                        in <em>your</em> system. A CVE rated 10.0 in a library you do not use, or in
                        a version you patched two releases ago, is irrelevant to you. Conversely, a
                        medium-scored CVE in a component sitting on your public login page can be a
                        genuine emergency. This is why mature teams combine CVE data with an
                        accurate inventory of what they actually run — a practice that overlaps
                        heavily with{" "}
                        <Link href="/glossary/what-is-threat-modeling" className="text-sky-400 hover:underline">threat modeling</Link>. A
                        CVE is the same kind of catalogued object as a generic{" "}
                        <Link href="/glossary/what-is-a-vulnerability" className="text-sky-400 hover:underline">vulnerability</Link>,
                        just with a globally agreed name.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        CVEs matter most during two moments: routine patching and emergency
                        response. In normal operations, vulnerability scanners cross-reference your
                        software against the CVE list and tell you which known flaws apply, so your
                        team can prioritize updates. In a crisis — when a critical CVE drops for
                        something you depend on — the CVE ID becomes the shared reference everyone
                        from your engineers to your vendors to the security press uses to coordinate
                        the response. Log4Shell (CVE-2021-44228) was the textbook example: a single
                        identifier let the whole world organize a response within hours. For any
                        company pursuing{" "}
                        <Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">SOC 2</Link> or
                        PCI-DSS, demonstrating a disciplined process for tracking and remediating
                        CVEs is effectively table stakes.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Knowing a CVE exists is easy; knowing whether it is actually exploitable in
                        your environment is the hard part, and it is where our{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration testing</Link> work
                        earns its keep. We do not just hand you a scanner dump of every CVE that
                        matches your software inventory — we verify which ones are reachable, which
                        ones chain into a real attack path, and which ones a scanner flagged but an
                        attacker could never reach. We map findings to{" "}
                        <Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link> so
                        you understand the technique behind the flaw, not just its catalog number.
                        If you want the deeper distinction between an automated scan and human
                        verification, our blog post on{" "}
                        <Link href="/blog/what-is-penetration-testing" className="text-sky-400 hover:underline">what penetration testing actually is</Link> lays
                        it out.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        pinned={["what-is-penetration-testing", "soc2-pentest-prep-guide-2026", "penetration-test-cost-2026"]}
                        topics={["pentest"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-a-vulnerability" className="text-sky-400 hover:underline">What is a vulnerability?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                        <li><Link href="/glossary/what-is-threat-modeling" className="text-sky-400 hover:underline">What is threat modeling?</Link></li>
                        <li><Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link></li>
                        <li><Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Worried a CVE affects you?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We will tell you which known flaws are actually exploitable in your stack —
                        not just which ones match your software list. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-cve" />
                        <Link href="/services/penetration-testing" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Penetration testing services
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
