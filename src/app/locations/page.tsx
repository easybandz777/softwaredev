import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, ArrowRight, Compass } from "lucide-react";

export const metadata: Metadata = {
    title: "Service Areas & Neighborhoods | QUANT LAB USA",
    description:
        "QUANT LAB USA service areas — 14 metro cities and 12 neighborhood submarkets across the Southeast, Central US, West Coast, and Northeast.",
    alternates: { canonical: "https://quantlabusa.dev/locations" },
    openGraph: {
        title: "Service Areas & Neighborhoods | QUANT LAB USA",
        description:
            "Custom software development and penetration testing across 14 metros and 12 neighborhood-level submarkets.",
        url: "https://quantlabusa.dev/locations",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Service Areas & Neighborhoods | QUANT LAB USA",
        description:
            "Custom software development and penetration testing across 14 metros and 12 neighborhood submarkets.",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://quantlabusa.dev/locations" },
    ],
};

const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://quantlabusa.dev/locations#collection",
    name: "QUANT LAB USA Service Areas",
    url: "https://quantlabusa.dev/locations",
    description:
        "Index of QUANT LAB USA service areas — 14 metropolitan markets and 12 neighborhood submarkets covering custom software development, CRM, fintech, and penetration testing engagements.",
    isPartOf: { "@id": "https://quantlabusa.dev/#website" },
};

const regions: {
    name: string;
    blurb: string;
    cities: { href: string; name: string; note: string }[];
    neighborhoods: { href: string; name: string; note: string }[];
}[] = [
    {
        name: "Southeast",
        blurb:
            "Our home region — Macon HQ with full-service coverage of Georgia, the Carolinas, Tennessee, and Florida. Transaction Alley fintech, Hollywood South production, Port of Savannah logistics, and Charlotte banking SaaS all live here.",
        cities: [
            { href: "/software-development-atlanta-ga", name: "Atlanta, GA", note: "Transaction Alley + Hollywood South" },
            { href: "/software-development-macon-ga", name: "Macon, GA", note: "Our HQ — Middle Georgia coverage" },
            { href: "/software-development-augusta-ga", name: "Augusta, GA", note: "Cyber corridor and Fort Eisenhower" },
            { href: "/software-development-columbus-ga", name: "Columbus, GA", note: "Fort Moore + Chattahoochee Valley" },
            { href: "/software-development-savannah-ga", name: "Savannah, GA", note: "Port logistics and coastal SaaS" },
            { href: "/software-development-charlotte-nc", name: "Charlotte, NC", note: "Banking and fintech-adjacent SaaS" },
            { href: "/software-development-nashville-tn", name: "Nashville, TN", note: "HealthTech and music industry tooling" },
            { href: "/software-development-miami-fl", name: "Miami, FL", note: "LATAM-facing fintech and crypto" },
        ],
        neighborhoods: [
            { href: "/locations/atlanta-buckhead", name: "Buckhead, Atlanta", note: "Financial corridor + Lenox" },
            { href: "/locations/atlanta-midtown", name: "Midtown, Atlanta", note: "Tech Square + Georgia Tech" },
            { href: "/locations/atlanta-alpharetta", name: "Alpharetta, GA", note: "North metro fintech and SaaS" },
            { href: "/locations/atlanta-marietta", name: "Marietta, GA", note: "Cobb County corridor" },
            { href: "/locations/macon-downtown", name: "Downtown Macon", note: "Mercer + downtown core" },
            { href: "/locations/macon-bibb-county", name: "Bibb County, GA", note: "Greater Macon market" },
            { href: "/locations/miami-brickell", name: "Brickell, Miami", note: "LATAM banking corridor" },
        ],
    },
    {
        name: "Central US",
        blurb:
            "Texas markets where energy, logistics, and venture-backed SaaS converge. Austin's startup density and Dallas-Fort Worth's enterprise base define the regional software demand.",
        cities: [
            { href: "/software-development-austin-tx", name: "Austin, TX", note: "Silicon Hills + venture-backed SaaS" },
            { href: "/software-development-dallas-tx", name: "Dallas, TX", note: "Enterprise + DFW logistics" },
            { href: "/software-development-chicago-il", name: "Chicago, IL", note: "Trading, manufacturing, and HealthTech" },
        ],
        neighborhoods: [
            { href: "/locations/austin-downtown", name: "Downtown Austin", note: "Rainey Street + Second Street District" },
            { href: "/locations/dallas-uptown", name: "Uptown Dallas", note: "Knox-Henderson + McKinney Ave" },
        ],
    },
    {
        name: "West Coast",
        blurb:
            "Coastal innovation hubs serving venture-backed SaaS, cloud platforms, biotech-adjacent tooling, and AI infrastructure operators. Pacific Time delivery cadence supported.",
        cities: [
            { href: "/software-development-san-francisco-ca", name: "San Francisco, CA", note: "Venture SaaS and AI infra" },
            { href: "/software-development-seattle-wa", name: "Seattle, WA", note: "Cloud + enterprise software" },
        ],
        neighborhoods: [
            { href: "/locations/san-francisco-soma", name: "SoMa, San Francisco", note: "Startup density + SoMa corridor" },
            { href: "/locations/seattle-south-lake-union", name: "South Lake Union, Seattle", note: "SLU tech and biotech corridor" },
        ],
    },
    {
        name: "Northeast",
        blurb:
            "Wall Street fintech, media, agencies, and the densest mid-market SaaS buyer pool in the country. Eastern Time delivery with on-site visits available for major engagements.",
        cities: [
            { href: "/software-development-new-york-ny", name: "New York, NY", note: "Wall Street fintech + media SaaS" },
        ],
        neighborhoods: [
            { href: "/locations/nyc-manhattan", name: "Manhattan, NYC", note: "Midtown + Financial District" },
        ],
    },
];

