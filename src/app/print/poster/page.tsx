"use client";
import BrochureQR from "../BrochureQR";

/* QuantLab Poster — 48×30in Landscape — Sales Asset */
const C = "#22D3EE", CM = "rgba(34,211,238,0.22)", CB = "rgba(34,211,238,0.55)";
const W = "#F0F6FF", S = "#C8D8E8", G = "#7A90A8";
const PHONE = "770-652-1282", WEB = "quantlabusa.dev";

const SERVICES = [
  "Custom Software Platforms", "Website & Web Development",
  "Web & Mobile Applications", "Business Process Automation",
  "API & Backend Integration", "Data Systems & Dashboards",
  "Cloud Infrastructure & AI Workflows",
];

const ps: React.CSSProperties = {
  width: "48in", height: "30in", position: "relative",
  overflow: "hidden", fontFamily: "'Inter',system-ui,sans-serif", color: W, boxSizing: "border-box",
};

export default function PosterPage() {
  return (<>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&display=swap');
      @page { size: 48in 30in; margin: 0; }
      @media print { html,body{margin:0;padding:0;background:#000!important} .so{display:none!important} }
      body{background:#060A12;margin:0}
      .pw{display:flex;flex-direction:column;align-items:center;padding:40px 0;min-height:100vh}
      .pl{font:11px/1 'JetBrains Mono',monospace;color:#3D5066;letter-spacing:.15em;text-transform:uppercase;margin-bottom:12px;text-align:center}
      .sc{width:1200px;height:750px;position:relative;overflow:hidden;border-radius:6px;box-shadow:0 8px 40px rgba(0,0,0,.6)}
      .sc>#poster{transform-origin:top left;transform:scale(${1200/4608})}
    `}</style>
    <div className="pw">
      <p className="pl so">// QuantLab Poster Proof · 48×30in · Landscape</p>
      <div className="sc">
    <div id="poster" style={ps}>

      {/* L1: Base */}
      <div style={{position:"absolute",inset:0,background:"linear-gradient(160deg,#03060B 0%,#0A1020 35%,#070D1A 65%,#040710 100%)"}}/>

      {/* L2: Glows */}
      <div style={{position:"absolute",top:"30%",left:"18%",transform:"translate(-50%,-50%)",width:"22in",height:"22in",
        background:"radial-gradient(circle,rgba(34,211,238,.09) 0%,rgba(34,211,238,.015) 45%,transparent 70%)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:"-2in",right:"5%",width:"16in",height:"16in",
        background:"radial-gradient(circle,rgba(34,211,238,.05) 0%,transparent 60%)",pointerEvents:"none"}}/>

      {/* L3: Schematics */}
      <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:.1}} viewBox="0 0 480 300" fill="none">
        <path d="M 18 35 L 18 12 L 50 12" stroke={C} strokeWidth="1.2" fill="none" opacity=".6"/>
        <path d="M 462 35 L 462 12 L 430 12" stroke={C} strokeWidth="1.2" fill="none" opacity=".6"/>
        <path d="M 18 265 L 18 288 L 50 288" stroke={C} strokeWidth="1.2" fill="none" opacity=".6"/>
        <path d="M 462 265 L 462 288 L 430 288" stroke={C} strokeWidth="1.2" fill="none" opacity=".6"/>
        <rect x="22" y="16" width="436" height="268" rx="3" stroke={C} strokeWidth=".35" strokeDasharray="4 6" opacity=".25"/>
        <line x1="185" y1="0" x2="185" y2="300" stroke={C} strokeWidth=".3" strokeDasharray="2 12" opacity=".2"/>
        <line x1="340" y1="0" x2="340" y2="300" stroke={C} strokeWidth=".3" strokeDasharray="2 12" opacity=".2"/>
        <line x1="0" y1="150" x2="480" y2="150" stroke={C} strokeWidth=".3" strokeDasharray="2 12" opacity=".15"/>
        <path d="M 22 140 L 55 140 L 70 150 L 410 150 L 425 140 L 458 140" stroke={C} strokeWidth=".4" strokeDasharray="3 4" opacity=".3"/>
        <circle cx="70" cy="150" r="1.8" fill={C} opacity=".4"/>
        <circle cx="410" cy="150" r="1.8" fill={C} opacity=".4"/>
        <line x1="170" y1="1" x2="310" y2="1" stroke={C} strokeWidth="1.5" opacity=".5"/>
        <line x1="170" y1="299" x2="310" y2="299" stroke={C} strokeWidth="1.5" opacity=".5"/>
      </svg>

      {/* L4: Watermark */}
      <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"22in",height:"22in",
        opacity:.025,pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img src="/logo-transparent.png" alt="" style={{width:"100%",height:"100%",objectFit:"contain",filter:"blur(2px)"}}/>
      </div>

      {/* Left accent bar */}
      <div style={{position:"absolute",left:0,top:0,bottom:0,width:"4px",
        background:`linear-gradient(180deg,transparent 10%,${CB} 30%,${C} 50%,${CB} 70%,transparent 90%)`}}/>

      {/* === FOREGROUND === */}
      <div style={{position:"relative",zIndex:10,height:"100%",display:"flex",flexDirection:"row",alignItems:"stretch",padding:"1in 1.4in"}}>

        {/* LEFT ZONE */}
        <div style={{flex:"0 0 38%",display:"flex",flexDirection:"column",justifyContent:"center",paddingRight:"1in"}}>
          <div style={{position:"relative",display:"inline-block",marginBottom:".4in",width:"fit-content"}}>
            <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"24in",height:"24in",
              background:"radial-gradient(circle,rgba(34,211,238,.12),transparent 55%)",pointerEvents:"none"}}/>
            <img src="/logo-transparent.png" alt="QuantLab" style={{width:"13.5in",height:"13.5in",objectFit:"contain",position:"relative",zIndex:1,
              filter:"drop-shadow(0 0 20px rgba(34,211,238,.3))"}}/>
          </div>
          <h1 style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"2.2in",fontWeight:900,color:W,margin:0,lineHeight:.95,
            letterSpacing:"-.03em",textShadow:"0 6px 20px rgba(0,0,0,.8),0 0 50px rgba(34,211,238,.08)"}}>
            We Build<br/><span style={{color:C}}>What Others<br/>Can&apos;t</span>
          </h1>
          <p style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:".48in",fontWeight:600,color:S,margin:0,marginTop:".5in",
            lineHeight:1.4,letterSpacing:".01em",textShadow:"0 3px 8px rgba(0,0,0,.7)"}}>
            Custom Software, Automation &amp; AI<br/>Systems for Growing Businesses
          </p>
          <div style={{display:"flex",alignItems:"center",gap:".2in",marginTop:".5in"}}>
            <div style={{height:"1px",width:"1.5in",background:`linear-gradient(90deg,${C},transparent)`}}/>
          </div>
          <p style={{fontFamily:"'JetBrains Mono',monospace",fontSize:".24in",fontWeight:400,color:G,margin:0,marginTop:".25in",
            lineHeight:1.5,letterSpacing:".03em",maxWidth:"15in"}}>
            Built for startups, operators, and service businesses<br/>that need real systems — not templates.
          </p>
        </div>

        {/* CENTER ZONE */}
        <div style={{flex:"0 0 32%",display:"flex",flexDirection:"column",justifyContent:"center",
          borderLeft:`1px solid rgba(34,211,238,.15)`,borderRight:`1px solid rgba(34,211,238,.15)`,padding:"0 1in"}}>
          <p style={{fontFamily:"'JetBrains Mono',monospace",fontSize:".22in",fontWeight:400,color:C,margin:0,marginBottom:".5in",
            letterSpacing:".2em",textTransform:"uppercase",opacity:.8}}>[ What We Build ]</p>
          <div style={{display:"flex",flexDirection:"column",gap:".42in"}}>
            {SERVICES.map((svc,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:".3in"}}>
                <div style={{width:".16in",height:".16in",border:`2px solid ${C}`,transform:"rotate(45deg)",flexShrink:0,
                  boxShadow:`0 0 6px rgba(34,211,238,.35)`}}/>
                <p style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:".52in",fontWeight:600,color:W,margin:0,
                  letterSpacing:".01em",textShadow:"0 2px 4px rgba(0,0,0,.6)"}}>{svc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ZONE */}
        <div style={{flex:"0 0 30%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingLeft:"1in"}}>
          <p style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:".55in",fontWeight:700,color:C,margin:0,marginBottom:".5in",
            letterSpacing:".08em",textTransform:"uppercase",textAlign:"center"}}>
            Scan to Book a<br/>Discovery Call
          </p>
          <div style={{position:"relative",padding:".3in",background:"rgba(255,255,255,.03)",border:`2px solid ${CM}`,borderRadius:".15in"}}>
            {[
              {top:"-2px",left:"-2px",borderTop:`4px solid ${C}`,borderLeft:`4px solid ${C}`,borderRadius:"3px 0 0 0"},
              {top:"-2px",right:"-2px",borderTop:`4px solid ${C}`,borderRight:`4px solid ${C}`,borderRadius:"0 3px 0 0"},
              {bottom:"-2px",left:"-2px",borderBottom:`4px solid ${C}`,borderLeft:`4px solid ${C}`,borderRadius:"0 0 0 3px"},
              {bottom:"-2px",right:"-2px",borderBottom:`4px solid ${C}`,borderRight:`4px solid ${C}`,borderRadius:"0 0 3px 0"},
            ].map((s,i)=>(<div key={i} style={{position:"absolute",width:".4in",height:".4in",...s} as React.CSSProperties}/>))}
            <BrochureQR url="https://quantlabusa.dev" size="7in" accentColor={C} fgColor="#E2E8F0" label="" sublabel=""/>
          </div>
          <div style={{textAlign:"center",marginTop:".7in"}}>
            <p style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:"1.1in",fontWeight:800,color:W,margin:0,
              letterSpacing:".04em",textShadow:"0 4px 12px rgba(0,0,0,.7)"}}>{PHONE}</p>
            <p style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:".65in",fontWeight:700,color:C,margin:0,marginTop:".3in",
              letterSpacing:".06em"}}>{WEB}</p>
          </div>
        </div>

      </div>
    </div>
        </div>
      </div>
  </>);
}
