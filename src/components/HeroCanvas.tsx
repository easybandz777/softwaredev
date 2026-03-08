"use client";

import React, { useEffect, useRef } from "react";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    pulse: number;
    pulseSpeed: number;
    type: "hub" | "node" | "leaf";
    label?: string;
}

interface Particle {
    edgeIdx: number;
    t: number;
    speed: number;
    alpha: number;
}

const BLUE = "#38bdf8";
const CYAN = "#22d3ee";
const VIOLET = "#818cf8";
const WHITE = "#ffffff";

const RAW_NODES: Omit<Node, "pulse" | "pulseSpeed">[] = [
    { x: 0.5, y: 0.48, vx: 0, vy: 0, r: 10, type: "hub", label: "Core" },
    { x: 0.28, y: 0.32, vx: 0.0002, vy: 0.0001, r: 6, type: "node", label: "CRM" },
    { x: 0.72, y: 0.32, vx: -0.0001, vy: 0.00015, r: 6, type: "node", label: "API" },
    { x: 0.72, y: 0.65, vx: -0.0002, vy: -0.0001, r: 6, type: "node", label: "Trade" },
    { x: 0.28, y: 0.65, vx: 0.0001, vy: -0.00015, r: 6, type: "node", label: "DB" },
    { x: 0.5, y: 0.18, vx: 0.00015, vy: 0.00005, r: 5, type: "node", label: "Auth" },
    { x: 0.12, y: 0.22, vx: 0.00025, vy: 0.0001, r: 3.5, type: "leaf" },
    { x: 0.88, y: 0.22, vx: -0.0002, vy: 0.00012, r: 3.5, type: "leaf" },
    { x: 0.88, y: 0.75, vx: -0.00015, vy: -0.0001, r: 3.5, type: "leaf" },
    { x: 0.12, y: 0.75, vx: 0.0001, vy: -0.00015, r: 3.5, type: "leaf" },
    { x: 0.5, y: 0.88, vx: 0.0001, vy: -0.0002, r: 4, type: "leaf" },
    { x: 0.18, y: 0.49, vx: 0.0002, vy: 0.0001, r: 3.5, type: "leaf" },
    { x: 0.82, y: 0.49, vx: -0.0002, vy: 0.0001, r: 3.5, type: "leaf" },
];

const EDGES: [number, number][] = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
    [1, 6], [1, 11], [2, 7], [2, 5],
    [3, 8], [3, 12], [4, 9], [4, 10],
    [5, 6], [5, 7], [11, 6], [12, 8],
    [1, 4], [2, 3],
];

const METRICS = [
    { x: 0.14, y: 0.10, label: "LATENCY", value: "11ms", color: CYAN },
    { x: 0.74, y: 0.10, label: "UPTIME", value: "99.99%", color: "#34d399" },
    { x: 0.82, y: 0.88, label: "REQ/S", value: "84.2K", color: VIOLET },
    { x: 0.06, y: 0.88, label: "THREADS", value: "512", color: BLUE },
];

/* Draw hex grid to an offscreen canvas once — reuse every frame */
function buildHexGrid(w: number, h: number, dpr: number): HTMLCanvasElement {
    const off = document.createElement("canvas");
    off.width = w * dpr;
    off.height = h * dpr;
    const c = off.getContext("2d")!;
    c.scale(dpr, dpr);
    c.strokeStyle = "rgba(56,189,248,0.04)";
    c.lineWidth = 0.5;
    const hexSize = 38;
    const hexH = hexSize * Math.sqrt(3);
    for (let row = -1; row < h / hexH + 1; row++) {
        for (let col = -1; col < w / (hexSize * 1.5) + 1; col++) {
            const cx = col * hexSize * 1.5 + (row % 2 === 0 ? 0 : hexSize * 0.75);
            const cy = row * hexH * 0.5;
            c.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i - Math.PI / 6;
                const px = cx + hexSize * Math.cos(angle);
                const py = cy + hexSize * Math.sin(angle);
                i === 0 ? c.moveTo(px, py) : c.lineTo(px, py);
            }
            c.closePath();
            c.stroke();
        }
    }
    return off;
}

function roundRect(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.lineTo(x + w - r, y);
    c.quadraticCurveTo(x + w, y, x + w, y + r);
    c.lineTo(x + w, y + h - r);
    c.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    c.lineTo(x + r, y + h);
    c.quadraticCurveTo(x, y + h, x, y + h - r);
    c.lineTo(x, y + r);
    c.quadraticCurveTo(x, y, x + r, y);
    c.closePath();
    c.fill();
    c.stroke();
}

