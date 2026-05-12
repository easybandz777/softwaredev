import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ArrowRight, Check, MapPin, Building2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Best Custom Software Development Companies in Atlanta (2026)",
    description:
        "An honest 2026 ranking of Atlanta custom software firms — criteria, specializations, pricing, and the questions to ask every shortlisted shop.",
    alternates: { canonical: "https://quantlabusa.dev/blog/best-custom-software-development-companies-atlanta-2026" },
    openGraph: {
        title: "Best Custom Software Development Companies in Atlanta (2026)",
        description:
            "A founder-written 2026 guide with criteria, specializations, pricing, and shortlist questions.",
        url: "https://quantlabusa.dev/blog/best-custom-software-development-companies-atlanta-2026",
        type: "article",
        publishedTime: "2026-05-12",
        authors: ["William Beltz"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Custom Software Development Companies in Atlanta (2026)",
    description:
        "An honest 2026 ranking of Atlanta custom software firms with criteria, specializations, and shortlist questions.",
    image: "https://quantlabusa.dev/og-image.png",
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
    author: {
        "@type": "Person",
        name: "William Beltz",
        url: "https://quantlabusa.dev/about",
    },
    publisher: {
        "@type": "Organization",
        "@id": "https://quantlabusa.dev/#organization",
        name: "QUANT LAB USA INC",
        url: "https://quantlabusa.dev",
        logo: { "@type": "ImageObject", url: "https://quantlabusa.dev/logo-transparent.png" },
    },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://quantlabusa.dev/blog/best-custom-software-development-companies-atlanta-2026",
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
            name: "Best Custom Software Development Companies in Atlanta (2026)",
            item: "https://quantlabusa.dev/blog/best-custom-software-development-companies-atlanta-2026",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does custom software development actually cost in Atlanta in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Typical ranges: $25K to $80K for an MVP, $80K to $200K for a v1 production app, $200K and up for enterprise integration work. Atlanta hourly rates run $150 to $250 for mid-market firms and $200 to $350 for senior boutiques.",
            },
        },
        {
            "@type": "Question",
            name: "Should I hire an Atlanta-based firm or go offshore?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Offshore wins on hourly rate, loses on velocity-per-dollar once communication overhead and rework are honest. For projects under $150K, an onshore Atlanta or Macon firm usually ships faster and cheaper net. For staff augmentation past six figures of build time, offshore can pencil out if you have a strong in-house lead.",
            },
        },
        {
            "@type": "Question",
            name: "How do I verify a shop is actually Atlanta-based?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ask for a Georgia secretary of state entity record, a physical Atlanta meeting address, and a 30-minute in-person coffee. Many firms list Atlanta on their site but staff entirely offshore. That is not always bad, but it changes the value proposition and you should know going in.",
            },
        },
        {
            "@type": "Question",
            name: "What stack should an Atlanta shop be working in?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Next.js, TypeScript, PostgreSQL, and a modern hosting layer (Vercel, AWS, or Fly.io) is the 2026 default for new builds. Shops still defaulting to .NET Framework, jQuery, or PHP for greenfield work in 2026 are a yellow flag — not always wrong, but ask why.",
            },
        },
    ],
};

