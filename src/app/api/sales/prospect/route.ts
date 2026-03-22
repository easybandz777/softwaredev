import { NextRequest, NextResponse } from "next/server";
import { requireAuth, getSessionUser } from "@/lib/auth";
import { sql, ensureMigrated } from "@/lib/db";
import type { SearchMode, RawCandidate, SearchCriteria } from "@/lib/search/types";
import { OrganizationSearchProvider, OrganizationEnrichmentProvider } from "@/lib/search/providers/organization";
import { PersonSearchProvider, PersonEnrichmentProvider } from "@/lib/search/providers/person";
import { normalizeBatch } from "@/lib/search/normalize";
import { filterOutSavedLeads, type SavedLead } from "@/lib/search/dedupe";
import { generateJson, resolveUserLlmConfig } from "@/lib/llm";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const orgSearch = new OrganizationSearchProvider();
const orgEnrich = new OrganizationEnrichmentProvider();
const personSearch = new PersonSearchProvider();
const personEnrich = new PersonEnrichmentProvider();

function filterOrganizations(candidates: RawCandidate[], filters: SearchCriteria): RawCandidate[] {
    return candidates.filter((c) => {
        if (filters.requireWebsite && !c.website) return false;
        if (filters.includeNoWebsite === false && !c.website) return false;
        if (filters.requireEmail && c.emails.length === 0) return false;
        if (filters.requirePhone && c.phones.length === 0) return false;
        const rating = (c.raw.rating as number) ?? 0;
        const reviewCount = (c.raw.reviewCount as number) ?? 0;
        if ((filters.minRating ?? 0) > 0 && rating < (filters.minRating ?? 0)) return false;
        if ((filters.minReviews ?? 0) > 0 && reviewCount < (filters.minReviews ?? 0)) return false;
        if (filters.locationKeywords.length > 0) {
            const loc = (c.location || "").toLowerCase();
            if (!filters.locationKeywords.some((kw) => loc.includes(kw.toLowerCase()))) return false;
        }
        return true;
    });
}

function filterPersons(candidates: RawCandidate[], filters: SearchCriteria): RawCandidate[] {
    return candidates.filter((c) => {
        if (filters.requireEmail && c.emails.length === 0) return false;
        if (filters.requirePhone && c.phones.length === 0) return false;
        if (filters.locationKeywords.length > 0) {
            const loc = (c.location || "").toLowerCase();
            if (!filters.locationKeywords.some((kw) => loc.includes(kw.toLowerCase()))) return false;
        }
        if (filters.titleKeywords && filters.titleKeywords.length > 0) {
            const title = (c.jobTitle || "").toLowerCase();
            if (!filters.titleKeywords.some((kw) => title.includes(kw.toLowerCase()))) return false;
        }
        if (filters.employerKeywords && filters.employerKeywords.length > 0) {
            const org = (c.organization || "").toLowerCase();
            if (!filters.employerKeywords.some((kw) => org.includes(kw.toLowerCase()))) return false;
        }
        return true;
    });
}

function sortOrganizations(candidates: RawCandidate[]): RawCandidate[] {
    return [...candidates].sort((a, b) => {
        const aScore = (a.emails.length > 0 ? 3 : 0) + (a.phones.length > 0 ? 1 : 0) + ((a.raw.rating as number) ? 1 : 0);
        const bScore = (b.emails.length > 0 ? 3 : 0) + (b.phones.length > 0 ? 1 : 0) + ((b.raw.rating as number) ? 1 : 0);
        return bScore - aScore;
    });
}

function sortPersons(candidates: RawCandidate[]): RawCandidate[] {
    return [...candidates].sort((a, b) => {
        const aScore = (a.emails.length > 0 ? 3 : 0) + (a.phones.length > 0 ? 2 : 0) + (a.organization ? 1 : 0);
        const bScore = (b.emails.length > 0 ? 3 : 0) + (b.phones.length > 0 ? 2 : 0) + (b.organization ? 1 : 0);
        return bScore - aScore;
    });
}

function buildOrgAiPrompt(query: string, candidates: RawCandidate[]): string {
    const list = candidates
        .map(
            (c, i) =>
                `Business ${i + 1}:\n- Name: ${c.primaryLabel}\n- Location: ${c.location}\n- Website: ${c.website || "N/A"}\n- Phone: ${c.phones[0] || "N/A"}\n- Email: ${c.emails[0] || "Not found"}\n- Google Rating: ${c.raw.rating ? `${c.raw.rating}/5 (${c.raw.reviewCount} reviews)` : "No data"}\n- Business Types: ${((c.raw.types as string[]) || []).slice(0, 4).join(", ")}`,
        )
        .join("\n\n");

    return `You are a senior sales intelligence analyst. Review these ${candidates.length} businesses found for: "${query}"

For EACH business, provide:
1. niche: Precise 2-4 word sub-niche
2. contactName: Decision-maker title
3. summary: 1-2 sentences about this business
4. why: A specific, actionable pain point or opportunity
5. confidence: Rate 1-5

${list}

Return ONLY valid JSON:
{ "results": [{ "index": 0, "niche": "...", "contactName": "...", "summary": "...", "why": "...", "confidence": 4 }] }`;
}

