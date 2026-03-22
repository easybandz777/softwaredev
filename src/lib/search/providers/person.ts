import type { SearchProvider, EnrichmentProvider, RawCandidate } from "../types";

/**
 * MVP person search provider using public web sources.
 * Designed as the plug-in point for paid providers later.
 *
 * The initial implementation uses a web search query to find publicly
 * available contact information. When a paid provider (e.g. Apollo,
 * Hunter, Clearbit) is added, it will implement the same SearchProvider
 * interface and be swapped in via configuration.
 */
export class PersonSearchProvider implements SearchProvider {
  mode = "person" as const;

  async search(query: string, limit: number): Promise<RawCandidate[]> {
    // MVP: use Google Custom Search JSON API if configured,
    // otherwise return empty results with a clear signal.
    const apiKey = (process.env.GOOGLE_CSE_API_KEY || "").trim();
    const cseId = (process.env.GOOGLE_CSE_ID || "").trim();

    if (!apiKey || !cseId) {
      return this.fallbackSearch(query, limit);
    }

    try {
      const url = new URL("https://www.googleapis.com/customsearch/v1");
      url.searchParams.set("key", apiKey);
      url.searchParams.set("cx", cseId);
      url.searchParams.set("q", query);
      url.searchParams.set("num", String(Math.min(limit, 10)));

      const res = await fetch(url.toString());
      if (!res.ok) return this.fallbackSearch(query, limit);

      const data = await res.json();
      const items = data.items || [];

      return items.slice(0, limit).map((item: Record<string, unknown>) => this.parseSearchResult(item));
    } catch {
      return this.fallbackSearch(query, limit);
    }
  }

  private parseSearchResult(item: Record<string, unknown>): RawCandidate {
    const title = (item.title as string) || "";
    const snippet = (item.snippet as string) || "";
    const link = (item.link as string) || "";

    const emailMatch = snippet.match(/\b[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}\b/i);
    const phoneMatch = snippet.match(/\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/);

    const nameParts = title.split(/[-|–—]/).map((s) => s.trim());
    const name = nameParts[0] || title;
    const employer = nameParts[1] || null;

    return {
      mode: "person" as const,
      primaryLabel: name,
      secondaryLabel: employer,
      emails: emailMatch ? [emailMatch[0]] : [],
      phones: phoneMatch ? [phoneMatch[0]] : [],
      location: null,
      website: link || null,
      organization: employer,
      jobTitle: null,
      sourceRefs: [{ provider: "google_cse", id: null, url: link }],
      raw: {
        snippet,
        title,
        link,
        socialProfiles: [],
      },
    };
  }

  private async fallbackSearch(query: string, _limit: number): Promise<RawCandidate[]> {
    // Placeholder: returns empty results when no search API is configured.
    // This is the integration point for paid providers.
    console.log(`[PersonSearchProvider] No CSE configured. Query: "${query}" returned 0 results.`);
    void _limit;
    return [];
  }
}

export class PersonEnrichmentProvider implements EnrichmentProvider {
  async enrich(candidates: RawCandidate[], _concurrency: number): Promise<RawCandidate[]> {
    // MVP pass-through. Future: call Hunter.io, Apollo, etc.
    void _concurrency;
    return candidates;
  }
}
