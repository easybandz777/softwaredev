import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Social Engineering? Plain-English Guide | QUANT LAB USA",
    description:
        "Social engineering manipulates people into giving up access or information. Plain-English definition, the common tactics, and how to defend against it. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-social-engineering" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Social Engineering",
    description:
        "Social engineering is the manipulation of people into divulging confidential information or performing actions that compromise security, exploiting human psychology rather than technical vulnerabilities.",
    url: "https://quantlabusa.dev/glossary/what-is-social-engineering",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Social Engineering", item: "https://quantlabusa.dev/glossary/what-is-social-engineering" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is social engineering in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Social engineering is the art of manipulating people into handing over information or access, attacking human trust instead of technical defenses." } },
        { "@type": "Question", name: "How is social engineering different from phishing?", acceptedAnswer: { "@type": "Answer", text: "Phishing is one technique within social engineering — typically a deceptive email or message. Social engineering is the broader category that also includes phone calls, in-person pretexting, and physical tailgating." } },
        { "@type": "Question", name: "What psychological levers do attackers use?", acceptedAnswer: { "@type": "Answer", text: "Authority, urgency, fear, reciprocity, social proof, and familiarity. An attacker who seems to be the CEO, IT support, or a trusted vendor and adds time pressure short-circuits careful judgment." } },
        { "@type": "Question", name: "What is pretexting?", acceptedAnswer: { "@type": "Answer", text: "Inventing a believable scenario and false identity — such as posing as a new auditor or a help-desk technician — to justify a request for information or access the target would normally refuse." } },
        { "@type": "Question", name: "How do you defend against social engineering?", acceptedAnswer: { "@type": "Answer", text: "Verification procedures for sensitive requests, phishing-resistant MFA, least privilege, regular awareness training, and a no-blame culture where staff feel safe reporting and questioning suspicious requests." } },
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
                        <li className="text-gray-300">Social Engineering</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Social Engineering?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Social engineering is the manipulation of people — rather than machines — into giving up information or access that compromises security. Instead of finding a flaw in the code, the attacker finds a flaw in the human: trust, helpfulness, fear of getting in trouble, or simple habit. It is consistently one of the most effective ways into an organization precisely because no firewall guards the front door of human judgment.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why it works</h2>
                    <p>
                        Humans are wired to cooperate, defer to authority, and resolve
                        urgency quickly — instincts that serve us well socially and betray us
                        under attack. Social engineers pull a small set of reliable levers:
                        authority (&ldquo;this is the CFO&rdquo;), urgency (&ldquo;the wire
                        has to go out in ten minutes&rdquo;), fear (&ldquo;your account will
                        be locked&rdquo;), reciprocity, social proof, and familiarity. Stack
                        two or three together and even a careful, well-trained person can act
                        before they think. The technique scales because it targets something
                        every organization has and no patch can remove: people.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The common forms</h2>
                    <p>
                        <Link href="/glossary/what-is-phishing" className="text-sky-400 hover:underline">Phishing</Link>{" "}
                        is the best-known branch — deceptive emails and messages at scale —
                        with spear-phishing (targeted) and whaling (aimed at executives) as
                        sharper variants. Vishing moves the con to the phone; smishing to
                        text messages. Pretexting builds an entire false scenario and
                        identity to justify a request. Baiting dangles something tempting,
                        like a &ldquo;found&rdquo; USB drive or a free download. And physical
                        techniques like tailgating — following an employee through a secure
                        door — show that social engineering is not only digital. The medium
                        changes; the manipulation does not.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The high-impact scams</h2>
                    <p>
                        Two patterns do outsized damage. Business email compromise impersonates
                        an executive or a vendor to redirect a payment or wire transfer, and
                        it drains real money with no malware involved at all. Help-desk
                        impersonation works the other direction: the attacker calls IT
                        support posing as a stressed employee to get a password reset or MFA
                        re-enrollment, handing over the account. Both succeed by exploiting
                        normal, helpful behavior — which is why the fix is process, not just
                        technology. A second channel of verification stops most of them cold.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How to defend against it</h2>
                    <p>
                        Because the target is human, the controls are part technical and part
                        cultural. Establish verification procedures for sensitive actions —
                        confirm payment changes and password resets through a separate,
                        known channel, never the one the request arrived on. Deploy
                        phishing-resistant MFA so a stolen password is not enough. Enforce
                        least privilege so a fooled employee can only do limited damage. Train
                        regularly with realistic examples, and — most important — build a
                        no-blame culture where people feel safe slowing down, asking
                        questions, and reporting a near-miss instead of hiding it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Social engineering is the human counterpart to the technical work in
                        our{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration tests</Link>,
                        and it is often the most realistic path in. The same manipulation
                        underpins{" "}
                        <Link href="/glossary/what-is-ransomware" className="text-sky-400 hover:underline">ransomware</Link>{" "}
                        intrusions and{" "}
                        <Link href="/glossary/what-is-credential-stuffing" className="text-sky-400 hover:underline">account takeover</Link>{" "}
                        campaigns, so we design the systems we{" "}
                        <Link href="/services" className="text-sky-400 hover:underline">build</Link>{" "}
                        to limit the blast radius when a human is fooled: MFA everywhere,
                        least privilege by default, and verification steps on the actions
                        that move money or grant access. Technology cannot make people
                        un-foolable, but good architecture makes a fooled person far less
                        dangerous.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The oldest attack, newly amplified</h2>
                    <p>
                        Social engineering predates computers, but modern tools have made it
                        cheaper and more convincing. Public social-media data fuels precise
                        pretexts, and AI-generated text, voice, and even video lower the
                        effort to impersonate a specific person believably. The defensive
                        takeaway has not changed: trust the process, not the request.
                        Verifying a sensitive ask through an independent channel defeats a
                        deepfake voice as surely as it defeats a forged email — which is why
                        process-based controls age so much better than any single piece of
                        detection technology.
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
                        <li><Link href="/glossary/what-is-ransomware" className="text-sky-400 hover:underline">What is ransomware?</Link></li>
                        <li><Link href="/glossary/what-is-credential-stuffing" className="text-sky-400 hover:underline">What is credential stuffing?</Link></li>
                        <li><Link href="/glossary/what-is-multi-factor-authentication" className="text-sky-400 hover:underline">What is MFA?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Want to shrink the human attack surface?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We test the realistic paths in and build systems that contain a
                        fooled user&apos;s blast radius. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-socialeng" />
                        <Link href="/services/penetration-testing" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Penetration testing
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
