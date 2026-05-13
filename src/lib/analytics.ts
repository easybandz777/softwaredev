export type EventName =
  | "lead_form_submit"
  | "calculator_complete"
  | "consultation_modal_open"
  | "cta_click"
  | "scroll_to_bottom"
  | "page_view_extended";

type EventParams = Record<string, string | number>;

type GtagFn = (
  command: "event" | "config" | "js" | "set" | "consent",
  ...args: unknown[]
) => void;

type FbqFn = (
  command: "track" | "trackCustom" | "init" | "consent",
  eventName: string,
  params?: Record<string, unknown>,
) => void;

type LintrkFn = (data: { conversion_id: number | string }) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
    fbq?: FbqFn;
    _fbq?: FbqFn;
    lintrk?: LintrkFn;
    _linkedin_partner_ids?: string[];
    clarity?: (command: string, ...args: unknown[]) => void;
    plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function safeGtag(name: EventName, params?: EventParams): void {
  if (!isBrowser() || typeof window.gtag !== "function") return;
  try {
    window.gtag("event", name, params ?? {});
  } catch {
  }
}

function safeFbq(eventName: string, params?: Record<string, unknown>): void {
  if (!isBrowser() || typeof window.fbq !== "function") return;
  try {
    window.fbq("track", eventName, params);
  } catch {
  }
}

function safeLintrk(conversionId?: number | string): void {
  if (!isBrowser() || typeof window.lintrk !== "function") return;
  if (conversionId === undefined) return;
  try {
    window.lintrk({ conversion_id: conversionId });
  } catch {
  }
}

function safePlausible(eventName: EventName, params?: EventParams): void {
  if (!isBrowser() || typeof window.plausible !== "function") return;
  try {
    window.plausible(eventName, params ? { props: params } : undefined);
  } catch {
  }
}

function safeClarityTag(key: string, value: string): void {
  if (!isBrowser() || typeof window.clarity !== "function") return;
  try {
    window.clarity("set", key, value);
  } catch {
  }
}

export function trackEvent(name: EventName, params?: EventParams): void {
  safeGtag(name, params);
  safePlausible(name, params);
  if (name === "lead_form_submit") {
    safeFbq("Lead", params);
  } else if (name === "calculator_complete") {
    safeFbq("CompleteRegistration", params);
  } else if (name === "consultation_modal_open") {
    safeFbq("InitiateCheckout", params);
  } else if (name === "cta_click") {
    safeFbq("ViewContent", params);
  }
}

export function trackLead({
  source,
  magnet,
}: {
  source: string;
  magnet?: string;
}): void {
  const params: EventParams = { source };
  if (magnet) params.magnet = magnet;
  trackEvent("lead_form_submit", params);
  safeClarityTag("lead", source);
  const conversionEnv =
    typeof process !== "undefined"
      ? process.env.NEXT_PUBLIC_LINKEDIN_LEAD_CONVERSION_ID
      : undefined;
  if (conversionEnv) {
    safeLintrk(conversionEnv);
  }
}

export function trackCalculatorComplete({
  tool,
  value,
}: {
  tool: string;
  value?: number;
}): void {
  const params: EventParams = { tool };
  if (typeof value === "number") params.value = value;
  trackEvent("calculator_complete", params);
  safeClarityTag("calculator", tool);
}
