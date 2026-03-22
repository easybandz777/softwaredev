import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import OpenAI from "openai";
import { searchPlaces, type PlaceCandidate } from "@/lib/places";
import { enrichWithEmails } from "@/lib/scraper";

type EnrichedCandidate = PlaceCandidate & { email: string | null; emailMissing: boolean };

export const dynamic = "force-dynamic";
export const maxDuration = 60;

function scoreLeadQuality(lead: Record<string, unknown>) {
    let score = 0;
    if (lead.email) score += 30;
    if (lead.phone) score += 15;
    if (lead.website) score += 10;
    if (typeof lead.rating === "number" && lead.rating >= 3.5) score += 10;
    if (typeof lead.reviewCount === "number" && lead.reviewCount >= 10) score += 5;
    if (typeof lead.reviewCount === "number" && lead.reviewCount >= 50) score += 5;
    if (typeof lead.aiQuality === "number") score += lead.aiQuality;
    return Math.min(score, 100);
}

export async function POST(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    try {
        const body = await req.json();
        const { query, maxResults = 5 } = body;

        if (!query || typeof query !== "string" || query.trim().length < 3) {
            return NextResponse.json({ error: "Please enter a more specific search (at least 3 characters)." }, { status: 400 });
        }

        const limit = Math.min(Math.max(Number(maxResults) || 5, 1), 10);
        const startTime = Date.now();

        let candidates;
        try {
            candidates = await searchPlaces(query, limit);
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : "Search failed";
            const userMessage = msg.includes("API_KEY")
                ? "Google Places API key is not configured. Contact your admin."
                : "Business search failed. Try a different query or check your connection.";
            return NextResponse.json({ error: userMessage }, { status: 500 });
        }

        if (candidates.length === 0) {
            return NextResponse.json({
                leads: [],
                meta: { discovered: 0, enriched: 0, returned: 0, elapsedMs: Date.now() - startTime },
                message: "No businesses found. Try a broader location or different industry.",
            });
        }

        const pool = candidates.slice(0, Math.min(limit * 2, candidates.length));

        let enriched: EnrichedCandidate[];
        try {
            enriched = await Promise.race([
                enrichWithEmails(pool as (PlaceCandidate & Record<string, unknown>)[], 5) as Promise<EnrichedCandidate[]>,
                new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Scraping timeout")), 25000)),
            ]);
        } catch {
            enriched = pool.map(l => ({ ...l, email: null as string | null, emailMissing: true }));
        }

        enriched.sort((a, b) => {
            const aScore = (a.email ? 3 : 0) + (a.phone ? 1 : 0) + (a.rating ? 1 : 0);
            const bScore = (b.email ? 3 : 0) + (b.phone ? 1 : 0) + (b.rating ? 1 : 0);
            return bScore - aScore;
        });

        const finalLeads = enriched.slice(0, limit);

        let qualifiedLeads;
        const apiKey = process.env.OPENAI_API_KEY;
        if (apiKey) {
            try {
                const openai = new OpenAI({ apiKey });
                const elapsed = Date.now() - startTime;
                const aiTimeout = Math.max(10000, 55000 - elapsed);

                const businessList = finalLeads.map((lead, i) =>
                    `Business ${i + 1}:\n- Name: ${lead.companyName}\n- Location: ${lead.location}\n- Website: ${lead.website || "N/A"}\n- Phone: ${lead.phone || "N/A"}\n- Email: ${lead.email || "Not found"}\n- Google Rating: ${lead.rating ? `${lead.rating}/5 (${lead.reviewCount} reviews)` : "No data"}\n- Business Types: ${(lead.types || []).slice(0, 4).join(", ")}`
                ).join("\n\n");

                const aiPrompt = `You are a senior B2B sales intelligence analyst. Review these ${finalLeads.length} businesses found for: "${query}"\n\nFor EACH business, provide:\n1. niche: Precise 2-4 word sub-niche\n2. contactName: Decision-maker title\n3. summary: 1-2 sentences about this business\n4. why: A specific, actionable pain point or opportunity\n5. confidence: Rate 1-5\n\n${businessList}\n\nReturn ONLY valid JSON:\n{ "results": [{ "index": 0, "niche": "...", "contactName": "...", "summary": "...", "why": "...", "confidence": 4 }] }`;

                const aiResponse = await Promise.race([
                    openai.chat.completions.create({
                        model: "gpt-4o-mini",
                        messages: [{ role: "user", content: aiPrompt }],
                        temperature: 0.7,
                        response_format: { type: "json_object" },
                    }),
                    new Promise<never>((_, reject) => setTimeout(() => reject(new Error("AI timeout")), aiTimeout)),
                ]);

                let aiData: { results?: { index: number; niche?: string; contactName?: string; summary?: string; why?: string; confidence?: number }[] };
                try { aiData = JSON.parse(aiResponse.choices[0].message.content || "{}"); } catch { aiData = { results: [] }; }
                const aiResults = aiData.results || [];

                qualifiedLeads = finalLeads.map((lead, i) => {
                    const ai = aiResults.find(r => r.index === i);
                    const enrichedLead: Record<string, unknown> = {
                        companyName: lead.companyName,
                        contactName: ai?.contactName || "Owner",
                        phone: lead.phone || null,
                        email: lead.email || null,
                        emailMissing: lead.emailMissing || !lead.email,
                        website: lead.website || null,
                        location: lead.location,
                        niche: ai?.niche || (lead.types?.[0]?.replace(/_/g, " ") || "Business"),
                        summary: ai?.summary || "",
                        why: ai?.why || "",
                        rating: lead.rating || null,
                        reviewCount: lead.reviewCount || 0,
                        aiQuality: (ai?.confidence || 3) * 5,
                    };
                    enrichedLead.qualityScore = scoreLeadQuality(enrichedLead);
                    return enrichedLead;
                });
                qualifiedLeads.sort((a, b) => (b.qualityScore as number) - (a.qualityScore as number));
            } catch {
                qualifiedLeads = null;
            }
        }

        if (!qualifiedLeads) {
            qualifiedLeads = finalLeads.map((lead: EnrichedCandidate) => {
                const enrichedLead: Record<string, unknown> = {
                    companyName: lead.companyName,
                    contactName: "Owner",
                    phone: lead.phone || null,
                    email: lead.email || null,
                    emailMissing: lead.emailMissing || !lead.email,
                    website: lead.website || null,
                    location: lead.location,
                    niche: (lead.types?.[0]?.replace(/_/g, " ") || "Business"),
                    summary: "",
                    why: "",
                    rating: lead.rating || null,
                    reviewCount: lead.reviewCount || 0,
                    aiQuality: 0,
                };
                enrichedLead.qualityScore = scoreLeadQuality(enrichedLead);
                return enrichedLead;
            });
        }

        return NextResponse.json({
            leads: qualifiedLeads,
            meta: {
                query: query.trim(),
                discovered: candidates.length,
                enriched: enriched.filter(l => l.email).length,
                returned: qualifiedLeads.length,
                elapsedMs: Date.now() - startTime,
            },
        });
    } catch (err) {
        console.error("Prospect API Error:", err);
        return NextResponse.json({ error: "Something went wrong generating leads. Please try again." }, { status: 500 });
    }
}
