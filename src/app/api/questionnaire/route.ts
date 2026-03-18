import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";

export const dynamic = "force-dynamic";

// GET /api/questionnaire?code=xxx — validate salesman code & return rep info
export async function GET(req: NextRequest) {
    const code = req.nextUrl.searchParams.get("code");
    if (!code) return NextResponse.json({ error: "Missing code" }, { status: 400 });

    await ensureMigrated();

    const { rows } = await sql`
        SELECT id, full_name, email, role
        FROM crm_users
        WHERE username = ${code} OR referral_code = ${code}
        LIMIT 1
    `;

    if (rows.length === 0) {
        return NextResponse.json({ error: "Invalid representative code" }, { status: 404 });
    }

    return NextResponse.json({ rep: { name: rows[0].full_name, email: rows[0].email } });
}

// POST /api/questionnaire — public submission (no auth)
export async function POST(req: NextRequest) {
    await ensureMigrated();

    const body = await req.json();
    const {
        salesman_code,
        // Step 1: About You
        name, email, phone, company, job_title,
        // Step 2: Your Business
        industry, company_size, years_in_business, website,
        // Step 3: Current Setup
        current_tools, satisfaction, pain_points,
        // Step 4: Goals
        goals, timeline, budget_range, decision_maker,
        additional_notes,
    } = body;

    if (!salesman_code || !name || !email) {
        return NextResponse.json({ error: "Name, email, and representative code are required." }, { status: 400 });
    }

    // Validate salesman code
    const { rows: reps } = await sql`
        SELECT id FROM crm_users
        WHERE username = ${salesman_code} OR referral_code = ${salesman_code}
        LIMIT 1
    `;

    if (reps.length === 0) {
        return NextResponse.json({ error: "Invalid representative code." }, { status: 404 });
    }

    const repId = reps[0].id;

    // Build a rich message for the lead from the questionnaire
    const messageParts: string[] = ["[Questionnaire Submission]"];
    if (job_title) messageParts.push(`Job Title: ${job_title}`);
    if (industry) messageParts.push(`Industry: ${industry}`);
    if (company_size) messageParts.push(`Company Size: ${company_size}`);
    if (years_in_business) messageParts.push(`Years in Business: ${years_in_business}`);
    if (website) messageParts.push(`Website: ${website}`);
    if (budget_range) messageParts.push(`Budget Range: ${budget_range}`);
    if (timeline) messageParts.push(`Timeline: ${timeline}`);
    if (additional_notes) messageParts.push(`Notes: ${additional_notes}`);

    // Create the lead (consultation) assigned to the salesman
    const { rows: leads } = await sql`
        INSERT INTO consultations (name, email, phone, company, service, message, status, assigned_to_id)
        VALUES (
            ${name},
            ${email},
            ${phone || null},
            ${company || null},
            ${"Questionnaire Lead"},
            ${messageParts.join("\n")},
            'new',
            ${repId}
        )
        RETURNING id
    `;

    const leadId = leads[0].id;

    // Store detailed questionnaire responses
    await sql`
        INSERT INTO questionnaire_responses (
            lead_id, salesman_code, company_size, industry,
            current_tools, satisfaction, pain_points, goals,
            budget_range, timeline, decision_maker, additional_notes
        ) VALUES (
            ${leadId},
            ${salesman_code},
            ${company_size || null},
            ${industry || null},
            ${current_tools ? JSON.stringify(current_tools) : null},
            ${satisfaction || null},
            ${pain_points ? JSON.stringify(pain_points) : null},
            ${goals ? JSON.stringify(goals) : null},
            ${budget_range || null},
            ${timeline || null},
            ${decision_maker || null},
            ${additional_notes || null}
        )
    `;

    return NextResponse.json({ success: true, message: "Thank you! Your dedicated representative will be in touch shortly." }, { status: 201 });
}
