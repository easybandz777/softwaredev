import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

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
    if (!rows[0]) {
        return NextResponse.json({ id: 0, username: user.username, full_name: "Admin", email: "", role: user.role, has_smtp: false, outreach_prompt_rules: null });
    }
    return NextResponse.json(rows[0]);
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

    return NextResponse.json({ success: true });
}
