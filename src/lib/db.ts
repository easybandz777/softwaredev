import { sql } from "@vercel/postgres";
import bcrypt from "bcryptjs";

export { sql };

export interface Consultation {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    company: string | null;
    service: string;
    project_type: string | null;
    budget: string | null;
    timeline: string | null;
    message: string;
    referral: string | null;
    status: "new" | "reviewed" | "closed";
    created_at: string;
}

export interface PageVisit {
    id: number;
    ip: string | null;
    user_agent: string | null;
    referrer: string | null;
    path: string;
    created_at: string;
}

let migrated = false;

export async function ensureMigrated() {
    if (migrated) return;
    migrated = true;

    // Core tables
    await sql`
        CREATE TABLE IF NOT EXISTS consultations (
            id          SERIAL PRIMARY KEY,
            name        TEXT NOT NULL,
            email       TEXT NOT NULL,
            company     TEXT,
            service     TEXT NOT NULL,
            message     TEXT NOT NULL,
            status      TEXT NOT NULL DEFAULT 'new',
            created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    await sql`
        CREATE TABLE IF NOT EXISTS admin_users (
            id            SERIAL PRIMARY KEY,
            username      TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL
        )
    `;

    // Add new consultation columns (safe — IF NOT EXISTS)
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS phone TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS project_type TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS budget TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS timeline TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS referral TEXT`;

    // Visitor tracking table
    await sql`
        CREATE TABLE IF NOT EXISTS page_visits (
            id          SERIAL PRIMARY KEY,
            ip          TEXT,
            user_agent  TEXT,
            referrer    TEXT,
            path        TEXT NOT NULL DEFAULT '/',
            created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // Upsert admin credentials — always enforces the configured user
    const hash = bcrypt.hashSync("74Race74", 10);
    await sql`
        INSERT INTO admin_users (username, password_hash)
        VALUES ('ez', ${hash})
        ON CONFLICT (username) DO UPDATE SET password_hash = EXCLUDED.password_hash
    `;
    // Remove any old default accounts
    await sql`DELETE FROM admin_users WHERE username != 'ez'`;
}
