import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/sales/clients/[id]/recordings — list recordings for a client
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id } = await params;
    await ensureMigrated();

    const { rows } = await sql`
        SELECT r.id, r.client_id, r.filename, r.file_type, r.file_size, r.uploaded_by, r.notes, r.created_at,
               u.full_name AS uploader_name
        FROM client_recordings r
        LEFT JOIN crm_users u ON r.uploaded_by = u.id
        WHERE r.client_id = ${parseInt(id)}
        ORDER BY r.created_at DESC
    `;
    return NextResponse.json(rows);
}

// POST /api/sales/clients/[id]/recordings — upload a recording
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id } = await params;
    await ensureMigrated();

    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const notes = formData.get("notes") as string | null;

    if (!file) {
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Read file into base64
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = buffer.toString("base64");

    const { rows } = await sql`
        INSERT INTO client_recordings (client_id, filename, file_data, file_type, file_size, uploaded_by, notes)
        VALUES (${parseInt(id)}, ${file.name}, ${base64}, ${file.type || 'audio/mpeg'}, ${file.size}, ${user.id}, ${notes || null})
        RETURNING id, client_id, filename, file_type, file_size, uploaded_by, notes, created_at
    `;

    return NextResponse.json(rows[0], { status: 201 });
}

// DELETE /api/sales/clients/[id]/recordings — delete a recording by recording id (query param)
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id } = await params;
    const url = new URL(req.url);
    const recordingId = url.searchParams.get("recordingId");

    if (!recordingId) {
        return NextResponse.json({ error: "Missing recordingId query param" }, { status: 400 });
    }

    await ensureMigrated();

    await sql`DELETE FROM client_recordings WHERE id = ${parseInt(recordingId)} AND client_id = ${parseInt(id)}`;

    return NextResponse.json({ success: true });
}
