import { NextRequest, NextResponse } from "next/server";
import { requireAuth, getSessionUser } from "@/lib/auth";
import { sql, ensureMigrated } from "@/lib/db";
import { generateText, resolveUserLlmConfig } from "@/lib/llm";

export const dynamic = "force-dynamic";

function buildLeadContext(lead: Record<string, unknown>) {
    const isPersonMode = lead.entityType === "person" || lead.entity_type === "person";
    const sections: string[] = [];

    if (isPersonMode) {
        sections.push(`CONTACT: ${lead.contactName || lead.name || ""}`);
        if (lead.companyName || lead.company || lead.employer) {
            sections.push(`EMPLOYER: ${lead.employer || lead.companyName || lead.company || ""}`);
        }
        if (lead.jobTitle || lead.job_title) sections.push(`TITLE: ${lead.jobTitle || lead.job_title}`);
    } else {
        sections.push(`COMPANY: ${lead.companyName || lead.company || ""}`);
        sections.push(`CONTACT: ${lead.contactName || lead.name || ""}`);
    }

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
        sections.push(`\n${isPersonMode ? "PROFILE DATA" : "BUSINESS AUDIT"}:\n${auditLines}`);
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
        const { lead, promptRules, presetInstructions, promptInstructions } = await req.json();
        const isPersonMode = lead?.entityType === "person" || lead?.entity_type === "person";

        if (!lead || (!isPersonMode && !lead.companyName && !lead.company) || (!lead.contactName && !lead.name)) {
            return NextResponse.json({
                success: false,
                error: isPersonMode
                    ? "Select a lead with a contact name to generate outreach."
                    : "Select a lead with a company name and contact to generate outreach.",
            }, { status: 400 });
        }

        const sessionUser = getSessionUser(req);
        if (!sessionUser) {
            return NextResponse.json({ success: false, error: "Session expired." }, { status: 401 });
        }

        const llmConfig = await resolveUserLlmConfig(sessionUser.id);
        if (!llmConfig) {
            return NextResponse.json({
                success: false,
                error: "No AI provider configured. Go to Settings > API Integrations to add your API key.",
            }, { status: 500 });
        }

        await ensureMigrated();
        let senderName = "Sales Team";
        let savedRules: Record<string, string> = {};
        const { rows } = await sql`SELECT full_name, outreach_prompt_rules FROM crm_users WHERE id = ${sessionUser.id} LIMIT 1`;
        if (rows[0]?.full_name) senderName = rows[0].full_name;
        if (rows[0]?.outreach_prompt_rules) {
            try { savedRules = typeof rows[0].outreach_prompt_rules === "string" ? JSON.parse(rows[0].outreach_prompt_rules) : rows[0].outreach_prompt_rules; } catch { /* ignore */ }
        }

        const defaultRules = {
            tone: "Professional but conversational — like a sharp colleague, not a marketer",
            maxLength: "120 words",
            callToAction: "Suggest a quick 10-minute call this week",
            avoidWords: "synergy, leverage, disrupt, innovative, cutting-edge, game-changer, scalable, I hope this finds you well",
            senderName,
        };
        const rules: Record<string, string> = { ...defaultRules, ...savedRules, ...(promptRules || {}) };

        const instructionParts: string[] = [];
        if (rules.customInstructions) instructionParts.push(rules.customInstructions);
        if (presetInstructions && typeof presetInstructions === "string" && presetInstructions.trim()) {
            instructionParts.push(presetInstructions.trim());
        }
        if (promptInstructions && typeof promptInstructions === "string" && promptInstructions.trim()) {
            instructionParts.push(promptInstructions.trim());
        }
        rules.customInstructions = instructionParts.join("\n\n");

        const hasAudit = lead.analysisData && typeof lead.analysisData === "object" && Object.keys(lead.analysisData).length > 0;
        const hasNotes = lead.notes && typeof lead.notes === "string" && lead.notes.trim().length > 0;

        const systemPrompt = isPersonMode
            ? `You are an elite professional outreach copywriter. You write emails that get replies because they are personal, specific, short, and lead with relevance to the recipient.

HARD RULES:
- Tone: ${rules.tone}
- Maximum length: ${rules.maxLength}
- Call to action: ${rules.callToAction}
- NEVER use these words/phrases: ${rules.avoidWords}
- End the body with just the sender's first name (e.g. "— ${rules.senderName.split(" ")[0]}"). Do NOT add a full signature block, title, company name, or contact info — the system appends a professional signature automatically.
- First sentence MUST reference something specific about the person or their role
- NO filler openers
- NO generic claims
- Subject line must be short (under 8 words), specific, and curiosity-driven

${hasAudit ? "You have profile data below. Reference SPECIFIC details about this person." : ""}
${hasNotes ? "Pay attention to the internal notes." : ""}
${rules.customInstructions ? `\nCUSTOM INSTRUCTIONS:\n${rules.customInstructions}` : ""}

FORMAT: First line is the subject line prefixed with "Subject: ", then a blank line, then the email body. Nothing else.`
            : `You are an elite B2B cold outreach copywriter. You write emails that get replies because they are specific, short, and lead with the prospect's problem.

HARD RULES:
- Tone: ${rules.tone}
- Maximum length: ${rules.maxLength}
- Call to action: ${rules.callToAction}
- NEVER use these words/phrases: ${rules.avoidWords}
- End the body with just the sender's first name (e.g. "— ${rules.senderName.split(" ")[0]}"). Do NOT add a full signature block, title, company name, or contact info — the system appends a professional signature automatically.
- First sentence MUST reference a specific detail about their business
- NO filler openers
- NO generic claims
- Subject line must be short (under 8 words), specific, and curiosity-driven

${hasAudit ? "You have a detailed business audit below. Reference the SPECIFIC weaknesses." : ""}
${hasNotes ? "Pay attention to the internal notes." : ""}
${rules.customInstructions ? `\nCUSTOM INSTRUCTIONS:\n${rules.customInstructions}` : ""}

FORMAT: First line is the subject line prefixed with "Subject: ", then a blank line, then the email body. Nothing else.`;

        const leadContext = buildLeadContext(lead);

        const response = await generateText(llmConfig, {
            systemPrompt,
            userPrompt: `Write a ${isPersonMode ? "personalized" : "cold"} outreach email for this ${isPersonMode ? "contact" : "prospect"}:\n\n${leadContext}`,
            temperature: 0.75,
            maxTokens: 500,
        });

        const lines = response.content.split("\n");
        let subject = "";
        let body = response.content;

        if (lines[0].toLowerCase().startsWith("subject:")) {
            subject = lines[0].replace(/^subject:\s*/i, "").trim();
            body = lines.slice(2).join("\n").trim();
        }

        return NextResponse.json({
            success: true,
            subject,
            content: body,
            tokensUsed: response.usage.totalTokens,
            provider: response.provider,
            model: response.model,
        });
    } catch (err) {
        console.error("Error generating outreach:", err);
        return NextResponse.json({ success: false, error: "Failed to generate email. Please try again." }, { status: 500 });
    }
}
