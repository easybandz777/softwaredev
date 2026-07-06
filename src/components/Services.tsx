"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
    motion,
    useInView,
    useMotionValueEvent,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
    type MotionValue,
} from "framer-motion";
import { Tilt3D } from "./ui/Tilt3D";
import { Terminal, Bot, Globe, CreditCard, Shield, Lock, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Terminal,
        slug: "custom-business-software",
        color: "from-blue-500 to-cyan-400",
        title: "Custom Business Software",
        headline: "Your business runs differently. Your software should too.",
        description:
            "CRMs, operations dashboards, work order systems, inventory tracking — we build the internal tools your team actually needs. Every platform is shaped around your workflows, not the other way around. We've shipped custom systems for motorcycle shops, contractors, musicians, and trading firms.",
        tag: "In production across 4 industries",
    },
    {
        icon: Bot,
        slug: "algorithmic-trading-systems",
        color: "from-violet-500 to-blue-400",
        title: "Algorithmic Trading Systems",
        headline: "Live trading bots. Real money. Real markets.",
        description:
            "We've built and deployed multiple live trading systems — MA Supertrend, VWAP, momentum, and multi-strategy setups with real-time market feeds, configurable risk controls, and 24/7 uptime. These aren't backtested prototypes. They're running.",
        tag: "5 live systems deployed",
    },
    {
        icon: Globe,
        slug: "web-applications",
        color: "from-cyan-500 to-emerald-400",
        title: "Web Applications & Portals",
        headline: "Websites that actually do something.",
        description:
            "Client portals, SaaS apps, artist sites, contractor platforms — built for speed, conversion, and real use. Deployed on Vercel with global CDN, not sitting on a shared hosting plan somewhere.",
        tag: "Full-stack web apps in production",
    },
    {
        icon: CreditCard,
        slug: "payments-invoicing-licensing",
        color: "from-emerald-500 to-cyan-400",
        title: "Payments, Invoicing & Licensing",
        headline: "Get paid. Manage access. Ship software.",
        description:
            "Stripe integrations, ACH, auto-generated invoices, payment reminders, revenue dashboards. We also build license servers and subscription engines — JWT-based validation, usage tracking, expiry enforcement, and customer portals for seat management.",
        tag: "Live payment and licensing systems shipped",
    },
    {
        icon: Shield,
        slug: "penetration-testing",
        color: "from-red-500 to-orange-400",
        title: "Offensive Security & Pentesting",
        headline: "We break in so someone else doesn't.",
        description:
            "Full-scope penetration testing — network, wireless, web apps, Active Directory. We run real attacks: credential spraying, lateral movement, Kerberos abuse, ADCS exploitation, C2 infrastructure. Every finding is mapped to MITRE ATT&CK with a clear remediation path.",
        tag: "Custom red team toolkit with 11 attack modules",
    },
    {
        icon: Lock,
        slug: "cloud-infrastructure",
        color: "from-pink-500 to-violet-400",
        title: "Cloud Infrastructure & DevOps",
        headline: "Deployment, monitoring, and infra that doesn't break.",
        description:
            "Docker, Nginx, DigitalOcean, Fly.io, Vercel — we set up CI/CD pipelines, auto-scaling, monitoring via Sentry, and production deployments you don't have to babysit. Zero unplanned outages across all active deployments.",
        tag: "Zero unplanned outages",
    },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Post-mount motion gate. Always false on the server AND on the first client
 * render, so SSR HTML and the hydration render are byte-identical (fully
 * visible content); flips true after mount only when the client has not
 * requested reduced motion. Never branch rendered output on useReducedMotion
 * directly — it is null on the server and real on the first client render,
 * which strands SSR's inline `opacity:0` styles for reduced-motion users.
 */
function useMotionOK(): boolean {
    const reduceMotion = useReducedMotion();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    return mounted && reduceMotion !== true;
}

/**
 * Hydration-safe fade-up reveal (local, reduced-motion-complete replacement
 * for ui/AnimatedSection, which has no reduced-motion handling). SSR renders
 * the content fully visible (initial={false} + visible animate target), so
 * no-JS, pre-hydration, and prefers-reduced-motion users always see complete
 * content. On motion-safe clients the element snaps hidden post-mount
 * (duration 0, before it can be seen below the fold) and fades up when it
 * enters the viewport.
 */
