import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/sales/leads/[id]/notes — get notes for a lead
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id } = await params;
    await ensureMigrated();

    const { rows } = await sql`
        SELECT n.*, u.full_name AS author_name
        FROM lead_notes n
        LEFT JOIN crm_users u ON n.user_id = u.id
        WHERE n.lead_id = ${id}
        ORDER BY n.created_at DESC
    `;
    return NextResponse.json(rows);
}

// POST /api/sales/leads/[id]/notes — add a note to a lead
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id } = await params;
    const { note_text } = await req.json();

    if (!note_text?.trim()) {
        return NextResponse.json({ error: "Note text is required" }, { status: 400 });
    }

    await ensureMigrated();

    const { rows } = await sql`
        INSERT INTO lead_notes (lead_id, user_id, note_text)
        VALUES (${id}, ${user.id}, ${note_text.trim()})
        RETURNING *
    `;

    return NextResponse.json(rows[0], { status: 201 });
}
