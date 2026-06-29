import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Ransomware? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "Ransomware encrypts an organization's data and demands payment to release it. Plain-English definition, how infections start, and how to prevent it. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-ransomware" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Ransomware",
    description:
        "Ransomware is malicious software that encrypts a victim's files or systems and demands payment, usually in cryptocurrency, in exchange for the decryption key needed to restore access.",
    url: "https://quantlabusa.dev/glossary/what-is-ransomware",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Ransomware", item: "https://quantlabusa.dev/glossary/what-is-ransomware" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is ransomware in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Ransomware is malware that encrypts your data and demands a payment to give it back, often combined with a threat to leak the stolen data publicly." } },
        { "@type": "Question", name: "What is double extortion?", acceptedAnswer: { "@type": "Answer", text: "A tactic where attackers steal a copy of the data before encrypting it, then threaten to publish it. This way, restoring from backups alone does not protect against the leak." } },
        { "@type": "Question", name: "How does ransomware get in?", acceptedAnswer: { "@type": "Answer", text: "Most commonly through phishing emails, stolen or reused credentials on exposed remote-access services, and exploitation of unpatched, internet-facing software." } },
        { "@type": "Question", name: "Should you pay the ransom?", acceptedAnswer: { "@type": "Answer", text: "Law enforcement generally advises against it. Payment funds further crime, does not guarantee a working key or that stolen data is deleted, and may carry legal risk. Tested backups are the real answer." } },
        { "@type": "Question", name: "What is the best defense against ransomware?", acceptedAnswer: { "@type": "Answer", text: "Offline, tested backups; phishing-resistant MFA on every remote-access point; rapid patching of internet-facing systems; network segmentation; and endpoint detection to catch the intrusion before encryption begins." } },
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
                        <li className="text-gray-300">Ransomware</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Ransomware?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Ransomware is malicious software that encrypts an organization&apos;s files and systems, then demands a payment — almost always in cryptocurrency — for the key to unlock them. Modern campaigns add a second threat: the attackers steal a copy of the data first and promise to publish it unless paid, so even a clean restore from backup does not make the problem go away.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How an attack unfolds</h2>
                    <p>
                        Ransomware rarely detonates the instant it lands. A typical
                        intrusion starts small — a phished credential, a reused password on
                        an exposed remote-desktop service, or an unpatched internet-facing
                        application. The attacker then moves laterally, escalates privileges,
                        and maps the network for days or weeks, quietly locating backups and
                        the most valuable data. Only at the end do they trigger encryption
                        everywhere at once, usually after hours, to maximize damage before
                        anyone can respond. By the time files lock, the real breach is long
                        past — which is exactly where defenders have the best chance to catch
                        it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Double and triple extortion</h2>
                    <p>
                        Years ago, solid backups defeated ransomware: you wiped the machines
                        and restored. Attackers adapted. Double extortion adds data theft
                        before encryption, so the victim faces a public leak even with
                        perfect backups. Some crews escalate to triple extortion — also
                        threatening a DDoS, or contacting the victim&apos;s customers and
                        regulators directly to increase pressure. This shift means
                        ransomware is now as much a data-breach problem as an availability
                        problem, and the response has to account for the confidentiality of
                        whatever was exfiltrated, not just getting systems back online.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ransomware as a business</h2>
                    <p>
                        The ecosystem is industrialized. Ransomware-as-a-service operators
                        build and maintain the malware, then rent it to affiliates who carry
                        out intrusions and split the proceeds. Initial-access brokers sell
                        footholds into already-compromised networks. This division of labor
                        lowers the skill needed to launch a damaging attack and is a big
                        reason ransomware has stayed near the top of the threat list for
                        organizations of every size. It is not a lone hacker in a hoodie —
                        it is a supply chain, which is also a clue to how it should be
                        disrupted.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How to prevent it</h2>
                    <p>
                        Prevention is layered. Close the common front doors first:
                        phishing-resistant multi-factor authentication on every
                        remote-access service, rapid patching of internet-facing software,
                        and elimination of reused or weak credentials. Segment the network so
                        one compromised machine cannot reach everything. Keep offline,
                        immutable, regularly tested backups that an attacker who owns the
                        domain cannot encrypt or delete. Deploy endpoint detection to catch
                        the lateral movement and privilege escalation that precede
                        encryption. And rehearse the incident-response plan, because the
                        worst time to write one is mid-incident.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We help organizations close the doors ransomware crews walk through.
                        Our{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration tests</Link>{" "}
                        and{" "}
                        <Link href="/services/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory assessments</Link>{" "}
                        replay the exact path an intruder takes — from an initial foothold
                        through{" "}
                        <Link href="/glossary/what-is-privilege-escalation" className="text-sky-400 hover:underline">privilege escalation</Link>{" "}
                        to domain-wide control — and surface the misconfigurations that would
                        let an attacker reach your backups. On the software we build, we
                        default to least privilege, MFA, and patched dependencies so the
                        common entry points simply are not there. Ransomware thrives on
                        neglected basics; we find them before the affiliates do.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The human entry point</h2>
                    <p>
                        Most ransomware starts with a person, not a zero-day. A convincing{" "}
                        <Link href="/glossary/what-is-phishing" className="text-sky-400 hover:underline">phishing</Link>{" "}
                        email or a{" "}
                        <Link href="/glossary/what-is-social-engineering" className="text-sky-400 hover:underline">social-engineering</Link>{" "}
                        call that resets a password can hand an attacker the foothold they
                        need, and no amount of perimeter hardware stops a user from typing
                        their credentials into a fake portal. That is why phishing-resistant
                        MFA and a security-aware culture matter as much as any technical
                        control — the cheapest way in is almost always a human one.
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
                        <li><Link href="/glossary/what-is-phishing" className="text-sky-400 hover:underline">What is phishing?</Link></li>
                        <li><Link href="/glossary/what-is-social-engineering" className="text-sky-400 hover:underline">What is social engineering?</Link></li>
                        <li><Link href="/glossary/what-is-privilege-escalation" className="text-sky-400 hover:underline">What is privilege escalation?</Link></li>
                        <li><Link href="/glossary/what-is-edr" className="text-sky-400 hover:underline">What is EDR?</Link></li>
                        <li><Link href="/glossary/what-is-encryption-at-rest" className="text-sky-400 hover:underline">What is encryption at rest?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Want to close the doors ransomware uses?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We replay the intruder&apos;s path and find the gaps before an
                        affiliate does. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-ransomware" />
                        <Link href="/services/penetration-testing" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Penetration testing
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
