import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/sales/clients/[id]/files/[fileId] — serve a file for download/preview
export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string; fileId: string }> }) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const { id, fileId } = await params;
    await ensureMigrated();

    const { rows } = await sql`
        SELECT filename, file_data, file_type, file_size
        FROM client_files
        WHERE id = ${parseInt(fileId)} AND client_id = ${parseInt(id)}
    `;

    if (rows.length === 0) {
        return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const { filename, file_data, file_type } = rows[0];
    const buffer = Buffer.from(file_data, "base64");

    const isInline = file_type.startsWith("image/") || file_type === "application/pdf";

    return new NextResponse(buffer, {
        headers: {
            "Content-Type": file_type,
            "Content-Disposition": `${isInline ? "inline" : "attachment"}; filename="${encodeURIComponent(filename)}"`,
            "Content-Length": buffer.length.toString(),
            "Cache-Control": "private, max-age=3600",
        },
    });
}
