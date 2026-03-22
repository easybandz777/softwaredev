import { NextRequest, NextResponse } from "next/server";
import { requireAuth, getSessionUser } from "@/lib/auth";
import { sql, ensureMigrated } from "@/lib/db";
import OpenAI from "openai";

export const dynamic = "force-dynamic";

function buildLeadContext(lead: Record<string, unknown>) {
    const sections: string[] = [];
    sections.push(`COMPANY: ${lead.companyName || lead.company || ""}`);
    sections.push(`CONTACT: ${lead.contactName || lead.name || ""}`);
    if (lead.niche) sections.push(`INDUSTRY: ${lead.niche}`);
    if (lead.location) sections.push(`LOCATION: ${lead.location}`);
    if (lead.website) sections.push(`WEBSITE: ${lead.website}`);

    if (lead.analysisData && typeof lead.analysisData === "object" && Object.keys(lead.analysisData as object).length > 0) {
        const auditLines = Object.entries(lead.analysisData as Record<string, { rating?: string; notes?: string }>)
            .map(([key, val]) => {
                const label = key.replace(/([A-Z])/g, " $1").trim();
                return `- ${label}: ${val?.rating || "unknown"}${val?.notes ? ` — ${val.notes}` : ""}`;
            })
            .join("\n");
        sections.push(`\nBUSINESS AUDIT:\n${auditLines}`);
    }

    if (Array.isArray(lead.solutions) && lead.solutions.length > 0) {
        sections.push(`\nMATCHED SOLUTIONS: ${lead.solutions.join(", ")}`);
    }

    if (lead.notes && typeof lead.notes === "string" && lead.notes.trim()) {
        sections.push(`\nINTERNAL NOTES:\n${lead.notes}`);
    }
    return sections.join("\n");
}

export async function POST(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    try {
        const { lead, promptRules } = await req.json();

        if (!lead || (!lead.companyName && !lead.company) || (!lead.contactName && !lead.name)) {
            return NextResponse.json({ success: false, error: "Select a lead with a company name and contact to generate outreach." }, { status: 400 });
        }

        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ success: false, error: "OpenAI API key is not configured. Contact your admin." }, { status: 500 });
        }

        const openai = new OpenAI({ apiKey });

        await ensureMigrated();
        let senderName = "QuantLab Sales Team";
        let savedRules: Record<string, string> = {};
        const sessionUser = getSessionUser(req);
        if (sessionUser) {
            const { rows } = await sql`SELECT full_name, outreach_prompt_rules FROM crm_users WHERE id = ${sessionUser.id} LIMIT 1`;
            if (rows[0]?.full_name) senderName = rows[0].full_name;
            if (rows[0]?.outreach_prompt_rules) {
                try { savedRules = typeof rows[0].outreach_prompt_rules === "string" ? JSON.parse(rows[0].outreach_prompt_rules) : rows[0].outreach_prompt_rules; } catch { /* ignore */ }
            }
        }

        const defaultRules = {
            tone: "Professional but conversational — like a sharp colleague, not a marketer",
            maxLength: "120 words",
            callToAction: "Suggest a quick 10-minute call this week",
            avoidWords: "synergy, leverage, disrupt, innovative, cutting-edge, game-changer, scalable, I hope this finds you well",
            senderName,
        };
        const rules = { ...defaultRules, ...savedRules, ...(promptRules || {}) };

        const hasAudit = lead.analysisData && typeof lead.analysisData === "object" && Object.keys(lead.analysisData).length > 0;
        const hasNotes = lead.notes && typeof lead.notes === "string" && lead.notes.trim().length > 0;

        const systemPrompt = `You are an elite B2B cold outreach copywriter. You write emails that get replies because they are specific, short, and lead with the prospect's problem.

HARD RULES:
- Tone: ${rules.tone}
- Maximum length: ${rules.maxLength}
- Call to action: ${rules.callToAction}
- NEVER use these words/phrases: ${rules.avoidWords}
- Sign off as: ${rules.senderName}
- First sentence MUST reference a specific detail about their business
- NO filler openers
- NO generic claims
- Subject line must be short (under 8 words), specific, and curiosity-driven

${hasAudit ? "You have a detailed business audit below. Reference the SPECIFIC weaknesses." : ""}
${hasNotes ? "Pay attention to the internal notes." : ""}
${rules.customInstructions ? `\nCUSTOM INSTRUCTIONS:\n${rules.customInstructions}` : ""}

FORMAT: First line is the subject line prefixed with "Subject: ", then a blank line, then the email body. Nothing else.`;

        const leadContext = buildLeadContext(lead);
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: `Write a cold outreach email for this prospect:\n\n${leadContext}` },
            ],
            temperature: 0.75,
            max_tokens: 500,
        });

        const content = response.choices[0].message.content || "";
        const lines = content.split("\n");
        let subject = "";
        let body = content;

        if (lines[0].toLowerCase().startsWith("subject:")) {
            subject = lines[0].replace(/^subject:\s*/i, "").trim();
            body = lines.slice(2).join("\n").trim();
        }

        return NextResponse.json({
            success: true,
            subject,
            content: body,
            tokensUsed: response.usage?.total_tokens || 0,
        });
    } catch (err) {
        console.error("Error generating outreach:", err);
        return NextResponse.json({ success: false, error: "Failed to generate email. Please try again." }, { status: 500 });
    }
}
