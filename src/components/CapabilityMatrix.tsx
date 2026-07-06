"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    animate,
    motion,
    useInView,
    useMotionValueEvent,
    useReducedMotion,
    useScroll,
    useTransform,
    type MotionValue,
} from "framer-motion";

/* ------------------------------------------------------------------ */
/* Data — every claim below is lifted from About.tsx / Services.tsx.   */
/* ------------------------------------------------------------------ */

interface Stage {
    key: string;
    label: string;
    sublabel: string;
    color: string;
    band: [number, number];
}

const STAGES: Stage[] = [
    {
        key: "client",
        label: "CLIENT",
        sublabel: "Next.js · React · TypeScript",
        color: "#38bdf8",
        band: [0.06, 0.2],
    },
    {
        key: "api",
        label: "API & BUSINESS LOGIC",
        sublabel: "Node.js · Route Handlers · Middleware",
        color: "#818cf8",
        band: [0.2, 0.34],
    },
    {
        key: "data",
        label: "DATA LAYER",
        sublabel: "PostgreSQL · Prisma · Neon DB",
        color: "#22d3ee",
        band: [0.34, 0.48],
    },
    {
        key: "payments",
        label: "PAYMENTS & AUTH",
        sublabel: "Stripe · JWT · Role-Based Access",
        color: "#38bdf8",
        band: [0.48, 0.62],
    },
    {
        key: "infra",
        label: "DEPLOYMENT & INFRA",
        sublabel: "Vercel · Docker · Fly.io · Sentry",
        color: "#818cf8",
        band: [0.62, 0.76],
    },
];

const RING_BAND: [number, number] = [0.76, 0.92];
const RING_COLOR = "#22d3ee";
const COUNT_TRIGGER = 0.84;

type LogStatus = "ok" | "deployed" | "secured";

interface LogLineDef {
    text: string;
    status?: LogStatus;
    comment?: boolean;
    band: [number, number];
}

const LOG_LINES: LogLineDef[] = [
    { text: "boot client — next.js · react · typescript", status: "ok", band: [0.1, 0.17] },
    { text: "wire api — node.js route handlers · middleware", status: "ok", band: [0.24, 0.31] },
    { text: "provision data — postgresql · prisma · neon", status: "ok", band: [0.38, 0.45] },
    { text: "integrate payments — stripe · invoicing · subscriptions", status: "ok", band: [0.5, 0.56] },
    { text: "enforce auth — jwt · role-based access", status: "ok", band: [0.56, 0.62] },
    { text: "deploy — vercel · docker · fly.io", status: "deployed", band: [0.64, 0.7] },
    { text: "monitor — sentry error tracking", status: "ok", band: [0.7, 0.76] },
    { text: "pentest — full-scope · mapped to mitre att&ck", status: "secured", band: [0.8, 0.87] },
    { text: "# system online — perimeter secured", comment: true, band: [0.88, 0.94] },
];

const STATUS_COLOR: Record<LogStatus, string> = {
    ok: "text-cyan-300",
    deployed: "text-sky-300",
    secured: "text-violet-300",
};

const STATS = [
    { value: 20, suffix: "+", label: "Projects Shipped" },
    { value: 5, suffix: "", label: "Live Trading Systems" },
    { value: 4, suffix: "+", label: "Industries Served" },
];

/* ------------------------------------------------------------------ */
/* Schematic geometry (viewBox 0 0 480 614)                            */
/* ------------------------------------------------------------------ */

const BLOCK_X = 90;
const BLOCK_W = 300;
const BLOCK_H = 70;
const BLOCK_STEP = 97;
const BLOCK_TOP = 66;

const RING_PATH_RIGHT = "M240 26 H426 A28 28 0 0 1 454 54 V560 A28 28 0 0 1 426 588 H240";
const RING_PATH_LEFT = "M240 26 H54 A28 28 0 0 0 26 54 V560 A28 28 0 0 0 54 588 H240";

/* ------------------------------------------------------------------ */
/* Schematic pieces                                                    */
/* ------------------------------------------------------------------ */

