import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is DNS? The Domain Name System Explained | QUANT LAB USA",
    description:
        "DNS is the internet's address book, translating domain names into IP addresses. Plain-English guide to records, resolution, TTLs, and DNS security. QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-dns" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Domain Name System (DNS)",
    description:
        "DNS is the hierarchical, distributed naming system that translates human-readable domain names into the IP addresses computers use to locate each other on a network.",
    url: "https://quantlabusa.dev/glossary/what-is-dns",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Domain Name System (DNS)", item: "https://quantlabusa.dev/glossary/what-is-dns" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is DNS in one sentence?", acceptedAnswer: { "@type": "Answer", text: "DNS is the internet's address book: a distributed system that translates a human-friendly domain name like example.com into the numeric IP address a computer needs to actually connect to the server." } },
        { "@type": "Question", name: "What is an A record?", acceptedAnswer: { "@type": "Answer", text: "An A record maps a domain name to an IPv4 address; an AAAA record maps it to an IPv6 address. They are the most fundamental records, telling clients which server to contact for a given name." } },
        { "@type": "Question", name: "What is a TTL in DNS?", acceptedAnswer: { "@type": "Answer", text: "TTL, or time to live, is how long a resolver is allowed to cache a DNS record before checking again. A low TTL means changes propagate quickly but generates more lookups; a high TTL is efficient but slows down changes." } },
        { "@type": "Question", name: "What is a CNAME record?", acceptedAnswer: { "@type": "Answer", text: "A CNAME record makes one name an alias for another, so www.example.com can point at example.com and inherit its address. It is widely used to point custom domains at hosted platforms and CDNs." } },
        { "@type": "Question", name: "What is DNSSEC?", acceptedAnswer: { "@type": "Answer", text: "DNSSEC adds cryptographic signatures to DNS records so a resolver can verify a response really came from the authoritative source and was not forged. It defends against cache poisoning and spoofing, which plain DNS cannot detect." } },
    ],
};

export default function Page() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <article className="container mx-auto px-6 max-w-3xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/glossary" className="hover:text-sky-400 transition-colors">Glossary</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Domain Name System (DNS)</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Infrastructure</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is the Domain Name System (DNS)?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        DNS is the internet's address book. Computers find each other using numeric IP addresses, but humans remember names — so DNS is the globally distributed system that translates a name like quantlabusa.dev into the address a machine can actually connect to. Almost every click, email, and API call begins with a silent DNS lookup, which is why DNS problems tend to look like "the whole internet is down."
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How a lookup actually works</h2>
                    <p>
                        When you type a name, your device asks a recursive resolver —
                        usually run by your ISP or a service like Cloudflare's 1.1.1.1 —
                        to find the answer. If it is not cached, the resolver walks the
                        hierarchy: it asks a root server who handles ".dev," asks that
                        top-level-domain server who handles "quantlabusa.dev," then asks
                        that domain's authoritative name server for the actual record.
                        The answer flows back and gets cached at each hop. This whole
                        chain typically completes in tens of milliseconds, and the
                        caching is what keeps the root servers from melting under the
                        weight of the entire internet.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The records you will actually edit</h2>
                    <p>
                        A handful of record types cover most real work. A and AAAA
                        records point a name at an IPv4 or IPv6 address. CNAME records
                        make one name an alias for another — the standard way to point a
                        custom domain at a hosting platform or{" "}
                        <Link href="/glossary/what-is-a-cdn" className="text-sky-400 hover:underline">CDN</Link>.
                        MX records direct email to the right mail servers. TXT records
                        hold arbitrary text and have become the home of email
                        authentication (SPF, DKIM, DMARC) and domain-ownership proofs.
                        NS records delegate a zone to its authoritative servers. Knowing
                        these five gets you through almost every deployment.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">TTLs and propagation</h2>
                    <p>
                        Every record carries a TTL — time to live — that tells resolvers
                        how long they may cache it. This is the source of the famous "DNS
                        propagation" delay: when you change a record, the old value lives
                        on in caches around the world until its TTL expires. There is no
                        magic propagation; it is just caches timing out. The practical
                        move is to lower the TTL a day before a planned migration so the
                        cutover is fast, then raise it again afterward for efficiency.
                        Misunderstanding TTLs is behind a huge share of "I changed it but
                        it is still pointing at the old server" confusion.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">DNS as a security surface</h2>
                    <p>
                        Plain DNS was designed in a more trusting era and has no built-in
                        way to verify that an answer is genuine, which opens the door to
                        spoofing and cache poisoning. DNSSEC adds cryptographic
                        signatures so resolvers can confirm a record really came from the
                        authoritative source. Encrypted transports — DNS over HTTPS and
                        DNS over TLS — stop eavesdroppers from seeing or tampering with
                        your queries in transit. DNS is also a prime target for attackers:
                        domain hijacking, dangling records that point at de-provisioned
                        cloud resources, and DNS-based data exfiltration all show up in
                        real incidents and during a thorough security review.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        DNS sits underneath everything we deploy. In our{" "}
                        <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link>{" "}
                        work we manage zones as code so records are reviewed and version
                        controlled rather than hand-edited in a panic, and we use sensible
                        TTLs around{" "}
                        <Link href="/services/cloud-migration" className="text-sky-400 hover:underline">cloud migrations</Link>{" "}
                        so cutovers are clean. During a{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration test</Link>{" "}
                        we enumerate DNS aggressively — subdomain discovery routinely
                        surfaces forgotten staging hosts and dangling records that point
                        at resources an attacker can claim. Boring, well-managed DNS is a
                        quiet sign of an organization that has its infrastructure in order.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Running DNS without drama</h2>
                    <p>
                        The operational rules are simple but easy to skip. Lock the
                        domain at the registrar and enable two-factor authentication —
                        losing control of the domain is losing control of everything.
                        Manage records as code so changes are reviewable and reversible.
                        Watch TTLs around migrations. Clean up records that point at
                        resources you no longer own before someone else claims them.
                        Enable DNSSEC where your registrar supports it. DNS rarely needs
                        attention day to day, which is exactly why neglected DNS becomes
                        a slow-burning liability that surfaces at the worst moment.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack","pentest"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-a-cdn" className="text-sky-400 hover:underline">What is a CDN?</Link></li>
                        <li><Link href="/glossary/what-is-a-load-balancer" className="text-sky-400 hover:underline">What is a load balancer?</Link></li>
                        <li><Link href="/glossary/what-is-tls" className="text-sky-400 hover:underline">What is TLS?</Link></li>
                        <li><Link href="/glossary/what-is-a-man-in-the-middle-attack" className="text-sky-400 hover:underline">What is a man-in-the-middle attack?</Link></li>
                        <li><Link href="/glossary/what-is-public-key-infrastructure" className="text-sky-400 hover:underline">What is PKI?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Planning a migration or cleaning up DNS?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We manage DNS and cloud infrastructure as code, with clean
                        cutovers and no dangling records. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-dns" />
                        <Link href="/services/cloud-infrastructure" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Cloud infrastructure
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
