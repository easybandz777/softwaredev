export const BRAND = {
    indigo: "#4f46e5",
    indigoDark: "#3730a3",
    text: "#0f172a",
    muted: "#475569",
    border: "#e2e8f0",
    surface: "#ffffff",
    bg: "#f8fafc",
};

export type DripTemplate = {
    subjectA: string;
    subjectB: string;
    preheader: string;
    text: string;
    html: string;
};

export type TemplateContext = {
    name: string;
    leadMagnetUrl: string;
    calendlyUrl: string;
    unsubscribeUrl: string;
};

export function escapeHtml(s: string): string {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export function wrapHtml(opts: {
    preheader: string;
    bodyHtml: string;
    ctaLabel: string;
    ctaUrl: string;
    unsubscribeUrl: string;
}): string {
    const { preheader, bodyHtml, ctaLabel, ctaUrl, unsubscribeUrl } = opts;
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>QuantLab USA</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:${BRAND.text};">
<div style="display:none;visibility:hidden;opacity:0;max-height:0;overflow:hidden;mso-hide:all;font-size:0;line-height:0;color:transparent;">
${escapeHtml(preheader)}
</div>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:${BRAND.bg};padding:24px 12px;">
<tr><td align="center">
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;background:${BRAND.surface};border:1px solid ${BRAND.border};border-radius:12px;">
<tr><td style="padding:32px 32px 16px;">
<div style="font-size:13px;font-weight:600;letter-spacing:0.08em;color:${BRAND.indigo};text-transform:uppercase;">QuantLab USA</div>
</td></tr>
<tr><td style="padding:0 32px 8px;font-size:15px;line-height:1.65;color:${BRAND.text};">
${bodyHtml}
</td></tr>
<tr><td style="padding:24px 32px 8px;">
<a href="${ctaUrl}" style="display:inline-block;padding:12px 22px;background:${BRAND.indigo};color:#ffffff;font-weight:600;font-size:15px;text-decoration:none;border-radius:8px;">${escapeHtml(ctaLabel)}</a>
</td></tr>
<tr><td style="padding:24px 32px 32px;">
<div style="border-top:1px solid ${BRAND.border};padding-top:16px;font-size:12px;line-height:1.5;color:${BRAND.muted};">
QUANT LAB USA INC &middot; Atlanta, GA &middot; <a href="https://quantlabusa.dev" style="color:${BRAND.muted};text-decoration:underline;">quantlabusa.dev</a><br>
You are receiving this because you downloaded a resource at quantlabusa.dev.
<br><a href="${unsubscribeUrl}" style="color:${BRAND.muted};text-decoration:underline;">Unsubscribe</a>
</div>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

export function firstName(full: string): string {
    const trimmed = (full || "").trim();
    if (!trimmed) return "there";
    return trimmed.split(/\s+/)[0];
}