export default function LocationsHubPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Locations</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <Compass className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Service Areas & Neighborhood Coverage
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        QUANT LAB USA delivers custom software development and penetration testing across 14 US metros and twelve neighborhood-level submarkets. We are headquartered in Macon, Georgia, and run engagements coast to coast — remote-first, with on-site visits in every major market when scope warrants.
                    </p>
                    <ConsultationCTA label="Find Your Local Coverage" source="locations-hub" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            This index splits coverage two ways. The first is by metropolitan market — 14 cities where we publish a city-specific landing page, run targeted advertising, and accept fixed-quote engagements. The second is by neighborhood submarket — corridors and districts inside those metros where industry density is high enough to justify its own page. Software buyers in Buckhead, Brickell, SoMa, and Midtown Manhattan rarely search the same way as the broader metro: their queries are tighter, their procurement is faster, and their expectations are different.
                        </p>
                        <p>
                            Every QUANT LAB engagement is founder-led. William Beltz scopes, builds, and ships. There is no offshore handoff, no junior outsourcing, no army of project managers translating between you and the engineer writing the code. That model travels well — most of our delivery is remote-first, with a deployed staging URL every Friday and written notes on what changed. Where it makes sense, we travel: ATL clients see us at their office inside the Perimeter, Manhattan engagements meet in Midtown or the Financial District, and SoMa builds are scoped over coffee at a Mission cafe.
                        </p>
                        <p>
                            Below, each region is grouped with its main metro pages plus the neighborhood submarkets that fall inside them. Buyers in a specific corridor — Alpharetta procurement, Brickell fintech, South Lake Union biotech-adjacent SaaS — can drop straight into the hyperlocal page. Buyers covering the entire metro can take the city-level page. Either path lands on the same engineering bench.
                        </p>
                        <p>
                            Coverage breakdown: the Southeast remains our highest-density region thanks to the I-75 corridor between Macon and Atlanta. Central US covers Texas plus Chicago — the country&apos;s deepest commodities, energy, and venture-backed SaaS markets. West Coast spans San Francisco and Seattle, with Pacific Time delivery cadence supported. Northeast coverage centers on Manhattan, with Wall Street fintech and agency-side media SaaS as our two most common engagement profiles.
                        </p>
                        <p>
                            Not seeing your city listed? We accept remote engagements nationwide. The metros listed below are simply the ones where we have run enough projects — or expect enough query volume — to justify a dedicated page. Start with a <Link href="/contact" className="text-sky-400 hover:underline">scoping call</Link> regardless of geography and we will quote against your actual project.
                        </p>
                    </div>
                </AnimatedSection>

                {regions.map((region) => (
                    <AnimatedSection key={region.name} className="mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <MapPin className="w-5 h-5 text-sky-400" />
                            <h2 className="text-2xl md:text-3xl font-bold text-white">{region.name}</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl">{region.blurb}</p>
                        <h3 className="text-sm uppercase tracking-wider text-sky-400 mb-3">Metropolitan Markets</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {region.cities.map((c) => (
                                <Link
                                    key={c.href}
                                    href={c.href}
                                    className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-white font-semibold">{c.name}</h4>
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed">{c.note}</p>
                                </Link>
                            ))}
                        </div>
                        {region.neighborhoods.length > 0 && (
                            <>
                                <h3 className="text-sm uppercase tracking-wider text-sky-400 mb-3">Neighborhood Submarkets</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {region.neighborhoods.map((n) => (
                                        <Link
                                            key={n.href}
                                            href={n.href}
                                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="text-white font-semibold">{n.name}</h4>
                                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                            </div>
                                            <p className="text-sm text-gray-400 leading-relaxed">{n.note}</p>
                                        </Link>
                                    ))}
                                </div>
                            </>
                        )}
                    </AnimatedSection>
                ))}

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Not finding your market?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            We work remote-first nationwide. Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a scoping call regardless of where you are.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-quant-bg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Start a Project <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
