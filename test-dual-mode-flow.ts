/**
 * End-to-end flow test for the dual-mode lookup pipeline.
 *
 * Tests the full chain:
 *   1. Auth gate (reject unauthenticated, accept valid session)
 *   2. Organization search  → discovery → enrichment → AI → normalize → response shape
 *   3. Person search        → discovery → fallback behavior → response shape
 *   4. Save org lead to CRM → verify all fields land in consultations
 *   5. Save person lead to CRM → verify partial-contact save works (no email required)
 *   6. Retrieve leads       → verify both entity types appear with correct fields
 *   7. Outreach generation  → org mode prompt → person mode prompt
 *   8. Preset CRUD          → create with mode, retrieve, delete
 *   9. Cleanup              → remove test leads
 *
 * Run: npx tsx test-dual-mode-flow.ts
 */

const BASE = "http://localhost:3000";
const AUTH_COOKIE = "ql_session=ql_auth_1_admin_beltz";

let passed = 0;
let failed = 0;
const failures: string[] = [];
const testLeadIds: number[] = [];
let testPresetId: number | null = null;

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

async function api(
  method: string,
  path: string,
  body?: unknown,
  cookie?: string,
): Promise<{ status: number; data: Record<string, unknown> }> {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (cookie) headers["Cookie"] = cookie;
  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    redirect: "manual",
  });
  let data: Record<string, unknown>;
  try {
    data = await res.json();
  } catch {
    data = {};
  }
  return { status: res.status, data };
}

// ─── 1. Auth ──────────────────────────────────────────────────────────────────

async function testAuth() {
  console.log("\n── 1. Auth Gate ──────────────────────────────────");

  const noAuth = await api("POST", "/api/sales/prospect", { query: "test", maxResults: 1 });
  assert("Reject unauthenticated prospect call", noAuth.status === 401);

  const noAuthLeads = await api("GET", "/api/sales/leads");
  assert("Reject unauthenticated leads call", noAuthLeads.status === 401);

  const authed = await api("POST", "/api/sales/prospect", { query: "test", maxResults: 1 }, AUTH_COOKIE);
  assert("Accept authenticated prospect call", authed.status !== 401, `status=${authed.status}`);
}

// ─── 2. Organization Search ───────────────────────────────────────────────────

async function testOrgSearch() {
  console.log("\n── 2. Organization Search ───────────────────────");

  const res = await api(
    "POST",
    "/api/sales/prospect",
    {
      mode: "organization",
      query: "Plumbers in Dallas TX",
      maxResults: 3,
      criteria: {
        requireWebsite: false,
        requireEmail: false,
        requirePhone: false,
        includeNoWebsite: true,
        minRating: 0,
        minReviews: 0,
        minQualityScore: 0,
        nicheKeywords: [],
        locationKeywords: [],
      },
    },
    AUTH_COOKIE,
  );

  assert("Org search returns 200", res.status === 200, `status=${res.status}`);
  assert("Response has leads array", Array.isArray(res.data.leads));
  assert("Response has meta object", typeof res.data.meta === "object" && res.data.meta !== null);

  const meta = res.data.meta as Record<string, unknown>;
  assert("Meta has mode=organization", meta.mode === "organization");
  assert("Meta has discovered count", typeof meta.discovered === "number");
  assert("Meta has enriched count", typeof meta.enriched === "number");
  assert("Meta has returned count", typeof meta.returned === "number");
  assert("Meta has elapsedMs", typeof meta.elapsedMs === "number");
  assert("Meta has filterBreakdown array", Array.isArray(meta.filterBreakdown));
  assert("Meta has deduped count", typeof meta.deduped === "number");

  const leads = res.data.leads as Record<string, unknown>[];
  if (leads.length > 0) {
    const first = leads[0];
    assert("Org lead has mode field", first.mode === "organization");
    assert("Org lead has companyName", typeof first.companyName === "string" && (first.companyName as string).length > 0);
    assert("Org lead has contactName", typeof first.contactName === "string");
    assert("Org lead has location", typeof first.location === "string");
    assert("Org lead has qualityScore", typeof first.qualityScore === "number");
    assert("Org lead has completenessScore", typeof first.completenessScore === "number");
    assert("Org lead has niche", typeof first.niche === "string");
    assert("Org lead has summary", typeof first.summary === "string");
    assert("Org lead has why (opportunity)", typeof first.why === "string");
    assert("Org lead has rating field", first.rating === null || typeof first.rating === "number");
    assert("Org lead has reviewCount field", typeof first.reviewCount === "number");
    assert("Org lead has sourceRefs array", Array.isArray(first.sourceRefs));
    assert("Org lead has emailMissing boolean", typeof first.emailMissing === "boolean");

    const sr = (first.sourceRefs as { provider: string }[])[0];
    assert("Org sourceRef has provider=google_places", sr?.provider === "google_places");

    // Person-specific fields should be null/empty for org leads
    assert("Org lead jobTitle is null", first.jobTitle === null);
    assert("Org lead employer is null", first.employer === null);
  } else {
    console.log("  ⚠ No org leads returned (Google Places API may not be configured)");
  }

  return leads;
}

