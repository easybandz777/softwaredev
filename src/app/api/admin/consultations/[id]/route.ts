import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";

function isAuthed(req: NextRequest) {
    const user = getSessionUser(req);
    return !!user;
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    if (!isAuthed(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const { id } = await params;
    const { status } = await req.json();

    const valid = ["new", "contacted", "qualified", "proposal", "won", "lost", "reviewed", "closed"];
    if (!valid.includes(status)) {
        return NextResponse.json({ error: "Invalid status." }, { status: 400 });
    }

    await ensureMigrated();
    await sql`UPDATE consultations SET status = ${status} WHERE id = ${id}`;
    return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    if (!isAuthed(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const { id } = await params;
    await ensureMigrated();
    await sql`DELETE FROM consultations WHERE id = ${id}`;
    return NextResponse.json({ success: true });
}
