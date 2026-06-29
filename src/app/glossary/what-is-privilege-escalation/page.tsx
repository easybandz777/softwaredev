import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Privilege Escalation? Plain-English Guide | QUANT LAB USA",
    description:
        "Privilege escalation is how an attacker turns limited access into broad control. Plain-English definition, the two types, and how to limit it. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-privilege-escalation" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Privilege Escalation",
    description:
        "Privilege escalation is the act of exploiting a flaw, misconfiguration, or design weakness to gain higher access rights than originally granted, turning a limited foothold into broader control of a system.",
    url: "https://quantlabusa.dev/glossary/what-is-privilege-escalation",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Privilege Escalation", item: "https://quantlabusa.dev/glossary/what-is-privilege-escalation" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is privilege escalation in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Privilege escalation is when an attacker turns a limited level of access into a higher one, gaining rights they were never supposed to have." } },
        { "@type": "Question", name: "What is the difference between vertical and horizontal privilege escalation?", acceptedAnswer: { "@type": "Answer", text: "Vertical escalation gains higher-level rights, such as a standard user becoming an administrator. Horizontal escalation moves sideways to another user's account at the same level to access their data." } },
        { "@type": "Question", name: "How does privilege escalation happen in web apps?", acceptedAnswer: { "@type": "Answer", text: "Commonly through broken access control — missing authorization checks, insecure direct object references that let a user request another user's records, or hidden admin functions reachable by changing a parameter." } },
        { "@type": "Question", name: "Why is privilege escalation so important to attackers?", acceptedAnswer: { "@type": "Answer", text: "An initial foothold is usually low-privilege and limited. Escalation is the step that converts it into the access needed to steal data, move laterally, or take over an entire environment." } },
        { "@type": "Question", name: "How do you prevent privilege escalation?", acceptedAnswer: { "@type": "Answer", text: "Enforce least privilege, check authorization on every request server-side, patch promptly, separate duties, and monitor for unusual privilege use. Limiting standing privilege limits how far any single compromise can go." } },
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
                        <li className="text-gray-300">Privilege Escalation</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Privilege Escalation?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Privilege escalation is the step where an attacker takes a small amount of access and turns it into a lot. Almost no breach starts with full control — it starts with a single low-privilege foothold, like one phished employee account. Escalation is the move that converts that toehold into administrator rights, domain control, or another user&apos;s data. It is the difference between a contained incident and a catastrophe.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Two directions</h2>
                    <p>
                        Escalation moves up or sideways. Vertical privilege escalation gains
                        a higher tier of rights — a standard user becoming an administrator,
                        a low-level service account gaining root, an ordinary application
                        user reaching admin functions. Horizontal privilege escalation stays
                        at the same level but jumps to a different account: accessing another
                        customer&apos;s records, another tenant&apos;s data, another
                        employee&apos;s mailbox. Both violate the same principle — a subject
                        ends up able to do something it was never authorized to do — and in
                        practice attackers chain the two, hopping sideways to find an account
                        with a clearer path up.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">In web applications</h2>
                    <p>
                        At the application layer, escalation almost always traces back to
                        broken access control — the category that now tops the{" "}
                        <Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link>.
                        The classic shape is an insecure direct object reference: the app
                        trusts an ID in the request, so changing /invoice/123 to
                        /invoice/124 returns someone else&apos;s invoice. Close cousins
                        include admin endpoints that are hidden in the UI but not actually
                        protected on the server, role checks done only in the browser, and
                        mass-assignment bugs that let a user set their own role field. The
                        common thread: authorization that is assumed rather than enforced on
                        every request.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">In systems and networks</h2>
                    <p>
                        On hosts and networks the toolkit differs but the goal is identical.
                        Attackers exploit unpatched local vulnerabilities, abuse
                        misconfigured permissions on files and services, harvest credentials
                        cached in memory or config files, and ride over-privileged service
                        accounts to expand reach. In Windows environments this is the heart
                        of{" "}
                        <Link href="/glossary/what-is-active-directory" className="text-sky-400 hover:underline">Active Directory</Link>{" "}
                        attacks, where a foothold on one workstation is patiently leveraged
                        into domain-administrator control. Each hop relies on some standing
                        privilege that was broader than it needed to be — which is exactly
                        the surface defenders can shrink.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How to limit it</h2>
                    <p>
                        The master principle is least privilege: every user, service, and
                        process gets the minimum rights it needs and nothing more, so a
                        compromise yields little. In applications, enforce authorization on
                        the server for every request and never trust an identifier or a role
                        sent by the client. Separate duties so no single account can both
                        approve and execute sensitive actions. Patch promptly to close the
                        local flaws used for vertical escalation. And monitor for the
                        signature of escalation in progress — an account suddenly using
                        rights it never has before. You cannot always stop the first
                        foothold, but you can make escalation hard.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Privilege escalation is the core of what our offensive work measures.
                        A{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration test</Link>{" "}
                        assumes a foothold and asks the question that matters most: how far
                        can it go? In{" "}
                        <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">web app testing</Link>{" "}
                        we hammer access control — swapping IDs, calling hidden admin routes,
                        and tampering with role fields. In{" "}
                        <Link href="/services/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory assessments</Link>{" "}
                        we map the path from a single workstation to domain dominance. On the
                        build side, the systems we ship default to least privilege and
                        server-side authorization on every request, so a stolen low-level
                        account stays a low-level problem.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The link to the rest of the kill chain</h2>
                    <p>
                        Escalation rarely stands alone. It is the bridge between the initial
                        access an attacker gets — through{" "}
                        <Link href="/glossary/what-is-social-engineering" className="text-sky-400 hover:underline">social engineering</Link>,
                        a stolen credential, or an exploited bug — and the objective, whether
                        that is data theft or detonating{" "}
                        <Link href="/glossary/what-is-ransomware" className="text-sky-400 hover:underline">ransomware</Link>{" "}
                        across a network. That is why limiting standing privilege pays off so
                        broadly: it does not just stop one technique, it severs the middle of
                        nearly every intrusion. Cut the escalation step and many attacks
                        stall out with nothing to show for the foothold.
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
                        <li><Link href="/glossary/what-is-active-directory" className="text-sky-400 hover:underline">What is Active Directory?</Link></li>
                        <li><Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">What is the OWASP Top 10?</Link></li>
                        <li><Link href="/glossary/what-is-ransomware" className="text-sky-400 hover:underline">What is ransomware?</Link></li>
                        <li><Link href="/glossary/what-is-an-iam" className="text-sky-400 hover:underline">What is IAM?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">How far would a foothold get in your environment?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We test the escalation path from a single account to full control and
                        build for least privilege by default. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-privesc" />
                        <Link href="/services/active-directory-pentest" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Active Directory pentest
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
