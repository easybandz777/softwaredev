import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { ArrowRight, Check, Globe } from "lucide-react";

const SLUG = "gdpr-for-us-saas-companies-2026";
const TITLE = "GDPR for US SaaS Companies (2026): An Engineer's Guide";
const DESCRIPTION =
    "When GDPR applies to US SaaS companies in 2026, the data subject rights you must support, DPAs and subprocessors, and the engineering implications of doing it right.";
const PUBLISHED_ISO = "2026-06-03";

export const metadata: Metadata = articleMetadata({
    title: TITLE,
    description: DESCRIPTION,
    slug: `/blog/${SLUG}`,
    image: "/og-security.png",
    imageAlt: "GDPR for US SaaS companies engineering guide 2026",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: PUBLISHED_ISO,
    authors: ["Bill Beltz"],
    keywords: [
        "GDPR US SaaS",
        "GDPR for US companies",
        "data subject rights",
        "data processing agreement",
        "GDPR engineering",
    ],
});

const faqItems = [
    {
        q: "When does GDPR apply to a US company?",
        a: "GDPR reaches a US company when it offers goods or services to people in the EU or EEA, or monitors their behavior — even with no EU office and no euros changing hands. A free signup form that EU residents can use, EU-targeted marketing, or analytics that track EU visitors can all bring you in scope. The trigger is processing the personal data of people in the EU, not where your servers or your incorporation sit.",
    },
    {
        q: "What is the difference between a controller and a processor?",
        a: "A controller decides why and how personal data is processed; a processor handles data on the controller's behalf. Most B2B SaaS act as a processor for their customers' data and a controller for their own data (employees, prospects, their own account holders). Your obligations differ by role, and your contracts must state which hat you wear for which data.",
    },
    {
        q: "Which data subject rights does my software need to support?",
        a: "Build for access (export a copy of someone's data), rectification (correct it), erasure (the right to be forgotten), restriction, data portability (machine-readable export), and objection. Operationally you generally have one month to respond. The engineering implication is that you need to locate, export, and delete a single person's data across your primary database, backups, logs, caches, and every subprocessor — which is hard to bolt on later.",
    },
    {
        q: "What is a Data Processing Agreement (DPA) and do I need one?",
        a: "A DPA is the contract required under Article 28 between a controller and a processor. If you process personal data for your customers, you sign DPAs with them (you as processor), and you sign DPAs downstream with every subprocessor that touches that data — your cloud host, email provider, analytics, error tracker, and so on. You also keep a public, current list of subprocessors. Missing DPAs is one of the most common gaps we find.",
    },
    {
        q: "Can a US SaaS legally transfer EU personal data to the United States?",
        a: "Yes, with a valid transfer mechanism. The common routes in 2026 are the EU-US Data Privacy Framework (for certified US organizations) and Standard Contractual Clauses backed by a transfer impact assessment. The mechanism belongs in your DPA. This is a legal determination — confirm your specific approach with privacy counsel rather than assuming a default.",
    },
    {
        q: "What are the engineering implications of GDPR for SaaS?",
        a: "Five big ones: a data inventory so you know what personal data lives where; deletion and export pipelines that span database, backups, logs, and subprocessors; consent and preference management for cookies and marketing; data minimization and retention windows enforced in code; and breach-detection plus logging good enough to meet the 72-hour notification clock. Privacy by design means building these in, not retrofitting them.",
    },
    {
        q: "How fast must I report a personal data breach under GDPR?",
        a: "A controller must notify the relevant supervisory authority without undue delay and where feasible within 72 hours of becoming aware of a personal data breach that poses a risk to individuals. A processor must notify its controller without undue delay. That clock only works if your logging, alerting, and incident response are already in place — which is why detection engineering matters as much as the paperwork.",
    },
];

const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "GDPR for US SaaS Companies", url: `/blog/${SLUG}` },
];

const articleLd = articleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED_ISO,
    image: "https://quantlabusa.dev/og-security.png",
    slug: SLUG,
    section: "Compliance & Security",
    keywords: ["GDPR", "US SaaS", "data subject rights", "DPA", "data privacy"],
});
const breadcrumbLd = breadcrumbSchema(breadcrumbItems, `/blog/${SLUG}`);
const faqLd = faqSchema(faqItems);

