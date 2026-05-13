import { experiments, getExperimentDefinition, type ExperimentConfig } from "./cro-config";

const COOKIE_NAME = "qlu-ab-id";
const COOKIE_MAX_AGE_DAYS = 365;
const ASSIGNMENT_STORAGE_PREFIX = "qlu-ab-assignment:";
const IMPRESSION_STORAGE_PREFIX = "qlu-ab-impressed:";

type GtagFn = (
  command: "event",
  name: string,
  params?: Record<string, unknown>,
) => void;

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function readCookie(name: string): string | null {
  if (!isBrowser()) return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=")[1] ?? "") : null;
}

function writeCookie(name: string, value: string, days: number): void {
  if (!isBrowser()) return;
  const maxAge = days * 24 * 60 * 60;
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;
}

function generateUuid(): string {
  if (isBrowser() && typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `qlu-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function getOrCreateUserId(): string {
  if (!isBrowser()) return "ssr";
  let id = readCookie(COOKIE_NAME);
  if (!id) {
    id = generateUuid();
    writeCookie(COOKIE_NAME, id, COOKIE_MAX_AGE_DAYS);
  }
  return id;
}

function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function pickVariant(experimentId: string, userId: string, config: ExperimentConfig): string {
  const hash = hashString(`${experimentId}:${userId}`);
  const bucket = hash % 100;
  let cumulative = 0;
  const variants = config.variants;
  const split = config.split && config.split.length === variants.length
    ? config.split
    : variants.map(() => Math.floor(100 / variants.length));
  for (let i = 0; i < variants.length; i++) {
    cumulative += split[i] ?? 0;
    if (bucket < cumulative) return variants[i];
  }
  return variants[variants.length - 1];
}

function readAssignment(experimentId: string): string | null {
  if (!isBrowser()) return null;
  try {
    return window.localStorage.getItem(`${ASSIGNMENT_STORAGE_PREFIX}${experimentId}`);
  } catch {
    return null;
  }
}

function writeAssignment(experimentId: string, variant: string): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(`${ASSIGNMENT_STORAGE_PREFIX}${experimentId}`, variant);
  } catch {
  }
}

function hasImpressed(experimentId: string, variant: string): boolean {
  if (!isBrowser()) return true;
  try {
    return window.sessionStorage.getItem(`${IMPRESSION_STORAGE_PREFIX}${experimentId}`) === variant;
  } catch {
    return true;
  }
}

function markImpressed(experimentId: string, variant: string): void {
  if (!isBrowser()) return;
  try {
    window.sessionStorage.setItem(`${IMPRESSION_STORAGE_PREFIX}${experimentId}`, variant);
  } catch {
  }
}

function recordImpression(experimentId: string, variant: string): void {
  if (!isBrowser()) return;
  if (hasImpressed(experimentId, variant)) return;
  markImpressed(experimentId, variant);
  const w = window as unknown as { gtag?: GtagFn; plausible?: (e: string, o?: { props?: Record<string, unknown> }) => void };
  try {
    if (typeof w.gtag === "function") {
      w.gtag("event", "experiment_impression", {
        experiment_id: experimentId,
        variant_id: variant,
      });
    }
  } catch {
  }
  try {
    if (typeof w.plausible === "function") {
      w.plausible("experiment_impression", {
        props: { experiment_id: experimentId, variant_id: variant },
      });
    }
  } catch {
  }
}

export function getVariant(experimentId: string): string {
  const config = getExperimentDefinition(experimentId);
  if (!config) return "A";
  if (config.status === "archived" || config.status === "paused") {
    return config.variants[0] ?? "A";
  }
  if (config.status === "winner" && config.winner) {
    return config.winner;
  }
  if (!isBrowser()) {
    return config.variants[0] ?? "A";
  }
  const userId = getOrCreateUserId();
  const cached = readAssignment(experimentId);
  let variant: string;
  if (cached && config.variants.includes(cached)) {
    variant = cached;
  } else {
    variant = pickVariant(experimentId, userId, config);
    writeAssignment(experimentId, variant);
  }
  recordImpression(experimentId, variant);
  return variant;
}

export function listExperiments(): string[] {
  return Object.keys(experiments);
}

export function resetAssignments(): void {
  if (!isBrowser()) return;
  try {
    Object.keys(experiments).forEach((id) => {
      window.localStorage.removeItem(`${ASSIGNMENT_STORAGE_PREFIX}${id}`);
      window.sessionStorage.removeItem(`${IMPRESSION_STORAGE_PREFIX}${id}`);
    });
  } catch {
  }
}
