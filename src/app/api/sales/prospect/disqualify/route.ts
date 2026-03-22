import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// POST /api/sales/prospect/disqualify — mark a prospect as disqualified for this user
export async function POST(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const body = await req.json();
    const { mode, name, location, email, website } = body;

    if (!name || typeof name !== "string") {
        return NextResponse.json({ error: "name is required" }, { status: 400 });
    }

    await ensureMigrated();

    const normalizedName = name.trim().toLowerCase();
    const normalizedMode = mode === "person" ? "person" : "organization";

    await sql`
        INSERT INTO prospect_disqualifications (user_id, mode, name, location, email, website)
        VALUES (${user!.id}, ${normalizedMode}, ${normalizedName}, ${location || null}, ${email || null}, ${website || null})
        ON CONFLICT (user_id, mode, name) DO NOTHING
    `;

    return NextResponse.json({ success: true });
}

// DELETE /api/sales/prospect/disqualify — un-disqualify a prospect
export async function DELETE(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const body = await req.json();
    const { mode, name } = body;

    if (!name || typeof name !== "string") {
        return NextResponse.json({ error: "name is required" }, { status: 400 });
    }

    await ensureMigrated();

    const normalizedName = name.trim().toLowerCase();
    const normalizedMode = mode === "person" ? "person" : "organization";

    await sql`
        DELETE FROM prospect_disqualifications
        WHERE user_id = ${user!.id} AND mode = ${normalizedMode} AND name = ${normalizedName}
    `;

    return NextResponse.json({ success: true });
}
