import { buildDrip1 } from "./drip-1-welcome";
import { buildDrip2 } from "./drip-2-case-study";
import { buildDrip3 } from "./drip-3-pricing";
import { buildDrip4 } from "./drip-4-objection";
import { buildDrip5 } from "./drip-5-final-cta";
import type { DripTemplate, TemplateContext } from "./shared";

export type { DripTemplate, TemplateContext } from "./shared";

export type DripStep = 1 | 2 | 3 | 4 | 5;

export function buildDripTemplate(step: DripStep, ctx: TemplateContext): DripTemplate {
    switch (step) {
        case 1: return buildDrip1(ctx);
        case 2: return buildDrip2(ctx);
        case 3: return buildDrip3(ctx);
        case 4: return buildDrip4(ctx);
        case 5: return buildDrip5(ctx);
    }
}

export function pickSubject(tpl: DripTemplate, variant: "A" | "B"): string {
    return variant === "B" ? tpl.subjectB : tpl.subjectA;
}
