import { sql } from "@vercel/postgres";
import bcrypt from "bcryptjs";

export { sql };

// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface User {
    id: number;
    username: string;
    full_name: string;
    email: string;
    password_hash: string;
    role: "admin" | "sales";
    created_at: string;
}

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
    status: "new" | "contacted" | "qualified" | "proposal" | "won" | "lost" | "reviewed" | "closed";
    assigned_to_id: number | null;
    value_est: number | null;
    next_follow_up: string | null;
    created_at: string;
}

export interface LeadNote {
    id: number;
    lead_id: number;
    user_id: number;
    note_text: string;
    created_at: string;
    // joined fields
    author_name?: string;
}

export interface Client {
    id: number;
    company_name: string;
    primary_contact: string;
    email: string;
    phone: string | null;
    assigned_to_id: number | null;
    status: "active" | "inactive";
    converted_from_lead_id: number | null;
    created_at: string;
    // joined fields
    assigned_to_name?: string;
}

export interface ClientRecording {
    id: number;
    client_id: number;
    filename: string;
    file_type: string;
    file_size: number;
    uploaded_by: number | null;
    notes: string | null;
    created_at: string;
    // joined fields
    uploader_name?: string;
}

export interface ClientNote {
    id: number;
    client_id: number;
    user_id: number;
    note_text: string;
    created_at: string;
    author_name?: string;
}

export interface ClientProject {
    id: number;
    client_id: number;
    name: string;
    description: string | null;
    status: "planning" | "active" | "completed" | "on-hold";
    value: number | null;
    start_date: string | null;
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

// ─── Migration ────────────────────────────────────────────────────────────────

let migrated = false;

export async function ensureMigrated() {
    if (migrated) return;
    migrated = true;

    // ── CRM Users table (namespaced to avoid collision) ────────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS crm_users (
            id            SERIAL PRIMARY KEY,
            username      TEXT NOT NULL UNIQUE,
            full_name     TEXT NOT NULL DEFAULT '',
            email         TEXT NOT NULL DEFAULT '',
            password_hash TEXT NOT NULL,
            role          TEXT NOT NULL DEFAULT 'admin',
            created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // Migrate old admin_users into crm_users if they exist
    try {
        await sql`
            INSERT INTO crm_users (username, password_hash, role)
            SELECT username, password_hash, 'admin'
            FROM admin_users
            ON CONFLICT (username) DO NOTHING
        `;
    } catch {
        // admin_users table may not exist on fresh installs — that's fine
    }

    // ── Consultations (leads) ─────────────────────────────────────────────
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

    // Extended lead columns (safe — IF NOT EXISTS)
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS phone TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS project_type TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS budget TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS timeline TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS referral TEXT`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS assigned_to_id INTEGER`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS value_est NUMERIC`;
    await sql`ALTER TABLE consultations ADD COLUMN IF NOT EXISTS next_follow_up TIMESTAMPTZ`;

    // ── Lead Notes ────────────────────────────────────────────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS lead_notes (
            id          SERIAL PRIMARY KEY,
            lead_id     INTEGER NOT NULL,
            user_id     INTEGER NOT NULL,
            note_text   TEXT NOT NULL,
            created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // ── Clients ───────────────────────────────────────────────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS clients (
            id                     SERIAL PRIMARY KEY,
            company_name           TEXT NOT NULL,
            primary_contact        TEXT NOT NULL,
            email                  TEXT NOT NULL,
            phone                  TEXT,
            assigned_to_id         INTEGER,
            status                 TEXT NOT NULL DEFAULT 'active',
            converted_from_lead_id INTEGER,
            created_at             TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // ── Page visits ───────────────────────────────────────────────────────
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

    // ── Client Recordings ─────────────────────────────────────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS client_recordings (
            id          SERIAL PRIMARY KEY,
            client_id   INTEGER NOT NULL,
            filename    TEXT NOT NULL,
            file_data   TEXT NOT NULL,
            file_type   TEXT NOT NULL DEFAULT 'audio/mpeg',
            file_size   INTEGER NOT NULL DEFAULT 0,
            uploaded_by  INTEGER,
            notes       TEXT,
            created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // ── Client Notes ──────────────────────────────────────────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS client_notes (
            id          SERIAL PRIMARY KEY,
            client_id   INTEGER NOT NULL,
            user_id     INTEGER NOT NULL,
            note_text   TEXT NOT NULL,
            created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // ── Client Projects ──────────────────────────────────────────────────
    await sql`
        CREATE TABLE IF NOT EXISTS client_projects (
            id          SERIAL PRIMARY KEY,
            client_id   INTEGER NOT NULL,
            name        TEXT NOT NULL,
            description TEXT,
            status      TEXT NOT NULL DEFAULT 'planning',
            value       NUMERIC,
            start_date  TIMESTAMPTZ,
            created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;

    // ── Seed admin + demo sales user ──────────────────────────────────────
    const adminHash = bcrypt.hashSync("printer", 10);
    await sql`
        INSERT INTO crm_users (username, full_name, email, password_hash, role)
        VALUES ('marsh', 'Admin', 'admin@quantlab.dev', ${adminHash}, 'admin')
        ON CONFLICT (username) DO UPDATE
            SET password_hash = EXCLUDED.password_hash,
                role          = EXCLUDED.role
    `;

    const salesHash = bcrypt.hashSync("sales123", 10);
    await sql`
        INSERT INTO crm_users (username, full_name, email, password_hash, role)
        VALUES ('sarah', 'Sarah Chen', 'sarah@quantlab.dev', ${salesHash}, 'sales')
        ON CONFLICT (username) DO NOTHING
    `;

    const wilderHash = bcrypt.hashSync("printer", 10);
    await sql`
        INSERT INTO crm_users (username, full_name, email, password_hash, role)
        VALUES ('wilder', 'Wilder', 'wilder@quantlab.dev', ${wilderHash}, 'sales')
        ON CONFLICT (username) DO NOTHING
    `;
}
