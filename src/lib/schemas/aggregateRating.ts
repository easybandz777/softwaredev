export type AggregateRatingInput = {
  ratingValue: number | string;
  reviewCount: number | string;
  bestRating?: number | string;
  worstRating?: number | string;
};

export function aggregateRatingSchema(input: AggregateRatingInput) {
  return {
    "@type": "AggregateRating",
    ratingValue: String(input.ratingValue),
    reviewCount: String(input.reviewCount),
    bestRating: String(input.bestRating ?? 5),
    worstRating: String(input.worstRating ?? 1),
  };
}