function buildPersonAiPrompt(query: string, candidates: RawCandidate[]): string {
    const list = candidates
        .map(
            (c, i) =>
                `Person ${i + 1}:\n- Name: ${c.primaryLabel}\n- Employer: ${c.organization || "Unknown"}\n- Title: ${c.jobTitle || "Unknown"}\n- Location: ${c.location || "Unknown"}\n- Email: ${c.emails[0] || "Not found"}\n- Phone: ${c.phones[0] || "Not found"}\n- Source: ${c.sourceRefs[0]?.url || "N/A"}`,
        )
        .join("\n\n");

    return `You are a research assistant helping find and qualify contacts. Review these ${candidates.length} people found for: "${query}"

For EACH person, provide:
1. niche: Their likely profession or industry (2-4 words)
2. contactName: Their full name or best guess
3. summary: 1-2 sentences about this person based on available info
4. why: Why this person might be a valuable contact for the query
5. confidence: Rate 1-5 how confident you are this is the right person

${list}

Return ONLY valid JSON:
{ "results": [{ "index": 0, "niche": "...", "contactName": "...", "summary": "...", "why": "...", "confidence": 4 }] }`;
}

export async function POST(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    try {
        const body = await req.json();
        const mode: SearchMode = body.mode === "person" ? "person" : "organization";
        const { query, maxResults = 5, criteria } = body;

        const filters: SearchCriteria = {
            requireWebsite: criteria?.requireWebsite ?? false,
            requireEmail: criteria?.requireEmail ?? false,
            requirePhone: criteria?.requirePhone ?? false,
            minRating: typeof criteria?.minRating === "number" ? criteria.minRating : 0,
            minReviews: typeof criteria?.minReviews === "number" ? criteria.minReviews : 0,
            minQualityScore: typeof criteria?.minQualityScore === "number" ? criteria.minQualityScore : 0,
            nicheKeywords: Array.isArray(criteria?.nicheKeywords) ? (criteria.nicheKeywords as string[]) : [],
            locationKeywords: Array.isArray(criteria?.locationKeywords) ? (criteria.locationKeywords as string[]) : [],
            includeNoWebsite: criteria?.includeNoWebsite ?? true,
            titleKeywords: Array.isArray(criteria?.titleKeywords) ? (criteria.titleKeywords as string[]) : [],
            employerKeywords: Array.isArray(criteria?.employerKeywords) ? (criteria.employerKeywords as string[]) : [],
        };

        if (!query || typeof query !== "string" || query.trim().length < 3) {
            return NextResponse.json({ error: "Please enter a more specific search (at least 3 characters)." }, { status: 400 });
        }

        const limit = Math.min(Math.max(Number(maxResults) || 5, 1), 10);
        const startTime = Date.now();

        // ── Discovery ─────────────────────────────────────────────────────────
        const searchProvider = mode === "organization" ? orgSearch : personSearch;
        let candidates: RawCandidate[];
        try {
            candidates = await searchProvider.search(query, limit);
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : "Search failed";
            const userMessage = msg.includes("API_KEY")
                ? `${mode === "organization" ? "Google Places" : "Search"} API key is not configured. Contact your admin.`
                : `Search failed. Try a different query or check your connection.`;
            return NextResponse.json({ error: userMessage }, { status: 500 });
        }

        if (candidates.length === 0) {
            return NextResponse.json({
                leads: [],
                meta: { query: query.trim(), mode, discovered: 0, enriched: 0, filtered: 0, returned: 0, elapsedMs: Date.now() - startTime },
                message: mode === "organization"
                    ? "No businesses found. Try a broader location or different industry."
                    : "No contacts found. Try a different search or check your configuration.",
            });
        }

        // ── Enrichment ────────────────────────────────────────────────────────
        const pool = candidates.slice(0, Math.min(limit * 2, candidates.length));
        const enrichProvider = mode === "organization" ? orgEnrich : personEnrich;

        let enriched: RawCandidate[];
        try {
            enriched = await Promise.race([
                enrichProvider.enrich(pool, 5),
                new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Enrichment timeout")), 25000)),
            ]);
        } catch {
            enriched = pool;
        }

        // ── Filtering ─────────────────────────────────────────────────────────
        let filtered = mode === "organization" ? filterOrganizations(enriched, filters) : filterPersons(enriched, filters);
        filtered = mode === "organization" ? sortOrganizations(filtered) : sortPersons(filtered);
        const finalCandidates = filtered.slice(0, limit);

        // ── AI Qualification (provider-agnostic) ──────────────────────────────
        type AiResult = { index: number; niche?: string; contactName?: string; summary?: string; why?: string; confidence?: number };
        let aiResults: AiResult[] | null = null;

        const sessionUser = getSessionUser(req);
        const llmConfig = sessionUser ? await resolveUserLlmConfig(sessionUser.id) : null;

        if (llmConfig && finalCandidates.length > 0) {
            try {
                const elapsed = Date.now() - startTime;
                const aiTimeout = Math.max(10000, 55000 - elapsed);

                const aiPrompt =
                    mode === "organization"
                        ? buildOrgAiPrompt(query, finalCandidates)
                        : buildPersonAiPrompt(query, finalCandidates);

                const aiResponse = await Promise.race([
                    generateJson(llmConfig, { prompt: aiPrompt, temperature: 0.7 }),
                    new Promise<never>((_, reject) => setTimeout(() => reject(new Error("AI timeout")), aiTimeout)),
                ]);

                let aiData: { results?: AiResult[] };
                try {
                    aiData = JSON.parse(aiResponse.content);
                } catch {
                    aiData = { results: [] };
                }
                aiResults = aiData.results || [];
            } catch {
                aiResults = null;
            }
        }

        // ── Normalize to SearchEntity[] ───────────────────────────────────────
        const entities = normalizeBatch(
            finalCandidates,
            aiResults?.map((r) => ({
                index: r.index,
                summary: r.summary,
                opportunity: r.why,
                niche: r.niche,
                contactName: r.contactName,
                confidence: r.confidence,
            })),
        );

        // ── Post-filters on scored entities ───────────────────────────────────
        let results = entities.sort((a, b) => b.confidence - a.confidence);

        if (filters.minQualityScore > 0) {
            results = results.filter((e) => e.confidence >= filters.minQualityScore);
        }
        if (mode === "organization" && (filters.nicheKeywords?.length ?? 0) > 0) {
            results = results.filter((e) => {
                const niche = (e.orgData?.niche || "").toLowerCase();
                return filters.nicheKeywords!.some((kw) => niche.includes(kw.toLowerCase()));
            });
        }

        // ── Backward-compatible response ──────────────────────────────────────
        const leads = results.map((e) => ({
            mode: e.mode,
            companyName: e.mode === "organization" ? e.primaryLabel : (e.organization || ""),
            contactName: e.mode === "organization"
                ? (aiResults?.find((_, idx) => idx === results.indexOf(e))?.contactName || "Owner")
                : e.primaryLabel,
            phone: e.phones[0] || null,
            email: e.emails[0] || null,
            emailMissing: e.emails.length === 0,
            website: e.website,
            location: e.location,
            niche: e.orgData?.niche || (e.personData?.title || "Contact"),
            summary: e.summary,
            why: e.opportunity,
            rating: e.orgData?.rating || null,
            reviewCount: e.orgData?.reviewCount || 0,
            qualityScore: e.confidence,
            completenessScore: e.completenessScore,
            jobTitle: e.personData?.title || null,
            employer: e.personData?.employer || null,
            socialProfiles: e.personData?.socialProfiles || [],
            sourceRefs: e.sourceRefs,
        }));

        // ── Dedupe: exclude leads already saved by this salesperson ──────────
        let finalLeads = leads;
        let dedupedCount = 0;
        if (sessionUser) {
            await ensureMigrated();
            const { rows: savedRows } = await sql`
                SELECT id, name, email, phone, company, website, location, entity_type, source_refs
                FROM consultations
                WHERE assigned_to_id = ${sessionUser.id}
            `;
            if (savedRows.length > 0) {
                const dedupeResult = filterOutSavedLeads(leads, savedRows as unknown as SavedLead[]);
                finalLeads = dedupeResult.filtered;
                dedupedCount = dedupeResult.deduped;
            }
        }

        return NextResponse.json({
            leads: finalLeads,
            meta: {
                query: query.trim(),
                mode,
                discovered: candidates.length,
                enriched: enriched.filter((c) => c.emails.length > 0).length,
                filtered: enriched.length - filtered.length,
                deduped: dedupedCount,
                returned: finalLeads.length,
                elapsedMs: Date.now() - startTime,
                aiProvider: llmConfig?.provider || null,
            },
        });
    } catch (err) {
        console.error("Prospect API Error:", err);
        return NextResponse.json({ error: "Something went wrong generating leads. Please try again." }, { status: 500 });
    }
}