export function HeroCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animId: number;
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // cap retina blowup
        let w = canvas.offsetWidth;
        let h = canvas.offsetHeight;

        function setSize() {
            w = canvas!.offsetWidth;
            h = canvas!.offsetHeight;
            canvas!.width = w * dpr;
            canvas!.height = h * dpr;
            ctx!.scale(dpr, dpr);
        }
        setSize();

        // ── Nodes ──────────────────────────────────────────────
        const nodes: Node[] = RAW_NODES.map(n => ({
            ...n,
            x: n.x * w,
            y: n.y * h,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.02 + Math.random() * 0.03,
        }));

        // ── Particles ──────────────────────────────────────────
        const particles: Particle[] = [];
        EDGES.forEach((_, i) => {
            const count = Math.floor(1 + Math.random() * 2);
            for (let k = 0; k < count; k++) {
                particles.push({
                    edgeIdx: i,
                    t: Math.random(),
                    speed: 0.0008 + Math.random() * 0.0012,
                    alpha: 0.6 + Math.random() * 0.4,
                });
            }
        });

        // ── Static hex grid offscreen canvas ───────────────────
        let hexGrid = buildHexGrid(w, h, dpr);

        // ── Pre-computed per-node glow colors ──────────────────
        const nodeColors = nodes.map(n =>
            n.type === "hub" ? BLUE : n.type === "node" ? CYAN : VIOLET
        );

        let tick = 0;
        let lastFrame = 0;
        const FRAME_MS = 1000 / 30; // target 30 fps

        function draw(now: number) {
            animId = requestAnimationFrame(draw);
            if (now - lastFrame < FRAME_MS) return;
            lastFrame = now;
            tick++;
            ctx!.clearRect(0, 0, w, h);

            // Static hex grid — single drawImage call, no per-cell loop
            ctx!.drawImage(hexGrid, 0, 0, w, h);

            // ── Drift nodes ────────────────────────────────────
            nodes.forEach(n => {
                if (n.type === "hub") return;
                n.x += n.vx * w;
                n.y += n.vy * h;
                if (n.x < 20 || n.x > w - 20) n.vx *= -1;
                if (n.y < 20 || n.y > h - 20) n.vy *= -1;
                n.pulse += n.pulseSpeed;
            });
            nodes[0].pulse += 0.025;

            // ── Edges — create gradient once per edge per frame ─
            // (edges are cheap since they move; only ~19 gradients)
            EDGES.forEach(([a, b]) => {
                const na = nodes[a], nb = nodes[b];
                const grad = ctx!.createLinearGradient(na.x, na.y, nb.x, nb.y);
                grad.addColorStop(0, "rgba(56,189,248,0.18)");
                grad.addColorStop(0.5, "rgba(56,189,248,0.08)");
                grad.addColorStop(1, "rgba(56,189,248,0.18)");
                ctx!.beginPath();
                ctx!.moveTo(na.x, na.y);
                ctx!.lineTo(nb.x, nb.y);
                ctx!.strokeStyle = grad;
                ctx!.lineWidth = 0.8;
                ctx!.stroke();
            });

            // ── Particles ──────────────────────────────────────
            particles.forEach(p => {
                p.t += p.speed;
                if (p.t > 1) p.t = 0;
                const [a, b] = EDGES[p.edgeIdx];
                const na = nodes[a], nb = nodes[b];
                const px = na.x + (nb.x - na.x) * p.t;
                const py = na.y + (nb.y - na.y) * p.t;

                const trailLen = 0.08;
                const t0 = Math.max(0, p.t - trailLen);
                const tx0 = na.x + (nb.x - na.x) * t0;
                const ty0 = na.y + (nb.y - na.y) * t0;

                const trailGrad = ctx!.createLinearGradient(tx0, ty0, px, py);
                trailGrad.addColorStop(0, "rgba(56,189,248,0)");
                trailGrad.addColorStop(1, `rgba(56,189,248,${p.alpha * 0.8})`);
                ctx!.beginPath();
                ctx!.moveTo(tx0, ty0);
                ctx!.lineTo(px, py);
                ctx!.strokeStyle = trailGrad;
                ctx!.lineWidth = 1.5;
                ctx!.stroke();

                ctx!.beginPath();
                ctx!.arc(px, py, 2, 0, Math.PI * 2);
                ctx!.fillStyle = `rgba(56,189,248,${p.alpha})`;
                ctx!.fill();
            });

            // ── Nodes ──────────────────────────────────────────
            nodes.forEach((n, i) => {
                const pulseMag = 0.5 + 0.5 * Math.sin(n.pulse);
                const outerR = n.r + pulseMag * (n.type === "hub" ? 6 : 3);
                const glowColor = nodeColors[i];

                if (n.type === "hub") {
                    // Hub ambient glow (radial — still needed, changes with pulse)
                    const g1 = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, 60);
                    g1.addColorStop(0, "rgba(56,189,248,0.18)");
                    g1.addColorStop(1, "rgba(56,189,248,0)");
                    ctx!.beginPath();
                    ctx!.arc(n.x, n.y, 60, 0, Math.PI * 2);
                    ctx!.fillStyle = g1;
                    ctx!.fill();

                    // Outer ring
                    ctx!.beginPath();
                    ctx!.arc(n.x, n.y, outerR + 8, 0, Math.PI * 2);
                    ctx!.strokeStyle = `rgba(56,189,248,${0.2 + pulseMag * 0.3})`;
                    ctx!.lineWidth = 1;
                    ctx!.stroke();

                    // Rotating dashes ring
                    ctx!.save();
                    ctx!.translate(n.x, n.y);
                    ctx!.rotate(tick * 0.005);
                    ctx!.beginPath();
                    ctx!.arc(0, 0, outerR + 18, 0, Math.PI * 2);
                    ctx!.setLineDash([6, 10]);
                    ctx!.strokeStyle = "rgba(56,189,248,0.25)";
                    ctx!.lineWidth = 0.8;
                    ctx!.stroke();
                    ctx!.setLineDash([]);
                    ctx!.restore();
                }

                // Node glow (radial — pulse-driven, must stay per-frame)
                const g2 = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, outerR * 2.5);
                g2.addColorStop(0, glowColor + "55");
                g2.addColorStop(1, glowColor + "00");
                ctx!.beginPath();
                ctx!.arc(n.x, n.y, outerR * 2.5, 0, Math.PI * 2);
                ctx!.fillStyle = g2;
                ctx!.fill();

                // Node body
                const g3 = ctx!.createRadialGradient(n.x - n.r * 0.3, n.y - n.r * 0.3, 0, n.x, n.y, n.r);
                g3.addColorStop(0, WHITE);
                g3.addColorStop(0.4, glowColor);
                g3.addColorStop(1, glowColor + "aa");
                ctx!.beginPath();
                ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx!.fillStyle = g3;
                ctx!.fill();

                // Label
                if (n.label && n.type !== "leaf") {
                    ctx!.font = `${n.type === "hub" ? 700 : 500} ${n.type === "hub" ? 11 : 9}px 'Inter', sans-serif`;
                    ctx!.fillStyle = n.type === "hub" ? WHITE : "rgba(255,255,255,0.7)";
                    ctx!.textAlign = "center";
                    ctx!.fillText(n.label, n.x, n.y + n.r + (n.type === "hub" ? 18 : 14));
                }
            });

            // ── Metric overlays — drawn only every 2nd frame ────
            // (static UI cards, no need for 60fps)
            if (tick % 2 === 0) {
                METRICS.forEach(m => {
                    const mx = m.x * w, my = m.y * h;
                    const cardW = 90, cardH = 36;
                    ctx!.fillStyle = "rgba(13,21,38,0.75)";
                    ctx!.strokeStyle = m.color + "55";
                    ctx!.lineWidth = 0.8;
                    roundRect(ctx!, mx - cardW / 2, my, cardW, cardH, 6);
                    ctx!.font = "600 8px 'Inter', sans-serif";
                    ctx!.fillStyle = m.color + "bb";
                    ctx!.textAlign = "center";
                    ctx!.fillText(m.label, mx, my + 12);
                    ctx!.font = "700 13px 'Inter', sans-serif";
                    ctx!.fillStyle = m.color;
                    ctx!.fillText(m.value, mx, my + 27);
                });
            }

            // (rAF already requested at top of draw)
        }

        // ── Visibility optimization — pause when tab is hidden ─
        const handleVisibility = () => {
            if (document.hidden) {
                cancelAnimationFrame(animId);
            } else {
                draw(performance.now());
            }
        };
        document.addEventListener("visibilitychange", handleVisibility);

        const onResize = () => {
            cancelAnimationFrame(animId);
            setSize();
            // Rebuild hex grid for new dimensions
            hexGrid = buildHexGrid(w, h, dpr);
            nodes.forEach((n, i) => {
                n.x = RAW_NODES[i].x * w;
                n.y = RAW_NODES[i].y * h;
            });
            draw(performance.now());
        };
        window.addEventListener("resize", onResize);
        draw(performance.now());

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", onResize);
            document.removeEventListener("visibilitychange", handleVisibility);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.85 }}
        />
    );
}
