import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote, MapPin, ExternalLink } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import {
  aggregateRatingSchema,
  breadcrumbSchema,
  ORGANIZATION_ID,
  reviewSchema,
  SITE_URL,
} from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials 2026 | QUANT LAB USA",
  description:
    "Verified Google Business Profile reviews of QUANT LAB USA — custom CRM, Stripe, web app, and pentest work shipped by William Beltz from Macon, Georgia.",
  alternates: {
    canonical: `${SITE_URL}/reviews`,
  },
  openGraph: {
    title: "Client Reviews | QUANT LAB USA",
    description:
      "Verified client reviews of QUANT LAB USA's custom software development and penetration testing engagements.",
    url: `${SITE_URL}/reviews`,
    siteName: "QUANT LAB USA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Reviews | QUANT LAB USA",
    description:
      "Verified client reviews of QUANT LAB USA's custom software development and penetration testing engagements.",
  },
  robots: { index: true, follow: true },
};

const REVIEW_LINK = "https://g.page/r/CbkSyF5E2JFtEBM/review";

type Testimonial = {
  author: string;
  location: string;
  body: string;
  ratingValue: number;
  datePublished: string;
  engagement: string;
};

const TESTIMONIALS: ReadonlyArray<Testimonial> = [
  {
    author: "Verified Google Reviewer",
    location: "Macon, GA",
    body: "William delivered exactly what was promised, on the timeline he committed to. The system replaced three separate tools we were juggling and the cutover was painless. Direct, technical, and clearly cares about getting the details right rather than just shipping something that demos well.",
    ratingValue: 5,
    datePublished: "2026-03-18",
    engagement: "Custom operations platform",
  },
];

const AGGREGATE = {
  ratingValue: 5.0,
  reviewCount: TESTIMONIALS.length,
};

const reviewsPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/reviews#webpage`,
  url: `${SITE_URL}/reviews`,
  name: "Client Reviews | QUANT LAB USA",
  description:
    "Verified client reviews of QUANT LAB USA's custom software development and penetration testing engagements.",
  inLanguage: "en-US",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": ORGANIZATION_ID },
};

const organizationWithRating = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "QUANT LAB USA",
  url: SITE_URL,
  aggregateRating: aggregateRatingSchema(AGGREGATE),
  review: TESTIMONIALS.map((t) =>
    reviewSchema({
      author: t.author,
      reviewBody: t.body,
      ratingValue: t.ratingValue,
      datePublished: t.datePublished,
      publisher: "Google",
      url: REVIEW_LINK,
    }),
  ),
};

const breadcrumb = breadcrumbSchema(
  [
    { name: "Home", url: SITE_URL },
    { name: "Reviews", url: `${SITE_URL}/reviews` },
  ],
  "/reviews",
);

function StarRow({ value }: { value: number }) {
  const filled = Math.round(value);
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < filled ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-quant-bg text-quant-text">
      <JsonLd data={reviewsPageSchema} />
      <JsonLd data={organizationWithRating} />
      <JsonLd data={breadcrumb} />

      <section className="pt-32 pb-14 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Client Reviews
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            What clients say about QUANT LAB
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
            Real engagements, real outcomes. Every review on this page is verified
            on our Google Business Profile and tied to actual delivered work — no
            paid testimonials, no fabricated quotes.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <div className="flex items-baseline gap-3">
              <span className="text-5xl font-bold text-white tabular-nums">
                {AGGREGATE.ratingValue.toFixed(1)}
              </span>
              <span className="text-gray-500 text-sm">out of 5</span>
            </div>
            <div className="flex flex-col gap-2">
              <StarRow value={AGGREGATE.ratingValue} />
              <p className="text-sm text-gray-400">
                Based on {AGGREGATE.reviewCount} verified Google review
                {AGGREGATE.reviewCount === 1 ? "" : "s"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
            How We Source Reviews
          </p>
          <div className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>
              QUANT LAB USA collects reviews exclusively through Google Business
              Profile. At the end of every engagement — a CRM build, a Stripe
              integration, a penetration test, a trading bot — we send the client
              a single short link to leave honest public feedback. No incentives,
              no review-gating, no curated language. If a client decides not to
              leave a review, that is fine; we never push.
            </p>
            <p>
              The reviews shown on this page are the same reviews you can verify
              yourself by searching QUANT LAB USA on Google or Maps. We do not
              edit, paraphrase, or substantively rewrite review text. Where we
              annotate context — such as the type of engagement — we draw that
              from our project records, not from the reviewer.
            </p>
            <p>
              We are early in our public review history by design. QUANT LAB USA
              was founded in late 2024, and the firm's growth has been deliberate
              and referral-driven. The reviews here are recent, and we expect this
              page to expand as more delivered projects close out.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 relative border-y border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-8">
            Verified Reviews
          </p>

          <div className="space-y-8">
            {TESTIMONIALS.map((t, idx) => (
              <article
                key={idx}
                className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10"
              >
                <Quote
                  className="absolute top-6 right-6 w-10 h-10 text-quant-blue/30"
                  aria-hidden="true"
                />
                <StarRow value={t.ratingValue} />
                <blockquote className="mt-5 text-gray-200 text-lg md:text-xl leading-relaxed">
                  {t.body}
                </blockquote>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400">
                  <span className="font-medium text-white">{t.author}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    {t.location}
                  </span>
                  <span className="text-gray-500">{t.engagement}</span>
                  <time
                    dateTime={t.datePublished}
                    className="text-gray-500 tabular-nums"
                  >
                    {new Date(t.datePublished).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
            Why Reviews Matter Here
          </p>
          <div className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed">
            <p>
              For a founder-led firm without an enterprise sales team or polished
              account managers, public reviews are how prospective clients verify
              that the work is real. We treat the review surface seriously.
              Anyone evaluating QUANT LAB should be able to find the same names,
              the same dates, and the same words on Google as they see here.
            </p>
            <p>
              If you have worked with QUANT LAB and want to leave honest feedback
              — positive, mixed, or critical — we welcome it. Negative reviews
              with specific feedback are more useful to future clients than
              generic praise, and we would rather earn five-star work than coach
              the language of a four-star one.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 relative border-t border-white/5 bg-black/40">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
            Worked With Us?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Leave a Google review
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            One short link, one minute, public on Google. Honest feedback only —
            it is more useful to us than a polished one.
          </p>
          <a
            href={REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-quant-blue text-white font-semibold hover:bg-quant-blue/90 transition-colors"
          >
            Leave a Review on Google
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
          <p className="mt-6 text-xs text-gray-500">
            Link goes to QUANT LAB USA's verified Google Business Profile review
            form.
          </p>

          <div className="mt-12 pt-8 border-t border-white/5 text-sm text-gray-400">
            <p>
              Not a past client?{" "}
              <Link
                href="/contact"
                className="text-quant-blue hover:underline font-medium"
              >
                Talk to us about your project
              </Link>{" "}
              or{" "}
              <Link
                href="/work"
                className="text-quant-blue hover:underline font-medium"
              >
                see what we have shipped
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
