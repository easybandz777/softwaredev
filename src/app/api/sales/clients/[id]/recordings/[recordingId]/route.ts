import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/sales/clients/[id]/recordings/[recordingId] — stream/download recording
export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string; recordingId: string }> }
) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id, recordingId } = await params;
    await ensureMigrated();

    const { rows } = await sql`
        SELECT file_data, file_type, filename
        FROM client_recordings
        WHERE id = ${parseInt(recordingId)} AND client_id = ${parseInt(id)}
        LIMIT 1
    `;

    if (rows.length === 0) {
        return NextResponse.json({ error: "Recording not found" }, { status: 404 });
    }

    const { file_data, file_type, filename } = rows[0];
    const buffer = Buffer.from(file_data, "base64");

    return new NextResponse(buffer, {
        headers: {
            "Content-Type": file_type,
            "Content-Disposition": `inline; filename="${filename}"`,
            "Content-Length": buffer.length.toString(),
        },
    });
}
