"use client";

import BrochureQR from "../BrochureQR";

/*
  QuantLab Software Solutions — Elite Business Card v2
  William Beltz · Software Engineer
  Print-ready: 3.5 × 2 in (front + back)
*/

/* ── Palette ── */
const BG_CARD  = "#0A0E1A";
const CYAN     = "#22D3EE";
const CYAN_DIM = "rgba(34,211,238,0.08)";
const CYAN_MED = "rgba(34,211,238,0.22)";
const CYAN_BRT = "rgba(34,211,238,0.55)";
const CYAN_GLOW = "rgba(34,211,238,0.15)";
const WHITE    = "#F0F6FF";
const SILVER   = "#C8D8E8";
const GRAY     = "#7A90A8";
const GRAY_DIM = "#3D5066";

/* ── Contact info ── */
const NAME    = "Jordan Stakins";
const TITLE   = "Sales Executive";
const EMAIL   = "jordan@quantlab.dev";
const WEBSITE = "quantlabusa.dev";
const PHONE   = "770-555-0199";
const TAGLINE = "Web Platforms · Business Automation · Custom Software · Data Systems · API Development";

const cardBase: React.CSSProperties = {
  width: "3.5in",
  height: "2in",
  borderRadius: "0.1in",
  overflow: "hidden",
  position: "relative",
  fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
  color: WHITE,
  boxSizing: "border-box",
};

