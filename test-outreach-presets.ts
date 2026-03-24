/**
 * End-to-end test for outreach prompt presets.
 *
 * Tests:
 *   1. Preset CRUD (create, list, update, delete)
 *   2. User scoping (presets are private)
 *   3. Generate with no preset / no ad hoc (base only)
 *   4. Generate with preset instructions only
 *   5. Generate with ad hoc prompt only
 *   6. Generate with both preset + ad hoc combined
 *   7. Cleanup
 *
 * Run: npx tsx test-outreach-presets.ts
 */

const BASE = "http://localhost:3000";
const AUTH_COOKIE = "ql_session=ql_auth_1_admin_beltz";
const OTHER_USER_COOKIE = "ql_session=ql_auth_2_sales_marsh";

let passed = 0;
let failed = 0;
const failures: string[] = [];
const createdPresetIds: number[] = [];
let testLeadId: number | null = null;

function assert(label: string, condition: boolean, detail?: string) {
    if (condition) {
        passed++;
        console.log(`  ✓ ${label}`);
    } else {
        failed++;
        const msg = detail ? `${label} — ${detail}` : label;
        failures.push(msg);
        console.log(`  ✗ ${label}${detail ? ` (${detail})` : ""}`);
    }
}

async function api(method: string, path: string, body?: unknown, cookie?: string): Promise<{ status: number; data: Record<string, unknown> }> {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (cookie) headers["Cookie"] = cookie;
    const res = await fetch(`${BASE}${path}`, {
        method, headers,
        body: body ? JSON.stringify(body) : undefined,
        redirect: "manual",
    });
    let data: Record<string, unknown>;
    try { data = await res.json(); } catch { data = {}; }
    return { status: res.status, data };
}

// ─── Setup: create a test lead ────────────────────────────────────────────────

async function setup() {
    console.log("\n── Setup ────────────────────────────────────────");
    const res = await api("POST", "/api/sales/leads", {
        name: "TEST_Preset_Owner",
        email: "preset-test@example.com",
        company: "Preset Test Co",
        service: "Roofing",
        message: "Test lead for outreach preset validation",
        entity_type: "organization",
    }, AUTH_COOKIE);
    assert("Create test lead", res.status === 201);
    if (typeof res.data.id === "number") testLeadId = res.data.id as number;
}

// ─── 1. Preset CRUD ──────────────────────────────────────────────────────────

async function testPresetCRUD() {
    console.log("\n── 1. Preset CRUD ───────────────────────────────");

    // Auth required
    const noAuth = await api("GET", "/api/sales/outreach-presets");
    assert("Reject unauthenticated preset list", noAuth.status === 401);

    // Create preset 1 (roofing)
    const create1 = await api("POST", "/api/sales/outreach-presets", {
        name: "Roofing Direct",
        instructions: "Be very direct. Mention storm damage season. Keep it under 3 sentences.",
        industry_label: "Roofing",
        mode: "organization",
    }, AUTH_COOKIE);
    assert("Create roofing preset returns 201", create1.status === 201);
    assert("Preset has correct name", create1.data.name === "Roofing Direct");
    assert("Preset has instructions", typeof create1.data.instructions === "string" && (create1.data.instructions as string).length > 0);
    assert("Preset has industry_label", create1.data.industry_label === "Roofing");
    assert("Preset has mode", create1.data.mode === "organization");
    if (typeof create1.data.id === "number") createdPresetIds.push(create1.data.id as number);

    // Create preset 2 (insurance)
    const create2 = await api("POST", "/api/sales/outreach-presets", {
        name: "Insurance Warm",
        instructions: "Use a warm, empathetic tone. Mention family protection. Avoid sounding salesy.",
        industry_label: "Insurance",
        mode: "person",
    }, AUTH_COOKIE);
    assert("Create insurance preset returns 201", create2.status === 201);
    if (typeof create2.data.id === "number") createdPresetIds.push(create2.data.id as number);

    // Validation: empty name
    const badName = await api("POST", "/api/sales/outreach-presets", {
        name: "", instructions: "something",
    }, AUTH_COOKIE);
    assert("Reject empty preset name", badName.status === 400);

    // Validation: empty instructions
    const badInstr = await api("POST", "/api/sales/outreach-presets", {
        name: "Bad", instructions: "",
    }, AUTH_COOKIE);
    assert("Reject empty instructions", badInstr.status === 400);

    // List presets
    const list = await api("GET", "/api/sales/outreach-presets", undefined, AUTH_COOKIE);
    assert("List presets returns 200", list.status === 200);
    const presets = list.data as unknown as Record<string, unknown>[];
    assert("List contains created presets", Array.isArray(presets) && presets.length >= 2);
    const roofing = presets.find(p => p.name === "Roofing Direct");
    assert("Roofing preset in list", !!roofing);

    // Update preset
    if (createdPresetIds[0]) {
        const update = await api("PATCH", `/api/sales/outreach-presets/${createdPresetIds[0]}`, {
            name: "Roofing Direct v2",
            instructions: "Be very direct. Mention hail season specifically. Keep it under 3 sentences.",
            industry_label: "Roofing / Storm",
        }, AUTH_COOKIE);
        assert("Update preset returns 200", update.status === 200);
        assert("Updated name correct", update.data.name === "Roofing Direct v2");
        assert("Updated industry_label correct", update.data.industry_label === "Roofing / Storm");
    }
}

