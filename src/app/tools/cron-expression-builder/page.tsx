import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Clock, ArrowRight, Calendar, Settings, Zap } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { CronBuilder } from "./CronBuilder";

export const metadata: Metadata = pageMetadata({
    title: "Cron Expression Builder & Tester | Free Tool | QUANT LAB USA",
    description:
        "Build and test cron expressions visually. Live preview of the cron string, next 5 fire times, and presets for common schedules. 100% in-browser.",
    slug: "/tools/cron-expression-builder",
    keywords: [
        "cron expression builder",
        "cron generator",
        "cron tester",
        "crontab generator",
        "cron schedule",
        "cron expression examples",
        "cron next run time",
    ],
});

const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Cron Expression Builder & Tester",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/tools/cron-expression-builder",
    description:
        "Free in-browser cron expression builder with live next-fire-times preview and curated presets for the most common scheduling patterns.",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Why does my cron expression seem to fire one hour off?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Almost always a timezone mismatch. Cron daemons run in the server's local time by default — which is usually UTC in cloud environments. So 0 9 * * * means 9 AM UTC, not 9 AM in your office. Either explicitly set TZ in the crontab, or do the offset math in your expression (4 AM ET in summer becomes 8 AM UTC).",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between '0 0 * * 0' and '0 0 * * 7'?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Both mean Sunday in most cron implementations — 0 and 7 are both Sunday in Vixie cron and its descendants. We use 0-6 (Sunday-Saturday) in this builder for consistency. If you're targeting AWS CloudWatch Events or Quartz, note that they use 1-7 (Sunday-Saturday) — slightly different from POSIX.",
            },
        },
        {
            "@type": "Question",
            name: "Can I use this for AWS Lambda or Kubernetes CronJobs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Mostly yes — the 5-field standard cron format works in Kubernetes CronJobs, GitLab CI, and most Unix cron flavors. AWS EventBridge uses a 6-field variant (it adds a year field and uses ? instead of * for day-of-month/day-of-week conflict). Use the expression we generate, then adapt for the platform-specific quirks.",
            },
        },
        {
            "@type": "Question",
            name: "What happens when day-of-month and day-of-week are both specified?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "POSIX cron treats it as an OR condition: the job fires when either matches. So '0 0 15 * MON' runs on the 15th of the month AND every Monday. This is counterintuitive — most people read it as AND. If you need 'the 15th if it's a Monday', do the filtering inside your job, not in the cron expression.",
            },
        },
        {
            "@type": "Question",
            name: "What's the smallest cron interval I should use?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Standard cron runs at minute granularity — '* * * * *' is the fastest. For sub-minute scheduling, use a queue worker or a long-running daemon. Hitting cron every minute for jobs that take 30 seconds is a smell — it causes overlap, missed fires when the host is busy, and noisy logs. Switch to an event-driven model.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Tools", item: "https://quantlabusa.dev/tools" },
        {
            "@type": "ListItem",
            position: 3,
            name: "Cron Expression Builder",
            item: "https://quantlabusa.dev/tools/cron-expression-builder",
        },
    ],
};