export default function BusinessCardPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&display=swap');
        @page { size: 4in 2.6in; margin: 0; }
        @media print {
          html, body { margin: 0; padding: 0; background: #000 !important; }
          .screen-only { display: none !important; }
          .card-pair { page-break-after: always; }
        }
        body { background: #060A12; }
        .card-pair {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.55in;
          padding: 0.5in 0;
        }
        .card-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #3D5066;
          margin-bottom: 7px;
          text-align: center;
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#060A12", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem 0" }}>

        <div className="screen-only" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: WHITE, margin: 0 }}>
            Quant<span style={{ color: CYAN }}>Lab</span> <span style={{ color: GRAY, fontWeight: 400 }}>· Business Card</span>
          </h1>
            Jordan Stakins · Sales Executive
        </div>

        <div className="card-pair">

          {/* ═══════════════════ FRONT ═══════════════════ */}
          <div>
            <p className="card-label screen-only">// front</p>
            <div style={{ ...cardBase, background: BG_CARD }}>

              {/* ── LAYER 1: Base Gradient (Deep, moody, directional) ── */}
              <div style={{
                position: "absolute", inset: 0,
                background: `linear-gradient(135deg, #04070D 0%, #080E1C 50%, #030509 100%)`,
              }} />

              {/* ── LAYER 2: Atmospheric Glows (Asymmetrical & Intentional) ── */}
              {/* Primary intense glow behind logo */}
              <div style={{
                position: "absolute", top: "50%", left: "15%",
                transform: "translate(-50%, -50%)",
                width: "3in", height: "3in",
                background: `radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(34,211,238,0.02) 40%, transparent 70%)`,
                pointerEvents: "none",
              }} />
              {/* Secondary soft glow bleeding from top right edge */}
              <div style={{
                position: "absolute", top: "-0.5in", right: "-0.5in",
                width: "2in", height: "2in",
                background: `radial-gradient(circle, rgba(13,20,40,0.8) 0%, transparent 70%)`,
                pointerEvents: "none",
              }} />

              {/* ── LAYER 3: Technical Schematic Layer ── */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15 }}
                viewBox="0 0 350 200" fill="none">
                {/* Micro framing system */}
                <rect x="18" y="12" width="314" height="176" rx="4"
                  stroke={CYAN} strokeWidth="0.5" strokeDasharray="4 6" opacity="0.4" />
                
                {/* Faint targeting rings centered on logo */}
                <circle cx="65" cy="100" r="80" stroke={CYAN} strokeWidth="0.4" strokeDasharray="2 8" opacity="0.3"/>
                <circle cx="65" cy="100" r="55" stroke={CYAN} strokeWidth="0.3" opacity="0.2"/>

                {/* Geometric measurement lines */}
                <line x1="18" y1="50" x2="35" y2="50" stroke={CYAN} strokeWidth="0.5" />
                <line x1="18" y1="150" x2="35" y2="150" stroke={CYAN} strokeWidth="0.5" />
                <line x1="315" y1="50" x2="332" y2="50" stroke={CYAN} strokeWidth="0.5" />
                
                {/* Dotted data connector path across bottom */}
                <path d="M 18 165 L 120 165 L 140 188 L 332 188" stroke={CYAN} strokeWidth="0.5" strokeDasharray="2 3" opacity="0.5" />
                <circle cx="120" cy="165" r="1.5" fill={CYAN} opacity="0.6" />
                
                {/* Faint vertical division line */}
                <line x1="160" y1="12" x2="160" y2="188" stroke={CYAN} strokeWidth="0.4" strokeDasharray="1 10" opacity="0.3" />
              </svg>

              {/* ── LAYER 4: Texture / Depth (Ghosted Watermark) ── */}
              <div style={{
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translate(20%, -50%)",
                width: "3in",
                height: "3in",
                opacity: 0.05,
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <img src="/logo-transparent.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "blur(0.5px)" }} />
              </div>

              {/* Left edge solid accent bar */}
              <div style={{
                position: "absolute", left: 0, top: 0, bottom: 0, width: "3px",
                background: `linear-gradient(180deg, transparent 0%, ${CYAN_MED} 20%, ${CYAN_BRT} 50%, ${CYAN_MED} 80%, transparent 100%)`,
              }} />

              {/* ── MAIN CONTENT FOREGROUND ── */}
              <div style={{ position: "relative", zIndex: 10, padding: "0.22in 0.26in 0.2in 0.25in", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

                {/* Top: Logo (Left) + Name (Right) */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  {/* Glowing Logo Container */}
                  <div style={{ position: "relative" }}>
                    <div style={{
                      position: "absolute", top: "50%", left: "50%",
                      transform: "translate(-50%,-50%)",
                      width: "1.4in", height: "1.4in",
                      background: `radial-gradient(circle, rgba(34,211,238,0.18), transparent 55%)`,
                      pointerEvents: "none",
                      zIndex: 0
                    }} />
                    <img src="/logo-transparent.png" alt="QuantLab"
                      style={{ 
                        width: "1.15in", height: "1.15in", objectFit: "contain", position: "relative", zIndex: 1,
                        filter: "drop-shadow(0 0 8px rgba(34,211,238,0.35))" 
                      }} />
                  </div>
                  
                  {/* Name Block with strong right-side alignment & shadow */}
                  <div style={{ textAlign: "right", paddingTop: "0.05in", position: "relative", zIndex: 2 }}>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.052in", fontWeight: 400,
                      color: CYAN, margin: 0, marginBottom: "0.05in", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.9 }}>
                      [ SOLUTION · EXPERT ]
                    </p>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.22in", fontWeight: 800,
                      color: WHITE, margin: 0, lineHeight: 1.05, letterSpacing: "-0.02em",
                      textShadow: "0 4px 8px rgba(0,0,0,0.8), 0 0 25px rgba(34,211,238,0.15)" }}>
                      {NAME}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.06in", marginTop: "0.06in" }}>
                      <div style={{ width: "0.15in", height: "1px", background: CYAN, opacity: 0.6 }} />
                      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.088in", fontWeight: 600,
                        color: CYAN, margin: 0, letterSpacing: "0.11em", textTransform: "uppercase" }}>
                        {TITLE}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom: Tagline + Contact */}
                <div style={{ position: "relative", zIndex: 2 }}>
                  {/* Precision divider with glowing diamond */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.06in", marginBottom: "0.12in", transform: "translateX(-0.1in)" }}>
                    <div style={{ height: "1px", width: "1.5in", background: `linear-gradient(90deg, transparent, ${CYAN_BRT})` }} />
                    <div style={{ width: "4px", height: "4px", background: CYAN, transform: "rotate(45deg)", flexShrink: 0, boxShadow: `0 0 6px ${CYAN}` }} />
                    <div style={{ height: "1px", flex: 1, background: `linear-gradient(90deg, ${CYAN_BRT}, transparent)` }} />
                  </div>
                  
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                    <div style={{ maxWidth: "2.1in", paddingLeft: "0.06in" }}>
                      <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.055in", fontWeight: 400,
                        color: SILVER, margin: 0, letterSpacing: "0.06em", lineHeight: 1.6, textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
                        {TAGLINE.split(' · ').map((s, i, arr) => (
                          <span key={i}>{s}{i < arr.length - 1 ? <span style={{ color: CYAN, opacity: 0.6 }}> · </span> : ''}</span>
                        ))}
                      </p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      {[
                        { val: PHONE, color: SILVER },
                        { val: EMAIL, color: SILVER },
                        { val: WEBSITE, color: CYAN, weight: 700 },
                      ].map((item, i) => (
                        <p key={i} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.062in",
                          color: item.color, fontWeight: (item as any).weight || 400,
                          margin: 0, lineHeight: 1.7, letterSpacing: "0.03em", textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>{item.val}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ═══════════════════ BACK ═══════════════════ */}
          <div>
            <p className="card-label screen-only">// back</p>
            <div style={{ ...cardBase, background: BG_CARD }}>

              {/* ── LAYER 1: Base Gradient (Deep Vignette) ── */}
              <div style={{
                position: "absolute", inset: 0,
                background: `
                  radial-gradient(circle at 50% 50%, #080D1A 0%, #030509 90%)
                `,
              }} />

              {/* ── LAYER 2: Atmospheric Glows (Focal Center) ── */}
              {/* Primary deep core glow */}
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: "2.8in", height: "2.8in",
                background: `radial-gradient(circle, rgba(34,211,238,0.1) 0%, rgba(34,211,238,0.02) 40%, transparent 70%)`,
                pointerEvents: "none",
              }} />
              {/* Secondary intense center dot */}
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -60%)",
                width: "0.8in", height: "0.8in",
                background: `radial-gradient(circle, rgba(34,211,238,0.25) 0%, transparent 60%)`,
                pointerEvents: "none",
              }} />

              {/* ── LAYER 3: Technical Schematic Layer ── */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.2 }}
                viewBox="0 0 350 200" fill="none">
                
                {/* Structural Grid lines (faint) */}
                <line x1="175" y1="0" x2="175" y2="200" stroke={CYAN} strokeWidth="0.4" strokeDasharray="2 10" opacity="0.3" />
                <line x1="0" y1="88" x2="350" y2="88" stroke={CYAN} strokeWidth="0.4" strokeDasharray="2 10" opacity="0.3" />

                {/* Outer corner brackets (more robust) */}
                <path d="M 25 45 L 25 20 L 55 20" stroke={CYAN} strokeWidth="1.2" opacity="0.7" fill="none"/>
                <path d="M 325 45 L 325 20 L 295 20" stroke={CYAN} strokeWidth="1.2" opacity="0.7" fill="none"/>
                <path d="M 25 155 L 25 180 L 55 180" stroke={CYAN} strokeWidth="1.2" opacity="0.7" fill="none"/>
                <path d="M 325 155 L 325 180 L 295 180" stroke={CYAN} strokeWidth="1.2" opacity="0.7" fill="none"/>

                {/* Inner architectural border */}
                <rect x="35" y="30" width="280" height="140" stroke={CYAN} strokeWidth="0.4" strokeDasharray="5 5" opacity="0.2" fill="none" />

                {/* Major focal rings */}
                <circle cx="175" cy="88" r="95" stroke={CYAN} strokeWidth="0.3" opacity="0.15"/>
                <circle cx="175" cy="88" r="75" stroke={CYAN} strokeWidth="0.4" strokeDasharray="4 6" opacity="0.3"/>
                <circle cx="175" cy="88" r="55" stroke={CYAN} strokeWidth="0.6" opacity="0.4"/>
                <circle cx="175" cy="88" r="35" stroke={CYAN} strokeWidth="0.5" strokeDasharray="2 4" opacity="0.5"/>
                <circle cx="175" cy="88" r="22" stroke={CYAN} strokeWidth="0.8" opacity="0.4"/>

                {/* Bold radiating tracking lines */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x1 = 175 + 23 * Math.cos(rad);
                  const y1 = 88  + 23 * Math.sin(rad);
                  const x2 = 175 + 75 * Math.cos(rad);
                  const y2 = 88  + 75 * Math.sin(rad);
                  const nx = 175 + 85 * Math.cos(rad);
                  const ny = 88  + 85 * Math.sin(rad);
                  return (
                    <g key={`rays${i}`}>
                      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={CYAN} strokeWidth="0.5" opacity="0.6"/>
                      <circle cx={nx} cy={ny} r="2" fill={CYAN} opacity="0.7"/>
                      {/* Sub-tick marker */}
                      <line x1={nx} y1={ny} x2={175 + 90 * Math.cos(rad)} y2={88 + 90 * Math.sin(rad)} stroke={CYAN} strokeWidth="0.8" opacity="0.8"/>
                    </g>
                  );
                })}

                {/* Network nodes along the 140px border */}
                <circle cx="95" cy="30" r="1.5" fill={CYAN} opacity="0.5"/>
                <circle cx="255" cy="30" r="1.5" fill={CYAN} opacity="0.5"/>
                <circle cx="95" cy="170" r="1.5" fill={CYAN} opacity="0.5"/>
                <circle cx="255" cy="170" r="1.5" fill={CYAN} opacity="0.5"/>

                {/* Edge tracking bars (top/bottom) */}
                <line x1="140" y1="1" x2="210" y2="1" stroke={CYAN} strokeWidth="2" opacity="0.6"/>
                <line x1="140" y1="199" x2="210" y2="199" stroke={CYAN} strokeWidth="2" opacity="0.6"/>
              </svg>

              {/* ── LAYER 4: Texture / Depth (Ghosted Blueprint Watermark) ── */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -55%)",
                width: "2.5in",
                height: "2.5in",
                opacity: 0.04,
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mixBlendMode: "screen"
              }}>
                <img src="/logo-transparent.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "blur(1px) contrast(1.5)" }} />
              </div>

              {/* ── MAIN CONTENT FOREGROUND ── */}
              <div style={{
                position: "relative", zIndex: 2,
                height: "100%",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: "0.09in",
                paddingBottom: "0.04in",
              }}>

                {/* HERO logo — no text, just the mark */}
                <img src="/logo-transparent.png" alt="QuantLab"
                  style={{
                    width: "1.2in",
                    height: "1.2in",
                    objectFit: "contain",
                    filter: "drop-shadow(0 0 10px rgba(34,211,238,0.4))",
                    position: "relative",
                    zIndex: 5,
                  }}
                />

                {/* Diamond divider */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.06in" }}>
                  <div style={{ width: "0.24in", height: "0.5px", background: `linear-gradient(90deg, transparent, ${CYAN_BRT})` }} />
                  <div style={{ width: "4px", height: "4px", background: CYAN, transform: "rotate(45deg)", opacity: 0.9, flexShrink: 0 }} />
                  <div style={{ width: "0.24in", height: "0.5px", background: `linear-gradient(90deg, ${CYAN_BRT}, transparent)` }} />
                </div>

                {/* QR + website */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.1in" }}>
                  <div style={{
                    position: "relative",
                    padding: "0.035in",
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${CYAN_MED}`,
                    borderRadius: "0.04in",
                  }}>
                    <div style={{ position: "absolute", top: "-1px", left: "-1px", width: "7px", height: "7px",
                      borderTop: `2px solid ${CYAN}`, borderLeft: `2px solid ${CYAN}`, borderRadius: "1px 0 0 0" }} />
                    <div style={{ position: "absolute", top: "-1px", right: "-1px", width: "7px", height: "7px",
                      borderTop: `2px solid ${CYAN}`, borderRight: `2px solid ${CYAN}`, borderRadius: "0 1px 0 0" }} />
                    <div style={{ position: "absolute", bottom: "-1px", left: "-1px", width: "7px", height: "7px",
                      borderBottom: `2px solid ${CYAN}`, borderLeft: `2px solid ${CYAN}`, borderRadius: "0 0 0 1px" }} />
                    <div style={{ position: "absolute", bottom: "-1px", right: "-1px", width: "7px", height: "7px",
                      borderBottom: `2px solid ${CYAN}`, borderRight: `2px solid ${CYAN}`, borderRadius: "0 0 1px 0" }} />
                    <BrochureQR url="https://quantlabusa.dev/questionnaire/QL8J6D" size="0.42in"
                      accentColor={CYAN} fgColor="#E2E8F0" label="" sublabel="" />
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.05in",
                      color: GRAY, margin: 0, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Scan to access
                    </p>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.072in",
                      color: CYAN, margin: 0, marginTop: "0.018in", fontWeight: 600, letterSpacing: "0.04em" }}>
                      {WEBSITE}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="screen-only" style={{ textAlign: "center", marginTop: "1rem" }}>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: GRAY_DIM, letterSpacing: "0.08em" }}>
            // print at 100% scale · cardstock recommended
          </p>
        </div>
      </div>
    </>
  );
}
