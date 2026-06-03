import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { GraduationCap, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Education Software Development & Security | QUANT LAB USA",
    description:
        "Custom edtech development — SIS and LMS integrations, student portals, FERPA and COPPA-aware builds, plus MITRE ATT&CK pentests. Founder-led, US-based, student-data-privacy first.",
    slug: "industries/education",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Software for Education",
    url: "https://quantlabusa.dev/industries/education",
    description:
        "Education-specific software development — SIS and LMS integrations, student portals, and edtech platforms with FERPA and COPPA controls baked in. Founder-led, US-based, mutual NDA from day one.",
    isPartOf: {
        "@type": "WebSite",
        url: "https://quantlabusa.dev",
        name: "QUANT LAB USA",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://quantlabusa.dev/industries" },
        { "@type": "ListItem", position: 3, name: "Education", item: "https://quantlabusa.dev/industries/education" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Education Software Development",
    name: "Custom Software Development for Education",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for education and edtech — student information system and learning management system integrations, student and parent portals, and assessment tooling. FERPA and COPPA-aware builds with pentesting tied to education-sector threat models via MITRE ATT&CK.",
    url: "https://quantlabusa.dev/industries/education",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Do you build to FERPA requirements for student data?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. FERPA governs how education records are accessed, disclosed, and protected. We build with the school official exception in mind when acting as a service provider, enforce least-privilege access to student records, log every disclosure, and support directory-information opt-outs and parent or eligible-student access requests in the data model itself.",
            },
        },
        {
            "@type": "Question",
            name: "Can you integrate with our SIS and LMS?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We integrate with the common student information systems and learning platforms — PowerSchool, Infinite Campus, Skyward, Canvas, Schoology, Google Classroom — using their APIs plus interoperability standards like OneRoster, LTI 1.3, and Clever or ClassLink for rostering and single sign-on. We map the data flows and keep an audit trail of what syncs where.",
            },
        },
        {
            "@type": "Question",
            name: "What about COPPA and students under 13?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "When a product collects data from children under 13, COPPA applies. We design consent flows, minimize data collection to what the educational purpose requires, and support the school-consent model many edtech products rely on. We also account for state student-privacy laws such as California's SOPIPA, which often go further than federal rules.",
            },
        },
        {
            "@type": "Question",
            name: "Is education software a real security target?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Very much so. Schools and edtech vendors are heavily targeted by ransomware and data-theft crews because student records are valuable and budgets for defense are often thin. We map pentests to the techniques that actually hit the education sector and harden authentication, rostering integrations, and the portals families log into.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build a parent and student portal?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Grades, attendance, assignments, messaging, and payments in one place, with role-based access that respects the FERPA distinction between parent access and eligible-student access once a student turns 18. We wire single sign-on through Clever, ClassLink, or Google so families do not manage another password.",
            },
        },
        {
            "@type": "Question",
            name: "Why is education treated as a specialized software domain?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The privacy regime is strict and layered — FERPA, COPPA, and a patchwork of state student-privacy laws all touch the same record. The interoperability standards (OneRoster, LTI, Clever) are specific and unforgiving. And the user base spans children, parents, teachers, and administrators, each with different access rights to the same data. A generic build team underestimates all three.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 education build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Around $25,000 covers a focused MVP — one high-value workflow shipped well. Example: an LTI-launchable assessment tool that rosters from Clever, records scores back to the LMS gradebook, and keeps a clean access log, with FERPA-aware permissions and student-data minimization built in. Scoped tight, it ships in 4 to 8 weeks.",
            },
        },
    ],
};

