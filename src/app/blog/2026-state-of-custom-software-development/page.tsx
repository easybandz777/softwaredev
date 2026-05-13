import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ArrowRight, Check, TrendingUp } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";

const SLUG = "2026-state-of-custom-software-development";
const PUBLISHED = "2026-05-12";

export const metadata: Metadata = articleMetadata({
    title: "2026 State of Custom Software Development: Trends & Predictions",
    description:
        "What changed in custom software development in 2026: AI-augmented engineering, the SaaS unbundling, Stripe Connect everywhere, and the death of cookie-cutter agency work.",
    slug: `blog/${SLUG}`,
    image: "/og-image.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ["Bill Beltz"],
    keywords: ["software development trends 2026", "state of custom software", "ai-augmented engineering"],
});

const faqs = [
    { q: "What changed most in custom software development in 2026?", a: "Three things. AI-augmented engineering moved from novelty to default — every engineer is shipping 30 to 50% more code per week than 18 months ago. The SaaS unbundling accelerated, with founders aggressively replacing vertical SaaS with custom builds when costs cross $30K/year. And Stripe Connect became the assumed integration for any marketplace, regardless of size." },
    { q: "Is AI replacing engineers in 2026?", a: "No. AI is replacing the parts of engineering that were already automatable — boilerplate code, test scaffolding, documentation, simple refactors. Senior engineers using AI tools are shipping faster and shifting effort to design, architecture, and judgment calls. The teams replacing engineers with AI alone are shipping technical debt faster than features." },
    { q: "How much should I budget for custom software in 2026?", a: "An MVP costs $80K to $250K for an MVP and $250K to $800K for a Series A-grade production platform. Costs are 10 to 20% lower than 2024 in real terms thanks to AI-augmented engineering throughput, but quality expectations are higher because the floor of what is possible moved up." },
    { q: "What stacks are winning in 2026?", a: "Next.js plus TypeScript plus Postgres remains the default for web and SaaS. React Native and Expo dominate cross-platform mobile. Python plus FastAPI is the new default for AI-integrated backends. Stripe Connect is the assumed payments layer. The 'choose boring technology' principle is firmly winning over framework-of-the-month." },
    { q: "Should I hire junior engineers in 2026?", a: "Yes, but with senior support and an explicit ramp. The hot take that AI replaces juniors is wrong; the actual pattern is that juniors with AI ramp 30 to 50% faster than juniors without. The mistake is hiring juniors with no senior engineering review — that produces a codebase the team cannot maintain." },
    { q: "Is custom software cheaper or more expensive than SaaS in 2026?", a: "Custom became more cost-competitive relative to SaaS in 2026 because of AI throughput plus aggressive SaaS pricing. The cross-over point where custom pays back vs SaaS shifted from $50K/year to $30K/year for many categories. Founders who used to stay on Salesforce, Zendesk, or Retool until $100K spend are now leaving at $40K." },
    { q: "What software categories will be unbundled fastest?", a: "Internal admin tools (Retool first), customer support consoles, simple CRMs, basic billing operations, marketing automation for B2B. Categories that resist unbundling: complex marketing automation, enterprise ERP, finance and accounting systems with strong audit and reporting needs, anything with a deep professional services moat." },
    { q: "What is the dominant engagement model in 2026?", a: "Hybrid: a fixed-fee MVP build followed by a dedicated team. Pure fixed-fee for everything is fading because customer expectations are too fluid. Pure time-and-materials is fading because founders want predictability. The hybrid model — anchor MVP, then retainer — fits the reality of how product evolves." },
    { q: "Has remote engineering peaked?", a: "Yes, slightly. After five years of remote dominance, the pendulum is swinging back toward distributed but co-located teams. Most software firms run hybrid teams now — 60 to 70% remote with regular in-person sessions for senior strategy work. Fully-remote is still common but no longer growing." },
    { q: "What compliance frameworks are growing fastest?", a: "SOC 2 remains the dominant B2B SaaS requirement. ISO 27001 grew sharply in 2026 as enterprise procurement teams asked for it alongside SOC 2. HIPAA stayed stable. PCI DSS shrank in scope as Stripe Connect absorbed more of the payment-handling responsibility. AI-specific frameworks (ISO 42001) emerged but adoption is early." },
    { q: "What is the biggest risk for software companies in 2026?", a: "Hallucinated code in production. Teams over-trusting AI output without review are shipping bugs faster than they can patch them. The teams that have invested in code review culture, automated testing, and senior engineering judgment are pulling ahead. The teams that have not are accumulating technical debt at AI speed." },
    { q: "What is the 2027 prediction?", a: "Continued consolidation. The middle of the software-services market (mid-market consultancies with 50 to 500 engineers) will compress hardest because AI-augmented small firms are eating their lunch on price and quality. Boutique firms under 30 people and global mega-shops over 1,000 people will both grow. Mid-market gets squeezed." },
];