export default function GdprForUsSaasPage() {
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
                        <li className="text-gray-300">GDPR for US SaaS companies</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Globe className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">MOFU Compliance Guide · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        GDPR for US SaaS Companies: An Engineer&apos;s Guide
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        You do not need an EU office to be on the hook for GDPR. Here is when the regulation reaches a US SaaS, the data subject rights your software has to support, how DPAs and subprocessors work, and the engineering you need to build to back it all up.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">Bill Beltz</Link>, founder of QUANT LAB USA INC · Published June 3, 2026
                    </p>
                    <ConsultationCTA label="Talk to a Privacy-Aware Engineer" service="SaaS Platform Development" source="blog-gdpr-us-saas" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer: does GDPR apply to my US SaaS?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>If people in the EU or EEA can use your product, or you track their behavior, GDPR likely applies — regardless of where you are incorporated or hosted. You will need a lawful basis for processing, signed Data Processing Agreements with customers and every subprocessor, a current public subprocessor list, and software that can find, export, and delete one person&apos;s data across your database, backups, logs, and vendors within about a month. You also need detection and incident response fast enough to hit the 72-hour breach-notification clock. The engineering is the hard part; build it in rather than bolting it on.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-xl border border-amber-400/20 bg-amber-500/5 p-5 text-sm text-amber-100/90 leading-relaxed">
                        <strong>Not legal advice.</strong> QUANT LAB USA is a software engineering and cybersecurity firm, not a law firm. GDPR applicability, lawful bases, and cross-border transfer mechanisms are legal determinations. This article is engineering and operational guidance for building a product that can comply; confirm your specific obligations with qualified privacy counsel.
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Most US founders assume GDPR is a European problem. Then a German prospect sends a security and privacy questionnaire asking for a signed DPA and a subprocessor list, and the project stalls. At <Link href="/" className="text-sky-400 hover:underline">QUANT LAB USA</Link> we treat GDPR as an architecture concern: the rights are easy to promise and hard to engineer, so we build the plumbing early.
                        </p>
                        <p>
                            Related background: our <Link href="/blog/hipaa-compliant-saas-architecture" className="text-sky-400 hover:underline">HIPAA-compliant SaaS architecture guide</Link> covers many of the same data-handling patterns from the healthcare angle.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">When GDPR reaches a US company</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            GDPR has extraterritorial scope. A US company is generally caught when it does either of the following with the personal data of people located in the EU or EEA:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Offers goods or services</strong> to them — even free ones. Pricing in euros, an EU-language site, or EU-targeted ads are strong signals, but EU users simply signing up can be enough.</li>
                            <li><strong>Monitors their behavior</strong> — analytics, tracking pixels, behavioral profiling, and similar.</li>
                        </ul>
                        <p>
                            What does <em>not</em> get you off the hook: having no EU entity, hosting only in US regions, or never invoicing an EU customer. The hook is the data, not the corporate structure. If EU residents can meaningfully use your SaaS, assume you are in scope until counsel tells you otherwise.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Controller vs processor: which hat are you wearing?</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Your obligations depend on your role for a given dataset, and most SaaS companies wear both hats at once:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Processor</strong> for your customers&apos; end-user data. You process it on their instructions; they are the controller. This is the typical B2B SaaS posture.</li>
                            <li><strong>Controller</strong> for your own data — your marketing leads, your account holders&apos; admin profiles, your employees. You decide why and how it is processed.</li>
                        </ul>
                        <p>
                            Getting this mapping right drives your contracts: as a processor you sign your customers&apos; DPAs; as a controller you owe your own privacy notice and lawful basis. Many disputes start because a company never decided which role applied to which data.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The data subject rights — and what each demands in code</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Right</th>
                                    <th className="px-4 py-3 border-b border-white/10">What the user can ask for</th>
                                    <th className="px-4 py-3 border-b border-white/10">Engineering implication</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Access</td><td className="px-4 py-3">A copy of their data</td><td className="px-4 py-3">A reliable per-subject export across all stores</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Rectification</td><td className="px-4 py-3">Correct inaccurate data</td><td className="px-4 py-3">Editable fields + propagation to derived data</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Erasure</td><td className="px-4 py-3">Delete their data</td><td className="px-4 py-3">Cascade delete across DB, logs, backups, subprocessors</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Restriction</td><td className="px-4 py-3">Pause processing</td><td className="px-4 py-3">A flag your code honors everywhere</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Portability</td><td className="px-4 py-3">A machine-readable export</td><td className="px-4 py-3">Structured JSON/CSV export endpoint</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Objection</td><td className="px-4 py-3">Opt out of certain processing</td><td className="px-4 py-3">Preference center wired into pipelines</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        You generally have one month to respond. The painful part is erasure: deleting one person everywhere — primary database, read replicas, search indexes, caches, object storage, analytics, error tracker, email tool — means you need a data map and deletion fan-out built in advance.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">DPAs, subprocessors, and the contract chain</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Article 28 requires a Data Processing Agreement between controller and processor. In practice that means a chain of contracts:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Upstream:</strong> you sign your customers&apos; DPAs as their processor.</li>
                            <li><strong>Downstream:</strong> you sign DPAs with every subprocessor that touches personal data — cloud host, database provider, email, analytics, error tracking, support tooling, AI vendors.</li>
                            <li><strong>Transparency:</strong> you maintain a current, public list of subprocessors and a way to notify customers of changes.</li>
                            <li><strong>Transfers:</strong> cross-border data movement (EU to US) needs a valid mechanism — the EU-US Data Privacy Framework or Standard Contractual Clauses with a transfer impact assessment — referenced in the DPA.</li>
                        </ul>
                        <p>
                            Missing downstream DPAs is one of the most common gaps we find in audits. Every vendor in the personal-data path needs one, the same way every PHI vendor needs a BAA under HIPAA.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Engineering implications: privacy by design</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            GDPR&apos;s Article 25 calls for &ldquo;data protection by design and by default.&rdquo; Translated into a SaaS build, that is concrete engineering work:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>Data inventory and mapping.</strong> Know every place personal data lives, including logs, backups, and third parties. You cannot honor erasure for data you have not catalogued.</li>
                            <li><strong>Deletion and export pipelines.</strong> One job that fans out a per-subject delete or export across all stores and subprocessors, with an audit trail.</li>
                            <li><strong>Consent and preference management.</strong> A real cookie consent and marketing preference system, captured with timestamps, honored in code.</li>
                            <li><strong>Data minimization and retention.</strong> Collect only what you use; enforce retention windows with scheduled purges, not manual cleanup.</li>
                            <li><strong>Pseudonymization and encryption.</strong> Separate identifiers from sensitive attributes where practical; encrypt at rest and in transit.</li>
                            <li><strong>Logging that does not leak.</strong> Redact personal data at the application boundary so it does not end up in third-party logs without a DPA — the same discipline we describe for PHI.</li>
                        </ol>
                        <p>
                            Build these on tenant-isolated foundations. Our <Link href="/blog/building-multi-tenant-saas-postgres-rls" className="text-sky-400 hover:underline">multi-tenant SaaS with Postgres RLS guide</Link> shows how row-level security keeps one customer&apos;s personal data away from another&apos;s.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The 72-hour breach clock is an engineering problem</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            When a personal data breach poses a risk to individuals, a controller must notify the supervisory authority without undue delay and, where feasible, within 72 hours of becoming aware. A processor must tell its controller without undue delay. You cannot meet that clock with paperwork alone — you need to <em>detect</em> the breach.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Centralized, retained audit logs with anomaly alerting.</li>
                            <li>A written incident response plan with defined severities and an incident commander.</li>
                            <li>Notification templates prepared in advance.</li>
                            <li>An annual tabletop exercise so the team has run the drill before it is real.</li>
                        </ul>
                        <p>
                            This is the same detection-and-response backbone that supports SOC 2 and ISO 27001. See <Link href="/blog/cybersecurity-services-for-saas-startups-2026" className="text-sky-400 hover:underline">cybersecurity services for SaaS startups</Link>.
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
                            { href: "/services/saas-platform-development", label: "SaaS Platform Development service" },
                            { href: "/services/custom-business-software", label: "Custom Business Software service" },
                            { href: "/services/cloud-infrastructure", label: "Cloud Infrastructure service" },
                            { href: "/blog/hipaa-compliant-saas-architecture", label: "HIPAA-Compliant SaaS Architecture" },
                            { href: "/blog/pci-dss-compliance-saas-checklist", label: "PCI-DSS Compliance for SaaS Checklist" },
                            { href: "/blog/building-multi-tenant-saas-postgres-rls", label: "Multi-tenant SaaS with Postgres RLS" },
                            { href: "/blog/cybersecurity-services-for-saas-startups-2026", label: "Cybersecurity Services for SaaS Startups" },
                            { href: "/glossary/what-is-soc-2", label: "What is SOC 2?" },
                            { href: "/glossary/what-is-zero-trust", label: "What is Zero Trust?" },
                            { href: "/industries/saas", label: "SaaS industry expertise" },
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Make GDPR an architecture decision, not a fire drill.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute review. We will map where personal data lives in your stack, find the missing DPAs and deletion gaps, and show you what to build so the next EU prospect&apos;s questionnaire is a formality.
                        </p>
                        <ConsultationCTA label="Book a Privacy Review" service="SaaS Platform Development" source="blog-gdpr-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug="gdpr-for-us-saas-companies-2026"
                        topics={["compliance","saas"]}
                        pinned={["hipaa-compliant-saas-architecture","pci-dss-compliance-saas-checklist","building-multi-tenant-saas-postgres-rls"]}
                        heading="More compliance + architecture reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link href="/blog" className="hover:text-sky-400 inline-flex items-center gap-1">
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated June 3, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
