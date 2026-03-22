import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";
import { getUserLlmMeta } from "@/lib/llm/config";
import { encrypt } from "@/lib/llm/crypto";
import { PROVIDER_MODELS } from "@/lib/llm/types";
import type { LlmProvider } from "@/lib/llm/types";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const { rows } = await sql`
        SELECT id, username, full_name, email, role, referral_code,
            (smtp_pass IS NOT NULL AND smtp_pass != '') AS has_smtp,
            outreach_prompt_rules
        FROM crm_users WHERE id = ${user.id} LIMIT 1
    `;

    const llmMeta = await getUserLlmMeta(user.id);

    if (!rows[0]) {
        return NextResponse.json({
            id: 0, username: user.username, full_name: "Admin", email: "", role: user.role,
            has_smtp: false, outreach_prompt_rules: null, ...llmMeta,
        });
    }
    return NextResponse.json({ ...rows[0], ...llmMeta });
}

export async function PATCH(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const body = await req.json();

    if (body.smtp_pass !== undefined) {
        await sql`UPDATE crm_users SET smtp_pass = ${body.smtp_pass || null} WHERE id = ${user.id}`;
    }

    if (body.outreach_prompt_rules !== undefined) {
        const rulesJson = body.outreach_prompt_rules ? (typeof body.outreach_prompt_rules === "string" ? body.outreach_prompt_rules : JSON.stringify(body.outreach_prompt_rules)) : null;
        await sql`UPDATE crm_users SET outreach_prompt_rules = ${rulesJson} WHERE id = ${user.id}`;
    }

    // ── LLM provider configuration ──────────────────────────────────────
    if (body.llm_config !== undefined) {
        const cfg = body.llm_config;

        if (cfg === null || cfg.clear === true) {
            await sql`DELETE FROM crm_user_llm_configs WHERE user_id = ${user.id}`;
            return NextResponse.json({ success: true, llm_cleared: true });
        }

        const provider = (cfg.provider as LlmProvider) || "openai";
        if (!PROVIDER_MODELS[provider]) {
            return NextResponse.json({ error: `Unsupported provider: ${provider}` }, { status: 400 });
        }

        const model = cfg.model || PROVIDER_MODELS[provider].default;
        const apiKey = (cfg.api_key as string || "").trim();

        if (!apiKey) {
            return NextResponse.json({ error: "API key is required" }, { status: 400 });
        }

        const encryptedKey = encrypt(apiKey);

        await sql`
            INSERT INTO crm_user_llm_configs (user_id, provider, model, api_key_encrypted, updated_at)
            VALUES (${user.id}, ${provider}, ${model}, ${encryptedKey}, NOW())
            ON CONFLICT (user_id) DO UPDATE
                SET provider = ${provider},
                    model = ${model},
                    api_key_encrypted = ${encryptedKey},
                    updated_at = NOW(),
                    validated_at = NULL,
                    last_validation_error = NULL
        `;

        return NextResponse.json({ success: true, llm_provider: provider, llm_model: model });
    }

    return NextResponse.json({ success: true });
}
