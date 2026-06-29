import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { PenTool, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

const cities: { slug: string; city: string; state: string }[] = [
    { slug: "atlanta-ga", city: "Atlanta", state: "GA" },
    { slug: "macon-ga", city: "Macon", state: "GA" },
    { slug: "augusta-ga", city: "Augusta", state: "GA" },
    { slug: "columbus-ga", city: "Columbus", state: "GA" },
    { slug: "savannah-ga", city: "Savannah", state: "GA" },
    { slug: "miami-fl", city: "Miami", state: "FL" },
    { slug: "austin-tx", city: "Austin", state: "TX" },
    { slug: "dallas-tx", city: "Dallas", state: "TX" },
    { slug: "chicago-il", city: "Chicago", state: "IL" },
    { slug: "seattle-wa", city: "Seattle", state: "WA" },
    { slug: "new-york-ny", city: "New York", state: "NY" },
    { slug: "charlotte-nc", city: "Charlotte", state: "NC" },
    { slug: "nashville-tn", city: "Nashville", state: "TN" },
    { slug: "san-francisco-ca", city: "San Francisco", state: "CA" },
];

export const metadata = pageMetadata({
    title: "Product Design Services | UX/UI & Design Systems | QUANT LAB USA",
    description:
        "Founder-led UX/UI product design: user research, wireframes, interactive prototypes, design systems, and WCAG accessibility. US-based, engineering-aware design.",
    slug: "services/product-design-services",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Product Design",
    name: "UX/UI Product Design and Design Systems",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "End-to-end product design: user research and journey mapping, information architecture, wireframes, high-fidelity UI, interactive Figma prototypes, reusable design systems, and WCAG 2.2 AA accessibility. Designed by a team that ships the code, so every screen is buildable.",
    url: "https://quantlabusa.dev/services/product-design-services",
    offers: {
        "@type": "Offer",
        priceRange: "$6,000-$60,000",
        priceCurrency: "USD",
        description: "Fixed-fee scope per phase",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Product Design Services", item: "https://quantlabusa.dev/services/product-design-services" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Do you only design, or do you build it too?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Both. We are a software engineering firm that designs, which means every screen we hand over is one we can build in Next.js and React. There is no broken handoff where a beautiful Figma file turns out to be impossible to implement on budget. Design and engineering are the same team.",
            },
        },
        {
            "@type": "Question",
            name: "What does a design system actually include?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Design tokens for color, type, spacing, and elevation; a component library with states and variants; usage and accessibility documentation; and the matching coded components in React with Tailwind so design and production never drift apart. You own the Figma library and the code.",
            },
        },
        {
            "@type": "Question",
            name: "Can you make our product accessible?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Accessibility is built into the design from the first wireframe, targeting WCAG 2.2 AA. That means color contrast that passes, focus order that makes sense, keyboard operability, visible focus states, semantic structure, and labels for assistive technology. We test with a screen reader, not just an automated checker.",
            },
        },
        {
            "@type": "Question",
            name: "How much user research do you do?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "As much as the decision requires. For a focused redesign that may be a heuristic review plus five usability sessions. For a new product it is stakeholder interviews, competitive teardown, journey mapping, and prototype testing. We scope research to the risk, not to a fixed template.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the design files?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the Figma project with components and the design system library, the exported assets, and the accessibility documentation. There is no per-seat lock-in and no exit fee. The files are yours to hand to any team.",
            },
        },
    ],
};

