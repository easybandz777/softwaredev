import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const { rows } = await sql`SELECT id, username, full_name, email, role, referral_code, (smtp_pass IS NOT NULL AND smtp_pass != '') AS has_smtp FROM crm_users WHERE id = ${user.id} LIMIT 1`;
    if (!rows[0]) {
        return NextResponse.json({ id: 0, username: user.username, full_name: "Admin", email: "", role: user.role, has_smtp: false });
    }
    return NextResponse.json(rows[0]);
}

export async function PATCH(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const body = await req.json();
    const { smtp_pass } = body;

    if (smtp_pass !== undefined) {
        await sql`UPDATE crm_users SET smtp_pass = ${smtp_pass || null} WHERE id = ${user.id}`;
    }

    return NextResponse.json({ success: true });
}
