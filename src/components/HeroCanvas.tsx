"use client";

/*
 * HeroCanvas — "ORBITAL CORE v2" (density/spectacle pass)
 *
 * One composed cinematic scene, hand-rolled 3D on a plain 2D canvas:
 *   1. Starfield  — 620 particles (mobile 280) in 3 depth bands with fog,
 *      slow drift, alpha twinkle, and per-band pointer parallax (far ~10px,
 *      near ~28px).
 *   2. Core       — wireframe icosahedron (~50s/turn on a tilted axis) with a
 *      counter-rotating dodecahedron inside, glowing vertex points, and a
 *      breathing inner core glow (3.2s period).
 *   3. Rings      — 3 elliptical orbit rings at distinct inclinations, each
 *      carrying 2 traveling light pulses (mobile 1) with fading trails; arc
 *      opacity is depth-modulated (near arc brighter).
 *   4. Network    — 32 nodes on two spherical shells (mobile 16) joined by
 *      45-60 nearest-neighbor edges, 18 concurrent data packets (mobile 8)
 *      with motion trails; the labeled nodes (Core/CRM/API/Trade/DB/Auth)
 *      billboard to camera and fade/scale with depth.
 *   5. Grid floor — perspective Tron floor over the bottom ~35%, exponential
 *      distance fade, slow forward glide (desktop only).
 *   6. Camera     — continuous orbital sway, pointer steering (~5 deg, eased),
 *      and a scroll-linked dolly-back/pitch-down computed inside the rAF from
 *      a cached scrollY (passive listener; zero per-frame layout reads).
 *   7. Atmosphere — additive sky/cyan/violet glow fields breathing over the
 *      depth fog, plus a shooting-star streak across the far field every
 *      7-10 seconds.
 *
 * ENGINEERING DECISIONS (do not regress these without re-running the numbers):
 * - ZERO new dependencies. three.js / react-three-fiber were evaluated and
 *   REJECTED: this SEO-critical site had ~123KB of animation JS deliberately
 *   removed in a prior Core Web Vitals pass, and a WebGL runtime would undo
 *   that for projection math we can write ourselves.
 * - Zero per-frame allocations: typed arrays are preallocated and reused,
 *   colors are memoized rgba ramps (LEVELS-step depth fog), glows are
 *   pre-rendered sprite stamps (drawImage), fonts are precomputed strings.
 * - Batched strokes: all wireframe/edge/ring line work is bucketed by
 *   quantized depth level and stroked once per level (<= 16 strokes per
 *   family) instead of once per segment. No shadowBlur anywhere, no gradient
 *   creation in the hot loop. Because the art is additive glow-line work on a
 *   dark bg, exact painter ordering is unnecessary — the v1 per-frame depth
 *   sort was dropped in favor of fixed layers + depth fog.
 * - LCP guard: one cheap static frame is painted synchronously on mount, then
 *   the rAF loop starts behind requestIdleCallback (200ms setTimeout fallback)
 *   so the headline word-reveal owns the main thread.
 * - The loop is gated by BOTH document.hidden (visibilitychange) and an
 *   IntersectionObserver — a scrolled-past hero costs 0ms per frame. 30fps
 *   cap; a one-way quality governor steps effects down on sustained overage.
 * - prefers-reduced-motion renders ONE dense static pose of the full scene
 *   (every layer visible, packets/pulses/stars frozen mid-flight), no loop.
 * - Ship gate: compare `monitor:lighthouse` before/after any change here
 *   (LCP element unchanged, TBT delta < 50ms, CLS 0.00).
 */

import { useEffect, useRef } from "react";

/* ─────────────────────────────── Constants ─────────────────────────────── */

const F = 1450;             // focal length — ~53° FOV. The original 700 gave a
                            // ~91° ultra-wide lens: edge nodes smeared outward
                            // and long edges stretched toward the corners (the
                            // "distorted" look). Long lens + pulled-back camera
                            // keeps the same composition scale (F/CAM_DIST
                            // unchanged) with far less perspective warp.
const CAM_DIST = 1850;      // camera distance along -Z (scaled with F)
const ROT0 = 0.6;           // designed hero angle (also the reduced-motion pose)
const TILT_X = -0.26;       // base camera tilt
const RADIUS_K = 1.35;      // world-radius -> px fudge (matches v1 node sizes)
const DEG = Math.PI / 180;
const TAU = Math.PI * 2;
const SEED = 0x51ab0705;    // deterministic scene (reviewable static poses)
const LEVELS = 48;          // depth-fog quantization steps — 16 made rotating
                            // elements visibly pop between alpha bands
                            // (read as flicker); 48 is below perception.

const R_INNER = 170;        // inner node shell (labeled nodes)
const R_OUTER = 300;        // outer node shell
const ICO_R = 250;          // icosahedron radius (~1.3x logo footprint)
const DUAL_R = 135;         // inner counter-rotating dodecahedron

const SKY: readonly number[] = [56, 189, 248];     // #38bdf8
const CYAN: readonly number[] = [34, 211, 238];    // #22d3ee
const VIOLET: readonly number[] = [129, 140, 248]; // #818cf8

/* Orbit rings: semi-axes (world units), inclinations, precession speed. */
const RING_A = [360, 424, 486];
const RING_B = [252, 296, 330];
const RING_INC_X = [64 * DEG, -24 * DEG, 12 * DEG];
const RING_INC_Z = [6 * DEG, 40 * DEG, -54 * DEG];
const RING_W = [0.1, -0.07, 0.055];   // rad/s precession
const RING_PHI0 = [0.7, 2.4, 4.6];

/* ─────────────────────── Deterministic PRNG (mulberry32) ───────────────── */

