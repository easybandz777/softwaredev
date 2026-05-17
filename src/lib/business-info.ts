/**
 * QUANT LAB USA — derived business-info aggregate.
 *
 * This module re-exports and structures every piece of business identity
 * from the canonical `src/lib/constants/business.ts` source of truth. It
 * also adds the full catalog of social profile URLs (live + pending) used
 * by the entity-building program (see
 * `seo-deliverables/brand-entity/SOCIAL-PROFILES-MASTER.md`).
 *
 * IMPORT RULES:
 *   - For NAP, phone, address, hours, GBP — prefer importing the named
 *     constants from `src/lib/constants/business.ts` directly. That file
 *     is the source of truth; everything here is derived.
 *   - For the social-profile catalog (live + pending), import from this
 *     file. Centralizing the pending list here lets an audit script flag
 *     each profile that has been committed to but not yet claimed.
 *   - Schema layer (`src/lib/schemas/*`) reads ONLY from
 *     `constants/business.ts`. Do NOT have the schema layer import from
 *     this file or you'll create a circular dependency surface.
 */

import {
  ADDRESS,
  BRAND_ALTERNATE_NAMES,
  BRAND_LEGAL_NAME,
  BRAND_NAME,
  EMAIL,
  FOUNDER_FAMILY,
  FOUNDER_GIVEN,
  FOUNDER_NAME,
  FOUNDING_DATE,
  GBP_REVIEW_URL,
  GEO,
  OPENING_HOURS,
  PHONE_DISPLAY,
  PHONE_E164,
  PHONE_SCHEMA,
  SAME_AS,
  SAME_AS_PERSON,
  SITE_URL,
} from "./constants/business";

