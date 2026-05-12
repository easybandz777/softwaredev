import type { Metadata } from "next";
import Link from "next/link";

type SearchPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata: Metadata = {
  title: "Search | QUANT LAB USA",
  description:
    "Search QUANT LAB USA for software development, custom CRM, Stripe integration, penetration testing, and algorithmic trading resources.",
  alternates: {
    canonical: "https://quantlabusa.dev/search",
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Search | QUANT LAB USA",
    description:
      "Search across QUANT LAB USA services, calculators, articles, and case studies.",
    url: "https://quantlabusa.dev/search",
    siteName: "QUANT LAB USA",
    type: "website",
  },
};

const hubs: { href: string; label: string; description: string }[] = [
  {
    href: "/services",
    label: "All services",
    description: "Full catalog of software development and cybersecurity services.",
  },
  {
    href: "/services/custom-crm-development",
    label: "Custom CRM development",
    description: "Replace Salesforce, HubSpot, Pipedrive with a system you own.",
  },
  {
    href: "/services/stripe-integration",
    label: "Stripe integration",
    description: "Payments, subscriptions, license servers, invoicing.",
  },
  {
    href: "/services/penetration-testing",
    label: "Penetration testing",
    description: "Web app, network, active directory, MITRE ATT&CK.",
  },
  {
    href: "/services/web-applications",
    label: "Web applications",
    description: "Next.js, React, TypeScript, Postgres, Vercel.",
  },
  {
    href: "/services/algorithmic-trading-systems",
    label: "Algorithmic trading systems",
    description: "Quantitative tooling, market data infrastructure, bots.",
  },
  {
    href: "/industries",
    label: "Industries",
    description: "Vertical-specific software for SaaS, e-commerce, fintech.",
  },
  {
    href: "/calculators/stripe-cost",
    label: "Stripe cost calculator",
    description: "Estimate processing fees on volume scenarios.",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Email William Beltz or book a consultation.",
  },
];

function readQuery(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const rawQuery = readQuery(params.q || params.query);
  const query = rawQuery.trim().slice(0, 120);
  const hasQuery = query.length > 0;

  return (
    <main className="relative min-h-screen px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-quant-light)]">
            Site search
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--color-quant-text)] sm:text-5xl">
            {hasQuery ? <>Searching for &ldquo;{query}&rdquo;</> : <>Search QUANT LAB USA</>}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 sm:text-lg">
            {hasQuery
              ? "We do not yet expose a full-text search index. Use the curated hubs below or email us directly with what you are trying to find. Most requests are answered the same business day."
              : "Use the form below to search, or jump straight into one of the service hubs. For anything specific, email us and we will point you to the right page or build the answer."}
          </p>
        </header>

        <form
          action="/search"
          method="get"
          role="search"
          className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="site-search" className="sr-only">
            Search QUANT LAB USA
          </label>
          <input
            id="site-search"
            type="search"
            name="q"
            defaultValue={query}
            placeholder="custom CRM, Stripe, pentest, algorithmic trading"
            autoComplete="off"
            inputMode="search"
            maxLength={120}
            className="w-full rounded-md border border-gray-700 bg-[var(--color-quant-card)] px-4 py-3 text-sm text-[var(--color-quant-text)] placeholder-gray-500 focus:border-[var(--color-quant-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-quant-light)]/40"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-[var(--color-quant-blue)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500"
          >
            Search
          </button>
        </form>

        <div className="mx-auto mt-10 max-w-xl rounded-lg border border-[var(--color-quant-light)]/30 bg-[var(--color-quant-card)]/60 p-6 text-center">
          <p className="text-sm font-semibold text-[var(--color-quant-text)]">
            Looking for something specific?
          </p>
          <p className="mt-2 text-sm text-gray-300">
            Email{" "}
            <a
              href="mailto:beltz@quantlabusa.dev"
              className="text-[var(--color-quant-light)] underline-offset-4 hover:underline"
            >
              beltz@quantlabusa.dev
            </a>{" "}
            with the topic, page, or service you need. William Beltz responds personally.
          </p>
        </div>
      </div>

      <section
        aria-label="Main hubs"
        className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {hubs.map((hub) => (
          <Link
            key={hub.href}
            href={hub.href}
            className="group rounded-lg border border-gray-700 bg-[var(--color-quant-card)]/60 p-5 transition hover:border-[var(--color-quant-light)] hover:bg-[var(--color-quant-card)]"
          >
            <p className="text-base font-semibold text-[var(--color-quant-text)] group-hover:text-[var(--color-quant-light)]">
              {hub.label}
            </p>
            <p className="mt-2 text-sm text-gray-400">{hub.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
