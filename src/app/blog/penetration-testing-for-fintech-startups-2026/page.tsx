import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { EditorialFooter } from "@/components/EditorialFooter";
import { Sources } from "@/components/Sources";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, faqSchema } from "@/lib/schemas";
import { getAuthor, authorUrl } from "@/lib/authors";

const SLUG = "penetration-testing-for-fintech-startups-2026";
const PUBLISHED = "2026-06-03";
const TITLE = "Penetration Testing for Fintech Startups: A 2026 Guide";
const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: TITLE,
    description:
        "How fintech founders should scope a 2026 penetration test: the real threat model, what to test, PCI DSS and SOC 2 drivers, MITRE ATT&CK mapping, and honest cost.",
    slug: `blog/${SLUG}`,
    image: "/og-pentest.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [author.name],
    keywords: [
        "penetration testing for fintech",
        "fintech security testing",
        "fintech pentest cost 2026",
        "pci dss pentest fintech",
    ],
});

const faqs = [
    {
        q: "Why do fintech startups need a penetration test?",
        a: "Fintech moves money and stores regulated financial data, which makes it a high-value target and puts it inside the scope of PCI DSS, SOC 2, GLBA, and increasingly state money-transmitter rules. A penetration test is how you find the auth, authorization, and business-logic flaws that let an attacker move funds or read another customer's account before a real adversary does. It is also the artifact your bank partner, card network, and enterprise customers ask for during diligence.",
    },
    {
        q: "What does a fintech penetration test cost in 2026?",
        a: "A focused web and API pentest for an early fintech runs $12,000 to $30,000 in 2026. Add an external network test and you are at $20,000 to $40,000. Once you are processing cards in your own environment and PCI DSS requires internal plus external plus segmentation testing, plan for $40,000 to $90,000 for the full annual program. The biggest cost drivers are the number of user roles, whether the API and partner integrations are in scope, and whether you hold card data versus tokenizing through a processor.",
    },
    {
        q: "Does PCI DSS require a penetration test for fintech?",
        a: "Yes, if cardholder data touches your environment. PCI DSS Requirement 11.4 mandates internal and external penetration tests at least annually and after any significant change, plus segmentation testing every six months for service providers that rely on segmentation to reduce scope. If you tokenize through Stripe or another processor and card data never lands in your systems, your PCI scope shrinks dramatically, but you still need to prove that with a documented scope analysis.",
    },
    {
        q: "What should a fintech pentest actually test?",
        a: "Authentication and session handling, authorization between tenants and account holders, the money-movement flows (transfers, payouts, refunds, ledger writes), webhook and callback verification from payment processors, the full API surface including unlinked endpoints, secrets handling, and any partner or banking-as-a-service integration. Business-logic testing matters more in fintech than almost anywhere else, because the highest-impact bugs are valid requests in an invalid order, not classic injection.",
    },
    {
        q: "How does penetration testing map to MITRE ATT&CK for fintech?",
        a: "A good report tags each finding with the relevant ATT&CK technique so your team and your auditor can see the attack path, not just a list. Common fintech-relevant techniques include Valid Accounts (T1078) for credential-based access, Exploit Public-Facing Application (T1190) for the web and API tier, and Application Layer Protocol abuse around API calls. Mapping findings to ATT&CK turns a vulnerability list into a defensible narrative of how an attacker would reach the ledger.",
    },
    {
        q: "When in our roadmap should we run the first pentest?",
        a: "Before you onboard your first paying customer who moves real money, and again before any bank, card network, or enterprise security review. Most fintech startups run a focused web and API engagement at launch, then move to an annual program once a compliance framework (SOC 2 or PCI DSS) formalizes the cadence. Re-test after every release that touches authentication, payments, or the ledger.",
    },
];

