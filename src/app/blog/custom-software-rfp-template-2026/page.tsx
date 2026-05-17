import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { ArrowRight, Check, FileText } from "lucide-react";

const SLUG = "custom-software-rfp-template-2026";
const TITLE = "Custom Software RFP Template: What to Ask in 2026";
const DESCRIPTION =
    "Free 2026 RFP template for custom software builds. Sections, questions, scoring rubric, and the red flags that filter bad vendors before the demo.";
const PUBLISHED_ISO = "2026-05-12";

export const metadata: Metadata = articleMetadata({
    title: TITLE,
    description: DESCRIPTION,
    slug: `/blog/${SLUG}`,
    image: "/og-services.png",
    imageAlt: "Custom software RFP template 2026 what to ask",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: PUBLISHED_ISO,
    authors: ["Bill Beltz"],
    keywords: [
        "software RFP template",
        "custom software RFP",
        "RFP for software development",
        "RFP questions software",
        "vendor selection",
    ],
});

const faqItems = [
    {
        q: "What is an RFP for custom software?",
        a: "An RFP (Request for Proposal) is a structured document a buyer sends to multiple potential vendors to compare proposals on a like-for-like basis. For custom software, the RFP describes the problem, scope, constraints, evaluation criteria, and required vendor responses so you can compare apples to apples instead of sales-deck-flavored fruit salad.",
    },
    {
        q: "Do I need an RFP for a $50K project?",
        a: "Probably not a formal one. A two-page Request for Estimate (RFE) is enough for projects under $75K. Use an RFP when budget exceeds $100K, regulatory constraints are involved, or when your procurement org requires it. The RFP overhead — your time, the vendor time, the evaluation time — only earns its keep at meaningful spend.",
    },
    {
        q: "How long should an RFP be?",
        a: "8 to 15 pages for typical mid-market custom software builds. Anything longer signals over-bureaucratized procurement and filters out the best small firms. Anything shorter usually fails to articulate scope, making proposals unhelpful. Cover problem, scope, constraints, evaluation, response format, and timeline.",
    },
    {
        q: "What sections should an RFP include?",
        a: "Eleven: 1) Company background and project context. 2) Problem statement and desired outcomes. 3) Functional scope. 4) Non-functional requirements (security, scale, compliance). 5) Constraints (technology, timeline, budget envelope). 6) Vendor information requested. 7) Proposal structure. 8) Evaluation criteria and weights. 9) Required response artifacts (case studies, references, sample code). 10) Timeline and key dates. 11) Submission and contact instructions.",
    },
    {
        q: "Should I share my budget in the RFP?",
        a: "Yes — at least a range. 'Budget envelope $150K-$250K' lets vendors size proposals appropriately. Hiding budget produces unusable bids that range from $40K (junior shops misreading scope) to $500K (enterprise firms padding). You waste weeks reading proposals you cannot compare. Budget transparency is the founder's superpower.",
    },
    {
        q: "How many vendors should I invite?",
        a: "3 to 5. Two is not a competition. More than 5 dilutes the conversation and signals you do not know your buying criteria. Pre-qualify on case studies and referrals before sending the RFP. The goal is a thoughtful comparison, not a vendor parade.",
    },
    {
        q: "What evaluation criteria should I weight?",
        a: "Five categories that cover 90% of decisions: technical fit (25%), team and references (25%), commercial terms (20%), delivery approach (15%), security and compliance posture (15%). Adjust weights based on your context — regulated industries push security up, fixed-scope projects push commercial up.",
    },
    {
        q: "Should I require sample code?",
        a: "If the project is technical and the vendor is small, yes. Request a code sample from a similar engagement (with permission) or a public repo from the proposed team. For non-technical projects or larger vendors, code samples are less useful than reference calls. Always ask for the resume of the lead engineer who will work on your project — not the firm's average resume.",
    },
    {
        q: "How do I score proposals fairly?",
        a: "Build a scoring rubric before reading any proposal. Each criterion gets a weight and a scoring scale (1 to 5 or 1 to 10). Two evaluators score independently, then reconcile. The rubric forces you to articulate what 'good' means in each category — which usually reveals where your team disagrees about priorities.",
    },
    {
        q: "How long should vendors have to respond?",
        a: "10 to 21 business days. Less than 10 filters out small firms that need calendar space to write a thoughtful proposal. More than 21 invites scope drift on your side. Build in a question window (days 1 to 7) and an answer broadcast (day 8) so all vendors get the same clarifications.",
    },
    {
        q: "What are red flags in an RFP response?",
        a: "Eight common ones: 1) Proposals that ignore your stated constraints. 2) Sample code that does not match described methodology. 3) Reference calls that read scripted. 4) Boilerplate security sections without specifics. 5) Pricing well below market with no transparency. 6) Pricing well above market with no clear premium reason. 7) Vague team assignments ('senior engineer TBD'). 8) Promises of features outside your scope ('we'll throw that in').",
    },
    {
        q: "Can I share my RFP template?",
        a: "Yes — RFPs are not trade secrets. Our 2026 template is freely shareable. We hand it out to clients during build-vs-buy conversations and to anyone evaluating us against competitors. If a vendor refuses to follow your RFP format, that is its own signal.",
    },
];

