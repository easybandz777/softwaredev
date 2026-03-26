import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { requireAuth } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/sales/prospect-sessions — list recent search sessions (or get one by ?id=)
export async function GET(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const sessionId = req.nextUrl.searchParams.get("id");

    if (sessionId) {
        // Return full session with results
        const { rows } = await sql`
            SELECT id, user_id, mode, query, results, meta, result_count, created_at
            FROM prospect_search_sessions
            WHERE id = ${Number(sessionId)} AND user_id = ${user.id}
            LIMIT 1
        `;
        if (!rows[0]) return NextResponse.json({ error: "Session not found" }, { status: 404 });
        const session = rows[0] as Record<string, unknown>;
        return NextResponse.json({
            ...session,
            results: JSON.parse((session.results as string) || "[]"),
            meta: session.meta ? JSON.parse(session.meta as string) : null,
        });
    }

    // Return slim list (no results blob — just metadata)
    const { rows } = await sql`
        SELECT id, mode, query, result_count, created_at
        FROM prospect_search_sessions
        WHERE user_id = ${user.id}
        ORDER BY created_at DESC
        LIMIT 10
    `;
    return NextResponse.json(rows);
}

// DELETE /api/sales/prospect-sessions — delete a session
export async function DELETE(req: NextRequest) {
    const { error, user } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    const body = await req.json();
    const { id } = body;
    if (!id) return NextResponse.json({ error: "Missing session id" }, { status: 400 });

    await ensureMigrated();
    await sql`DELETE FROM prospect_search_sessions WHERE id = ${id} AND user_id = ${user.id}`;
    return NextResponse.json({ success: true });
}
