import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/sales/clients/[id]/projects
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id } = await params;
    await ensureMigrated();

    const { rows } = await sql`
        SELECT * FROM client_projects
        WHERE client_id = ${parseInt(id)}
        ORDER BY created_at DESC
    `;
    return NextResponse.json(rows);
}

// POST /api/sales/clients/[id]/projects
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id } = await params;
    const { name, description, value, status: projStatus } = await req.json();
    if (!name?.trim()) return NextResponse.json({ error: "Project name required" }, { status: 400 });

    await ensureMigrated();

    const { rows } = await sql`
        INSERT INTO client_projects (client_id, name, description, value, status)
        VALUES (${parseInt(id)}, ${name.trim()}, ${description || null}, ${value || null}, ${projStatus || "planning"})
        RETURNING *
    `;
    return NextResponse.json(rows[0], { status: 201 });
}

// PATCH /api/sales/clients/[id]/projects — update a project
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await params; // consume
    const body = await req.json();
    const { project_id, name, description, status: projStatus, value } = body;
    if (!project_id) return NextResponse.json({ error: "Missing project_id" }, { status: 400 });

    await ensureMigrated();

    if (projStatus) {
        if (!["planning", "active", "completed", "on-hold"].includes(projStatus)) {
            return NextResponse.json({ error: "Invalid status" }, { status: 400 });
        }
        await sql`UPDATE client_projects SET status = ${projStatus} WHERE id = ${project_id}`;
    }
    if (name !== undefined) await sql`UPDATE client_projects SET name = ${name} WHERE id = ${project_id}`;
    if (description !== undefined) await sql`UPDATE client_projects SET description = ${description || null} WHERE id = ${project_id}`;
    if (value !== undefined) await sql`UPDATE client_projects SET value = ${value || null} WHERE id = ${project_id}`;

    return NextResponse.json({ success: true });
}

// DELETE /api/sales/clients/[id]/projects
export async function DELETE(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { searchParams } = new URL(req.url);
    const projectId = searchParams.get("project_id");
    if (!projectId) return NextResponse.json({ error: "Missing project_id" }, { status: 400 });

    await ensureMigrated();

    await sql`DELETE FROM client_projects WHERE id = ${parseInt(projectId)}`;
    return NextResponse.json({ success: true });
}