const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Custom Software RFP Template 2026", url: `/blog/${SLUG}` },
];

const articleLd = articleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED_ISO,
    image: "https://quantlabusa.dev/og-services.png",
    slug: SLUG,
    section: "Procurement",
    keywords: ["RFP", "software RFP", "vendor selection", "procurement"],
});
const breadcrumbLd = breadcrumbSchema(breadcrumbItems, `/blog/${SLUG}`);
const faqLd = faqSchema(faqItems);

export default function CustomSoftwareRfpTemplatePage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Custom software RFP template 2026</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <FileText className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">BOFU Procurement Template · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Custom Software RFP Template: What to Ask in 2026
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        The 11-section RFP template we hand to clients during build-vs-buy conversations. Sections, sample questions, scoring rubric, and the red flags that filter bad vendors before the demo.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">Bill Beltz</Link>, founder of QUANT LAB USA INC · Published May 12, 2026
                    </p>
                    <ConsultationCTA label="Talk to a Vendor" service="Custom Business Software" source="blog-rfp-template" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer: what does a useful RFP contain?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>An effective custom software RFP is 8 to 15 pages, names a budget range, identifies 3 to 5 prequalified vendors, and asks specific questions across eleven sections: company context, problem statement, functional scope, non-functional requirements, constraints, vendor team and references, technical approach, security/compliance posture, commercial terms, timeline, and submission instructions. Score with a weighted rubric built before any proposal is read. Allow 10 to 21 business days for response.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            We sit on both sides of RFPs all year. We write them for clients evaluating us against competitors and we respond to them as a vendor. The difference between a productive RFP and a procurement-theater RFP is precision. This guide is the template we ship.
                        </p>
                        <p>
                            For broader context, see <Link href="/blog/how-to-choose-a-software-development-company-checklist" className="text-sky-400 hover:underline">How to Choose a Software Development Company</Link> and our <Link href="/blog/dedicated-development-team-vs-agency" className="text-sky-400 hover:underline">Dedicated Team vs Agency</Link> guide.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The 11 RFP sections</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Company background and project context</li>
                            <li>Problem statement and desired outcomes</li>
                            <li>Functional scope</li>
                            <li>Non-functional requirements (security, scale, compliance)</li>
                            <li>Constraints (technology, timeline, budget envelope)</li>
                            <li>Vendor information requested</li>
                            <li>Proposal structure</li>
                            <li>Evaluation criteria and weights</li>
                            <li>Required response artifacts</li>
                            <li>Timeline and key dates</li>
                            <li>Submission and contact instructions</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Section 1: Company background and project context</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Two paragraphs. Who you are, what you do, who your customers are. Then one paragraph on the strategic motivation for this project. "We are migrating off Salesforce because the per-seat economics no longer work at our growth rate" is precise. "We want to modernize our tech stack" is not.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Section 2: Problem statement and desired outcomes</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Describe the problem, not the solution. "Our sales team uses six tools and spends 3 hours per rep per day on data entry" is a problem. "We want a custom CRM" is a solution that the vendor should be free to reach (or argue against).
                        </p>
                        <p>
                            Then list desired outcomes with measurable targets. "Reduce data entry to under 30 minutes per rep per day" or "Process 200 leads per hour without manual intervention." Outcomes anchor the rest of the evaluation.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Section 3: Functional scope</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            User journeys and feature areas, not click-by-click specs. "Sales rep can: log a call, schedule follow-up, sync with calendar, view lead history, escalate to manager" is enough. Avoid pre-specifying screen designs in the RFP — that constrains the vendor's design contribution.
                        </p>
                        <p>
                            Distinguish must-have, should-have, and nice-to-have. MoSCoW or a simple priority column works.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Section 4: Non-functional requirements</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The boring section that filters the most vendors. Include:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Compliance requirements (SOC 2, HIPAA, PCI, ISO, GDPR — name them)</li>
                            <li>Performance targets (P95 latency, peak concurrent users)</li>
                            <li>Availability SLO and downtime tolerance</li>
                            <li>Security posture (MFA, SSO, audit logs, encryption)</li>
                            <li>Accessibility (WCAG 2.2 AA is the modern baseline)</li>
                            <li>Browser and device support</li>
                            <li>Internationalization (locales, currencies, RTL)</li>
                            <li>Integration with existing systems (named)</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Section 5: Constraints</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            What is non-negotiable. Common constraints:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Budget envelope (e.g., $150K to $250K)</li>
                            <li>Hard deadline (e.g., live by Q3 2026 for a regulatory cutover)</li>
                            <li>Technology preferences (existing AWS account, Postgres, Vercel)</li>
                            <li>Geographic team requirements (US-only, EU-only, on-site visits)</li>
                            <li>IP ownership terms</li>
                            <li>Source code escrow or repository ownership</li>
                            <li>Data residency</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Section 6: Vendor information requested</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <p>
                            The questions you actually want answered:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Company size, headcount, years in business, registered entity.</li>
                            <li>Three case studies relevant to our domain. Quantified outcomes.</li>
                            <li>Three reference customers we can call.</li>
                            <li>Named team for our project with resumes (lead engineer, project manager, designer).</li>
                            <li>Methodology and ceremony cadence.</li>
                            <li>Tooling (project management, communication, repo, CI/CD).</li>
                            <li>Security posture: SOC 2, ISO, pentest cadence, breach history.</li>
                            <li>Commercial terms: fixed fee vs T&M, payment milestones, change order process.</li>
                            <li>Warranty and post-launch support.</li>
                            <li>Subcontractor policy and disclosure.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Section 7: Proposal structure</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Force structure. Specify section headings and length caps so proposals are comparable. A 12-page cap with named sections is reasonable. Reject proposals that exceed the cap without acknowledgment.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Section 8: Evaluation criteria and weights</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Criterion</th>
                                    <th className="px-4 py-3 border-b border-white/10">Default weight</th>
                                    <th className="px-4 py-3 border-b border-white/10">What you score</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Technical fit</td><td className="px-4 py-3">25%</td><td className="px-4 py-3">Architecture, methodology, code quality signals</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Team and references</td><td className="px-4 py-3">25%</td><td className="px-4 py-3">Lead engineer caliber, reference call quality</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Commercial terms</td><td className="px-4 py-3">20%</td><td className="px-4 py-3">Total cost, payment terms, change orders, warranty</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Delivery approach</td><td className="px-4 py-3">15%</td><td className="px-4 py-3">Cadence, ceremony, transparency, communication</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Security and compliance</td><td className="px-4 py-3">15%</td><td className="px-4 py-3">SOC 2/HIPAA posture, pentest cadence, IR plan</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Section 9: Required response artifacts</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The proof points you want in the document:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Sample architectural diagrams for a similar build</li>
                            <li>Sample sprint or milestone plan</li>
                            <li>Sample status report or weekly artifact</li>
                            <li>Resumes of the proposed lead engineer and project manager</li>
                            <li>Sample SOW or contract language</li>
                            <li>SOC 2 report or equivalent (under NDA)</li>
                            <li>Three customer references with permission to call</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Section 10: Timeline and key dates</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Day 0:</strong> RFP issued</li>
                            <li><strong>Day 5:</strong> Question deadline</li>
                            <li><strong>Day 7:</strong> Answers broadcast to all vendors</li>
                            <li><strong>Day 14:</strong> Proposals due</li>
                            <li><strong>Day 14 to 20:</strong> Internal scoring</li>
                            <li><strong>Day 21 to 28:</strong> Shortlist interviews and reference calls</li>
                            <li><strong>Day 30:</strong> Vendor selection</li>
                            <li><strong>Day 35:</strong> Contract signed</li>
                            <li><strong>Day 45:</strong> Kickoff</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Section 11: Submission and contact instructions</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            One named contact for clarification questions. One email or portal for submission. PDF format with a defined file naming convention. Confidentiality terms.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">8 red flags in proposals</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Proposal ignores stated constraints.</li>
                            <li>Sample code does not match described methodology.</li>
                            <li>Reference calls feel scripted.</li>
                            <li>Boilerplate security sections without specifics.</li>
                            <li>Pricing well below market with no transparency.</li>
                            <li>Pricing well above market with no clear premium reason.</li>
                            <li>Vague team assignments ('senior engineer TBD').</li>
                            <li>Promises of features outside your scope ('we'll throw that in').</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">After the RFP: redlines and contracts</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The RFP gets you to a chosen vendor. The contract is where most projects actually go wrong. See <Link href="/blog/software-development-contract-redlines" className="text-sky-400 hover:underline">Software Development Contract Redlines</Link> for the clauses to fight on.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">FAQ</h2>
                    <div className="space-y-6">
                        {faqItems.map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Related reading and next steps</h2>
                    <ul className="space-y-3">
                        {[
                            { href: "/services/custom-business-software", label: "Custom Business Software service" },
                            { href: "/services/saas-platform-development", label: "SaaS Platform Development" },
                            { href: "/services/web-applications", label: "Web Application Development" },
                            { href: "/blog/how-to-choose-a-software-development-company-checklist", label: "How to Choose a Software Development Company" },
                            { href: "/blog/software-development-contract-redlines", label: "Software Development Contract Redlines" },
                            { href: "/blog/build-vs-buy-software-2026", label: "Build vs Buy Software 2026" },
                            { href: "/blog/dedicated-development-team-vs-agency", label: "Dedicated Team vs Agency" },
                            { href: "/blog/hire-fractional-cto-vs-software-firm", label: "Fractional CTO vs Software Firm" },
                            { href: "/blog/best-custom-software-development-companies-atlanta-2026", label: "Best Custom Software Companies Atlanta 2026" },
                            { href: "/calculators/build-vs-buy", label: "Build vs Buy calculator" },
                            { href: "/work", label: "Case studies" },
                            { href: "/contact", label: "Talk to an engineer" },
                        ].map((l) => (
                            <li key={l.href} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                <Link href={l.href} className="text-sky-400 hover:underline">{l.label}</Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need help shaping your RFP?</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute review. Send us your draft RFP and we will mark it up — what to add, what to cut, what answers to expect from good vendors.
                        </p>
                        <ConsultationCTA label="Get an RFP Review" service="Custom Business Software" source="blog-rfp-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug="custom-software-rfp-template-2026"
                        topics={["build-vs-buy"]}
                        heading="More buyer-side reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link href="/blog" className="hover:text-sky-400 inline-flex items-center gap-1">
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated May 12, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
