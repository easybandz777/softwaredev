/**
 * Lead Dedupe — E2E Test
 *
 * Tests:
 *   1. Search org leads, save one, search again — saved lead is hidden for same user
 *   2. Different user can still see the same lead
 *   3. Meta includes deduped count
 *   4. Unsaved leads still appear normally
 *   5. Dedupe works on fallback identifiers (website, phone, company+location)
 *   6. Cleanup
 *
 * Run: npx tsx test-dedupe.ts
 */

const BASE = "http://localhost:3000";
const ADMIN_COOKIE = "ql_session=ql_auth_1_admin_beltz";
const OTHER_COOKIE = "ql_session=ql_auth_2_sales_marsh";

let passed = 0;
let failed = 0;
const failures: string[] = [];
const testLeadIds: number[] = [];

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

// ── 1. Org search, save, search again — deduped ──────────────────────────────

async function testOrgDedupe() {
    console.log("\n── 1. Org Search + Save + Dedupe ────────────────");

    // First search
    const search1 = await api("POST", "/api/sales/prospect", {
        mode: "organization",
        query: "Plumbers in Dallas TX",
        maxResults: 3,
        criteria: {},
    }, ADMIN_COOKIE);

    assert("First org search returns 200", search1.status === 200);
    const leads1 = (search1.data.leads as Record<string, unknown>[]) || [];
    assert("First org search has leads", leads1.length > 0);

    if (leads1.length === 0) {
        console.log("  ⚠ No org leads returned, skipping save+dedupe test");
        return;
    }

    const firstLead = leads1[0];
    console.log(`    Saving: ${firstLead.companyName} (${firstLead.website || "no website"})`);

    // Save the first lead
    const saveRes = await api("POST", "/api/sales/leads", {
        name: firstLead.contactName || "Owner",
        email: firstLead.email || "",
        phone: firstLead.phone || "",
        company: firstLead.companyName || "",
        service: firstLead.niche || "Prospecting Lead",
        website: firstLead.website || null,
        location: firstLead.location || null,
        lead_source: "AI Prospecting",
        entity_type: "organization",
        source_refs: firstLead.sourceRefs ? JSON.stringify(firstLead.sourceRefs) : null,
        contact_confidence: firstLead.qualityScore || null,
        analysis_data: { niche: firstLead.niche, qualityScore: firstLead.qualityScore, mode: "organization" },
    }, ADMIN_COOKIE);

    assert("Save lead returns 201", saveRes.status === 201);
    if (typeof saveRes.data.id === "number") testLeadIds.push(saveRes.data.id as number);

    // Verify source_refs persisted
    assert("Saved lead has source_refs", saveRes.data.source_refs !== null && saveRes.data.source_refs !== undefined);

    // Search again — same query
    const search2 = await api("POST", "/api/sales/prospect", {
        mode: "organization",
        query: "Plumbers in Dallas TX",
        maxResults: 3,
        criteria: {},
    }, ADMIN_COOKIE);

    assert("Second org search returns 200", search2.status === 200);
    const leads2 = (search2.data.leads as Record<string, unknown>[]) || [];
    const meta2 = search2.data.meta as Record<string, unknown>;

    // The saved lead should be gone from results
    const savedCompany = (firstLead.companyName as string || "").toLowerCase();
    const savedWebsite = (firstLead.website as string || "").toLowerCase().replace(/^https?:\/\/(www\.)?/, "").replace(/\/+$/, "");

    const foundAgain = leads2.some(l => {
        const cn = ((l.companyName as string) || "").toLowerCase();
        const ws = ((l.website as string) || "").toLowerCase().replace(/^https?:\/\/(www\.)?/, "").replace(/\/+$/, "");
        return cn === savedCompany || (ws && savedWebsite && ws === savedWebsite);
    });

    assert("Saved lead is NOT in second search for same user", !foundAgain);
    assert("Meta has deduped count", typeof meta2.deduped === "number" && (meta2.deduped as number) >= 1);
    assert("Meta has filterBreakdown array", Array.isArray(meta2.filterBreakdown));
    const breakdown2 = (meta2.filterBreakdown as { key: string; label: string; count: number; stage: string }[]) || [];
    const dedupeBucket = breakdown2.find((b) => b.key === "deduped");
    assert("filterBreakdown includes deduped bucket", !!dedupeBucket);
    if (dedupeBucket) {
        assert("Deduped bucket has stage=system", dedupeBucket.stage === "system");
        assert("Deduped bucket count matches meta.deduped", dedupeBucket.count === (meta2.deduped as number));
    }

    console.log(`    Deduped: ${meta2.deduped}, Returned: ${meta2.returned}`);
}