function StageNode({
    stage,
    index,
    progress,
    animated,
}: {
    stage: Stage;
    index: number;
    progress: MotionValue<number>;
    animated: boolean;
}) {
    const [s, e] = stage.band;
    const span = e - s;
    const opacity = useTransform(progress, [s + span * 0.25, e], [0, 1]);
    const lift = useTransform(progress, [s + span * 0.25, e], [14, 0]);
    const y0 = BLOCK_TOP + index * BLOCK_STEP;

    return (
        <motion.g style={animated ? { opacity, y: lift } : undefined}>
            <rect
                x={BLOCK_X}
                y={y0}
                width={BLOCK_W}
                height={BLOCK_H}
                rx={12}
                fill={`${stage.color}0d`}
                stroke={`${stage.color}55`}
                strokeWidth={1}
            />
            <rect x={BLOCK_X} y={y0 + 14} width={3} height={BLOCK_H - 28} rx={1.5} fill={stage.color} />
            <text
                x={BLOCK_X + 22}
                y={y0 + 31}
                fontSize={12.5}
                fontWeight={700}
                letterSpacing={2.2}
                fill={stage.color}
            >
                {stage.label}
            </text>
            <text x={BLOCK_X + 22} y={y0 + 50} fontSize={10.5} letterSpacing={0.4} fill="#94a3b8">
                {stage.sublabel}
            </text>
            <text
                x={BLOCK_X + BLOCK_W - 34}
                y={y0 + 28}
                fontSize={9}
                letterSpacing={1.5}
                textAnchor="end"
                fill={`${stage.color}99`}
                fontFamily="ui-monospace, Menlo, monospace"
            >
                {`0${index + 1}`}
            </text>
            <circle cx={BLOCK_X + BLOCK_W - 22} cy={y0 + 24} r={3.2} fill={stage.color} />
        </motion.g>
    );
}

function StageConnector({
    index,
    color,
    band,
    progress,
    animated,
}: {
    index: number;
    color: string;
    band: [number, number];
    progress: MotionValue<number>;
    animated: boolean;
}) {
    const [s, e] = band;
    const span = e - s;
    const draw = useTransform(progress, [s, s + span * 0.45], [0, 1]);
    const dotOpacity = useTransform(progress, [s + span * 0.3, s + span * 0.55], [0, 1]);
    const yTop = BLOCK_TOP + (index - 1) * BLOCK_STEP + BLOCK_H;
    const gap = BLOCK_STEP - BLOCK_H;

    return (
        <g>
            <motion.path
                d={`M240 ${yTop} v${gap}`}
                fill="none"
                stroke={color}
                strokeOpacity={0.7}
                strokeWidth={1.4}
                strokeLinecap="round"
                style={animated ? { pathLength: draw } : { pathLength: 1 }}
            />
            <motion.circle cx={240} cy={yTop} r={2.6} fill={color} style={animated ? { opacity: dotOpacity } : undefined} />
            <motion.circle cx={240} cy={yTop + gap} r={2.6} fill={color} style={animated ? { opacity: dotOpacity } : undefined} />
        </g>
    );
}

function PerimeterRing({ progress, animated }: { progress: MotionValue<number>; animated: boolean }) {
    const [s, e] = RING_BAND;
    const span = e - s;
    const draw = useTransform(progress, [s, s + span * 0.7], [0, 1]);
    const detailOpacity = useTransform(progress, [s + span * 0.55, e], [0, 1]);

    return (
        <g>
            {[RING_PATH_RIGHT, RING_PATH_LEFT].map((d) => (
                <motion.path
                    key={d}
                    d={d}
                    fill="none"
                    stroke={RING_COLOR}
                    strokeOpacity={0.75}
                    strokeWidth={1.2}
                    strokeLinecap="round"
                    style={animated ? { pathLength: draw } : { pathLength: 1 }}
                />
            ))}
            <motion.g style={animated ? { opacity: detailOpacity } : undefined}>
                {STAGES.map((stage, i) => {
                    const cy = BLOCK_TOP + i * BLOCK_STEP + 35;
                    return (
                        <g key={stage.key} stroke={RING_COLOR} strokeOpacity={0.25} strokeWidth={1}>
                            <path d={`M394 ${cy} H446`} />
                            <path d={`M86 ${cy} H34`} />
                        </g>
                    );
                })}
                {[
                    [36, 36],
                    [444, 36],
                    [36, 578],
                    [444, 578],
                ].map(([cx, cy]) => (
                    <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={2} fill={RING_COLOR} fillOpacity={0.7} />
                ))}
                <text
                    x={240}
                    y={549}
                    textAnchor="middle"
                    fontSize={11.5}
                    fontWeight={700}
                    letterSpacing={3}
                    fill={RING_COLOR}
                >
                    SECURITY PERIMETER
                </text>
                <text x={240} y={566} textAnchor="middle" fontSize={10} letterSpacing={0.5} fill="#94a3b8">
                    Full-scope pentest · Mapped to MITRE ATT&CK
                </text>
            </motion.g>
        </g>
    );
}

