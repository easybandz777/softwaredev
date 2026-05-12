import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Atlanta Software Development: 2026 Founder Guide | QUANT LAB",
    description:
        "The Atlanta tech ecosystem, local shop vs offshore tradeoffs, pricing benchmarks, ATL's strongest verticals, and a founder's interview checklist for 2026.",
    alternates: {
        canonical: "https://quantlabusa.dev/blog/atlanta-software-development-guide-2026",
    },
    openGraph: {
        title: "Atlanta Software Development: A Founder's 2026 Guide",
        description:
            "Atlanta tech scene, local vs offshore, pricing benchmarks, strongest verticals, and a founder's interview checklist.",
        url: "https://quantlabusa.dev/blog/atlanta-software-development-guide-2026",
        type: "article",
        publishedTime: "2026-05-12",
        authors: ["William Beltz"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Atlanta Software Development: A Founder's 2026 Guide",
    description:
        "A non-marketing guide to the Atlanta software development scene in 2026: who builds what, pricing benchmarks, vertical strengths, and how to shortlist a shop.",
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
        name: "QUANT LAB USA INC",
        "@id": "https://quantlabusa.dev/#organization",
        logo: {
            "@type": "ImageObject",
            url: "https://quantlabusa.dev/logo-transparent.png",
        },
    },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://quantlabusa.dev/blog/atlanta-software-development-guide-2026",
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
            name: "Atlanta Software Development 2026",
            item: "https://quantlabusa.dev/blog/atlanta-software-development-guide-2026",
        },
    ],
};