function FadeUp({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const motionOK = useMotionOK();
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const hidden = motionOK && !inView;

    return (
        <motion.div
            ref={ref}
            initial={false}
            animate={hidden ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            transition={hidden ? { duration: 0 } : { duration: 0.8, ease: EASE, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/*
 * THE SHOWCASE REEL — on motion-safe lg+ viewports that are also at least
 * 800px tall, the services grid becomes a pinned horizontal reel: the section
 * is a 280vh scroll runway, the inner viewport is sticky/h-screen, and scroll
 * progress (framer useScroll + useTransform through one gentle spring)
 * translates the card row through all six cards. Ghost index numerals
 * parallax slightly slower than the row, off-center cards sit at 0.92 scale /
 * 0.55 opacity, and a thin progress bar under the header fills as the reel
 * advances.
 *
 * Every structural difference between grid and reel lives in CSS
 * (motion-safe:lg:[@media(min-height:800px)]: variants), so the browser
 * paints the correct layout for every tier before hydration with zero shift:
 * - <lg (touch/mobile): the original vertical grid, fade-up entrances only.
 * - prefers-reduced-motion (any width): the original static grid — the pin,
 *   the translations, and the dimming all collapse; nothing is hidden.
 * - short lg viewports (<800px tall, e.g. 1366x768 laptops): the static grid
 *   again — the pinned h-screen stage cannot fit header + card + footer
 *   there, and overflow-hidden would clip focusable content with no recovery.
 * - JS mirrors the same conditions (one matchMedia listener + a post-mount
 *   reduced-motion gate) purely to decide whether motion values attach.
 * All six cards stay in the DOM in every mode; copy is untouched.
 */

/** Must stay in sync with the motion-safe:lg:[@media(min-height:800px)]: classes below. */
const REEL_MEDIA_QUERY = "(min-width: 64rem) and (min-height: 800px)";

const REEL_LAST_INDEX = services.length - 1;
/* Ghost numerals drift at +0.4 card-steps per unit progress while the row
 * travels -5 steps, so they move ~8% slower than the cards they sit behind. */
const GHOST_PARALLAX = 0.4;

interface ReelCardShellProps {
    index: number;
    /** Sprung reel progress (0 = card 01 centered, 1 = card 06 centered). */
    progress: MotionValue<number>;
    /** Measured center-to-center card distance in px (width + gap). */
    step: number;
    /** True only when the pinned reel is live (lg+, tall, motion-safe, mounted). */
    active: boolean;
    children: React.ReactNode;
}

function ReelCardShell({ index, progress, step, active, children }: ReelCardShellProps) {
    const center = REEL_LAST_INDEX > 0 ? index / REEL_LAST_INDEX : 0;
    // Center stage: full scale/opacity at this card's progress stop, easing
    // to 0.92 / 0.55 one stop away (clamped beyond). Transform/opacity only.
    const scale = useTransform(progress, [center - 0.22, center, center + 0.22], [0.92, 1, 0.92]);
    const opacity = useTransform(progress, [center - 0.22, center, center + 0.22], [0.55, 1, 0.55]);
    const ghostX = useTransform(progress, (p) => (p - center) * step * GHOST_PARALLAX);

    return (
        <div className="relative h-full">
            <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute -left-6 -top-16 hidden select-none font-mono text-[9rem] font-bold leading-none text-white/[0.045] motion-safe:lg:[@media(min-height:800px)]:block"
                style={active ? { x: ghostX } : { x: 0 }}
            >
                {String(index + 1).padStart(2, "0")}
            </motion.span>
            <motion.div
                className="relative h-full"
                style={active ? { scale, opacity } : { scale: 1, opacity: 1 }}
            >
                {children}
            </motion.div>
        </div>
    );
}

export function Services() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const stickyRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [reelViewport, setReelViewport] = useState(false);
    const [step, setStep] = useState(0);
    const [current, setCurrent] = useState(1);
    const motionOK = useMotionOK();
    const isReel = reelViewport && motionOK;

    /* The reel-viewport gate: one matchMedia listener mirroring the CSS
     * variant stack (Tailwind's 64rem lg breakpoint + the 800px min-height
     * that guarantees the pinned stage fits), cleaned up on unmount. SSR +
     * first client render are always the static tier, so hydration matches
     * every device. */
    useEffect(() => {
        const query = window.matchMedia(REEL_MEDIA_QUERY);
        const onChange = () => setReelViewport(query.matches);
        onChange();
        query.addEventListener("change", onChange);
        return () => query.removeEventListener("change", onChange);
    }, []);

    /* Reel geometry: measure the real card step (width + gap) from the DOM
     * so rem scaling and zoom never desync the math. Re-measured by one
     * ResizeObserver (viewport-width padding changes retrigger it). */
    useEffect(() => {
        if (!isReel) {
            return undefined;
        }
        const track = trackRef.current;
        if (track === null) {
            return undefined;
        }
        const measure = () => {
            const first = track.children[0];
            const second = track.children[1];
            if (first instanceof HTMLElement && second instanceof HTMLElement) {
                setStep(Math.max(0, second.offsetLeft - first.offsetLeft));
            }
        };
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(track);
        return () => observer.disconnect();
    }, [isReel]);

    /* Scroll runway: progress 0 when the section pins, 1 when it releases.
     * One modest spring feeds the row translation, the per-card lifts, and
     * the progress bar so everything moves as a single body. */
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });
    const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });
    // Track pl-[calc(50vw_-_15rem)] centers card 01 at progress 0, so x runs
    // 0 → -(5 × step): the static layout and the live reel agree at the top.
    const x = useTransform(progress, (p) => -p * step * REEL_LAST_INDEX);

    useMotionValueEvent(scrollYProgress, "change", (p) => {
        if (!isReel) {
            return;
        }
        setCurrent(Math.min(services.length, Math.max(1, Math.round(p * REEL_LAST_INDEX) + 1)));
    });

    /* Keyboard support for the pinned reel: tab order is DOM order, but a
     * focused off-stage card would make the browser scroll the
     * overflow-hidden viewport (silently desyncing the transform). Undo
     * that native reveal, then drive the page to the card's progress stop
     * so the reel itself brings the focused card to center stage. */
    const handleReelFocus = (event: React.FocusEvent<HTMLDivElement>) => {
        if (!isReel) {
            return;
        }
        const target = event.target as HTMLElement | null;
        const section = sectionRef.current;
        const viewport = stickyRef.current;
        const track = trackRef.current;
        if (target === null || section === null || viewport === null || track === null) {
            return;
        }
        viewport.scrollLeft = 0;
        viewport.scrollTop = 0;
        if (!target.matches(":focus-visible")) {
            return;
        }
        const index = Array.from(track.children).findIndex((child) => child.contains(target));
        if (index < 0) {
            return;
        }
        const rect = section.getBoundingClientRect();
        const runway = rect.height - window.innerHeight;
        if (runway <= 0) {
            return;
        }
        window.scrollTo({
            top: window.scrollY + rect.top + (index / REEL_LAST_INDEX) * runway,
            behavior: "auto",
        });
    };

    return (
        <section
            ref={sectionRef}
            id="services"
            className="relative overflow-hidden py-24 motion-safe:lg:[@media(min-height:800px)]:h-[280vh] motion-safe:lg:[@media(min-height:800px)]:overflow-visible motion-safe:lg:[@media(min-height:800px)]:py-0"
        >
            <div
                ref={stickyRef}
                className="relative z-10 motion-safe:lg:[@media(min-height:800px)]:sticky motion-safe:lg:[@media(min-height:800px)]:top-0 motion-safe:lg:[@media(min-height:800px)]:flex motion-safe:lg:[@media(min-height:800px)]:h-screen motion-safe:lg:[@media(min-height:800px)]:flex-col motion-safe:lg:[@media(min-height:800px)]:justify-center motion-safe:lg:[@media(min-height:800px)]:overflow-hidden"
            >
                <div className="container mx-auto px-6">
                    <FadeUp className="mx-auto mb-20 max-w-3xl text-center motion-safe:lg:[@media(min-height:800px)]:mb-10">
                        <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                            What We Build
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Software that solves{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-quant-blue to-cyan-400">
                                real problems.
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We don't build demos. Everything here is running in production
                            for real businesses — from trading systems to full internal platforms.
                        </p>
                        {/* Reel instruments: fill bar + monospace index readout.
                            Desktop reel only; decorative, so hidden from AT. */}
                        <div
                            aria-hidden="true"
                            className="mt-8 hidden items-center justify-center gap-4 motion-safe:lg:[@media(min-height:800px)]:flex"
                        >
                            <div className="h-px w-56 overflow-hidden rounded-full bg-white/10">
                                <motion.div
                                    className="h-full w-full origin-left bg-gradient-to-r from-quant-blue to-cyan-400"
                                    style={isReel ? { scaleX: progress } : { scaleX: 0 }}
                                />
                            </div>
                            <span className="font-mono text-xs tracking-[0.2em] text-gray-500">
                                {String(current).padStart(2, "0")} /{" "}
                                {String(services.length).padStart(2, "0")}
                            </span>
                        </div>
                    </FadeUp>
                </div>

                <div className="container mx-auto px-6 motion-safe:lg:[@media(min-height:800px)]:w-full motion-safe:lg:[@media(min-height:800px)]:max-w-none motion-safe:lg:[@media(min-height:800px)]:px-0">
                    <motion.div
                        ref={trackRef}
                        onFocus={handleReelFocus}
                        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 motion-safe:lg:[@media(min-height:800px)]:flex motion-safe:lg:[@media(min-height:800px)]:flex-nowrap motion-safe:lg:[@media(min-height:800px)]:items-stretch motion-safe:lg:[@media(min-height:800px)]:gap-10 motion-safe:lg:[@media(min-height:800px)]:pl-[calc(50vw_-_15rem)]"
                        style={{ x: isReel ? x : 0 }}
                    >
                        {services.map((service, idx) => {
                            const Icon = service.icon;
                            return (
                                <FadeUp
                                    key={idx}
                                    delay={idx * 0.06}
                                    className="motion-safe:lg:[@media(min-height:800px)]:w-[30rem] motion-safe:lg:[@media(min-height:800px)]:shrink-0"
                                >
                                    <ReelCardShell
                                        index={idx}
                                        progress={progress}
                                        step={step}
                                        active={isReel}
                                    >
                                        <Tilt3D className="h-full" intensity={7} floatIndex={idx}>
                                            <Link
                                                href={`/services/${service.slug}`}
                                                className="group relative block h-full rounded-2xl border border-white/5 p-7 transition-colors hover:border-white/15 focus-visible:border-white/15"
                                                style={{ transformStyle: "preserve-3d" }}
                                            >
                                                {/* Background and clipping live on this inner layer:
                                                    overflow-hidden / backdrop-filter on the Link itself would
                                                    flatten its preserve-3d children. In the reel tier the
                                                    backdrop blur is dropped (near-opaque bg instead): the row
                                                    translates every scroll frame, and moving backdrop-filter
                                                    surfaces force per-frame backdrop re-sampling — the static
                                                    tiers keep the blur. */}
                                                <div
                                                    aria-hidden="true"
                                                    className="pointer-events-none absolute inset-0 rounded-2xl bg-[#0d1526]/80 backdrop-blur-sm overflow-hidden motion-safe:lg:[@media(min-height:800px)]:bg-[#0d1526]/95 motion-safe:lg:[@media(min-height:800px)]:backdrop-blur-none"
                                                    style={{ transform: "translateZ(0)" }}
                                                />
                                                {/* Card internals sit on Tilt3D.Layer depth planes so the
                                                    face separates into parallax glass when tilted. */}
                                                <div className="relative flex flex-col h-full" style={{ transformStyle: "preserve-3d" }}>
                                                    <Tilt3D.Layer
                                                        z={45}
                                                        className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 mb-5 w-fit`}
                                                    >
                                                        <Icon className="w-5 h-5 text-white" />
                                                    </Tilt3D.Layer>

                                                    <Tilt3D.Layer z={25} className="mb-3">
                                                        <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-1">{service.title}</p>
                                                        <h3 className="text-lg font-bold text-white leading-snug">{service.headline}</h3>
                                                    </Tilt3D.Layer>

                                                    <Tilt3D.Layer z={12} className="mb-5 flex-grow">
                                                        <p className="text-gray-400 text-sm leading-relaxed">
                                                            {service.description}
                                                        </p>
                                                    </Tilt3D.Layer>

                                                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between" style={{ transformStyle: "preserve-3d" }}>
                                                        <Tilt3D.Layer z={30}>
                                                            <p className={`text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                                                                {service.tag}
                                                            </p>
                                                        </Tilt3D.Layer>
                                                        <Tilt3D.Layer z={38}>
                                                            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white group-focus-visible:text-white group-hover:translate-x-0.5 transition-all" />
                                                        </Tilt3D.Layer>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Tilt3D>
                                    </ReelCardShell>
                                </FadeUp>
                            );
                        })}
                    </motion.div>
                </div>

                <div className="container mx-auto px-6">
                    <FadeUp className="mt-12 text-center motion-safe:lg:[@media(min-height:800px)]:mt-10">
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-sm font-medium text-quant-blue hover:text-cyan-400 transition-colors"
                        >
                            See all services
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}