// ─── 2. User scoping ─────────────────────────────────────────────────────────

async function testUserScoping() {
    console.log("\n── 2. User Scoping ──────────────────────────────");

    // Other user should not see admin's presets
    const otherList = await api("GET", "/api/sales/outreach-presets", undefined, OTHER_USER_COOKIE);
    assert("Other user list returns 200", otherList.status === 200);
    const otherPresets = otherList.data as unknown as Record<string, unknown>[];
    const found = Array.isArray(otherPresets) && otherPresets.some(p => p.name === "Roofing Direct v2");
    assert("Other user cannot see admin presets", !found);

    // Other user cannot delete admin's preset
    if (createdPresetIds[0]) {
        const del = await api("DELETE", `/api/sales/outreach-presets/${createdPresetIds[0]}`, undefined, OTHER_USER_COOKIE);
        assert("Other user cannot delete admin preset", del.status === 404);
    }
}

// ─── 3. Generate: base only (no preset, no ad hoc) ───────────────────────────

async function testGenerateBaseOnly() {
    console.log("\n── 3. Generate: Base Only ───────────────────────");

    const res = await api("POST", "/api/sales/generate-outreach", {
        lead: {
            companyName: "Preset Test Co",
            contactName: "TEST_Preset_Owner",
            niche: "Roofing",
            location: "Dallas, TX",
            email: "preset-test@example.com",
            entityType: "organization",
        },
    }, AUTH_COOKIE);

    assert("Base-only generate returns 200", res.status === 200);
    if (res.data.success) {
        assert("Base-only has subject", typeof res.data.subject === "string" && (res.data.subject as string).length > 0);
        assert("Base-only has content", typeof res.data.content === "string" && (res.data.content as string).length > 0);
    } else {
        console.log(`  ⚠ Base-only generation failed: ${res.data.error}`);
    }
}

// ─── 4. Generate: preset instructions only ────────────────────────────────────

async function testGeneratePresetOnly() {
    console.log("\n── 4. Generate: Preset Only ─────────────────────");

    const res = await api("POST", "/api/sales/generate-outreach", {
        lead: {
            companyName: "Preset Test Co",
            contactName: "TEST_Preset_Owner",
            niche: "Roofing",
            location: "Dallas, TX",
            email: "preset-test@example.com",
            entityType: "organization",
        },
        presetInstructions: "Be very direct. Mention hail season specifically. Keep it under 3 sentences.",
    }, AUTH_COOKIE);

    assert("Preset-only generate returns 200", res.status === 200);
    if (res.data.success) {
        assert("Preset-only has subject", typeof res.data.subject === "string" && (res.data.subject as string).length > 0);
        assert("Preset-only has content", typeof res.data.content === "string" && (res.data.content as string).length > 0);
    } else {
        console.log(`  ⚠ Preset-only generation failed: ${res.data.error}`);
    }
}