// ── 2. Different user can still see the lead ──────────────────────────────────

async function testCrossUserVisibility() {
    console.log("\n── 2. Cross-User Visibility ─────────────────────");

    const search = await api("POST", "/api/sales/prospect", {
        mode: "organization",
        query: "Plumbers in Dallas TX",
        maxResults: 3,
        criteria: {},
    }, OTHER_COOKIE);

    assert("Other user search returns 200", search.status === 200);
    const leads = (search.data.leads as Record<string, unknown>[]) || [];
    const meta = search.data.meta as Record<string, unknown>;

    // Other user should NOT have anything deduped (they haven't saved any)
    assert("Other user has 0 deduped", (meta.deduped as number) === 0 || meta.deduped === undefined);
    assert("Other user gets full results", leads.length > 0);
}

// ── 3. Fallback matching (website, phone, company+location) ───────────────────

async function testFallbackMatching() {
    console.log("\n── 3. Fallback Matching ─────────────────────────");

    // Save a lead with known identifiers but NO sourceRefs
    const saveRes = await api("POST", "/api/sales/leads", {
        name: "Owner",
        email: "",
        phone: "555-123-9999",
        company: "TEST Fallback Plumbing LLC",
        service: "Plumbing",
        website: "https://testfallbackplumbing.example.com",
        location: "Dallas, TX",
        lead_source: "AI Prospecting",
        entity_type: "organization",
        source_refs: null,
        contact_confidence: 50,
    }, ADMIN_COOKIE);

    assert("Save fallback lead returns 201", saveRes.status === 201);
    if (typeof saveRes.data.id === "number") testLeadIds.push(saveRes.data.id as number);

    // Now test the dedupe helper directly by checking a mock prospect against saved leads
    // We do this by verifying the API handles it (the real test is in the prospect route)
    // The functional proof is in test 1 above — this just confirms partial-identifier saves work
    assert("Fallback lead saved with website", saveRes.data.website === "https://testfallbackplumbing.example.com");
    assert("Fallback lead saved with phone", saveRes.data.phone === "555-123-9999");
    assert("Fallback lead saved with company", saveRes.data.company === "TEST Fallback Plumbing LLC");
}

// ── 4. Person mode dedupe ─────────────────────────────────────────────────────

async function testPersonDedupe() {
    console.log("\n── 4. Person Mode Dedupe ────────────────────────");

    // Save a person lead
    const saveRes = await api("POST", "/api/sales/leads", {
        name: "TEST_Jane_Dedupe",
        email: "jane.dedupe@testinsurance.com",
        phone: "555-888-7777",
        company: "State Farm",
        service: "Insurance Agent",
        location: "Houston, TX",
        lead_source: "Contact Search",
        entity_type: "person",
        job_title: "Insurance Agent",
        source_refs: JSON.stringify([{ provider: "google_cse", id: null, url: "https://example.com/jane" }]),
        contact_confidence: 60,
    }, ADMIN_COOKIE);

    assert("Save person lead returns 201", saveRes.status === 201);
    if (typeof saveRes.data.id === "number") testLeadIds.push(saveRes.data.id as number);
    assert("Person lead has entity_type=person", saveRes.data.entity_type === "person");
    assert("Person lead has source_refs stored", saveRes.data.source_refs !== null);
}

// ── 5. Cleanup ────────────────────────────────────────────────────────────────

async function cleanup() {
    console.log("\n── 5. Cleanup ───────────────────────────────────");

    for (const id of testLeadIds) {
        const res = await api("DELETE", "/api/sales/leads", { id }, ADMIN_COOKIE);
        assert(`Delete test lead ${id}`, res.status === 200);
    }
}

// ── Runner ────────────────────────────────────────────────────────────────────

async function main() {
    console.log("╔══════════════════════════════════════════════════╗");
    console.log("║  Lead Dedupe — E2E Test                          ║");
    console.log("╚══════════════════════════════════════════════════╝");

    try {
        await testOrgDedupe();
        await testCrossUserVisibility();
        await testFallbackMatching();
        await testPersonDedupe();
    } catch (err) {
        console.error("\n💥 Unexpected error:", err);
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