export default function EducationIndustryPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/industries" className="hover:text-sky-400 transition-colors">Industries</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Education</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-400 mb-6">
                        <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Education — Built on Interoperability and Student-Data Privacy
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        SIS and LMS integrations, student and parent portals, assessment tools, and edtech platforms — built by a US-based, founder-led team that treats FERPA, COPPA, and state student-privacy law as design constraints, not afterthoughts.
                    </p>
                    <ConsultationCTA label="Scope an Edtech Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Student data is regulated data. Build like it.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Education software handles some of the most protected records in any sector — grades, attendance, IEPs, behavioral notes, and the personal information of minors. FERPA governs how those records are accessed and disclosed. COPPA adds a layer when a product touches children under 13. And a growing patchwork of state laws, from California&apos;s SOPIPA to dozens of others, often goes further than federal rules. A product that ignores this gets bounced by a district&apos;s privacy review before a single classroom uses it.
                        </p>
                        <p>
                            We build with those constraints from the first data model. Access to student records is least-privilege and role-aware, with the FERPA distinction between parent and eligible-student access enforced in code. Disclosures are logged. Data collection is minimized to what the educational purpose requires. And rostering and single sign-on run through the standards districts already trust — Clever, ClassLink, OneRoster, and LTI — so adoption is a configuration, not a fight.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why education is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The privacy regime is layered in a way few sectors match. A single student record can simultaneously fall under FERPA as an education record, COPPA as data from a child, and a state student-privacy statute that bans secondary use or targeted advertising outright. The product has to satisfy all of them at once, and a district&apos;s privacy officer will check. Getting this wrong is not a fine months later — it is a failed procurement today.
                        </p>
                        <p>
                            Interoperability is the other half. Education runs on specific, unforgiving standards: OneRoster for rostering, LTI 1.3 for launching tools inside an LMS, Clever and ClassLink for single sign-on and data sync, QTI for assessment content. Each has exact conformance expectations, and a near-miss implementation simply will not connect to PowerSchool or Canvas. We have built against these standards and know where the conformance details bite — usually in LTI launch signing and OneRoster delta-sync semantics.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for education operators</h2>
                    <ul className="space-y-3">
                        {[
                            "SIS and LMS integrations — PowerSchool, Infinite Campus, Skyward, Canvas, Schoology, Google Classroom via API and OneRoster",
                            "Student and parent portals — grades, attendance, assignments, messaging, and payments with FERPA-aware access",
                            "LTI 1.3 tools that launch inside the LMS and write grades back to the gradebook",
                            "Assessment and quizzing platforms — item banks, auto-grading, analytics, and accessibility support",
                            "Rostering and single sign-on via Clever, ClassLink, and Google with delta-sync and provisioning",
                            "Administrative tooling — enrollment, scheduling, and reporting dashboards for schools and districts",
                            "Edtech SaaS products for tutoring, curriculum, and learning analytics with multi-tenant district isolation",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common education projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "LTI-launchable assessment tool", d: "An LTI 1.3 tool that rosters from Clever, launches inside Canvas or Schoology, runs the assessment, and writes scores back to the gradebook with a clean access log." },
                            { t: "Parent and student portal", d: "Grades, attendance, assignments, messaging, and lunch-and-fee payments in one place, with single sign-on and FERPA-aware role separation between parent and eligible-student access." },
                            { t: "District rostering and provisioning", d: "OneRoster-based sync from the SIS that provisions accounts, sections, and enrollments across your platform, with delta-sync so changes propagate without a nightly full reload." },
                            { t: "Edtech SaaS with district isolation", d: "A multi-tenant learning product where each district's data is isolated, single sign-on works out of the box, and the privacy posture passes procurement review." },
                            { t: "Assessment and analytics dashboard", d: "An item bank, auto-grading, standards alignment, and teacher-facing analytics that turn raw scores into actionable next steps." },
                            { t: "Enrollment and scheduling system", d: "Course requests, conflict resolution, section balancing, and a master-schedule builder for a school or small district." },
                            { t: "Tutoring or curriculum marketplace", d: "Session scheduling, content delivery, progress tracking, and payments, with COPPA-aware consent for younger learners." },
                            { t: "Student-data privacy and access tooling", d: "Disclosure logging, directory-information opt-outs, and parent or eligible-student access-request workflows that satisfy a FERPA records request without a fire drill." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Privacy and security considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">FERPA.</span> When you act as a service provider under the school official exception, you inherit obligations on how education records are used and protected. We enforce least-privilege access, log disclosures, support directory-information opt-outs, and handle the parent-versus-eligible-student access distinction in the data model. We do not give legal advice — we build the controls your counsel and your district customers expect.
                        </p>
                        <p>
                            <span className="text-white font-semibold">COPPA.</span> For products touching children under 13, we minimize collection, design consent flows, and support the school-consent model many edtech tools rely on. Data is collected for the educational purpose and not repurposed.
                        </p>
                        <p>
                            <span className="text-white font-semibold">State student-privacy laws.</span> SOPIPA in California and similar statutes in many states often ban targeted advertising, secondary use, and sale of student data outright. We bake those restrictions into the architecture so a single misconfigured analytics tag does not create a compliance problem.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Ransomware and data theft.</span> The education sector is among the hardest hit. We harden authentication, rostering integrations, and family-facing portals, require MFA on administrative accounts, and keep an immutable audit trail so an incident can be reconstructed.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Accessibility.</span> Public-education software is expected to meet WCAG and Section 508 expectations. We build accessible by default — keyboard navigation, screen-reader support, and color-contrast compliance — because a procurement will check and an inaccessible product excludes students.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for education</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 16 on the App Router with React and TypeScript end-to-end for portals and tools. Postgres for the system of record, with row-level isolation when the product is multi-tenant across districts. Prisma or Drizzle as the type-safe ORM. LTI 1.3 and OneRoster libraries for interoperability, and Clever or ClassLink SSO wired through a standard auth layer so families never see another password.
                        </p>
                        <p>
                            Background workers (Inngest or BullMQ on Redis) handle roster delta-syncs and analytics rollups that should not block a request. Sentry plus a log aggregator for observability, with student-PII-aware redaction in the logger. Accessibility is enforced in the component layer and checked in CI. The web tier deploys to Vercel; the data plane moves to a hardened VPC when a district&apos;s data-protection agreement requires stricter controls.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused MVP", body: "A single high-value workflow shipped clean — an LTI assessment tool that rosters from Clever, writes grades back, and logs access, with FERPA-aware permissions. 4 to 8 weeks." },
                            { tier: "$60K", title: "Production platform", body: "A real edtech product — student and parent portal with SIS sync, single sign-on, payments, role-aware access, and a privacy posture that passes procurement. 10 to 16 weeks." },
                            { tier: "$150K+", title: "Multi-district SaaS", body: "A multi-tenant learning platform with district isolation, OneRoster provisioning, analytics, and assessment, built to clear district privacy reviews at scale. 16 to 28 weeks with phased delivery." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-indigo-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and is creditable against any full engagement. See the <Link href="/contact" className="text-indigo-400 hover:underline">contact page</Link> for the full scoping flow, or the <Link href="/pricing" className="text-indigo-400 hover:underline">pricing page</Link> for engagement models.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            First, building the product and bolting on privacy at procurement time. A district&apos;s privacy review will ask exactly where student data lives, who can see it, what is logged, and what is shared with third parties. If those answers were not design decisions, the deal stalls while the team re-architects. Design for the privacy review first.
                        </p>
                        <p>
                            Second, treating LTI and OneRoster as ordinary REST APIs. They are not — LTI launch signing and OneRoster delta-sync have exact conformance rules, and a near-miss simply will not connect to Canvas or PowerSchool. Budget for the conformance details, because the demo that worked against a mock will fail against the real LMS.
                        </p>
                        <p>
                            Third, ignoring the eligible-student transition. FERPA rights move from the parent to the student at 18 or upon postsecondary enrollment. A portal that hard-codes parent access creates a compliance gap the day a student turns 18. Model the access rules so the transition is data, not a code change.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led matters for education</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Student data is a trust you do not want sitting on an anonymous contractor&apos;s laptop overseas. Districts ask pointed questions about who handles the data and where it lives, and &quot;an offshore team we have never met&quot; is not an answer that wins procurement. We are US-based and founder-led, and the person who designs your privacy posture is the person who can defend it in a vendor review.
                        </p>
                        <p>
                            William Beltz writes or reviews every line that touches student records, rostering, and access control. NDAs are mutual and signed before discovery. Source code lives in your GitHub organization, not ours. The handoff is documented for either ongoing collaboration or in-house ownership — your call.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MITRE ATT&amp;CK pentests tied to education-sector threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Schools and edtech vendors are heavily targeted by ransomware and data-theft crews because student records are valuable and defensive budgets are thin. We run <Link href="/services/penetration-testing" className="text-indigo-400 hover:underline">penetration tests</Link> mapped to the MITRE ATT&amp;CK techniques the education sector actually faces, then deliver a heatmap of which techniques succeed, which get detected, and which get blocked.
                        </p>
                        <p>
                            For the student portals, LTI tools, and rostering integrations that carry student data, <Link href="/services/web-app-pentest" className="text-indigo-400 hover:underline">web application penetration testing</Link> covers authentication, authorization, single sign-on, and the API surface that connects to district systems. Every finding maps to ATT&amp;CK technique IDs so your team knows what to alert on.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Do you build to FERPA requirements for student data?",
                                a: "Yes. We build with the school official exception in mind when acting as a service provider, enforce least-privilege access to student records, log every disclosure, and support directory-information opt-outs and parent or eligible-student access requests in the data model itself.",
                            },
                            {
                                q: "Can you integrate with our SIS and LMS?",
                                a: "Yes — PowerSchool, Infinite Campus, Skyward, Canvas, Schoology, and Google Classroom via their APIs plus interoperability standards like OneRoster, LTI 1.3, and Clever or ClassLink for rostering and single sign-on, with an audit trail of what syncs where.",
                            },
                            {
                                q: "What about COPPA and students under 13?",
                                a: "When a product collects data from children under 13, COPPA applies. We design consent flows, minimize data collection to the educational purpose, and support the school-consent model. We also account for state laws like California's SOPIPA, which often go further than federal rules.",
                            },
                            {
                                q: "Is education software a real security target?",
                                a: "Very much so. Schools and edtech vendors are heavily targeted by ransomware and data-theft crews because student records are valuable and defensive budgets are thin. We map pentests to education-sector techniques and harden authentication, rostering, and the portals families log into.",
                            },
                            {
                                q: "Can you build a parent and student portal?",
                                a: "Yes. Grades, attendance, assignments, messaging, and payments in one place, with role-based access that respects the FERPA distinction between parent and eligible-student access once a student turns 18, and single sign-on through Clever, ClassLink, or Google.",
                            },
                            {
                                q: "Why is education treated as a specialized software domain?",
                                a: "The privacy regime is strict and layered (FERPA, COPPA, state laws), the interoperability standards (OneRoster, LTI, Clever) are specific and unforgiving, and the user base spans children, parents, teachers, and administrators with different access rights to the same data.",
                            },
                            {
                                q: "What does a $25,000 education build look like?",
                                a: "A focused MVP — an LTI-launchable assessment tool that rosters from Clever, records scores back to the LMS gradebook, and keeps a clean access log, with FERPA-aware permissions and data minimization. Scoped tight, it ships in 4 to 8 weeks.",
                            },
                        ].map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant edtech products with district-level data isolation and SSO." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Enrollment, scheduling, and reporting tools built around how schools actually run." },
                            { slug: "api-development", title: "API Development", desc: "OneRoster, LTI 1.3, and Clever integrations that conform to the standards districts trust." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "MITRE ATT&CK-aligned testing for the ransomware and data-theft threats schools face." },
                            { slug: "web-app-pentest", title: "Web App Pentest", desc: "Student portals, LTI tools, and rostering endpoints tested for access-control flaws." },
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Tuition, fees, and lunch-account payments wired cleanly into your portal." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-indigo-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["saas", "compliance", "build-vs-buy"]}
                        heading="Education engineering & build reading"
                        pinned={["build-vs-buy-software-2026", "what-is-penetration-testing", "custom-crm-development-guide"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Build edtech that passes the privacy review.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-indigo-400 hover:underline">book a 20-minute scope call</Link>. Mutual NDA signed before discovery. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