function Schematic({ progress, animated }: { progress: MotionValue<number>; animated: boolean }) {
    return (
        <svg
            viewBox="0 0 480 614"
            className="relative h-auto w-full max-w-[440px] aspect-[480/614] lg:w-auto lg:max-w-none lg:h-[min(62vh,560px)]"
            role="img"
            aria-label="System architecture schematic: client layer with Next.js, React, and TypeScript; API and business logic with Node.js route handlers and middleware; data layer with PostgreSQL, Prisma, and Neon DB; payments and auth with Stripe, JWT, and role-based access; deployment and infrastructure with Vercel, Docker, Fly.io, and Sentry — all enclosed by a security perimeter mapped to MITRE ATT&CK."
        >
            <title>Full-stack system schematic, assembled layer by layer inside a security perimeter</title>
            {/* Blueprint ghosts — static outlines the assembly fills in */}
            <g aria-hidden="true">
                {STAGES.map((stage, i) => (
                    <rect
                        key={stage.key}
                        x={BLOCK_X}
                        y={BLOCK_TOP + i * BLOCK_STEP}
                        width={BLOCK_W}
                        height={BLOCK_H}
                        rx={12}
                        fill="none"
                        stroke="#ffffff12"
                        strokeWidth={1}
                        strokeDasharray="3 7"
                    />
                ))}
                <rect
                    x={26}
                    y={26}
                    width={428}
                    height={562}
                    rx={28}
                    fill="none"
                    stroke="#ffffff0d"
                    strokeWidth={1}
                    strokeDasharray="3 9"
                />
            </g>
            {STAGES.map((stage, i) => (
                <React.Fragment key={stage.key}>
                    {i > 0 && (
                        <StageConnector
                            index={i}
                            color={stage.color}
                            band={stage.band}
                            progress={progress}
                            animated={animated}
                        />
                    )}
                    <StageNode stage={stage} index={i} progress={progress} animated={animated} />
                </React.Fragment>
            ))}
            <PerimeterRing progress={progress} animated={animated} />
        </svg>
    );
}

/* ------------------------------------------------------------------ */
/* Build log                                                           */
/* ------------------------------------------------------------------ */

