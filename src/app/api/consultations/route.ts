import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, company, service, project_type, budget, timeline, message, referral } = body;

        if (!name || !email || !service || !message) {
            return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
        }

        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(email)) {
            return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
        }

        await ensureMigrated();

        const { rows } = await sql`
            INSERT INTO consultations (name, email, phone, company, service, project_type, budget, timeline, message, referral)
            VALUES (
                ${name.trim()},
                ${email.trim()},
                ${phone?.trim() || null},
                ${company?.trim() || null},
                ${service},
                ${project_type || null},
                ${budget || null},
                ${timeline || null},
                ${message.trim()},
                ${referral?.trim() || null}
            )
            RETURNING id
        `;

        return NextResponse.json({ id: rows[0].id }, { status: 201 });
    } catch (err) {
        console.error("Consultation submit error:", err);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}