export default function AtlantaGuidePage() {
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
                        <li className="text-gray-300">Atlanta Software Development 2026</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Local · Top of Funnel
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Atlanta Software Development: A Founder&apos;s 2026 Guide
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
                        <span>10 min read</span>
                    </div>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Atlanta has quietly become one of the most credible places in the
                        country to build software, and almost nobody outside the Southeast
                        has figured that out yet. This is what I tell founders who are
                        evaluating local-vs-offshore, what an Atlanta engineering shop should
                        actually cost in 2026, and the questions to ask before you sign.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        The Atlanta tech scene in 2026: who actually builds here
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            The Atlanta engineering ecosystem in 2026 has four real layers,
                            and they barely interact with each other in the press releases.
                            At the top sit the Fortune 500 IT organizations — Delta, Home
                            Depot, UPS, Cox, NCR, Coca-Cola, Equifax — which collectively
                            employ tens of thousands of engineers and quietly underwrite the
                            entire talent market. Their churn is what feeds the second layer:
                            the SaaS scale-ups headquartered in or anchored to Atlanta,
                            including names like Mailchimp&apos;s successor companies, Calendly,
                            SalesLoft, Greenlight, and the post-acquisition diaspora from
                            previous ATL exits.
                        </p>
                        <p>
                            The third layer is the consulting and services firms — a mix of
                            global names like Slalom and ATL-bred shops like SingleStone and
                            ATL Recruiters Inc.&apos;s software arms. These shops employ a few
                            hundred engineers each and primarily sell into the Fortune 500
                            layer above them.
                        </p>
                        <p>
                            The fourth layer is the boutique custom-software shops — usually
                            three to twenty engineers, often founder-led, usually shipping
                            for founder-led clients rather than enterprise procurement. This
                            is the layer that matters most for SaaS founders because the
                            economics are radically different from the consulting layer above
                            it. We sit in this layer.{" "}
                            <Link
                                href="/software-development-atlanta-ga"
                                className="text-sky-400 hover:underline"
                            >
                                Our Atlanta software page
                            </Link>{" "}
                            covers the specific verticals we ship into.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Local shop vs offshore vs in-house: the real tradeoffs
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Almost every Atlanta founder I meet has at least considered the
                            offshore option, and many have tried it. The pitch is always the
                            same — comparable engineers at a third of the rate. The
                            experience is rarely what the pitch promised, but not for the
                            reasons you would expect.
                        </p>
                        <p>
                            The offshore tradeoff is not about engineer quality. Plenty of
                            offshore engineers are excellent. The tradeoff is about
                            communication cost — specifically, the cost of asking a question
                            and getting a useful answer the same day. A 9.5-hour time zone
                            gap means every clarifying question costs a day in the schedule.
                            A founder who is also running sales, hiring, and fundraising
                            cannot absorb that delay on every micro-decision a build
                            requires. Offshore works when the spec is rigid and the
                            requirements are stable. It struggles when the founder is still
                            figuring out the product.
                        </p>
                        <p>
                            Local shops trade unit cost for communication speed and shared
                            context. An Atlanta shop can do a 30-minute working session
                            tomorrow morning. The same conversation with an offshore team
                            takes three days of asynchronous messaging that ends with a
                            misunderstanding about pixel-perfect UI vs functional UI. For
                            founders still in product-market-fit territory, that cycle time
                            advantage is worth the rate delta several times over.
                        </p>
                        <p>
                            In-house engineering hires only make sense at a specific stage:
                            usually after you have shipped a v1 with an outside team and
                            have enough product clarity to define a real role. Hiring a
                            senior engineer at $180k+ fully loaded before product clarity
                            usually buys you an expensive consultant with worse upside. The
                            sequence that works for most ATL founders is: scope with a shop,
                            ship v1 with a shop, hire in-house engineers to grow the
                            codebase the shop already shipped. We&apos;ve written a separate
                            framework for the{" "}
                            <Link
                                href="/blog/build-vs-buy-software-2026"
                                className="text-sky-400 hover:underline"
                            >
                                build-vs-buy decision
                            </Link>{" "}
                            that goes deeper on this sequence.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Atlanta Tech Village, Tech Square, and the geography of where to look
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Atlanta&apos;s startup density concentrates in two places: Tech Square
                            in Midtown and the Atlanta Tech Village in Buckhead. They are
                            different ecosystems with different orientations.
                        </p>
                        <p>
                            Tech Square is the Georgia Tech-adjacent corridor, anchored by
                            ATDC (the state-supported incubator), the Engineering Center for
                            Disease Control&apos;s research collaborations, and a heavy presence
                            of corporate innovation labs. The culture skews academic and
                            deep-tech. Founders here are often technical, often Georgia Tech
                            alums, and often building research-adjacent companies.
                        </p>
                        <p>
                            Atlanta Tech Village in Buckhead is the SaaS-and-services
                            corridor. The culture is more sales-driven, more operator-heavy,
                            more typical-startup. Founders here often came out of operating
                            roles at the larger ATL SaaS companies. Calendly and SalesLoft
                            DNA shows up everywhere.
                        </p>
                        <p>
                            Neither is better. They are different markets with different
                            networks. For founders shortlisting shops, the relevant question
                            is not which campus the shop is on — it is whether the shop has
                            shipped for companies in the same orientation as yours. A shop
                            that primarily ships for Tech Square deep-tech founders will
                            structure engagements differently than a shop that primarily
                            ships for ATV SaaS operators.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Pricing benchmarks: what Atlanta dev shops actually charge in 2026
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Honest 2026 numbers, in US dollars, for a US-staffed Atlanta
                            engineering shop with senior-led delivery. Smaller shops below
                            these ranges exist and can be excellent. Larger consulting firms
                            above these ranges exist and are usually optimized for enterprise
                            procurement, not founder-led builds.
                        </p>
                        <p>
                            <strong className="text-white">Hourly rates (T&amp;M).</strong>{" "}
                            $140–$220 per hour for senior engineering, $110–$160 for
                            mid-level, $200–$280 for solutions architects or lead engineers.
                            These are blended Atlanta-market rates as of early 2026. Shops
                            below $100/hour are usually subcontracting offshore. Shops above
                            $280/hour are usually positioned for enterprise.
                        </p>
                        <p>
                            <strong className="text-white">Fixed-fee project scope.</strong>{" "}
                            A focused MVP-style build (3 to 4 months, 1 to 2 engineers) lands
                            between $80k and $180k all-in. A larger v1 with multiple modules,
                            integrations, and a customer-facing portal lands between $140k
                            and $320k. A full custom platform with admin, customer-facing
                            app, billing, reporting, and integrations runs $250k to $600k.{" "}
                            <Link
                                href="/blog/custom-crm-development-guide"
                                className="text-sky-400 hover:underline"
                            >
                                Our custom CRM cost guide
                            </Link>{" "}
                            covers a representative custom-CRM scope at this tier.
                        </p>
                        <p>
                            <strong className="text-white">Retainer engagements.</strong>{" "}
                            $4,000 to $12,000 per month for ongoing maintenance, feature
                            development, and platform care. The lower end gets you ~20 hours,
                            the higher end gets you ~60 hours, with a senior engineer on
                            point.
                        </p>
                        <p>
                            <strong className="text-white">Discovery sprints.</strong>{" "}
                            $2,500 to $7,500 fixed-fee for a two-week scoping engagement that
                            produces a wireframed UI, a data model, and a phased estimate. Good
                            shops sell discovery separately so you can decide whether to
                            commit to the build before any code is written.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Industries Atlanta shops know best
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Atlanta has unusual depth in four verticals because of the
                            Fortune 500 anchors that trained the local engineers.
                        </p>
                        <p>
                            <strong className="text-white">Fintech and payments.</strong>{" "}
                            Equifax, Global Payments, NCR, Greenlight, Calendly billing
                            teams — Atlanta has produced more payments-domain engineers per
                            capita than any city east of the Bay Area. If your build
                            involves Stripe, ACH, identity verification, or any
                            payments-adjacent surface, the local talent pool is unusually
                            deep. We&apos;ve published a separate guide on{" "}
                            <Link
                                href="/blog/nextjs-stripe-integration-guide"
                                className="text-sky-400 hover:underline"
                            >
                                Next.js and Stripe integration
                            </Link>{" "}
                            that walks through what good looks like in this domain.
                        </p>
                        <p>
                            <strong className="text-white">
                                Logistics and supply chain.
                            </strong>{" "}
                            UPS plus the entire trucking and rail corridor — Atlanta is the
                            country&apos;s logistics capital, and the engineering shops here have
                            built systems for it. Track-and-trace platforms, dispatch
                            software, route optimization, warehouse management — these are
                            home-court engagements for ATL shops.
                        </p>
                        <p>
                            <strong className="text-white">Healthtech and life sciences.</strong>{" "}
                            CDC, Emory, the CHOA network, and a growing population of
                            digital-health startups have produced a strong healthtech
                            engineering bench. HIPAA, FHIR, and EHR integration work all
                            have credible local shops.
                        </p>
                        <p>
                            <strong className="text-white">
                                Construction and field services.
                            </strong>{" "}
                            Less talked about but increasingly important. The Atlanta-area
                            construction, trades, and field-service market has been a
                            quiet pocket of opportunity for custom software, and several of
                            our own case studies — including{" "}
                            <Link
                                href="/work/northcrest-fence"
                                className="text-sky-400 hover:underline"
                            >
                                a contractor CRM
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/work/contractor-estimating-proposal-engine"
                                className="text-sky-400 hover:underline"
                            >
                                an estimating engine
                            </Link>{" "}
                            — live in this vertical.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        What &quot;Atlanta-based&quot; actually means (and what to verify)
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            &quot;Atlanta-based&quot; is the most marketed and least audited claim in
                            the software services industry. Three patterns to watch for.
                        </p>
                        <p>
                            <strong className="text-white">Pattern 1: The Atlanta address
                                with the offshore team.</strong>{" "}
                            A US sales office in Atlanta with all engineering delivery
                            from an offshore office in another country. This is a perfectly
                            valid model when disclosed up front. It becomes a problem when
                            the website implies the engineering work happens in Atlanta and
                            it does not. Ask where the engineers physically sit.
                        </p>
                        <p>
                            <strong className="text-white">Pattern 2: The Atlanta address
                                with the East-Coast remote team.</strong>{" "}
                            A boutique shop registered in Atlanta with engineers spread
                            across the East Coast working remotely. This is the most common
                            pattern in 2026 and is usually fine — but it is worth knowing
                            whether you can actually get in a room with your team or whether
                            every interaction will be on Zoom.
                        </p>
                        <p>
                            <strong className="text-white">Pattern 3: The actual Atlanta
                                shop.</strong>{" "}
                            US-staffed, US-located engineers, with at least some Atlanta-area
                            presence for in-person sessions. Less common than the
                            marketing suggests but still very much available.
                        </p>
                        <p>
                            For our part, QUANT LAB USA is headquartered in{" "}
                            <Link
                                href="/software-development-macon-ga"
                                className="text-sky-400 hover:underline"
                            >
                                Macon, Georgia
                            </Link>
                            , an hour and a half south of Atlanta, with on-site working
                            sessions available throughout the metro. Our engagement model is
                            transparent about that geography on every scoping call.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Red flags when hiring a Georgia software firm
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Eight years of hiring conversations, condensed into red flags
                            that map to real failure modes I&apos;ve seen.
                        </p>
                        <p>
                            <strong className="text-white">
                                No case studies with named clients.
                            </strong>{" "}
                            Some clients require anonymization; that&apos;s normal. But a shop
                            that has zero named clients is usually either too new to have any
                            or has had too many engagements end badly to use the names.
                        </p>
                        <p>
                            <strong className="text-white">
                                Hourly rate that does not match the rate the engineers earn.
                            </strong>{" "}
                            If the shop&apos;s rate is $90/hour and US-based senior engineers
                            cost $80+/hour fully loaded, something does not add up. Either
                            the engineers are not in the US or the shop is operating at
                            margins that will collapse mid-engagement.
                        </p>
                        <p>
                            <strong className="text-white">No discovery sprint offering.</strong>{" "}
                            Shops that go straight from a sales call to a $200k fixed-fee
                            quote without a paid discovery phase have not done the work to
                            de-risk the build. Discovery sprints exist because real shops
                            have learned that quoting blind goes wrong roughly half the time.
                        </p>
                        <p>
                            <strong className="text-white">
                                Marketing talks about &quot;agile&quot; without specifying anything.
                            </strong>{" "}
                            &quot;Agile development&quot; in 2026 is the software-shop equivalent of
                            a restaurant claiming &quot;fresh ingredients.&quot; If the shop cannot
                            tell you specifically how their iteration cadence works, what
                            demos look like, how they handle scope change, and what their
                            test discipline is, the word is doing no work in the pitch.
                        </p>
                        <p>
                            <strong className="text-white">
                                IP and source code ownership is not explicitly in the contract.
                            </strong>{" "}
                            You should own the source code, the database schema, the
                            deployment configs, and all documentation. Anything else is a
                            future exit ransom.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        A founder&apos;s interview checklist for shortlisting shops
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            When you have three to five Atlanta-area shops on a shortlist,
                            run each one through this checklist. If a shop fails more than
                            two, move on.
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>
                                Show me a case study in our vertical or one close enough to
                                count.
                            </li>
                            <li>Where do your engineers physically sit?</li>
                            <li>
                                Who specifically would be assigned to our project, and what is
                                their tenure at your shop?
                            </li>
                            <li>What is your discovery sprint offering and what does it cost?</li>
                            <li>What is your iteration and demo cadence?</li>
                            <li>What does the contract say about IP and source code ownership?</li>
                            <li>What is your test discipline — coverage, types of tests, who writes them?</li>
                            <li>How do you handle scope change mid-engagement?</li>
                            <li>What does post-launch maintenance look like and what does it cost?</li>
                            <li>Can I talk to two past clients without a sales person in the room?</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Where to take this next
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            If you are an Atlanta-area founder evaluating shops, the most
                            useful follow-ups from here are our{" "}
                            <Link
                                href="/blog/best-custom-software-development-companies-atlanta-2026"
                                className="text-sky-400 hover:underline"
                            >
                                rankings of Atlanta custom software companies
                            </Link>{" "}
                            and our{" "}
                            <Link
                                href="/blog/how-to-choose-a-software-development-company-checklist"
                                className="text-sky-400 hover:underline"
                            >
                                27-point selection checklist
                            </Link>
                            . If you are scoped on the security side, our{" "}
                            <Link
                                href="/blog/best-penetration-testing-companies-georgia-2026"
                                className="text-sky-400 hover:underline"
                            >
                                Georgia penetration testing guide
                            </Link>{" "}
                            covers the same evaluation framework for security shops.
                            Beyond Atlanta, we serve clients in{" "}
                            <Link
                                href="/software-development-savannah-ga"
                                className="text-sky-400 hover:underline"
                            >
                                Savannah
                            </Link>
                            ,{" "}
                            <Link
                                href="/software-development-augusta-ga"
                                className="text-sky-400 hover:underline"
                            >
                                Augusta
                            </Link>
                            , and{" "}
                            <Link
                                href="/software-development-columbus-ga"
                                className="text-sky-400 hover:underline"
                            >
                                Columbus
                            </Link>{" "}
                            statewide.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Coffee in Atlanta, or a Zoom — your call.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            I&apos;m in Atlanta most weeks. If you want to talk about a build,
                            walk through your situation, or just compare notes on the local
                            scene, twenty minutes will tell us whether we&apos;re the right
                            shop for you.
                        </p>
                        <ConsultationCTA
                            label="Book an Atlanta Scoping Call"
                            service="Custom Software"
                            city="Atlanta, GA"
                            source="blog-atlanta-guide"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <h2 className="text-2xl font-bold text-white mb-6">Keep reading</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            {
                                href: "/blog/build-vs-buy-software-2026",
                                title: "Build vs Buy Software",
                                desc: "Decision framework that pairs with the local-shop evaluation here.",
                            },
                            {
                                href: "/services/custom-business-software",
                                title: "Custom Business Software",
                                desc: "Our Next.js custom software development service overview.",
                            },
                            {
                                href: "/work",
                                title: "Case Studies",
                                desc: "Real Atlanta and Southeast builds we have shipped to production.",
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
            </article>
        </main>
    );
}