// ─── 5. Generate: ad hoc prompt only ──────────────────────────────────────────

async function testGenerateAdHocOnly() {
    console.log("\n── 5. Generate: Ad Hoc Only ─────────────────────");

    const res = await api("POST", "/api/sales/generate-outreach", {
        lead: {
            companyName: "Preset Test Co",
            contactName: "TEST_Preset_Owner",
            niche: "Roofing",
            location: "Dallas, TX",
            email: "preset-test@example.com",
            entityType: "organization",
        },
        promptInstructions: "Make the tone extremely casual, like texting a friend. Use short sentences.",
    }, AUTH_COOKIE);

    assert("Ad-hoc-only generate returns 200", res.status === 200);
    if (res.data.success) {
        assert("Ad-hoc-only has subject", typeof res.data.subject === "string" && (res.data.subject as string).length > 0);
        assert("Ad-hoc-only has content", typeof res.data.content === "string" && (res.data.content as string).length > 0);
    } else {
        console.log(`  ⚠ Ad-hoc-only generation failed: ${res.data.error}`);
    }
}

// ─── 6. Generate: preset + ad hoc combined ────────────────────────────────────

async function testGenerateCombined() {
    console.log("\n── 6. Generate: Preset + Ad Hoc Combined ────────");

    const res = await api("POST", "/api/sales/generate-outreach", {
        lead: {
            companyName: "Preset Test Co",
            contactName: "TEST_Preset_Owner",
            niche: "Roofing",
            location: "Dallas, TX",
            email: "preset-test@example.com",
            entityType: "organization",
        },
        presetInstructions: "Be very direct. Mention hail season specifically.",
        promptInstructions: "Also ask about their current insurance coverage for storm damage.",
    }, AUTH_COOKIE);

    assert("Combined generate returns 200", res.status === 200);
    if (res.data.success) {
        assert("Combined has subject", typeof res.data.subject === "string" && (res.data.subject as string).length > 0);
        assert("Combined has content", typeof res.data.content === "string" && (res.data.content as string).length > 0);
    } else {
        console.log(`  ⚠ Combined generation failed: ${res.data.error}`);
    }
}

// ─── 7. Cleanup ───────────────────────────────────────────────────────────────

async function cleanup() {
    console.log("\n── 7. Cleanup ───────────────────────────────────");

    for (const id of createdPresetIds) {
        const res = await api("DELETE", `/api/sales/outreach-presets/${id}`, undefined, AUTH_COOKIE);
        assert(`Delete preset ${id}`, res.status === 200);
    }

    if (testLeadId) {
        const res = await api("DELETE", "/api/sales/leads", { id: testLeadId }, AUTH_COOKIE);
        assert(`Delete test lead ${testLeadId}`, res.status === 200);
    }
}

// ─── Runner ───────────────────────────────────────────────────────────────────

async function main() {
    console.log("╔══════════════════════════════════════════════════╗");
    console.log("║  Outreach Prompt Presets — E2E Test              ║");
    console.log("╚══════════════════════════════════════════════════╝");

    try {
        await setup();
        await testPresetCRUD();
        await testUserScoping();
        await testGenerateBaseOnly();
        await testGeneratePresetOnly();
        await testGenerateAdHocOnly();
        await testGenerateCombined();
    } catch (err) {
        console.error("\n💥 Unexpected error during tests:", err);
        failed++;
    } finally {
        await cleanup();
    }

    console.log("\n══════════════════════════════════════════════════");
    console.log(`  Results: ${passed} passed, ${failed} failed`);
    if (failures.length > 0) {
        console.log("\n  Failures:");
        failures.forEach(f => console.log(`    • ${f}`));
    }
    console.log("══════════════════════════════════════════════════\n");

    process.exit(failed > 0 ? 1 : 0);
}

main();
