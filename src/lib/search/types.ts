export type SearchMode = "organization" | "person";

// ─── Shared Entity ────────────────────────────────────────────────────────────

export interface SearchEntity {
  mode: SearchMode;
  primaryLabel: string;
  secondaryLabel: string | null;
  emails: string[];
  phones: string[];
  location: string | null;
  website: string | null;
  organization: string | null;
  jobTitle: string | null;
  sourceRefs: SourceRef[];
  confidence: number;
  completenessScore: number;
  summary: string;
  opportunity: string;
  orgData: OrgSpecificData | null;
  personData: PersonSpecificData | null;
}

export interface SourceRef {
  provider: string;
  id: string | null;
  url: string | null;
}

// ─── Mode-specific extensions ─────────────────────────────────────────────────

export interface OrgSpecificData {
  rating: number | null;
  reviewCount: number;
  types: string[];
  niche: string;
  placeId: string | null;
}

export interface PersonSpecificData {
  employer: string | null;
  title: string | null;
  seniority: string | null;
  socialProfiles: SocialProfile[];
}

export interface SocialProfile {
  platform: string;
  url: string;
}

// ─── Search Request / Response ────────────────────────────────────────────────

export interface SearchRequest {
  mode: SearchMode;
  query: string;
  maxResults: number;
  criteria: SearchCriteria;
}

export interface SearchCriteria {
  requireEmail: boolean;
  requirePhone: boolean;
  locationKeywords: string[];
  minQualityScore: number;

  // Organization-specific
  requireWebsite?: boolean;
  includeNoWebsite?: boolean;
  minRating?: number;
  minReviews?: number;
  nicheKeywords?: string[];

  // Person-specific
  titleKeywords?: string[];
  employerKeywords?: string[];
}

export interface SearchResponse {
  entities: SearchEntity[];
  meta: SearchMeta;
}

export interface SearchMeta {
  query: string;
  mode: SearchMode;
  discovered: number;
  enriched: number;
  filtered: number;
  returned: number;
  elapsedMs: number;
}

// ─── Provider contract ────────────────────────────────────────────────────────

export interface SearchProvider {
  mode: SearchMode;
  search(query: string, limit: number): Promise<RawCandidate[]>;
}

export interface EnrichmentProvider {
  enrich(candidates: RawCandidate[], concurrency: number): Promise<RawCandidate[]>;
}

export interface RawCandidate {
  mode: SearchMode;
  primaryLabel: string;
  secondaryLabel: string | null;
  emails: string[];
  phones: string[];
  location: string | null;
  website: string | null;
  organization: string | null;
  jobTitle: string | null;
  sourceRefs: SourceRef[];
  raw: Record<string, unknown>;
}
