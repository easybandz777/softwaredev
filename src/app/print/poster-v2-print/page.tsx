"use client";
import BrochureQR from "../BrochureQR";

/* QuantLab Poster V2 — 48×30in — WILD BACKGROUND + CENTERED TEXT — PRINT-ONLY */
const C = "#22D3EE", W = "#F0F6FF", S = "#C8D8E8";
const PHONE = "770-652-1282", WEB = "quantlabusa.dev";

const SERVICES = [
  "Custom Software", "Web & Mobile Apps", "Business Automation",
  "API Integration", "Data Dashboards", "AI Workflows",
];

const ps: React.CSSProperties = {
  width: "48in", height: "30in", position: "relative",
  overflow: "hidden", fontFamily: "'Inter',system-ui,sans-serif", color: W, boxSizing: "border-box",
};

export default function PosterV2PrintPage() {
  return (<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&display=swap');
      @page { size: 48in 30in; margin: 0; }
      html, body { margin: 0; padding: 0; background: #000; }
      nav, header, footer, [class*="Navbar"], [class*="navbar"], [class*="Nav"] { display: none !important; }
    `}</style>
    <div id="poster" style={ps}>

      {/* L1: Deep dark base */}
      <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,#020408 0%,#0B0F1F 25%,#0A0520 50%,#0F0A22 75%,#020408 100%)"}}/>

      {/* L2: Massive color splashes */}
      <div style={{position:"absolute",top:"-15%",left:"-10%",width:"35in",height:"35in",
        background:"radial-gradient(circle,rgba(139,92,246,.25) 0%,rgba(139,92,246,.05) 40%,transparent 65%)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",top:"20%",right:"-5%",width:"30in",height:"30in",
        background:"radial-gradient(circle,rgba(34,211,238,.2) 0%,rgba(34,211,238,.04) 40%,transparent 60%)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:"-20%",left:"20%",width:"28in",height:"28in",
        background:"radial-gradient(circle,rgba(236,72,153,.18) 0%,rgba(236,72,153,.03) 40%,transparent 60%)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"40in",height:"40in",
        background:"radial-gradient(circle,rgba(34,211,238,.08) 0%,transparent 50%)",pointerEvents:"none"}}/>

      {/* L3: Geometric grid overlay */}
      <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:.12}} viewBox="0 0 960 600" fill="none">
        {/* Grid lines */}
        {Array.from({length:25}).map((_,i)=>(
          <line key={`v${i}`} x1={i*40} y1="0" x2={i*40} y2="600" stroke={C} strokeWidth=".3" opacity=".3"/>
        ))}
        {Array.from({length:16}).map((_,i)=>(
          <line key={`h${i}`} x1="0" y1={i*40} x2="960" y2={i*40} stroke={C} strokeWidth=".3" opacity=".3"/>
        ))}
        {/* Diagonal energy lines */}
        <line x1="0" y1="0" x2="960" y2="600" stroke="rgba(139,92,246,.6)" strokeWidth="1" strokeDasharray="8 12"/>
        <line x1="960" y1="0" x2="0" y2="600" stroke="rgba(236,72,153,.5)" strokeWidth="1" strokeDasharray="8 12"/>
        <line x1="480" y1="0" x2="0" y2="600" stroke={C} strokeWidth=".6" strokeDasharray="6 10" opacity=".4"/>
        <line x1="480" y1="0" x2="960" y2="600" stroke={C} strokeWidth=".6" strokeDasharray="6 10" opacity=".4"/>
        {/* Corner brackets */}
        <path d="M 30 50 L 30 20 L 80 20" stroke={C} strokeWidth="2" fill="none" opacity=".8"/>
        <path d="M 930 50 L 930 20 L 880 20" stroke={C} strokeWidth="2" fill="none" opacity=".8"/>
        <path d="M 30 550 L 30 580 L 80 580" stroke={C} strokeWidth="2" fill="none" opacity=".8"/>
        <path d="M 930 550 L 930 580 L 880 580" stroke={C} strokeWidth="2" fill="none" opacity=".8"/>
        {/* Hexagonal accents */}
        <polygon points="120,300 140,285 160,300 160,320 140,335 120,320" stroke="rgba(139,92,246,.5)" strokeWidth="1" fill="none"/>
        <polygon points="800,300 820,285 840,300 840,320 820,335 800,320" stroke="rgba(236,72,153,.4)" strokeWidth="1" fill="none"/>
        <polygon points="460,80 480,65 500,80 500,100 480,115 460,100" stroke={C} strokeWidth="1" fill="none" opacity=".5"/>
        <polygon points="460,500 480,485 500,500 500,520 480,535 460,520" stroke={C} strokeWidth="1" fill="none" opacity=".5"/>
        {/* Circuit traces */}
        <path d="M 0 300 L 80 300 L 100 280 L 200 280" stroke={C} strokeWidth=".8" opacity=".3"/>
        <path d="M 960 300 L 880 300 L 860 320 L 760 320" stroke={C} strokeWidth=".8" opacity=".3"/>
        <circle cx="200" cy="280" r="3" fill={C} opacity=".5"/>
        <circle cx="760" cy="320" r="3" fill={C} opacity=".5"/>
        {/* Scattered dots */}
        {Array.from({length:40}).map((_,i)=>(
          <circle key={`d${i}`} cx={50 + (i*23)%900} cy={30 + (i*37)%560} r={1 + (i%3)*0.5}
            fill={i%3===0?"rgba(139,92,246,.4)":i%3===1?"rgba(34,211,238,.4)":"rgba(236,72,153,.3)"}/>
        ))}
      </svg>

      {/* L4: Noise texture overlay */}
      <div style={{position:"absolute",inset:0,
        backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
        opacity:.4,pointerEvents:"none"}}/>

      {/* L5: Accent bars top & bottom */}
      <div style={{position:"absolute",top:0,left:0,right:0,height:"6px",
        background:"linear-gradient(90deg,transparent 5%,rgba(139,92,246,.8) 25%,#22D3EE 50%,rgba(236,72,153,.8) 75%,transparent 95%)"}}/>
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:"6px",
        background:"linear-gradient(90deg,transparent 5%,rgba(236,72,153,.8) 25%,#22D3EE 50%,rgba(139,92,246,.8) 75%,transparent 95%)"}}/>

      {/* === FOREGROUND CONTENT — CENTERED === */}
      <div style={{position:"relative",zIndex:10,height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:".5in 1.5in",textAlign:"center"}}>

        {/* Logo */}
        <div style={{position:"relative",marginBottom:".3in"}}>
          <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"20in",height:"20in",
            background:"radial-gradient(circle,rgba(34,211,238,.1),transparent 50%)",pointerEvents:"none"}}/>
          <img src="/logo-transparent.png" alt="QuantLab" style={{width:"10in",height:"10in",objectFit:"contain",position:"relative",zIndex:1,
            filter:"drop-shadow(0 0 40px rgba(34,211,238,.4)) drop-shadow(0 0 80px rgba(139,92,246,.2))"}}/>
        </div>

        {/* Main headline — LARGE */}
        <h1 style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"3.2in",fontWeight:900,color:W,margin:0,lineHeight:.9,
          letterSpacing:"-.04em",textShadow:"0 8px 30px rgba(0,0,0,.9),0 0 80px rgba(34,211,238,.12),0 0 120px rgba(139,92,246,.08)"}}>
          We Build<br/><span style={{background:"linear-gradient(90deg,#8B5CF6,#22D3EE,#EC4899)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>What Others Can&apos;t</span>
        </h1>

        {/* Subtitle */}
        <p style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:".65in",fontWeight:600,color:S,margin:0,marginTop:".4in",
          lineHeight:1.3,letterSpacing:".02em",textShadow:"0 4px 12px rgba(0,0,0,.8)",maxWidth:"30in"}}>
          Custom Software, Automation & AI Systems<br/>for Startups & Growing Businesses
        </p>

        {/* Service tags row */}
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:".3in",marginTop:".6in"}}>
          {SERVICES.map((svc,i)=>(
            <div key={i} style={{
              padding:".15in .45in",
              border:"2px solid rgba(34,211,238,.3)",
              borderRadius:".1in",
              background:"rgba(34,211,238,.05)",
              backdropFilter:"blur(8px)",
            }}>
              <span style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:".38in",fontWeight:600,color:W,letterSpacing:".02em"}}>{svc}</span>
            </div>
          ))}
        </div>

        {/* Bottom row: QR + Contact */}
        <div style={{display:"flex",alignItems:"center",gap:"2in",marginTop:".7in"}}>
          {/* QR */}
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div style={{position:"relative",padding:".25in",background:"rgba(255,255,255,.03)",border:"2px solid rgba(34,211,238,.25)",borderRadius:".12in"}}>
              <BrochureQR url="https://quantlabusa.dev" size="5in" accentColor={C} fgColor="#E2E8F0" label="" sublabel=""/>
            </div>
            <p style={{fontFamily:"'JetBrains Mono',monospace",fontSize:".2in",fontWeight:400,color:"#7A90A8",margin:0,marginTop:".15in",
              letterSpacing:".15em",textTransform:"uppercase"}}>Scan to Book a Call</p>
          </div>
          {/* Contact */}
          <div style={{textAlign:"center"}}>
            <p style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"1.4in",fontWeight:800,color:W,margin:0,
              letterSpacing:".04em",textShadow:"0 6px 20px rgba(0,0,0,.8)"}}>{PHONE}</p>
            <p style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:".8in",fontWeight:700,margin:0,marginTop:".2in",
              letterSpacing:".06em",background:"linear-gradient(90deg,#8B5CF6,#22D3EE)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{WEB}</p>
          </div>
        </div>

      </div>
    </div>
  </>);
}
