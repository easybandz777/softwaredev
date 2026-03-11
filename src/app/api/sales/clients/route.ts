import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/sales/clients — list all clients
export async function GET(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const { rows } = await sql`
        SELECT cl.*, u.full_name AS assigned_to_name
        FROM clients cl
        LEFT JOIN crm_users u ON cl.assigned_to_id = u.id
        ORDER BY cl.created_at DESC
    `;
    return NextResponse.json(rows);
}

// POST /api/sales/clients — create a client (manually or from a won lead)
export async function POST(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const body = await req.json();
    const { company_name, primary_contact, email, phone, assigned_to_id, converted_from_lead_id } = body;

    if (!company_name || !primary_contact || !email) {
        return NextResponse.json({ error: "company_name, primary_contact, and email are required" }, { status: 400 });
    }

    await ensureMigrated();

    const { rows } = await sql`
        INSERT INTO clients (company_name, primary_contact, email, phone, assigned_to_id, converted_from_lead_id)
        VALUES (${company_name}, ${primary_contact}, ${email}, ${phone || null}, ${assigned_to_id || null}, ${converted_from_lead_id || null})
        RETURNING *
    `;

    return NextResponse.json(rows[0], { status: 201 });
}

// PATCH /api/sales/clients — update any client fields
export async function PATCH(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const body = await req.json();
    const { id, status, company_name, primary_contact, email, phone, assigned_to_id } = body;
    if (!id) return NextResponse.json({ error: "Missing client id" }, { status: 400 });

    await ensureMigrated();

    if (status) {
        if (!["active", "inactive"].includes(status)) {
            return NextResponse.json({ error: "Invalid status" }, { status: 400 });
        }
        await sql`UPDATE clients SET status = ${status} WHERE id = ${id}`;
    }
    if (company_name !== undefined) {
        await sql`UPDATE clients SET company_name = ${company_name} WHERE id = ${id}`;
    }
    if (primary_contact !== undefined) {
        await sql`UPDATE clients SET primary_contact = ${primary_contact} WHERE id = ${id}`;
    }
    if (email !== undefined) {
        await sql`UPDATE clients SET email = ${email} WHERE id = ${id}`;
    }
    if (phone !== undefined) {
        await sql`UPDATE clients SET phone = ${phone || null} WHERE id = ${id}`;
    }
    if (assigned_to_id !== undefined) {
        await sql`UPDATE clients SET assigned_to_id = ${assigned_to_id || null} WHERE id = ${id}`;
    }

    return NextResponse.json({ success: true });
}
