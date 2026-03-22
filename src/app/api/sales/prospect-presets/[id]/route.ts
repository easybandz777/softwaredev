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

    const { rows: existing } = await sql`SELECT id FROM sales_prospect_presets WHERE id = ${presetId} AND user_id = ${user.id}`;
    if (!existing[0]) return NextResponse.json({ error: "Preset not found" }, { status: 404 });

    const body = await req.json();
    const { name, criteria, is_default } = body;

    if (is_default) {
        await sql`UPDATE sales_prospect_presets SET is_default = FALSE WHERE user_id = ${user.id}`;
    }

    if (name !== undefined) {
        await sql`UPDATE sales_prospect_presets SET name = ${name.trim()}, updated_at = NOW() WHERE id = ${presetId} AND user_id = ${user.id}`;
    }
    if (criteria !== undefined) {
        const criteriaJson = JSON.stringify(criteria);
        await sql`UPDATE sales_prospect_presets SET criteria = ${criteriaJson}, updated_at = NOW() WHERE id = ${presetId} AND user_id = ${user.id}`;
    }
    if (is_default !== undefined) {
        await sql`UPDATE sales_prospect_presets SET is_default = ${!!is_default}, updated_at = NOW() WHERE id = ${presetId} AND user_id = ${user.id}`;
    }

    const { rows } = await sql`SELECT * FROM sales_prospect_presets WHERE id = ${presetId}`;
    const row = rows[0];
    return NextResponse.json({
        ...row,
        criteria: typeof row.criteria === "string" ? JSON.parse(row.criteria) : row.criteria,
    });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id } = await params;
    const presetId = parseInt(id);

    await ensureMigrated();

    const { rows } = await sql`DELETE FROM sales_prospect_presets WHERE id = ${presetId} AND user_id = ${user.id} RETURNING id`;
    if (!rows[0]) return NextResponse.json({ error: "Preset not found" }, { status: 404 });

    return NextResponse.json({ success: true });
}