function mulberry32(seed: number): () => number {
    let a = seed >>> 0;
    return function () {
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), a | 1);
        t = (t + Math.imul(t ^ (t >>> 7), t | 61)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

/* ─────────────────────────────── Geometry ──────────────────────────────── */

/** Spherical -> cartesian (y negated: canvas y grows downward). */
function sph(r: number, azDeg: number, elDeg: number): [number, number, number] {
    const az = azDeg * DEG;
    const el = elDeg * DEG;
    return [
        r * Math.cos(el) * Math.cos(az),
        -r * Math.sin(el),
        r * Math.cos(el) * Math.sin(az),
    ];
}

const LABELS = ["Core", "CRM", "API", "Trade", "DB", "Auth"];
const LABEL_N = LABELS.length;

/* Icosahedron: 12 unit verts, 30 edges. */
const PHI = (1 + Math.sqrt(5)) / 2;
const ICO_NORM = Math.sqrt(1 + PHI * PHI);
const ICO_VERTS: [number, number, number][] = ([
    [-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0],
    [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI],
    [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1],
] as [number, number, number][]).map(
    (v) => [v[0] / ICO_NORM, v[1] / ICO_NORM, v[2] / ICO_NORM] as [number, number, number]
);
const ICO_EDGES: [number, number][] = [];
for (let i = 0; i < 12; i++) {
    for (let j = i + 1; j < 12; j++) {
        const dx = ICO_VERTS[i][0] - ICO_VERTS[j][0];
        const dy = ICO_VERTS[i][1] - ICO_VERTS[j][1];
        const dz = ICO_VERTS[i][2] - ICO_VERTS[j][2];
        if (dx * dx + dy * dy + dz * dz < 1.21) ICO_EDGES.push([i, j]);
    }
}

/* Dodecahedron (dual): 20 unit verts, 30 edges — counter-rotates inside. */
const IPHI = 1 / PHI;
const DODE_RAW: [number, number, number][] = [];
for (const sx of [-1, 1]) {
    for (const sy of [-1, 1]) {
        for (const sz of [-1, 1]) DODE_RAW.push([sx, sy, sz]);
    }
}
for (const s1 of [-1, 1]) {
    for (const s2 of [-1, 1]) {
        DODE_RAW.push([0, s1 * IPHI, s2 * PHI]);
        DODE_RAW.push([s1 * IPHI, s2 * PHI, 0]);
        DODE_RAW.push([s1 * PHI, 0, s2 * IPHI]);
    }
}
const DODE_NORM = Math.sqrt(3);
const DODE_VERTS: [number, number, number][] = DODE_RAW.map(
    (v) => [v[0] / DODE_NORM, v[1] / DODE_NORM, v[2] / DODE_NORM] as [number, number, number]
);
const DODE_EDGES: [number, number][] = [];
for (let i = 0; i < 20; i++) {
    for (let j = i + 1; j < 20; j++) {
        const dx = DODE_VERTS[i][0] - DODE_VERTS[j][0];
        const dy = DODE_VERTS[i][1] - DODE_VERTS[j][1];
        const dz = DODE_VERTS[i][2] - DODE_VERTS[j][2];
        if (dx * dx + dy * dy + dz * dz < 0.55) DODE_EDGES.push([i, j]);
    }
}

/** Rodrigues-rotation precomputation: v' = v*cos + (axis x v)*sin + axis(axis.v)(1-cos). */
function axisRotPre(
    verts: readonly [number, number, number][],
    scale: number,
    ax: number,
    ay: number,
    az: number
): { base: Float32Array; crs: Float32Array; ad: Float32Array } {
    const n = verts.length;
    const base = new Float32Array(n * 3);
    const crs = new Float32Array(n * 3);
    const ad = new Float32Array(n * 3);
    const len = Math.hypot(ax, ay, az) || 1;
    const ux = ax / len;
    const uy = ay / len;
    const uz = az / len;
    for (let i = 0; i < n; i++) {
        const vx = verts[i][0] * scale;
        const vy = verts[i][1] * scale;
        const vz = verts[i][2] * scale;
        base[i * 3] = vx;
        base[i * 3 + 1] = vy;
        base[i * 3 + 2] = vz;
        crs[i * 3] = uy * vz - uz * vy;
        crs[i * 3 + 1] = uz * vx - ux * vz;
        crs[i * 3 + 2] = ux * vy - uy * vx;
        const d = ux * vx + uy * vy + uz * vz;
        ad[i * 3] = ux * d;
        ad[i * 3 + 1] = uy * d;
        ad[i * 3 + 2] = uz * d;
    }
    return { base, crs, ad };
}

/* ───────────────────────── Memoized color ramps ────────────────────────── */

function mixRgba(a: readonly number[], b: readonly number[], t: number, alpha: number): string {
    const r = Math.round(a[0] + (b[0] - a[0]) * t);
    const g = Math.round(a[1] + (b[1] - a[1]) * t);
    const bl = Math.round(a[2] + (b[2] - a[2]) * t);
    return `rgba(${r},${g},${bl},${alpha.toFixed(3)})`;
}

/** Near color/alpha at level 0 -> far color/alpha at level 15 (violet-shifted). */
function ramp(near: readonly number[], far: readonly number[], aNear: number, aFar: number): string[] {
    const out: string[] = [];
    for (let l = 0; l < LEVELS; l++) {
        const t = l / (LEVELS - 1);
        out.push(mixRgba(near, far, t, aNear + (aFar - aNear) * t));
    }
    return out;
}

/** Exponential-alpha ramp (grid floor distance fade). */
function expRamp(near: readonly number[], far: readonly number[], aNear: number, k: number): string[] {
    const out: string[] = [];
    for (let l = 0; l < LEVELS; l++) {
        out.push(mixRgba(near, far, l / (LEVELS - 1), aNear * Math.exp(-l * k)));
    }
    return out;
}

const EDGE_ST = ramp(SKY, VIOLET, 0.34, 0.06);
const EDGE_BRIGHT_ST = ramp(SKY, VIOLET, 0.85, 0.3);
const ICO_ST = ramp(SKY, VIOLET, 0.3, 0.05);
const DUAL_ST = ramp(CYAN, VIOLET, 0.26, 0.045);
const RING_ST = ramp(CYAN, VIOLET, 0.3, 0.045);
const VERT_ST = ramp(SKY, VIOLET, 0.85, 0.22);
const VERT2_ST = ramp(CYAN, VIOLET, 0.65, 0.16);
const PART_ST = ramp(SKY, VIOLET, 0.95, 0.3);
const PULSE_ST = ramp(CYAN, VIOLET, 0.95, 0.28);
// Constant-alpha hue ramp (k=0): row brightness is now applied continuously
// via globalAlpha in drawGrid — the old baked per-level alpha decay made each
// gliding row pop between discrete brightness steps (visible flicker).
const GRID_ROW_ST = expRamp(SKY, VIOLET, 0.26, 0);
const BODY_ST = [
    ramp(SKY, VIOLET, 1, 0.4),       // hub
    ramp(CYAN, VIOLET, 0.95, 0.38),  // labeled / inner node
    ramp(VIOLET, VIOLET, 0.85, 0.3), // outer leaf
];
const GRID_V_NEAR = "rgba(56,189,248,0.16)";
const GRID_V_FAR = "rgba(93,164,248,0.05)";
const GRID_HORIZON = "rgba(56,189,248,0.22)";
const SHOOT_ST = "rgba(226,240,254,1)";
const STAR_FILL = [
    "rgba(168,172,246,0.9)",  // far  — violet fog tint
    "rgba(147,197,248,0.92)", // mid  — sky tint
    "rgba(224,240,254,0.95)", // near — near-white
];

/* ───────────────────────────── Glow sprites ────────────────────────────── */

function makeGlowSprite(rgb: readonly number[], size: number, coreAlpha: number): HTMLCanvasElement {
    const c = document.createElement("canvas");
    c.width = size;
    c.height = size;
    const g = c.getContext("2d")!;
    const half = size / 2;
    const grad = g.createRadialGradient(half, half, 0, half, half, half);
    grad.addColorStop(0, `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${coreAlpha})`);
    grad.addColorStop(0.55, `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${coreAlpha * 0.28})`);
    grad.addColorStop(1, `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0)`);
    g.fillStyle = grad;
    g.fillRect(0, 0, size, size);
    return c;
}

/* ──────────────────────────────── Component ────────────────────────────── */

export function HeroCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const cv = canvasRef.current;
        if (!cv) return;
        const ctx = cv.getContext("2d");
        if (!ctx) return;
        const g = ctx;

        const rnd = mulberry32(SEED);

        /* ── Capability tiers (evaluated once at mount) ────────────────── */
        const coarse = window.matchMedia("(pointer: coarse)").matches;
        const mobileTier = coarse || window.innerWidth < 768;
        const finePointer = window.matchMedia("(pointer: fine)").matches && !mobileTier;
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

        /* Mobile tier: ~45% counts; grid floor dropped (twinkle kept). */
        const STAR_N = mobileTier ? 280 : 620;
        const INNER_EXTRA = mobileTier ? 3 : 8;
        const OUTER_N = mobileTier ? 8 : 19;
        const EDGE_CAP = mobileTier ? 30 : 60;
        const PACKET_N = mobileTier ? 8 : 18;
        const RING_SEG = mobileTier ? 48 : 72;
        const PULSE_N = mobileTier ? 3 : 6; // pulses across the 3 rings
        const DPR_CAP = mobileTier ? 1.5 : 2;

        /* Governor-mutable quality state (one-way step-down, never back up). */
        let useLighter = !mobileTier;
        let twinkleOn = true;
        let gridOn = !mobileTier;
        let shootOn = true;
        let starHalf = false;
        let activePackets = PACKET_N;
        // Native rAF pacing (0 = no gate). The old 1000/30 gate against a
        // 120Hz ProMotion display fired on an uneven 2-3-vsync cadence —
        // visible judder/"flicker". Motion is dt-based so rate is free to
        // float; the governor introduces caps only under real load.
        let frameMs = 0;
        let govTier = 0;
        let overBudget = 0;

        /* ── Canvas sizing ─────────────────────────────────────────────── */
        let w = 0;
        let h = 0;
        let cx = 0;
        let cy = 0;
        let unit = 1;
        let dpr = 1;
        let heroH = 0;

        function setSize(): void {
            dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
            w = cv!.offsetWidth;
            h = cv!.offsetHeight;
            cv!.width = Math.max(1, Math.round(w * dpr));
            cv!.height = Math.max(1, Math.round(h * dpr));
            g.setTransform(dpr, 0, 0, dpr, 0, 0);
            g.textAlign = "center";
            g.textBaseline = "alphabetic";
            cx = w / 2;
            cy = h * 0.46;
            unit = Math.min(w, h) / 840;
            heroH = h;
        }

        /* ── Fonts (site family via computed style; precomputed strings) ─ */
        const family = getComputedStyle(cv).fontFamily || "system-ui, sans-serif";
        const FONT_LBL: string[] = [];
        const FONT_CORE: string[] = [];
        for (let fs = 8; fs <= 14; fs++) {
            FONT_LBL.push(`500 ${fs}px ${family}`);
            FONT_CORE.push(`700 ${fs}px ${family}`);
        }

        /* ── Sprites (pre-rendered once; drawImage-stamped per frame) ──── */
        const SP_SKY = makeGlowSprite(SKY, 96, 0.55);
        const SP_CYAN = makeGlowSprite(CYAN, 96, 0.55);
        const SP_VIOLET = makeGlowSprite(VIOLET, 96, 0.5);
        const SP_HUB = makeGlowSprite(SKY, 192, 0.28);
        const SP_WHITE = makeGlowSprite([255, 255, 255], 64, 0.9);
        const NODE_SPRITES = [SP_SKY, SP_CYAN, SP_VIOLET]; // by node type

        /* ── Node shells: core + labeled inner + seeded inner/outer fill ─ */
        const N = 1 + 5 + INNER_EXTRA + OUTER_N;
        const basePos = new Float32Array(N * 3);
        const NODE_R = new Float32Array(N);
        const NODE_TYPE = new Uint8Array(N);
        const nodeDelay = new Float32Array(N);

        function setNode(i: number, p: [number, number, number], r: number, type: number, delay: number): void {
            basePos[i * 3] = p[0];
            basePos[i * 3 + 1] = p[1];
            basePos[i * 3 + 2] = p[2];
            NODE_R[i] = r;
            NODE_TYPE[i] = type;
            nodeDelay[i] = delay;
        }

        setNode(0, [0, 0, 0], 10, 0, 0);
        setNode(1, sph(R_INNER, 0, 18), 6, 1, 0.25);
        setNode(2, sph(R_INNER, 72, -12), 6, 1, 0.32);
        setNode(3, sph(R_INNER, 144, 25), 6, 1, 0.39);
        setNode(4, sph(R_INNER, 216, -20), 6, 1, 0.46);
        setNode(5, sph(R_INNER, 288, 8), 5.6, 1, 0.53);
        for (let i = 0; i < INNER_EXTRA; i++) {
            const az = 30 + i * (360 / INNER_EXTRA) + rnd() * 26;
            const el = (rnd() - 0.5) * 74;
            setNode(6 + i, sph(R_INNER, az, el), 3.8 + rnd() * 0.8, 1, 0.55 + rnd() * 0.5);
        }
        const outerStart = 6 + INNER_EXTRA;
        for (let i = 0; i < OUTER_N; i++) {
            const az = i * 137.508 + rnd() * 16;
            const el = (Math.asin(2 * (i + 0.5) / OUTER_N - 1) / DEG) * 0.82 + (rnd() - 0.5) * 8;
            setNode(outerStart + i, sph(R_OUTER, az, el), 3 + rnd() * 1.1, 2, 0.75 + rnd() * 0.9);
        }

        /* ── Edges: core spokes + nearest-neighbor shells + cross stitches ─ */
        const edgeKey = new Set<number>();
        const eLA: number[] = [];
        const eLB: number[] = [];
        function tryEdge(a: number, b: number): void {
            if (a === b || eLA.length >= EDGE_CAP) return;
            const lo = a < b ? a : b;
            const hi = a < b ? b : a;
            const key = lo * 64 + hi;
            if (edgeKey.has(key)) return;
            edgeKey.add(key);
            eLA.push(lo);
            eLB.push(hi);
        }
        function d2(a: number, b: number): number {
            const dx = basePos[a * 3] - basePos[b * 3];
            const dy = basePos[a * 3 + 1] - basePos[b * 3 + 1];
            const dz = basePos[a * 3 + 2] - basePos[b * 3 + 2];
            return dx * dx + dy * dy + dz * dz;
        }
        for (let i = 1; i <= 5; i++) tryEdge(0, i);
        for (let i = 1; i < N; i++) {
            let b1 = -1;
            let b2 = -1;
            let d1 = Infinity;
            let dd = Infinity;
            for (let j = 1; j < N; j++) {
                if (j === i) continue;
                const d = d2(i, j);
                if (d < d1) {
                    dd = d1;
                    b2 = b1;
                    d1 = d;
                    b1 = j;
                } else if (d < dd) {
                    dd = d;
                    b2 = j;
                }
            }
            if (b1 > 0) tryEdge(i, b1);
            if (b2 > 0) tryEdge(i, b2);
        }
        for (let i = outerStart; i < N; i += 2) {
            let bj = -1;
            let bd = Infinity;
            for (let j = 1; j < outerStart; j++) {
                const d = d2(i, j);
                if (d < bd) {
                    bd = d;
                    bj = j;
                }
            }
            if (bj > 0) tryEdge(i, bj);
        }
        if (!mobileTier) {
            // Top-up with 3rd-nearest links until the 45-edge floor is met.
            for (let i = 1; i < N && eLA.length < 46; i++) {
                let b1 = -1, b2 = -1, b3 = -1;
                let d1 = Infinity, dd = Infinity, d3 = Infinity;
                for (let j = 1; j < N; j++) {
                    if (j === i) continue;
                    const d = d2(i, j);
                    if (d < d1) {
                        d3 = dd; b3 = b2;
                        dd = d1; b2 = b1;
                        d1 = d; b1 = j;
                    } else if (d < dd) {
                        d3 = dd; b3 = b2;
                        dd = d; b2 = j;
                    } else if (d < d3) {
                        d3 = d;
                        b3 = j;
                    }
                }
                if (b3 > 0) tryEdge(i, b3);
            }
        }
        const E = eLA.length;
        const eA = Int16Array.from(eLA);
        const eB = Int16Array.from(eLB);
        const edgeDelay = new Float32Array(E);
        let ignEnd = 0;
        for (let e = 0; e < E; e++) {
            edgeDelay[e] = Math.max(nodeDelay[eA[e]], nodeDelay[eB[e]]) + 0.1;
            if (edgeDelay[e] > ignEnd) ignEnd = edgeDelay[e];
        }
        ignEnd += 0.4;

        /* ── Preallocated transform buffers (zero per-frame allocation) ── */
        const nView = new Float32Array(N * 3);
        const nSX = new Float32Array(N);
        const nSY = new Float32Array(N);
        const nSC = new Float32Array(N);
        const edgeLvl = new Uint8Array(E);

        const iPX = new Float32Array(12);
        const iPY = new Float32Array(12);
        const iPZ = new Float32Array(12);
        const dPX = new Float32Array(20);
        const dPY = new Float32Array(20);
        const dPZ = new Float32Array(20);
        const icoELvl = new Uint8Array(ICO_EDGES.length);
        const dualELvl = new Uint8Array(DODE_EDGES.length);

        const icoPre = axisRotPre(ICO_VERTS, ICO_R, 0.32, 1, 0.24);
        const dualPre = axisRotPre(DODE_VERTS, DUAL_R, -0.5, 1, 0.35);
        const icoBaseA = icoPre.base, icoCrsA = icoPre.crs, icoAdA = icoPre.ad;
        const dualBaseA = dualPre.base, dualCrsA = dualPre.crs, dualAdA = dualPre.ad;

        const ringPX = new Float32Array(3 * RING_SEG);
        const ringPY = new Float32Array(3 * RING_SEG);
        const ringPZ = new Float32Array(3 * RING_SEG);
        const ringLvl = new Uint8Array(3 * RING_SEG);
        const ringPhiCos = new Float32Array(3);
        const ringPhiSin = new Float32Array(3);
        const ringCosX = new Float32Array(3);
        const ringSinX = new Float32Array(3);
        const ringCosZ = new Float32Array(3);
        const ringSinZ = new Float32Array(3);
        for (let r = 0; r < 3; r++) {
            ringCosX[r] = Math.cos(RING_INC_X[r]);
            ringSinX[r] = Math.sin(RING_INC_X[r]);
            ringCosZ[r] = Math.cos(RING_INC_Z[r]);
            ringSinZ[r] = Math.sin(RING_INC_Z[r]);
        }
        const segCos = new Float32Array(RING_SEG);
        const segSin = new Float32Array(RING_SEG);
        for (let k = 0; k < RING_SEG; k++) {
            segCos[k] = Math.cos((k / RING_SEG) * TAU);
            segSin[k] = Math.sin((k / RING_SEG) * TAU);
        }

        /* ── Ring pulses ───────────────────────────────────────────────── */
        const puRing = new Uint8Array(PULSE_N);
        const puT = new Float32Array(PULSE_N);
        const puSpd = new Float32Array(PULSE_N);
        const puA = new Float32Array(PULSE_N);
        for (let p = 0; p < PULSE_N; p++) {
            puRing[p] = p % 3;
            puT[p] = rnd();
            puSpd[p] = 0.05 + rnd() * 0.05; // revs/s -> 10-20s per lap
            puA[p] = 0.6 + rnd() * 0.4;
        }

        /* ── Node pulse phases ─────────────────────────────────────────── */
        const pulsePhase = new Float32Array(N);
        const pulseSpeed = new Float32Array(N);
        for (let i = 0; i < N; i++) {
            pulsePhase[i] = rnd() * TAU;
            pulseSpeed[i] = 1.2 + rnd() * 1.6;
        }

        /* ── Data packets (respawn onto a fresh random edge on arrival) ── */
        const pEdge = new Int16Array(PACKET_N);
        const pT = new Float32Array(PACKET_N);
        const pSpd = new Float32Array(PACKET_N);
        const pAlpha = new Float32Array(PACKET_N);
        for (let i = 0; i < PACKET_N; i++) {
            pEdge[i] = Math.floor(rnd() * E) % E;
            pT[i] = rnd();
            pSpd[i] = 0.06 + rnd() * 0.1;
            pAlpha[i] = 0.5 + rnd() * 0.5;
        }

        /* ── Starfield: 3 depth bands in normalized screen space ───────── */
        const sUX = new Float32Array(STAR_N);
        const sUY = new Float32Array(STAR_N);
        const sPh = new Float32Array(STAR_N);
        const sSp = new Float32Array(STAR_N);
        const sA = new Float32Array(STAR_N);
        const sSz = new Float32Array(STAR_N);
        const FAR_END = Math.floor(STAR_N * 0.5);
        const MID_END = Math.floor(STAR_N * 0.83);
        for (let i = 0; i < STAR_N; i++) {
            sUX[i] = rnd();
            sUY[i] = rnd();
            sPh[i] = rnd() * TAU;
            sSp[i] = 0.6 + rnd() * 1.8;
            const band = i < FAR_END ? 0 : i < MID_END ? 1 : 2;
            sA[i] = (band === 0 ? 0.42 : band === 1 ? 0.6 : 0.85) * (0.65 + rnd() * 0.5);
            sSz[i] = (band === 0 ? 1 : band === 1 ? 1.6 : 2.3) + rnd() * 0.5;
        }
        const BAND_DRIFT = [1.1, 2.4, 4.2]; // px/s horizontal drift
        const BAND_PARA = [10, 18, 28];     // px max pointer parallax
        const bandOff = new Float32Array(3);

        /* ── Shooting star (far-field streak every 7-10s) ──────────────── */
        let shootActive = false;
        let shootT = 0;
        let shootNext = 5 + rnd() * 4;
        let shootX = 0;
        let shootY = 0;
        let shootDX = 1;
        let shootDY = 0.3;
        let shootLen = 400;

        function spawnShoot(): void {
            const toRight = rnd() < 0.5;
            const ang = (0.06 + rnd() * 0.12) * Math.PI;
            shootDX = (toRight ? 1 : -1) * Math.cos(ang);
            shootDY = Math.sin(ang);
            shootX = toRight ? w * (0.05 + rnd() * 0.35) : w * (0.6 + rnd() * 0.35);
            shootY = h * (0.04 + rnd() * 0.28);
            shootLen = w * (0.3 + rnd() * 0.25);
            shootT = 0;
            shootActive = true;
        }

        /* ── Labels ────────────────────────────────────────────────────── */
        const labelAlpha = new Float32Array(LABEL_N);
        const labelTarget = new Float32Array(LABEL_N);

        /* ── Animation state ───────────────────────────────────────────── */
        let animTime = 0;      // seconds of *animated* time (pauses freeze it)
        let viewRotY = ROT0;
        let viewRotX = TILT_X;
        let camD = CAM_DIST - 80;
        let scrollYCache = window.scrollY;
        let scrollProg = 0;

        /* Pointer steering (fine pointers only), spring-damped. */
        let ptTX = 0;   // target, normalized [-1, 1]
        let ptTY = 0;
        let pNX = 0;    // smoothed
        let pNY = 0;
        let ptGone = true;

        /* Loop bookkeeping. */
        let rafId = 0;
        let running = false;
        let started = false;
        let inView = true;
        let reduced = mq.matches;
        let lastNow = 0;
        let lastFrame = 0;
        let disposed = false;

        const easeOutCubic = (t: number) => 1 - (1 - t) * (1 - t) * (1 - t);
        const clamp01 = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);
        const nodeIgn = (i: number) => easeOutCubic(clamp01((animTime - nodeDelay[i]) / 0.35));
        const envFade = () => clamp01((animTime - 0.15) / 1.15);
        const level = (z: number) => {
            const l = Math.round(((z + 520) / 1040) * (LEVELS - 1));
            return l < 0 ? 0 : l > LEVELS - 1 ? LEVELS - 1 : l;
        };

        /* ── Time integration (all state; render stays draw-only) ─────── */
        function advance(dt: number): void {
            animTime += dt;

            // Pointer smoothing: tau 250ms toward cursor, ~400ms release.
            const tau = ptGone ? 0.4 : 0.25;
            const k = 1 - Math.exp(-dt / tau);
            pNX += (ptTX - pNX) * k;
            pNY += (ptTY - pNY) * k;

            // Starfield drift (kept wrapped so precision never degrades).
            if (w > 0) {
                for (let b = 0; b < 3; b++) {
                    bandOff[b] = (bandOff[b] + BAND_DRIFT[b] * dt) % w;
                }
            }

            // Packets flow once their edge has ignited; respawn on arrival.
            for (let i = 0; i < activePackets; i++) {
                if (animTime < edgeDelay[pEdge[i]] + 0.35) continue;
                pT[i] += pSpd[i] * dt;
                if (pT[i] >= 1) {
                    pT[i] -= 1;
                    pEdge[i] = Math.floor(rnd() * E) % E;
                    pSpd[i] = 0.06 + rnd() * 0.1;
                    pAlpha[i] = 0.5 + rnd() * 0.5;
                }
            }

            // Ring pulses.
            for (let p = 0; p < PULSE_N; p++) {
                puT[p] = (puT[p] + puSpd[p] * dt) % 1;
            }

            // Label fades (200ms), driven by last frame's visibility targets.
            for (let i = 0; i < LABEL_N; i++) {
                const dir = labelTarget[i] > labelAlpha[i] ? 1 : -1;
                labelAlpha[i] = clamp01(labelAlpha[i] + dir * (dt / 0.2));
            }

            // Shooting-star scheduler.
            if (shootOn) {
                if (!shootActive && animTime >= shootNext) {
                    spawnShoot();
                } else if (shootActive) {
                    shootT += dt / 0.9;
                    if (shootT >= 1) {
                        shootActive = false;
                        shootNext = animTime + 7 + rnd() * 3;
                    }
                }
            }
        }

        /* ── Camera pose (orbital sway + pointer + scroll dolly/pitch) ─── */
        function computePose(): void {
            scrollProg = heroH > 0 ? clamp01(scrollYCache / (heroH * 0.85)) : 0;
            viewRotY = ROT0 + animTime * 0.04 + 0.05 * Math.sin(animTime * (TAU / 26)) + pNX * 0.087;
            viewRotX = TILT_X + 0.03 * Math.sin(animTime * (TAU / 17)) - pNY * 0.05 + 0.1 * scrollProg;
            camD = CAM_DIST - 165 * (1 - easeOutCubic(clamp01(animTime / 1.6))) + 620 * scrollProg;
        }

        /* ── Transform + project ───────────────────────────────────────── */
        let vSinY = 0, vCosY = 1, vSinX = 0, vCosX = 1;
        const tmp3 = new Float32Array(3);

        function projectPoint(x: number, y: number, z: number, out: Float32Array, oi: number): void {
            const x1 = x * vCosY + z * vSinY;
            const z1 = -x * vSinY + z * vCosY;
            const y2 = y * vCosX - z1 * vSinX;
            const z2 = y * vSinX + z1 * vCosX;
            const s = (F / (camD + z2)) * unit;
            out[oi] = cx + x1 * s;
            out[oi + 1] = cy + y2 * s;
            out[oi + 2] = z2;
        }

        /** Ring-local point (precession + double inclination), projected. */
        function ringPoint(r: number, ct: number, st: number, out: Float32Array): void {
            const x0 = ct * RING_A[r];
            const z0 = st * RING_B[r];
            const cph = ringPhiCos[r];
            const sph2 = ringPhiSin[r];
            const x1 = x0 * cph + z0 * sph2;
            const z1 = -x0 * sph2 + z0 * cph;
            const y2 = -z1 * ringSinX[r];
            const z2 = z1 * ringCosX[r];
            const x3 = x1 * ringCosZ[r] - y2 * ringSinZ[r];
            const y3 = x1 * ringSinZ[r] + y2 * ringCosZ[r];
            projectPoint(x3, y3, z2, out, 0);
        }

        function projectAll(): void {
            vSinY = Math.sin(viewRotY);
            vCosY = Math.cos(viewRotY);
            vSinX = Math.sin(viewRotX);
            vCosX = Math.cos(viewRotX);

            // Nodes.
            for (let i = 0; i < N; i++) {
                const px = basePos[i * 3];
                const py = basePos[i * 3 + 1];
                const pz = basePos[i * 3 + 2];
                const x1 = px * vCosY + pz * vSinY;
                const z1 = -px * vSinY + pz * vCosY;
                const y2 = py * vCosX - z1 * vSinX;
                const z2 = py * vSinX + z1 * vCosX;
                nView[i * 3] = x1;
                nView[i * 3 + 1] = y2;
                nView[i * 3 + 2] = z2;
                const s = (F / (camD + z2)) * unit;
                nSC[i] = s;
                nSX[i] = cx + x1 * s;
                nSY[i] = cy + y2 * s;
            }

            // Label visibility targets: front hemisphere only; Core always on.
            labelTarget[0] = 1;
            for (let i = 1; i < LABEL_N; i++) {
                labelTarget[i] = nView[i * 3 + 2] < -30 && nodeIgn(i) > 0.8 ? 1 : 0;
            }

            // Icosahedron: ~50s/turn about its tilted axis (Rodrigues).
            let th = 0.35 + animTime * (TAU / 50);
            let c = Math.cos(th);
            let s = Math.sin(th);
            let t1 = 1 - c;
            for (let i = 0; i < 12; i++) {
                const j = i * 3;
                projectPoint(
                    icoBaseA[j] * c + icoCrsA[j] * s + icoAdA[j] * t1,
                    icoBaseA[j + 1] * c + icoCrsA[j + 1] * s + icoAdA[j + 1] * t1,
                    icoBaseA[j + 2] * c + icoCrsA[j + 2] * s + icoAdA[j + 2] * t1,
                    tmp3, 0
                );
                iPX[i] = tmp3[0];
                iPY[i] = tmp3[1];
                iPZ[i] = tmp3[2];
            }

            // Dual dodecahedron: counter-rotating inside (~36s/turn).
            th = 1.1 - animTime * (TAU / 36);
            c = Math.cos(th);
            s = Math.sin(th);
            t1 = 1 - c;
            for (let i = 0; i < 20; i++) {
                const j = i * 3;
                projectPoint(
                    dualBaseA[j] * c + dualCrsA[j] * s + dualAdA[j] * t1,
                    dualBaseA[j + 1] * c + dualCrsA[j + 1] * s + dualAdA[j + 1] * t1,
                    dualBaseA[j + 2] * c + dualCrsA[j + 2] * s + dualAdA[j + 2] * t1,
                    tmp3, 0
                );
                dPX[i] = tmp3[0];
                dPY[i] = tmp3[1];
                dPZ[i] = tmp3[2];
            }

            for (let e = 0; e < ICO_EDGES.length; e++) {
                icoELvl[e] = level((iPZ[ICO_EDGES[e][0]] + iPZ[ICO_EDGES[e][1]]) / 2);
            }
            for (let e = 0; e < DODE_EDGES.length; e++) {
                dualELvl[e] = level((dPZ[DODE_EDGES[e][0]] + dPZ[DODE_EDGES[e][1]]) / 2);
            }

            // Orbit rings.
            for (let r = 0; r < 3; r++) {
                const phi = RING_PHI0[r] + animTime * RING_W[r];
                ringPhiCos[r] = Math.cos(phi);
                ringPhiSin[r] = Math.sin(phi);
                const b0 = r * RING_SEG;
                for (let k = 0; k < RING_SEG; k++) {
                    ringPoint(r, segCos[k], segSin[k], tmp3);
                    ringPX[b0 + k] = tmp3[0];
                    ringPY[b0 + k] = tmp3[1];
                    ringPZ[b0 + k] = tmp3[2];
                    ringLvl[b0 + k] = level(tmp3[2]);
                }
            }

            // Network edge depth buckets.
            for (let e = 0; e < E; e++) {
                edgeLvl[e] = level((nView[eA[e] * 3 + 2] + nView[eB[e] * 3 + 2]) / 2);
            }
        }

        /* ── Draw helpers ──────────────────────────────────────────────── */
        function stamp(sp: HTMLCanvasElement, x: number, y: number, r: number, alpha: number): void {
            if (alpha <= 0.01 || r <= 0.5) return;
            if (useLighter) g.globalCompositeOperation = "lighter";
            g.globalAlpha = alpha;
            g.drawImage(sp, x - r, y - r, r * 2, r * 2);
            g.globalAlpha = 1;
            if (useLighter) g.globalCompositeOperation = "source-over";
        }

        /** Stamp variant for callers that already set the composite mode. */
        function stampAdd(sp: HTMLCanvasElement, x: number, y: number, r: number, alpha: number): void {
            if (alpha <= 0.01 || r <= 0.5) return;
            g.globalAlpha = alpha;
            g.drawImage(sp, x - r, y - r, r * 2, r * 2);
        }

        /* ── Layer: atmosphere (breathing additive glow fields) ────────── */
        function drawAtmosphere(): void {
            const env = envFade();
            if (env <= 0) return;
            const rb = Math.min(w, h);
            stamp(
                SP_SKY,
                cx - w * 0.17 + 26 * Math.sin(animTime * 0.11),
                cy - h * 0.05 + 18 * Math.sin(animTime * 0.09 + 2),
                rb * 0.42,
                env * (0.06 + 0.022 * Math.sin(animTime * (TAU / 9)))
            );
            stamp(
                SP_CYAN,
                cx + w * 0.2 + 30 * Math.sin(animTime * 0.08 + 1),
                cy + h * 0.12,
                rb * 0.36,
                env * (0.05 + 0.02 * Math.sin(animTime * (TAU / 12) + 2))
            );
            stamp(
                SP_VIOLET,
                cx + w * 0.04,
                cy - h * 0.2 + 22 * Math.sin(animTime * 0.07 + 4),
                rb * 0.46,
                env * (0.055 + 0.02 * Math.sin(animTime * (TAU / 11) + 4))
            );
        }

        /* ── Layer: starfield ──────────────────────────────────────────── */
        function drawStars(): void {
            for (let b = 0; b < 3; b++) {
                g.fillStyle = STAR_FILL[b];
                const start = b === 0 ? 0 : b === 1 ? FAR_END : MID_END;
                const end = b === 0 ? FAR_END : b === 1 ? MID_END : STAR_N;
                const off = bandOff[b] - pNX * BAND_PARA[b];
                const offY = -pNY * BAND_PARA[b] * 0.6;
                for (let i = start; i < end; i++) {
                    if (starHalf && (i & 1) === 1) continue;
                    let x = sUX[i] * w + off;
                    x -= Math.floor(x / w) * w;
                    let y = sUY[i] * h + offY;
                    if (y < 0) y += h;
                    else if (y >= h) y -= h;
                    const tw = twinkleOn
                        ? 0.55 + 0.45 * Math.sin(sPh[i] + animTime * sSp[i])
                        : 0.8;
                    g.globalAlpha = sA[i] * tw;
                    g.fillRect(x, y, sSz[i], sSz[i]);
                    // Sparse glow accents on the near band.
                    if (b === 2 && i % 6 === 0) {
                        stamp(SP_SKY, x, y, 7, sA[i] * tw * 0.5);
                        g.fillStyle = STAR_FILL[2];
                    }
                }
            }
            g.globalAlpha = 1;
        }

        /* ── Layer: shooting star (far field) ──────────────────────────── */
        function drawShoot(): void {
            if (!shootActive) return;
            const en = Math.sin(Math.PI * clamp01(shootT));
            const hx = shootX + shootDX * shootLen * shootT - pNX * BAND_PARA[0];
            const hy = shootY + shootDY * shootLen * shootT - pNY * BAND_PARA[0] * 0.6;
            if (useLighter) g.globalCompositeOperation = "lighter";
            g.lineWidth = 1.3;
            g.strokeStyle = SHOOT_ST;
            let px = hx;
            let py = hy;
            for (let k = 1; k <= 3; k++) {
                const qx = hx - shootDX * 34 * k;
                const qy = hy - shootDY * 34 * k;
                g.globalAlpha = en * (0.4 - k * 0.11);
                g.beginPath();
                g.moveTo(px, py);
                g.lineTo(qx, qy);
                g.stroke();
                px = qx;
                py = qy;
            }
            stampAdd(SP_WHITE, hx, hy, 6, en * 0.7);
            g.globalAlpha = 1;
            g.globalCompositeOperation = "source-over";
        }

        /* ── Layer: perspective grid floor (bottom ~35%) ───────────────── */
        function drawGrid(): void {
            if (!gridOn) return;
            const env = envFade();
            if (env <= 0) return;
            const horY = h * 0.65;
            const hf = h - horY;
            const frac = (animTime * 0.36) % 1; // slow forward glide
            g.lineWidth = 1;

            // Depth rows (exponential fade toward the horizon).
            for (let i = 0; i < 16; i++) {
                const zw = 1 + (i - frac) * 0.5;
                if (zw < 0.55) continue;
                const y = horY + hf / zw;
                if (y > h + 4) continue;
                let qi = Math.round(((zw - 1) * (LEVELS - 1)) / 7.5);
                qi = qi < 0 ? 0 : qi > LEVELS - 1 ? LEVELS - 1 : qi;
                // Continuous depth fade (was quantized into the stroke ramp;
                // rows visibly popped a brightness step every ~0.24s of glide).
                g.globalAlpha = env * Math.exp(-0.63 * (zw - 1));
                g.strokeStyle = GRID_ROW_ST[qi];
                g.beginPath();
                g.moveTo(0, y);
                g.lineTo(w, y);
                g.stroke();
            }

            // Converging verticals, split into far/near alpha passes.
            const sx = w * 0.072;
            const zFar = 8.5;
            const yFar = horY + hf / zFar;
            const yMid = horY + hf / 2.4;
            g.globalAlpha = env;
            g.strokeStyle = GRID_V_FAR;
            g.beginPath();
            for (let k = -9; k <= 9; k++) {
                g.moveTo(cx + (k * sx) / zFar, yFar);
                g.lineTo(cx + (k * sx) / 2.4, yMid);
            }
            g.stroke();
            g.strokeStyle = GRID_V_NEAR;
            g.beginPath();
            for (let k = -9; k <= 9; k++) {
                g.moveTo(cx + (k * sx) / 2.4, yMid);
                g.lineTo(cx + k * sx, h);
            }
            g.stroke();

            // Horizon line + soft glow.
            g.strokeStyle = GRID_HORIZON;
            g.globalAlpha = env * 0.5;
            g.beginPath();
            g.moveTo(w * 0.05, horY);
            g.lineTo(w * 0.95, horY);
            g.stroke();
            if (useLighter) g.globalCompositeOperation = "lighter";
            g.globalAlpha = env * 0.1;
            g.drawImage(SP_SKY, cx - w * 0.45, horY - 26, w * 0.9, 52);
            g.globalAlpha = 1;
            g.globalCompositeOperation = "source-over";
        }

        /* ── Layer: orbit rings (depth-bucketed batched strokes) ───────── */
        function drawRings(): void {
            const env = envFade();
            if (env <= 0) return;
            g.globalAlpha = env;
            g.lineWidth = 1;
            for (let l = 0; l < LEVELS; l++) {
                g.strokeStyle = RING_ST[l];
                g.beginPath();
                let any = false;
                for (let r = 0; r < 3; r++) {
                    const b0 = r * RING_SEG;
                    for (let k = 0; k < RING_SEG; k++) {
                        if (ringLvl[b0 + k] !== l) continue;
                        const k2 = b0 + ((k + 1) % RING_SEG);
                        g.moveTo(ringPX[b0 + k], ringPY[b0 + k]);
                        g.lineTo(ringPX[k2], ringPY[k2]);
                        any = true;
                    }
                }
                if (any) g.stroke();
            }
            g.globalAlpha = 1;
        }

        /* ── Layer: wireframe polyhedra (ico + counter-rotating dual) ──── */
        function drawPoly(): void {
            const env = envFade();
            if (env <= 0) return;
            g.globalAlpha = env;
            g.lineWidth = 0.9;
            for (let l = 0; l < LEVELS; l++) {
                g.strokeStyle = ICO_ST[l];
                g.beginPath();
                let any = false;
                for (let e = 0; e < ICO_EDGES.length; e++) {
                    if (icoELvl[e] !== l) continue;
                    g.moveTo(iPX[ICO_EDGES[e][0]], iPY[ICO_EDGES[e][0]]);
                    g.lineTo(iPX[ICO_EDGES[e][1]], iPY[ICO_EDGES[e][1]]);
                    any = true;
                }
                if (any) g.stroke();
                g.strokeStyle = DUAL_ST[l];
                g.beginPath();
                any = false;
                for (let e = 0; e < DODE_EDGES.length; e++) {
                    if (dualELvl[e] !== l) continue;
                    g.moveTo(dPX[DODE_EDGES[e][0]], dPY[DODE_EDGES[e][0]]);
                    g.lineTo(dPX[DODE_EDGES[e][1]], dPY[DODE_EDGES[e][1]]);
                    any = true;
                }
                if (any) g.stroke();
            }
            g.globalAlpha = 1;
        }

        /* ── Layer: glowing polyhedron vertex points ───────────────────── */
        function drawPolyVerts(): void {
            const env = envFade();
            if (env <= 0) return;
            for (let i = 0; i < 12; i++) {
                const lvl = level(iPZ[i]);
                const s = (F / (camD + iPZ[i])) * unit;
                stamp(SP_SKY, iPX[i], iPY[i], 7 * s, env * 0.3 * (1 - 0.6 * (lvl / (LEVELS - 1))));
                g.globalAlpha = env;
                g.fillStyle = VERT_ST[lvl];
                g.beginPath();
                g.arc(iPX[i], iPY[i], Math.max(1.7 * s, 0.6), 0, TAU);
                g.fill();
            }
            g.globalAlpha = env * 0.8;
            for (let i = 0; i < 20; i++) {
                const s = (F / (camD + dPZ[i])) * unit;
                g.fillStyle = VERT2_ST[level(dPZ[i])];
                g.beginPath();
                g.arc(dPX[i], dPY[i], Math.max(1.1 * s, 0.5), 0, TAU);
                g.fill();
            }
            g.globalAlpha = 1;
        }

        /* ── Layer: breathing core glow (2.5-4s period => 3.2s) ────────── */
        function drawCore(): void {
            const ign = nodeIgn(0);
            const a = 0.22 + 0.78 * ign;
            const breath = 0.5 + 0.5 * Math.sin(animTime * (TAU / 3.2));
            stamp(SP_HUB, nSX[0], nSY[0], (150 + 24 * breath) * nSC[0], (0.4 + 0.28 * breath) * a);
            stamp(SP_CYAN, nSX[0], nSY[0], (64 + 10 * breath) * nSC[0], (0.4 + 0.3 * breath) * a);
        }

        /* ── Layer: network edges (per-edge during ignition, then batched) */
        function drawNetwork(): void {
            g.lineWidth = 1;
            if (animTime < ignEnd) {
                for (let e = 0; e < E; e++) {
                    const prog = clamp01((animTime - edgeDelay[e]) / 0.3);
                    const lvl = edgeLvl[e];
                    const ax = nSX[eA[e]];
                    const ay = nSY[eA[e]];
                    const bx = nSX[eB[e]];
                    const by = nSY[eB[e]];
                    g.globalAlpha = 0.28 + 0.72 * prog;
                    g.strokeStyle = EDGE_ST[lvl];
                    g.beginPath();
                    g.moveTo(ax, ay);
                    g.lineTo(bx, by);
                    g.stroke();
                    if (prog > 0 && prog < 1) {
                        // Ignition sweep: bright head draws the edge on.
                        const t0 = Math.max(0, prog - 0.18);
                        g.globalAlpha = 0.9;
                        g.strokeStyle = EDGE_BRIGHT_ST[lvl];
                        g.lineWidth = 1.4;
                        g.beginPath();
                        g.moveTo(ax + (bx - ax) * t0, ay + (by - ay) * t0);
                        g.lineTo(ax + (bx - ax) * prog, ay + (by - ay) * prog);
                        g.stroke();
                        g.lineWidth = 1;
                    }
                }
                g.globalAlpha = 1;
            } else {
                for (let l = 0; l < LEVELS; l++) {
                    g.strokeStyle = EDGE_ST[l];
                    g.beginPath();
                    let any = false;
                    for (let e = 0; e < E; e++) {
                        if (edgeLvl[e] !== l) continue;
                        g.moveTo(nSX[eA[e]], nSY[eA[e]]);
                        g.lineTo(nSX[eB[e]], nSY[eB[e]]);
                        any = true;
                    }
                    if (any) g.stroke();
                }
            }
        }

        /* ── Layer: data packets with motion trails ────────────────────── */
        function drawPackets(): void {
            g.lineWidth = 1.4;
            for (let i = 0; i < activePackets; i++) {
                const e = pEdge[i];
                if (animTime < edgeDelay[e] + 0.35) continue;
                const a = eA[e];
                const b = eB[e];
                const t = pT[i];
                const ax = nView[a * 3];
                const ay = nView[a * 3 + 1];
                const az = nView[a * 3 + 2];
                const bx = nView[b * 3];
                const by = nView[b * 3 + 1];
                const bz = nView[b * 3 + 2];
                // Perspective-correct: interpolate in view space, project inline.
                const hz = az + (bz - az) * t;
                const hs = (F / (camD + hz)) * unit;
                const hpx = cx + (ax + (bx - ax) * t) * hs;
                const hpy = cy + (ay + (by - ay) * t) * hs;
                const t0 = t - 0.09 < 0 ? 0 : t - 0.09;
                const tz = az + (bz - az) * t0;
                const ts = (F / (camD + tz)) * unit;
                const tpx = cx + (ax + (bx - ax) * t0) * ts;
                const tpy = cy + (ay + (by - ay) * t0) * ts;
                const lvl = level(hz);

                if (useLighter) g.globalCompositeOperation = "lighter";
                g.globalAlpha = pAlpha[i];
                g.strokeStyle = PART_ST[lvl];
                g.beginPath();
                g.moveTo(tpx, tpy);
                g.lineTo(hpx, hpy);
                g.stroke();
                g.fillStyle = PART_ST[lvl];
                g.beginPath();
                g.arc(hpx, hpy, Math.max(1.9 * hs, 0.8), 0, TAU);
                g.fill();
                stampAdd(SP_WHITE, hpx, hpy, 5 * hs, pAlpha[i] * 0.35);
            }
            g.globalAlpha = 1;
            g.globalCompositeOperation = "source-over";
        }

        /* ── Layer: ring pulses with fading trails ─────────────────────── */
        function drawPulses(): void {
            const env = envFade();
            if (env <= 0) return;
            if (useLighter) g.globalCompositeOperation = "lighter";
            g.lineWidth = 1.5;
            for (let p = 0; p < PULSE_N; p++) {
                const ri = puRing[p];
                const th = puT[p] * TAU;
                ringPoint(ri, Math.cos(th), Math.sin(th), tmp3);
                const hx = tmp3[0];
                const hy = tmp3[1];
                const lvl = level(tmp3[2]);
                const s = (F / (camD + tmp3[2])) * unit;
                g.strokeStyle = PULSE_ST[lvl];
                let px = hx;
                let py = hy;
                for (let k = 1; k <= 4; k++) {
                    const th2 = (puT[p] - k * 0.014) * TAU;
                    ringPoint(ri, Math.cos(th2), Math.sin(th2), tmp3);
                    g.globalAlpha = env * puA[p] * (1 - k * 0.22);
                    g.beginPath();
                    g.moveTo(px, py);
                    g.lineTo(tmp3[0], tmp3[1]);
                    g.stroke();
                    px = tmp3[0];
                    py = tmp3[1];
                }
                stampAdd(SP_WHITE, hx, hy, 6 * s, env * puA[p] * 0.55);
                g.globalAlpha = env * puA[p];
                g.fillStyle = PULSE_ST[lvl];
                g.beginPath();
                g.arc(hx, hy, Math.max(1.6 * s, 0.7), 0, TAU);
                g.fill();
            }
            g.globalAlpha = 1;
            g.globalCompositeOperation = "source-over";
        }

        /* ── Layer: nodes + billboarded depth-faded labels ─────────────── */
        function drawNodes(): void {
            const s0 = (F / camD) * unit;
            for (let i = 0; i < N; i++) {
                const zv = nView[i * 3 + 2];
                const lvl = level(zv);
                const type = NODE_TYPE[i];
                const ign = nodeIgn(i);
                const aIgn = 0.22 + 0.78 * ign;
                const aDepth = 1 - 0.72 * (lvl / (LEVELS - 1));
                const rpx = NODE_R[i] * nSC[i] * RADIUS_K;
                const pulse = 0.5 + 0.5 * Math.sin(animTime * pulseSpeed[i] + pulsePhase[i]);
                const sprite = zv < 0 ? NODE_SPRITES[type] : SP_VIOLET;

                stamp(sprite, nSX[i], nSY[i], rpx * 2.8 + pulse * 2, (0.32 + 0.3 * pulse) * aDepth * aIgn);

                // Body + white core highlight.
                g.globalAlpha = aIgn * (0.35 + 0.65 * aDepth);
                g.fillStyle = BODY_ST[type][lvl];
                g.beginPath();
                g.arc(nSX[i], nSY[i], Math.max(rpx, 0.75), 0, TAU);
                g.fill();
                g.globalAlpha = aIgn * (0.9 - 0.6 * (lvl / (LEVELS - 1)));
                g.fillStyle = "#ffffff";
                g.beginPath();
                g.arc(nSX[i], nSY[i], Math.max(rpx * 0.42, 0.5), 0, TAU);
                g.fill();

                if (i === 0) {
                    // Pulsing halo ring around the Core.
                    const breath = 0.5 + 0.5 * Math.sin(animTime * (TAU / 3.2));
                    g.globalAlpha = (0.2 + 0.3 * breath) * aIgn;
                    g.strokeStyle = EDGE_BRIGHT_ST[lvl];
                    g.lineWidth = 1;
                    g.beginPath();
                    g.arc(nSX[0], nSY[0], rpx + 7, 0, TAU);
                    g.stroke();
                }

                // Label: billboarded, front hemisphere, size/alpha depth fade.
                if (i < LABEL_N && labelAlpha[i] > 0.02) {
                    let fs = Math.round(10.5 * (nSC[i] / s0));
                    fs = fs < 8 ? 8 : fs > 14 ? 14 : fs;
                    g.globalAlpha =
                        labelAlpha[i] * aIgn * (i === 0 ? 1 : 0.85) * (1 - 0.5 * (lvl / (LEVELS - 1)));
                    g.font = i === 0 ? FONT_CORE[fs - 8] : FONT_LBL[fs - 8];
                    g.fillStyle = "#ffffff";
                    g.fillText(
                        LABELS[i],
                        Math.round(nSX[i]),
                        Math.round(nSY[i] + rpx + (i === 0 ? 18 : 13))
                    );
                }
            }
            g.globalAlpha = 1;
        }

        function render(): void {
            g.clearRect(0, 0, w, h);
            drawAtmosphere();
            drawStars();
            drawShoot();
            drawGrid();
            drawRings();
            drawPoly();
            drawPolyVerts();
            drawCore();
            drawNetwork();
            drawPackets();
            drawPulses();
            drawNodes();
        }

        /* ── Quality governor: one-way step-down on sustained overage ──── */
        function stepDown(): void {
            govTier++;
            if (govTier === 1) {
                // First response to load: cap the frame rate. Halving work
                // this way is invisible next to features vanishing mid-view
                // (the old tier 1 killed glow+twinkle in one frame — users
                // saw the scene visibly "glitch" dimmer).
                frameMs = 1000 / 30;
                activePackets = Math.max(4, PACKET_N >> 1);
            } else if (govTier === 2) {
                useLighter = false;
                twinkleOn = false;
                shootOn = false;
                shootActive = false;
                gridOn = false;
                starHalf = true;
                frameMs = 1000 / 24;
            }
        }

        /* ── Frame loop (30fps cap; gated by hidden + IO + reduced) ────── */
        function loop(now: number): void {
            if (!running) return;
            rafId = requestAnimationFrame(loop);
            if (now - lastFrame < frameMs) return;
            lastFrame = now;
            const t0 = performance.now();
            const dt = Math.min((now - lastNow) / 1000, 0.1);
            lastNow = now;
            if (w < 10 || h < 10) return;
            advance(dt);
            computePose();
            projectAll();
            render();
            // Governor: sustained > 8ms scripting for ~60 frames steps down once.
            if (govTier < 2) {
                if (performance.now() - t0 > 8) overBudget++;
                else if (overBudget > 0) overBudget--;
                if (overBudget >= 60) {
                    overBudget = 0;
                    stepDown();
                }
            }
        }

        function updateRunState(): void {
            const want = started && inView && !document.hidden && !reduced && !disposed;
            if (want && !running) {
                running = true;
                lastNow = performance.now();
                lastFrame = 0;
                rafId = requestAnimationFrame(loop);
            } else if (!want && running) {
                running = false;
                cancelAnimationFrame(rafId);
            }
        }

        /* ── Static poses ──────────────────────────────────────────────── */
        function drawStandby(): void {
            // Pre-ignition standby: full starfield + dim lattice — the
            // ignition sequence brightens FROM this frame (no pop, no blank).
            animTime = 0;
            pNX = 0;
            pNY = 0;
            computePose();
            projectAll();
            render();
        }

        function drawReducedPose(): void {
            // One dense static pose of the FULL scene: stars at varied
            // twinkle phases, packets/pulses frozen mid-flight, rings, grid,
            // polyhedra and core glow all present. No loop.
            animTime = 30;
            pNX = 0;
            pNY = 0;
            scrollYCache = 0;
            shootActive = false;
            computePose();
            projectAll();
            for (let i = 0; i < LABEL_N; i++) labelAlpha[i] = labelTarget[i];
            render();
        }

        /* ── Mount: size, first paint, deferred ignition ───────────────── */
        setSize();
        if (reduced) {
            drawReducedPose();
        } else {
            drawStandby();
        }

        let idleId = 0;
        let idleTimer: ReturnType<typeof setTimeout> | undefined;
        const begin = () => {
            if (disposed) return;
            started = true;
            updateRunState();
        };
        type IdleWindow = Window & {
            requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
            cancelIdleCallback?: (id: number) => void;
        };
        const iw = window as IdleWindow;
        if (typeof iw.requestIdleCallback === "function") {
            idleId = iw.requestIdleCallback(begin, { timeout: 600 });
        } else {
            idleTimer = setTimeout(begin, 200);
        }

        /* ── Listeners / observers ─────────────────────────────────────── */
        const onVisibility = () => updateRunState();
        document.addEventListener("visibilitychange", onVisibility);

        const io = new IntersectionObserver((entries) => {
            inView = entries[0]?.isIntersecting ?? true;
            updateRunState();
        }, { threshold: 0 });
        io.observe(cv);

        const onReducedChange = () => {
            reduced = mq.matches;
            updateRunState();
            if (reduced) drawReducedPose();
        };
        mq.addEventListener("change", onReducedChange);

        const onResize = () => {
            setSize();
            if (!running) {
                if (reduced) {
                    drawReducedPose();
                } else if (!started) {
                    drawStandby();
                } else {
                    computePose();
                    projectAll();
                    render();
                }
            }
        };
        window.addEventListener("resize", onResize);

        // Scroll cache: the camera dolly reads this inside the rAF — the
        // listener itself never touches layout or draws.
        const onScroll = () => {
            scrollYCache = window.scrollY;
        };
        window.addEventListener("scroll", onScroll, { passive: true });

        // Pointer steering — fine pointers only; mobile adds ZERO listeners.
        const onPointerMove = (e: PointerEvent) => {
            ptGone = false;
            ptTX = (e.clientX / window.innerWidth - 0.5) * 2;
            ptTY = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        const onPointerLeave = (e: MouseEvent) => {
            if (!e.relatedTarget) {
                ptGone = true;
                ptTX = 0;
                ptTY = 0;
            }
        };
        const onBlur = () => {
            ptGone = true;
            ptTX = 0;
            ptTY = 0;
        };
        if (finePointer) {
            window.addEventListener("pointermove", onPointerMove, { passive: true });
            window.addEventListener("mouseout", onPointerLeave, { passive: true });
            window.addEventListener("blur", onBlur);
        }

        /* ── Teardown ──────────────────────────────────────────────────── */
        return () => {
            disposed = true;
            running = false;
            cancelAnimationFrame(rafId);
            if (idleId && typeof iw.cancelIdleCallback === "function") iw.cancelIdleCallback(idleId);
            if (idleTimer !== undefined) clearTimeout(idleTimer);
            document.removeEventListener("visibilitychange", onVisibility);
            window.removeEventListener("resize", onResize);
            window.removeEventListener("scroll", onScroll);
            if (finePointer) {
                window.removeEventListener("pointermove", onPointerMove);
                window.removeEventListener("mouseout", onPointerLeave);
                window.removeEventListener("blur", onBlur);
            }
            mq.removeEventListener("change", onReducedChange);
            io.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 1 }}
            role="presentation"
            aria-hidden="true"
        />
    );
}
