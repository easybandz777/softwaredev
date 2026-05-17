/**
 * Single source of truth for QUANT LAB USA business data.
 *
 * NAP (Name / Address / Phone) values here must match the verified
 * Google Business Profile exactly. If you change a value, also update
 * the GBP listing (https://business.google.com/) — Google penalises
 * NAP inconsistency across Org / LocalBusiness JSON-LD, on-page text,
 * GBP, BBB, Crunchbase, LinkedIn, and citation directories.
 *
 * Used by `src/lib/schemas/*` for JSON-LD and by page components
 * that render the address/phone in HTML.
 */

export const SITE_URL = "https://quantlabusa.dev";

// Legal + display names
export const BRAND_NAME = "QUANT LAB USA";
export const BRAND_LEGAL_NAME = "QUANT LAB USA INC";
export const BRAND_ALTERNATE_NAMES = [
  "Quant Lab USA",
  "QuantLab USA",
  "Quant Lab",
] as const;

// Contact
export const PHONE_E164 = "+17706521282"; // tel: links
export const PHONE_DISPLAY = "(770) 652-1282"; // human text
export const PHONE_SCHEMA = "+1-770-652-1282"; // schema.org canonical
export const EMAIL = "beltz@quantlabusa.dev";

// Postal address — Macon, GA HQ (matches GBP)
export const ADDRESS = {
  locality: "Macon",
  region: "GA",
  regionName: "Georgia",
  postalCode: "31201",
  country: "US",
} as const;

// GeoCoordinates — Macon, GA
export const GEO = {
  latitude: 32.8407,
  longitude: -83.6324,
} as const;

// Founding / entity
export const FOUNDING_DATE = "2024-11-09";
export const FOUNDER_NAME = "William Beltz";
export const FOUNDER_GIVEN = "William";
export const FOUNDER_FAMILY = "Beltz";

// Verified Google Business Profile review URL
// (from MEMORY.md — short-link from g.page)
export const GBP_REVIEW_URL = "https://g.page/r/CbkSyF5E2JFtEBM/review";

/**
 * Social / sameAs links — emitted by Organization JSON-LD.
 *
 * SCOPE: This array represents the FIRM, not the founder. Personal profiles
 * (linkedin.com/in/williambeltz, github.com/williambeltz) belong in
 * `SAME_AS_PERSON` below and are referenced from Person JSON-LD, not here.
 * Mixing person URLs into the Organization sameAs produces a noisy
 * cross-type entity signal that Google may discount or attribute to the
 * wrong entity. See `seo-deliverables/brand-entity/ENTITY-BUILDING.md`.
 *
 * Add new entries here ONLY after the underlying profile is:
 *   1. Claimed and verified by us,
 *   2. Linked back to https://quantlabusa.dev from the profile, and
 *   3. Listed in `seo-deliverables/brand-entity/SOCIAL-PROFILES-MASTER.md`.
 *
 * Pending profiles (committed but not yet claimed) live in
 * `src/lib/business-info.ts` under `socials.pending` — keep that catalog
 * in sync so the audit script can flag the gap.
 */
export const SAME_AS = [
  "https://linkedin.com/company/quantlabusa",
  "https://x.com/quantlabusa",
  "https://github.com/quantlabusa",
  "https://g.page/r/CbkSyF5E2JFtEBM",
] as const;

/**
 * Social / sameAs links emitted by Person JSON-LD (`src/lib/schemas/person.ts`).
 *
 * SCOPE: Represents William Beltz personally. Founder-personal profiles
 * (Hacker News, Stack Overflow, IndieHackers, etc.) get added here as they
 * are claimed — see `seo-deliverables/brand-entity/founder-personal-brand.md`.
 */
export const SAME_AS_PERSON = [
  "https://linkedin.com/in/williambeltz",
  "https://github.com/williambeltz",
] as const;

// Schema IDs (so other schemas can @id-link consistently)
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const PERSON_ID = `${SITE_URL}/#william-beltz`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Hours — Mon–Fri 9–5, validates against OpeningHoursSpecification
export const OPENING_HOURS = {
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as string[],
  opens: "09:00",
  closes: "17:00",
} as const;

// Service area (cities) — drives areaServed across LocalBusiness + Service
export const AREA_SERVED_CITIES = [
  { name: "Macon", state: "Georgia" },
  { name: "Atlanta", state: "Georgia" },
  { name: "Augusta", state: "Georgia" },
  { name: "Columbus", state: "Georgia" },
  { name: "Savannah", state: "Georgia" },
  { name: "Miami", state: "Florida" },
  { name: "Austin", state: "Texas" },
  { name: "Dallas", state: "Texas" },
  { name: "Chicago", state: "Illinois" },
  { name: "Seattle", state: "Washington" },
  { name: "New York", state: "New York" },
  { name: "Charlotte", state: "North Carolina" },
  { name: "Nashville", state: "Tennessee" },
  { name: "San Francisco", state: "California" },
] as const;

// Service areaServed in radial form (used for ProfessionalService schema)
export const SERVICE_AREA_GEO_RADIUS_M = "4500000"; // 4,500km — continental US
