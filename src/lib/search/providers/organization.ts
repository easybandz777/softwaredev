import type { SearchProvider, EnrichmentProvider, RawCandidate } from "../types";
import { searchPlaces } from "@/lib/places";
import { enrichWithEmails } from "@/lib/scraper";

export class OrganizationSearchProvider implements SearchProvider {
  mode = "organization" as const;

  async search(query: string, limit: number): Promise<RawCandidate[]> {
    const places = await searchPlaces(query, limit);

    return places.map((p) => ({
      mode: "organization" as const,
      primaryLabel: p.companyName,
      secondaryLabel: null,
      emails: [],
      phones: p.phone ? [p.phone] : [],
      location: p.location || null,
      website: p.website || null,
      organization: p.companyName,
      jobTitle: null,
      sourceRefs: [{ provider: "google_places", id: p.placeId, url: null }],
      raw: {
        rating: p.rating,
        reviewCount: p.reviewCount,
        types: p.types,
        placeId: p.placeId,
      },
    }));
  }
}

export class OrganizationEnrichmentProvider implements EnrichmentProvider {
  async enrich(candidates: RawCandidate[], concurrency: number): Promise<RawCandidate[]> {
    const leadsForScraper = candidates.map((c) => ({
      website: c.website,
      _candidate: c,
    }));

    const enriched = await enrichWithEmails(leadsForScraper, concurrency);

    return enriched.map((e) => {
      const original = (e as unknown as { _candidate: RawCandidate })._candidate;
      return {
        ...original,
        emails: e.email ? [e.email] : [],
        raw: {
          ...original.raw,
          emailMissing: e.emailMissing,
        },
      };
    });
  }
}
