import { ORGANIZATION_ID } from "./organization";

export type ReviewInput = {
  author: string;
  reviewBody: string;
  ratingValue: number | string;
  datePublished?: string;
  bestRating?: number | string;
  worstRating?: number | string;
  url?: string;
  publisher?: string;
};

export function reviewSchema(input: ReviewInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": ORGANIZATION_ID },
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(input.ratingValue),
      bestRating: String(input.bestRating ?? 5),
      worstRating: String(input.worstRating ?? 1),
    },
    author: {
      "@type": "Person",
      name: input.author,
    },
    reviewBody: input.reviewBody,
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    ...(input.url ? { url: input.url } : {}),
    ...(input.publisher
      ? {
          publisher: {
            "@type": "Organization",
            name: input.publisher,
          },
        }
      : {}),
  };
}