export default function CronBuilderPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="container mx-auto px-6 max-w-5xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/tools" className="hover:text-sky-400 transition-colors">Tools</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Cron Expression Builder</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Cron Expression Builder &amp; Tester
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Build a cron expression with five simple inputs, preview the next five fire
                        times, and copy the result. Twelve curated presets for the schedules you
                        actually need — hourly, daily, weekday, monthly, yearly.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-emerald-400" />
                            <span>Live next-run preview</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Settings className="w-4 h-4 text-sky-400" />
                            <span>Visual + raw modes</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-amber-400" />
                            <span>12 production-ready presets</span>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <CronBuilder />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Cron, demystified
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Cron expressions look intimidating because they pack five different
                            scheduling concepts into five whitespace-separated fields with no
                            labels. Once you internalize the order — minute, hour, day-of-month,
                            month, day-of-week — they become legible at a glance. The cheatsheet:{" "}
                            <code className="text-sky-300">*</code> means &quot;every value&quot;,{" "}
                            <code className="text-sky-300">5</code> means &quot;exactly 5&quot;,{" "}
                            <code className="text-sky-300">1-5</code> means &quot;1 through 5
                            inclusive&quot;, <code className="text-sky-300">1,3,5</code> is a list,
                            and <code className="text-sky-300">*/15</code> is &quot;every 15 starting from 0&quot;.
                        </p>
                        <p>
                            <strong className="text-white">The minute field</strong> is where most
                            production cron jobs go wrong. People write{" "}
                            <code className="text-sky-300">* * * * *</code> for &quot;hourly&quot; and
                            wonder why their database is on fire — that&apos;s every minute. The
                            fix is to anchor to <code className="text-sky-300">0</code>:{" "}
                            <code className="text-sky-300">0 * * * *</code> means &quot;at minute zero of
                            every hour&quot; — that is, hourly.
                        </p>
                        <p>
                            <strong className="text-white">The day-of-week field</strong> is the
                            other landmine. POSIX cron treats day-of-month and day-of-week as an OR
                            condition when both are specified. So{" "}
                            <code className="text-sky-300">0 0 15 * MON</code> fires on the 15th of
                            every month <em>and</em> every Monday — not &quot;the 15th if it&apos;s a
                            Monday&quot;. If you need that, do the filtering inside the job, not in
                            the cron line.
                        </p>
                        <p>
                            <strong className="text-white">Timezones</strong> are the silent killer.
                            By default, cron runs in the server&apos;s local time — which is almost
                            always UTC in cloud environments. A line that reads{" "}
                            <code className="text-sky-300">0 9 * * *</code> fires at 9 AM UTC, which
                            is 4 AM Eastern in winter and 5 AM Eastern in summer. Either set the
                            TZ environment variable explicitly in your crontab (or DAG, or
                            Kubernetes manifest), or do the math and write your expression in UTC.
                            We&apos;ve audited dozens of incident postmortems where the root cause
                            was &quot;the daily report ran 5 hours later than the team thought.&quot;
                        </p>
                        <p>
                            <strong className="text-white">Step values</strong> are subtler than they
                            look. <code className="text-sky-300">*/15 * * * *</code> means &quot;every
                            15 minutes starting at minute 0&quot; — so :00, :15, :30, :45. But{" "}
                            <code className="text-sky-300">5/15 * * * *</code> means &quot;starting at
                            minute 5, every 15 minutes&quot; — :05, :20, :35, :50. Useful if you have
                            multiple servers and want to stagger their cron jobs to avoid the
                            thundering-herd problem at exact zero.
                        </p>
                        <p>
                            <strong className="text-white">Year field</strong> exists in some
                            implementations but not POSIX. AWS EventBridge accepts a sixth field
                            (year). Quartz, used by Java schedulers, accepts seconds (so a
                            6-field expression in Quartz is{" "}
                            <code className="text-sky-300">second minute hour day month dow</code>).
                            Kubernetes CronJob, GitHub Actions schedule, GitLab CI schedule, and
                            standard Unix cron all use the 5-field POSIX format that this builder
                            generates.
                        </p>
                        <p>
                            <strong className="text-white">When NOT to use cron.</strong> Cron is a
                            time-based trigger — it has no idea whether your previous run finished,
                            whether the queue is backed up, or whether your dependencies are
                            healthy. For anything that absolutely cannot run twice in parallel, or
                            cannot run if the previous run failed, you want a queue worker with
                            distributed locking — not cron. A common pattern: cron fires every 5
                            minutes, the job acquires a Redis lock, and skips if another instance
                            is already running. This is also why we usually deploy{" "}
                            <Link href="/services/api-development" className="text-sky-400 underline-offset-2 hover:underline">
                                API-driven background workers
                            </Link>{" "}
                            instead of crontab for production SaaS.
                        </p>
                        <p>
                            Need help architecting a scheduled job system that won&apos;t bite you
                            at 3 AM? See our{" "}
                            <Link href="/services" className="text-sky-400 underline-offset-2 hover:underline">
                                services overview
                            </Link>{" "}
                            or{" "}
                            <Link href="/contact" className="text-sky-400 underline-offset-2 hover:underline">
                                book a 20-minute architecture call
                            </Link>
                            .
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-4">
                        {faqSchema.mainEntity.map((item) => (
                            <details
                                key={item.name}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 open:bg-[#0d1526]"
                            >
                                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-white">
                                    <span>{item.name}</span>
                                    <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-open:rotate-90" />
                                </summary>
                                <p className="text-gray-400 mt-3 leading-relaxed text-sm">{item.acceptedAnswer.text}</p>
                            </details>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related tools</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                            { label: "All free tools", href: "/tools" },
                            { label: "Stripe webhook tester", href: "/tools/stripe-webhook-tester" },
                            { label: "UUID & ID generator", href: "/tools/uuid-and-id-generator" },
                            { label: "API development services", href: "/services/api-development" },
                            { label: "Cloud infrastructure", href: "/services/cloud-infrastructure" },
                            { label: "DevOps services", href: "/services/devops" },
                            { label: "Glossary", href: "/glossary" },
                            { label: "Talk to QuantLab", href: "/contact" },
                        ].map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="rounded-xl border border-white/5 bg-[#0d1526]/60 hover:border-sky-400/30 hover:bg-[#0d1526] transition-colors p-4 text-sm text-gray-300 hover:text-white"
                            >
                                {l.label} <ArrowRight className="inline w-3 h-3 ml-1 text-sky-400" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            Cron jobs eating your 3 AM?
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            We design scheduled-job systems that don&apos;t silently double-run,
                            don&apos;t fail without alerts, and don&apos;t depend on a single
                            crontab line nobody remembers writing. Talk to us about queue-driven
                            workers, idempotency design, or just fixing the cron lines you have.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach us directly:{" "}
                            <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline">(770) 652-1282</a>{" "}
                            · <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Architecture Call" source="cron-builder" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