// ─── 3. Person Search ─────────────────────────────────────────────────────────

async function testPersonSearch() {
  console.log("\n── 3. Person Search ─────────────────────────────");

  const res = await api(
    "POST",
    "/api/sales/prospect",
    {
      mode: "person",
      query: "Insurance agents in Houston TX",
      maxResults: 3,
      criteria: {
        requireEmail: false,
        requirePhone: false,
        locationKeywords: [],
        minQualityScore: 0,
        titleKeywords: [],
        employerKeywords: [],
      },
    },
    AUTH_COOKIE,
  );

  assert("Person search returns 200", res.status === 200, `status=${res.status}`);
  assert("Person response has leads array", Array.isArray(res.data.leads));

  const meta = res.data.meta as Record<string, unknown>;
  assert("Person meta has mode=person", meta.mode === "person");
  assert("Person meta has filterBreakdown array", Array.isArray(meta.filterBreakdown));

  const leads = res.data.leads as Record<string, unknown>[];

  if (leads.length > 0) {
    const first = leads[0];
    assert("Person lead has mode=person", first.mode === "person");
    assert("Person lead has contactName", typeof first.contactName === "string");
    assert("Person lead has qualityScore", typeof first.qualityScore === "number");
    assert("Person lead has completenessScore", typeof first.completenessScore === "number");
  } else {
    console.log("  ⚠ No person leads returned (expected when GOOGLE_CSE_API_KEY is not set)");
    assert("Person search returns empty leads gracefully", Array.isArray(res.data.leads) && leads.length === 0);
    assert("Person search returns helpful message", typeof res.data.message === "string");
  }

  return leads;
}

// ─── 4. Filter & Criteria Validation ──────────────────────────────────────────

async function testFilters() {
  console.log("\n── 4. Filter & Criteria ─────────────────────────");

  // Bad query (too short)
  const short = await api("POST", "/api/sales/prospect", { mode: "organization", query: "ab", maxResults: 1 }, AUTH_COOKIE);
  assert("Rejects query < 3 chars", short.status === 400);

  // Max results capped
  const capped = await api(
    "POST",
    "/api/sales/prospect",
    { mode: "organization", query: "Restaurants in Chicago", maxResults: 50, criteria: {} },
    AUTH_COOKIE,
  );
  const capMeta = capped.data.meta as Record<string, unknown> | undefined;
  assert("Max results capped at 10", capped.status === 200 && (capMeta?.returned as number) <= 10);

  // Organization filters — require email
  const reqEmail = await api(
    "POST",
    "/api/sales/prospect",
    {
      mode: "organization",
      query: "Bakeries in Seattle",
      maxResults: 5,
      criteria: { requireEmail: true },
    },
    AUTH_COOKIE,
  );
  const emailLeads = (reqEmail.data.leads as Record<string, unknown>[]) || [];
  const allHaveEmail = emailLeads.every((l) => l.email && (l.email as string).length > 0);
  assert("requireEmail filter works (all returned leads have email, or none returned)", emailLeads.length === 0 || allHaveEmail);

  const emailMeta = reqEmail.data.meta as Record<string, unknown>;
  assert("filterBreakdown present on filtered search", Array.isArray(emailMeta.filterBreakdown));
  const emailBreakdown = (emailMeta.filterBreakdown as { key: string; count: number }[]) || [];
  const hasRequireEmailKey = emailBreakdown.some((b) => b.key === "requireEmail");
  assert(
    "filterBreakdown includes requireEmail bucket when filter was active and something was excluded",
    emailBreakdown.length === 0 || hasRequireEmailKey,
  );

  // Zero-result diagnostics: require email + require phone + high quality — likely filters everything
  const strict = await api(
    "POST",
    "/api/sales/prospect",
    {
      mode: "organization",
      query: "Bakeries in Seattle",
      maxResults: 3,
      criteria: { requireEmail: true, requirePhone: true, minQualityScore: 95 },
    },
    AUTH_COOKIE,
  );
  const strictMeta = strict.data.meta as Record<string, unknown>;
  assert("Strict filter search returns 200", strict.status === 200);
  assert("Strict filter meta has filterBreakdown", Array.isArray(strictMeta?.filterBreakdown));
  assert("Strict filter meta has discovered count", typeof strictMeta?.discovered === "number");
}

