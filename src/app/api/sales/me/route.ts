import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/sales/me — get current user info from session
export async function GET(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const { rows } = await sql`SELECT id, username, full_name, email, role, referral_code FROM crm_users WHERE id = ${user.id} LIMIT 1`;
    if (!rows[0]) {
        // Fallback for legacy admin
        return NextResponse.json({ id: 0, username: user.username, full_name: "Admin", email: "", role: user.role });
    }
    return NextResponse.json(rows[0]);
}
