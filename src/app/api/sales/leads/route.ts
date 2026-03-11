import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/sales/leads — list all leads (consultations)
export async function GET(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const { rows } = await sql`
        SELECT c.*, u.full_name AS assigned_to_name
        FROM consultations c
        LEFT JOIN crm_users u ON c.assigned_to_id = u.id
        ORDER BY
            CASE c.status
                WHEN 'new' THEN 0
                WHEN 'contacted' THEN 1
                WHEN 'qualified' THEN 2
                WHEN 'proposal' THEN 3
                WHEN 'won' THEN 4
                WHEN 'lost' THEN 5
                ELSE 6
            END,
            c.created_at DESC
    `;
    return NextResponse.json(rows);
}

// PATCH /api/sales/leads — update a lead (assign, set status, set value, set follow-up)
export async function PATCH(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const body = await req.json();
    const { id, status, assigned_to_id, value_est, next_follow_up } = body;

    if (!id) return NextResponse.json({ error: "Missing lead id" }, { status: 400 });

    await ensureMigrated();

    if (status !== undefined) {
        const valid = ["new", "contacted", "qualified", "proposal", "won", "lost"];
        if (!valid.includes(status)) {
            return NextResponse.json({ error: "Invalid status" }, { status: 400 });
        }
        await sql`UPDATE consultations SET status = ${status} WHERE id = ${id}`;
    }
    if (assigned_to_id !== undefined) {
        await sql`UPDATE consultations SET assigned_to_id = ${assigned_to_id} WHERE id = ${id}`;
    }
    if (value_est !== undefined) {
        await sql`UPDATE consultations SET value_est = ${value_est} WHERE id = ${id}`;
    }
    if (next_follow_up !== undefined) {
        await sql`UPDATE consultations SET next_follow_up = ${next_follow_up || null} WHERE id = ${id}`;
    }

    return NextResponse.json({ success: true });
}
