import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { Siren, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "incident-response-plan-template";
const TITLE = "The Incident Response Plan Template";
const PDF_FILENAME = "incident-response-plan-template.pdf";

export const metadata: Metadata = {
    title: "Incident Response Plan Template (Free Starter) | QUANT LAB USA",
    description:
        "A starter incident response plan template: roles and responsibilities, severity levels, the six-step response process, and a communications plan you can adapt today.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "Incident Response Plan Template (Free Starter) | QUANT LAB USA",
        description:
            "A starter incident response plan: roles, severity levels, a six-step response process, and a communications plan you can adapt today.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Incident Response Plan Template (Free Starter) | QUANT LAB USA",
        description:
            "Roles, severities, a six-step process, and a communications plan for your first incident response plan.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "A starter incident response plan template covering roles and responsibilities, severity levels, a six-step response process, and a communications plan.",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Who needs an incident response plan?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Any company that stores customer data or runs a production system. You do not need to be large; you need to know who does what when something goes wrong. A short, rehearsed plan beats a long one nobody has read, and a SOC 2 audit will require one.",
            },
        },
        {
            "@type": "Question",
            name: "How is an incident response plan different from a disaster recovery plan?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Disaster recovery is about restoring service after an outage or data loss. Incident response is about handling a security event — a breach, intrusion, or data exposure — including containment, investigation, legal obligations, and communication. They overlap but answer different questions.",
            },
        },
        {
            "@type": "Question",
            name: "How often should we test the plan?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Run a tabletop exercise at least once or twice a year and after any major change to your team or architecture. Walk through a realistic scenario, follow the plan as written, and fix every gap the exercise reveals. An untested plan tends to fail at the worst possible moment.",
            },
        },
        {
            "@type": "Question",
            name: "What is the most common mistake in incident response?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Improvising communication. Teams contain the technical issue but mishandle who gets told, when, and what they are told — which is what turns an incident into a reputational and legal problem. Pre-writing the communications plan and naming a single decision-maker prevents most of that damage.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://quantlabusa.dev/resources" },
        { "@type": "ListItem", position: 3, name: "Incident Response Plan Template", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

const roleItems = [
    "Incident Commander — the single decision-maker who runs the response, declares severity, and is accountable for the outcome. Name a primary and a backup.",
    "Technical Lead — directs investigation and containment, coordinates the engineers doing the hands-on work, and reports findings to the commander.",
    "Communications Lead — owns all internal and external messaging, including customers, leadership, and where required, regulators and law enforcement.",
    "Scribe — keeps the timeline: every action, decision, and discovery with timestamps, which is essential for the post-incident review and any legal process.",
    "Legal and Compliance contact — advises on breach-notification obligations, contractual duties, and regulatory deadlines.",
    "Executive sponsor — the leader who can authorize spending, approve external disclosure, and make business-risk calls quickly.",
];

const severityItems = [
    "SEV-1 Critical — active breach, confirmed data exposure, or full outage of a core service. All hands, immediate executive involvement, response begins now.",
    "SEV-2 High — significant degradation, a contained intrusion, or exposure of limited sensitive data. Rapid response during business hours with on-call escalation.",
    "SEV-3 Moderate — a limited-impact issue or a suspected event under investigation. Handled by the on-call engineer, escalated only if it grows.",
    "SEV-4 Low — minor issue, single-user impact, or a false alarm worth logging. Tracked and resolved through the normal queue.",
    "Define the trigger for each level in advance, and let anyone declare an incident — it is cheaper to downgrade a false alarm than to discover a real one too late.",
];

const processItems = [
    "1. Detect and report. Anyone who notices a potential incident reports it through one known channel. The on-call responder acknowledges and opens an incident record.",
    "2. Triage and declare. Assess scope and impact, assign a severity, and appoint the Incident Commander. Start the timeline immediately.",
    "3. Contain. Stop the bleeding: isolate affected systems, revoke compromised credentials, and block the attack path — while preserving evidence for investigation.",
    "4. Eradicate and recover. Remove the root cause, patch the vulnerability, restore from clean backups, and verify the systems are healthy before returning to service.",
    "5. Communicate. Execute the communications plan on the timeline you committed to: internal updates, customer notice, and any required regulatory or partner notification.",
    "6. Review. Within a week, run a blameless post-incident review. Document the root cause, the timeline, and concrete actions to prevent a recurrence — then assign and track them.",
];

const commsItems = [
    "Internal updates: a single status channel, a regular update cadence, and one person posting so the team is not distracted by status-chasing.",
    "Customer notification: pre-written templates for confirmed-incident and resolved messages, plus the criteria and timeline that trigger sending them.",
    "Regulatory and legal notification: know which regulators or partners must be told, the deadlines that apply, and who signs off before anything goes out.",
    "Executive briefing: a concise format leadership can absorb fast — what happened, current impact, what is being done, and what they need to decide.",
    "Public statement: a holding statement ready in advance, and a clear rule that only the Communications Lead or an authorized executive speaks publicly.",
    "Contact list: an up-to-date roster with phone numbers, kept somewhere reachable even if your primary systems are down.",
];

const sections = [
    { heading: "1. Roles & responsibilities", items: roleItems },
    { heading: "2. Severity levels", items: severityItems },
    { heading: "3. The six-step response process", items: processItems },
    { heading: "4. Communications plan", items: commsItems },
];

export default function IncidentResponsePlanTemplatePage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="container mx-auto px-6 max-w-6xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/resources" className="hover:text-sky-400 transition-colors">Resources</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Incident Response Plan Template</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <Siren className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                Starter template · roles, severities, steps, comms
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Know exactly who does what when something goes wrong.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A starter incident response plan you can adapt this afternoon: clear roles, a
                                severity scale, a six-step response process, and a communications plan. The
                                worst time to figure out how to handle a breach is during one — this gives you
                                the decisions already made.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>4 sections, ready to adapt</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>Draft in an afternoon</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For CTOs &amp; security leads</span></div>
                            </div>
                        </AnimatedSection>
                    </div>
                    <div className="lg:col-span-2">
                        <AnimatedSection>
                            <ResourceLeadForm
                                slug={SLUG}
                                title={TITLE}
                                pdfFilename={PDF_FILENAME}
                                drip="D1"
                                successHeadline="The Incident Response Plan Template is yours."
                                relatedServiceHref="/services/penetration-testing"
                                relatedServiceLabel="penetration testing services"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Why you need a plan before you need it
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                The middle of a security incident is the worst possible time to decide who is in
                                charge, what counts as serious, and who is allowed to tell customers. Panic
                                makes those decisions badly. A written incident response plan moves the hard
                                choices to a calm moment so that when an alert fires at 2 a.m., the team
                                executes a rehearsed process instead of improvising under pressure. The plan
                                itself is rarely the clever part — its value is that the decisions are already
                                made and the roles are already assigned.
                            </p>
                            <p>
                                This is a starter plan: complete enough to use today, simple enough that your
                                team will actually read it. It is also the kind of artifact a{" "}
                                <Link href="/blog/soc2-pentest-prep-guide-2026" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SOC 2 audit
                                </Link>{" "}
                                will ask you to produce. Adapt the roles to your org, set your own severity
                                triggers, and rehearse it. If you are not sure what a{" "}
                                <Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    penetration test
                                </Link>{" "}
                                does to reduce the odds you ever invoke this plan, that primer is a good next
                                read.
                            </p>
                        </div>
                    </AnimatedSection>

                    {sections.map((section) => (
                        <AnimatedSection key={section.heading} className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                {section.heading}
                            </h2>
                            <ul className="space-y-3">
                                {section.items.map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>
                    ))}

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How to put it into practice
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Start by naming real people for every role, with named backups, because a role
                                with no owner is a gap. Set the severity triggers in plain language so anyone
                                can declare an incident without second-guessing. Pre-write the communications
                                templates — the confirmed-incident notice, the resolved notice, the executive
                                briefing — while you are calm, because nobody writes well during a crisis. Keep
                                the contact list somewhere reachable even if your primary systems are down.
                            </p>
                            <p>
                                Then test it. Run a tabletop exercise once or twice a year: pick a realistic
                                scenario, follow the plan exactly as written, and fix every gap the exercise
                                exposes. An untested plan reliably fails at the worst moment. To lower the odds
                                of ever invoking it, pair the plan with proactive testing — a{" "}
                                <Link href="/services/penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    penetration test
                                </Link>{" "}
                                and a{" "}
                                <Link href="/services/web-app-pentest" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    web application pentest
                                </Link>{" "}
                                surface the weaknesses an attacker would use before they become your SEV-1.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                A response plan handles the moment after something goes wrong; our security work
                                is about making that moment rare. Every engagement that touches sensitive data
                                pairs proactive testing with a readiness review of exactly this kind of plan. We
                                help teams turn a generic template into one that fits their architecture, their
                                obligations, and their on-call reality, and we feed the findings from a{" "}
                                <Link href="/services/penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    penetration test
                                </Link>{" "}
                                straight back into the plan&apos;s containment steps.
                            </p>
                            <p>
                                If you are building the product as well as securing it, the same discipline runs
                                through our{" "}
                                <Link href="/services/saas-platform-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SaaS platform development
                                </Link>{" "}
                                work, where logging, monitoring, and incident readiness are part of the build,
                                not an afterthought. For preparation specifics around an audit, read the{" "}
                                <Link href="/blog/soc2-pentest-prep-guide-2026" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SOC 2 pentest prep guide
                                </Link>
                                , or{" "}
                                <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    get in touch
                                </Link>{" "}
                                to talk through your plan.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Frequently asked questions
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "Who needs an incident response plan?",
                                    a: "Any company that stores customer data or runs a production system. You do not need to be large; you need to know who does what when something goes wrong. A short, rehearsed plan beats a long one nobody has read, and a SOC 2 audit will require one.",
                                },
                                {
                                    q: "How is an incident response plan different from a disaster recovery plan?",
                                    a: "Disaster recovery is about restoring service after an outage or data loss. Incident response is about handling a security event — a breach, intrusion, or data exposure — including containment, investigation, legal obligations, and communication. They overlap but answer different questions.",
                                },
                                {
                                    q: "How often should we test the plan?",
                                    a: "Run a tabletop exercise at least once or twice a year and after any major change to your team or architecture. Walk through a realistic scenario, follow the plan as written, and fix every gap the exercise reveals. An untested plan tends to fail at the worst possible moment.",
                                },
                                {
                                    q: "What is the most common mistake in incident response?",
                                    a: "Improvising communication. Teams contain the technical issue but mishandle who gets told, when, and what they are told — which is what turns an incident into a reputational and legal problem. Pre-writing the communications plan and naming a single decision-maker prevents most of that damage.",
                                },
                            ].map((item) => (
                                <details key={item.q} className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 open:bg-[#0d1526]">
                                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-white">
                                        <span>{item.q}</span>
                                        <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-open:rotate-90" />
                                    </summary>
                                    <p className="text-gray-400 mt-3 leading-relaxed text-sm">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Related resources &amp; reading
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/resources/web-app-pentest-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Web App Pentest Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Find the weaknesses before they become a SEV-1.</p>
                            </Link>
                            <Link href="/resources/vendor-security-questionnaire-template" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Vendor Security Questionnaire Template</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Ask vendors about their incident-response and breach-notification posture.</p>
                            </Link>
                            <Link href="/blog/soc2-pentest-prep-guide-2026" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">SOC 2 Pentest Prep Guide</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Why an incident response plan is part of audit readiness.</p>
                            </Link>
                            <Link href="/services/penetration-testing" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Penetration Testing</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Reduce the odds you ever have to invoke this plan.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Want fewer incidents to respond to?
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                A response plan is the safety net. Proactive testing is the first line. We can
                                run a penetration test, help you adapt this plan to your environment, and
                                rehearse it with your team. See{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how engagements are priced
                                </Link>{" "}
                                or book a call.
                            </p>
                            <ConsultationCTA label="Book a 20-min call" source={`${SLUG}-resource`} service="Penetration Testing" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
