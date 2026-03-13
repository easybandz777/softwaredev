import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/sales/users — list all CRM users
export async function GET(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const { rows } = await sql`
        SELECT id, username, full_name, email, role, created_at
        FROM crm_users
        ORDER BY role ASC, full_name ASC
    `;
    return NextResponse.json(rows);
}

// DELETE /api/sales/users — remove a user (admin only)
export async function DELETE(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const body = await req.json();
    const { id } = body;
    if (!id) return NextResponse.json({ error: "Missing user id" }, { status: 400 });

    // Prevent self-deletion
    if (user!.id === id) {
        return NextResponse.json({ error: "Cannot delete yourself" }, { status: 400 });
    }

    await ensureMigrated();

    // Unassign any leads/clients owned by this user (don't delete them)
    await sql`UPDATE consultations SET assigned_to_id = NULL WHERE assigned_to_id = ${id}`;
    await sql`UPDATE clients SET assigned_to_id = NULL WHERE assigned_to_id = ${id}`;

    // Delete the user
    await sql`DELETE FROM crm_users WHERE id = ${id}`;

    return NextResponse.json({ success: true });
}
