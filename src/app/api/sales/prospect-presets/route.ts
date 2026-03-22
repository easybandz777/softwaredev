import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const { rows } = await sql`
        SELECT id, name, criteria, is_default, created_at, updated_at
        FROM sales_prospect_presets
        WHERE user_id = ${user.id}
        ORDER BY is_default DESC, updated_at DESC
    `;

    const parsed = rows.map(r => ({
        ...r,
        criteria: typeof r.criteria === "string" ? JSON.parse(r.criteria) : r.criteria,
    }));

    return NextResponse.json(parsed);
}

export async function POST(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const body = await req.json();
    const { name, criteria, is_default } = body;

    if (!name || typeof name !== "string" || !name.trim()) {
        return NextResponse.json({ error: "Preset name is required" }, { status: 400 });
    }

    await ensureMigrated();

    if (is_default) {
        await sql`UPDATE sales_prospect_presets SET is_default = FALSE WHERE user_id = ${user.id}`;
    }

    const criteriaJson = JSON.stringify(criteria || {});

    const { rows } = await sql`
        INSERT INTO sales_prospect_presets (user_id, name, criteria, is_default)
        VALUES (${user.id}, ${name.trim()}, ${criteriaJson}, ${!!is_default})
        RETURNING *
    `;

    const row = rows[0];
    return NextResponse.json({
        ...row,
        criteria: typeof row.criteria === "string" ? JSON.parse(row.criteria) : row.criteria,
    }, { status: 201 });
}