// ─── 5. Save Org Lead to CRM ─────────────────────────────────────────────────

async function testSaveOrgLead() {
  console.log("\n── 5. Save Org Lead to CRM ──────────────────────");

  const res = await api(
    "POST",
    "/api/sales/leads",
    {
      name: "TEST_Owner_OrgLead",
      email: "test@testbiz.com",
      phone: "555-000-1234",
      company: "TEST Plumbing Co",
      service: "Residential Plumbing",
      message: "OPPORTUNITY: Needs a website\n\nSUMMARY: Small local plumber",
      website: "https://testplumbing.example.com",
      location: "Dallas, TX",
      lead_source: "AI Prospecting",
      opportunity_level: "high",
      entity_type: "organization",
      job_title: null,
      analysis_data: {
        rating: 4.2,
        reviewCount: 35,
        niche: "Residential Plumbing",
        qualityScore: 75,
        mode: "organization",
      },
    },
    AUTH_COOKIE,
  );

  assert("Save org lead returns 201", res.status === 201, `status=${res.status}`);
  const lead = res.data;
  assert("Saved org lead has id", typeof lead.id === "number");
  assert("Saved org lead has correct name", lead.name === "TEST_Owner_OrgLead");
  assert("Saved org lead has correct email", lead.email === "test@testbiz.com");
  assert("Saved org lead has correct company", lead.company === "TEST Plumbing Co");
  assert("Saved org lead has correct service", lead.service === "Residential Plumbing");
  assert("Saved org lead has entity_type=organization", lead.entity_type === "organization");
  assert("Saved org lead has website", lead.website === "https://testplumbing.example.com");
  assert("Saved org lead has location", lead.location === "Dallas, TX");
  assert("Saved org lead has lead_source", lead.lead_source === "AI Prospecting");
  assert("Saved org lead has opportunity_level=high", lead.opportunity_level === "high");
  assert("Saved org lead has analysis_data", lead.analysis_data !== null);
  assert("Saved org lead status is new", lead.status === "new");

  if (typeof lead.id === "number") testLeadIds.push(lead.id as number);
  return lead;
}

// ─── 6. Save Person Lead to CRM (partial contact) ────────────────────────────

async function testSavePersonLead() {
  console.log("\n── 6. Save Person Lead to CRM (partial) ─────────");

  // Save with NO email — this used to fail with the old validation
  const res = await api(
    "POST",
    "/api/sales/leads",
    {
      name: "TEST_Jane_Insurance",
      email: "",
      phone: "555-999-8888",
      company: "State Farm",
      service: "Contact",
      message: "OPPORTUNITY: Looking for life insurance leads",
      website: null,
      location: "Houston, TX",
      lead_source: "Contact Search",
      opportunity_level: "medium",
      entity_type: "person",
      job_title: "Insurance Agent",
      analysis_data: {
        qualityScore: 45,
        mode: "person",
      },
    },
    AUTH_COOKIE,
  );

  assert("Save person lead returns 201", res.status === 201, `status=${res.status}`);
  const lead = res.data;
  assert("Person lead saved with no email", lead.email === "");
  assert("Person lead has entity_type=person", lead.entity_type === "person");
  assert("Person lead has job_title", lead.job_title === "Insurance Agent");
  assert("Person lead has company (employer)", lead.company === "State Farm");
  assert("Person lead has phone", lead.phone === "555-999-8888");
  assert("Person lead has lead_source=Contact Search", lead.lead_source === "Contact Search");

  if (typeof lead.id === "number") testLeadIds.push(lead.id as number);

  // Also test name-only save (absolute minimum)
  const minimal = await api(
    "POST",
    "/api/sales/leads",
    { name: "TEST_Minimal_Contact", entity_type: "person" },
    AUTH_COOKIE,
  );
  assert("Minimal person lead (name only) saves OK", minimal.status === 201);
  if (typeof minimal.data.id === "number") testLeadIds.push(minimal.data.id as number);

  return lead;
}

