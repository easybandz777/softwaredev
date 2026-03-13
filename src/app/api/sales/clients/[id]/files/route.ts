import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/sales/clients/[id]/files — list files for a client
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id } = await params;
    await ensureMigrated();

    const url = new URL(req.url);
    const projectId = url.searchParams.get("project_id");

    let rows;
    if (projectId) {
        ({ rows } = await sql`
            SELECT f.id, f.client_id, f.project_id, f.filename, f.file_type, f.file_size,
                   f.uploaded_by, f.notes, f.created_at,
                   u.full_name AS uploader_name,
                   p.name AS project_name
            FROM client_files f
            LEFT JOIN crm_users u ON f.uploaded_by = u.id
            LEFT JOIN client_projects p ON f.project_id = p.id
            WHERE f.client_id = ${parseInt(id)} AND f.project_id = ${parseInt(projectId)}
            ORDER BY f.created_at DESC
        `);
    } else {
        ({ rows } = await sql`
            SELECT f.id, f.client_id, f.project_id, f.filename, f.file_type, f.file_size,
                   f.uploaded_by, f.notes, f.created_at,
                   u.full_name AS uploader_name,
                   p.name AS project_name
            FROM client_files f
            LEFT JOIN crm_users u ON f.uploaded_by = u.id
            LEFT JOIN client_projects p ON f.project_id = p.id
            WHERE f.client_id = ${parseInt(id)}
            ORDER BY f.created_at DESC
        `);
    }
    return NextResponse.json(rows);
}

// POST /api/sales/clients/[id]/files — upload a file
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id } = await params;
    await ensureMigrated();

    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const notes = formData.get("notes") as string | null;
    const projectId = formData.get("project_id") as string | null;

    if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

    // Max 10MB
    if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json({ error: "File too large (max 10MB)" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = buffer.toString("base64");

    const { rows } = await sql`
        INSERT INTO client_files (client_id, project_id, filename, file_data, file_type, file_size, uploaded_by, notes)
        VALUES (${parseInt(id)}, ${projectId ? parseInt(projectId) : null}, ${file.name},
                ${base64}, ${file.type || 'application/octet-stream'}, ${file.size},
                ${user.id}, ${notes || null})
        RETURNING id, client_id, project_id, filename, file_type, file_size, uploaded_by, notes, created_at
    `;

    return NextResponse.json(rows[0], { status: 201 });
}

// DELETE /api/sales/clients/[id]/files — delete a file
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id } = await params;
    const url = new URL(req.url);
    const fileId = url.searchParams.get("file_id");

    if (!fileId) return NextResponse.json({ error: "Missing file_id" }, { status: 400 });

    await ensureMigrated();
    await sql`DELETE FROM client_files WHERE id = ${parseInt(fileId)} AND client_id = ${parseInt(id)}`;

    return NextResponse.json({ success: true });
}
