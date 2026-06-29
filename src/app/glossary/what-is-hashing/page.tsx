import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Hashing? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "Hashing turns any input into a fixed-length fingerprint that cannot be reversed. Plain-English definition, password hashing, salts, and collisions. QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-hashing" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Hashing",
    description:
        "Hashing is the process of running data through a one-way function to produce a fixed-length fingerprint that uniquely represents the input but cannot be reversed back into it.",
    url: "https://quantlabusa.dev/glossary/what-is-hashing",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Hashing", item: "https://quantlabusa.dev/glossary/what-is-hashing" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is hashing in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Hashing runs any input through a one-way function to produce a fixed-length string — a fingerprint — that uniquely represents the input, is fast to compute, and cannot be reversed back into the original." } },
        { "@type": "Question", name: "What is the difference between hashing and encryption?", acceptedAnswer: { "@type": "Answer", text: "Encryption is reversible: with the key, ciphertext becomes plaintext again. Hashing is one-way by design and has no key to undo it. You encrypt data you need to read later; you hash data you only need to verify." } },
        { "@type": "Question", name: "Why are passwords hashed instead of encrypted?", acceptedAnswer: { "@type": "Answer", text: "So that a database breach does not hand over plaintext passwords. The system stores the hash, and at login it hashes the entered password and compares. Because hashing is one-way, an attacker with the database still cannot trivially recover the original passwords." } },
        { "@type": "Question", name: "What is a salt?", acceptedAnswer: { "@type": "Answer", text: "A salt is a unique random value added to each password before hashing. It ensures two users with the same password get different hashes and defeats precomputed rainbow-table attacks, since the attacker cannot reuse work across accounts." } },
        { "@type": "Question", name: "Why not use SHA-256 for passwords?", acceptedAnswer: { "@type": "Answer", text: "SHA-256 is designed to be fast, which helps an attacker guess billions of passwords per second. Password hashing should use a deliberately slow, memory-hard algorithm like bcrypt, scrypt, or Argon2 to make brute-force attacks expensive." } },
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
                        <li className="text-gray-300">Hashing</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Hashing?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Hashing runs any input — a password, a file, a whole database — through a one-way function that spits out a fixed-length string called a hash, or digest. The same input always produces the same hash, a tiny change produces a wildly different one, and crucially you cannot run the function backward to recover the input. It is a fingerprint for data: useful for verifying things are identical without ever revealing what they are.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The properties that matter</h2>
                    <p>
                        A cryptographic hash function has a few non-negotiable
                        properties. It is deterministic — the same input always yields
                        the same output. It is one-way, or preimage-resistant — given a
                        hash, you cannot feasibly find an input that produces it. It is
                        collision-resistant — you cannot feasibly find two different
                        inputs with the same hash. And it has the avalanche effect:
                        flipping a single bit of input changes roughly half the output
                        bits. Common functions include the SHA-2 family (SHA-256) and
                        SHA-3; older ones like MD5 and SHA-1 are broken for security use
                        because collisions can now be manufactured.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Hashing is not encryption</h2>
                    <p>
                        This is the confusion worth killing early.{" "}
                        <Link href="/glossary/what-is-encryption-at-rest" className="text-sky-400 hover:underline">Encryption</Link>{" "}
                        is reversible: it exists precisely so that someone with the right
                        key can get the original data back. Hashing has no key and no way
                        back — that is the entire point. You encrypt data you will need
                        to read again, like a customer's stored document. You hash data
                        you only ever need to verify, like a password or a file's
                        integrity. Reaching for encryption where you should hash, or vice
                        versa, is a classic and dangerous design mistake.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Hashing passwords correctly</h2>
                    <p>
                        Storing passwords is the canonical use case, and it is easy to
                        get dangerously wrong. You never store the password itself; you
                        store its hash, and at login you hash the entered value and
                        compare. But a plain fast hash like SHA-256 is the wrong tool:
                        because it is fast, an attacker who steals the database can guess
                        billions of candidates per second. The right tools are
                        deliberately slow, memory-hard functions — bcrypt, scrypt, or
                        Argon2 — tuned so each guess costs real time and memory. Each
                        password also gets a unique random salt so identical passwords
                        produce different hashes and precomputed rainbow tables are
                        useless.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Beyond passwords</h2>
                    <p>
                        Hashing quietly powers far more than logins. File integrity
                        checks publish a hash so you can confirm a download was not
                        tampered with. Digital signatures hash a document first, then
                        sign the much smaller hash — the foundation of{" "}
                        <Link href="/glossary/what-is-public-key-infrastructure" className="text-sky-400 hover:underline">public key infrastructure</Link>.
                        Version control systems like Git name every commit by the hash of
                        its contents. Content-addressable storage and deduplication use
                        hashes as keys. Message authentication codes (HMAC) combine a
                        hash with a secret to prove a message was not altered in transit.
                        The same one-way fingerprint serves all of these.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Correct hashing is one of the first things we check and one of
                        the most common things we have to fix. In our{" "}
                        <Link href="/services/web-applications" className="text-sky-400 hover:underline">web application builds</Link>{" "}
                        we hash passwords with a vetted, slow algorithm and per-user
                        salts as a baseline, never a hand-rolled scheme. During a{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration test</Link>{" "}
                        we regularly find passwords stored as fast unsalted hashes — or,
                        alarmingly, in plaintext — which would turn any breach into a
                        catastrophe. Getting the hashing right is cheap up front and
                        ruinously expensive to retrofit after an incident.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Choosing and tuning a hash</h2>
                    <p>
                        The practical guidance is short. For passwords, use Argon2id
                        where you can, or bcrypt as a well-understood fallback, and tune
                        the cost parameters so a single hash takes a noticeable fraction
                        of a second on your hardware — then revisit as hardware gets
                        faster. For integrity and signatures, use SHA-256 or SHA-3 and
                        retire MD5 and SHA-1 entirely. Never invent your own hash
                        function or your own salting scheme. And remember that hashing
                        protects against the wrong things if the rest of the system —
                        rate limiting, breach detection, key storage — is neglected.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["pentest","stack"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-encryption-at-rest" className="text-sky-400 hover:underline">What is encryption at rest?</Link></li>
                        <li><Link href="/glossary/what-is-public-key-infrastructure" className="text-sky-400 hover:underline">What is PKI?</Link></li>
                        <li><Link href="/glossary/what-is-tls" className="text-sky-400 hover:underline">What is TLS?</Link></li>
                        <li><Link href="/glossary/what-is-multi-factor-authentication" className="text-sky-400 hover:underline">What is MFA?</Link></li>
                        <li><Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">What is the OWASP Top 10?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Storing credentials or sensitive data?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We build and review authentication and data-handling so the
                        hashing is right the first time. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-hashing" />
                        <Link href="/services/penetration-testing" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Penetration testing
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
