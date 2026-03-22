import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const { rows } = await sql`
        SELECT id, name, instructions, industry_label, mode, description, created_at, updated_at
        FROM sales_outreach_presets
        WHERE user_id = ${user.id}
        ORDER BY updated_at DESC
    `;

    return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const body = await req.json();
    const { name, instructions, industry_label, mode, description } = body;

    if (!name || typeof name !== "string" || !name.trim()) {
        return NextResponse.json({ error: "Preset name is required" }, { status: 400 });
    }
    if (!instructions || typeof instructions !== "string" || !instructions.trim()) {
        return NextResponse.json({ error: "Instructions are required" }, { status: 400 });
    }

    await ensureMigrated();

    const { rows } = await sql`
        INSERT INTO sales_outreach_presets (user_id, name, instructions, industry_label, mode, description)
        VALUES (${user.id}, ${name.trim()}, ${instructions.trim()}, ${industry_label || null}, ${mode || null}, ${description || null})
        RETURNING *
    `;

    return NextResponse.json(rows[0], { status: 201 });
}