// ─── 7. Retrieve Leads & Verify CRM Integrity ────────────────────────────────

async function testRetrieveLeads() {
  console.log("\n── 7. Retrieve Leads from CRM ───────────────────");

  const res = await api("GET", "/api/sales/leads", undefined, AUTH_COOKIE);
  assert("GET leads returns 200", res.status === 200);

  const allLeads = res.data as unknown as Record<string, unknown>[];
  assert("Leads list is an array", Array.isArray(allLeads));

  const orgLead = allLeads.find((l) => l.name === "TEST_Owner_OrgLead");
  const personLead = allLeads.find((l) => l.name === "TEST_Jane_Insurance");
  const minimalLead = allLeads.find((l) => l.name === "TEST_Minimal_Contact");

  assert("Org test lead found in list", !!orgLead);
  assert("Person test lead found in list", !!personLead);
  assert("Minimal test lead found in list", !!minimalLead);

  if (orgLead) {
    assert("Retrieved org lead has correct entity_type", orgLead.entity_type === "organization");
    assert("Retrieved org lead has analysis_data", orgLead.analysis_data !== null);
    let analysisOk = false;
    try {
      const parsed = typeof orgLead.analysis_data === "string" ? JSON.parse(orgLead.analysis_data as string) : orgLead.analysis_data;
      analysisOk = parsed.rating === 4.2 && parsed.niche === "Residential Plumbing";
    } catch { /* */ }
    assert("Org analysis_data preserved correctly", analysisOk);
  }

  if (personLead) {
    assert("Retrieved person lead has entity_type=person", personLead.entity_type === "person");
    assert("Retrieved person lead has job_title", personLead.job_title === "Insurance Agent");
    assert("Retrieved person lead has empty email (not null)", personLead.email === "");
  }

  if (minimalLead) {
    assert("Minimal lead has entity_type=person", minimalLead.entity_type === "person");
    assert("Minimal lead has default service=General", minimalLead.service === "General");
  }
}

// ─── 8. Outreach Generation ───────────────────────────────────────────────────

async function testOutreach() {
  console.log("\n── 8. Outreach Generation ───────────────────────");

  // Org outreach
  const orgRes = await api(
    "POST",
    "/api/sales/generate-outreach",
    {
      lead: {
        companyName: "TEST Plumbing Co",
        contactName: "Owner",
        niche: "Residential Plumbing",
        location: "Dallas, TX",
        website: "https://testplumbing.example.com",
        notes: "Needs a website redesign",
        email: "test@testbiz.com",
        entityType: "organization",
      },
    },
    AUTH_COOKIE,
  );

  assert("Org outreach returns 200", orgRes.status === 200);
  if (orgRes.data.success) {
    assert("Org outreach has subject", typeof orgRes.data.subject === "string" && (orgRes.data.subject as string).length > 0);
    assert("Org outreach has content", typeof orgRes.data.content === "string" && (orgRes.data.content as string).length > 0);
    assert("Org outreach tracks tokens", typeof orgRes.data.tokensUsed === "number");
  } else {
    console.log(`  ⚠ Org outreach failed: ${orgRes.data.error} (OpenAI key may not be set)`);
  }

  // Person outreach
  const personRes = await api(
    "POST",
    "/api/sales/generate-outreach",
    {
      lead: {
        contactName: "Jane Smith",
        employer: "State Farm",
        jobTitle: "Insurance Agent",
        location: "Houston, TX",
        notes: "Looking for life insurance leads in her area",
        entityType: "person",
      },
    },
    AUTH_COOKIE,
  );

  assert("Person outreach returns 200", personRes.status === 200);
  if (personRes.data.success) {
    assert("Person outreach has subject", typeof personRes.data.subject === "string" && (personRes.data.subject as string).length > 0);
    assert("Person outreach has content", typeof personRes.data.content === "string" && (personRes.data.content as string).length > 0);
  } else {
    console.log(`  ⚠ Person outreach failed: ${personRes.data.error} (OpenAI key may not be set)`);
  }

  // Person outreach validation: should NOT require companyName
  const personNoCompany = await api(
    "POST",
    "/api/sales/generate-outreach",
    {
      lead: {
        contactName: "Bob Jones",
        entityType: "person",
      },
    },
    AUTH_COOKIE,
  );
  assert("Person outreach accepts lead without company", personNoCompany.status === 200);

  // Org outreach validation: requires company
  const orgNoCompany = await api(
    "POST",
    "/api/sales/generate-outreach",
    {
      lead: {
        contactName: "Owner",
        entityType: "organization",
      },
    },
    AUTH_COOKIE,
  );
  assert("Org outreach rejects lead without company", orgNoCompany.status === 400);
}