export default function BestAtlantaSoftwareCompaniesPage() {
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
                        <li className="text-gray-300">Best Atlanta software companies 2026</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">BOFU Local Guide · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Best Custom Software Development Companies in Atlanta (2026)
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        A founder-written guide to the Atlanta custom software market — how to evaluate shops, what specializations exist, real pricing ranges, and the 12 questions that filter the bottom 80% of vendors before you waste discovery hours.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">William Beltz</Link>, founder of QUANT LAB USA INC · Published May 12, 2026
                    </p>
                    <ConsultationCTA label="Get an Atlanta-based Quote" service="Custom Software" city="Atlanta, GA" source="blog-atlanta-best" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Most "best of Atlanta" software lists are link-farm content with no real ranking criteria, written by SEO agencies that have never built production software for a paying client. This is not that. We run <Link href="/" className="text-sky-400 hover:underline">QUANT LAB USA INC</Link> out of Macon with an Atlanta footprint, and I am writing this with a clear conflict of interest. I will disclose where we fit, score ourselves the same way I score competitors, and tell you when another shop is the better choice for your project.
                        </p>
                        <p>
                            Atlanta has one of the best-priced custom software markets in the US. Senior talent costs 30% less than San Francisco, the time-zone overlap with every major business hub is friendly, and the local fintech and logistics ecosystem means most experienced engineers have shipped at scale. The catch is that the firm marketplace is fragmented — boutique founders, mid-market shops, offshore-staffed "Atlanta" firms, and enterprise consultancies all compete in the same Google results.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">How we ranked (and our disclosure)</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            I used five criteria, scored 1 to 5, and weighted them. The criteria are the same ones I would use if I were on the buying side, evaluating against my own shop.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Production-grade portfolio</strong> (weight 25%): live deployed work you can click on, not screenshots</li>
                            <li><strong>Founder/senior involvement</strong> (weight 20%): who actually writes the code and runs the calls</li>
                            <li><strong>Modern stack discipline</strong> (weight 20%): Next.js / TypeScript / Postgres as the 2026 baseline</li>
                            <li><strong>Pricing transparency</strong> (weight 20%): fixed scope or honest hourly with caps</li>
                            <li><strong>Local accessibility</strong> (weight 15%): real Atlanta office hours, not a brass-plate</li>
                        </ul>
                        <p>
                            Disclosure: <Link href="/" className="text-sky-400 hover:underline">QUANT LAB USA INC</Link> is HQ'd in Macon (about 80 minutes south of Atlanta) and serves Atlanta clients regularly. We list ourselves below with the same criteria applied. I told you it was a conflict — now you know.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Top shops for SaaS MVPs in Atlanta</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            If you are a founder with a $40K to $120K MVP budget, you want a boutique shop where the founder still codes. The Atlanta market has roughly a dozen of these. The shortlist I keep coming back to includes Big Nerd Ranch (legacy, Atlanta-rooted, mid-market scope these days), Hypepotamus-adjacent boutiques, and a tier of solo-founder shops working out of <Link href="/software-development-atlanta-ga" className="text-sky-400 hover:underline">Atlanta Tech Village and Tech Square</Link>.
                        </p>
                        <p>
                            QUANT LAB USA sits in this tier with a Macon address. We ship MVPs in 6 to 10 weeks with the founder writing most of the code, and we publish our pricing ranges publicly. See <Link href="/work/hobbspeak" className="text-sky-400 hover:underline">Hobbspeak</Link> for a recent MVP-class build and <Link href="/work/contractor-estimating-proposal-engine" className="text-sky-400 hover:underline">the contractor estimating engine</Link> for an example of a fast-shipping internal tool.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Top shops for enterprise + integration work</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            For $200K-plus engagements with SOC 2 requirements, legacy ERP integration, or regulated industries, the boutique tier hits scale limits. Atlanta has strong representation in this tier — Slalom, North Highland, and a number of Salesforce-specialist firms have deep local benches.
                        </p>
                        <p>
                            QUANT LAB USA does not compete here as a prime contractor. We partner into this tier as a specialist for the harder integration work — Stripe, custom workflows, security testing — when the prime needs a senior partner. If you are scoping a $500K-plus engagement, hire a Slalom-tier shop and ask them about <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">specialist subcontractors</Link> for the parts they would otherwise junior-staff.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Top shops for cybersecurity + custom software combined</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            This is a rare specialization. Most software firms outsource security to a separate pentest vendor, and most pentest firms cannot write production code. The handful of Atlanta shops that do both well are usually smaller boutiques that came out of a former dev team at one of the big consultancies.
                        </p>
                        <p>
                            QUANT LAB USA explicitly competes here. We build the software and we run the <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration testing</Link> on it. That is the differentiator and the reason a third of our pipeline is referrals from companies who got tired of arguing between their dev shop and their pentest vendor. See the <Link href="/work/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory pentest case study</Link> for the engagement style.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Tier 2 boutique honorable mentions</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The honorable-mention tier is mostly 2 to 8 person teams that do specific niches well: WordPress-and-WooCommerce-only shops, agency partners for one specific platform, fractional CTO operations. They are excellent for the right scope and frustrating for the wrong one. The filter: ask what they will refuse to build. Shops that will build anything are the ones to avoid.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Atlanta vs Macon vs Savannah price comparison</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Location</th>
                                    <th className="px-4 py-3 border-b border-white/10">Senior hourly rate</th>
                                    <th className="px-4 py-3 border-b border-white/10">Typical MVP fixed-fee</th>
                                    <th className="px-4 py-3 border-b border-white/10">v1 production app</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Atlanta, GA</td><td className="px-4 py-3">$175 to $275</td><td className="px-4 py-3">$45K to $110K</td><td className="px-4 py-3">$95K to $220K</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3"><Link href="/software-development-macon-ga" className="text-sky-400 hover:underline">Macon, GA</Link></td><td className="px-4 py-3">$140 to $220</td><td className="px-4 py-3">$30K to $80K</td><td className="px-4 py-3">$70K to $160K</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3"><Link href="/software-development-savannah-ga" className="text-sky-400 hover:underline">Savannah, GA</Link></td><td className="px-4 py-3">$150 to $230</td><td className="px-4 py-3">$32K to $90K</td><td className="px-4 py-3">$75K to $175K</td></tr>
                                <tr className="bg-[#0d1526]/60"><td className="px-4 py-3 font-semibold text-white">Delta</td><td className="px-4 py-3 font-semibold text-white">~20% lower outside Atlanta</td><td className="px-4 py-3 font-semibold text-white">~25% lower</td><td className="px-4 py-3 font-semibold text-white">~25% lower</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        The 25% spread is real and it is mostly office overhead and senior-engineer location pay-bumps. Quality is comparable across the Georgia market — the senior engineers move freely between cities, and most clients work remotely with their build partner regardless of which city they are in.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">12 questions to ask every shortlisted shop</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Send the same 12 questions to every shop you shortlist. Score the answers. The shop with the highest score for your specific situation wins — not the prettiest deck.
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Who specifically will write the code on my project (titles plus years of experience)?</li>
                            <li>What is your current production stack default, and why?</li>
                            <li>Can I see three live URLs of production work you have shipped in the past 12 months?</li>
                            <li>Do you offer fixed-fee per phase, hourly with a cap, or T&amp;M?</li>
                            <li>Who owns the source code at end of engagement?</li>
                            <li>What does your handoff look like (repo, docs, deployment access, runbooks)?</li>
                            <li>How do you handle scope changes mid-build?</li>
                            <li>What is your post-launch support model and pricing?</li>
                            <li>How do you handle security testing — in-house, partner, or out of scope?</li>
                            <li>Show me a sample of weekly progress reporting from a current client.</li>
                            <li>How do you decide what to push back on (i.e., what will you refuse to build)?</li>
                            <li>If we hate each other in week 4, what does the exit clause look like?</li>
                        </ol>
                        <p>
                            If a shop cannot answer 10 of these clearly in a 30-minute call, they are not ready for your build. Move on.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Why founders pick QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The honest pitch: founder-led from quote to handoff. I (Bill Beltz) write most of the code, run every call, and own the relationship. Our stack is Next.js, TypeScript, and PostgreSQL — the same stack a senior Atlanta engineer would use if they left their day job to freelance. Pricing is fixed-fee per phase, published on the <Link href="/services" className="text-sky-400 hover:underline">services page</Link>. Source code is yours from day one.
                        </p>
                        <p>
                            We also run penetration tests on the software we build. That means the dev team and the security team are the same team, and the security findings get fixed inside the same sprint instead of bouncing between two vendors. See <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">our pentest service</Link> and the <Link href="/work/active-directory-pentest" className="text-sky-400 hover:underline">AD pentest case study</Link>.
                        </p>
                        <p>
                            Recent Atlanta-area work in production: <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link>, <Link href="/work/northcrest-fence" className="text-sky-400 hover:underline">Northcrest Fence</Link>, <Link href="/work/bridgepointe-painting" className="text-sky-400 hover:underline">Bridgepointe Painting</Link>, and <Link href="/work/motorcycle-shop-ops-platform" className="text-sky-400 hover:underline">a motorcycle shop ops platform</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Where we serve</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Georgia-based engineering team with a national client base. Discovery and build run remotely by default; in-person sessions in Atlanta are easy to schedule.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {[
                            { slug: "atlanta-ga", city: "Atlanta", state: "GA" },
                            { slug: "macon-ga", city: "Macon", state: "GA" },
                            { slug: "augusta-ga", city: "Augusta", state: "GA" },
                            { slug: "savannah-ga", city: "Savannah", state: "GA" },
                            { slug: "columbus-ga", city: "Columbus", state: "GA" },
                            { slug: "charlotte-nc", city: "Charlotte", state: "NC" },
                            { slug: "nashville-tn", city: "Nashville", state: "TN" },
                            { slug: "miami-fl", city: "Miami", state: "FL" },
                        ].map((c) => (
                            <Link
                                key={c.slug}
                                href={`/software-development-${c.slug}`}
                                className="group flex items-center justify-between rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 transition-all hover:border-sky-400/30 hover:bg-[#0d1526]"
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{c.city}, {c.state}</span>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">FAQ</h2>
                    <div className="space-y-6">
                        {[
                            { q: "What does custom software development actually cost in Atlanta in 2026?", a: "Typical ranges: $25K to $80K for an MVP, $80K to $200K for a v1 production app, $200K and up for enterprise integration work. Atlanta hourly rates run $150 to $250 for mid-market firms and $200 to $350 for senior boutiques." },
                            { q: "Should I hire an Atlanta-based firm or go offshore?", a: "Offshore wins on hourly rate, loses on velocity-per-dollar once communication overhead and rework are honest. For projects under $150K, an onshore Atlanta or Macon firm usually ships faster and cheaper net. For staff augmentation past six figures of build time, offshore can pencil out if you have a strong in-house lead." },
                            { q: "How do I verify a shop is actually Atlanta-based?", a: "Ask for a Georgia secretary of state entity record, a physical Atlanta meeting address, and a 30-minute in-person coffee. Many firms list Atlanta on their site but staff entirely offshore. That is not always bad, but it changes the value proposition and you should know going in." },
                            { q: "What stack should an Atlanta shop be working in?", a: "Next.js, TypeScript, PostgreSQL, and a modern hosting layer (Vercel, AWS, or Fly.io) is the 2026 default for new builds. Shops still defaulting to .NET Framework, jQuery, or PHP for greenfield work in 2026 are a yellow flag — not always wrong, but ask why." },
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
                            { href: "/services/penetration-testing", label: "Penetration Testing service" },
                            { href: "/software-development-atlanta-ga", label: "Software development in Atlanta, GA" },
                            { href: "/software-development-macon-ga", label: "Software development in Macon, GA" },
                            { href: "/work/j5-sales-os", label: "Case study — J5 Sales OS custom CRM" },
                            { href: "/work/active-directory-pentest", label: "Case study — Active Directory pentest" },
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get a real Atlanta quote.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute scoping call. Founder-led from the first message. We will tell you honestly whether we are the right fit — and if not, we will tell you which Atlanta shop is.
                        </p>
                        <ConsultationCTA label="Book a Scoping Call" service="Custom Software" city="Atlanta, GA" source="blog-atlanta-best-cta" />
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
