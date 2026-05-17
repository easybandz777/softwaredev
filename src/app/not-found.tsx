import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Page Not Found | QUANT LAB USA",
  description:
    "The page you're looking for isn't here. Browse our services, glossary, blog, or 14 US city coverage areas to find what you need. By QUANT LAB USA.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://quantlabusa.dev/404",
  },
};

const helpfulLinks: { href: string; label: string; blurb: string }[] = [
  { href: "/", label: "Home", blurb: "Start at the front door." },
  { href: "/services", label: "Services", blurb: "Every engineering and security service we offer." },
  { href: "/contact", label: "Contact", blurb: "Reach William Beltz directly." },
  { href: "/about", label: "About", blurb: "Who runs QUANT LAB USA." },
  { href: "/services/custom-crm-development", label: "Custom CRM Development", blurb: "Replace Salesforce or HubSpot." },
  { href: "/services/stripe-integration", label: "Stripe Integration", blurb: "Billing and payments engineering." },
  { href: "/services/penetration-testing", label: "Penetration Testing", blurb: "Offensive security assessments." },
  { href: "/services/algorithmic-trading-systems", label: "Algorithmic Trading Systems", blurb: "Quantitative tooling and bots." },
  { href: "/services/web-applications", label: "Web Applications", blurb: "Next.js, React, TypeScript builds." },
  { href: "/calculators/stripe-cost", label: "Stripe Cost Calculator", blurb: "Estimate processing fees." },
];

const notFoundSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://quantlabusa.dev/404",
  url: "https://quantlabusa.dev/404",
  name: "Page Not Found | QUANT LAB USA",
  description:
    "The requested URL does not exist on quantlabusa.dev. Find services, calculators, blog posts, and contact information from QUANT LAB USA INC.",
  isPartOf: { "@id": "https://quantlabusa.dev/#website" },
  inLanguage: "en-US",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://quantlabusa.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Page Not Found",
      item: "https://quantlabusa.dev/404",
    },
  ],
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen px-6 py-24 sm:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(notFoundSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-mono uppercase tracking-widest text-[var(--color-quant-light)]">
          Error 404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--color-quant-text)] sm:text-5xl">
          This page is not in the index.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300 sm:text-lg">
          The URL you requested does not exist on quantlabusa.dev. It may have been moved during a recent restructure, or the link that brought you here is incorrect. QUANT LAB USA INC has a deep catalog of services, calculators, and articles. Use the navigation below to jump back into useful content, or reach William Beltz directly if you were looking for something specific.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-[var(--color-quant-blue)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500"
          >
            Return home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-gray-600 bg-transparent px-6 py-3 text-sm font-semibold text-[var(--color-quant-text)] transition hover:border-[var(--color-quant-light)] hover:text-[var(--color-quant-light)]"
          >
            Talk to William
          </Link>
        </div>
      </div>

      <section
        aria-label="Helpful navigation"
        className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {helpfulLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group rounded-lg border border-gray-700 bg-[var(--color-quant-card)]/60 p-5 transition hover:border-[var(--color-quant-light)] hover:bg-[var(--color-quant-card)]"
          >
            <p className="text-base font-semibold text-[var(--color-quant-text)] group-hover:text-[var(--color-quant-light)]">
              {link.label}
            </p>
            <p className="mt-2 text-sm text-gray-400">{link.blurb}</p>
          </Link>
        ))}
      </section>

      <p className="mx-auto mt-16 max-w-2xl text-center text-sm text-gray-500">
        Still cannot find it? Email{" "}
        <a
          className="text-[var(--color-quant-light)] underline-offset-4 hover:underline"
          href="mailto:beltz@quantlabusa.dev"
        >
          beltz@quantlabusa.dev
        </a>{" "}
        with the URL you were trying to reach and we will restore or redirect it.
      </p>
    </main>
  );
}