function LogLine({
    line,
    progress,
    animated,
}: {
    line: LogLineDef;
    progress: MotionValue<number>;
    animated: boolean;
}) {
    const opacity = useTransform(progress, line.band, [0, 1]);
    const x = useTransform(progress, line.band, [-8, 0]);

    return (
        <motion.div style={animated ? { opacity, x } : undefined} className="flex items-baseline gap-3">
            {line.comment ? (
                // gray-400, not gray-500: real content on the dark terminal
                // needs >= 4.5:1 (WCAG AA) at this 12.5px size.
                <span className="text-gray-400">{line.text}</span>
            ) : (
                <>
                    <span className="text-sky-400 select-none" aria-hidden="true">
                        $
                    </span>
                    <span className="text-gray-300">{line.text}</span>
                    {line.status && (
                        <span className={`ml-auto whitespace-nowrap font-semibold ${STATUS_COLOR[line.status]}`}>
                            {line.status}
                        </span>
                    )}
                </>
            )}
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
/* Count-up stat                                                       */
/* ------------------------------------------------------------------ */

function StatValue({ value, suffix, run }: { value: number; suffix: string; run: boolean }) {
    // null = show the final value (SSR / pre-trigger / reduced motion).
    const [display, setDisplay] = useState<number | null>(null);

    useEffect(() => {
        if (!run) return;
        const controls = animate(0, value, {
            duration: 1.4,
            ease: "easeOut",
            onUpdate: (latest) => setDisplay(Math.round(latest)),
        });
        return () => controls.stop();
    }, [run, value]);

    return (
        <span>
            {display === null ? value : display}
            {suffix}
        </span>
    );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export function CapabilityMatrix() {
    const runwayRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    const systemReduced = useReducedMotion();
    const [mounted, setMounted] = useState(false);
    const [pinViewport, setPinViewport] = useState(false);
    const [counted, setCounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Mirrors the motion-safe:lg:[@media(min-height:800px)]: CSS pin gate
        // below — the pin only engages on viewports tall enough to fit the
        // header + schematic + log column inside the h-screen stage.
        const mq = window.matchMedia("(min-width: 1024px) and (min-height: 800px)");
        const update = () => setPinViewport(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    // Hydration-safe: SSR and first client render are always the "static" tree.
    const reduced = mounted && !!systemReduced;
    const animated = mounted && pinViewport && !reduced;

    const { scrollYProgress } = useScroll({
        target: runwayRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (v) => {
        if (v > COUNT_TRIGGER) setCounted(true);
    });

    const statsInView = useInView(statsRef, { once: true, amount: 0.4 });
    const runCount = !reduced && (animated ? counted : statsInView);

    const statsOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
    const statsLift = useTransform(scrollYProgress, [0.8, 0.9], [24, 0]);

    return (
        <section id="capabilities" className="relative overflow-x-clip">
            {/* Pin geometry is pure CSS (motion-safe + lg + min-height 800px),
                so reduced-motion and short-viewport users get the plain static
                section from first paint — no post-hydration class swap, zero
                CLS. JS state only decides whether motion values attach. */}
            <div
                ref={runwayRef}
                className="motion-safe:lg:[@media(min-height:800px)]:h-[320vh]"
            >
                <div className="relative py-24 motion-safe:lg:[@media(min-height:800px)]:sticky motion-safe:lg:[@media(min-height:800px)]:top-0 motion-safe:lg:[@media(min-height:800px)]:h-screen motion-safe:lg:[@media(min-height:800px)]:py-0 motion-safe:lg:[@media(min-height:800px)]:flex motion-safe:lg:[@media(min-height:800px)]:flex-col motion-safe:lg:[@media(min-height:800px)]:justify-center motion-safe:lg:[@media(min-height:800px)]:overflow-hidden">
                    <div
                        aria-hidden="true"
                        className="absolute top-1/4 left-1/3 w-[420px] h-[420px] bg-quant-blue/8 rounded-full blur-[130px] pointer-events-none"
                    />

                    <div className="container mx-auto px-6 relative z-10 w-full">
                        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-8">
                            <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                                How We Build
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                                One stack.{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-quant-blue to-cyan-400">
                                    Assembled end to end.
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Every layer below is built by the same team — client to data to deploy — then
                                wrapped in a security perimeter.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)] gap-10 lg:gap-14 items-center">
                            <div className="relative flex justify-center">
                                <Schematic progress={scrollYProgress} animated={animated} />
                            </div>

                            <div className="flex flex-col gap-6">
                                <div className="rounded-xl border border-white/8 bg-[#0a101e]/80 backdrop-blur-sm overflow-hidden">
                                    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5">
                                        <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-red-400/30" />
                                        <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-amber-400/30" />
                                        <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-emerald-400/30" />
                                        <span className="ml-2 font-mono text-[11px] tracking-wider text-gray-400">
                                            quantlab · build.log
                                        </span>
                                    </div>
                                    <div className="p-5 font-mono text-[12.5px] leading-relaxed flex flex-col gap-1.5">
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-gray-400"># quantlab — system assembly</span>
                                        </div>
                                        {LOG_LINES.map((line) => (
                                            <LogLine key={line.text} line={line} progress={scrollYProgress} animated={animated} />
                                        ))}
                                        <div aria-hidden="true">
                                            <motion.span
                                                className="inline-block text-gray-500"
                                                animate={reduced ? { opacity: 1 } : { opacity: [1, 0, 1] }}
                                                transition={reduced ? undefined : { duration: 1.2, repeat: Infinity, ease: "linear" }}
                                            >
                                                ▍
                                            </motion.span>
                                        </div>
                                    </div>
                                </div>

                                <motion.div
                                    ref={statsRef}
                                    style={animated ? { opacity: statsOpacity, y: statsLift } : undefined}
                                    className="grid grid-cols-3 gap-3"
                                >
                                    {STATS.map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="rounded-xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-4"
                                        >
                                            <p className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">
                                                <StatValue value={stat.value} suffix={stat.suffix} run={runCount} />
                                            </p>
                                            <p className="text-[11px] text-gray-400 font-medium">{stat.label}</p>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
