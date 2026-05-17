import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { ArrowRight, Check, Scale } from "lucide-react";

const SLUG = "software-development-contract-redlines";
const TITLE = "Software Development Contract Redlines: What Founders Miss";
const DESCRIPTION =
    "The contract clauses founders actually need to fight on for a custom software build: IP ownership, change orders, liability, source code, indemnity, and exit terms.";
const PUBLISHED_ISO = "2026-05-12";

export const metadata: Metadata = articleMetadata({
    title: TITLE,
    description: DESCRIPTION,
    slug: `/blog/${SLUG}`,
    image: "/og-services.png",
    imageAlt: "Software development contract redlines founders miss",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: PUBLISHED_ISO,
    authors: ["Bill Beltz"],
    keywords: [
        "software development contract",
        "MSA redlines",
        "IP ownership clause",
        "change order software",
        "software contract terms",
    ],
});

const faqItems = [
    {
        q: "Should I have a lawyer review a software development contract?",
        a: "Yes, for any contract above $50K. The right lawyer pays for themselves on the first ambiguous IP clause they catch. Look for tech-focused commercial lawyers; general practitioners often miss the patterns that matter (work-for-hire vs license, change order economics, source code escrow). Expect to pay $1,500 to $5,000 for a clean review on a mid-market MSA + SOW.",
    },
    {
        q: "Who owns the code in a custom software contract?",
        a: "The default in most vendor templates is 'work-for-hire to client upon final payment.' That is reasonable for client-specific business logic but a trap for general tooling, libraries, and design system components. Negotiate a hybrid: client owns custom business logic and bespoke UI; vendor retains ownership of pre-existing IP and generally reusable utilities, licensed to client under a perpetual, irrevocable, royalty-free license.",
    },
    {
        q: "What is a change order and why does it matter?",
        a: "A change order amends the original SOW when scope shifts. The contract should define: how change orders are requested, the timeline for vendor response (typically 5 business days), how pricing is calculated (T&M rates locked in advance), approval thresholds, and what happens if you reject the change order (status quo or scope drop). Without a clean change order process, you get either scope creep eating the budget or scope freeze blocking real progress.",
    },
    {
        q: "What is the difference between fixed fee and time and materials?",
        a: "Fixed fee bills a defined scope at a defined price; you absorb the risk of underestimation and the vendor absorbs the risk of overrun. T&M bills actual hours at agreed rates; you absorb the overrun risk and the vendor absorbs the underestimation risk. Hybrid models (fixed price per milestone with T&M for change orders) are most common for custom builds. Pure T&M without a cap is risky for buyers.",
    },
    {
        q: "What is source code escrow?",
        a: "Source code escrow is an arrangement where a third party holds a copy of the source code and releases it to the buyer under defined trigger conditions (vendor bankruptcy, sustained non-performance, refusal to support). Useful for buyers who depend on a SaaS vendor for ongoing operations. For custom build work where you already get the source code on each deploy, escrow is usually unnecessary.",
    },
    {
        q: "What liability cap should I negotiate?",
        a: "Vendor templates typically cap liability at fees paid in the prior 12 months. Push for the greater of 12 months fees or a fixed floor ($250K to $1M) for material breaches. Carve out from the cap: confidentiality breaches, IP infringement, gross negligence, willful misconduct. Anything related to a data breach should usually be uncapped or higher-capped.",
    },
    {
        q: "Do I need indemnification clauses?",
        a: "Yes — mutual indemnification is standard. The vendor indemnifies you for IP infringement claims arising from their deliverables. You indemnify the vendor for misuse of the deliverables and for content you provide. Tighten the IP indemnification to cover both direct infringement and reasonable defense costs. Add a procurement clause: if a third party claims infringement, the vendor must replace, rework, or refund.",
    },
    {
        q: "What is a non-solicit clause and is it enforceable?",
        a: "A non-solicit prevents you from hiring the vendor's employees (and vice versa). Mutual 12-month non-solicit clauses are standard. Enforceability varies by state — in California, employee non-solicits are largely unenforceable; in Georgia, they are enforceable if narrowly tailored. Most disputes resolve commercially before litigation. Negotiate a buyout clause: $X paid as liquidated damages if you hire their engineer.",
    },
    {
        q: "Should I require a SOC 2 or pentest report from my vendor?",
        a: "If the vendor will touch production data, yes. SOC 2 Type II report under NDA, or an equivalent attestation. If the vendor is small and pre-SOC-2, ask for their most recent pentest report and security policy documents. Build the security review into the procurement process before signing.",
    },
    {
        q: "What is the right payment milestone structure?",
        a: "Avoid 100% up front (you lose all leverage) and avoid 100% on delivery (the vendor takes all the risk). Standard milestones: 10 to 25% on signing, 40 to 60% across delivery milestones, 15 to 25% on final acceptance, with the final tranche tied to a 30 to 60 day warranty period. Tie milestones to outcomes, not calendar dates.",
    },
    {
        q: "How do I write a clean exit clause?",
        a: "Three things must be in writing: 1) Termination for convenience with 30 to 60 day notice and pro-rated fees. 2) Termination for cause with cure rights (typically 30 days). 3) Transition assistance — the vendor commits to deliver source code, documentation, and reasonable handoff effort within a defined window after termination. Without transition assistance, you can end up locked out of your own systems.",
    },
    {
        q: "What should the warranty period look like?",
        a: "30 to 90 days post-acceptance is standard. The vendor fixes material defects free of charge during the warranty period. After warranty, defects fall under a separately-priced support agreement. Define 'material defect' precisely — a function fails to perform per spec vs cosmetic issue. Otherwise, the warranty becomes a debate about what is in scope.",
    },
];

