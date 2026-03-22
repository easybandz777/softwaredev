import type { SearchEntity, SearchMode } from "./types";

export function scoreEntity(entity: SearchEntity): number {
  if (entity.mode === "organization") return scoreOrganization(entity);
  return scorePerson(entity);
}

function scoreOrganization(e: SearchEntity): number {
  let score = 0;
  if (e.emails.length > 0) score += 30;
  if (e.phones.length > 0) score += 15;
  if (e.website) score += 10;
  const rating = e.orgData?.rating ?? 0;
  const reviews = e.orgData?.reviewCount ?? 0;
  if (rating >= 3.5) score += 10;
  if (reviews >= 10) score += 5;
  if (reviews >= 50) score += 5;
  if (e.confidence > 0) score += e.confidence;
  return Math.min(score, 100);
}

function scorePerson(e: SearchEntity): number {
  let score = 0;
  if (e.emails.length > 0) score += 35;
  if (e.phones.length > 0) score += 20;
  if (e.organization) score += 10;
  if (e.jobTitle) score += 10;
  if (e.location) score += 5;
  if ((e.personData?.socialProfiles.length ?? 0) > 0) score += 10;
  if (e.confidence > 0) score += e.confidence;
  return Math.min(score, 100);
}

export function computeCompleteness(mode: SearchMode, entity: Partial<SearchEntity>): number {
  const fields: boolean[] =
    mode === "organization"
      ? [
          !!entity.primaryLabel,
          (entity.emails?.length ?? 0) > 0,
          (entity.phones?.length ?? 0) > 0,
          !!entity.website,
          !!entity.location,
          !!entity.orgData?.niche,
        ]
      : [
          !!entity.primaryLabel,
          (entity.emails?.length ?? 0) > 0,
          (entity.phones?.length ?? 0) > 0,
          !!entity.organization,
          !!entity.jobTitle,
          !!entity.location,
        ];

  const filled = fields.filter(Boolean).length;
  return Math.round((filled / fields.length) * 100);
}