const sources = [
    {
        label: "PCI DSS v4.0.1 Requirement 11.4 — Penetration Testing",
        href: "https://www.pcisecuritystandards.org/document_library/",
        publisher: "PCI Security Standards Council",
    },
    {
        label: "OWASP API Security Top 10 (2023)",
        href: "https://owasp.org/API-Security/editions/2023/en/0x11-t10/",
        publisher: "OWASP",
    },
    {
        label: "MITRE ATT&CK Enterprise Matrix",
        href: "https://attack.mitre.org/matrices/enterprise/",
        publisher: "MITRE",
    },
    {
        label: "NIST SP 800-115 — Technical Guide to Information Security Testing",
        href: "https://csrc.nist.gov/pubs/sp/800/115/final",
        publisher: "NIST",
    },
];

export default function FintechPentestPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        articleSchema({
                            headline: TITLE,
                            description:
                                "A founder's guide to scoping a fintech penetration test in 2026: threat model, scope, PCI DSS and SOC 2 drivers, ATT&CK mapping, and cost.",
                            datePublished: PUBLISHED,
                            slug: SLUG,
                            image: "https://quantlabusa.dev/og-pentest.png",
                            author: { name: author.name, url: authorUrl(author.slug) },
                            section: "Security",
                            keywords: [
                                "penetration testing for fintech",
                                "fintech security testing",
                                "pci dss pentest",
                            ],
                        }),
                    ),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <Breadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: TITLE },
                    ]}
                />

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">
                        Fintech Security · 2026
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Penetration Testing for Fintech Startups: A 2026 Guide
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        Fintech is the one category where a single authorization bug can move
                        real money out of a real account. This is the guide I wish every
                        founder had before their first bank diligence call: the threat model
                        that actually applies, what to put in scope, which framework is
                        forcing the test, and what it honestly costs in 2026.
                    </p>
                    <AuthorByline
                        author={author}
                        publishedDate={PUBLISHED}
                        readMinutes={11}
                        className="mb-8"
                    />
                    <ConsultationCTA
                        label="Scope a Fintech Pentest"
                        service="Penetration Testing"
                        source="blog-fintech-pentest"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Quick answer
                        </h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                Fintech startups need a penetration test because they move
                                money and hold regulated data, which puts them in scope for PCI
                                DSS and SOC 2 and on the radar of every bank partner. Scope the
                                web app, the API, the money-movement flows, and any payment or
                                banking integration. Map findings to MITRE ATT&amp;CK and the
                                OWASP API Top 10. Budget $12K to $30K for a focused first
                                engagement and $40K to $90K once a full PCI DSS program kicks
                                in.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        The fintech threat model is different
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Most SaaS gets attacked for its data. Fintech gets attacked for its
                            money — and the data is the means, not the end. That single shift
                            changes everything about how you scope a test. A normal SaaS breach
                            is a privacy incident; a fintech breach can be an irreversible wire
                            out of a customer&apos;s account before anyone notices.
                        </p>
                        <p>
                            The adversaries are also more capable and more motivated. You are
                            not just defending against opportunistic credential-stuffing bots.
                            You are defending against people who will spend weeks studying your
                            transfer flow looking for a way to make a valid-looking request that
                            credits the wrong ledger. That is why fintech testing leans heavily
                            on <strong className="text-white">business-logic abuse</strong> —
                            sequences of legitimate API calls in an illegitimate order — far
                            more than on classic injection bugs.
                        </p>
                        <p>
                            Map this to{" "}
                            <Link
                                href="/glossary/what-is-mitre-attack"
                                className="text-sky-400 hover:underline"
                            >
                                MITRE ATT&amp;CK
                            </Link>{" "}
                            and the picture sharpens. Initial access usually arrives through{" "}
                            <strong className="text-white">
                                Exploit Public-Facing Application (T1190)
                            </strong>{" "}
                            against the web or API tier, or through{" "}
                            <strong className="text-white">Valid Accounts (T1078)</strong> when
                            credentials leak or MFA is bypassable. From there the objective is
                            not lateral movement for its own sake — it is reaching the ledger
                            write path. A fintech pentest that does not trace a path all the way
                            to a simulated unauthorized money movement has not finished the job.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Compliance drivers: who is forcing the test
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Almost no fintech buys its first pentest voluntarily. A framework or
                            a partner forces it. Knowing which one matters, because the scope and
                            cadence differ.
                        </p>
                        <p>
                            <strong className="text-white">PCI DSS.</strong> The strictest
                            driver, and it only applies if cardholder data touches your
                            environment. Requirement 11.4 mandates internal and external
                            penetration tests at least annually and after significant changes,
                            plus six-month segmentation testing for service providers who use
                            segmentation to reduce scope. If you tokenize through a processor and
                            never store a primary account number, your scope collapses — but you
                            have to prove that with a documented analysis. Our{" "}
                            <Link
                                href="/blog/pci-dss-compliance-saas-checklist"
                                className="text-sky-400 hover:underline"
                            >
                                PCI DSS compliance checklist for SaaS
                            </Link>{" "}
                            walks through scope reduction, and the{" "}
                            <Link
                                href="/glossary/what-is-pci-dss"
                                className="text-sky-400 hover:underline"
                            >
                                PCI DSS glossary entry
                            </Link>{" "}
                            covers the basics.
                        </p>
                        <p>
                            <strong className="text-white">SOC 2.</strong> The most common
                            driver for fintech selling to other businesses. SOC 2 does not name
                            &quot;pentest,&quot; but auditors universally read Trust Services
                            Criteria CC4.1 and CC7.1 as requiring annual testing with a
                            documented remediation loop. If you are heading into a Type I or Type
                            II, read our{" "}
                            <Link
                                href="/blog/soc2-pentest-prep-guide-2026"
                                className="text-sky-400 hover:underline"
                            >
                                SOC 2 pentest prep guide
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/blog/how-to-prepare-for-a-soc-2-audit-2026"
                                className="text-sky-400 hover:underline"
                            >
                                how to prepare for a SOC 2 audit
                            </Link>
                            .
                        </p>
                        <p>
                            <strong className="text-white">
                                Bank partners and banking-as-a-service.
                            </strong>{" "}
                            If you run on top of a sponsor bank or a BaaS provider, their
                            security team will ask for a recent independent pentest report before
                            and during the relationship. This is often the real deadline, and it
                            arrives earlier than founders expect.
                        </p>
                        <p>
                            <strong className="text-white">Enterprise customers.</strong> The
                            moment you sell to a company with a security team, their vendor
                            review will request the report. A clean executive summary you can
                            share under NDA shortens these reviews from weeks to days.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        What to put in scope
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Scope is where fintech founders both overspend and under-protect.
                            Here is the minimum viable scope for an early-stage money-movement
                            product:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Production web application with the full authentication and MFA
                                flow
                            </li>
                            <li>
                                Production API — REST or GraphQL — including endpoints that exist
                                but are not linked from the UI
                            </li>
                            <li>
                                Money-movement flows: transfers, payouts, refunds, ACH or wire
                                initiation, and every write to the ledger
                            </li>
                            <li>
                                Webhook and callback handlers from your payment processor or
                                sponsor bank, with signature verification under test
                            </li>
                            <li>
                                Authorization across tenants and across account holders — the
                                classic &quot;can user A touch user B&apos;s account&quot; check
                            </li>
                            <li>Secrets handling, key storage, and token lifetimes</li>
                            <li>
                                Any partner or banking-as-a-service integration that can affect
                                balances
                            </li>
                        </ul>
                        <p>
                            For the application tier specifically, a focused{" "}
                            <Link
                                href="/services/web-app-pentest"
                                className="text-sky-400 hover:underline"
                            >
                                web app pentest
                            </Link>{" "}
                            is the right starting engagement, and our{" "}
                            <Link
                                href="/services/api-development"
                                className="text-sky-400 hover:underline"
                            >
                                API development practice
                            </Link>{" "}
                            informs how we attack the API surface from a builder&apos;s
                            perspective. If your test is PCI-driven, an{" "}
                            <Link
                                href="/services/network-pentest"
                                className="text-sky-400 hover:underline"
                            >
                                external network pentest
                            </Link>{" "}
                            joins the scope.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        The findings that actually hurt fintech
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            In years of fintech-adjacent engagements, the high-severity findings
                            cluster in a handful of categories — and almost none of them are the
                            injection bugs people expect.
                        </p>
                        <p>
                            <strong className="text-white">
                                Broken object-level authorization (BOLA / IDOR).
                            </strong>{" "}
                            The number-one fintech bug. An endpoint like{" "}
                            <code className="text-sky-300">GET /accounts/&#123;id&#125;/balance</code>{" "}
                            that trusts the ID in the URL instead of checking it against the
                            authenticated session. This is OWASP API Security risk{" "}
                            <strong className="text-white">API1:2023</strong> and it leaks one
                            customer&apos;s financial data to another with a single incremented
                            integer.
                        </p>
                        <p>
                            <strong className="text-white">
                                Business-logic flaws in money movement.
                            </strong>{" "}
                            Negative-amount transfers, race conditions that let a balance be spent
                            twice, missing idempotency on a payout endpoint, or a refund flow that
                            credits before it debits. These pass every scanner because each
                            request is individually valid. The example below is the kind of
                            race a tester probes for:
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// Two concurrent requests, one balance of $100.
// Without a row lock or idempotency key, both succeed.
POST /v1/transfers  { "from": "acct_1", "amount": 100 }
POST /v1/transfers  { "from": "acct_1", "amount": 100 }
// Result: $200 moved from a $100 balance.`}</code>
                        </pre>
                        <p>
                            <strong className="text-white">
                                Unverified processor webhooks.
                            </strong>{" "}
                            If your payment-success webhook does not verify the signature, an
                            attacker can forge a &quot;payment succeeded&quot; event and unlock
                            paid functionality for free. We wrote a whole post on{" "}
                            <Link
                                href="/blog/stripe-webhook-security-best-practices"
                                className="text-sky-400 hover:underline"
                            >
                                Stripe webhook security
                            </Link>{" "}
                            because this one shows up constantly.
                        </p>
                        <p>
                            <strong className="text-white">Secrets in the wrong place.</strong>{" "}
                            API keys in client bundles, processor secret keys committed to a repo,
                            or long-lived tokens with no rotation. In ATT&amp;CK terms this is the
                            raw material for{" "}
                            <strong className="text-white">Valid Accounts (T1078)</strong>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Fintech pentest cost ranges for 2026
                    </h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">
                                        Fintech profile
                                    </th>
                                    <th className="px-4 py-3 border-b border-white/10">
                                        Scope
                                    </th>
                                    <th className="px-4 py-3 border-b border-white/10">
                                        2026 range
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3">Pre-launch, tokenized payments</td>
                                    <td className="px-4 py-3">Web + API</td>
                                    <td className="px-4 py-3">$12K to $25K</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3">Seed, SOC 2 Type I driver</td>
                                    <td className="px-4 py-3">Web + API + external network</td>
                                    <td className="px-4 py-3">$20K to $40K</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3">Series A, holds card data</td>
                                    <td className="px-4 py-3">
                                        Internal + external + segmentation (PCI)
                                    </td>
                                    <td className="px-4 py-3">$40K to $70K</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3">Series B, BaaS + multi-app</td>
                                    <td className="px-4 py-3">Full annual program + retest</td>
                                    <td className="px-4 py-3">$70K to $90K+</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        Run your own numbers with the{" "}
                        <Link
                            href="/calculators/pentest-cost"
                            className="text-sky-400 hover:underline"
                        >
                            pentest cost calculator
                        </Link>
                        , and see the{" "}
                        <Link
                            href="/blog/penetration-test-cost-2026"
                            className="text-sky-400 hover:underline"
                        >
                            2026 pentest cost guide
                        </Link>{" "}
                        for granular per-scope pricing. If you are weighing a pentest against a
                        cheaper scan, the difference is covered in{" "}
                        <Link
                            href="/blog/what-is-a-pen-test-vs-vulnerability-scan"
                            className="text-sky-400 hover:underline"
                        >
                            pen test vs vulnerability scan
                        </Link>
                        .
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Mid-post: scope it before diligence catches you
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">
                            Have a bank partner, card network, or enterprise security review on
                            the calendar? A 30-minute call gets you a realistic scope, timeline,
                            and the report format their team will accept.
                        </p>
                        <ConsultationCTA
                            label="Get Fintech Scoping Help"
                            service="Penetration Testing"
                            source="blog-fintech-pentest-mid"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        How we run a fintech engagement
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A fintech engagement follows the same disciplined phases as any{" "}
                            <Link
                                href="/blog/what-is-penetration-testing"
                                className="text-sky-400 hover:underline"
                            >
                                real penetration test
                            </Link>{" "}
                            — scoping, recon, vulnerability identification, exploitation,
                            post-exploitation, and reporting — but two phases get extra weight.
                        </p>
                        <p>
                            First, <strong className="text-white">scoping</strong> includes a
                            data-flow conversation: where does money enter, where is it held,
                            who can authorize a movement, and which integrations can change a
                            balance. Second,{" "}
                            <strong className="text-white">exploitation</strong> is grey-box by
                            default — we test with low-privilege accounts on each role tier so we
                            spend the time chaining authorization and logic flaws rather than
                            burning the budget on reconnaissance. Every chained step is tagged
                            with its ATT&amp;CK technique and, for API findings, the
                            corresponding{" "}
                            <Link
                                href="/glossary/what-is-owasp-top-10"
                                className="text-sky-400 hover:underline"
                            >
                                OWASP
                            </Link>{" "}
                            category, so your engineers and your auditor read the same story.
                        </p>
                        <p>
                            The deliverable is built for diligence: an executive summary you can
                            share under NDA, a methodology document aligned to NIST SP 800-115,
                            per-finding reproduction steps, a remediation roadmap, and a 30-day
                            retest. For the broader security picture of an early company, see our{" "}
                            <Link
                                href="/blog/cybersecurity-services-for-saas-startups-2026"
                                className="text-sky-400 hover:underline"
                            >
                                cybersecurity services for SaaS startups
                            </Link>{" "}
                            guide and our{" "}
                            <Link href="/industries/fintech" className="text-sky-400 hover:underline">
                                fintech industry page
                            </Link>
                            .
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Frequently asked questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((item) => (
                            <div
                                key={item.q}
                                className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6"
                            >
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <Sources items={sources} />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Related reading and next steps
                    </h2>
                    <ul className="space-y-3">
                        {[
                            { href: "/services/penetration-testing", label: "Penetration Testing service overview" },
                            { href: "/services/web-app-pentest", label: "Web Application Pentest service" },
                            { href: "/services/api-development", label: "API Development service" },
                            { href: "/industries/fintech", label: "Fintech industry page" },
                            { href: "/blog/pci-dss-compliance-saas-checklist", label: "PCI DSS compliance checklist for SaaS" },
                            { href: "/blog/stripe-webhook-security-best-practices", label: "Stripe webhook security best practices" },
                            { href: "/blog/penetration-test-cost-2026", label: "What does a pentest cost in 2026?" },
                            { href: "/glossary/what-is-pci-dss", label: "What is PCI DSS?" },
                            { href: "/calculators/pentest-cost", label: "Pentest cost calculator" },
                            { href: "/contact", label: "Talk to Bill about your fintech pentest" },
                        ].map((l) => (
                            <li key={l.href} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                <Link href={l.href} className="text-sky-400 hover:underline">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <EditorialFooter reviewedDate={PUBLISHED} />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Money moves. So do attackers.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free scoping call. Bring your compliance driver and your
                            money-movement flows, and I&apos;ll map the right scope, timeline, and
                            cost for your stage.
                        </p>
                        <ConsultationCTA
                            label="Book the Scoping Call"
                            service="Penetration Testing"
                            source="blog-fintech-pentest-cta"
                        />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill directly at{" "}
                            <a href="tel:+17706521282" className="text-sky-400 hover:underline">
                                (770) 652-1282
                            </a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug={SLUG}
                        topics={["pentest", "compliance", "saas"]}
                        pinned={[
                            "pci-dss-compliance-saas-checklist",
                            "stripe-webhook-security-best-practices",
                            "cybersecurity-services-for-saas-startups-2026",
                        ]}
                        heading="More fintech security reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link
                            href="/blog"
                            className="hover:text-sky-400 inline-flex items-center gap-1"
                        >
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated June 3, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
