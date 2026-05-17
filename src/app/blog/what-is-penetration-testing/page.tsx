import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "What Is Penetration Testing? 2026 Buyer Guide | QUANT LAB USA",
    description:
        "Plain-English 2026 buyer guide for penetration testing: scope tiers, what's in the report, MITRE ATT&CK alignment, cost ranges, and how to vet a vendor.",
    alternates: {
        canonical: "https://quantlabusa.dev/blog/what-is-penetration-testing",
    },
    openGraph: {
        title: "What Is Penetration Testing? A Founder's 2026 Buyer Guide",
        description:
            "Pentest in one sentence, the 5 types, scoping, reporting, compliance triggers, and what one should cost in 2026.",
        url: "https://quantlabusa.dev/blog/what-is-penetration-testing",
        type: "article",
        publishedTime: "2026-05-12",
        authors: ["William Beltz"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is Penetration Testing? A Founder's 2026 Buyer Guide",
    description:
        "A non-security founder's introduction to penetration testing: what it is, what it is not, the five types, the engagement phases, what a real report looks like, and 2026 cost ranges.",
    image: "https://quantlabusa.dev/og-image.png",
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
    author: {
        "@type": "Person",
        name: "William Beltz",
        url: "https://quantlabusa.dev/about",
        jobTitle: "Founder & Principal Engineer",
        worksFor: { "@id": "https://quantlabusa.dev/#organization" },
    },
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        "@id": "https://quantlabusa.dev/#organization",
        logo: {
            "@type": "ImageObject",
            url: "https://quantlabusa.dev/logo-transparent.png",
        },
    },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://quantlabusa.dev/blog/what-is-penetration-testing",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://quantlabusa.dev/blog",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "What Is Penetration Testing",
            item: "https://quantlabusa.dev/blog/what-is-penetration-testing",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is penetration testing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Penetration testing is a time-boxed, authorized, human-driven attempt to compromise the security of your systems by chaining vulnerabilities together the way a real attacker would, then documenting exactly what worked so you can fix it. It is not a vulnerability scan, not a compliance checkbox, and not a one-time guarantee of security.",
            },
        },
        {
            "@type": "Question",
            name: "What are the main types of penetration tests?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Five engagement types: web application pentests, network pentests (external and internal), Active Directory pentests, wireless and physical pentests, and social engineering / phishing campaigns. Red team is a separate category that combines multiple types into a single objective-based engagement. Most SaaS founders need a web app pentest first.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between black-box, grey-box, and white-box pentesting?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Black-box pentesting starts with zero credentials or information, like an external attacker. White-box provides full source code and admin credentials. Grey-box is the middle ground: low-privilege credentials plus an architecture diagram. Grey-box is the most cost-effective default for compliance pentests because it skips the recon overhead without sacrificing depth.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a penetration test take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A typical web app or network pentest takes 1 to 3 weeks: 1 week of testing, 1 week of report writing, and a 30-day retest window after fixes ship. Active Directory and multi-app engagements run 2 to 4 weeks. Red teams run 4 to 12 weeks. Plan for 6 weeks between kickoff and final report for most SOC 2 engagements.",
            },
        },
        {
            "@type": "Question",
            name: "How often should I get a penetration test?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Annually at minimum for any compliance program (SOC 2, HIPAA, PCI DSS, ISO 27001 all expect annual). Additionally, after every major release that touches authentication, payment processing, or sensitive data, and after every significant infrastructure change like a cloud migration or new VPN.",
            },
        },
    ],
};