// ─── 9. Presets with Mode ─────────────────────────────────────────────────────

async function testPresets() {
  console.log("\n── 9. Presets with Mode ─────────────────────────");

  // Create a person-mode preset
  const createRes = await api(
    "POST",
    "/api/sales/prospect-presets",
    {
      name: "TEST_Insurance_Preset",
      mode: "person",
      criteria: {
        requireEmail: true,
        requirePhone: false,
        locationKeywords: ["Houston"],
        titleKeywords: ["Agent"],
        employerKeywords: [],
        minQualityScore: 0,
      },
    },
    AUTH_COOKIE,
  );

  assert("Create preset returns 201", createRes.status === 201, `status=${createRes.status}`);
  assert("Preset has mode=person", createRes.data.mode === "person");
  assert("Preset has correct name", createRes.data.name === "TEST_Insurance_Preset");

  const criteria = createRes.data.criteria as Record<string, unknown>;
  assert("Preset criteria has requireEmail=true", criteria?.requireEmail === true);
  assert("Preset criteria has locationKeywords", Array.isArray(criteria?.locationKeywords));

  testPresetId = createRes.data.id as number;

  // Retrieve presets
  const listRes = await api("GET", "/api/sales/prospect-presets", undefined, AUTH_COOKIE);
  assert("List presets returns 200", listRes.status === 200);
  const presets = listRes.data as unknown as Record<string, unknown>[];
  const found = presets.find((p) => p.name === "TEST_Insurance_Preset");
  assert("Test preset appears in list", !!found);
  if (found) {
    assert("Listed preset has mode=person", found.mode === "person");
  }
}

// ─── 10. Cleanup ──────────────────────────────────────────────────────────────

async function cleanup() {
  console.log("\n── 10. Cleanup ──────────────────────────────────");

  for (const id of testLeadIds) {
    const res = await api("DELETE", "/api/sales/leads", { id }, AUTH_COOKIE);
    assert(`Delete test lead ${id}`, res.status === 200);
  }

  if (testPresetId) {
    const res = await api("DELETE", `/api/sales/prospect-presets/${testPresetId}`, undefined, AUTH_COOKIE);
    assert(`Delete test preset ${testPresetId}`, res.status === 200);
  }
}

// ─── Runner ───────────────────────────────────────────────────────────────────

async function main() {
  console.log("╔══════════════════════════════════════════════════╗");
  console.log("║  Dual-Mode Lookup — End-to-End Flow Test        ║");
  console.log("╚══════════════════════════════════════════════════╝");

  try {
    await testAuth();
    await testOrgSearch();
    await testPersonSearch();
    await testFilters();
    await testSaveOrgLead();
    await testSavePersonLead();
    await testRetrieveLeads();
    await testOutreach();
    await testPresets();
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
    failures.forEach((f) => console.log(`    • ${f}`));
  }
  console.log("══════════════════════════════════════════════════\n");

  process.exit(failed > 0 ? 1 : 0);
}

main();
