import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id } = await params;
    const presetId = parseInt(id);

    await ensureMigrated();

    const { rows: existing } = await sql`SELECT id FROM sales_outreach_presets WHERE id = ${presetId} AND user_id = ${user.id}`;
    if (!existing[0]) return NextResponse.json({ error: "Preset not found" }, { status: 404 });

    const body = await req.json();
    const { name, instructions, industry_label, mode, description } = body;

    if (name !== undefined) {
        await sql`UPDATE sales_outreach_presets SET name = ${name.trim()}, updated_at = NOW() WHERE id = ${presetId} AND user_id = ${user.id}`;
    }
    if (instructions !== undefined) {
        await sql`UPDATE sales_outreach_presets SET instructions = ${instructions.trim()}, updated_at = NOW() WHERE id = ${presetId} AND user_id = ${user.id}`;
    }
    if (industry_label !== undefined) {
        await sql`UPDATE sales_outreach_presets SET industry_label = ${industry_label || null}, updated_at = NOW() WHERE id = ${presetId} AND user_id = ${user.id}`;
    }
    if (mode !== undefined) {
        await sql`UPDATE sales_outreach_presets SET mode = ${mode || null}, updated_at = NOW() WHERE id = ${presetId} AND user_id = ${user.id}`;
    }
    if (description !== undefined) {
        await sql`UPDATE sales_outreach_presets SET description = ${description || null}, updated_at = NOW() WHERE id = ${presetId} AND user_id = ${user.id}`;
    }

    const { rows } = await sql`SELECT * FROM sales_outreach_presets WHERE id = ${presetId}`;
    return NextResponse.json(rows[0]);
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id } = await params;
    const presetId = parseInt(id);

    await ensureMigrated();

    const { rows } = await sql`DELETE FROM sales_outreach_presets WHERE id = ${presetId} AND user_id = ${user.id} RETURNING id`;
    if (!rows[0]) return NextResponse.json({ error: "Preset not found" }, { status: 404 });

    return NextResponse.json({ success: true });
}
