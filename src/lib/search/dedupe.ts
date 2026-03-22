/**
 * Lead deduplication helper.
 * Compares generated prospect candidates against saved CRM leads
 * to prevent the same salesperson from seeing already-saved leads.
 */

export interface SavedLead {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  company: string | null;
  website: string | null;
  location: string | null;
  entity_type: string | null;
  source_refs: string | null;
}

interface ProspectLead {
  companyName: string;
  contactName: string;
  email: string | null;
  phone: string | null;
  website: string | null;
  location: string | null;
  mode: string;
  sourceRefs?: { provider: string; id: string | null; url: string | null }[];
}

function normalizePhone(phone: string | null | undefined): string {
  if (!phone) return "";
  return phone.replace(/\D/g, "").slice(-10);
}

function normalizeWebsite(url: string | null | undefined): string {
  if (!url) return "";
  return url.toLowerCase().replace(/^https?:\/\/(www\.)?/, "").replace(/\/+$/, "").trim();
}

function normalizeStr(s: string | null | undefined): string {
  if (!s) return "";
  return s.toLowerCase().replace(/[^a-z0-9]/g, "").trim();
}

function extractPlaceId(sourceRefsRaw: string | null): string | null {
  if (!sourceRefsRaw) return null;
  try {
    const refs = typeof sourceRefsRaw === "string" ? JSON.parse(sourceRefsRaw) : sourceRefsRaw;
    if (Array.isArray(refs)) {
      const places = refs.find((r: { provider?: string; id?: string }) => r.provider === "google_places" && r.id);
      if (places) return places.id;
    }
  } catch { /* ignore */ }
  return null;
}

function extractPlaceIdFromProspect(prospect: ProspectLead): string | null {
  if (!prospect.sourceRefs) return null;
  const places = prospect.sourceRefs.find(r => r.provider === "google_places" && r.id);
  return places?.id || null;
}

function isOrgMatch(prospect: ProspectLead, saved: SavedLead): boolean {
  // 1. PlaceId match (strongest)
  const prospectPlaceId = extractPlaceIdFromProspect(prospect);
  const savedPlaceId = extractPlaceId(saved.source_refs);
  if (prospectPlaceId && savedPlaceId && prospectPlaceId === savedPlaceId) return true;

  // 2. Website match
  const pw = normalizeWebsite(prospect.website);
  const sw = normalizeWebsite(saved.website);
  if (pw && sw && pw === sw) return true;

  // 3. Phone match
  const pp = normalizePhone(prospect.phone);
  const sp = normalizePhone(saved.phone);
  if (pp.length >= 7 && sp.length >= 7 && pp === sp) return true;

  // 4. Company + location match
  const pName = normalizeStr(prospect.companyName);
  const sName = normalizeStr(saved.company || saved.name);
  const pLoc = normalizeStr(prospect.location);
  const sLoc = normalizeStr(saved.location);
  if (pName && sName && pName === sName && pLoc && sLoc && pLoc === sLoc) return true;

  return false;
}

function isPersonMatch(prospect: ProspectLead, saved: SavedLead): boolean {
  // 1. Email match (strongest)
  const pe = (prospect.email || "").toLowerCase().trim();
  const se = (saved.email || "").toLowerCase().trim();
  if (pe && se && pe === se) return true;

  // 2. Phone match
  const pp = normalizePhone(prospect.phone);
  const sp = normalizePhone(saved.phone);
  if (pp.length >= 7 && sp.length >= 7 && pp === sp) return true;

  // 3. Name + employer + location match
  const pName = normalizeStr(prospect.contactName);
  const sName = normalizeStr(saved.name);
  const pOrg = normalizeStr(prospect.companyName);
  const sOrg = normalizeStr(saved.company);
  const pLoc = normalizeStr(prospect.location);
  const sLoc = normalizeStr(saved.location);
  if (pName && sName && pName === sName && pOrg && sOrg && pOrg === sOrg) return true;
  if (pName && sName && pName === sName && pLoc && sLoc && pLoc === sLoc) return true;

  return false;
}

export function isLeadAlreadySaved(prospect: ProspectLead, savedLeads: SavedLead[]): boolean {
  for (const saved of savedLeads) {
    if (prospect.mode === "person" || saved.entity_type === "person") {
      if (isPersonMatch(prospect, saved)) return true;
    } else {
      if (isOrgMatch(prospect, saved)) return true;
    }
  }
  return false;
}

export function filterOutSavedLeads<T extends ProspectLead>(prospects: T[], savedLeads: SavedLead[]): { filtered: T[]; deduped: number } {
  if (savedLeads.length === 0) return { filtered: prospects, deduped: 0 };

  const result: T[] = [];
  let deduped = 0;

  for (const prospect of prospects) {
    if (isLeadAlreadySaved(prospect, savedLeads)) {
      deduped++;
    } else {
      result.push(prospect);
    }
  }

  return { filtered: result, deduped };
}
