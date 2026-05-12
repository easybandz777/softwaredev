import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ArrowRight, Check, ListChecks } from "lucide-react";

export const metadata: Metadata = {
    title: "How to Choose a Software Development Company: 27-Point Checklist",
    description:
        "The 27-point 2026 checklist for picking a software development company — references, contracts, communication, security, pricing, and three deal-killer answers.",
    alternates: { canonical: "https://quantlabusa.dev/blog/how-to-choose-a-software-development-company-checklist" },
    openGraph: {
        title: "How to Choose a Software Development Company: 27-Point Checklist",
        description:
            "The 27 points that separate a real software shop from a sales pitch. Includes deal-killer answers and contract red flags.",
        url: "https://quantlabusa.dev/blog/how-to-choose-a-software-development-company-checklist",
        type: "article",
        publishedTime: "2026-05-12",
        authors: ["William Beltz"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Choose a Software Development Company: 27-Point Checklist",
    description: "The 27-point 2026 checklist for picking a software development company.",
    image: "https://quantlabusa.dev/og-image.png",
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
    author: { "@type": "Person", name: "William Beltz", url: "https://quantlabusa.dev/about" },
    publisher: {
        "@type": "Organization",
        "@id": "https://quantlabusa.dev/#organization",
        name: "QUANT LAB USA INC",
        url: "https://quantlabusa.dev",
        logo: { "@type": "ImageObject", url: "https://quantlabusa.dev/logo-transparent.png" },
    },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://quantlabusa.dev/blog/how-to-choose-a-software-development-company-checklist",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://quantlabusa.dev/blog" },
        {
            "@type": "ListItem",
            position: 3,
            name: "How to Choose a Software Development Company: 27-Point Checklist",
            item: "https://quantlabusa.dev/blog/how-to-choose-a-software-development-company-checklist",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the most important question to ask a software development company?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Who specifically will write the code on my project, what are their titles, and how many years of senior production experience do they have? If the answer is vague or the people on the sales call are not the people writing the code, you have your answer.",
            },
        },
        {
            "@type": "Question",
            name: "Should I sign a fixed-fee or time-and-materials contract?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Fixed-fee per phase is the right answer for most builds. You need clear deliverables, you need cost certainty, and a real shop should be willing to underwrite the scope they quoted. Time-and-materials is appropriate for genuinely unbounded discovery work or staff augmentation, not for fixed-scope product builds.",
            },
        },
        {
            "@type": "Question",
            name: "How do I verify a software company is real before signing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Check the secretary of state entity record, look for live production URLs you can click on, ask for one client reference you can call directly, and verify the GitHub or portfolio belongs to people who still work there. Most fraud screens out at one of these four checks.",
            },
        },
        {
            "@type": "Question",
            name: "What contract clauses should I require?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Source code ownership at delivery, milestone-based payment, kill-fee cap if you exit early, IP transfer in writing, mutual NDA, and a defined warranty period for bug fixes. If any of these are negotiated away, walk.",
            },
        },
    ],
};

export default function HowToChooseSoftwareDevCompanyPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">How to choose a software development company</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <ListChecks className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">BOFU Decision Guide · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        How to Choose a Software Development Company: A 27-Point Checklist
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        The 27 points I have used to evaluate every software vendor I have hired, hired-then-fired, or competed against. Covers references, contracts, communication cadence, security posture, pricing models, and the three deal-killer answers that should end the call.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">William Beltz</Link>, founder of QUANT LAB USA INC · Published May 12, 2026
                    </p>
                    <ConsultationCTA label="Get on a Scoping Call" service="Custom Software" source="blog-27-point" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            I have been on both sides of this transaction. As a founder hiring a shop. As a shop being hired. As an investor watching portfolio companies sign contracts they did not understand. The pattern: most software project failures are vendor-selection failures, not engineering failures. The wrong shop will fail with any scope. The right shop will adapt to any scope.
                        </p>
                        <p>
                            This is the checklist I would send to a friend before they signed anything. 27 points, grouped into six categories. If a vendor cannot answer 22 of them clearly inside two calls, they are not the right vendor.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Category 1: References, portfolio, and live demos</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol start={1} className="list-decimal pl-6 space-y-2">
                            <li><strong>Can I see three live URLs of production work shipped in the last 12 months?</strong> If they say no, the engagement is not what you think it is. Live URLs only — not screenshots, not "we cannot show you because of NDAs" if they have three NDAs in a row.</li>
                            <li><strong>Can I call one client reference directly?</strong> Names, phone numbers, real people. Not just "we have a Slack channel with our clients."</li>
                            <li><strong>Do the GitHub profiles of the senior engineers actually show recent activity?</strong> A blank or year-old GitHub for a senior dev is a yellow flag.</li>
                            <li><strong>Can they walk me through one finished project — what changed mid-build, what they learned, what they would do differently?</strong> Vague answers here mean they have never actually shipped.</li>
                            <li><strong>What is the one project they took on and regret?</strong> Honest answer required. Shops that cannot name one are lying.</li>
                        </ol>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        See our portfolio at <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link>, <Link href="/work/northcrest-fence" className="text-sky-400 hover:underline">Northcrest Fence</Link>, <Link href="/work/hobbspeak" className="text-sky-400 hover:underline">Hobbspeak</Link>, and <Link href="/work/multi-strategy-trading-system" className="text-sky-400 hover:underline">a multi-strategy trading system</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Category 2: Contract terms (IP, milestones, exit)</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol start={6} className="list-decimal pl-6 space-y-2">
                            <li><strong>Who owns the source code on delivery?</strong> Answer must be: you do. Period. No "licensed back to client" tricks.</li>
                            <li><strong>What does the kill-fee look like if I exit at week 4?</strong> A real shop will quote a percentage of the milestone or a capped early-exit clause. "All money is non-refundable" is a hard no.</li>
                            <li><strong>What IP transfer paperwork is signed and when?</strong> Should be at every milestone payment, not just at final delivery.</li>
                            <li><strong>What does the warranty period cover?</strong> Typically 30 to 90 days post-launch for bugs in scope-delivered functionality. Should be in writing.</li>
                            <li><strong>Mutual NDA or one-way?</strong> Mutual is the only acceptable answer.</li>
                            <li><strong>Who is liable if there is a security breach during testing or deployment?</strong> Should be capped and named in the contract.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Category 3: Communication cadence and tooling fit</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol start={12} className="list-decimal pl-6 space-y-2">
                            <li><strong>How often will I get a written progress report?</strong> Weekly minimum. Show me a sample from a current client (with their permission and identifying details stripped).</li>
                            <li><strong>Who is my single point of contact, and what happens if they go on PTO?</strong> Must have a named secondary.</li>
                            <li><strong>What is your async response SLA?</strong> Real shops can answer this. "We will get back to you" is not an SLA.</li>
                            <li><strong>What collaboration tools do you default to?</strong> If they want to use 4 tools you do not use, you are paying for their preference.</li>
                            <li><strong>How do you handle a scope dispute mid-build?</strong> Process must be defined. "We will figure it out" is the wrong answer.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Category 4: Security and access posture of the vendor</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol start={17} className="list-decimal pl-6 space-y-2">
                            <li><strong>How do you store production credentials we share with you?</strong> 1Password Business, AWS Secrets Manager, or equivalent. If the answer is a shared spreadsheet or a chat tool, walk.</li>
                            <li><strong>Are all engineers on the project employees with background checks, or subcontractors?</strong> Mixed is fine, but you should know.</li>
                            <li><strong>What is the MFA posture across all tooling that touches our code?</strong> Hardware key minimum for production access.</li>
                            <li><strong>Is the development infrastructure in your control or ours?</strong> Should be either — but the answer should be deliberate, not accidental.</li>
                            <li><strong>Do you run pentests on what you build?</strong> Most do not. See <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">our combined dev + pentest model</Link> for the version where the answer is yes.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Category 5: Pricing model match</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol start={22} className="list-decimal pl-6 space-y-2">
                            <li><strong>Fixed-fee per phase, hourly with a cap, or T&amp;M?</strong> Fixed-fee per phase is the right default for product builds. T&amp;M is appropriate for discovery, staff aug, and ongoing maintenance retainers.</li>
                            <li><strong>What triggers a change order?</strong> Defined trigger plus a price for re-quoting. "Anything not in the spec" is too broad.</li>
                            <li><strong>What is your payment schedule?</strong> Should be milestone-tied, not calendar-tied.</li>
                            <li><strong>Is there a discount for an upfront commitment?</strong> Sometimes yes, sometimes no — but the answer should not be "we never discount." Real shops have flexibility.</li>
                        </ol>
                        <p className="text-sm text-gray-400 mt-4">
                            For pricing model context, see the <Link href="/calculators/stripe-cost" className="text-sky-400 hover:underline">Stripe cost calculator</Link> for billing-side cost modeling, and the published ranges on our <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom software</Link> and <Link href="/services/custom-crm-development" className="text-sky-400 hover:underline">custom CRM</Link> service pages.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Category 6: Post-launch maintenance</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol start={26} className="list-decimal pl-6 space-y-2">
                            <li><strong>What is the post-launch support model and pricing?</strong> Should be either a flat retainer with defined hours or T&amp;M with a notice period. "We will figure it out at the time" is wrong.</li>
                            <li><strong>What does the handoff look like if I bring it in-house?</strong> Should include a documented runbook, deployment access transfer, and a handoff call. If any of those are missing, the engagement is going to end badly.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Three deal-killer answers</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Some answers should end the conversation immediately. These three come up the most.
                        </p>
                        <h3 className="text-xl font-semibold text-white pt-2">Deal-killer 1: "We will own the code and license it back to you."</h3>
                        <p>
                            This is a vendor lock-in trap. Walk.
                        </p>
                        <h3 className="text-xl font-semibold text-white pt-2">Deal-killer 2: "We do not give references, NDAs prevent it."</h3>
                        <p>
                            Either they have no references they would willingly share or every single client has demanded an unusual gag. The first is a problem. The second is statistically unlikely.
                        </p>
                        <h3 className="text-xl font-semibold text-white pt-2">Deal-killer 3: "Our senior engineers do not get on calls — that is what the PM is for."</h3>
                        <p>
                            You are buying engineering, not project management. If the engineers are inaccessible during sales, they will be inaccessible during the build.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">How QUANT LAB USA scores on the same checklist</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            I run my own shop through this checklist annually. Here is where we land in 2026.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Live URLs: published on <Link href="/work" className="text-sky-400 hover:underline">the case studies page</Link></li>
                            <li>Client references: provided on request after the first call</li>
                            <li>Senior engineer involvement: I (Bill) write or review every line of production code</li>
                            <li>Pricing: fixed-fee per phase, published ranges on the <Link href="/services" className="text-sky-400 hover:underline">services overview</Link></li>
                            <li>Contracts: source code yours from day one, milestone-tied IP transfer, capped early-exit</li>
                            <li>Communication: weekly Friday written progress report, daily Slack/email response inside business hours</li>
                            <li>Security: we run pentests on what we build, 1Password Business, hardware-key MFA</li>
                            <li>Post-launch: 30-day support included, optional retainer thereafter, documented handoff for in-housing</li>
                        </ul>
                        <p>
                            If those line up with what you are looking for, the next step is a scoping call. If they do not, the checklist is yours regardless — use it on whichever shop you do pick.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">FAQ</h2>
                    <div className="space-y-6">
                        {[
                            { q: "What is the most important question to ask a software development company?", a: "Who specifically will write the code on my project, what are their titles, and how many years of senior production experience do they have? If the answer is vague or the people on the sales call are not the people writing the code, you have your answer." },
                            { q: "Should I sign a fixed-fee or time-and-materials contract?", a: "Fixed-fee per phase is the right answer for most builds. You need clear deliverables, you need cost certainty, and a real shop should be willing to underwrite the scope they quoted. Time-and-materials is appropriate for genuinely unbounded discovery work or staff augmentation, not for fixed-scope product builds." },
                            { q: "How do I verify a software company is real before signing?", a: "Check the secretary of state entity record, look for live production URLs you can click on, ask for one client reference you can call directly, and verify the GitHub or portfolio belongs to people who still work there. Most fraud screens out at one of these four checks." },
                            { q: "What contract clauses should I require?", a: "Source code ownership at delivery, milestone-based payment, kill-fee cap if you exit early, IP transfer in writing, mutual NDA, and a defined warranty period for bug fixes. If any of these are negotiated away, walk." },
                        ].map((item) => (
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
                            { href: "/services/custom-business-software", label: "Custom Software Development service" },
                            { href: "/services/custom-crm-development", label: "Custom CRM Development service" },
                            { href: "/services/web-applications", label: "Web Applications service" },
                            { href: "/services/stripe-integration", label: "Stripe Integration service" },
                            { href: "/services/penetration-testing", label: "Penetration Testing service" },
                            { href: "/work/j5-sales-os", label: "Case study — J5 Sales OS" },
                            { href: "/work/contractor-estimating-proposal-engine", label: "Case study — Contractor estimating engine" },
                            { href: "/software-development-atlanta-ga", label: "Atlanta software development" },
                            { href: "/calculators/stripe-cost", label: "Stripe cost calculator" },
                            { href: "/contact", label: "Book a scoping call" },
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Send us the checklist.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute scoping call. Founder-led from the first message. Bring the 27 questions — we will answer all of them and tell you honestly if we are the right fit.
                        </p>
                        <ConsultationCTA label="Book the Call" service="Custom Software" source="blog-27-point-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call William directly at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
                        </div>
                    </div>
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