export const BUSINESS_INFO = {
  /** Brand name as displayed on the site, logo, and most directories. */
  name: BRAND_NAME,
  /** Legal entity name as registered with Georgia Secretary of State. */
  legalName: BRAND_LEGAL_NAME,
  /** Short alternates used as `alternateName` in schema.org markup. */
  alternateNames: BRAND_ALTERNATE_NAMES,
  /** "Doing Business As" — same as the brand name; kept explicit for clarity. */
  dba: BRAND_NAME,

  /** Tagline used in metadata and citation descriptions. */
  tagline: "Custom Software Development & Cybersecurity",

  /** Short marketing description for citation listings (~160 chars). */
  shortDescription:
    "Macon, Georgia custom software firm. Web apps, CRMs, Stripe integrations, trading bots, and penetration testing aligned to MITRE ATT&CK.",

  /** Longer description for directories that allow it (~500 chars). */
  longDescription:
    "QUANT LAB USA is a Macon, Georgia-based custom software and cybersecurity firm founded in 2024 by William Beltz. We build production-grade web and SaaS applications, custom CRMs, operations dashboards, Stripe integrations, licensing systems, and algorithmic trading bots, and we harden them with professional penetration testing aligned to MITRE ATT&CK. Founder-led delivery, fixed-quote engagements, US-wide remote with on-site availability for major builds.",

  /** Postal address. Macon HQ. */
  address: {
    line1: null as string | null,
    line2: null as string | null,
    city: ADDRESS.locality,
    state: ADDRESS.region,
    stateFull: ADDRESS.regionName,
    zip: ADDRESS.postalCode,
    country: ADDRESS.country,
    countryFull: "United States",
  },

  /** Geo coordinates of Macon HQ — used by LocalBusiness schema. */
  geo: {
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },

  /** Phone — single canonical format with three formatted variants. */
  phone: {
    e164: PHONE_E164,
    display: PHONE_DISPLAY,
    intl: PHONE_SCHEMA,
    raw: "7706521282",
  },

  /** Email — single canonical address. */
  email: EMAIL,

  /** Public website. */
  website: SITE_URL,

  /** Date the firm was founded. ISO-8601. */
  foundedDate: FOUNDING_DATE,

  /** Founder name (legal) and display variant. */
  founder: {
    legalName: FOUNDER_NAME,
    displayName: FOUNDER_NAME,
    givenName: FOUNDER_GIVEN,
    familyName: FOUNDER_FAMILY,
    nickname: "Bill",
    jobTitle: "Founder & Principal Engineer",
    email: EMAIL,
    linkedin: "https://linkedin.com/in/williambeltz",
  },

  /** Georgia entity / tax identifiers. */
  entity: {
    type: "C-Corp",
    state: "Georgia",
    sosId: "26086454",
    ein: "42-2039870",
    sCorpDeadline: "2026-06-26",
  },

  /** Operating hours. */
  hours: {
    timezone: "America/New_York",
    timezoneLabel: "ET",
    dayOfWeek: OPENING_HOURS.dayOfWeek,
    opens: OPENING_HOURS.opens,
    closes: OPENING_HOURS.closes,
    summary: "Mon-Fri 9:00am - 5:00pm ET",
  },

  /** Google Business Profile public profile URL. */
  gbpUrl: "https://g.page/r/CbkSyF5E2JFtEBM",
  /** Google Business Profile review-leave shortlink — share this with clients. */
  gbpReviewUrl: GBP_REVIEW_URL,

  /**
   * Social profiles — every URL the entity claims, split by Organization vs
   * Person scope. Used to derive the `sameAs` arrays in Organization JSON-LD
   * and Person JSON-LD.
   *
   * SCOPE RULES:
   *   - `organization` URLs represent the FIRM (linkedin.com/company/quantlabusa,
   *     github.com/quantlabusa, x.com/quantlabusa, GBP).
   *   - `person` URLs represent William Beltz individually
   *     (linkedin.com/in/williambeltz, github.com/williambeltz, etc.).
   *   - `pending` URLs are platforms committed to per
   *     `seo-deliverables/brand-entity/SOCIAL-PROFILES-MASTER.md` but where
   *     the profile is not yet claimed. They are NOT emitted in JSON-LD
   *     (`sameAs`) until promoted to `organization` / `person`. Keeping them
   *     here lets an audit script flag the gap.
   *
   * When you claim a pending URL: claim → verify ownership → add inbound
   * link from the profile back to https://quantlabusa.dev → move the URL
   * from `pending` to `organization` / `person` here → also add to the
   * canonical `SAME_AS` / `SAME_AS_PERSON` arrays in
   * `src/lib/constants/business.ts` → redeploy.
   */
  socials: {
    /** Live Organization-scope profiles. Mirrors SAME_AS in constants. */
    organization: {
      linkedinCompany: "https://linkedin.com/company/quantlabusa",
      x: "https://x.com/quantlabusa",
      githubOrg: "https://github.com/quantlabusa",
      googleBusinessProfile: "https://g.page/r/CbkSyF5E2JFtEBM",
    },
    /** Live Person-scope profiles. Mirrors SAME_AS_PERSON in constants. */
    person: {
      linkedin: "https://linkedin.com/in/williambeltz",
      github: "https://github.com/williambeltz",
    },
    /** Pending profiles — committed but not yet claimed. NOT in JSON-LD. */
    pending: {
      organization: {
        youtube: "https://www.youtube.com/@quantlabusa",
        facebook: "https://www.facebook.com/quantlabusa",
        instagram: "https://www.instagram.com/quantlabusa",
        tiktok: "https://www.tiktok.com/@quantlabusa",
        threads: "https://www.threads.net/@quantlabusa",
        bluesky: "https://bsky.app/profile/quantlabusa.dev",
        mastodon: "https://indieweb.social/@quantlabusa",
        devto: "https://dev.to/quantlabusa",
        medium: "https://medium.com/@quantlabusa",
        hashnode: "https://quantlabusa.hashnode.dev",
        substack: "https://quantlabusa.substack.com",
        crunchbase: "https://www.crunchbase.com/organization/quant-lab-usa",
        clutch: "https://clutch.co/profile/quant-lab-usa",
        goodfirms: "https://www.goodfirms.co/company/quant-lab-usa",
        designrush: "https://www.designrush.com/agency/profile/quant-lab-usa",
        themanifest: "https://themanifest.com/us/web-developers/profile/quant-lab-usa",
        builtinAtlanta: "https://builtin.com/company/quant-lab-usa",
        f6s: "https://www.f6s.com/quantlabusa",
        wellfound: "https://wellfound.com/company/quant-lab-usa",
        opencorporates: "https://opencorporates.com/companies/us_ga/26086454",
        /** Wikidata Q-item assigned after submission per wikidata-draft.md */
        wikidata: null as string | null,
      },
      person: {
        stackoverflow: null as string | null,
        hackernews: "https://news.ycombinator.com/user?id=williambeltz",
        indiehackers: "https://www.indiehackers.com/williambeltz",
        producthunt: "https://www.producthunt.com/@williambeltz",
        quora: "https://www.quora.com/profile/William-Beltz",
        crunchbasePerson: "https://www.crunchbase.com/person/william-beltz",
        reddit: "https://www.reddit.com/user/williambeltz",
      },
    },
  },

  /**
   * Flat `sameAs` arrays for Organization + Person JSON-LD. These mirror
   * the canonical arrays in `src/lib/constants/business.ts` (SAME_AS and
   * SAME_AS_PERSON) and are re-exported here for convenience to callers
   * that already import from this file.
   *
   * NOTE: pending URLs are intentionally EXCLUDED — JSON-LD `sameAs` is
   * a claim about reality. Emitting URLs to unclaimed profiles would
   * make our structured data lie.
   */
  sameAsOrganization: SAME_AS,
  sameAsPerson: SAME_AS_PERSON,
} as const;

export type BusinessInfo = typeof BUSINESS_INFO;

/**
 * Single canonical NAP string used by NAP-consistency checks.
 */
export const CANONICAL_NAP = `${BRAND_NAME} · ${ADDRESS.locality}, ${ADDRESS.region} ${ADDRESS.postalCode} · ${PHONE_DISPLAY} · ${EMAIL} · ${SITE_URL}`;

/** Phone-format variants the NAP-monitor script will FLAG as inconsistent. */
export const PHONE_VARIANTS_TO_FLAG = [
  "770.652.1282",
  "770 652 1282",
  "770-652-1282",
  "7706521282",
  "+1 770 652 1282",
  "+1.770.652.1282",
  "+1 (770) 652-1282",
  "1-770-652-1282",
] as const;
