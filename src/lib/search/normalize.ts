import type { RawCandidate, SearchEntity } from "./types";
import { scoreEntity, computeCompleteness } from "./scoring";

export function normalizeCandidate(
  candidate: RawCandidate,
  aiEnrichment?: { summary?: string; opportunity?: string; niche?: string; contactName?: string; confidence?: number },
): SearchEntity {
  const entity: SearchEntity = {
    mode: candidate.mode,
    primaryLabel: candidate.primaryLabel,
    secondaryLabel: candidate.secondaryLabel,
    emails: candidate.emails,
    phones: candidate.phones,
    location: candidate.location,
    website: candidate.website,
    organization: candidate.organization,
    jobTitle: candidate.jobTitle,
    sourceRefs: candidate.sourceRefs,
    confidence: (aiEnrichment?.confidence ?? 3) * 5,
    completenessScore: 0,
    summary: aiEnrichment?.summary ?? "",
    opportunity: aiEnrichment?.opportunity ?? "",
    orgData:
      candidate.mode === "organization"
        ? {
            rating: (candidate.raw.rating as number) ?? null,
            reviewCount: (candidate.raw.reviewCount as number) ?? 0,
            types: (candidate.raw.types as string[]) ?? [],
            niche: aiEnrichment?.niche ?? ((candidate.raw.types as string[])?.[0]?.replace(/_/g, " ") || "Business"),
            placeId: (candidate.raw.placeId as string) ?? null,
          }
        : null,
    personData:
      candidate.mode === "person"
        ? {
            employer: candidate.organization,
            title: candidate.jobTitle,
            seniority: (candidate.raw.seniority as string) ?? null,
            socialProfiles: (candidate.raw.socialProfiles as { platform: string; url: string }[]) ?? [],
          }
        : null,
  };

  entity.completenessScore = computeCompleteness(candidate.mode, entity);
  const score = scoreEntity(entity);
  entity.confidence = score;

  return entity;
}

export function normalizeBatch(
  candidates: RawCandidate[],
  aiResults?: { index: number; summary?: string; opportunity?: string; niche?: string; contactName?: string; confidence?: number }[],
): SearchEntity[] {
  return candidates.map((c, i) => {
    // AI may return 0-based OR 1-based indexes — handle both
    const ai = aiResults?.find((r) => r.index === i || r.index === i + 1);
    return normalizeCandidate(c, ai);
  });
}