export default function WhatIsPentestPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <article className="container mx-auto px-6 max-w-3xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li>
                            <Link href="/" className="hover:text-sky-400 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">
                            ›
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-sky-400 transition-colors">
                                Blog
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">
                            ›
                        </li>
                        <li className="text-gray-300">What Is Penetration Testing</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Cybersecurity · Top of Funnel
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What Is Penetration Testing? A Founder&apos;s 2026 Buyer Guide
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                        <span className="inline-flex items-center gap-1.5">
                            <User className="w-4 h-4" />
                            Bill Beltz, Founder
                        </span>
                        <span className="text-gray-700">·</span>
                        <span className="inline-flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            May 12, 2026
                        </span>
                        <span className="text-gray-700">·</span>
                        <span>12 min read</span>
                    </div>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        This is the post I would send to a founder who has been told they
                        need a pentest, has no security background, and does not want to be
                        sold to by someone with a clipboard. By the end of it you will know
                        what you are buying, what to scope, what a real report looks like,
                        and roughly what one should cost in 2026.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What is penetration testing?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Penetration testing is a time-boxed, authorized, human-driven attempt to compromise the security of your systems by chaining vulnerabilities together the way a real attacker would, then documenting exactly what worked so you can fix it. It is not a vulnerability scan, not a compliance checkbox, and not a one-time guarantee of security — it is a snapshot of your security posture against a defined threat model.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Pentest in one sentence (and what it is not)
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            A penetration test is a time-boxed, authorized, human-driven attempt
                            to compromise the security of your systems by chaining vulnerabilities
                            together the way a real attacker would, and then writing down
                            exactly what worked so you can fix it. That is the whole job.
                        </p>
                        <p>
                            What a pentest is not: it is not a vulnerability scan, which is an
                            automated tool that produces a list of known weaknesses without
                            verifying impact. It is not a compliance checkbox you can fake. It
                            is not a one-and-done event that proves your environment is
                            permanently secure. And it is not a magic spell that prevents
                            breaches — it is a snapshot of your security posture on the days
                            the test ran, against the threat model the engagement scoped for.
                        </p>
                        <p>
                            The reason the distinction matters is that the cybersecurity
                            industry has done a poor job protecting the word. Every vendor
                            selling vulnerability scanners or asset management platforms now
                            calls their output a &quot;pentest&quot; in marketing copy, which means
                            non-security buyers cannot tell what they are actually getting. If
                            the deliverable does not include a human chaining findings into a
                            narrative attack path, you bought a scan, not a pentest, and the
                            two are priced differently for a reason.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        The five types of pentest you can actually buy
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Most shops bucket their offerings into five engagement types. You
                            usually need one or two of these, not all five, and the right
                            scoping conversation starts with which types apply to your threat
                            model.
                        </p>
                        <p>
                            <strong className="text-white">
                                Web application pentesting.
                            </strong>{" "}
                            Targets your customer-facing or internal web applications and APIs.
                            This is what most SaaS companies need first because it is where
                            customer data lives. A web pentest will look at authentication,
                            authorization, input validation, session management, business logic
                            flaws, and the API surface — including endpoints that exist but
                            are not linked from the UI.{" "}
                            <Link
                                href="/services/web-app-pentest"
                                className="text-sky-400 hover:underline"
                            >
                                Web app pentest scoping
                            </Link>{" "}
                            usually starts with an inventory of the app, its third-party
                            integrations, and its authentication flow.
                        </p>
                        <p>
                            <strong className="text-white">Network pentesting.</strong> Targets
                            your network perimeter (external) or your internal corporate
                            network (internal). External network tests look for exposed
                            services, weak authentication, and misconfigurations on
                            internet-facing infrastructure. Internal network tests assume an
                            attacker has already gotten a foothold — usually through a
                            phishing email or a stolen laptop — and tries to see how far that
                            foothold can spread.{" "}
                            <Link
                                href="/services/network-pentest"
                                className="text-sky-400 hover:underline"
                            >
                                Network pentests
                            </Link>{" "}
                            usually run alongside Active Directory testing for any company
                            with more than 20 employees.
                        </p>
                        <p>
                            <strong className="text-white">
                                Active Directory pentesting.
                            </strong>{" "}
                            A subset of internal network testing focused on Windows AD
                            environments specifically. Almost every breach of a company that
                            uses AD goes through AD at some point, which is why{" "}
                            <Link
                                href="/services/active-directory-pentest"
                                className="text-sky-400 hover:underline"
                            >
                                AD-focused pentests
                            </Link>{" "}
                            have become a category of their own. The deliverable should
                            include the specific Kerberos and ACL findings that lead to
                            domain compromise, not a generic list of patch levels.
                        </p>
                        <p>
                            <strong className="text-white">Wireless pentesting.</strong>{" "}
                            Targets your Wi-Fi infrastructure on-site. Includes rogue access
                            point detection, WPA2/WPA3 attack paths, captive portal bypass,
                            and lateral movement from guest Wi-Fi into corporate. Often
                            bundled with a physical engagement.
                        </p>
                        <p>
                            <strong className="text-white">Social engineering.</strong>{" "}
                            Targets your people. Includes phishing campaigns (email, SMS,
                            voice), pretext-based information gathering, and sometimes
                            on-site physical engagements. Social is almost always the highest
                            ROI per dollar but requires clear rules-of-engagement to keep the
                            team safe and the test legal.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Black box, grey box, white box: which one you actually want
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            The &quot;box color&quot; refers to how much information you give the
                            pentest team before testing starts. Most buyers assume black box
                            (zero information) is the most realistic and therefore the best.
                            That is wrong about 80% of the time.
                        </p>
                        <p>
                            <strong className="text-white">Black box</strong> means the testers
                            start with nothing — just a company name or a domain. They have
                            to find the assets, profile them, and attack them like a real
                            external adversary. The argument for black box is realism. The
                            argument against is that pentests are time-boxed: a real attacker
                            has years; your pentest team has two weeks. Most of that time
                            gets burned on reconnaissance instead of finding real bugs.
                        </p>
                        <p>
                            <strong className="text-white">Grey box</strong> means the team
                            starts with limited information — usually a low-privilege user
                            account, a network diagram, or both. This is the right default
                            for most engagements because it skips the part of a real attack
                            that does not produce learnings (reconnaissance) and gets straight
                            to the part that does (chaining vulnerabilities into impact). For
                            web app testing especially, grey box is almost always the right
                            call.
                        </p>
                        <p>
                            <strong className="text-white">White box</strong> means the team
                            gets full access — source code, admin accounts, network diagrams,
                            documentation. White box engagements find more bugs per dollar
                            than any other variant, especially when the testers can read the
                            code. They are the right call when you are pre-launch, when you
                            need maximum coverage, or when you are compliance-driven and need
                            the deepest possible result.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        The six phases of a real engagement
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Every legitimate pentest follows roughly the same six phases, in
                            this order. If the shop you are talking to skips one, ask why.
                        </p>
                        <p>
                            <strong className="text-white">Phase 1 — Scoping.</strong> The
                            shop talks to you about your assets, your threat model, your
                            compliance drivers, your testing windows, and your rules of
                            engagement. A good scoping call lasts an hour and produces a
                            written statement of work with specific in-scope and out-of-scope
                            assets, testing dates, escalation paths, and report-delivery
                            commitments. If you are scoped in 15 minutes from a templated
                            quote, you are buying a templated test.
                        </p>
                        <p>
                            <strong className="text-white">
                                Phase 2 — Reconnaissance.
                            </strong>{" "}
                            The team gathers information about your environment — passive (OSINT,
                            DNS, certificate transparency) and active (port scanning, banner
                            grabbing). The output is an asset inventory that becomes the
                            attack surface.
                        </p>
                        <p>
                            <strong className="text-white">
                                Phase 3 — Vulnerability identification.
                            </strong>{" "}
                            Manual and automated discovery of weaknesses against the asset
                            inventory. Good shops manually validate every finding before it
                            goes in the report, which is how you avoid false-positive reports
                            from the cheaper vendors.
                        </p>
                        <p>
                            <strong className="text-white">Phase 4 — Exploitation.</strong>{" "}
                            The testers actually exploit the validated vulnerabilities to
                            demonstrate impact. This is the difference between &quot;you have a
                            SQL injection&quot; and &quot;we used the SQL injection to pull every
                            customer record in the database — here is the proof.&quot;
                        </p>
                        <p>
                            <strong className="text-white">
                                Phase 5 — Post-exploitation.
                            </strong>{" "}
                            The testers see how far the initial compromise can spread. Can
                            they pivot to other systems? Can they escalate privileges? Can
                            they exfiltrate sensitive data? This is where{" "}
                            <Link
                                href="/services/mitre-attack-assessment"
                                className="text-sky-400 hover:underline"
                            >
                                MITRE ATT&amp;CK mapping
                            </Link>{" "}
                            earns its keep — every technique chained into the attack path
                            gets tagged with the corresponding TTP ID.
                        </p>
                        <p>
                            <strong className="text-white">Phase 6 — Reporting.</strong> The
                            written deliverable, which we&apos;ll cover in detail in the next
                            section.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        What a good report looks like — and red flags
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            The report is the deliverable. Everything else is process. A
                            non-technical reader (your CEO, your auditor, your insurance
                            broker) should be able to read the executive summary and
                            understand both the severity of the risk and the path to fixing
                            it. A technical reader (your engineering team) should be able to
                            reproduce every finding and validate the fix.
                        </p>
                        <p>
                            A good report includes: an executive summary with risk rating; a
                            scope and methodology section; a full attack narrative showing how
                            findings chain together; per-finding entries with severity,
                            evidence (screenshots), reproduction steps, MITRE ATT&amp;CK and{" "}
                            <Link
                                href="/services/penetration-testing"
                                className="text-sky-400 hover:underline"
                            >
                                OWASP mapping
                            </Link>
                            , business impact, and remediation guidance; a risk-prioritized
                            remediation roadmap; and a commitment to retest after fixes
                            land. Reports that just list CVEs with CVSS scores are not
                            pentest reports — they are scan output with a logo.
                        </p>
                        <p>
                            Red flags in a sample report: no attack narrative, every finding
                            rated critical (severity inflation), CVSS scores treated as the
                            only severity input, no reproduction steps, no remediation
                            specifics, no mapping to ATT&amp;CK or OWASP, and no retest clause.
                            Ask for an anonymized sample before you sign. Any shop that will
                            not show you one is hiding the quality of the deliverable.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Compliance triggers: SOC 2, HIPAA, PCI, cyber insurance
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Most companies do not buy their first pentest because they
                            decided they wanted one — they buy it because a compliance
                            framework or an insurance application forced them. Knowing which
                            framework is driving the requirement matters because the scope
                            and depth differ.
                        </p>
                        <p>
                            <strong className="text-white">SOC 2.</strong> The standard says
                            you need a &quot;regular&quot; pentest. In practice, annual is the
                            expectation, with re-tests after major changes. Auditors want to
                            see scope, methodology, executive summary, and evidence of
                            remediation.
                        </p>
                        <p>
                            <strong className="text-white">HIPAA.</strong> The technical
                            safeguards section requires a regular evaluation but does not
                            specify pentest. In practice, healthcare auditors look for an
                            annual pentest plus continuous vulnerability management. Web app
                            scope is usually mandatory; internal network scope is wise.
                        </p>
                        <p>
                            <strong className="text-white">PCI DSS.</strong> The strictest
                            requirements. PCI requires both internal and external pentests
                            annually, plus after &quot;significant changes,&quot; plus segmentation
                            testing if you use it to reduce scope. PCI also has specific
                            methodology requirements that your shop should be able to recite
                            without hesitation.
                        </p>
                        <p>
                            <strong className="text-white">Cyber insurance.</strong> The
                            fastest-growing pentest trigger. Insurers increasingly want
                            evidence of a recent pentest before they renew, especially for
                            policies above $1M. The pentest does not have to be heavy — but
                            it has to be real and recent. If you are seeing your premium
                            quote double on renewal, a pentest plus visible remediation is
                            usually the cheapest fix.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Pentest vs vulnerability scan vs red team
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            The three offerings sound similar and are very different. The
                            short version: a vulnerability scan is automated and broad, a
                            pentest is human-driven and time-boxed against specific assets,
                            and a red team engagement is objective-driven and stealth-aware.
                        </p>
                        <p>
                            A vulnerability scan is your gym checkup — it tells you whether
                            you have the basics covered. A pentest is your annual physical —
                            a doctor poking around to see what hurts. A red team engagement
                            is a stress test in a hospital — a multi-week, no-holds-barred
                            attempt to see if a determined adversary could reach a specific
                            objective like &quot;exfiltrate the customer database&quot; or &quot;reach
                            domain admin&quot; without being caught by your defenders.
                        </p>
                        <p>
                            Most companies need a pentest before they need a red team
                            engagement. Red teams assume you already have detection and
                            response capability worth testing. If your incident response plan
                            is a Slack channel and a wish, start with a pentest.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        How much should a pentest cost in 2026?
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Honest ranges, in 2026 dollars, from a US-based shop with a real
                            methodology. Anything materially below these numbers is either an
                            automated scan dressed up as a pentest or a foreign shop with
                            quality risk worth pricing in. Anything materially above is
                            either a Big-Four name premium or a much larger scope than you
                            actually need.
                        </p>
                        <p>
                            <strong className="text-white">External network pentest.</strong>{" "}
                            $8,000 to $18,000 for a small environment (under 50 external
                            assets). Larger environments scale roughly linearly.
                        </p>
                        <p>
                            <strong className="text-white">
                                Internal network and Active Directory pentest.
                            </strong>{" "}
                            $15,000 to $35,000 depending on the size of the environment, the
                            number of subnets, and AD complexity.
                        </p>
                        <p>
                            <strong className="text-white">Web application pentest.</strong>{" "}
                            $10,000 to $25,000 for a single application of moderate
                            complexity. Multi-tenant SaaS, complex auth, or admin/customer
                            portal splits push the price up.
                        </p>
                        <p>
                            <strong className="text-white">Wireless pentest.</strong> $6,000
                            to $15,000 depending on the number of sites and APs.
                        </p>
                        <p>
                            <strong className="text-white">Bundled engagements.</strong> Most
                            shops will package external + internal + AD + web for somewhere
                            in the $35,000 to $80,000 range, which is the most common
                            scope for a SOC 2 or HIPAA-driven first pentest. We&apos;ve published a
                            separate guide on{" "}
                            <Link
                                href="/blog/penetration-test-cost-2026"
                                className="text-sky-400 hover:underline"
                            >
                                pentest cost ranges in 2026
                            </Link>{" "}
                            with more granular numbers per scope variant.
                        </p>
                        <p>
                            For founders in the Southeast specifically, we&apos;ve covered{" "}
                            <Link
                                href="/blog/best-penetration-testing-companies-georgia-2026"
                                className="text-sky-400 hover:underline"
                            >
                                how to evaluate Georgia-based pentest shops
                            </Link>{" "}
                            with a focus on what local methodology and engagement experience
                            actually buy you over an East-Coast remote vendor.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">What is the difference between black-box, grey-box, and white-box pentesting?</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <p>
                            Black-box pentesting starts with zero credentials or information, like an external attacker. White-box provides full source code and admin credentials. Grey-box is the middle ground: low-privilege credentials plus an architecture diagram. Grey-box is the most cost-effective default for compliance pentests because it skips the recon overhead without sacrificing depth.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">How often should I get a penetration test?</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <p>
                            Annually at minimum for any compliance program (SOC 2, HIPAA, PCI DSS, ISO 27001 all expect annual). Additionally, after every major release that touches authentication, payment processing, or sensitive data, and after every significant infrastructure change like a cloud migration or new VPN.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Where to take this next
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            If you are early in the process and trying to figure out which
                            type of pentest your situation calls for, the most useful next
                            read is our{" "}
                            <Link
                                href="/blog/what-is-mitre-attack-framework"
                                className="text-sky-400 hover:underline"
                            >
                                explainer on MITRE ATT&amp;CK
                            </Link>
                            , because methodology is the single biggest quality differentiator
                            between shops. If you are further along and have a scope in mind,{" "}
                            <Link
                                href="/services/penetration-testing"
                                className="text-sky-400 hover:underline"
                            >
                                our pentest service page
                            </Link>{" "}
                            covers the specifics of how we run engagements. If you are local to
                            Atlanta, Macon, or anywhere in the Southeast and want to talk
                            about on-site engagements, our{" "}
                            <Link
                                href="/software-development-atlanta-ga"
                                className="text-sky-400 hover:underline"
                            >
                                Atlanta software and security
                            </Link>{" "}
                            page covers the local angle.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Twenty minutes to scope your first pentest.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Bring your compliance driver, the assets you want covered, and any
                            timing pressure. I&apos;ll walk you through the right scope, the
                            realistic timeline, and what it actually costs.
                        </p>
                        <ConsultationCTA
                            label="Book a Pentest Scoping Call"
                            service="Penetration Testing"
                            source="blog-what-is-pentest"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <h2 className="text-2xl font-bold text-white mb-6">Keep reading</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            {
                                href: "/blog/what-is-mitre-attack-framework",
                                title: "What Is MITRE ATT&CK?",
                                desc: "The methodology behind a good pentest, explained in plain English.",
                            },
                            {
                                href: "/services/web-app-pentest",
                                title: "Web App Pentest",
                                desc: "Service page for SaaS founders scoping a web-application engagement.",
                            },
                            {
                                href: "/blog/build-vs-buy-software-2026",
                                title: "Build vs Buy Software",
                                desc: "Decision framework for the software side of the same business.",
                            },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold text-sm">
                                        {s.title}
                                    </h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    {s.desc}
                                </p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>
                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug="what-is-penetration-testing"
                        topics={["pentest"]}
                        heading="More pentest reading"
                    />
                </AnimatedSection>

            </article>
        </main>
    );
}
