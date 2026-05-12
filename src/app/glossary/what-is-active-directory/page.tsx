import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "What is Active Directory? Definition & Examples | QUANT LAB",
    description:
        "Active Directory is Microsoft's identity directory and the backbone of most enterprise networks. How it works, why attackers target it, and how QUANT LAB tests it.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-active-directory" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Active Directory",
    description:
        "Active Directory (AD) is Microsoft's identity and authentication directory service. It runs on Windows Server, manages users and computers in a corporate network, and is the central nervous system of most enterprise IT.",
    url: "https://quantlabusa.dev/glossary/what-is-active-directory",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Active Directory", item: "https://quantlabusa.dev/glossary/what-is-active-directory" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is Active Directory?", acceptedAnswer: { "@type": "Answer", text: "Active Directory (AD) is Microsoft's directory service for Windows networks. It stores accounts, computers, groups, and policies, and answers the question of whether a given user should be allowed to do a given thing." } },
        { "@type": "Question", name: "Is Active Directory the same as Entra ID?", acceptedAnswer: { "@type": "Answer", text: "No. AD is the on-premises directory. Entra ID (formerly Azure AD) is Microsoft's cloud identity service. Many enterprises run both and sync them with Entra Connect." } },
        { "@type": "Question", name: "Why do attackers love AD?", acceptedAnswer: { "@type": "Answer", text: "Because compromising AD usually means compromising everything. A domain admin can read any file, run code on any computer, and impersonate any user. The whole intrusion lifecycle in a Windows network typically aims at AD." } },
        { "@type": "Question", name: "What is a domain controller?", acceptedAnswer: { "@type": "Answer", text: "A domain controller (DC) is a Windows Server hosting the AD database and handling authentication requests. There are usually several per domain for redundancy." } },
        { "@type": "Question", name: "What is a Pass-the-Hash attack?", acceptedAnswer: { "@type": "Answer", text: "Pass-the-Hash lets an attacker authenticate as a user using their NTLM hash without ever knowing the cleartext password. It is one of the most common techniques in AD intrusion." } },
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
                        <li className="text-gray-300">Active Directory</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Active Directory?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Active Directory (AD) is Microsoft's directory service for Windows networks — the central database that stores every user, computer, group, and policy in a corporate environment, and the authority every domain-joined machine checks when deciding whether a given person can do a given thing.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A bit of history</h2>
                    <p>
                        Active Directory shipped with Windows 2000 Server and replaced the
                        older Windows NT domain model. The model is conceptually simple:
                        you have a domain (acme.local), one or more domain controllers
                        that hold the AD database, and computers join the domain to pick
                        up centralized authentication and policy. Twenty-five years later
                        AD is still the identity layer underneath the overwhelming majority
                        of corporate Windows environments, even ones that have moved most
                        workloads to the cloud.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why pentesters care about AD</h2>
                    <p>
                        In a Windows-shop intrusion, the attacker's goal is almost always
                        to compromise AD. A domain admin account can read any file on any
                        domain-joined machine, run code remotely, dump credentials,
                        impersonate any user. That is why every internal network pentest
                        worth paying for spends significant time on AD-specific attacks —
                        Kerberoasting, AS-REP roasting, unconstrained delegation abuse,
                        DCSync, golden tickets, BloodHound path enumeration.
                    </p>
                    <p>
                        The defense story is hard because AD was designed for usability
                        and compatibility, not adversary resistance. Decades of backward
                        compatibility have left footholds attackers still exploit
                        productively. That is why mature programs treat AD hardening as
                        a continuous project and run regular targeted tests against it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Core AD concepts in plain English</h2>
                    <p>
                        Forests, domains, and trees: a forest is the top-level container
                        of one or more domains that share a schema and a global catalog.
                        Group Policy (GPO) pushes configuration to every machine that
                        joins the domain — what software is installed, what password
                        policy applies, what firewall rules are enforced. Service
                        Principal Names (SPNs) tie service accounts to specific service
                        instances and are heavily targeted by Kerberoasting. Object
                        attributes — userAccountControl flags, ACLs, group memberships —
                        carry the privileges that pentesters chain to escalate.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">AD vs Entra ID vs Okta</h2>
                    <p>
                        Active Directory is the on-prem directory running on Windows
                        Server. Entra ID (formerly Azure Active Directory) is Microsoft's
                        cloud identity service, providing SSO and conditional access for
                        SaaS and cloud workloads. The two are different products with
                        different threat models, even though many organizations sync
                        accounts between them with Entra Connect. Okta is a competing
                        cloud identity provider — same job as Entra ID with a different
                        product approach.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Our{" "}
                        <Link href="/services/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory pentest</Link>{" "}
                        engagements are scoped specifically for the AD attack surface —
                        we assume a foothold on an unprivileged domain-joined workstation
                        and try to escalate to domain admin while documenting every step.
                        Findings map to{" "}
                        <Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link>{" "}
                        techniques and feed directly into hardening plans. We often run
                        these alongside a{" "}
                        <Link href="/services/network-pentest" className="text-sky-400 hover:underline">network pentest</Link>,
                        since the two share an attack path.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">BloodHound — why every attacker loves it</h2>
                    <p>
                        BloodHound is an open-source tool that ingests AD data and
                        graphs the relationships between users, groups, computers,
                        and rights. Once mapped, it can answer one question better
                        than anything else: "given this foothold, what is the
                        shortest path to domain admin?" The query usually returns a
                        chain of three or four steps the attacker can walk. Defense
                        teams now use the same tool to find and break those paths
                        before adversaries do. Any environment that has not been
                        BloodHound-analyzed has a paths-to-domain-admin problem
                        nobody has measured.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                        <li><Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&CK</Link></li>
                        <li><Link href="/glossary/what-is-a-red-team" className="text-sky-400 hover:underline">What is a red team?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">Zero trust architecture</Link></li>
                        <li><Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">What is SOC 2?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Active Directory pentest?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        Most internal networks have AD weaknesses we can find in a week.
                        Book a 30-minute call to scope an engagement.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-ad" />
                        <Link href="/services/active-directory-pentest" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Active Directory pentest
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