const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Software Development Contract Redlines", url: `/blog/${SLUG}` },
];

const articleLd = articleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED_ISO,
    image: "https://quantlabusa.dev/og-services.png",
    slug: SLUG,
    section: "Procurement & Legal",
    keywords: ["software contract", "MSA", "SOW", "IP ownership", "redlines"],
});
const breadcrumbLd = breadcrumbSchema(breadcrumbItems, `/blog/${SLUG}`);
const faqLd = faqSchema(faqItems);

export default function SoftwareDevContractRedlinesPage() {
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
                        <li className="text-gray-300">Software contract redlines</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Scale className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">BOFU Contract Negotiation Guide · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Software Development Contract Redlines: What Founders Miss
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        The clauses founders should actually redline before signing a custom software contract. IP ownership, change orders, liability caps, source code, indemnity, warranties, exit terms — and the language that turns a fair contract into a trap.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">Bill Beltz</Link>, founder of QUANT LAB USA INC · Published May 12, 2026
                    </p>
                    <ConsultationCTA label="Talk to an Engineer" service="Custom Business Software" source="blog-contract-redlines" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer: which clauses must I redline?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Eight clauses every founder should redline: 1) IP ownership (split custom work vs pre-existing IP). 2) Change order process (defined timeline, locked rates). 3) Payment milestones (no 100% upfront, no 100% on delivery). 4) Liability cap with carve-outs for IP infringement and breaches. 5) Mutual indemnification. 6) Non-solicit with buyout. 7) Warranty period (30 to 90 days, defined defect criteria). 8) Exit and transition assistance. The contract should be 15 to 25 pages MSA + 5 to 10 page SOW — anything substantially shorter or longer is a flag.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Software development contracts are where projects go sideways. The RFP and the proposal create alignment; the contract creates the rails. When something breaks downstream — scope creep, missed milestone, ownership dispute — the contract is what you have. Most founders sign too quickly and discover the bad language only after they need it.
                        </p>
                        <p>
                            We sit on both sides of these contracts. We negotiate as a vendor with mid-market and enterprise clients, and we review draft contracts for founders evaluating us against competitors. This is what we flag. Pair with our <Link href="/blog/custom-software-rfp-template-2026" className="text-sky-400 hover:underline">RFP template</Link> for the front-end of the procurement process.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The MSA + SOW structure</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Most modern software development contracts split into two documents:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Master Services Agreement (MSA):</strong> The legal framework — IP, liability, indemnity, confidentiality, non-solicit, governing law, termination. Signed once.</li>
                            <li><strong>Statement of Work (SOW):</strong> The specific engagement — scope, deliverables, timeline, pricing, milestones, acceptance criteria. Signed per project.</li>
                        </ul>
                        <p>
                            Negotiate the MSA carefully because it controls every future SOW. Reasonable SOWs do not save you from an unreasonable MSA.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Clause 1: IP ownership</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The default vendor template usually says one of:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Work-for-hire to client upon final payment.</strong> All IP created flows to the client. Simple but blunt — vendor cannot reuse anything.</li>
                            <li><strong>License from vendor.</strong> Vendor retains ownership; client gets a perpetual license. Cheap-looking but you do not actually own your software.</li>
                            <li><strong>Hybrid (recommended).</strong> Client owns custom business logic and bespoke UI. Vendor retains pre-existing IP and generally reusable utilities, licensed to client perpetually, irrevocably, royalty-free, and worldwide.</li>
                        </ul>
                        <p>
                            Push for hybrid. Define 'pre-existing IP' precisely in an exhibit — usually open-source components, the vendor's internal libraries, and design system components. If a vendor refuses to disclose pre-existing IP, that is its own red flag.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Clause 2: Change order process</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Every custom build will have changes. The contract should define the process:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>How a change is requested (written, via project management tool, etc.)</li>
                            <li>Vendor response time (5 business days is common)</li>
                            <li>Pricing methodology (T&M rates locked at MSA signing, not at change order time)</li>
                            <li>Approval authority on each side</li>
                            <li>Threshold below which informal acceptance is fine ($5K to $10K)</li>
                            <li>What happens if the change order is rejected</li>
                        </ul>
                        <p>
                            Most contract disputes we have seen trace back to a poorly defined change order process — either scope creep ate the budget or scope freeze killed the project.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Clause 3: Payment milestones</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Bad patterns:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>100% upfront. You lose all leverage. Avoid.</li>
                            <li>100% on delivery. Vendor takes too much risk; only the desperate will sign. Quality suffers.</li>
                            <li>Calendar-based milestones (Day 30 = X%, Day 60 = Y%). Detaches payment from progress.</li>
                        </ul>
                        <p>
                            Good pattern: 10 to 25% on signing, 40 to 60% across delivery milestones tied to outcomes, 15 to 25% on final acceptance, with the final tranche tied to a 30 to 60 day warranty period.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Clause 4: Liability cap and carve-outs</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Vendor templates typically cap total liability at fees paid in the prior 12 months. Push back where it matters:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Carve out IP infringement.</strong> If vendor's deliverable infringes a third-party patent, the cap should not apply.</li>
                            <li><strong>Carve out confidentiality breaches.</strong> Especially for PHI, PCI, or other regulated data.</li>
                            <li><strong>Carve out gross negligence and willful misconduct.</strong> Standard ask, usually granted.</li>
                            <li><strong>Negotiate a higher floor.</strong> "Greater of 12 months fees or $500K" instead of "12 months fees."</li>
                            <li><strong>Mutual cap.</strong> The cap should apply to both sides, not just the vendor.</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Clause 5: Indemnification</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Mutual indemnification is standard:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Vendor indemnifies client for IP infringement claims arising from deliverables.</li>
                            <li>Client indemnifies vendor for misuse of deliverables and content client provided.</li>
                        </ul>
                        <p>
                            Tighten the vendor's IP indemnification: cover both direct infringement claims and reasonable defense costs. Add a procurement clause: if a third party claims infringement, the vendor must (at their option and cost) replace the infringing component, secure the right to continue use, or refund proportionally.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Clause 6: Non-solicit and buyout</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Mutual 12-month non-solicit clauses are standard. They protect both sides from talent poaching. Enforceability varies by state, but most disputes settle commercially.
                        </p>
                        <p>
                            Negotiate a buyout clause: a defined liquidated damages amount ($50K to $250K depending on engagement size) if you hire one of the vendor's engineers during or after the term. This converts a hostile situation into a transaction and clears the air.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Clause 7: Warranty</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A 30 to 90 day post-acceptance warranty is standard. The vendor fixes material defects free of charge during the period. Define 'material defect' precisely:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>A function fails to perform in accordance with the SOW.</li>
                            <li>The system fails to meet a stated performance target.</li>
                            <li>A security vulnerability above a defined CVSS threshold is discovered in the vendor's code.</li>
                        </ul>
                        <p>
                            What is not a material defect: cosmetic issues, browser-specific bugs in unsupported browsers, third-party API changes. Without precise definitions, the warranty becomes a debate.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Clause 8: Exit and transition assistance</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            How the relationship ends is as important as how it starts. Three sub-clauses:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>Termination for convenience:</strong> Either side may terminate with 30 to 60 day notice. Vendor delivers what is complete; client pays pro-rated fees.</li>
                            <li><strong>Termination for cause:</strong> Material breach with cure rights (typically 30 days to remedy after notice).</li>
                            <li><strong>Transition assistance:</strong> Vendor commits to deliver source code, documentation, deployment instructions, and reasonable handoff support within a defined window (60 to 90 days). Bill at agreed rates if transition exceeds defined hours.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Common contract anti-patterns</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Anti-pattern</th>
                                    <th className="px-4 py-3 border-b border-white/10">Why it's bad</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Auto-renew with short notice window</td><td className="px-4 py-3">Locks you in to a vendor that may underperform</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Vendor governing law in a friendly jurisdiction</td><td className="px-4 py-3">Disputes resolve far from you</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Source code delivered "on request"</td><td className="px-4 py-3">Should be delivered continuously to your repo</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Vendor reuse rights without disclosure</td><td className="px-4 py-3">Your competitive logic could ship to competitors</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">"Best efforts" without defined outcomes</td><td className="px-4 py-3">No teeth on quality</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">100% upfront payment</td><td className="px-4 py-3">All risk on you</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Indemnification one-sided in vendor's favor</td><td className="px-4 py-3">Mutual is standard</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">When to walk away</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Some contract postures are not redlinable. If a vendor refuses to budge on any of the following, find another vendor:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Refuses any form of IP ownership transfer.</li>
                            <li>Refuses to share source code during the engagement.</li>
                            <li>Refuses mutual liability caps.</li>
                            <li>Refuses any termination for convenience.</li>
                            <li>Will not name the engineers who will work on the project.</li>
                            <li>Demands 100% upfront for a multi-month engagement.</li>
                        </ul>
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
                            { href: "/blog/custom-software-rfp-template-2026", label: "Custom Software RFP Template 2026" },
                            { href: "/blog/how-to-choose-a-software-development-company-checklist", label: "How to Choose a Software Development Company" },
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a contract gut-check?</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute MSA + SOW review. Send us your draft and we will mark up the clauses we would fight on. Not legal advice — but it is the engineering perspective on what to negotiate.
                        </p>
                        <ConsultationCTA label="Get a Contract Review" service="Custom Business Software" source="blog-contract-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug="software-development-contract-redlines"
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