export default function StateOfSoftwareDevelopment2026Page() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ headline: "2026 State of Custom Software Development: Trends & Predictions", description: "What changed in custom software development in 2026.", datePublished: PUBLISHED, slug: SLUG, image: "https://quantlabusa.dev/og-image.png", author: { name: "Bill Beltz", url: "https://quantlabusa.dev/about" }, section: "Industry" })) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }, { name: "2026 state of custom software", url: `/blog/${SLUG}` }])) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">2026 state of custom software</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">TOFU Trend Report · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        2026 State of Custom Software Development: Trends &amp; Predictions
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        What actually changed in 2026, what is hype, and what the rest of the decade looks like. AI-augmented engineering, the SaaS unbundling, the Stripe Connect default, the death of cookie-cutter agency work, and the consolidation coming for mid-market consultancies.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">Bill Beltz</Link>, founder of QUANT LAB USA INC · Published May 12, 2026
                    </p>
                    <ConsultationCTA label="Talk to Bill About Your Project" service="Custom Business Software" source="blog-state-of-software" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>2026 reshaped custom software development around three trends: AI-augmented engineering raised throughput 30 to 50% but created hallucinated-code risk; the SaaS unbundling accelerated as the build-vs-buy cross-over fell from $50K to $30K of annual SaaS spend; Stripe Connect became the default payments layer for any marketplace. The middle of the software-services market is compressing. Boutique firms and global mega-shops both grow. The mid-market consultancy era is ending.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Every year the trend posts read the same — &quot;AI is transforming everything, the death of X, the rise of Y.&quot; This one is different because it is written from inside the work, not from a market-research conference. I run a software firm. I have shipped 14 case studies this year. The patterns are real.
                        </p>
                        <p>
                            Here is the honest landscape of custom software development in 2026, the predictions I have conviction on, and the predictions I am still skeptical of.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Trend 1: AI-augmented engineering became the default</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The 2024-2025 debate over &quot;will AI replace engineers&quot; is over. AI is the IDE plugin. The actual question is what is changing inside engineering teams.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Senior engineers ship 30 to 50% more code per week than 18 months ago.</li>
                            <li>The work shifted from typing code to reviewing AI-generated code and making judgment calls.</li>
                            <li>Hallucinated code is the new technical debt. Teams without review discipline are accumulating it fast.</li>
                            <li>Junior engineers ramp 30 to 50% faster with AI tooling than without. The doomsday for juniors did not happen.</li>
                            <li>Code review culture got more important, not less.</li>
                        </ul>
                        <p>
                            The teams winning in 2026 invested in the discipline around AI-augmented engineering — review processes, test coverage, architectural ownership. The teams losing in 2026 thought AI would replace those disciplines.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Trend 2: The SaaS unbundling accelerated</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The build-vs-buy math got more attractive for &quot;build&quot; in 2026. Two reasons: custom software got cheaper to build (AI throughput), and SaaS got more expensive (aggressive list-price increases, mandatory add-ons, per-seat models scaling badly).
                        </p>
                        <p>
                            Categories getting unbundled fastest:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Internal admin tools — Retool replaced by custom builds at $25K+ annual spend</li>
                            <li>Simple CRMs — Salesforce replaced by custom for orgs under 100 seats</li>
                            <li>Customer support consoles — Zendesk supplemented or replaced by custom</li>
                            <li>Basic billing ops — Recurly replaced by custom Stripe integrations</li>
                            <li>Light marketing automation — Pardot replaced by custom workflows</li>
                        </ul>
                        <p>
                            See our breakdown in <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">build vs buy software (2026)</Link> and <Link href="/blog/custom-crm-vs-salesforce-vs-hubspot-2026" className="text-sky-400 hover:underline">custom CRM vs Salesforce vs HubSpot (2026)</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Trend 3: Stripe Connect is the default for everything</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Anything that processes payments for someone else (services, marketplaces, platforms) is on Stripe Connect by default in 2026. PayPal lost share. Square stayed flat. The decision is no longer &quot;which payments&quot; — it is &quot;which Stripe product.&quot;
                        </p>
                        <p>
                            See our marketplace architecture guide: <Link href="/blog/stripe-connect-marketplace-architecture" className="text-sky-400 hover:underline">Stripe Connect for Marketplaces</Link> and the <Link href="/blog/nextjs-stripe-integration-guide" className="text-sky-400 hover:underline">Next.js Stripe integration guide</Link>. Our <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe integration service</Link> covers the bulk of the work we do for payment-handling builds.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Mid-post: build with us</h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">Planning a 2026 build? Free 30-minute scoping call. We will help you frame the work for the year ahead.</p>
                        <ConsultationCTA label="Book the Scoping Call" service="Custom Business Software" source="blog-state-of-software-mid" />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Trend 4: The Next.js + Postgres consolidation</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Next.js plus Postgres plus TypeScript is the assumed stack for web and SaaS in 2026. The framework-of-the-month era is over. Founders who pick exotic stacks (Remix, Sveltekit, custom Rust APIs) end up paying a 20 to 40% velocity penalty because the hiring market and the AI tooling are tuned for the boring stack.
                        </p>
                        <p>
                            What is winning by category in 2026:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Web and SaaS:</strong> Next.js + TypeScript + Postgres + Stripe</li>
                            <li><strong>Mobile:</strong> React Native + Expo (web parity is the win)</li>
                            <li><strong>AI-integrated backends:</strong> Python + FastAPI (LLM ecosystem dominates here)</li>
                            <li><strong>Real-time apps:</strong> Next.js + Pusher/Ably/Liveblocks</li>
                            <li><strong>Embedded analytics:</strong> ClickHouse + Postgres + Grafana</li>
                            <li><strong>Background workers:</strong> Inngest, Trigger.dev, or BullMQ on Redis</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Trend 5: Mid-market consultancy compression</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The most-affected segment of the software-services market in 2026 is the mid-market consultancy (50 to 500 engineers, $20M to $200M revenue). They are getting squeezed from two sides.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>From below: AI-augmented boutiques with 10 to 30 engineers ship the same throughput at 40 to 60% lower cost.</li>
                            <li>From above: global mega-shops (1,000+ engineers) lock in enterprise procurement contracts the boutiques cannot win.</li>
                        </ul>
                        <p>
                            The mid-market consultancy era of $250K to $1M six-month engagements is shrinking. Founders who used to default to these firms are now picking boutiques for projects under $500K and Big-4 for projects over $2M.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Trend 6: Cybersecurity moves to procurement default</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Every B2B SaaS prospect now expects SOC 2 evidence before signing a contract over $50K/year. Five years ago this was a Series B problem. Three years ago this was a Series A problem. In 2026 this is a seed-stage problem.
                        </p>
                        <p>
                            The implication for founders: budget $20K to $40K for SOC 2 readiness from day one. See <Link href="/blog/cybersecurity-services-for-saas-startups-2026" className="text-sky-400 hover:underline">cybersecurity services for SaaS startups (2026)</Link> and the <Link href="/blog/soc2-pentest-prep-guide-2026" className="text-sky-400 hover:underline">SOC 2 pentest prep guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Cost shifts in 2026</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Engagement</th>
                                    <th className="px-4 py-3 border-b border-white/10">2024 range</th>
                                    <th className="px-4 py-3 border-b border-white/10">2026 range</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">MVP (12-week)</td><td className="px-4 py-3">$120K to $250K</td><td className="px-4 py-3">$80K to $200K</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Series A platform build</td><td className="px-4 py-3">$300K to $1M</td><td className="px-4 py-3">$250K to $800K</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Custom CRM</td><td className="px-4 py-3">$80K to $400K</td><td className="px-4 py-3">$60K to $300K</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Web app pentest</td><td className="px-4 py-3">$12K to $40K</td><td className="px-4 py-3">$10K to $40K</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Stripe Connect marketplace</td><td className="px-4 py-3">$150K to $500K</td><td className="px-4 py-3">$120K to $400K</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Internal admin platform</td><td className="px-4 py-3">$120K to $300K</td><td className="px-4 py-3">$90K to $250K</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        Cost compression is real but uneven. Engineering throughput went up; senior judgment is more valuable than ever; the floor of quality went up. Run your own numbers with <Link href="/calculators/build-vs-buy" className="text-sky-400 hover:underline">the build vs buy calculator</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">2027 predictions I have conviction on</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>AI compliance frameworks become required.</strong> ISO 42001 and equivalents go from emerging to expected.</li>
                            <li><strong>The vertical-SaaS unbundling continues.</strong> Build-vs-buy cross-over falls below $25K/year for many categories.</li>
                            <li><strong>Mid-market consultancies consolidate or fold.</strong> 20 to 30% of the segment exits.</li>
                            <li><strong>Stripe Tax becomes mandatory at $1M+ marketplace volume.</strong> Compliance becomes the moat.</li>
                            <li><strong>AI-specific pentest engagements become standard.</strong> Prompt injection, model jailbreak, RAG corpus exfiltration.</li>
                            <li><strong>Co-located teams keep growing.</strong> Hybrid 60/40 becomes the norm, fully remote shrinks slightly.</li>
                            <li><strong>The boring-tech stack consolidates further.</strong> Next.js + Postgres + Stripe + Datadog = 70% of new B2B SaaS in 2027.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">2027 predictions I am skeptical of</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>Agentic engineering replaces engineers.</strong> Still a 5+ year horizon.</li>
                            <li><strong>The death of full-time engineering jobs.</strong> Mostly hype.</li>
                            <li><strong>The end of remote engineering.</strong> Hybrid yes, fully co-located no.</li>
                            <li><strong>The dominance of GraphQL over REST.</strong> Both are stable; REST remains dominant.</li>
                            <li><strong>The rise of edge-everywhere.</strong> Edge has a place; data-layer-on-edge has tradeoffs that are not solved.</li>
                            <li><strong>The end of relational databases.</strong> Postgres just keeps eating.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">What this means for founders in 2026</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Three concrete implications:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>Spend less on tooling, more on engineering judgment.</strong> The boring stack is winning; the senior people who know the boring stack are the bottleneck.</li>
                            <li><strong>Re-evaluate SaaS bills every year.</strong> The build-vs-buy cross-over moved. Tools that were correctly bought in 2023 may now be ripe for unbundling.</li>
                            <li><strong>Default to senior-led, AI-augmented engineering.</strong> Cheaper to ship, faster to ship, and the only model that produces maintainable codebases at AI speed.</li>
                        </ol>
                        <p>
                            For analogous engagement patterns, see <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">the J5 Sales OS case study</Link>, <Link href="/work/hobbspeak" className="text-sky-400 hover:underline">the Hobbspeak case study</Link>, and our broader <Link href="/blog/atlanta-software-development-guide-2026" className="text-sky-400 hover:underline">Atlanta software development guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Frequently asked questions</h2>
                    <div className="space-y-6">
                        {faqs.map((item) => (
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
                            { href: "/services/custom-crm-development", label: "Custom CRM Development" },
                            { href: "/services/stripe-integration", label: "Stripe Integration service" },
                            { href: "/services/ai-integration-services", label: "AI Integration Services" },
                            { href: "/blog/custom-crm-development-guide", label: "Custom CRM development guide (pillar)" },
                            { href: "/blog/build-vs-buy-software-2026", label: "Build vs buy software (2026)" },
                            { href: "/blog/atlanta-software-development-guide-2026", label: "Atlanta software development guide" },
                            { href: "/blog/stripe-connect-marketplace-architecture", label: "Stripe Connect marketplace architecture" },
                            { href: "/blog/cybersecurity-services-for-saas-startups-2026", label: "Cybersecurity for SaaS (2026)" },
                            { href: "/work/j5-sales-os", label: "Case study — J5 Sales OS" },
                            { href: "/work/hobbspeak", label: "Case study — Hobbspeak" },
                            { href: "/software-development-atlanta-ga", label: "Atlanta software development" },
                            { href: "/software-development-austin-tx", label: "Austin software development" },
                            { href: "/calculators/build-vs-buy", label: "Build vs buy calculator" },
                            { href: "/resources/build-vs-buy-playbook", label: "Build vs buy playbook (free)" },
                            { href: "/contact", label: "Talk to Bill about your 2026 build" },
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Build the right thing in 2026.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute scoping call. We will help you frame the work for the current landscape, not the one from two years ago.
                        </p>
                        <ConsultationCTA label="Book the Scoping Call" service="Custom Business Software" source="blog-state-of-software-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill directly at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
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
