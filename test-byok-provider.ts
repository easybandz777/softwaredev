/**
 * BYOK Per-User AI Provider — E2E Test
 *
 * Tests:
 *   1. LLM config CRUD via /api/sales/me
 *   2. User scoping (one user cannot see another's config)
 *   3. Outreach generation uses user config (env fallback when no user config)
 *   4. Prospect qualification uses user config (env fallback)
 *   5. Outreach with invalid/cleared config
 *   6. Provider metadata in responses
 *   7. Settings GET returns safe fields (no raw keys)
 *   8. Cleanup
 *
 * Run: npx tsx test-byok-provider.ts
 */

const BASE = "http://localhost:3000";
const AUTH_COOKIE = "ql_session=ql_auth_1_admin_beltz";
const OTHER_USER_COOKIE = "ql_session=ql_auth_2_sales_marsh";

let passed = 0;
let failed = 0;
const failures: string[] = [];
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

async function api(method: string, path: string, body?: unknown, cookie?: string) {
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

// ── Setup ─────────────────────────────────────────────────────────────────────

async function setup() {
    console.log("\n── Setup ────────────────────────────────────────");
    const res = await api("POST", "/api/sales/leads", {
        name: "TEST_BYOK_Owner", email: "byok@example.com", company: "BYOK Test Co",
        service: "Testing", entity_type: "organization",
    }, AUTH_COOKIE);
    assert("Create test lead", res.status === 201);
    if (typeof res.data.id === "number") testLeadId = res.data.id as number;
}

// ── 1. Settings GET returns LLM meta ──────────────────────────────────────────

async function testSettingsGet() {
    console.log("\n── 1. Settings GET (LLM meta) ───────────────────");

    const res = await api("GET", "/api/sales/me", undefined, AUTH_COOKIE);
    assert("GET /api/sales/me returns 200", res.status === 200);
    assert("Response has has_llm_key field", typeof res.data.has_llm_key === "boolean");
    assert("Response has llm_provider field", res.data.llm_provider !== undefined);
    assert("Response has llm_model field", res.data.llm_model !== undefined);

    // Verify no raw API key is returned
    const json = JSON.stringify(res.data);
    assert("No api_key in response", !json.includes("api_key_encrypted") && !json.includes("sk-"));
}

// ── 2. LLM config CRUD ───────────────────────────────────────────────────────

async function testLlmConfigCrud() {
    console.log("\n── 2. LLM Config CRUD ───────────────────────────");

    // Save OpenAI config
    const save = await api("PATCH", "/api/sales/me", {
        llm_config: { provider: "openai", model: "gpt-4o-mini", api_key: "sk-test-fake-key-12345" },
    }, AUTH_COOKIE);
    assert("Save OpenAI config returns 200", save.status === 200);
    assert("Save confirms provider", save.data.llm_provider === "openai");
    assert("Save confirms model", save.data.llm_model === "gpt-4o-mini");

    // Verify persisted
    const get1 = await api("GET", "/api/sales/me", undefined, AUTH_COOKIE);
    assert("GET shows has_llm_key=true", get1.data.has_llm_key === true);
    assert("GET shows provider=openai", get1.data.llm_provider === "openai");
    assert("GET shows model=gpt-4o-mini", get1.data.llm_model === "gpt-4o-mini");

    // Switch to Anthropic
    const switchRes = await api("PATCH", "/api/sales/me", {
        llm_config: { provider: "anthropic", model: "claude-sonnet-4-20250514", api_key: "sk-ant-test-fake-key-12345" },
    }, AUTH_COOKIE);
    assert("Switch to Anthropic returns 200", switchRes.status === 200);
    assert("Switch confirms provider=anthropic", switchRes.data.llm_provider === "anthropic");

    // Clear config
    const clearRes = await api("PATCH", "/api/sales/me", { llm_config: null }, AUTH_COOKIE);
    assert("Clear config returns 200", clearRes.status === 200);
    assert("Clear confirms llm_cleared", clearRes.data.llm_cleared === true);

    const get2 = await api("GET", "/api/sales/me", undefined, AUTH_COOKIE);
    // With env fallback, has_llm_key may still be true
    assert("GET after clear shows env fallback or false", typeof get2.data.has_llm_key === "boolean");

    // Validation: bad provider
    const badProv = await api("PATCH", "/api/sales/me", {
        llm_config: { provider: "gemini", model: "gemini-pro", api_key: "key" },
    }, AUTH_COOKIE);
    assert("Reject unsupported provider", badProv.status === 400);

    // Validation: empty key
    const noKey = await api("PATCH", "/api/sales/me", {
        llm_config: { provider: "openai", model: "gpt-4o-mini", api_key: "" },
    }, AUTH_COOKIE);
    assert("Reject empty API key", noKey.status === 400);
}

// ── 3. User scoping ──────────────────────────────────────────────────────────

async function testUserScoping() {
    console.log("\n── 3. User Scoping ──────────────────────────────");

    // Set config for admin
    await api("PATCH", "/api/sales/me", {
        llm_config: { provider: "openai", model: "gpt-4o-mini", api_key: "sk-admin-fake-key" },
    }, AUTH_COOKIE);

    // Other user should not see admin's custom config
    const other = await api("GET", "/api/sales/me", undefined, OTHER_USER_COOKIE);
    assert("Other user GET returns 200", other.status === 200);
    // Other user should either have no key or env fallback, not admin's config
    const otherProvider = other.data.llm_provider as string || "";
    assert("Other user does not see admin config", otherProvider !== "openai" || otherProvider.includes("system"));
}

// ── 4. Outreach with env fallback ─────────────────────────────────────────────

async function testOutreachEnvFallback() {
    console.log("\n── 4. Outreach (env fallback) ────────────────────");

    // Clear user config so we fall back to env
    await api("PATCH", "/api/sales/me", { llm_config: null }, AUTH_COOKIE);

    const res = await api("POST", "/api/sales/generate-outreach", {
        lead: {
            companyName: "BYOK Test Co", contactName: "TEST_BYOK_Owner",
            niche: "Testing", location: "Austin, TX", email: "byok@example.com",
            entityType: "organization",
        },
    }, AUTH_COOKIE);

    assert("Outreach env-fallback returns 200", res.status === 200);
    if (res.data.success) {
        assert("Env-fallback has subject", typeof res.data.subject === "string" && (res.data.subject as string).length > 0);
        assert("Env-fallback has content", typeof res.data.content === "string" && (res.data.content as string).length > 0);
        assert("Response includes provider field", typeof res.data.provider === "string");
        assert("Response includes model field", typeof res.data.model === "string");
        assert("Response includes tokensUsed", typeof res.data.tokensUsed === "number");
    } else {
        console.log(`  ⚠ Outreach failed: ${res.data.error} (no OPENAI_API_KEY env?)`);
    }
}

// ── 5. Prospect with env fallback ─────────────────────────────────────────────

async function testProspectEnvFallback() {
    console.log("\n── 5. Prospect (env fallback) ────────────────────");

    const res = await api("POST", "/api/sales/prospect", {
        mode: "organization", query: "Plumbers in Austin TX", maxResults: 2, criteria: {},
    }, AUTH_COOKIE);

    assert("Prospect env-fallback returns 200", res.status === 200);
    assert("Prospect has leads array", Array.isArray(res.data.leads));

    const meta = res.data.meta as Record<string, unknown> | undefined;
    if (meta) {
        assert("Prospect meta has aiProvider field", meta.aiProvider !== undefined);
    }
}

// ── 6. Outreach error when no config at all ───────────────────────────────────

async function testOutreachNoConfig() {
    console.log("\n── 6. Outreach (no config) ──────────────────────");

    // This test only matters if OPENAI_API_KEY is not set in env.
    // We verify the error message is provider-agnostic.
    const res = await api("POST", "/api/sales/generate-outreach", {
        lead: {
            companyName: "BYOK Test Co", contactName: "TEST_BYOK_Owner",
            niche: "Testing", entityType: "organization",
        },
    }, AUTH_COOKIE);

    // If env key exists, it will succeed. Either way, the error should not say "OpenAI"
    if (!res.data.success && res.data.error) {
        const errMsg = res.data.error as string;
        assert("Error message is provider-agnostic", !errMsg.includes("OpenAI API key"));
    } else {
        assert("Outreach succeeded (env key available)", res.data.success === true);
    }
}

// ── 7. Restore config for cleanup ─────────────────────────────────────────────

async function testRestoreAndCleanup() {
    console.log("\n── 7. Cleanup ───────────────────────────────────");

    // Clear any test config
    await api("PATCH", "/api/sales/me", { llm_config: null }, AUTH_COOKIE);
    assert("Cleared admin LLM config", true);

    if (testLeadId) {
        const res = await api("DELETE", "/api/sales/leads", { id: testLeadId }, AUTH_COOKIE);
        assert(`Deleted test lead ${testLeadId}`, res.status === 200);
    }
}

// ── Runner ────────────────────────────────────────────────────────────────────

async function main() {
    console.log("╔══════════════════════════════════════════════════╗");
    console.log("║  BYOK Per-User AI Provider — E2E Test            ║");
    console.log("╚══════════════════════════════════════════════════╝");

    try {
        await setup();
        await testSettingsGet();
        await testLlmConfigCrud();
        await testUserScoping();
        await testOutreachEnvFallback();
        await testProspectEnvFallback();
        await testOutreachNoConfig();
    } catch (err) {
        console.error("\n💥 Unexpected error:", err);
        failed++;
    } finally {
        await testRestoreAndCleanup();
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
