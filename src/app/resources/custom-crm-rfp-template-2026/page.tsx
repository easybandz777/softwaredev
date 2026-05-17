import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { ClipboardList, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "custom-crm-rfp-template-2026";
const TITLE = "Custom CRM RFP Template (2026 Edition)";
const PDF_FILENAME = "custom-crm-rfp-template-2026.pdf";

export const metadata: Metadata = {
    title: "Custom CRM RFP Template 2026 (Free PDF) | QUANT LAB USA",
    description:
        "A ready-to-fill 15-section RFP template + weighted scoring rubric for buying a custom CRM build — copy, fill, and send to three to five vendors. Free.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "Custom CRM RFP Template 2026 (Free PDF) | QUANT LAB USA",
        description:
            "15-section RFP template with weighted scoring rubric for buying a custom CRM build. Copy, fill, send to vendors.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom CRM RFP Template 2026 (Free PDF) | QUANT LAB USA",
        description:
            "15-section RFP template plus weighted scoring rubric for custom CRM vendor selection.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "Downloadable 15-section RFP template with vendor scoring rubric for buying a custom CRM build. Includes scope sections, evaluation criteria, weighted scoring sheet, and contract red-flag checklist.",
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
            name: "Is this a real RFP I can send to vendors?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The template is built to be filled in, branded with your company, and sent to three to five custom-software shops for response. Every section has prompt language, example answers from prior RFPs, and the rationale for why the section is included so you can adapt rather than copy-paste verbatim.",
            },
        },
        {
            "@type": "Question",
            name: "What kind of vendors is this designed for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Mid-market custom-software shops building line-of-business CRM systems for 50-to-500-employee companies. The template is not designed for Salesforce implementation partners, NetSuite-shop implementations, or off-the-shelf CRM customization vendors. If you have not yet decided whether to build or buy, work through the build-vs-buy playbook first.",
            },
        },
        {
            "@type": "Question",
            name: "How long should the vendor response window be?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Three weeks for a 15-section RFP is the right window. Less than two weeks and you will get warmed-over copy-paste responses from prior RFPs that did not address your specifics. More than four weeks and your most-qualified vendors will deprioritize you for active engagements. Section 14 of the template walks through the evaluation calendar that fits this window.",
            },
        },
        {
            "@type": "Question",
            name: "Does the scoring rubric come pre-weighted?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — with the explicit caveat that you should re-weight it before sending. The default weights are anchored at how we have seen mid-market CRM RFPs decided in practice (technical fit ~30%, team quality ~25%, cost transparency ~20%, integration depth ~15%, post-launch support ~10%). Section 13 walks through how to adjust for your specific situation.",
            },
        },
        {
            "@type": "Question",
            name: "What happens after I download?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You get the PDF immediately and one short follow-up email. If you would like a working session on which sections need the most adaptation for your situation, or want our team to respond to your RFP, book a 20-minute scoping call. We are happy to be one of your three-to-five vendors.",
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
        { "@type": "ListItem", position: 3, name: "Custom CRM RFP Template 2026", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

export default function CrmRfpPage() {
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
                        <li className="text-gray-300">Custom CRM RFP Template 2026</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <ClipboardList className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                15-section RFP · PDF + scoring sheet
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Run a custom CRM RFP that surfaces the right vendor in three weeks, not three months.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A 15-section ready-to-fill RFP template plus a weighted scoring rubric for buying
                                a custom CRM build. Copy it, brand it, send it to three to five shops, score the
                                responses on a defensible rubric, and pick the right vendor with internal
                                consensus instead of internal politics.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>15 sections, scoring rubric</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>3-week eval cycle</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For RevOps &amp; COOs</span></div>
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
                                successHeadline="The Custom CRM RFP Template is yours."
                                relatedServiceHref="/services/custom-crm-development"
                                relatedServiceLabel="custom CRM development"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Most CRM RFPs are a mess — for a reason
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                The custom CRM RFP is the single most under-written procurement artifact at most
                                mid-market companies. Either it never gets written at all — the buyer talks to one
                                or two vendors and picks the friendlier of the two — or it gets written by a
                                committee with no shared vocabulary, sent to ten shops, and produces a stack of
                                responses that cannot be meaningfully compared because every shop interpreted the
                                requirements differently. Both failure modes are expensive. The first costs you the
                                vendor-selection optionality. The second costs you six weeks of evaluation time and
                                surfaces a winner you did not actually pick.
                            </p>
                            <p>
                                This template is built to fix both failures. It is short enough that a vendor can
                                respond inside three weeks without staffing a proposal-response team — which means
                                you will hear back from the shops with senior engineers, not just the ones with
                                a sales-ops factory. It is long enough that the responses will be actually
                                comparable, with the same scope, the same evaluation criteria, and the same
                                weighted scoring sheet on the buyer side. We use a version of this template
                                ourselves when we respond to{" "}
                                <Link href="/services/custom-crm-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom CRM development
                                </Link>{" "}
                                RFPs, and we are happy to be one of the shops you send it to.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Inside the 15-section template
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Section 1 — Company background and decision context. Why you are issuing this RFP now, what the consequences of doing nothing look like, and the timeline you are working against.",
                                "Section 2 — Current-state stack. The SaaS products you are running today, the integration points that matter, and the data volumes you need the new system to handle.",
                                "Section 3 — Functional requirements. The lead, deal, contact, and pipeline behaviors the new CRM has to support, with explicit boundaries between must-have, should-have, and nice-to-have.",
                                "Section 4 — Integration requirements. The systems the new CRM must integrate with on day one (typically Stripe, your data warehouse, your marketing platform, your support tool, and your finance stack) plus the integrations expected within twelve months of launch.",
                                "Section 5 — User experience and workflow. Sample user journeys for the three roles that spend the most time in the system (rep, manager, ops) with screen-by-screen expectations.",
                                "Section 6 — Data model. The objects, fields, and relationships that have to be modeled, including the custom objects unique to your business.",
                                "Section 7 — Reporting and analytics. The dashboards your business currently runs and the additional views the new CRM has to support.",
                                "Section 8 — Security, compliance, and audit. SOC 2 status, encryption at rest, IP allowlisting, role-based access control, audit logging, and the regulatory regime (HIPAA, PCI, GDPR, GLBA) your data lives under.",
                                "Section 9 — Deployment, hosting, and SLAs. Cloud preference, single-tenant vs multi-tenant, SLAs for uptime and incident response, and the disaster recovery posture you expect.",
                                "Section 10 — Team and engagement model. Who from the vendor is on the project, what their role mix looks like (engineering vs PM vs design), and what your team commits in return.",
                                "Section 11 — Pricing and commercial terms. Fixed-fee vs time-and-materials vs hybrid, milestone structure, payment terms, source code ownership, and the standard contract red-flag checklist.",
                                "Section 12 — Post-launch support. What the first 90 days post-launch look like, what the next 12 months look like, and how the engagement converts to retainer or maintenance.",
                                "Section 13 — Weighted scoring rubric. A default-weighted rubric (technical fit ~30%, team quality ~25%, cost ~20%, integration depth ~15%, post-launch ~10%) with guidance on how to re-weight for your specific situation.",
                                "Section 14 — Evaluation timeline. The three-week response cycle, the two-week internal scoring window, and the one-week final selection cycle. Includes interview question templates for the final two vendors.",
                                "Section 15 — Required vendor exhibits. Case studies, reference contacts, sample contract, security questionnaire response, and team CVs.",
                            ].map((item) => (
                                <li key={item} className="flex gap-3 text-gray-300">
                                    <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Who this is for
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                The template is built for four roles. First, VPs of RevOps at 50-to-500-employee
                                companies who have decided to build rather than stay on Salesforce or HubSpot and
                                need to run a defensible vendor-selection process. Second, COOs at companies in
                                the same range whose current CRM is a stack of duct tape and they are tired of
                                paying a SaaS consultant to maintain it. Third, CTOs and engineering leaders who
                                want a structured way to evaluate external vendors for the CRM build rather than
                                pulling internal engineers off product work. Fourth, founders at smaller companies
                                where the CRM build is foundational infrastructure for a specific operational model
                                that off-the-shelf does not support.
                            </p>
                            <p>
                                If you have not yet decided whether to build or buy, start with{" "}
                                <Link href="/resources/build-vs-buy-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    the build-vs-buy playbook
                                </Link>{" "}
                                first. The RFP template is the next step after that decision lands on &quot;build.&quot;
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            What you will learn
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                You will leave with a ready-to-send RFP, a weighted scoring rubric calibrated to
                                your situation, an evaluation calendar that respects your timeline, and a list of
                                the contract red flags to watch for in vendor responses. You will also have the
                                vocabulary to push back on common vendor sales patterns — the one where the proposal
                                is priced in scope-light hours that double in the final contract, the one where
                                the senior engineer in the pitch never works on your build, and the one where the
                                source code ownership clause is buried on page 24 of the master agreement.
                            </p>
                            <p>
                                On the internal side, you will have a defensible procurement artifact for your CFO
                                and your board. Even if the build comes in over budget — which it sometimes does
                                — the original RFP makes it clear that you ran a real vendor-selection process,
                                evaluated multiple options, and picked on documented criteria. That is the
                                conversation you want to be having with finance and leadership rather than
                                defending the original pick.
                            </p>
                            <p>
                                Pair this with our{" "}
                                <Link href="/resources/crm-rollout-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    6-Week Custom CRM Rollout Playbook
                                </Link>{" "}
                                for what happens once you have selected the vendor and the build has started.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                We respond to versions of this RFP weekly. The template is what we wish every buyer
                                sent us — short enough that we can staff a real response without a proposal-response
                                team, structured enough that we know what the buyer values and can give them
                                comparable answers, and explicit about commercial terms so the final contract
                                conversation is a refinement instead of a renegotiation. Most of our{" "}
                                <Link href="/services/custom-crm-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom CRM engagements
                                </Link>{" "}
                                start with a version of this artifact and end up shipping inside our{" "}
                                <Link href="/services/custom-business-software" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom business software
                                </Link>{" "}
                                practice.
                            </p>
                            <p>
                                For the math behind the build decision, see the{" "}
                                <Link href="/calculators/crm-roi" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom CRM ROI calculator
                                </Link>{" "}
                                and the{" "}
                                <Link href="/calculators/build-vs-buy" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    build-vs-buy calculator
                                </Link>
                                . For pricing on the scoping discovery sprint we offer before the build,{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    see our pricing page
                                </Link>{" "}
                                or just{" "}
                                <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    book a call
                                </Link>
                                . You can also browse recent builds on{" "}
                                <Link href="/work" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    our work page
                                </Link>
                                .
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
                                    q: "Is this a real RFP I can send to vendors?",
                                    a: "Yes. The template is built to be filled in, branded with your company, and sent to three to five custom-software shops for response. Every section has prompt language and example answers.",
                                },
                                {
                                    q: "What kind of vendors is this designed for?",
                                    a: "Mid-market custom-software shops building line-of-business CRM systems for 50-to-500-employee companies. Not for Salesforce implementation partners or off-the-shelf CRM customization vendors.",
                                },
                                {
                                    q: "How long should the vendor response window be?",
                                    a: "Three weeks. Less and you get warmed-over copy-paste responses. More and your most-qualified vendors will deprioritize you. Section 14 walks through the calendar that fits this window.",
                                },
                                {
                                    q: "Does the scoring rubric come pre-weighted?",
                                    a: "Yes, with the caveat that you should re-weight before sending. Default weights are technical fit ~30%, team quality ~25%, cost ~20%, integration depth ~15%, post-launch ~10%.",
                                },
                                {
                                    q: "What happens after I download?",
                                    a: "You get the PDF immediately and one short follow-up email. If you want a working session, or want our team to respond to your RFP, book a 20-minute scoping call.",
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
                            <Link href="/resources/build-vs-buy-playbook" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Build vs Buy Playbook</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The decision that comes before the RFP.</p>
                            </Link>
                            <Link href="/resources/crm-rollout-playbook" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">6-Week Custom CRM Rollout Playbook</p>
                                <p className="text-xs text-gray-400 leading-relaxed">What happens after you have selected your vendor.</p>
                            </Link>
                            <Link href="/services/custom-crm-development" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Custom CRM Development</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Our service offering for custom CRM builds.</p>
                            </Link>
                            <Link href="/calculators/crm-roi" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Custom CRM ROI Calculator</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The math behind the build decision the RFP is implementing.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Want us to respond to your RFP?
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                We are happy to be one of the three to five vendors you send the filled-in template
                                to. Send it our way and we will respond inside three weeks with the artifact set
                                described in Section 15. See{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    our pricing page
                                </Link>{" "}
                                for the discovery sprint that typically precedes a multi-month build, or book a
                                call directly.
                            </p>
                            <ConsultationCTA label="Book a 20-min call" source={`${SLUG}-resource`} service="Custom CRM Development" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
