import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, company, service, message } = body;

        if (!name || !email || !service || !message) {
            return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
        }

        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(email)) {
            return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
        }

        await ensureMigrated();

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedCompany = company?.trim() || null;
        const trimmedMessage = message.trim();

        const { rows } = await sql`
            INSERT INTO consultations (name, email, company, service, message)
            VALUES (${trimmedName}, ${trimmedEmail}, ${trimmedCompany}, ${service}, ${trimmedMessage})
            RETURNING id
        `;

        return NextResponse.json({ id: rows[0].id }, { status: 201 });
    } catch (err) {
        console.error("Consultation submit error:", err);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}