export default function ProductDesignServicesPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Product Design Services</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-400 mb-6">
                        <PenTool className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Product Design From a Team That Ships the Code
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        User research, wireframes, interactive prototypes, design systems, and accessibility — designed by engineers who build the product. Every screen is buildable on budget, not a render that breaks at handoff.
                    </p>
                    <ConsultationCTA label="Scope a Design Engagement" service="Product Design" source="services-product-design" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When the handoff is where projects die</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The classic failure mode is a gorgeous Figma file that nobody can build. The agency that designed it never wrote a line of production code, so the layouts assume animations that wreck performance, components that do not exist, and states that were never specified. The engineering team gets the file, discovers the gaps, and starts guessing. The product that ships looks nothing like the mockup, the design system rots, and the next feature gets designed from scratch all over again.
                        </p>
                        <p>
                            Product design is what closes that gap. We design and we build, so the wireframes are grounded in what is actually feasible, the prototypes account for loading and error and empty states, and the design system ships as both a Figma library and the matching React components. The screen you sign off on is the screen we deploy.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we design</h2>
                    <ul className="space-y-3">
                        {[
                            "User research — stakeholder interviews, competitive teardowns, usability sessions, and journey mapping scoped to the decision",
                            "Information architecture and user flows that map the real paths, including the unhappy ones",
                            "Wireframes and low-fidelity prototypes to validate structure before any pixels are polished",
                            "High-fidelity UI design in Figma with a consistent visual language and responsive breakpoints",
                            "Interactive prototypes you can click through and put in front of real users before a line of code is written",
                            "Design systems — tokens, components with states and variants, and documentation, mirrored in coded React components",
                            "WCAG 2.2 AA accessibility built in — contrast, focus order, keyboard operability, semantic structure, and screen-reader labels",
                            "Empty, loading, error, and edge-case states designed so the build is not left to improvise",
                            "Design QA during development to keep the shipped product faithful to the approved design",
                            "Usability testing and iteration after launch to close the loop on real behavior",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Design starts with the problem, not the interface. Discovery establishes who the users are, what they are trying to accomplish, and where today's experience fails them. From there we move from flows to wireframes to high-fidelity screens, validating at each step with the people who will use the product rather than polishing in a vacuum. Accessibility is a constraint we design within from the first frame, never a remediation pass bolted on later.
                        </p>
                        <p>
                            Discovery and research → information architecture and wireframes → high-fidelity UI and interactive prototype → design system and engineering handoff (2 to 8 weeks typical) → design QA through the build. Because the same team writes the code, the handoff is a conversation, not a wall.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tools &amp; craft</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Figma + Auto Layout",
                            "Design tokens",
                            "Component libraries",
                            "Interactive prototyping",
                            "WCAG 2.2 AA",
                            "Tailwind CSS",
                            "React component parity",
                            "Usability testing",
                            "Responsive systems",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Designs ship straight into the products we build. The same design language carries through every <Link href="/services/web-applications" className="text-indigo-400 hover:underline">web application</Link>, <Link href="/services/saas-platform-development" className="text-indigo-400 hover:underline">SaaS platform</Link>, and <Link href="/services/mobile-app-development" className="text-indigo-400 hover:underline">mobile app</Link> we deliver.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where design fits in a build</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Product design rarely lives alone. On a new product it sets the foundation for an <Link href="/services/mvp-development" className="text-indigo-400 hover:underline">MVP build</Link> so the first release is coherent rather than stitched together. On an existing product a focused redesign untangles an interface that grew feature by feature without a system holding it together. Either way, the design system we leave behind keeps future work consistent instead of restarting from a blank canvas each sprint.
                        </p>
                        <p>
                            Because design and engineering are the same team, accessibility and performance are designed in from the start — not discovered during a late <Link href="/services/qa-and-test-automation" className="text-indigo-400 hover:underline">QA pass</Link> when fixing them is expensive.
                        </p>
                        <p>
                            Product design served from <Link href="/software-development-macon-ga" className="text-indigo-400 hover:underline">Macon, GA</Link>, with clients across <Link href="/software-development-atlanta-ga" className="text-indigo-400 hover:underline">Atlanta</Link>, <Link href="/software-development-new-york-ny" className="text-indigo-400 hover:underline">New York</Link>, <Link href="/software-development-san-francisco-ca" className="text-indigo-400 hover:underline">San Francisco</Link>, and the rest of the US.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fixed-fee per scope. Typical ranges:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Focused redesign of an existing flow with usability testing: $6k – $15k</li>
                            <li>Full product UX/UI for a new app or major feature set: $18k – $45k</li>
                            <li>Design system — tokens, components, documentation, and coded React parity: $15k – $35k</li>
                            <li>Accessibility audit and remediation design to WCAG 2.2 AA: $8k – $20k</li>
                            <li>Discovery and research sprint with wireframes: $3,500 flat</li>
                        </ul>
                        <p>
                            Design QA through the development phase included when we build it. Optional retainer for ongoing design support as the product grows.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Figma project with organized layers, components, and a shared design system library",
                            "Interactive prototype suitable for stakeholder review and usability testing",
                            "Design system documentation — tokens, components, states, and usage guidance",
                            "Matching coded React components with Tailwind when we build the product",
                            "Accessibility documentation and a WCAG 2.2 AA conformance summary",
                            "Exported assets and an icon set ready for production",
                            "Design QA support through development so the shipped product matches the approved design",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Do you only design, or do you build it too?",
                                a: "Both. We are a software engineering firm that designs, which means every screen we hand over is one we can build in Next.js and React. There is no broken handoff where a beautiful Figma file turns out to be impossible to implement on budget. Design and engineering are the same team.",
                            },
                            {
                                q: "What does a design system actually include?",
                                a: "Design tokens for color, type, spacing, and elevation; a component library with states and variants; usage and accessibility documentation; and the matching coded components in React with Tailwind so design and production never drift apart. You own the Figma library and the code.",
                            },
                            {
                                q: "Can you make our product accessible?",
                                a: "Accessibility is built into the design from the first wireframe, targeting WCAG 2.2 AA. That means color contrast that passes, focus order that makes sense, keyboard operability, visible focus states, semantic structure, and labels for assistive technology. We test with a screen reader, not just an automated checker.",
                            },
                            {
                                q: "How much user research do you do?",
                                a: "As much as the decision requires. For a focused redesign that may be a heuristic review plus five usability sessions. For a new product it is stakeholder interviews, competitive teardown, journey mapping, and prototype testing. We scope research to the risk, not to a fixed template.",
                            },
                            {
                                q: "Do we own the design files?",
                                a: "Completely. You get the Figma project with components and the design system library, the exported assets, and the accessibility documentation. There is no per-seat lock-in and no exit fee. The files are yours to hand to any team.",
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
                    <RelatedPosts
                        topics={["build-vs-buy", "saas"]}
                        heading="Product & build reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "web-applications", title: "Web Application Development", desc: "Where the design system becomes a shipped product." },
                            { slug: "mvp-development", title: "MVP Development", desc: "Design and build a coherent first release fast." },
                            { slug: "mobile-app-development", title: "Mobile App Development", desc: "Native and cross-platform UI from the same design language." },
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
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        Unsure whether to design first or build first? The <Link href="/glossary" className="text-indigo-400 hover:underline">glossary</Link> demystifies the terms, and the <Link href="/blog" className="text-indigo-400 hover:underline">blog</Link> covers our build philosophy. To scope a design engagement, <Link href="/contact" className="text-indigo-400 hover:underline">contact us</Link> directly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-indigo-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Product Design — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based design and engineering team, working with clients across 14 US metros. Research, design, and prototyping run remotely; in-person workshops available in Atlanta and the Southeast.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {cities.map((c) => (
                            <Link
                                key={c.slug}
                                href={`/software-development-${c.slug}`}
                                className="group flex items-center justify-between rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 transition-all hover:border-indigo-400/30 hover:bg-[#0d1526]"
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                        {c.city}, {c.state}
                                    </span>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to design a product your team can actually build.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. Founder-led from research through design QA.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="Product Design" source="services-product-design" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
