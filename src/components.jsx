import { useState, useEffect, useRef } from "react";
import {
  RANKS, GLOBAL_RANKS, FACETTES, VOTES_DATA, BOSS_LIST,
  VALEURS_CATEGORIES, PRE_IDENTITES, QUESTIONS_PROGRAMME, KRYOS_PROGRAMME_INTRO,
  PROGRAMMES, selectProgramme, AURELIS, getNextAurele,
  KRYOS_DAILY, getKryosDaily, DIALOGUES, TIERS,
  SAVE_KEY, CYCLE_DAYS, CONTACT_EMAIL, today, load, persist,
  getRank, getNextRank, getGlobalScore, getGlobalRank, getStreak,
  getWeekKey, getCycleDay, isCycleEnd,
} from "./data.js";

export const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Share+Tech+Mono&display=swap');
@keyframes float    {0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
@keyframes floatGem {0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-6px) rotate(.8deg)}}
@keyframes fadeIn   {from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeInFast{from{opacity:0}to{opacity:1}}
@keyframes blink    {0%,100%{opacity:1}50%{opacity:0}}
@keyframes slideR   {from{opacity:0;transform:translateX(18px)}to{opacity:1;transform:translateX(0)}}
@keyframes fadeOut  {to{opacity:0;transform:translateY(-10px)}}
@keyframes pulse    {0%,100%{opacity:.45}50%{opacity:1}}
@keyframes rankUp   {0%{transform:scale(.4);opacity:0}65%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}
@keyframes glowP    {0%,100%{filter:drop-shadow(0 0 8px var(--c))}50%{filter:drop-shadow(0 0 24px var(--c))}}
@keyframes flicker  {0%,89%,91%,94%,100%{opacity:1}90%{opacity:.75}93%{opacity:.9}}
@keyframes xpCount  {0%{transform:scale(.8);opacity:0}60%{transform:scale(1.2)}100%{transform:scale(1);opacity:1}}
@keyframes starPop  {0%{transform:scale(0) rotate(-20deg);opacity:0}70%{transform:scale(1.3) rotate(5deg)}100%{transform:scale(1) rotate(0);opacity:1}}
@keyframes shimmer  {0%{background-position:200% center}100%{background-position:-200% center}}
*{box-sizing:border-box;margin:0;padding:0;}
body{background:#04040f;overflow-x:hidden;}
::-webkit-scrollbar{width:2px;}
::-webkit-scrollbar-thumb{background:#ffffff0e;}
input,textarea{caret-color:#00ffcc;}
input::placeholder,textarea::placeholder{color:rgba(255,255,255,.16);}
`;

export function GemFrog({ color="#00ffcc", size=120, mood="neutral" }) {
  const [blink, setBlink] = useState(false);
  useEffect(() => {
    const t = setInterval(() => { setBlink(true); setTimeout(() => setBlink(false), 140); }, 2800 + Math.random()*1800);
    return () => clearInterval(t);
  }, []);
  const eyeR = blink ? 1 : 8;
  const moods = { neutral:{mouth:"M 52 82 Q 60 88 68 82",py:0}, wise:{mouth:"M 50 81 Q 60 90 70 81",py:-1}, stern:{mouth:"M 52 84 Q 60 80 68 84",py:1}, proud:{mouth:"M 47 79 Q 60 93 73 79",py:-2}, curious:{mouth:"M 54 83 Q 60 89 66 83",py:-1} };
  const m = moods[mood] || moods.neutral;
  const id = color.replace("#","");
  const rgb = color.slice(1).match(/.{2}/g).map(x=>parseInt(x,16)).join(",");
  return (
    <svg viewBox="0 0 120 130" width={size} height={size*1.08}
      style={{filter:`drop-shadow(0 0 16px rgba(${rgb},.55)) drop-shadow(0 0 32px rgba(${rgb},.2))`}}>
      <defs>
        <radialGradient id={`bg${id}`} cx="42%" cy="32%" r="62%">
          <stop offset="0%" stopColor={color} stopOpacity=".88"/><stop offset="45%" stopColor={color} stopOpacity=".55"/><stop offset="100%" stopColor="#060616" stopOpacity=".97"/>
        </radialGradient>
        <radialGradient id={`eg${id}`} cx="32%" cy="28%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity=".95"/><stop offset="55%" stopColor={color} stopOpacity=".6"/><stop offset="100%" stopColor="#000" stopOpacity=".85"/>
        </radialGradient>
        <linearGradient id={`sh${id}`} x1="15%" y1="8%" x2="85%" y2="92%">
          <stop offset="0%" stopColor="white" stopOpacity=".28"/><stop offset="50%" stopColor={color} stopOpacity=".08"/><stop offset="100%" stopColor="black" stopOpacity=".18"/>
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="126" rx="26" ry="4.5" fill={color} opacity=".1"/>
      <ellipse cx="26" cy="104" rx="15" ry="9" fill={`url(#bg${id})`} opacity=".75" transform="rotate(-8 26 104)"/>
      <ellipse cx="94" cy="104" rx="15" ry="9" fill={`url(#bg${id})`} opacity=".75" transform="rotate(8 94 104)"/>
      <ellipse cx="18" cy="113" rx="11" ry="5.5" fill={color} opacity=".45" transform="rotate(-5 18 113)"/>
      <ellipse cx="102" cy="113" rx="11" ry="5.5" fill={color} opacity=".45" transform="rotate(5 102 113)"/>
      <polygon points="60,17 89,32 97,62 89,93 60,107 31,93 23,62 31,32" fill={`url(#bg${id})`}/>
      <polygon points="60,17 89,32 74,54 46,54 31,32" fill={`url(#sh${id})`} opacity=".55"/>
      <line x1="60" y1="17" x2="60" y2="107" stroke={color} strokeWidth=".4" opacity=".18"/>
      <line x1="23" y1="62" x2="97" y2="62" stroke={color} strokeWidth=".4" opacity=".15"/>
      <line x1="31" y1="32" x2="89" y2="93" stroke={color} strokeWidth=".3" opacity=".12"/>
      <line x1="89" y1="32" x2="31" y2="93" stroke={color} strokeWidth=".3" opacity=".12"/>
      <polygon points="60,17 89,32 97,62 89,93 60,107 31,93 23,62 31,32" fill="none" stroke={color} strokeWidth="1.1" opacity=".65"/>
      <ellipse cx="60" cy="70" rx="21" ry="25" fill="rgba(255,255,255,.05)"/>
      <ellipse cx="21" cy="71" rx="8" ry="13" fill={`url(#bg${id})`} opacity=".78" transform="rotate(-14 21 71)"/>
      <ellipse cx="99" cy="71" rx="8" ry="13" fill={`url(#bg${id})`} opacity=".78" transform="rotate(14 99 71)"/>
      <circle cx="15" cy="82" r="5" fill={color} opacity=".5"/>
      <circle cx="105" cy="82" r="5" fill={color} opacity=".5"/>
      <circle cx="42" cy="34" r="13" fill={`url(#bg${id})`}/><circle cx="78" cy="34" r="13" fill={`url(#bg${id})`}/>
      <polygon points="42,21 55,31 55,41 42,47 29,41 29,31" fill="none" stroke={color} strokeWidth=".5" opacity=".35"/>
      <polygon points="78,21 91,31 91,41 78,47 65,41 65,31" fill="none" stroke={color} strokeWidth=".5" opacity=".35"/>
      <circle cx="42" cy="34" r={eyeR} fill={`url(#eg${id})`}/><circle cx="78" cy="34" r={eyeR} fill={`url(#eg${id})`}/>
      {!blink && <><circle cx="42" cy={34+m.py} r="3.5" fill="#000" opacity=".92"/><circle cx="78" cy={34+m.py} r="3.5" fill="#000" opacity=".92"/><circle cx="40.5" cy={32+m.py} r="1.1" fill="white" opacity=".85"/><circle cx="76.5" cy={32+m.py} r="1.1" fill="white" opacity=".85"/></>}
      <circle cx="42" cy="34" r="11" fill="none" stroke={color} strokeWidth=".5" opacity=".45"/><circle cx="78" cy="34" r="11" fill="none" stroke={color} strokeWidth=".5" opacity=".45"/>
      <polygon points="60,23 65.5,29.5 60,36 54.5,29.5" fill={color} opacity=".95" style={{filter:`drop-shadow(0 0 5px ${color})`}}/>
      <line x1="60" y1="23" x2="60" y2="36" stroke="white" strokeWidth=".5" opacity=".5"/>
      <line x1="54.5" y1="29.5" x2="65.5" y2="29.5" stroke="white" strokeWidth=".5" opacity=".5"/>
      <path d={m.mouth} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" opacity=".82"/>
      <circle cx="57" cy="74" r="1.2" fill={color} opacity=".38"/><circle cx="63" cy="74" r="1.2" fill={color} opacity=".38"/>
      {[[16,19],[104,24],[14,96],[106,91],[60,9]].map(([x,y],i)=>(
        <g key={i}><line x1={x-4} y1={y} x2={x+4} y2={y} stroke={color} strokeWidth=".9" opacity=".35"/>
        <line x1={x} y1={y-4} x2={x} y2={y+4} stroke={color} strokeWidth=".9" opacity=".35"/></g>
      ))}
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════
// KRYOS MODAL
// ═══════════════════════════════════════════════════════════
export function KryosModal({ dialogueKey, color="#00ffcc", onClose }) {
  const dialogue = DIALOGUES[dialogueKey];
  const [idx, setIdx] = useState(0);
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);
  const timerRef = useRef(null);
  const line = dialogue?.lines[idx] || "";
  const rgb = color.slice(1).match(/.{2}/g).map(x=>parseInt(x,16)).join(",");
  const total = dialogue?.lines.length || 1;

  useEffect(() => {
    setOut(""); setDone(false);
    let i = 0;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      i++; setOut(line.slice(0,i));
      if (i >= line.length) { clearInterval(timerRef.current); setDone(true); }
    }, 19);
    return () => clearInterval(timerRef.current);
  }, [idx, line]);

  const advance = () => {
    if (!done) { clearInterval(timerRef.current); setOut(line); setDone(true); return; }
    if (idx < total-1) setIdx(i=>i+1); else onClose();
  };

  if (!dialogue) return null;
  return (
    <div onClick={advance} style={{ position:"fixed",inset:0,zIndex:2000,
      display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",
      background:"rgba(2,2,12,.94)", animation:"fadeInFast .22s ease" }}>
      <div style={{ position:"absolute",top:36,left:0,right:0,textAlign:"center" }}>
        <p style={{ color:`rgba(${rgb},.4)`,fontSize:9,fontFamily:"'Orbitron',monospace",letterSpacing:5 }}>{dialogue.title}</p>
      </div>
      <div style={{ position:"absolute",top:36,right:20 }}>
        <p style={{ color:`rgba(${rgb},.22)`,fontSize:9,fontFamily:"'Orbitron',monospace" }}>{idx+1}/{total}</p>
      </div>
      <div style={{ marginBottom:-8,zIndex:1,animation:"float 4s ease-in-out infinite",filter:`drop-shadow(0 24px 40px rgba(${rgb},.22))` }}>
        <GemFrog color={color} size={152} mood={dialogue.mood||"neutral"} />
      </div>
      <div style={{ width:"100%",maxWidth:520,background:`linear-gradient(180deg,rgba(6,6,22,.98) 0%,rgba(4,4,16,1) 100%)`,borderTop:`1px solid rgba(${rgb},.18)`,padding:"26px 22px 44px",position:"relative" }}>
        {[[true,true],[true,false],[false,true],[false,false]].map(([t,l],i)=>(
          <div key={i} style={{ position:"absolute",top:t?9:"auto",bottom:t?"auto":9,left:l?9:"auto",right:l?"auto":9,width:12,height:12,
            borderTop:t?`1px solid rgba(${rgb},.32)`:"none",borderBottom:t?"none":`1px solid rgba(${rgb},.32)`,
            borderLeft:l?`1px solid rgba(${rgb},.32)`:"none",borderRight:l?"none":`1px solid rgba(${rgb},.32)` }}/>
        ))}
        <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:14 }}>
          <div style={{ width:5,height:5,borderRadius:"50%",background:color,boxShadow:`0 0 7px ${color}`,animation:"pulse 2s infinite" }}/>
          <span style={{ color,fontSize:10,fontFamily:"'Orbitron',monospace",letterSpacing:3,textShadow:`0 0 8px ${color}44` }}>KRYOS</span>
          <span style={{ color:`rgba(${rgb},.25)`,fontSize:9,fontFamily:"'Orbitron',monospace" }}>— GARDIEN DES GEMMES</span>
        </div>
        <p style={{ color:"rgba(255,255,255,.82)",fontSize:13.5,lineHeight:1.8,minHeight:78,fontFamily:"'Share Tech Mono',monospace",letterSpacing:.2 }}>
          {out}{!done&&<span style={{color,animation:"blink .65s infinite"}}>█</span>}
        </p>
        <div style={{ display:"flex",gap:4,marginTop:18,justifyContent:"center" }}>
          {dialogue.lines.map((_,i)=>(
            <div key={i} style={{ height:2,borderRadius:1,width:i===idx?18:5,
              background:i<=idx?color:`rgba(${rgb},.16)`,
              boxShadow:i===idx?`0 0 5px ${color}`:"none",transition:"all .3s" }}/>
          ))}
        </div>
        {done&&<p style={{ textAlign:"center",marginTop:12,color:`rgba(${rgb},.32)`,fontSize:8,fontFamily:"'Orbitron',monospace",letterSpacing:3,animation:"pulse 1.5s infinite" }}>
          {idx<total-1?"[ CONTINUER ]":"[ FERMER ]"}
        </p>}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// TOOLTIP & STAT CARD
// ═══════════════════════════════════════════════════════════
export function InfoTip({ text, color="#00ffcc" }) {
  const [show, setShow] = useState(false);
  return (
    <div style={{ position:"relative", display:"inline-flex", alignItems:"center" }}>
      <button
        onClick={e => { e.stopPropagation(); setShow(s => !s); }}
        style={{ width:13, height:13, borderRadius:"50%", background:"rgba(255,255,255,.08)",
          border:`1px solid ${color}44`, color:`${color}88`, fontSize:8,
          fontFamily:"'Orbitron',monospace", cursor:"pointer", lineHeight:1,
          display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
        ?
      </button>
      {show && (
        <div onClick={e=>e.stopPropagation()} style={{ position:"absolute", bottom:"calc(100% + 8px)", left:"50%", transform:"translateX(-50%)",
          background:"rgba(4,4,20,.97)", border:`1px solid ${color}33`,
          borderRadius:6, padding:"10px 12px", width:220, zIndex:500,
          boxShadow:`0 4px 20px rgba(0,0,0,.6)` }}>
          <p style={{ color:"rgba(255,255,255,.65)", fontSize:10, lineHeight:1.6, fontFamily:"'Share Tech Mono',monospace" }}>{text}</p>
          <div style={{ position:"absolute", bottom:-5, left:"50%",
            width:8, height:8, background:"rgba(4,4,20,.97)", border:`1px solid ${color}33`,
            borderBottom:"none", borderRight:"none", transform:"translateX(-50%) rotate(225deg)" }}/>
        </div>
      )}
    </div>
  );
}

export function StatCard({ label, val, color, tip }) {
  return (
    <div style={{ background:"rgba(255,255,255,.03)", border:`1px solid ${color}18`,
      borderRadius:6, padding:"9px 6px", textAlign:"center",
      boxShadow:`inset 0 0 18px ${color}07` }}>
      <div style={{ color, fontSize:17, fontFamily:"'Orbitron',monospace", fontWeight:700,
        textShadow:`0 0 10px ${color}77` }}>{val}</div>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:3, marginTop:2 }}>
        <span style={{ color:"rgba(255,255,255,.18)", fontSize:7, fontFamily:"'Orbitron',monospace", letterSpacing:1 }}>{label}</span>
        {tip && <InfoTip text={tip} color={color}/>}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// 3D GEM CANVAS
// ═══════════════════════════════════════════════════════════
export function Gem3D({ color="#00ffcc", rank="E", size=260 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const S = useRef({ rotY:.4,rotX:.28,tY:.4,tX:.28,drag:false,lx:0,ly:0 });
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = size; canvas.height = size;
    const W=size,H=size;
    const cr=parseInt(color.slice(1,3),16),cg=parseInt(color.slice(3,5),16),cb=parseInt(color.slice(5,7),16);
    const rankRGB={E:[75,85,99],D:[34,197,94],C:[59,130,246],B:[168,85,247],A:[245,158,11],S:[239,68,68],SS:[255,0,255],SSS:[255,255,255]};
    const rc=rankRGB[rank]||rankRGB.E;
    const verts=[
      [0,1.45,0],[0,-1.45,0],
      ...[0,1,2,3,4,5].map(i=>{ const a=i/6*Math.PI*2; return [Math.cos(a)*.95,.72,Math.sin(a)*.95]; }),
      ...[0,1,2,3,4,5].map(i=>{ const a=i/6*Math.PI*2+Math.PI/6; return [Math.cos(a)*1.05,.02,Math.sin(a)*1.05]; }),
      ...[0,1,2,3,4,5].map(i=>{ const a=i/6*Math.PI*2; return [Math.cos(a)*.9,-.68,Math.sin(a)*.9]; }),
    ];
    const faces=[];
    for(let i=0;i<6;i++) faces.push([0,2+i,2+(i+1)%6,.92]);
    for(let i=0;i<6;i++){ faces.push([2+i,8+i,2+(i+1)%6,.76]); faces.push([8+i,8+(i+1)%6,2+(i+1)%6,.62]); }
    for(let i=0;i<6;i++){ faces.push([8+i,14+i,8+(i+1)%6,.52]); faces.push([14+i,14+(i+1)%6,8+(i+1)%6,.42]); }
    for(let i=0;i<6;i++) faces.push([14+i,1,14+(i+1)%6,.32]);
    const proj=(v,rY,rX)=>{
      let[x,y,z]=v;
      const cy2=Math.cos(rX),sy2=Math.sin(rX); const y2=y*cy2-z*sy2,z2=y*sy2+z*cy2; y=y2;z=z2;
      const cy=Math.cos(rY),sy=Math.sin(rY); const x2=x*cy+z*sy,z3=-x*sy+z*cy; x=x2;z=z3;
      const fov=3.4,sc=W*.21; const pz=z+fov;
      return{x:W/2+(x/pz)*sc*fov,y:H/2-(y/pz)*sc*fov,z:z3,d:z};
    };
    const norm=(p1,p2,p3)=>(p2.x-p1.x)*(p3.y-p1.y)-(p2.y-p1.y)*(p3.x-p1.x);
    const lerp=(a,b,t)=>a+(b-a)*t;
    const draw=()=>{
      const s=S.current;
      s.rotY+=(s.tY-s.rotY)*.055; s.rotX+=(s.tX-s.rotX)*.055;
      if(!s.drag) s.tY+=.007;
      ctx.clearRect(0,0,W,H);
      const grd=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W*.5);
      grd.addColorStop(0,`rgba(${cr},${cg},${cb},.07)`); grd.addColorStop(1,"rgba(0,0,0,0)");
      ctx.fillStyle=grd; ctx.fillRect(0,0,W,H);
      const pv=verts.map(v=>proj(v,s.rotY,s.rotX));
      [...faces].map(f=>{ const p1=pv[f[0]],p2=pv[f[1]],p3=pv[f[2]]; return{f,p1,p2,p3,d:(p1.d+p2.d+p3.d)/3}; })
        .sort((a,b)=>a.d-b.d)
        .forEach(({f,p1,p2,p3})=>{
          if(norm(p1,p2,p3)>=0) return;
          const br=f[3],al=.14+br*.58;
          const mr=lerp(cr,rc[0],.28),mg=lerp(cg,rc[1],.28),mb=lerp(cb,rc[2],.28);
          ctx.beginPath(); ctx.moveTo(p1.x,p1.y); ctx.lineTo(p2.x,p2.y); ctx.lineTo(p3.x,p3.y); ctx.closePath();
          const gx=ctx.createLinearGradient(p1.x,p1.y,p3.x,p3.y);
          gx.addColorStop(0,`rgba(${mr},${mg},${mb},${al*1.4})`);
          gx.addColorStop(.5,`rgba(${cr},${cg},${cb},${al*.55})`);
          gx.addColorStop(1,`rgba(${Math.min(cr+35,255)},${Math.min(cg+35,255)},${Math.min(cb+35,255)},${al*.28})`);
          ctx.fillStyle=gx; ctx.fill();
          ctx.strokeStyle=`rgba(${cr},${cg},${cb},${br*.65})`; ctx.lineWidth=.55; ctx.stroke();
          if(br>.7){ const mx=(p1.x+p2.x+p3.x)/3,my=(p1.y+p2.y+p3.y)/3;
            const sg=ctx.createRadialGradient(mx-5,my-5,0,mx,my,16);
            sg.addColorStop(0,`rgba(255,255,255,${br*.38})`); sg.addColorStop(1,"rgba(255,255,255,0)");
            ctx.fillStyle=sg; ctx.fill(); }
        });
      const ring=ctx.createRadialGradient(W/2,H/2,W*.28,W/2,H/2,W*.52);
      ring.addColorStop(0,"rgba(0,0,0,0)"); ring.addColorStop(.7,`rgba(${cr},${cg},${cb},.035)`); ring.addColorStop(1,`rgba(${cr},${cg},${cb},.1)`);
      ctx.fillStyle=ring; ctx.fillRect(0,0,W,H);
      rafRef.current=requestAnimationFrame(draw);
    };
    draw();
    const gp=e=>e.touches?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:e.clientX,y:e.clientY};
    const dn=e=>{ S.current.drag=true; const p=gp(e); S.current.lx=p.x; S.current.ly=p.y; };
    const mv=e=>{ if(!S.current.drag) return; const p=gp(e);
      S.current.tY+=(p.x-S.current.lx)*.011; S.current.tX+=(p.y-S.current.ly)*.008;
      S.current.tX=Math.max(-.75,Math.min(.75,S.current.tX)); S.current.lx=p.x; S.current.ly=p.y; };
    const up=()=>{ S.current.drag=false; };
    canvas.addEventListener("mousedown",dn); canvas.addEventListener("touchstart",dn,{passive:true});
    window.addEventListener("mousemove",mv); window.addEventListener("touchmove",mv,{passive:true});
    window.addEventListener("mouseup",up); window.addEventListener("touchend",up);
    return ()=>{ cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mousedown",dn); canvas.removeEventListener("touchstart",dn);
      window.removeEventListener("mousemove",mv); window.removeEventListener("touchmove",mv);
      window.removeEventListener("mouseup",up); window.removeEventListener("touchend",up); };
  }, [color, rank, size]);
  return <canvas ref={canvasRef} style={{ display:"block",cursor:"grab",filter:`drop-shadow(0 0 28px rgba(${color.slice(1).match(/.{2}/g).map(x=>parseInt(x,16)).join(",")},0.38))` }}/>;
}

// ═══════════════════════════════════════════════════════════
// FACETTE HUD
// ═══════════════════════════════════════════════════════════
export function FacetteHUD({ f, fRank, fXP, streak, identite, joursFaits, kryosDaily }) {
  const next = getNext(fXP);
  const pct = next ? (fXP-fRank.minXP)/(next.minXP-fRank.minXP)*100 : 100;
  return (
    <div style={{ position:"relative",width:"100%",overflow:"hidden" }}>

      <div style={{ position:"relative",zIndex:1,textAlign:"center",padding:"36px 0 16px" }}>
        <div style={{ fontSize:68,lineHeight:1,"--c":f.color,animation:"glowP 3s ease-in-out infinite",
          filter:`drop-shadow(0 0 18px ${f.color}) drop-shadow(0 0 36px ${f.color}44)` }}>{f.icon}</div>
        <div style={{ marginTop:10,color:f.color,fontFamily:"'Orbitron',monospace",fontSize:19,fontWeight:900,letterSpacing:4,
          textShadow:`0 0 18px ${f.color},0 0 36px ${f.color}44` }}>{f.label.toUpperCase()}</div>
        <div style={{ color:"rgba(255,255,255,.28)",fontSize:10,fontFamily:"'Orbitron',monospace",letterSpacing:2,marginTop:4 }}>{identite}</div>
      </div>
      <div style={{ display:"flex",justifyContent:"center",marginBottom:14,position:"relative",zIndex:1 }}>
        <div style={{ display:"inline-flex",alignItems:"center",gap:10,padding:"7px 18px",
          background:`rgba(${fRank.rgb},.1)`,border:`1px solid ${fRank.color}44`,borderRadius:4,
          boxShadow:`0 0 16px ${fRank.color}18` }}>
          <span style={{ color:fRank.color,fontSize:20,fontFamily:"'Orbitron',monospace",fontWeight:900,textShadow:`0 0 10px ${fRank.color}` }}>{fRank.id}</span>
          <div><div style={{ color:fRank.color,fontSize:10,fontFamily:"'Orbitron',monospace",letterSpacing:2 }}>{fRank.title.toUpperCase()}</div>
          <div style={{ color:"rgba(255,255,255,.18)",fontSize:9,fontFamily:"'Orbitron',monospace" }}>RANG {fRank.id}</div></div>
        </div>
      </div>
      <div style={{ padding:"0 22px",marginBottom:18,position:"relative",zIndex:1 }}>
        <div style={{ display:"flex",justifyContent:"space-between",marginBottom:5 }}>
          <span style={{ color:"rgba(255,255,255,.25)",fontSize:9,fontFamily:"'Orbitron',monospace",letterSpacing:2 }}>EXPERIENCE</span>
          <span style={{ color:f.color,fontSize:9,fontFamily:"'Orbitron',monospace" }}>{fXP} / {next?.minXP||800} XP</span>
        </div>
        <div style={{ position:"relative",height:5,background:"rgba(255,255,255,.05)",borderRadius:3,overflow:"hidden" }}>
          <div style={{ position:"absolute",inset:0,background:`linear-gradient(90deg,rgba(${f.rgb},.25),transparent)` }}/>
          <div style={{ height:"100%",width:`${pct}%`,background:`linear-gradient(90deg,${f.color}77,${f.color})`,
            boxShadow:`0 0 10px ${f.color},0 0 20px ${f.color}55`,borderRadius:3,transition:"width 1s ease",position:"relative" }}>
            <div style={{ position:"absolute",right:0,top:0,bottom:0,width:2,background:"white",opacity:.85,boxShadow:"0 0 5px white" }}/>
          </div>
        </div>
        {next&&<div style={{ textAlign:"right",marginTop:4,color:"rgba(255,255,255,.14)",fontSize:8,fontFamily:"'Orbitron',monospace" }}>{next.minXP-fXP} XP → RANG {next.id}</div>}
      </div>
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:7,padding:"0 18px",marginBottom:14,position:"relative",zIndex:1 }}>
        {[
          {label:f.stat,val:Math.min(fXP,999),color:f.color,tip:`${f.stat} — Score de progression de la facette ${f.label}. Augmente avec chaque vote.`},
          {label:"STREAK",val:`${streak}${streak>0?"🔥":""}`,color:"#f59e0b",tip:"STREAK — Jours consécutifs votés. Se remet à zéro si tu sautes une journée. Le completion effect rend la rupture inconfortable."},
          {label:"JOURS",val:joursFaits,color:"#a78bfa",tip:"JOURS — Nombre total de journées validées sur 90. Chaque jour ancre un peu plus l'identité."},
        ].map(({label,val,color,tip})=>(
          <StatCard key={label} label={label} val={val} color={color} tip={tip}/>
        ))}
      </div>
      {/* Timeline 90j */}
      <div style={{padding:"0 18px",marginBottom:11,position:"relative",zIndex:1}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:5,alignItems:"center"}}>
          <span style={{color:"rgba(255,255,255,.2)",fontSize:8,fontFamily:"'Orbitron',monospace",letterSpacing:2}}>PARCOURS 90 JOURS</span>
          <span style={{color:joursFaits<30?"#22c55e":joursFaits<60?"#3b82f6":"#a855f7",fontSize:8,fontFamily:"'Orbitron',monospace"}}>
            {joursFaits<30?"INITIATION":joursFaits<60?"INTÉGRATION":"MAÎTRISE"} · J{joursFaits}
          </span>
        </div>
        <div style={{position:"relative",height:7,background:"rgba(255,255,255,.04)",borderRadius:4,overflow:"hidden"}}>
          <div style={{position:"absolute",left:0,top:0,bottom:0,width:"33.3%",background:"rgba(34,197,94,.08)",borderRight:"1px solid rgba(34,197,94,.15)"}}/>
          <div style={{position:"absolute",left:"33.3%",top:0,bottom:0,width:"33.3%",background:"rgba(59,130,246,.08)",borderRight:"1px solid rgba(59,130,246,.15)"}}/>
          <div style={{position:"absolute",left:"66.6%",top:0,bottom:0,width:"33.4%",background:"rgba(168,85,247,.08)"}}/>
          <div style={{height:"100%",width:`${Math.min(joursFaits/90*100,100)}%`,background:"linear-gradient(90deg,#22c55e,#3b82f6,#a855f7)",borderRadius:4,transition:"width 1s ease",position:"relative"}}>
            <div style={{position:"absolute",right:0,top:0,bottom:0,width:2,background:"white",opacity:.9,boxShadow:"0 0 4px white"}}/>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:3}}>
          {[["INITIATION","#22c55e"],["INTÉGRATION","#3b82f6"],["MAÎTRISE","#a855f7"]].map(([l,col])=>(<span key={l} style={{color:`${col}55`,fontSize:7,fontFamily:"'Orbitron',monospace"}}>{l}</span>))}
        </div>
      </div>

      {/* Kryos daily thought */}
      {kryosDaily && (
        <div style={{margin:"0 18px 10px",padding:"9px 11px",background:"rgba(167,139,250,.05)",border:"1px solid rgba(167,139,250,.12)",borderRadius:6,position:"relative",zIndex:1}}>
          <div style={{display:"flex",gap:7,alignItems:"flex-start"}}>
            <div style={{flexShrink:0}}><GemFrog color="#a78bfa" size={20} mood="wise"/></div>
            <p style={{color:"rgba(255,255,255,.4)",fontSize:10,lineHeight:1.6,fontFamily:"'Share Tech Mono',monospace",fontStyle:"italic"}}>"{kryosDaily}"</p>
          </div>
        </div>
      )}

      <div style={{ position:"absolute",inset:0,pointerEvents:"none",zIndex:2,
        background:`linear-gradient(transparent 0%,${f.color}03 50%,transparent 100%)`,backgroundSize:"100% 5px",animation:"flicker 8s infinite" }}/>
      {[[true,true],[true,false],[false,true],[false,false]].map(([t,l],i)=>(
        <div key={i} style={{ position:"absolute",top:t?10:"auto",bottom:t?"auto":10,left:l?10:"auto",right:l?"auto":10,
          width:14,height:14,pointerEvents:"none",zIndex:3,
          borderTop:t?`1px solid ${f.color}44`:"none",borderBottom:t?"none":`1px solid ${f.color}44`,
          borderLeft:l?`1px solid ${f.color}44`:"none",borderRight:l?"none":`1px solid ${f.color}44` }}/>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// NOTIFS
// ═══════════════════════════════════════════════════════════
export function XPNotif({ xp, onDone }) {
  useEffect(()=>{ const t=setTimeout(onDone,2200); return()=>clearTimeout(t); },[]);
  return <div style={{ position:"fixed",top:66,right:14,zIndex:999,background:"rgba(0,255,100,.1)",border:"1px solid #00ff6430",borderRadius:5,padding:"7px 14px",color:"#00ff64",fontFamily:"'Orbitron',monospace",fontSize:14,fontWeight:700,animation:"slideR .3s ease, fadeOut .3s ease 1.9s forwards" }}>+{xp} XP</div>;
}
export function RankNotif({ rank, onDone }) {
  useEffect(()=>{ const t=setTimeout(onDone,3400); return()=>clearTimeout(t); },[]);
  return (
    <div style={{ position:"fixed",inset:0,zIndex:1900,background:"rgba(0,0,0,.9)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",animation:"fadeInFast .3s ease" }}>
      <p style={{ color:rank.color,fontSize:9,fontFamily:"'Orbitron',monospace",letterSpacing:5,marginBottom:12,animation:"pulse 1s infinite" }}>RANG SUPÉRIEUR DÉBLOQUÉ</p>
      <div style={{ fontSize:88,fontFamily:"'Orbitron',monospace",fontWeight:900,color:rank.color,textShadow:`0 0 50px ${rank.color},0 0 100px ${rank.color}33`,animation:"rankUp .5s ease" }}>{rank.id}</div>
      <p style={{ color:"rgba(255,255,255,.35)",fontSize:13,marginTop:12,fontFamily:"'Orbitron',monospace" }}>{rank.title.toUpperCase()}</p>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// CORRELATION CHART
// ═══════════════════════════════════════════════════════════
export function CorrelationChart({ histoire }) {
  const days = Array.from({length:14},(_,i)=>{
    const d=new Date(); d.setDate(d.getDate()-(13-i));
    const k=d.toISOString().split("T")[0]; const j=histoire[k]||{};
    return{day:d.toLocaleDateString("fr-FR",{weekday:"short"}).slice(0,2),energie:j.energie||0,votes:Object.values(j.votes||{}).filter(Boolean).length,sommeil:j.sommeil?1:0};
  });
  const maxVotes=Math.max(...days.map(d=>d.votes),5);
  return(
    <div style={{background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.06)",borderRadius:8,padding:"12px 14px"}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:10,alignItems:"center"}}>
        <p style={{color:"rgba(255,255,255,.2)",fontSize:8,letterSpacing:3,fontFamily:"'Orbitron',monospace"}}>SOMMEIL → ÉNERGIE → VOTES</p>
        <InfoTip text="Corrélation entre ton sommeil (point bleu), ton énergie et tes votes. Vert=énergie haute, jaune=moyenne, orange=basse. La colle invisible en action." color="#60a5fa"/>
      </div>
      <div style={{display:"flex",alignItems:"flex-end",gap:3,height:60}}>
        {days.map((d,i)=>(
          <div key={i} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
            <div style={{width:"100%",borderRadius:2,height:d.votes>0?`${(d.votes/maxVotes)*50}px`:"3px",
              background:d.energie>=7?"#00ff64":d.energie>=4?"#ffd700":d.votes>0?"#f97316":"rgba(255,255,255,.05)",
              alignSelf:"flex-end",minHeight:3,position:"relative",transition:"height .5s ease"}}>
              {d.sommeil>0&&<div style={{position:"absolute",top:-5,left:"50%",transform:"translateX(-50%)",width:4,height:4,borderRadius:"50%",background:"#60a5fa",boxShadow:"0 0 4px #60a5fa"}}/>}
            </div>
            <span style={{color:"rgba(255,255,255,.18)",fontSize:7,fontFamily:"'Orbitron',monospace"}}>{d.day}</span>
          </div>
        ))}
      </div>
      <div style={{display:"flex",gap:10,marginTop:8,justifyContent:"center",flexWrap:"wrap"}}>
        {[["#60a5fa","Sommeil ●"],["#00ff64","Énergie haute"],["#ffd700","Moy."],["#f97316","Basse"]].map(([col,l])=>(
          <div key={l} style={{display:"flex",alignItems:"center",gap:3}}><div style={{width:6,height:6,borderRadius:"50%",background:col}}/><span style={{color:"rgba(255,255,255,.2)",fontSize:7,fontFamily:"'Orbitron',monospace"}}>{l}</span></div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PROFILE SCREEN
// ═══════════════════════════════════════════════════════════
export function ProfileScreen({ state, onKryos }) {
  const { nom,valeurs,facetteId,facettesState={},xp } = state;
  const rank=getRank(xp||0); const next=getNext(xp||0);
  const f=FACETTES.find(fc=>fc.id===facetteId);
  const streak=getStreak(state.histoire||{});
  const joursFaits=Object.keys(state.histoire||{}).length;
  return (
    <div style={{ paddingBottom:20 }}>
      <div style={{ textAlign:"center",padding:"22px 0 6px",position:"relative" }}>
        <div style={{ display:"inline-block",animation:"floatGem 5s ease-in-out infinite" }}>
          <Gem3D color={f?.color||"#00ffcc"} rank={rank.id} size={230}/>
        </div>
        <div style={{ position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:185,height:185,borderRadius:"50%",background:`radial-gradient(circle,${f?.color||"#00ffcc"}15 0%,transparent 70%)`,pointerEvents:"none" }}/>
      </div>
      <div style={{ textAlign:"center",padding:"0 20px 18px" }}>
        <p style={{ color:"#fff",fontFamily:"'Orbitron',monospace",fontSize:17,letterSpacing:4,marginBottom:3 }}>{nom}</p>
        <p style={{ color:"rgba(255,255,255,.18)",fontSize:9,fontFamily:"'Orbitron',monospace" }}>{(valeurs||[]).join(" · ")}</p>
      </div>
      {/* Gemme globale — score based on A/S facettes */}
      {(() => {
        const gRank = getGlobalRank(facettesState);
        const gNext = getNextGlobalRank(facettesState);
        const gScore = getGlobalScore(facettesState);
        const isSSS = gRank.id === "SSS";
        return (
          <div style={{ margin:"0 16px 11px", background:`rgba(${gRank.rgb},.07)`, border:`1px solid ${gRank.color}22`, borderRadius:8, padding:"13px 16px",
            boxShadow: gRank.id==="SSS" ? "0 0 30px rgba(255,255,255,.15), 0 0 60px rgba(255,255,255,.05)" : gRank.id==="SS" ? `0 0 20px rgba(255,0,255,.12)` : "none" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
              <div>
                <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:3 }}>
                  <p style={{ color:"rgba(255,255,255,.2)", fontSize:8, letterSpacing:3, fontFamily:"'Orbitron',monospace" }}>GEMME GLOBALE</p>
                  <InfoTip text="GEMME GLOBALE — Rang calculé selon tes facettes. Chaque facette Rang A = +1pt, Rang S = +2pts. Atteins SSS en maîtrisant toutes les facettes." color={gRank.color}/>
                </div>
                <p style={{ color:gRank.color, fontSize:13, fontFamily:"'Orbitron',monospace", fontWeight:700, textShadow:`0 0 10px ${gRank.color}` }}>
                  {gRank.title.toUpperCase()}
                </p>
              </div>
              <div style={{ fontSize:gRank.id.length>1?24:34, fontFamily:"'Orbitron',monospace", fontWeight:900, color:gRank.color,
                textShadow: isSSS ? "0 0 30px #fff, 0 0 60px #fff" : `0 0 22px ${gRank.color}`,
                animation: isSSS ? "pulse .8s infinite" : "none" }}>{gRank.id}</div>
            </div>
            <div style={{ background:"rgba(255,255,255,.05)", borderRadius:2, height:3, overflow:"hidden" }}>
              <div style={{ height:"100%", width:gNext?`${(gScore-gRank.minScore)/(gNext.minScore-gRank.minScore)*100}%`:"100%",
                background: isSSS ? "linear-gradient(90deg,#fff8,#fff)" : `linear-gradient(90deg,${gRank.color}55,${gRank.color})`,
                boxShadow:`0 0 7px ${gRank.color}`, borderRadius:2, transition:"width 1s ease" }}/>
            </div>
            {gNext && <p style={{ color:"rgba(255,255,255,.18)", fontSize:9, marginTop:5, fontFamily:"'Orbitron',monospace" }}>
              Score {gScore}/{gNext.minScore} → {gNext.id} {gNext.title}
            </p>}
            {!gNext && <p style={{ color:gRank.color, fontSize:9, marginTop:5, fontFamily:"'Orbitron',monospace", animation:"pulse 2s infinite" }}>
              ✦ RANG MAXIMUM ATTEINT — TOUTES LES FACETTES MAÎTRISÉES
            </p>}
          </div>
        );
      })()}
      <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:7,margin:"0 16px 11px" }}>
        {[
          {val:state.totalVotes||0,label:"VOTES",c:"#00ffcc",tip:"VOTES — Total de votes accomplis depuis le début. 100 votes = identité ancrée."},
          {val:streak,label:"STREAK",c:"#f59e0b",tip:"STREAK — Jours consécutifs sans interruption. Se remet à zéro si tu sautes une journée."},
          {val:joursFaits,label:"JOURS",c:"#a78bfa",tip:"JOURS — Nombre de journées validées sur 90. Objectif : 90 jours = cycle complet."},
        ].map(({val,label,c,tip})=>(
          <div key={label} style={{ background:"rgba(255,255,255,.02)",border:`1px solid ${c}16`,borderRadius:8,padding:"10px 6px",textAlign:"center",position:"relative" }}>
            <div style={{ color:c,fontSize:19,fontFamily:"'Orbitron',monospace",fontWeight:700,textShadow:`0 0 10px ${c}55` }}>{val}{label==="STREAK"&&val>0?"🔥":""}</div>
            <div style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:3,marginTop:2 }}>
              <span style={{ color:"rgba(255,255,255,.16)",fontSize:7,letterSpacing:2,fontFamily:"'Orbitron',monospace" }}>{label}</span>
              <InfoTip text={tip} color={c}/>
            </div>
          </div>
        ))}
      </div>
      <div style={{ margin:"0 16px",background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.05)",borderRadius:8,padding:"13px 14px" }}>
        <p style={{ color:"rgba(255,255,255,.18)",fontSize:8,letterSpacing:3,fontFamily:"'Orbitron',monospace",marginBottom:11 }}>TOUTES LES FACETTES</p>
        {FACETTES.map(fc=>{
          const fcs=(facettesState)[fc.id]||{xp:0}; const fcR=getRank(fcs.xp||0); const isAct=fc.id===facetteId;
          return (
            <div key={fc.id} style={{ display:"flex",alignItems:"center",gap:9,padding:"6px 9px",borderRadius:4,background:isAct?`${fc.color}07`:"transparent",border:`1px solid ${isAct?fc.color+"15":"rgba(255,255,255,.03)"}`,marginBottom:5 }}>
              <span style={{ color:isAct?fc.color:`${fc.color}44`,fontSize:13,minWidth:20 }}>{fc.icon}</span>
              <span style={{ color:isAct?fc.color:"rgba(255,255,255,.25)",fontSize:9,fontFamily:"'Orbitron',monospace",flex:1 }}>{fc.label}</span>
              <div style={{ width:55,height:2,background:"rgba(255,255,255,.05)",borderRadius:1,overflow:"hidden" }}>
                <div style={{ height:"100%",width:`${Math.min((fcs.xp||0)/800*100,100)}%`,background:fc.color,boxShadow:`0 0 4px ${fc.color}`,borderRadius:1,transition:"width 1s ease" }}/>
              </div>
              <span style={{ color:fcR.id==="E"?"rgba(255,255,255,.15)":fcR.color,fontSize:8,fontFamily:"'Orbitron',monospace",minWidth:11 }}>{fcR.id}</span>
              {isAct&&<span style={{ color:fc.color,fontSize:7,fontFamily:"'Orbitron',monospace" }}>●</span>}
            </div>
          );
        })}
      </div>
      <div style={{margin:"0 16px 11px"}}><CorrelationChart histoire={state.histoire||{}}/></div>
      {/* Kryos button */}
      <button onClick={()=>onKryos("daily_start")} style={{ display:"flex",alignItems:"center",gap:10,margin:"14px 16px 0",padding:"11px 14px",width:"calc(100% - 32px)",background:"rgba(255,255,255,.02)",border:"1px solid rgba(0,255,200,.1)",borderRadius:8,cursor:"pointer",transition:"all .2s" }}>
        <GemFrog color="#00ffcc" size={28} mood="curious"/>
        <span style={{ color:"rgba(255,255,255,.35)",fontSize:10,fontFamily:"'Orbitron',monospace" }}>Parler à Kryos</span>
        <span style={{ color:"rgba(0,255,200,.3)",fontSize:9,marginLeft:"auto",fontFamily:"'Orbitron',monospace" }}>→</span>
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// VOTES SCREEN
// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
// PROGRAMME DU JOUR — sous-onglet VOTES
// ═══════════════════════════════════════════════════════════
export function ProgrammeJour({ state, onCheck }) {
  const { programmeIA, facetteId, progJour={}, cycleStart } = state;
  const f = FACETTES.find(fc => fc.id === facetteId);
  const template = PROGRAMME_TEMPLATE[facetteId] || PROGRAMME_TEMPLATE.athlete;
  const programme = programmeIA || { sport: template.sport, habitudes: template.habitudes, planning: template.emploi_du_temps };

  const cycleDay = getCycleDay(cycleStart);
  const todayKey = today();
  const todayChecks = progJour[todayKey] || {};

  // Get today's planning entry
  const jours = ["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"];
  const jourIdx = new Date().getDay();
  const jourLabel = jours[jourIdx];
  const planningToday = (programme.planning||[]).find(p => p.startsWith(jourLabel+":") || p.toLowerCase().includes(jours[jourIdx].toLowerCase()));

  // Build checklist: sport items + habitudes
  const items = [
    ...(programme.sport||[]).map((s,i) => ({ id:`sport_${i}`, label:s, cat:"SPORT", icon:"⚡" })),
    ...(programme.habitudes||[]).map((h,i) => ({ id:`hab_${i}`, label:h, cat:"HABIT", icon:"🔥" })),
  ];

  const doneCount = items.filter(it => todayChecks[it.id]).length;
  const pct = items.length > 0 ? Math.round(doneCount / items.length * 100) : 0;

  const handleCheck = (id) => {
    const newChecks = { ...todayChecks, [id]: !todayChecks[id] };
    const newPct = Math.round(Object.values(newChecks).filter(Boolean).length / items.length * 100);
    onCheck(todayKey, newChecks, newPct);
  };

  return (
    <div>
      {/* Cycle progress */}
      <div style={{ background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.05)",borderRadius:8,padding:"10px 13px",marginBottom:12 }}>
        <div style={{ display:"flex",justifyContent:"space-between",marginBottom:6 }}>
          <span style={{ color:"rgba(255,255,255,.2)",fontSize:8,fontFamily:"'Orbitron',monospace",letterSpacing:2 }}>CYCLE {state.cycleNum||1} — JOUR {cycleDay}/{CYCLE_DAYS}</span>
          <span style={{ color:f?.color,fontSize:8,fontFamily:"'Orbitron',monospace" }}>{pct}% aujourd'hui</span>
        </div>
        <div style={{ height:3,background:"rgba(255,255,255,.05)",borderRadius:2 }}>
          <div style={{ height:"100%",width:`${cycleDay/CYCLE_DAYS*100}%`,background:`linear-gradient(90deg,${f?.color}77,${f?.color})`,borderRadius:2,transition:"width .5s" }}/>
        </div>
        {planningToday && (
          <p style={{ color:"rgba(255,255,255,.25)",fontSize:9,fontFamily:"'Share Tech Mono',monospace",marginTop:6,lineHeight:1.5 }}>
            📅 {planningToday}
          </p>
        )}
      </div>

      {/* Today completion */}
      <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8 }}>
        <span style={{ color:"rgba(255,255,255,.2)",fontSize:8,fontFamily:"'Orbitron',monospace",letterSpacing:2 }}>SÉANCES DU JOUR</span>
        <span style={{ color:pct===100?"#00ff64":f?.color,fontSize:10,fontFamily:"'Orbitron',monospace",fontWeight:700 }}>
          {doneCount}/{items.length} {pct===100?"✓":""}
        </span>
      </div>

      {/* Checklist */}
      <div style={{ display:"flex",flexDirection:"column",gap:6,marginBottom:14 }}>
        {items.map(item => {
          const done = todayChecks[item.id];
          return (
            <button key={item.id} onClick={() => handleCheck(item.id)}
              style={{ display:"flex",alignItems:"center",gap:10,padding:"10px 13px",
                background:done?`${f?.color}0e`:"rgba(255,255,255,.02)",
                border:`1px solid ${done?f?.color+"33":"rgba(255,255,255,.06)"}`,
                borderRadius:6,cursor:"pointer",transition:"all .15s",textAlign:"left" }}>
              <div style={{ width:18,height:18,borderRadius:4,border:`1.5px solid ${done?f?.color:"rgba(255,255,255,.15)"}`,
                background:done?`${f?.color}22`:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                {done && <span style={{ color:f?.color,fontSize:11,fontWeight:900 }}>✓</span>}
              </div>
              <div style={{ flex:1 }}>
                <p style={{ color:done?"rgba(255,255,255,.6)":"rgba(255,255,255,.35)",fontSize:10,fontFamily:"'Share Tech Mono',monospace",
                  textDecoration:done?"line-through":"none",transition:"all .15s",lineHeight:1.4 }}>{item.label}</p>
                <span style={{ color:`${f?.color}55`,fontSize:7,fontFamily:"'Orbitron',monospace",letterSpacing:1 }}>{item.cat}</span>
              </div>
            </button>
          );
        })}
      </div>

      {pct===100 && (
        <div style={{ textAlign:"center",padding:"10px",background:"rgba(0,255,100,.05)",border:"1px solid rgba(0,255,100,.15)",borderRadius:6,animation:"fadeIn .4s ease" }}>
          <p style={{ color:"#00ff64",fontSize:9,fontFamily:"'Orbitron',monospace",letterSpacing:3 }}>✦ PROGRAMME COMPLÉTÉ AUJOURD'HUI</p>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// BILAN CYCLE — écran fin de cycle
// ═══════════════════════════════════════════════════════════
export function BilanCycleScreen({ state, bilan, onNextCycle, onClose }) {
  const f = FACETTES.find(fc => fc.id === state.facetteId);
  const rank = getRank(state.xp||0);
  const joursFaits = Object.keys(state.histoire||{}).length;
  const streak = getStreak(state.histoire||{});
  const tier = state.tier||"gratuit";
  const [phase, setPhase] = useState("cinematique"); // cinematique | stats | bilan | cta
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(0);

  // Animate score
  useEffect(() => {
    if (phase !== "stats") return;
    const target = bilan?.score || Math.round((joursFaits/CYCLE_DAYS*40) + (streak/CYCLE_DAYS*30));
    let current = 0;
    const step = target / 60;
    const t = setInterval(() => {
      current = Math.min(current + step, target);
      setShowScore(Math.round(current));
      if (current >= target) clearInterval(t);
    }, 24);
    return () => clearInterval(t);
  }, [phase]);

  // Entries for charts
  const entries = Object.entries(state.histoire||{}).slice(-CYCLE_DAYS);
  const progEntries = Object.values(state.histoire||{});
  const avgCompletion = progEntries.filter(j=>j.prog).length > 0
    ? Math.round(progEntries.filter(j=>j.prog).reduce((a,j)=>a+(j.prog?.pct||0),0)/progEntries.filter(j=>j.prog).length)
    : 0;

  const color = f?.color || "#00ffcc";
  const rgb = f?.rgb || "0,255,204";

  // ── CINÉMATIQUE ──
  if (phase === "cinematique") return (
    <div style={{ position:"fixed",inset:0,zIndex:2500,background:"#000",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",animation:"fadeInFast .5s ease" }}>
      <div style={{ textAlign:"center" }}>
        <p style={{ color:`rgba(${rgb},.3)`,fontSize:9,fontFamily:"'Orbitron',monospace",letterSpacing:6,marginBottom:20,animation:"pulse 2s infinite" }}>
          CYCLE {state.cycleNum||1} — TERMINÉ
        </p>
        <div style={{ fontSize:96,marginBottom:16,animation:"float 3s ease-in-out infinite",
          filter:`drop-shadow(0 0 40px ${color}) drop-shadow(0 0 80px ${color}44)` }}>
          {f?.icon}
        </div>
        <div style={{ color:rank.color,fontSize:64,fontFamily:"'Orbitron',monospace",fontWeight:900,
          textShadow:`0 0 40px ${rank.color},0 0 80px ${rank.color}44`,animation:"rankUp .6s ease .3s both" }}>
          {rank.id}
        </div>
        <p style={{ color:"rgba(255,255,255,.3)",fontSize:13,fontFamily:"'Orbitron',monospace",letterSpacing:3,marginTop:8 }}>
          {rank.title.toUpperCase()}
        </p>
        <p style={{ color:`rgba(${rgb},.4)`,fontSize:11,fontFamily:"'Share Tech Mono',monospace",marginTop:20,fontStyle:"italic" }}>
          "{bilan?.verdict || "Le cycle est tracé dans la pierre."}"
        </p>
      </div>
      <button onClick={()=>setPhase("stats")}
        style={{ position:"absolute",bottom:50,left:"50%",transform:"translateX(-50%)",
          padding:"12px 32px",background:`rgba(${rgb},.08)`,border:`1px solid rgba(${rgb},.3)`,
          borderRadius:4,color,fontFamily:"'Orbitron',monospace",fontSize:10,letterSpacing:3,cursor:"pointer",animation:"pulse 2s infinite" }}>
        VOIR LE BILAN →
      </button>
    </div>
  );

  // ── STATS ──
  if (phase === "stats") return (
    <div style={{ position:"fixed",inset:0,zIndex:2500,background:"rgba(2,2,12,.98)",overflowY:"auto",animation:"fadeInFast .3s ease" }}>
      <div style={{ maxWidth:520,margin:"0 auto",padding:"28px 18px 80px" }}>
        <p style={{ color:`rgba(${rgb},.3)`,fontSize:8,letterSpacing:4,fontFamily:"'Orbitron',monospace",marginBottom:6 }}>
          CYCLE {state.cycleNum||1} · {CYCLE_DAYS} JOURS
        </p>
        <h2 style={{ color,fontFamily:"'Orbitron',monospace",fontSize:18,marginBottom:20 }}>
          {bilan?.titre || "BILAN DE CYCLE"}
        </h2>

        {/* Score global */}
        <div style={{ textAlign:"center",marginBottom:24,padding:"20px",background:`rgba(${rgb},.04)`,border:`1px solid rgba(${rgb},.12)`,borderRadius:10 }}>
          <p style={{ color:"rgba(255,255,255,.2)",fontSize:8,fontFamily:"'Orbitron',monospace",letterSpacing:3,marginBottom:8 }}>SCORE CYCLE</p>
          <div style={{ color,fontSize:68,fontFamily:"'Orbitron',monospace",fontWeight:900,
            textShadow:`0 0 30px ${color}`,animation:"xpCount .5s ease" }}>{showScore}</div>
          <div style={{ height:4,background:"rgba(255,255,255,.05)",borderRadius:2,marginTop:12 }}>
            <div style={{ height:"100%",width:`${Math.min(showScore,100)}%`,background:`linear-gradient(90deg,${color}77,${color})`,borderRadius:2,transition:"width 1.5s ease" }}/>
          </div>
        </div>

        {/* Stats grid */}
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:20 }}>
          {[
            { label:"JOURS ACTIFS", val:`${joursFaits}/${CYCLE_DAYS}`, color:"#22c55e" },
            { label:"STREAK MAX", val:`${streak}j`, color:"#f59e0b" },
            { label:"XP GAGNÉ", val:state.xp||0, color },
            { label:"PROGRAMME", val:`${avgCompletion}%`, color:"#a78bfa" },
          ].map(({label,val,color:c})=>(
            <div key={label} style={{ background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.06)",borderRadius:8,padding:"12px",textAlign:"center" }}>
              <div style={{ color:c,fontSize:22,fontFamily:"'Orbitron',monospace",fontWeight:700 }}>{val}</div>
              <div style={{ color:"rgba(255,255,255,.2)",fontSize:7,fontFamily:"'Orbitron',monospace",letterSpacing:1,marginTop:3 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Mini bar chart — activité 15j */}
        <div style={{ marginBottom:20 }}>
          <p style={{ color:"rgba(255,255,255,.18)",fontSize:8,fontFamily:"'Orbitron',monospace",letterSpacing:2,marginBottom:8 }}>ACTIVITÉ — 15 DERNIERS JOURS</p>
          <div style={{ display:"flex",gap:3,alignItems:"flex-end",height:50 }}>
            {Array.from({length:CYCLE_DAYS},(_,i)=>{
              const d = new Date(); d.setDate(d.getDate()-(CYCLE_DAYS-1-i));
              const key = d.toISOString().split("T")[0];
              const entry = state.histoire?.[key];
              const votes = entry ? Object.values(entry.votes||{}).filter(Boolean).length : 0;
              const h = entry ? Math.max(8, votes/5*100) : 4;
              return (
                <div key={i} style={{ flex:1,height:`${h}%`,background:entry?color:`rgba(${rgb},.1)`,borderRadius:2,transition:"height .5s ease",
                  boxShadow:entry?`0 0 4px ${color}44`:""}}/>
              );
            })}
          </div>
        </div>

        {/* Kryos analyse */}
        {bilan?.analyse && (
          <div style={{ background:`rgba(${rgb},.04)`,border:`1px solid rgba(${rgb},.12)`,borderRadius:8,padding:"14px 16px",marginBottom:14 }}>
            <div style={{ display:"flex",gap:8,alignItems:"flex-start",marginBottom:10 }}>
              <GemFrog color={color} size={28} mood="wise"/>
              <p style={{ color:"rgba(255,255,255,.25)",fontSize:8,fontFamily:"'Orbitron',monospace",letterSpacing:2 }}>ANALYSE KRYOS</p>
            </div>
            <p style={{ color:"rgba(255,255,255,.55)",fontSize:11,fontFamily:"'Share Tech Mono',monospace",lineHeight:1.7,marginBottom:10 }}>{bilan.analyse}</p>
            <div style={{ display:"flex",flexDirection:"column",gap:8 }}>
              <div style={{ padding:"8px 10px",background:"rgba(0,255,100,.04)",border:"1px solid rgba(0,255,100,.12)",borderRadius:5 }}>
                <p style={{ color:"#00ff6488",fontSize:7,fontFamily:"'Orbitron',monospace",letterSpacing:2,marginBottom:3 }}>VICTOIRE DU CYCLE</p>
                <p style={{ color:"rgba(255,255,255,.45)",fontSize:10,fontFamily:"'Share Tech Mono',monospace" }}>{bilan.victoire}</p>
              </div>
              <div style={{ padding:"8px 10px",background:"rgba(239,68,68,.04)",border:"1px solid rgba(239,68,68,.12)",borderRadius:5 }}>
                <p style={{ color:"#ef444488",fontSize:7,fontFamily:"'Orbitron',monospace",letterSpacing:2,marginBottom:3 }}>CHANTIER CYCLE 2</p>
                <p style={{ color:"rgba(255,255,255,.45)",fontSize:10,fontFamily:"'Share Tech Mono',monospace" }}>{bilan.chantier}</p>
              </div>
            </div>
            {bilan.message_kryos && (
              <p style={{ color:`rgba(${rgb},.45)`,fontSize:10,fontFamily:"'Share Tech Mono',monospace",fontStyle:"italic",marginTop:10,borderTop:`1px solid rgba(${rgb},.08)`,paddingTop:10 }}>
                "{bilan.message_kryos}"
              </p>
            )}
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop:20 }}>
          <p style={{ color:"rgba(255,255,255,.18)",fontSize:9,fontFamily:"'Orbitron',monospace",letterSpacing:3,textAlign:"center",marginBottom:12 }}>
            CYCLE {(state.cycleNum||1)+1}
          </p>
          {tier==="gratuit" ? (
            <div>
              <div style={{ padding:"14px",background:"rgba(255,215,0,.04)",border:"1px solid rgba(255,215,0,.15)",borderRadius:8,marginBottom:10,textAlign:"center" }}>
                <span style={{ fontSize:20,display:"block",marginBottom:6 }}>🔒</span>
                <p style={{ color:"#ffd70077",fontSize:9,fontFamily:"'Orbitron',monospace",letterSpacing:2,marginBottom:6 }}>CYCLE 2 — RÉSERVÉ AUX MEMBRES</p>
                <p style={{ color:"rgba(255,255,255,.25)",fontSize:10,fontFamily:"'Share Tech Mono',monospace",lineHeight:1.6 }}>
                  Programme adapté à ta progression. Kryos analyse ton cycle 1 et repose les bonnes questions.
                </p>
              </div>
              <a href="mailto:kouchamehdi1@gmail.com?subject=Gem Vitale — Plan Façonné&body=Bonjour, je viens de terminer mon Cycle 1 et je souhaite passer au plan Façonné pour continuer."
                style={{ display:"block",padding:"13px",background:`rgba(${rgb},.07)`,border:`1px solid rgba(${rgb},.25)`,
                  borderRadius:6,color,fontFamily:"'Orbitron',monospace",fontSize:10,letterSpacing:3,textDecoration:"none",textAlign:"center" }}>
                ✦ PASSER AU PLAN FAÇONNÉ →
              </a>
            </div>
          ) : (
            <button onClick={onNextCycle}
              style={{ width:"100%",padding:"14px",background:`rgba(${rgb},.08)`,border:`1px solid rgba(${rgb},.3)`,
                borderRadius:6,color,fontFamily:"'Orbitron',monospace",fontSize:10,letterSpacing:3,cursor:"pointer" }}>
              ✦ DÉMARRER LE CYCLE {(state.cycleNum||1)+1} →
            </button>
          )}
          <button onClick={onClose} style={{ width:"100%",marginTop:8,padding:"10px",background:"none",border:"none",
            color:"rgba(255,255,255,.2)",fontFamily:"'Orbitron',monospace",fontSize:8,cursor:"pointer",letterSpacing:2 }}>
            FERMER
          </button>
        </div>
      </div>
    </div>
  );

  return null;
}

export function VotesScreen({ state, onVote, onSommeil, onEnergie, onAurele, onAureleAnswer, onBoss, onDayClose, onProgCheck }) {
  const { facetteId,xp,votesJour={},sommeilJour,energieJour,aureleJour,aureleAnswer,bossJour } = state;
  const f=FACETTES.find(fc=>fc.id===facetteId);
  const vData=VOTES_DATA[facetteId]||[];
  const doneCount=Object.values(votesJour).filter(Boolean).length;
  const xpToday=vData.filter(v=>votesJour[v.label]).reduce((a,v)=>a+v.xp,0)+(sommeilJour?10:0)+(bossJour?50:0);
  const boss=BOSS_LIST[new Date().getDate()%BOSS_LIST.length];
  const [showAns,setShowAns]=useState(false);
  const [ansText,setAnsText]=useState(aureleAnswer||"");
  const [votesTab,setVotesTab]=useState("aujourd_hui");
  const hasProgramme = !!(state.programmeIA || PROGRAMME_TEMPLATE[facetteId]);
  return (
    <div style={{ padding:"12px 16px 0" }}>
      {/* Sub-tabs */}
      {hasProgramme && (
        <div style={{ display:"flex",gap:5,marginBottom:13 }}>
          {[{id:"aujourd_hui",label:"AUJOURD'HUI",icon:"⚔"},{id:"programme",label:"PROGRAMME DU JOUR",icon:"📋"}].map(t=>(
            <button key={t.id} onClick={()=>setVotesTab(t.id)}
              style={{ flex:1,padding:"7px",borderRadius:4,cursor:"pointer",transition:"all .15s",
                background:votesTab===t.id?`${f?.color}14`:"rgba(255,255,255,.02)",
                border:`1px solid ${votesTab===t.id?f?.color+"33":"rgba(255,255,255,.05)"}`,
                color:votesTab===t.id?f?.color:"rgba(255,255,255,.2)",
                fontSize:8,fontFamily:"'Orbitron',monospace",letterSpacing:1 }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>
      )}
      {votesTab==="programme" && hasProgramme && (
        <ProgrammeJour state={state} onCheck={onProgCheck}/>
      )}
      {votesTab==="aujourd_hui" && <div>
      <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(0,255,100,.05)",border:"1px solid rgba(0,255,100,.1)",borderRadius:6,padding:"9px 14px",marginBottom:13 }}>
        <span style={{ color:"rgba(255,255,255,.28)",fontSize:9,fontFamily:"'Orbitron',monospace",letterSpacing:2 }}>XP AUJOURD'HUI</span>
        <span style={{ color:"#00ff64",fontSize:17,fontFamily:"'Orbitron',monospace",fontWeight:700,textShadow:"0 0 12px #00ff6477" }}>+{xpToday}</span>
      </div>
      {/* Boss */}
      <div style={{ background:bossJour?"rgba(239,68,68,.08)":"rgba(239,68,68,.03)",border:`1px solid ${bossJour?"#ef444444":"rgba(239,68,68,.14)"}`,borderRadius:8,padding:"10px 13px",marginBottom:9 }}>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
          <div style={{flex:1}}><p style={{ color:"#ef4444",fontSize:9,fontFamily:"'Orbitron',monospace",marginBottom:3 }}>⚔ BOSS HEBDO</p><p style={{ color:"rgba(255,255,255,.32)",fontSize:11 }}>{boss}</p></div>
          <div style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:3,marginLeft:10 }}>
            <span style={{ color:"#ef444455",fontSize:8,fontFamily:"'Orbitron',monospace" }}>+50 XP</span>
            <button onClick={onBoss} style={{ padding:"5px 10px",borderRadius:3,background:bossJour?"rgba(239,68,68,.18)":"rgba(255,255,255,.03)",border:`1px solid ${bossJour?"#ef4444":"rgba(239,68,68,.18)"}`,color:bossJour?"#ef4444":"rgba(255,255,255,.22)",fontSize:9,cursor:"pointer",fontFamily:"'Orbitron',monospace",transition:"all .2s" }}>{bossJour?"✓":"RELEVER"}</button>
          </div>
        </div>
      </div>
      {/* Sommeil + Energie */}
      <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:9 }}>
        <button onClick={onSommeil} style={{ padding:"10px 10px",textAlign:"left",background:sommeilJour?"rgba(96,165,250,.07)":"rgba(255,255,255,.02)",border:`1px solid ${sommeilJour?"#60a5fa33":"rgba(96,165,250,.1)"}`,borderRadius:8,cursor:"pointer",transition:"all .2s" }}>
          <p style={{ color:"#60a5fa",fontSize:9,fontFamily:"'Orbitron',monospace",marginBottom:3 }}>🌙 SOMMEIL</p>
          <p style={{ color:sommeilJour?"#60a5fa":"rgba(255,255,255,.22)",fontSize:11,fontFamily:"'Orbitron',monospace" }}>{sommeilJour?"✓ +10xp":"+ LOG"}</p>
        </button>
        <div style={{ padding:"10px 10px",background:"rgba(255,213,0,.03)",border:"1px solid rgba(255,213,0,.1)",borderRadius:8 }}>
          <p style={{ color:"#ffd700",fontSize:9,fontFamily:"'Orbitron',monospace",marginBottom:5 }}>✦ ÉNERGIE</p>
          <div style={{ display:"flex",gap:2 }}>
            {[1,2,3,4,5,6,7,8,9,10].map(n=>(
              <button key={n} onClick={()=>onEnergie(n)} style={{ flex:1,height:13,borderRadius:1,background:(energieJour||0)>=n?n>=8?"#00ff64":n>=5?"#ffd700":"#f97316":"rgba(255,255,255,.05)",border:"none",cursor:"pointer",transition:"all .15s" }}/>
            ))}
          </div>
        </div>
      </div>
      {/* Aurele */}
      <div style={{ background:aureleJour?"rgba(167,139,250,.07)":"rgba(167,139,250,.03)",border:`1px solid ${aureleJour?"#a78bfa2e":"rgba(167,139,250,.09)"}`,borderRadius:8,padding:"10px 13px",marginBottom:13 }}>
        <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start" }}>
          <div style={{flex:1}}>
            <p style={{ color:"#a78bfa",fontSize:9,fontFamily:"'Orbitron',monospace",marginBottom:4 }}>◎ AURÈLE</p>
            {aureleJour?(<>
              <p style={{ color:"rgba(167,139,250,.65)",fontSize:11,fontStyle:"italic",lineHeight:1.55,marginBottom:aureleAnswer?3:5 }}>"{aureleJour}"</p>
              {aureleAnswer&&!showAns&&<p style={{ color:"rgba(255,255,255,.28)",fontSize:10 }}>→ {aureleAnswer}</p>}
              {!aureleAnswer&&!showAns&&<button onClick={()=>setShowAns(true)} style={{ color:"#a78bfa55",fontSize:8,background:"none",border:"1px solid rgba(167,139,250,.14)",padding:"3px 8px",borderRadius:3,cursor:"pointer",fontFamily:"'Orbitron',monospace" }}>+ RÉPONDRE</button>}
              {showAns&&<div style={{marginTop:6}}><textarea value={ansText} onChange={e=>setAnsText(e.target.value)} rows={2} placeholder="Ta réflexion..." style={{ width:"100%",padding:"6px 9px",background:"rgba(167,139,250,.05)",border:"1px solid rgba(167,139,250,.18)",borderRadius:3,color:"#a78bfa",resize:"none",fontSize:10,fontFamily:"'Orbitron',monospace",outline:"none" }}/><button onClick={()=>{onAureleAnswer(ansText);setShowAns(false);}} style={{ marginTop:5,padding:"4px 10px",background:"rgba(167,139,250,.1)",border:"1px solid #a78bfa33",color:"#a78bfa",fontSize:9,cursor:"pointer",fontFamily:"'Orbitron',monospace",borderRadius:3 }}>SAUVER</button></div>}
            </>):<p style={{ color:"rgba(255,255,255,.18)",fontSize:10 }}>Question interne du jour</p>}
          </div>
          {!aureleJour&&<button onClick={onAurele} style={{ padding:"5px 10px",borderRadius:3,background:"rgba(255,255,255,.02)",border:"1px solid rgba(167,139,250,.16)",color:"rgba(255,255,255,.2)",fontSize:9,cursor:"pointer",fontFamily:"'Orbitron',monospace" }}>+ RÉVÉLER</button>}
        </div>
      </div>
      {/* Votes */}
      <div style={{ background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.05)",borderRadius:8,padding:"12px 13px" }}>
        <div style={{ display:"flex",justifyContent:"space-between",marginBottom:10 }}>
          <p style={{ color:"rgba(255,255,255,.18)",fontSize:8,letterSpacing:3,fontFamily:"'Orbitron',monospace" }}>{f?.icon} VOTES ACTIFS</p>
          <span style={{ color:f?.color,fontSize:8,fontFamily:"'Orbitron',monospace" }}>{doneCount}/{vData.length}</span>
        </div>
        <div style={{ display:"flex",flexDirection:"column",gap:6 }}>
          {vData.map(v=>{
            const done=!!votesJour[v.label];
            return (
              <button key={v.label} onClick={()=>onVote(v)} style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"9px 11px",background:done?`${f?.color}0c`:"rgba(255,255,255,.02)",border:`1px solid ${done?f?.color+"2a":"rgba(255,255,255,.04)"}`,borderRadius:4,cursor:"pointer",transition:"all .2s",boxShadow:done?`inset 0 0 18px ${f?.color}07`:"none" }}>
                <div style={{ display:"flex",alignItems:"center",gap:9 }}><span style={{fontSize:12}}>{v.icon}</span><span style={{ color:done?f?.color:"rgba(255,255,255,.38)",fontSize:11,fontFamily:"'Orbitron',monospace" }}>{v.label}</span></div>
                <div style={{ display:"flex",alignItems:"center",gap:7 }}>
                  <span style={{ color:"#00ff6430",fontSize:8,fontFamily:"'Orbitron',monospace" }}>+{v.xp}</span>
                  <div style={{ width:13,height:13,borderRadius:"50%",border:`1.5px solid ${done?f?.color:"rgba(255,255,255,.1)"}`,background:done?f?.color:"transparent",display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s",boxShadow:done?`0 0 7px ${f?.color}`:"none" }}>
                    {done&&<span style={{color:"#000",fontSize:7}}>✓</span>}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      </div>}
      <div style={{padding:"0 16px 16px"}}>
        <button onClick={onDayClose} style={{width:"100%",marginTop:14,padding:"13px",background:"rgba(167,139,250,.08)",border:"1px solid rgba(167,139,250,.3)",borderRadius:6,color:"#a78bfa",fontFamily:"'Orbitron',monospace",fontSize:10,letterSpacing:3,cursor:"pointer",transition:"all .2s"}}>✦ SCELLER LA JOURNÉE</button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// QUESTS SCREEN
// ═══════════════════════════════════════════════════════════
export function QuestsScreen({ state, onChangeFacette, onKryos }) {
  const { totalVotes,xp,histoire={},facetteId,facettesState={},votesJour={} } = state;
  const joursFaits=Object.keys(histoire).length; const streak=getStreak(histoire);
  const fcs=facettesState[facetteId]||{xp:0}; const fRank=getRank(fcs.xp||0);
  const [showSwitch,setShowSwitch]=useState(false);
  const ach=[
    {label:"Premier Souffle",    desc:"Premier vote accompli",           done:(totalVotes||0)>=1,  xpR:10, icon:"🌱", kryos:"first_vote"},
    {label:"Triplé",             desc:"3 votes en une journée",          done:Object.values(votesJour).filter(Boolean).length>=3, xpR:20, icon:"⚡"},
    {label:"3 Jours",            desc:"Streak de 3 jours",              done:streak>=3,           xpR:30, icon:"🔥", kryos:"streak_3"},
    {label:"Semaine Forgée",     desc:"7 jours validés",                done:joursFaits>=7,       xpR:50, icon:"⚔", kryos:"streak_7"},
    {label:"Rang D",             desc:"50 XP atteint",                  done:(xp||0)>=50,         xpR:0,  icon:"🟢", kryos:"rank_D"},
    {label:"Boss Terrassé",      desc:"Vaincre un boss hebdo",          done:!!(state.bossJour),  xpR:0,  icon:"💀", kryos:"boss_defeated"},
    {label:"50 Votes",           desc:"Masse critique",                 done:(totalVotes||0)>=50, xpR:80, icon:"💎", kryos:"votes_50"},
    {label:"Rang C",             desc:"150 XP atteint",                 done:(xp||0)>=150,        xpR:0,  icon:"🔵", kryos:"rank_C"},
    {label:"30 Jours",           desc:"Un mois de discipline",          done:joursFaits>=30,      xpR:100,icon:"🌕"},
    {label:"Rang B",             desc:"300 XP atteint",                 done:(xp||0)>=300,        xpR:0,  icon:"🟣", kryos:"rank_B"},
    {label:"Aurèle x5",          desc:"5 réflexions Aurèle",           done:Object.values(histoire).filter(j=>j.aureleAnswer).length>=5, xpR:40,icon:"◎",kryos:"aurelis_answered"},
    {label:"100 Votes",          desc:"Identité ancrée",                done:(totalVotes||0)>=100,xpR:150,icon:"✦",kryos:"votes_100"},
    {label:"Streak 30j",         desc:"30 jours consécutifs",           done:streak>=30,          xpR:200,icon:"🌋"},
    {label:"Rang A",             desc:"500 XP atteint",                 done:(xp||0)>=500,        xpR:0,  icon:"🟡",kryos:"rank_A"},
    {label:"Facette Transcendée",desc:"Rang S sur la facette",          done:fRank.id==="S",      xpR:300,icon:"👑",kryos:"rank_S"},
    {label:"90 Jours — Maître",  desc:"Mission complète",              done:joursFaits>=90,      xpR:500,icon:"🏆"},
  ];
  const done=ach.filter(a=>a.done).length;
  return (
    <div style={{ padding:"12px 16px 0" }}>
      <div style={{ display:"flex",justifyContent:"space-between",marginBottom:7 }}>
        <span style={{ color:"rgba(255,255,255,.18)",fontSize:8,fontFamily:"'Orbitron',monospace",letterSpacing:2 }}>ACHIEVEMENTS {done}/{ach.length}</span>
        <span style={{ color:"#00ffcc",fontSize:8,fontFamily:"'Orbitron',monospace" }}>{Math.round(done/ach.length*100)}%</span>
      </div>
      <div style={{ background:"rgba(255,255,255,.04)",borderRadius:2,height:2,overflow:"hidden",marginBottom:14 }}>
        <div style={{ height:"100%",width:`${done/ach.length*100}%`,background:"linear-gradient(90deg,#00ffcc33,#00ffcc)",borderRadius:2,transition:"width 1s ease" }}/>
      </div>
      {fRank.id==="S"&&(
        <div style={{ background:"rgba(239,68,68,.07)",border:"1px solid rgba(239,68,68,.22)",borderRadius:8,padding:"12px 13px",marginBottom:13,animation:"pulse 2s infinite" }}>
          <p style={{ color:"#ef4444",fontSize:11,fontFamily:"'Orbitron',monospace",marginBottom:4 }}>👑 FACETTE TRANSCENDÉE</p>
          <p style={{ color:"rgba(255,255,255,.32)",fontSize:10,marginBottom:10 }}>Rang S atteint. Active une nouvelle facette.</p>
          {!showSwitch?<button onClick={()=>setShowSwitch(true)} style={{ padding:"8px 13px",background:"rgba(239,68,68,.12)",border:"1px solid #ef444455",borderRadius:4,color:"#ef4444",fontSize:9,cursor:"pointer",fontFamily:"'Orbitron',monospace",letterSpacing:2 }}>CHOISIR →</button>
          :<div style={{ display:"flex",flexDirection:"column",gap:6 }}>
            {FACETTES.filter(fc=>fc.id!==facetteId).map(fc=>(
              <button key={fc.id} onClick={()=>{onChangeFacette(fc.id);setShowSwitch(false);}} style={{ display:"flex",alignItems:"center",gap:11,padding:"9px 12px",background:`${fc.color}07`,border:`1px solid ${fc.color}2a`,borderRadius:4,cursor:"pointer",transition:"all .2s" }}>
                <span style={{color:fc.color,fontSize:15}}>{fc.icon}</span>
                <span style={{color:fc.color,fontSize:10,fontFamily:"'Orbitron',monospace"}}>{fc.label}</span>
                <span style={{color:"rgba(255,255,255,.18)",fontSize:8,marginLeft:"auto"}}>{getRank((facettesState[fc.id]||{xp:0}).xp).id}</span>
              </button>
            ))}
          </div>}
        </div>
      )}
      <div style={{ display:"flex",flexDirection:"column",gap:6 }}>
        {ach.map((a,i)=>(
          <div key={i} style={{ display:"flex",alignItems:"center",gap:10,padding:"10px 11px",background:a.done?"rgba(0,255,200,.04)":"rgba(255,255,255,.02)",border:`1px solid ${a.done?"rgba(0,255,200,.15)":"rgba(255,255,255,.04)"}`,borderRadius:6,opacity:a.done?1:.4,transition:"all .3s" }}>
            <div style={{ width:27,height:27,borderRadius:"50%",flexShrink:0,background:a.done?"rgba(0,255,200,.1)":"rgba(255,255,255,.03)",border:`1px solid ${a.done?"rgba(0,255,200,.22)":"rgba(255,255,255,.06)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,boxShadow:a.done?"0 0 10px rgba(0,255,200,.15)":"none" }}>{a.icon}</div>
            <div style={{flex:1}}>
              <p style={{ color:a.done?"#00ffcc":"rgba(255,255,255,.3)",fontSize:10,fontFamily:"'Orbitron',monospace",marginBottom:2 }}>{a.label}</p>
              <p style={{ color:"rgba(255,255,255,.16)",fontSize:9 }}>{a.desc}</p>
            </div>
            <div style={{ display:"flex",alignItems:"center",gap:6 }}>
              {a.xpR>0&&<span style={{ color:a.done?"#00ff64":"rgba(255,255,255,.1)",fontSize:8,fontFamily:"'Orbitron',monospace" }}>+{a.xpR}</span>}
              {a.done&&a.kryos&&<button onClick={()=>onKryos(a.kryos)} style={{ background:"none",border:"none",cursor:"pointer",fontSize:14,opacity:.6 }} title="Kryos a quelque chose à dire"><GemFrog color="#00ffcc" size={20} mood="curious"/></button>}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop:14,background:"rgba(167,139,250,.03)",border:"1px solid rgba(167,139,250,.08)",borderRadius:8,padding:"12px 13px" }}>
        <p style={{ color:"#a78bfa55",fontSize:8,letterSpacing:3,fontFamily:"'Orbitron',monospace",marginBottom:9 }}>◎ JOURNAL AURÈLE</p>
        {Object.entries(histoire).filter(([,j])=>j.aurele||j.aureleAnswer).slice(-4).reverse().map(([d,j])=>(
          <div key={d} style={{ marginBottom:8,paddingBottom:8,borderBottom:"1px solid rgba(255,255,255,.03)" }}>
            <p style={{ color:"rgba(255,255,255,.16)",fontSize:8,fontFamily:"'Orbitron',monospace",marginBottom:3 }}>{new Date(d).toLocaleDateString("fr-FR",{day:"numeric",month:"short"})}</p>
            {j.aurele&&<p style={{ color:"rgba(167,139,250,.5)",fontSize:10,fontStyle:"italic",marginBottom:2 }}>"{j.aurele}"</p>}
            {j.aureleAnswer&&<p style={{ color:"rgba(255,255,255,.28)",fontSize:10 }}>→ {j.aureleAnswer}</p>}
          </div>
        ))}
        {Object.values(histoire).filter(j=>j.aurele||j.aureleAnswer).length===0&&<p style={{ color:"rgba(255,255,255,.1)",fontSize:10 }}>Aucune entrée.</p>}
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// DAY CLOSE MODAL
// ═══════════════════════════════════════════════════════════
export function DayCloseModal({ state, onClose, onKryos }) {
  const f=FACETTES.find(fc=>fc.id===state.facetteId);
  const vData=VOTES_DATA[state.facetteId]||[];
  const votes=state.votesJour||{};
  const doneVotes=vData.filter(v=>votes[v.label]);
  const xpToday=doneVotes.reduce((a,v)=>a+v.xp,0)+(state.sommeilJour?10:0)+(state.bossJour?50:0);
  const streak=getStreak(state.histoire||{});
  const pct=Math.round(doneVotes.length/vData.length*100);
  return(
    <div style={{position:"fixed",inset:0,zIndex:1500,background:"rgba(2,2,12,.96)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24,animation:"fadeInFast .3s ease"}}>
      <div style={{maxWidth:380,width:"100%",textAlign:"center"}}>
        <div style={{fontSize:28,marginBottom:14,letterSpacing:8}}>{pct>=80?"✦✦✦":pct>=50?"✦✦◇":"✦◇◇"}</div>
        <p style={{color:f?.color,fontFamily:"'Orbitron',monospace",fontSize:11,letterSpacing:4,marginBottom:5}}>JOURNÉE SCELLÉE</p>
        <p style={{color:"rgba(255,255,255,.18)",fontSize:9,fontFamily:"'Orbitron',monospace",letterSpacing:2,marginBottom:20}}>
          {new Date().toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"}).toUpperCase()}
        </p>
        <div style={{background:"rgba(0,255,100,.07)",border:"1px solid rgba(0,255,100,.15)",borderRadius:8,padding:"12px",marginBottom:14}}>
          <div style={{color:"#00ff64",fontSize:30,fontFamily:"'Orbitron',monospace",fontWeight:900,textShadow:"0 0 20px #00ff64",marginBottom:3}}>+{xpToday} XP</div>
          <p style={{color:"rgba(255,255,255,.3)",fontSize:9,fontFamily:"'Orbitron',monospace"}}>GAGNÉS AUJOURD'HUI</p>
        </div>
        <div style={{background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.07)",borderRadius:8,padding:"10px",marginBottom:12,textAlign:"left"}}>
          <p style={{color:"rgba(255,255,255,.2)",fontSize:8,letterSpacing:3,fontFamily:"'Orbitron',monospace",marginBottom:8}}>VOTES</p>
          <div style={{display:"flex",flexDirection:"column",gap:4}}>
            {vData.map(v=>{const done=!!votes[v.label];return<div key={v.label} style={{display:"flex",alignItems:"center",gap:7}}>
              <div style={{width:11,height:11,borderRadius:"50%",background:done?f?.color:"rgba(255,255,255,.08)",border:`1px solid ${done?f?.color:"rgba(255,255,255,.1)"}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>{done&&<span style={{color:"#000",fontSize:7}}>✓</span>}</div>
              <span style={{color:done?f?.color:"rgba(255,255,255,.22)",fontSize:10,fontFamily:"'Orbitron',monospace"}}>{v.label}</span>
              {done&&<span style={{color:"#00ff6444",fontSize:8,marginLeft:"auto",fontFamily:"'Orbitron',monospace"}}>+{v.xp}</span>}
            </div>;})}
          </div>
        </div>
        {streak>0&&<div style={{background:"rgba(245,158,11,.07)",border:"1px solid rgba(245,158,11,.2)",borderRadius:6,padding:"7px 12px",marginBottom:14,display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
          <span style={{fontSize:16}}>🔥</span><span style={{color:"#f59e0b",fontSize:12,fontFamily:"'Orbitron',monospace",fontWeight:700}}>STREAK {streak} JOURS</span>
        </div>}
        <div style={{display:"flex",gap:8}}>
          <button onClick={()=>{onKryos("day_close");onClose();}} style={{flex:1,padding:"11px",background:"rgba(167,139,250,.1)",border:"1px solid rgba(167,139,250,.3)",borderRadius:6,color:"#a78bfa",fontFamily:"'Orbitron',monospace",fontSize:9,letterSpacing:2,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
            <GemFrog color="#a78bfa" size={16} mood="wise"/> KRYOS
          </button>
          <button onClick={onClose} style={{flex:2,padding:"11px",background:`${f?.color}12`,border:`1px solid ${f?.color}44`,borderRadius:6,color:f?.color,fontFamily:"'Orbitron',monospace",fontSize:9,letterSpacing:3,cursor:"pointer"}}>CONTINUER →</button>
        </div>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// FEEDBACK SCREEN
// ═══════════════════════════════════════════════════════════
export function FeedbackScreen({ state, onSubmit }) {
  const [rating,setRating]=useState(0);
  const [text,setText]=useState("");
  const [cat,setCat]=useState("general");
  const [sent,setSent]=useState(false);
  const f=FACETTES.find(fc=>fc.id===state.facetteId);
  const cats=[{id:"general",l:"Général"},{id:"ux",l:"Interface"},{id:"concept",l:"Concept"},{id:"bug",l:"Bug"},{id:"idee",l:"Idée"}];
  const submit=()=>{if(!text.trim())return;onSubmit({rating,text,cat,facetteId:state.facetteId,jour:Object.keys(state.histoire||{}).length,rang:getRank(state.xp||0).id,date:today()});setSent(true);};
  if(sent) return(
    <div style={{padding:"40px 20px",textAlign:"center"}}>
      <div style={{animation:"float 3s ease-in-out infinite",marginBottom:16}}><GemFrog color={f?.color||"#00ffcc"} size={70} mood="proud"/></div>
      <p style={{color:f?.color||"#00ffcc",fontFamily:"'Orbitron',monospace",fontSize:13,letterSpacing:3,marginBottom:7}}>FEEDBACK REÇU</p>
      <p style={{color:"rgba(255,255,255,.3)",fontSize:11,fontFamily:"'Share Tech Mono',monospace",lineHeight:1.6}}>Merci. Chaque retour améliore le protocole pour tout le monde.</p>
    </div>
  );
  return(
    <div style={{padding:"16px 16px 0"}}>
      <p style={{color:"rgba(255,255,255,.18)",fontSize:8,letterSpacing:3,fontFamily:"'Orbitron',monospace",marginBottom:5}}>FEEDBACK TESTEUR</p>
      <div style={{background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.07)",borderRadius:6,padding:"9px 12px",marginBottom:14}}>
        <p style={{color:"rgba(255,255,255,.25)",fontSize:10,fontFamily:"'Share Tech Mono',monospace"}}>
          Jour {Object.keys(state.histoire||{}).length} · Rang {getRank(state.xp||0).id} · Facette {f?.label||"—"} · {Object.values(state.votesJour||{}).filter(Boolean).length} votes aujourd'hui
        </p>
      </div>
      <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:13}}>
        {cats.map(ct=>(<button key={ct.id} onClick={()=>setCat(ct.id)} style={{padding:"5px 11px",borderRadius:3,background:cat===ct.id?`${f?.color||"#00ffcc"}14`:"rgba(255,255,255,.03)",border:`1px solid ${cat===ct.id?(f?.color||"#00ffcc")+"44":"rgba(255,255,255,.07)"}`,color:cat===ct.id?(f?.color||"#00ffcc"):"rgba(255,255,255,.3)",fontSize:10,cursor:"pointer",fontFamily:"'Orbitron',monospace",transition:"all .2s"}}>{ct.l}</button>))}
      </div>
      <div style={{marginBottom:13}}>
        <p style={{color:"rgba(255,255,255,.2)",fontSize:8,letterSpacing:3,fontFamily:"'Orbitron',monospace",marginBottom:7}}>NOTE</p>
        <div style={{display:"flex",gap:8}}>{[1,2,3,4,5].map(n=>(<button key={n} onClick={()=>setRating(n)} style={{fontSize:20,background:"none",border:"none",cursor:"pointer",opacity:n<=rating?1:.25,transition:"all .2s",filter:n<=rating?`drop-shadow(0 0 6px ${f?.color||"#ffd700"})`:"none"}}>✦</button>))}</div>
      </div>
      <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Ce qui fonctionne, ce qui coince, ce qui manque..." rows={4} style={{width:"100%",padding:"10px 12px",background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.08)",borderRadius:6,color:"rgba(255,255,255,.7)",resize:"none",fontSize:12,fontFamily:"'Share Tech Mono',monospace",outline:"none",lineHeight:1.6,marginBottom:13}}/>
      <button onClick={submit} style={{width:"100%",padding:"12px",background:text.trim()?`${f?.color||"#00ffcc"}12`:"rgba(255,255,255,.02)",border:`1px solid ${text.trim()?(f?.color||"#00ffcc")+"44":"rgba(255,255,255,.06)"}`,borderRadius:6,color:text.trim()?(f?.color||"#00ffcc"):"rgba(255,255,255,.2)",fontFamily:"'Orbitron',monospace",fontSize:10,letterSpacing:3,cursor:text.trim()?"pointer":"not-allowed",transition:"all .2s"}}>ENVOYER →</button>
      {(state.feedbacks||[]).length>0&&(
        <div style={{marginTop:14,background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.05)",borderRadius:8,padding:"11px 13px"}}>
          <p style={{color:"rgba(255,255,255,.18)",fontSize:8,letterSpacing:3,fontFamily:"'Orbitron',monospace",marginBottom:9}}>MES FEEDBACKS</p>
          {[...(state.feedbacks||[])].reverse().slice(0,3).map((fb,i)=>(
            <div key={i} style={{marginBottom:7,paddingBottom:7,borderBottom:"1px solid rgba(255,255,255,.04)"}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:2}}><span style={{color:"rgba(255,255,255,.2)",fontSize:8,fontFamily:"'Orbitron',monospace"}}>{fb.date} · J{fb.jour} · {fb.rang}</span><span style={{color:"#ffd700",fontSize:9}}>{"✦".repeat(fb.rating)}</span></div>
              <p style={{color:"rgba(255,255,255,.32)",fontSize:10,fontFamily:"'Share Tech Mono',monospace"}}>{fb.text.slice(0,80)}{fb.text.length>80?"...":""}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SETUP
// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
// PLAN SCREEN — choix d'offre
// ═══════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════
// KRYOS QUESTIONNAIRE — intro + formulaire
// ═══════════════════════════════════════════════════════════
export function KryosQuestionnaire({ facetteId, onDone, onSkip }) {
  const f = FACETTES.find(fc => fc.id === facetteId);
  const questions = QUESTIONS_PROGRAMME[facetteId] || QUESTIONS_PROGRAMME.athlete;
  const intro = KRYOS_PROGRAMME_INTRO[facetteId] || KRYOS_PROGRAMME_INTRO.athlete;

  const [phase, setPhase] = useState("intro"); // intro | form
  const [introIdx, setIntroIdx] = useState(0);
  const [introDone, setIntroDone] = useState(false);
  const [introOut, setIntroOut] = useState("");
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const timerRef = useRef(null);

  const introLine = intro.lines[introIdx];
  const rgb = f?.rgb || "0,255,204";
  const color = f?.color || "#00ffcc";

  // Typewriter effect
  useEffect(() => {
    if (phase !== "intro") return;
    setIntroOut(""); setIntroDone(false);
    let i = 0;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      i++; setIntroOut(introLine.slice(0, i));
      if (i >= introLine.length) { clearInterval(timerRef.current); setIntroDone(true); }
    }, 22);
    return () => clearInterval(timerRef.current);
  }, [introIdx, phase]);

  const advanceIntro = () => {
    if (!introDone) { clearInterval(timerRef.current); setIntroOut(introLine); setIntroDone(true); return; }
    if (introIdx < intro.lines.length - 1) setIntroIdx(i => i + 1);
    else setPhase("form");
  };

  const allAnswered = questions.filter(q => q.type === "select").every(q => answers[q.id]);

  const handleSubmit = async () => {
    setLoading(true);
    onDone(answers);
  };

  // ── INTRO PHASE (style KryosModal) ──
  if (phase === "intro") return (
    <div onClick={advanceIntro} style={{ position:"fixed",inset:0,zIndex:2000,
      display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",
      background:"rgba(2,2,12,.96)", animation:"fadeInFast .22s ease" }}>
      <div style={{ position:"absolute",top:36,left:0,right:0,textAlign:"center" }}>
        <p style={{ color:`rgba(${rgb},.4)`,fontSize:9,fontFamily:"'Orbitron',monospace",letterSpacing:5 }}>{intro.title}</p>
      </div>
      <button onClick={e=>{e.stopPropagation();onSkip();}} style={{ position:"absolute",top:36,right:20,background:"none",border:"none",color:"rgba(255,255,255,.2)",fontSize:9,fontFamily:"'Orbitron',monospace",cursor:"pointer",letterSpacing:2 }}>PASSER</button>
      <div style={{ marginBottom:-8,zIndex:1,animation:"float 4s ease-in-out infinite" }}>
        <GemFrog color={color} size={152} mood={intro.mood||"wise"} />
      </div>
      <div style={{ width:"100%",maxWidth:520,background:`linear-gradient(180deg,rgba(6,6,22,.98) 0%,rgba(4,4,16,1) 100%)`,
        borderTop:`1px solid rgba(${rgb},.18)`,padding:"26px 22px 44px",position:"relative" }}>
        {[[true,true],[true,false],[false,true],[false,false]].map(([t,l],i)=>(
          <div key={i} style={{ position:"absolute",top:t?9:"auto",bottom:t?"auto":9,left:l?9:"auto",right:l?"auto":9,width:12,height:12,
            borderTop:t?`1px solid rgba(${rgb},.32)`:"none",borderBottom:t?"none":`1px solid rgba(${rgb},.32)`,
            borderLeft:l?`1px solid rgba(${rgb},.32)`:"none",borderRight:l?"none":`1px solid rgba(${rgb},.32)` }}/>
        ))}
        <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:14 }}>
          <div style={{ width:5,height:5,borderRadius:"50%",background:color,boxShadow:`0 0 7px ${color}`,animation:"pulse 2s infinite" }}/>
          <span style={{ color,fontSize:10,fontFamily:"'Orbitron',monospace",letterSpacing:3 }}>KRYOS</span>
          <span style={{ color:`rgba(${rgb},.25)`,fontSize:9,fontFamily:"'Orbitron',monospace" }}>— PROGRAMME PERSONNALISÉ</span>
        </div>
        <p style={{ color:"rgba(255,255,255,.82)",fontSize:13.5,lineHeight:1.8,minHeight:60,fontFamily:"'Share Tech Mono',monospace" }}>
          {introOut}{!introDone&&<span style={{color,animation:"blink .65s infinite"}}>█</span>}
        </p>
        <div style={{ display:"flex",gap:4,marginTop:18,justifyContent:"center" }}>
          {intro.lines.map((_,i)=>(
            <div key={i} style={{ height:2,borderRadius:1,width:i===introIdx?18:5,
              background:i<=introIdx?color:`rgba(${rgb},.16)`,transition:"all .3s" }}/>
          ))}
        </div>
        {introDone&&<p style={{ textAlign:"center",marginTop:12,color:`rgba(${rgb},.32)`,fontSize:8,fontFamily:"'Orbitron',monospace",letterSpacing:3,animation:"pulse 1.5s infinite" }}>
          {introIdx<intro.lines.length-1?"[ CONTINUER ]":"[ RÉPONDRE AUX QUESTIONS ]"}
        </p>}
      </div>
    </div>
  );

  // ── FORM PHASE ──
  return (
    <div style={{ position:"fixed",inset:0,zIndex:2000,background:"rgba(2,2,12,.97)",overflowY:"auto",animation:"fadeInFast .22s ease" }}>
      <div style={{ maxWidth:520,margin:"0 auto",padding:"24px 18px 80px" }}>
        {/* Header */}
        <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:24 }}>
          <GemFrog color={color} size={32} mood="curious"/>
          <div>
            <p style={{ color,fontFamily:"'Orbitron',monospace",fontSize:11,letterSpacing:3 }}>KRYOS — QUESTIONS</p>
            <p style={{ color:"rgba(255,255,255,.2)",fontSize:9,fontFamily:"'Share Tech Mono',monospace" }}>Réponds honnêtement pour un programme adapté</p>
          </div>
          <button onClick={onSkip} style={{ marginLeft:"auto",background:"none",border:"none",color:"rgba(255,255,255,.2)",fontSize:9,fontFamily:"'Orbitron',monospace",cursor:"pointer",letterSpacing:1 }}>PASSER</button>
        </div>

        {/* Questions */}
        <div style={{ display:"flex",flexDirection:"column",gap:14 }}>
          {questions.map((q, i) => (
            <div key={q.id} style={{ animation:`fadeIn .3s ease ${i*0.05}s both` }}>
              <div style={{ display:"flex",alignItems:"center",gap:8,marginBottom:8 }}>
                <div style={{ width:18,height:18,borderRadius:"50%",background:`${color}18`,border:`1px solid ${color}33`,
                  display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                  <span style={{ color,fontSize:8,fontFamily:"'Orbitron',monospace",fontWeight:700 }}>{i+1}</span>
                </div>
                <p style={{ color:"rgba(255,255,255,.6)",fontSize:11,fontFamily:"'Orbitron',monospace",letterSpacing:1 }}>{q.label}</p>
              </div>

              {q.type === "select" ? (
                <div style={{ display:"flex",flexDirection:"column",gap:5 }}>
                  {q.options.map(opt => (
                    <button key={opt} onClick={() => setAnswers(a=>({...a,[q.id]:opt}))}
                      style={{ padding:"9px 13px",textAlign:"left",borderRadius:4,cursor:"pointer",transition:"all .15s",
                        background:answers[q.id]===opt?`${color}12`:"rgba(255,255,255,.02)",
                        border:`1px solid ${answers[q.id]===opt?color+"44":"rgba(255,255,255,.06)"}`,
                        color:answers[q.id]===opt?color:"rgba(255,255,255,.35)",
                        fontSize:11,fontFamily:"'Share Tech Mono',monospace" }}>
                      <span style={{ marginRight:8,opacity:answers[q.id]===opt?1:.3 }}>{answers[q.id]===opt?"◆":"◇"}</span>
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <textarea value={answers[q.id]||""} onChange={e=>setAnswers(a=>({...a,[q.id]:e.target.value}))}
                  placeholder={q.placeholder} rows={2}
                  style={{ width:"100%",padding:"10px 12px",background:"rgba(255,255,255,.03)",
                    border:`1px solid ${answers[q.id]?""+color+"33":"rgba(255,255,255,.08)"}`,
                    borderRadius:4,color:"rgba(255,255,255,.7)",resize:"none",fontSize:11,
                    fontFamily:"'Share Tech Mono',monospace",outline:"none",lineHeight:1.6 }}/>
              )}
            </div>
          ))}
        </div>

        {/* Submit */}
        <div style={{ marginTop:24,position:"sticky",bottom:20 }}>
          <button onClick={handleSubmit} disabled={!allAnswered||loading}
            style={{ width:"100%",padding:"14px",borderRadius:6,cursor:allAnswered&&!loading?"pointer":"not-allowed",
              background:allAnswered?`${color}12`:"rgba(255,255,255,.02)",
              border:`1px solid ${allAnswered?color+"44":"rgba(255,255,255,.06)"}`,
              color:allAnswered?color:"rgba(255,255,255,.2)",
              fontFamily:"'Orbitron',monospace",fontSize:10,letterSpacing:3,transition:"all .2s" }}>
            {loading?"✦ GÉNÉRATION EN COURS...":"✦ GÉNÉRER MON PROGRAMME →"}
          </button>
          {!allAnswered && <p style={{ textAlign:"center",marginTop:8,color:"rgba(255,255,255,.15)",fontSize:9,fontFamily:"'Share Tech Mono',monospace" }}>
            Réponds à toutes les questions à choix pour continuer
          </p>}
        </div>
      </div>
    </div>
  );
}

export function PlanScreen({ currentTier, onSelect }) {
  const [selected, setSelected] = useState(currentTier || "gratuit");
  return (
    <div style={{ padding:"16px 16px 0" }}>
      <p style={{ color:"rgba(255,255,255,.18)",fontSize:8,letterSpacing:3,fontFamily:"'Orbitron',monospace",marginBottom:4 }}>PROTOCOLE</p>
      <h2 style={{ color:"#fff",fontFamily:"'Orbitron',monospace",fontSize:16,letterSpacing:2,marginBottom:4 }}>CHOISIR TON PLAN</h2>
      <p style={{ color:"rgba(255,255,255,.25)",fontSize:10,fontFamily:"'Share Tech Mono',monospace",marginBottom:18,lineHeight:1.6 }}>
        Chaque plan débarre la même transformation. La différence : le niveau de personnalisation de l'IA.
      </p>
      <div style={{ display:"flex",flexDirection:"column",gap:10,marginBottom:20 }}>
        {TIERS.map(tier => {
          const isActive = selected === tier.id;
          const isCurrent = currentTier === tier.id;
          return (
            <div key={tier.id} onClick={() => setSelected(tier.id)}
              style={{ background:isActive?`rgba(${tier.rgb},.07)`:"rgba(255,255,255,.02)",
                border:`1px solid ${isActive?tier.color+"44":"rgba(255,255,255,.06)"}`,
                borderRadius:8,padding:"14px 16px",cursor:"pointer",transition:"all .2s",
                boxShadow:isActive?`0 0 20px rgba(${tier.rgb},.08)`:""  }}>
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10 }}>
                <div style={{ display:"flex",alignItems:"center",gap:8 }}>
                  <span style={{ color:tier.color,fontSize:18,textShadow:`0 0 10px ${tier.color}` }}>{tier.icon}</span>
                  <div>
                    <p style={{ color:tier.color,fontFamily:"'Orbitron',monospace",fontSize:11,letterSpacing:2 }}>{tier.label}</p>
                    {isCurrent && <p style={{ color:`${tier.color}88`,fontSize:8,fontFamily:"'Orbitron',monospace",letterSpacing:2 }}>PLAN ACTUEL</p>}
                  </div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <p style={{ color:tier.id==="gratuit"?"#22c55e":tier.color,fontFamily:"'Orbitron',monospace",fontSize:13,fontWeight:700 }}>{tier.price}</p>
                  {tier.id!=="gratuit" && <p style={{ color:"rgba(255,255,255,.2)",fontSize:8,fontFamily:"'Orbitron',monospace" }}>BIENTÔT</p>}
                </div>
              </div>
              <div style={{ display:"flex",flexDirection:"column",gap:5 }}>
                {tier.features.map((f,i) => (
                  <div key={i} style={{ display:"flex",alignItems:"center",gap:7 }}>
                    <div style={{ width:5,height:5,borderRadius:"50%",background:tier.locked.length===0||i===0?tier.color:`${tier.color}33`,flexShrink:0 }}/>
                    <span style={{ color:tier.locked.length===0||i===0?"rgba(255,255,255,.45)":"rgba(255,255,255,.18)",fontSize:10,fontFamily:"'Share Tech Mono',monospace" }}>{f}</span>
                    {tier.id!=="gratuit" && i>0 && <span style={{ marginLeft:"auto",color:`${tier.color}44`,fontSize:8,fontFamily:"'Orbitron',monospace" }}>🔒</span>}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={() => onSelect(selected)}
        style={{ width:"100%",padding:"13px",background:"rgba(0,255,200,.07)",border:"1px solid rgba(0,255,200,.3)",
          borderRadius:6,color:"#00ffcc",fontFamily:"'Orbitron',monospace",fontSize:10,letterSpacing:3,cursor:"pointer" }}>
        CONTINUER AVEC {TIERS.find(t=>t.id===selected)?.label} →
      </button>
      <p style={{ textAlign:"center",marginTop:10,color:"rgba(255,255,255,.15)",fontSize:9,fontFamily:"'Share Tech Mono',monospace" }}>
        Les plans payants arrivent bientôt. Pour l'instant tout est gratuit.
      </p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PROGRAMME SCREEN
// ═══════════════════════════════════════════════════════════
export function ProgrammeScreen({ state, onKryos }) {
  const { programmeIA, programmeDate, facetteId, tier } = state;
  const f = FACETTES.find(fc => fc.id === facetteId);
  const currentTier = tier || "gratuit";
  const [activeTab, setActiveTab] = useState("sport");

  const tabs = [
    { id:"sport",           label:"SPORT",    icon:"⚡" },
    { id:"lectures",        label:"LIVRES",   icon:"📖" },
    { id:"habitudes",       label:"HABITS",   icon:"🔥" },
    { id:"planning",        label:"SEMAINE",  icon:"📅" },
    { id:"non_negotiables", label:"RÈGLES",   icon:"🛡" },
  ];

  const template = PROGRAMME_TEMPLATE[facetteId] || PROGRAMME_TEMPLATE.athlete;
  const programme = programmeIA || {
    sport: template.sport,
    lectures: template.lectures,
    habitudes: template.habitudes,
    planning: template.emploi_du_temps,
    generated: false,
  };

  const tabContent = {
    sport:           programme.sport || [],
    lectures:        programme.lectures || [],
    habitudes:       programme.habitudes || [],
    planning:        programme.planning || [],
    non_negotiables: programme.non_negotiables_list || programme.non_negotiables || [
      "Respecter les jours de repos — la récupération EST l'entraînement",
      "S'arrêter 2-3 reps avant l'échec musculaire",
      "Une grosse source de protéine à chaque repas",
      "Ne jamais sauter le repas post-séance",
      "Dormir 7h minimum les nuits avant séance",
    ],
  };

  // ── PLAN CARDS ──
  const planCards = [
    {
      id: "gratuit",
      label: "GEMME BRUTE",
      price: "Gratuit",
      mood: "neutral",
      color: "#4b5563",
      rgb: "75,85,99",
      icon: "◇",
      locked: false,
      desc: "Programme personnalisé par IA selon ta facette et tes réponses. Mis à jour à chaque nouveau questionnaire.",
      features: ["Programme sport / lectures / habitudes", "Planning semaine type", "Questionnaire personnalisé", "Adapté à ta facette"],
    },
    {
      id: "faconne",
      label: "GEMME POLIE",
      price: "9€/mois",
      mood: "curious",
      color: "#00ffcc",
      rgb: "0,255,204",
      icon: "◈",
      locked: true,
      desc: "Kryos suit ta progression semaine par semaine. Chaque lundi il analyse tes stats et ajuste ton programme.",
      features: ["Tout le plan Gratuit", "Feedback hebdo → programme adapté", "Boss personnalisé par l'IA", "Kryos analyse tes performances"],
      tease: "Kryos regarde tes stats depuis une semaine. Il a des choses à te dire.",
    },
    {
      id: "maitrise",
      label: "GEMME ABSOLUE",
      price: "Sur devis",
      mood: "wise",
      color: "#ffd700",
      rgb: "255,215,0",
      icon: "✦",
      locked: true,
      desc: "Un programme 100% construit avec toi. Appel direct, objectifs sur mesure, suivi humain + IA.",
      features: ["Programme entièrement personnalisé", "Appel de cadrage avec le dev", "Suivi humain + IA en parallèle", "Adapté à ta situation exacte"],
      tease: "Ton cas est unique. Le programme doit l'être aussi.",
    },
  ];

  return (
    <div style={{ padding:"12px 16px 0" }}>

      {/* Programme actif */}
      <div style={{ marginBottom:18 }}>
        <div style={{ marginBottom:10 }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4 }}>
            <p style={{ color:"rgba(255,255,255,.18)",fontSize:8,letterSpacing:3,fontFamily:"'Orbitron',monospace" }}>
              {programme.titre_cycle || `CYCLE 1 — ${f?.label.toUpperCase()}`}
            </p>
            {programme.generated
              ? <span style={{ color:"#00ff6488",fontSize:8,fontFamily:"'Orbitron',monospace" }}>✦ IA · {programmeDate}</span>
              : <span style={{ color:"rgba(255,255,255,.18)",fontSize:8,fontFamily:"'Orbitron',monospace" }}>BASE</span>
            }
          </div>
          {programme.objectif_cycle && (
            <p style={{ color:`${f?.color}88`,fontSize:10,fontFamily:"'Share Tech Mono',monospace",lineHeight:1.5,
              padding:"6px 10px",background:`${f?.color}08`,borderRadius:4,border:`1px solid ${f?.color}18` }}>
              🎯 {programme.objectif_cycle}
            </p>
          )}
        </div>

        {/* Tabs */}
        <div style={{ display:"flex",gap:5,marginBottom:10,overflowX:"auto" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flexShrink:0,padding:"6px 12px",borderRadius:4,cursor:"pointer",transition:"all .15s",
                background:activeTab===t.id?`${f?.color}14`:"rgba(255,255,255,.03)",
                border:`1px solid ${activeTab===t.id?f?.color+"33":"rgba(255,255,255,.06)"}`,
                color:activeTab===t.id?f?.color:"rgba(255,255,255,.25)",
                fontSize:8,fontFamily:"'Orbitron',monospace",letterSpacing:1 }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        <div style={{ background:"rgba(255,255,255,.02)",border:"1px solid rgba(255,255,255,.05)",borderRadius:8,padding:"12px 14px" }}>
          <div style={{ display:"flex",flexDirection:"column",gap:7 }}>
            {(tabContent[activeTab]||[]).map((item,i) => (
              <div key={i} style={{ display:"flex",alignItems:"flex-start",gap:9 }}>
                <div style={{ width:18,height:18,borderRadius:"50%",background:`${f?.color}15`,border:`1px solid ${f?.color}22`,
                  display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1 }}>
                  <span style={{ color:f?.color,fontSize:8,fontFamily:"'Orbitron',monospace",fontWeight:700 }}>{i+1}</span>
                </div>
                <p style={{ color:"rgba(255,255,255,.5)",fontSize:11,fontFamily:"'Share Tech Mono',monospace",lineHeight:1.55,flex:1 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Séparateur */}
      <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:16 }}>
        <div style={{ flex:1,height:1,background:"rgba(255,255,255,.05)" }}/>
        <span style={{ color:"rgba(255,255,255,.15)",fontSize:8,fontFamily:"'Orbitron',monospace",letterSpacing:3 }}>PLANS</span>
        <div style={{ flex:1,height:1,background:"rgba(255,255,255,.05)" }}/>
      </div>

      {/* 3 plan cards */}
      <div style={{ display:"flex",flexDirection:"column",gap:10,paddingBottom:16 }}>
        {planCards.map(plan => {
          const isActive = currentTier === plan.id;
          return (
            <div key={plan.id}
              style={{ borderRadius:10,padding:"14px 16px",
                background:isActive?`rgba(${plan.rgb},.07)`:"rgba(255,255,255,.02)",
                border:`1px solid ${isActive?plan.color+"44":plan.locked?"rgba(255,255,255,.05)":"rgba(255,255,255,.08)"}`,
                opacity:plan.locked?0.75:1,
                transition:"all .2s" }}>

              {/* Card header */}
              <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:10 }}>
                <div style={{ flexShrink:0,animation:isActive?"float 4s ease-in-out infinite":"none" }}>
                  <GemFrog color={plan.locked?"#4b5563":plan.color} size={38} mood={plan.mood}/>
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex",alignItems:"center",gap:6,marginBottom:2 }}>
                    <span style={{ color:plan.locked?"#4b5563":plan.color,fontSize:10,fontFamily:"'Orbitron',monospace",letterSpacing:2,fontWeight:700 }}>{plan.label}</span>
                    {isActive && <span style={{ background:`${plan.color}22`,border:`1px solid ${plan.color}44`,borderRadius:3,padding:"1px 6px",color:plan.color,fontSize:7,fontFamily:"'Orbitron',monospace" }}>ACTIF</span>}
                    {plan.locked && <span style={{ color:"rgba(255,255,255,.2)",fontSize:9 }}>🔒</span>}
                  </div>
                  <p style={{ color:plan.locked?"#22c55e":plan.id==="maitrise"?"#ffd700":"#22c55e",fontSize:11,fontFamily:"'Orbitron',monospace",fontWeight:700 }}>{plan.price}</p>
                </div>
              </div>

              {/* Description */}
              <p style={{ color:plan.locked?"rgba(255,255,255,.2)":"rgba(255,255,255,.4)",fontSize:10,fontFamily:"'Share Tech Mono',monospace",lineHeight:1.6,marginBottom:10 }}>
                {plan.locked ? plan.tease : plan.desc}
              </p>

              {/* Features */}
              <div style={{ display:"flex",flexDirection:"column",gap:4,marginBottom:plan.locked?10:0 }}>
                {plan.features.map((feat,i) => (
                  <div key={i} style={{ display:"flex",alignItems:"center",gap:6 }}>
                    <div style={{ width:4,height:4,borderRadius:"50%",flexShrink:0,
                      background:plan.locked&&i>0?"rgba(255,255,255,.1)":plan.locked?"rgba(255,255,255,.2)":plan.color,
                      opacity:plan.locked&&i>0?0.4:1 }}/>
                    <span style={{ color:plan.locked&&i>0?"rgba(255,255,255,.15)":"rgba(255,255,255,.35)",fontSize:9,fontFamily:"'Share Tech Mono',monospace" }}>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              {plan.id==="faconne" && plan.locked && (
                <div style={{ marginTop:8,padding:"8px 12px",background:"rgba(0,255,204,.05)",border:"1px solid rgba(0,255,204,.12)",borderRadius:6 }}>
                  <p style={{ color:"rgba(0,255,204,.4)",fontSize:9,fontFamily:"'Orbitron',monospace",letterSpacing:2 }}>BIENTÔT DISPONIBLE</p>
                </div>
              )}
              {plan.id==="maitrise" && plan.locked && (
                <a href="mailto:contact@gemvitale.com?subject=Programme Gemme Absolue&body=Bonjour, je suis intéressé par le programme personnalisé Gemme Absolue."
                  style={{ display:"block",marginTop:8,padding:"9px 12px",background:"rgba(255,215,0,.06)",
                    border:"1px solid rgba(255,215,0,.2)",borderRadius:6,
                    color:"#ffd700",fontSize:9,fontFamily:"'Orbitron',monospace",letterSpacing:2,
                    textDecoration:"none",textAlign:"center" }}>
                  ✦ CONTACTER LE DEV →
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// KRYOS QUESTIONNAIRE — intro + formulaire
// ═══════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════
// PROGRAMME SCREEN — affiché dans l'onglet QUÊTES ou dédié
// ═══════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════
// KRYOS QUESTIONNAIRE — intro + formulaire
// ═══════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════
// PROGRAMME SCREEN
// ═══════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════
// KRYOS QUESTIONNAIRE — intro + formulaire
// ═══════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════════
// PROGRAMME SCREEN — affiché dans l'onglet QUÊTES ou dédié
// ═══════════════════════════════════════════════════════════
export function SetupScreen({ onDone, onKryos }) {
  const [phase, setPhase] = useState(-1);
  const [nom, setNom] = useState("");
  const [valeurs, setValeurs] = useState([]);
  const [facetteId, setFacetteId] = useState(null);
  const [identite, setIdentite] = useState("");
  const f = FACETTES.find(fc => fc.id === facetteId);
  const tv = v => valeurs.includes(v) ? setValeurs(valeurs.filter(x => x !== v)) : valeurs.length < 5 && setValeurs([...valeurs, v]);
  const preIds = facetteId ? (PRE_IDENTITES[facetteId] || []) : [];

  const BackBtn = ({ to, label="← RETOUR" }) => (
    <button onClick={() => setPhase(to)} style={{ background:"none", border:"none", color:"rgba(255,255,255,.25)", fontSize:9, fontFamily:"'Orbitron',monospace", letterSpacing:2, cursor:"pointer", marginBottom:18, display:"flex", alignItems:"center", gap:6, padding:0 }}>
      {label}
    </button>
  );

  const BG = { minHeight:"100vh", background:"#04040f", padding:"26px 18px 80px",
    backgroundImage:`linear-gradient(rgba(0,255,200,.013) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,200,.013) 1px,transparent 1px)`,
    backgroundSize:"44px 44px" };

  // Phase -1 : Kryos intro
  if (phase === -1) return (
    <div style={{ ...BG, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
      <div style={{ animation:"float 4s ease-in-out infinite", marginBottom:20 }}><GemFrog color="#00ffcc" size={130} mood="wise"/></div>
      <p style={{ color:"#00ffcc", fontFamily:"'Orbitron',monospace", fontSize:13, letterSpacing:4, marginBottom:4, textShadow:"0 0 12px #00ffcc" }}>KRYOS</p>
      <p style={{ color:"rgba(255,255,255,.2)", fontSize:9, fontFamily:"'Orbitron',monospace", letterSpacing:3, marginBottom:28 }}>GARDIEN DES GEMMES</p>
      <p style={{ color:"rgba(255,255,255,.35)", fontSize:12, textAlign:"center", lineHeight:1.75, maxWidth:320, marginBottom:28, fontFamily:"'Share Tech Mono',monospace" }}>
        Avant de commencer, je dois t'expliquer exactement pourquoi ce protocole fonctionne — et ce que tu t'apprêtes à faire.
      </p>
      <button onClick={() => { onKryos("welcome"); setTimeout(() => setPhase(0), 200); }}
        style={{ padding:"13px 28px", background:"rgba(0,255,200,.07)", border:"1px solid #00ffcc44", borderRadius:4, cursor:"pointer", color:"#00ffcc", fontFamily:"'Orbitron',monospace", fontSize:11, letterSpacing:3, boxShadow:"0 0 20px rgba(0,255,200,.12)", marginBottom:14 }}>
        ÉCOUTER KRYOS →
      </button>
      <button onClick={() => setPhase(0)}
        style={{ background:"none", border:"none", color:"rgba(255,255,255,.2)", fontSize:9, fontFamily:"'Orbitron',monospace", letterSpacing:2, cursor:"pointer" }}>
        passer →
      </button>
    </div>
  );

  return (
    <div style={BG}>
      <div style={{ maxWidth:420, margin:"0 auto" }}>

        {/* Progress bar */}
        <div style={{ display:"flex", gap:5, marginBottom:24 }}>
          {[0,1,2].map(i => (
            <div key={i} style={{ flex:1, height:2, background:i<=phase?"#00ffcc":"rgba(255,255,255,.07)", boxShadow:i===phase?"0 0 7px #00ffcc":"none", borderRadius:1, transition:"all .3s" }}/>
          ))}
        </div>

        {/* ── PHASE 0 : NOYAU ── */}
        {phase === 0 && (
          <div style={{ animation:"fadeIn .4s ease" }}>
            <p style={{ color:"#00ffcc44", fontSize:9, fontFamily:"'Orbitron',monospace", letterSpacing:3, marginBottom:5 }}>PHASE 01 / 03</p>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:18 }}>
              <h2 style={{ color:"#00ffcc", fontFamily:"'Orbitron',monospace", fontSize:18, letterSpacing:2, textShadow:"0 0 12px #00ffcc44" }}>LE NOYAU</h2>
              <button onClick={() => onKryos("noyau_why")} style={{ display:"flex", alignItems:"center", gap:5, background:"rgba(0,255,200,.05)", border:"1px solid rgba(0,255,200,.15)", borderRadius:20, padding:"4px 10px", cursor:"pointer" }}>
                <GemFrog color="#00ffcc" size={18} mood="curious"/>
                <span style={{ color:"#00ffcc88", fontSize:8, fontFamily:"'Orbitron',monospace" }}>POURQUOI ?</span>
              </button>
            </div>

            {/* Nom */}
            <div style={{ background:"rgba(0,255,200,.03)", border:"1px solid rgba(0,255,200,.1)", borderRadius:8, padding:"13px 14px", marginBottom:16 }}>
              <p style={{ color:"rgba(255,255,255,.25)", fontSize:9, fontFamily:"'Orbitron',monospace", letterSpacing:3, marginBottom:9 }}>NOM DE GEMME</p>
              <input value={nom} onChange={e => setNom(e.target.value)} placeholder="Ex: Saya, Nova, The One..."
                style={{ width:"100%", padding:"10px 12px", background:"rgba(0,255,200,.05)", border:"1px solid rgba(0,255,200,.18)", borderRadius:4, color:"#00ffcc", fontSize:13, fontFamily:"'Orbitron',monospace", outline:"none" }}/>
            </div>

            {/* Valeurs par catégorie */}
            <div style={{ background:"rgba(0,255,200,.03)", border:"1px solid rgba(0,255,200,.1)", borderRadius:8, padding:"13px 14px", marginBottom:20 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:14 }}>
                <p style={{ color:"rgba(255,255,255,.25)", fontSize:9, fontFamily:"'Orbitron',monospace", letterSpacing:3 }}>VALEURS FONDAMENTALES</p>
                <p style={{ color:"#00ffcc88", fontSize:9, fontFamily:"'Orbitron',monospace" }}>{valeurs.length}/5</p>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
                {VALEURS_CATEGORIES.map(cat => (
                  <div key={cat.cat}>
                    <p style={{ color:`${cat.color}66`, fontSize:8, fontFamily:"'Orbitron',monospace", letterSpacing:3, marginBottom:8 }}>{cat.cat}</p>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                      {cat.vals.map(v => {
                        const sel = valeurs.includes(v);
                        return (
                          <button key={v} onClick={() => tv(v)} style={{ padding:"5px 11px", borderRadius:3,
                            background: sel ? `${cat.color}18` : "rgba(255,255,255,.03)",
                            border:`1px solid ${sel ? cat.color+"55" : "rgba(255,255,255,.07)"}`,
                            color: sel ? cat.color : "rgba(255,255,255,.3)",
                            fontSize:10, cursor:"pointer", fontFamily:"'Orbitron',monospace", transition:"all .2s",
                            boxShadow: sel ? `0 0 8px ${cat.color}22` : "none" }}>
                            {v}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Valeurs sélectionnées résumé */}
              {valeurs.length > 0 && (
                <div style={{ marginTop:14, padding:"10px 12px", background:"rgba(0,0,0,.3)", borderRadius:6, border:"1px solid rgba(0,255,200,.08)" }}>
                  <p style={{ color:"rgba(255,255,255,.2)", fontSize:8, fontFamily:"'Orbitron',monospace", letterSpacing:2, marginBottom:6 }}>NOYAU SÉLECTIONNÉ</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                    {valeurs.map(v => (
                      <span key={v} style={{ color:"#00ffcc", fontSize:10, fontFamily:"'Orbitron',monospace",
                        background:"rgba(0,255,200,.08)", border:"1px solid rgba(0,255,200,.2)", borderRadius:3, padding:"3px 8px" }}>{v}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => nom && valeurs.length >= 1 && setPhase(1)}
              disabled={!nom || valeurs.length < 1}
              style={{ width:"100%", padding:"13px", borderRadius:4,
                background: nom && valeurs.length >= 1 ? "rgba(0,255,200,.08)" : "rgba(255,255,255,.02)",
                border:`1px solid ${nom && valeurs.length >= 1 ? "#00ffcc44" : "rgba(255,255,255,.05)"}`,
                color: nom && valeurs.length >= 1 ? "#00ffcc" : "rgba(255,255,255,.18)",
                fontFamily:"'Orbitron',monospace", fontSize:11, letterSpacing:3,
                cursor: nom && valeurs.length >= 1 ? "pointer" : "not-allowed" }}>
              ANCRER LE NOYAU →
            </button>
          </div>
        )}

        {/* ── PHASE 1 : FACETTE ── */}
        {phase === 1 && (
          <div style={{ animation:"fadeIn .4s ease" }}>
            <BackBtn to={0}/>
            <p style={{ color:"#00ffcc44", fontSize:9, fontFamily:"'Orbitron',monospace", letterSpacing:3, marginBottom:5 }}>PHASE 02 / 03</p>
            <h2 style={{ color:"#00ffcc", fontFamily:"'Orbitron',monospace", fontSize:18, letterSpacing:2, marginBottom:6, textShadow:"0 0 12px #00ffcc44" }}>FACETTE ACTIVE</h2>
            <p style={{ color:"rgba(255,255,255,.25)", fontSize:11, marginBottom:18, lineHeight:1.6, fontFamily:"'Share Tech Mono',monospace" }}>
              Une seule facette. 90 jours. Laquelle est la plus stratégique pour toi maintenant ?
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:16 }}>
              {FACETTES.map(fc => {
                const isSelected = facetteId === fc.id;
                return (
                  <button key={fc.id} onClick={() => { setFacetteId(fc.id); setIdentite(""); }}
                    style={{ display:"flex", alignItems:"center", gap:12, padding:"13px 14px",
                      background: isSelected ? `${fc.color}0e` : "rgba(255,255,255,.02)",
                      border:`1px solid ${isSelected ? fc.color+"3a" : "rgba(255,255,255,.05)"}`,
                      borderRadius:6, cursor:"pointer", transition:"all .2s",
                      boxShadow: isSelected ? `0 0 16px ${fc.color}12` : "none" }}>
                    <span style={{ fontSize:20, color:fc.color, minWidth:26 }}>{fc.icon}</span>
                    <div style={{ flex:1, textAlign:"left" }}>
                      <div style={{ color:isSelected?fc.color:"rgba(255,255,255,.55)", fontFamily:"'Orbitron',monospace", fontSize:12, letterSpacing:1, marginBottom:3 }}>{fc.label}</div>
                      <div style={{ color:"rgba(255,255,255,.2)", fontSize:10 }}>{fc.desc}</div>
                    </div>
                    <span style={{ color:`${fc.color}55`, fontSize:9, fontFamily:"'Orbitron',monospace" }}>{fc.stat}</span>
                  </button>
                );
              })}
            </div>
            <button onClick={() => facetteId && setPhase(2)}
              disabled={!facetteId}
              style={{ width:"100%", padding:"13px", borderRadius:4,
                background: facetteId ? `${f?.color}0e` : "rgba(255,255,255,.02)",
                border:`1px solid ${facetteId ? f?.color+"3a" : "rgba(255,255,255,.05)"}`,
                color: facetteId ? f?.color : "rgba(255,255,255,.18)",
                fontFamily:"'Orbitron',monospace", fontSize:11, letterSpacing:3,
                cursor: facetteId ? "pointer" : "not-allowed",
                boxShadow: facetteId ? `0 0 14px ${f?.color}14` : "none" }}>
              CHOISIR CETTE FACETTE →
            </button>
          </div>
        )}

        {/* ── PHASE 2 : IDENTITÉ ── */}
        {phase === 2 && f && (
          <div style={{ animation:"fadeIn .4s ease" }}>
            <BackBtn to={1}/>
            <p style={{ color:`${f.color}66`, fontSize:9, fontFamily:"'Orbitron',monospace", letterSpacing:3, marginBottom:5 }}>PHASE 03 / 03</p>
            <h2 style={{ color:f.color, fontFamily:"'Orbitron',monospace", fontSize:18, letterSpacing:2, marginBottom:6, textShadow:`0 0 12px ${f.color}44` }}>
              {f.icon} IDENTITÉ CIBLE
            </h2>
            <p style={{ color:"rgba(255,255,255,.25)", fontSize:11, marginBottom:18, lineHeight:1.6, fontFamily:"'Share Tech Mono',monospace" }}>
              Choisis une pré-identité qui résonne, ou écris la tienne.
            </p>

            {/* Gem preview */}
            <div style={{ textAlign:"center", margin:"0 0 20px", animation:"float 5s ease-in-out infinite" }}>
              <Gem3D color={f.color} rank="E" size={140}/>
            </div>

            {/* Pré-identités */}
            <div style={{ display:"flex", flexDirection:"column", gap:7, marginBottom:16 }}>
              {preIds.map((pid, i) => {
                const sel = identite === pid;
                return (
                  <button key={i} onClick={() => setIdentite(sel ? "" : pid)}
                    style={{ padding:"12px 14px", textAlign:"left",
                      background: sel ? `${f.color}12` : "rgba(255,255,255,.02)",
                      border:`1px solid ${sel ? f.color+"44" : "rgba(255,255,255,.06)"}`,
                      borderRadius:6, cursor:"pointer", transition:"all .2s",
                      boxShadow: sel ? `0 0 14px ${f.color}14` : "none" }}>
                    <div style={{ display:"flex", alignItems:"flex-start", gap:10 }}>
                      <div style={{ width:16, height:16, borderRadius:"50%", flexShrink:0, marginTop:1,
                        border:`1.5px solid ${sel ? f.color : "rgba(255,255,255,.15)"}`,
                        background: sel ? f.color : "transparent",
                        display:"flex", alignItems:"center", justifyContent:"center",
                        boxShadow: sel ? `0 0 6px ${f.color}` : "none", transition:"all .2s" }}>
                        {sel && <span style={{ color:"#000", fontSize:8 }}>✓</span>}
                      </div>
                      <p style={{ color: sel ? f.color : "rgba(255,255,255,.4)", fontSize:11, lineHeight:1.6, fontFamily:"'Share Tech Mono',monospace" }}>
                        {pid}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Custom input */}
            <div style={{ background:`${f.color}06`, border:`1px solid ${f.color}1e`, borderRadius:8, padding:"12px 13px", marginBottom:18 }}>
              <p style={{ color:`${f.color}66`, fontSize:8, fontFamily:"'Orbitron',monospace", letterSpacing:3, marginBottom:8 }}>OU ÉCRIS LA TIENNE</p>
              <textarea
                value={preIds.includes(identite) ? "" : identite}
                onChange={e => setIdentite(e.target.value)}
                placeholder={`Je suis quelqu'un qui...`}
                rows={2}
                style={{ width:"100%", padding:"9px 11px", background:`${f.color}06`, border:`1px solid ${f.color}22`,
                  borderRadius:4, color:f.color, resize:"none",
                  fontSize:12, fontFamily:"'Orbitron',monospace", outline:"none", lineHeight:1.6 }}/>
            </div>

            <button onClick={() => onDone({ nom, valeurs, facetteId, identite: identite || preIds[0] || `Je suis un·e ${f.label.toLowerCase()}` })}
              style={{ width:"100%", padding:"14px", borderRadius:4,
                background:`${f.color}12`, border:`1px solid ${f.color}44`,
                color:f.color, fontFamily:"'Orbitron',monospace", fontSize:11, letterSpacing:3,
                cursor:"pointer", boxShadow:`0 0 18px ${f.color}18`, transition:"all .3s" }}>
              [ ACTIVER LA GEMME ]
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════
const getKryosDaily = (facetteId) => {
