import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Phishing? Plain-English Definition + Types | QUANT LAB USA",
    description:
        "Phishing tricks people into handing over credentials or money by impersonating someone they trust. Plain-English definition, the types, and how to defend — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-phishing" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Phishing",
    description:
        "Phishing is a social-engineering attack that tricks a person into revealing credentials, transferring money, or installing malware by impersonating a trusted person or organization, usually over email.",
    url: "https://quantlabusa.dev/glossary/what-is-phishing",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is Phishing?", item: "https://quantlabusa.dev/glossary/what-is-phishing" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is phishing?", acceptedAnswer: { "@type": "Answer", text: "Phishing is a social-engineering attack that tricks someone into revealing credentials, sending money, or installing malware by impersonating a person or organization they trust — most often through a deceptive email." } },
        { "@type": "Question", name: "What is the difference between phishing and spear phishing?", acceptedAnswer: { "@type": "Answer", text: "Phishing usually means a broad, generic message blasted to many people. Spear phishing is targeted: the attacker researches a specific person and crafts a tailored message, which makes it far more convincing and dangerous." } },
        { "@type": "Question", name: "What is whaling?", acceptedAnswer: { "@type": "Answer", text: "Whaling is spear phishing aimed at high-value targets like executives or finance staff, often to authorize fraudulent wire transfers. Related terms include smishing (phishing by SMS) and vishing (phishing by voice call)." } },
        { "@type": "Question", name: "Does MFA stop phishing?", acceptedAnswer: { "@type": "Answer", text: "It helps but is not a complete fix. Attackers use real-time proxy kits and MFA-fatigue tactics to defeat weaker second factors. Phishing-resistant MFA based on FIDO2, such as passkeys and hardware keys, is the strongest defense." } },
        { "@type": "Question", name: "How do companies defend against phishing?", acceptedAnswer: { "@type": "Answer", text: "With layers: email filtering and authentication (SPF, DKIM, DMARC), phishing-resistant MFA, user awareness training, and simulated phishing exercises that measure how staff actually respond rather than assuming they will spot the fake." } },
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
                        <li className="text-gray-300">What is Phishing?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Phishing?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Phishing is a social-engineering attack that tricks a person into handing over passwords, transferring money, or installing malware by pretending to be someone or something they trust — most often through a deceptive email designed to look completely legitimate.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What does it mean?</h2>
                    <p>
                        Most security controls defend the technology. Phishing sidesteps all of them
                        by attacking the human — and humans are far easier to exploit than a
                        well-patched server. A phishing message impersonates a trusted source: your
                        bank, your IT department, a vendor, a colleague, a familiar login page. It
                        manufactures a reason to act quickly — your account will be suspended, an
                        invoice is overdue, the CEO needs this wire sent before a meeting — and it
                        steers you toward a single damaging action: clicking a malicious link,
                        entering credentials into a fake page, opening a poisoned attachment, or
                        approving a payment.
                    </p>
                    <p>
                        It works because it weaponizes ordinary human instincts — trust in
                        authority, fear of consequences, the urge to be helpful, and the pressure of
                        a deadline. No amount of encryption helps if an employee voluntarily types
                        their password into an attacker&apos;s lookalike site. That is why phishing
                        remains, year after year, the single most common entry point for real-world
                        breaches.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the term came from</h2>
                    <p>
                        The word dates to the mid-1990s, when attackers on America Online tricked
                        users into surrendering account passwords. It is a play on &quot;fishing&quot; — you
                        dangle bait and wait for someone to bite — with the &quot;ph&quot; spelling borrowed
                        from &quot;phreaking,&quot; the older subculture of phone-system hacking. What began as
                        crude password theft has since professionalized into a major criminal
                        industry, complete with off-the-shelf phishing kits, services that host
                        convincing fake login pages, and operations that net billions of dollars a
                        year.
                    </p>
                    <p>
                        Along the way the vocabulary branched. <strong>Spear phishing</strong> is a
                        targeted attack tailored to a specific person using real details about them.{" "}
                        <strong>Whaling</strong> targets executives and finance staff, often to
                        authorize fraudulent wire transfers. <strong>Smishing</strong> arrives by
                        text message and <strong>vishing</strong> by voice call. The common thread is
                        unchanged: deceive a person into doing the attacker&apos;s work for them.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works</h2>
                    <p>
                        A typical credential-phishing attack runs in stages. The attacker registers a
                        lookalike domain and clones a real login page. They send an email that
                        spoofs a trusted sender and creates urgency. The victim clicks, lands on the
                        fake page, and enters their username and password — which flow straight to
                        the attacker. From there the attacker logs into the real account and pursues
                        their goal, whether that is stealing data, sending more phishing from a now
                        trusted internal address, or moving laterally deeper into the organization.
                    </p>
                    <p>
                        Crucially, phishing is usually the <em>beginning</em> of an intrusion, not
                        the end. In the{" "}
                        <Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link> framework,
                        phishing is an &quot;Initial Access&quot; technique — the front door — after which the
                        attacker pivots to credential theft, privilege escalation, and lateral
                        movement. Modern attackers also defeat weaker{" "}
                        <Link href="/glossary/what-is-multi-factor-authentication" className="text-sky-400 hover:underline">multi-factor authentication</Link> using
                        real-time proxy kits that relay the victim&apos;s second factor on the fly, which
                        is why phishing-resistant factors built on{" "}
                        <Link href="/glossary/what-is-fido2" className="text-sky-400 hover:underline">FIDO2</Link> matter
                        so much.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        Phishing matters for every organization with employees and email — which is
                        all of them. Because it targets people rather than systems, it cannot be
                        fully solved by buying a product; it requires layered defenses. Technical
                        controls help: email authentication standards (SPF, DKIM, DMARC) make
                        spoofing harder, filtering catches known-bad messages, and phishing-resistant
                        MFA limits the damage when a credential is stolen anyway. But the human layer
                        is decisive, which is why mature programs run ongoing awareness training and,
                        critically, <em>simulated</em> phishing campaigns that measure how staff
                        actually respond instead of assuming they will spot the fake. This expectation
                        shows up directly in{" "}
                        <Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">SOC 2</Link> and
                        other frameworks, and it pairs naturally with a{" "}
                        <Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">zero trust</Link> posture
                        that assumes any single credential can be compromised.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Telling people &quot;do not click suspicious links&quot; changes almost nothing;
                        showing a company exactly who clicked, and what an attacker could have done
                        next, changes a great deal. As part of a{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration test</Link> or
                        a{" "}
                        <Link href="/glossary/what-is-a-red-team" className="text-sky-400 hover:underline">red team</Link> engagement,
                        we run controlled, authorized phishing simulations that mirror how real
                        attackers operate — then, crucially, we model what happens after the click:
                        whether a captured credential gets us into your real systems, whether your
                        MFA holds, and how far an attacker could move from that initial foothold. We
                        map the whole chain to{" "}
                        <Link href="/services/mitre-attack-assessment" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link>, so
                        you see phishing not as an isolated &quot;gotcha&quot; but as the first link in an
                        attack path you can actually break. For the broader buyer&apos;s view of how this
                        fits into a security program, read our{" "}
                        <Link href="/blog/what-is-penetration-testing" className="text-sky-400 hover:underline">founder&apos;s pentest guide</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        pinned={["what-is-penetration-testing", "best-penetration-testing-companies-georgia-2026", "soc2-pentest-prep-guide-2026"]}
                        topics={["pentest", "compliance"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-multi-factor-authentication" className="text-sky-400 hover:underline">What is MFA?</Link></li>
                        <li><Link href="/glossary/what-is-a-red-team" className="text-sky-400 hover:underline">What is a red team?</Link></li>
                        <li><Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">Zero trust architecture</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Want to know who clicks — and what happens next?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We run authorized phishing simulations and model the full attack path that
                        follows a captured credential. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-phishing" />
                        <Link href="/services/penetration-testing" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Penetration testing services
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
