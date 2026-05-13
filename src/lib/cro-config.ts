export type ExperimentStatus = "running" | "paused" | "winner" | "archived";

export interface ExperimentConfig {
  variants: string[];
  split: number[];
  status: ExperimentStatus;
  winner?: string;
  hypothesis?: string;
  primaryMetric?: string;
}

export const experiments: Record<string, ExperimentConfig> = {
  "hero-cta-v1": {
    variants: ["A", "B"],
    split: [50, 50],
    status: "running",
    hypothesis:
      "Outcome-oriented copy ('Get a Custom Quote') will outperform action copy ('Book a Call') on hero CTA clicks.",
    primaryMetric: "cta_click",
  },
  "pricing-cta-color-v1": {
    variants: ["A", "B"],
    split: [50, 50],
    status: "running",
    hypothesis:
      "A high-contrast amber CTA on the pricing tier card will outperform the default blue on click-through to the consultation modal.",
    primaryMetric: "consultation_modal_open",
  },
  "calculator-placement-v1": {
    variants: ["A", "B"],
    split: [50, 50],
    status: "running",
    hypothesis:
      "Surfacing the build-vs-buy calculator above the fold on the home page will increase calculator completions by 30%+ versus the current below-fold placement.",
    primaryMetric: "calculator_complete",
  },
  "exit-intent-resource-v1": {
    variants: ["A", "B"],
    split: [50, 50],
    status: "running",
    hypothesis:
      "Offering the build-vs-buy playbook on exit intent will convert more than offering the 14-case-study pack.",
    primaryMetric: "lead_form_submit",
  },
  "navbar-cta-label-v1": {
    variants: ["A", "B"],
    split: [50, 50],
    status: "running",
    hypothesis:
      "'Talk to Bill' will outperform 'Book a Consultation' on navbar CTA click-through.",
    primaryMetric: "cta_click",
  },
  "social-proof-bar-v1": {
    variants: ["A", "B"],
    split: [50, 50],
    status: "running",
    hypothesis:
      "Showing a rotating trust bar with verified GBP review and SOS registration will lift consultation modal opens by 5%+.",
    primaryMetric: "consultation_modal_open",
  },
  "sticky-cta-mobile-v1": {
    variants: ["A", "B"],
    split: [50, 50],
    status: "running",
    hypothesis:
      "A persistent bottom sticky CTA on mobile (Call + Book) will increase tel: clicks and modal opens on city/service pages.",
    primaryMetric: "cta_click",
  },
  "scroll-cta-v1": {
    variants: ["A", "B"],
    split: [50, 50],
    status: "running",
    hypothesis:
      "A floating scroll-triggered CTA at 60% scroll depth will increase modal opens versus baseline (no floating CTA).",
    primaryMetric: "consultation_modal_open",
  },
  "form-labels-v1": {
    variants: ["A", "B"],
    split: [50, 50],
    status: "running",
    hypothesis:
      "Outcome-focused contact form labels ('What do you want to build?') will outperform feature labels ('Project description') on form completion rate.",
    primaryMetric: "lead_form_submit",
  },
  "footer-trust-badges-v1": {
    variants: ["A", "B"],
    split: [50, 50],
    status: "running",
    hypothesis:
      "Adding GA-SOS registration + verified Google badge to the footer will increase consultation modal opens from footer.",
    primaryMetric: "consultation_modal_open",
  },
};

export function isExperimentLive(id: string): boolean {
  const exp = experiments[id];
  if (!exp) return false;
  return exp.status === "running" || exp.status === "winner";
}

export function getExperimentDefinition(id: string): ExperimentConfig | undefined {
  return experiments[id];
}
