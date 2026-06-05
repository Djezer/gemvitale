import { useState, useEffect, useRef } from "react";
import {
  FACETTES, VOTES_DATA, BOSS_LIST, VALEURS_CATEGORIES, PRE_IDENTITES,
  QUESTIONS_PROGRAMME, KRYOS_PROGRAMME_INTRO, selectProgramme,
  getNextAurele, getKryosDaily, DIALOGUES, TIERS,
  SAVE_KEY, CYCLE_DAYS, CONTACT_EMAIL, today, load, persist,
  getRank, getNextRank, getGlobalScore, getGlobalRank, getStreak,
  getWeekKey, getCycleDay, isCycleEnd,
} from "./data.js";
import {
  CSS, GemFrog, KryosModal, InfoTip, StatCard, Gem3D,
  FacetteHUD, XPNotif, RankNotif, CorrelationChart,
  ProfileScreen, ProgrammeJour, BilanCycleScreen,
  VotesScreen, QuestsScreen, DayCloseModal, FeedbackScreen,
  KryosQuestionnaire, PlanScreen, ProgrammeScreen, SetupScreen,
} from "./components.jsx";

const INIT = {
  nom: null, valeurs: [], facetteId: null, identite: null,
  xp: 0, totalVotes: 0, histoire: {}, facettesState: {},
  votesJour: {}, sommeilJour: false, energieJour: 0,
  aureleJour: null, aureleAnswer: null, bossJour: false,
  lastDay: null, lastWeek: null, usedAureles: [],
  feedbacks: [], kryosDaily: null, kryosDailyDate: null,
  tier: "gratuit", programmeIA: null, programmeDate: null,
  cycleStart: null, cycleNum: 1, progJour: {},
  bilanGenere: false, questionnaireDone: false, questionnaireAnswers: {},
};

export default function App() {
  useEffect(()=>{ const s=document.createElement("style"); s.textContent=CSS; document.head.appendChild(s); return()=>{ try{document.head.removeChild(s);}catch{} }; },[]);
  const [screen,setScreen]=useState("intro");
  const [tab,setTab]=useState("facette");
  const [showDayClose,setShowDayClose]=useState(false);
  const [showQuestionnaire,setShowQuestionnaire]=useState(false);
  const [showBilan,setShowBilan]=useState(false);
  const [bilanData,setBilanData]=useState(null);
  const [kryos,setKryos]=useState(null);
  const [xpNotif,setXpNotif]=useState(null);
  const [rankNotif,setRankNotif]=useState(null);
  const prevRank=useRef(null);
  const shownAchs=useRef(new Set());
  const [state,setState]=useState(()=>{ const s=load(); return s.nom?{...INIT,...s}:INIT; });

  // Daily + Weekly reset
  useEffect(()=>{
    const t=today();
    const nowDate = new Date();
    // Get Monday of current week as string
    const weekStart = (() => {
      const d = new Date(nowDate);
      const day = d.getDay();
      const diff = d.getDate() - day + (day===0?-6:1);
      d.setDate(diff); return d.toISOString().split("T")[0];
    })();

    if(state.nom&&state.lastDay&&state.lastDay!==t){
      setState(s=>{
        // Check weekly reset (boss resets each Monday)
        const bossJour = s.lastWeek === weekStart ? s.bossJour : false;
        const ns={
          ...s,
          histoire:{...s.histoire,[s.lastDay]:{votes:s.votesJour,sommeil:s.sommeilJour,energie:s.energieJour,aurele:s.aureleJour,aureleAnswer:s.aureleAnswer,boss:s.bossJour}},
          votesJour:{}, sommeilJour:false, energieJour:0,
          aureleJour:null, aureleAnswer:null,
          bossJour: s.lastWeek !== weekStart ? false : s.bossJour,
          lastWeek: weekStart,
          lastDay:t
        };
        persist(ns); return ns;
      });
    } else if(state.nom&&!state.lastDay){
      setState(s=>{ const ns={...s,lastDay:t,lastWeek:weekStart}; persist(ns); return ns; });
    }
    // Weekly boss reset even without day change
    if(state.nom && state.lastWeek && state.lastWeek !== weekStart) {
      setState(s=>{ const ns={...s,bossJour:false,lastWeek:weekStart}; persist(ns); return ns; });
    }
  },[]);

  // Rank up detection + auto-kryos
  useEffect(()=>{
    const r=getRank(state.xp||0);
    if(prevRank.current&&prevRank.current!==r.id){
      setRankNotif(r);
      const key=`rank_${r.id}`.toLowerCase();
      if(DIALOGUES[key]) setTimeout(()=>setKryos(key),3600);
    }
    prevRank.current=r.id;
  },[state.xp]);

  // Achievement auto-kryos
  useEffect(()=>{
    if(!state.nom) return;
    const tv=state.totalVotes||0;
    if(tv===1&&!shownAchs.current.has("first_vote")){ shownAchs.current.add("first_vote"); setTimeout(()=>setKryos("first_vote"),600); }
    if(tv===50&&!shownAchs.current.has("votes_50")){ shownAchs.current.add("votes_50"); setTimeout(()=>setKryos("votes_50"),600); }
    if(tv===100&&!shownAchs.current.has("votes_100")){ shownAchs.current.add("votes_100"); setTimeout(()=>setKryos("votes_100"),600); }
  },[state.totalVotes]);

  // Streak Kryos
  useEffect(()=>{
    if(!state.nom) return;
    const streak=getStreak(state.histoire||{});
    if(streak===3&&!shownAchs.current.has("streak_3")){ shownAchs.current.add("streak_3"); setTimeout(()=>setKryos("streak_3"),600); }
    if(streak===7&&!shownAchs.current.has("streak_7")){ shownAchs.current.add("streak_7"); setTimeout(()=>setKryos("streak_7"),600); }
  },[state.histoire]);

  // Energie low auto-kryos
  useEffect(()=>{
    if(state.energieJour>0&&state.energieJour<=3&&!shownAchs.current.has(`e_${today()}`)){
      shownAchs.current.add(`e_${today()}`); setTimeout(()=>setKryos("energie_low"),800);
    }
  },[state.energieJour]);

  // Sommeil auto-kryos
  useEffect(()=>{
    if(state.sommeilJour&&!shownAchs.current.has(`som_${today()}`)){
      shownAchs.current.add(`som_${today()}`); setTimeout(()=>setKryos("sommeil_logged"),800);
    }
  },[state.sommeilJour]);

  // Boss auto-kryos
  useEffect(()=>{
    if(state.bossJour&&!shownAchs.current.has(`boss_${today()}`)){
      shownAchs.current.add(`boss_${today()}`); setTimeout(()=>setKryos("boss_defeated"),600);
    }
  },[state.bossJour]);

  // Aurele answer auto-kryos
  useEffect(()=>{
    if(state.aureleAnswer&&!shownAchs.current.has(`aur_${today()}`)){
      shownAchs.current.add(`aur_${today()}`); setTimeout(()=>setKryos("aurelis_answered"),600);
    }
  },[state.aureleAnswer]);


  // Programme IA — montre le questionnaire UNE SEULE FOIS (première visite onglet PROG)
  const hasShownQuestionnaire = useRef(false);
  useEffect(()=>{
    if(!state.nom||!state.facetteId) return;
    if(tab==="programme" && !state.questionnaireDone && !hasShownQuestionnaire.current){
      hasShownQuestionnaire.current = true;
      setShowQuestionnaire(true);
    }
  },[tab]);


  // Cycle end detection — static bilan
  useEffect(()=>{
    if(!state.cycleStart||!state.nom) return;
    if(isCycleEnd(state.cycleStart) && !state.bilanGenere && !showBilan){
      setState(s=>{ const ns={...s,bilanGenere:true}; persist(ns); return ns; });
      const joursFaits = Object.keys(state.histoire||{}).length;
      const streak = getStreak(state.histoire||{});
      const rank = getRank(state.xp||0);
      const progEntries = Object.values(state.histoire||{}).filter(j=>j.prog);
      const avgCompletion = progEntries.length>0 ? Math.round(progEntries.reduce((a,j)=>a+(j.prog?.pct||0),0)/progEntries.length) : 0;
      const score = Math.round((joursFaits/CYCLE_DAYS*40) + (avgCompletion*0.3) + (streak/CYCLE_DAYS*30));
      setBilanData({
        titre: `CYCLE ${state.cycleNum||1} — ${rank.title.toUpperCase()}`,
        verdict: joursFaits>=12 ? "Cycle solide. La base est posée." : joursFaits>=8 ? "Cycle correct. Des ajustements à faire." : "Cycle difficile. Identifier les blocages.",
        analyse: `${joursFaits} jours actifs sur ${CYCLE_DAYS}. Streak de ${streak} jours. Programme complété à ${avgCompletion}%. ${score>=70?"Progression cohérente.":score>=40?"Des hauts et des bas — normal pour un premier cycle.":"La régularité est le chantier principal."}`,
        victoire: streak>=7 ? `Streak de ${streak} jours consécutifs.` : joursFaits>=10 ? `${joursFaits} jours actifs — plus des 2/3 du cycle honoré.` : "Avoir commencé et tenu jusqu'au bout.",
        chantier: avgCompletion<50 ? "Complétion du programme quotidien." : streak<5 ? "La régularité — ne jamais sauter 2 jours consécutifs." : "Augmenter l'intensité et la précision.",
        message_kryos: score>=70 ? "Le fondement est solide. Le cycle 2 peut aller plus loin." : "Le cycle 1 est rarement parfait. Ce qui compte : ce que tu en fais maintenant.",
        score,
      });
      setShowBilan(true);
    }
  },[state.cycleStart, state.histoire]);

  // Kryos daily thought — load once per day
  useEffect(()=>{
    if(!state.nom||!state.facetteId) return;
    const t=today();
    if(state.kryosDailyDate!==t){
      const thought=getKryosDaily(state.facetteId);
      update({kryosDaily:thought,kryosDailyDate:t});
    }
  },[state.nom,state.facetteId]);

  useEffect(()=>{ if(state.nom&&state.facetteId) setScreen("app"); },[]);

  const update=patch=>setState(s=>{ const ns={...s,...patch}; persist(ns); return ns; });

  const handleSetup=data=>{
    const ns={...INIT,...data,lastDay:today(),facettesState:{[data.facetteId]:{xp:0}}};
    persist(ns); setState(ns); setScreen("app");
  };

  const handleVote=vote=>{
    setState(s=>{
      const done=s.votesJour[vote.label]; const dx=done?-vote.xp:vote.xp;
      if(!done) setXpNotif(vote.xp);
      const fXP=Math.max(0,((s.facettesState||{})[s.facetteId]?.xp||0)+dx);
      const ns={...s,xp:Math.max(0,(s.xp||0)+dx),totalVotes:Math.max(0,(s.totalVotes||0)+(done?-1:1)),votesJour:{...s.votesJour,[vote.label]:!done},facettesState:{...(s.facettesState||{}),[s.facetteId]:{xp:fXP}}};
      persist(ns); return ns;
    });
  };
  const handleSommeil=()=>setState(s=>{ const on=!s.sommeilJour,dx=on?10:-10; if(on)setXpNotif(10); const fXP=Math.max(0,((s.facettesState||{})[s.facetteId]?.xp||0)+dx); const ns={...s,sommeilJour:on,xp:Math.max(0,(s.xp||0)+dx),facettesState:{...(s.facettesState||{}),[s.facetteId]:{xp:fXP}}}; persist(ns); return ns; });
  const handleBoss=()=>setState(s=>{ const on=!s.bossJour,dx=on?50:-50; if(on)setXpNotif(50); const fXP=Math.max(0,((s.facettesState||{})[s.facetteId]?.xp||0)+dx); const ns={...s,bossJour:on,xp:Math.max(0,(s.xp||0)+dx),facettesState:{...(s.facettesState||{}),[s.facetteId]:{xp:fXP}}}; persist(ns); return ns; });
  const handleChangeFacette=newId=>setState(s=>{ const fState={...(s.facettesState||{})}; if(!fState[newId])fState[newId]={xp:0}; const ns={...s,facetteId:newId,identite:`Je suis un·e ${FACETTES.find(f=>f.id===newId)?.label.toLowerCase()}`,facettesState:fState}; persist(ns); setTimeout(()=>setKryos("facette_changed"),400); return ns; });



  const handleProgCheck = (dateKey, checks, pct) => {
    setState(s => {
      const newProgJour = { ...s.progJour, [dateKey]: checks };
      const newHist = { ...s.histoire, [dateKey]: { ...(s.histoire[dateKey]||{}), prog: { checks, pct } } };
      const ns = { ...s, progJour: newProgJour, histoire: newHist };
      persist(ns); return ns;
    });
  };

  const handleNextCycle = () => {
    const ns = { ...state, cycleNum:(state.cycleNum||1)+1, cycleStart:today(), progJour:{}, questionnaireDone:false, programmeIA:null, bilanGenere:false };
    setState(ns); persist(ns);
    setShowBilan(false);
    setShowQuestionnaire(true);
  };

  const handleGenererProgramme = (answers={}) => {
    const prog = selectProgramme(state.facetteId, answers);
    if (prog) update({ programmeIA: prog, programmeDate: today(), questionnaireAnswers: answers, questionnaireDone: true, cycleStart: state.cycleStart || today() });
  };

  const handleQuestionnaireSubmit = (answers) => {
    setShowQuestionnaire(false);
    handleGenererProgramme(answers);
  };

  const handleSetTier = (tierId) => {
    update({ tier: tierId });
    setShowPlan(false);
  };

  const handleFeedback=fb=>setState(s=>{ const ns={...s,feedbacks:[...(s.feedbacks||[]),fb]}; persist(ns); return ns; });
  const rank=getRank(state.xp||0); const streak=getStreak(state.histoire||{});
  const f=FACETTES.find(fc=>fc.id===state.facetteId);
  const fcs=(state.facettesState||{})[state.facetteId]||{xp:0}; const fRank=getRank(fcs.xp||0);

  // INTRO
  if(screen==="intro") return (
    <>
      <style>{CSS}</style>
      <div style={{ minHeight:"100vh",background:"#04040f",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24,backgroundImage:`linear-gradient(rgba(0,255,200,.013) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,200,.013) 1px,transparent 1px)`,backgroundSize:"44px 44px" }}>
        <div style={{ animation:"float 5s ease-in-out infinite",marginBottom:32 }}><GemFrog color="#00ffcc" size={160} mood="wise"/></div>
        <p style={{ color:"#00ffcc",fontFamily:"'Orbitron',monospace",fontSize:22,letterSpacing:5,textShadow:"0 0 20px #00ffcc",marginBottom:6 }}>GEM VITALE</p>
        <p style={{ color:"rgba(255,255,255,.18)",fontSize:9,fontFamily:"'Orbitron',monospace",letterSpacing:4,marginBottom:36 }}>TRANSFORMATION IDENTITAIRE</p>
        <button onClick={()=>state.nom?setScreen("app"):setScreen("setup")} style={{ padding:"14px 32px",background:"rgba(0,255,200,.07)",border:"1px solid #00ffcc44",borderRadius:4,cursor:"pointer",color:"#00ffcc",fontFamily:"'Orbitron',monospace",fontSize:11,letterSpacing:3,boxShadow:"0 0 22px rgba(0,255,200,.12)" }}>
          {state.nom?"REPRENDRE":"[ COMMENCER ]"}
        </button>
      </div>
    </>
  );

  if(screen==="setup") return (
    <>
      <style>{CSS}</style>
      {kryos&&<KryosModal dialogueKey={kryos} color={f?.color||"#00ffcc"} onClose={()=>setKryos(null)}/>}
      <SetupScreen onDone={handleSetup} onKryos={setKryos}/>
    </>
  );

  const TABS=[{id:"facette",label:"FACETTE",icon:f?.icon||"◈"},{id:"votes",label:"VOTES",icon:"⚔"},{id:"programme",label:"PROG.",icon:"📋"},{id:"profil",label:"PROFIL",icon:"◎"},{id:"quetes",label:"QUÊTES",icon:"✦"},{id:"retour",label:"RETOUR",icon:"◇"}];

  return (
    <>
      <style>{CSS}</style>
      {kryos&&<KryosModal dialogueKey={kryos} color={f?.color||"#00ffcc"} onClose={()=>setKryos(null)}/>}
      {xpNotif&&<XPNotif xp={xpNotif} onDone={()=>setXpNotif(null)}/>}
      {rankNotif&&<RankNotif rank={rankNotif} onDone={()=>setRankNotif(null)}/> }
      {showDayClose&&<DayCloseModal state={state} onClose={()=>setShowDayClose(false)} onKryos={setKryos}/>}

      <div style={{ background:"#04040f",minHeight:"100vh",paddingBottom:86,backgroundImage:`linear-gradient(rgba(0,255,200,.012) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,200,.012) 1px,transparent 1px)`,backgroundSize:"44px 44px" }}>

        {/* Header */}
        <div style={{ padding:"12px 18px 10px",borderBottom:"1px solid rgba(0,255,200,.06)",display:"flex",justifyContent:"space-between",alignItems:"center",background:"rgba(4,4,15,.92)",backdropFilter:"blur(20px)",position:"sticky",top:0,zIndex:50 }}>
          <span style={{ color:"#00ffcc2a",fontSize:9,fontFamily:"'Orbitron',monospace",letterSpacing:3 }}>GEM VITALE</span>
          <div style={{ display:"flex",gap:11,alignItems:"center" }}>
            {streak>0&&<span style={{ color:"#f59e0b",fontSize:9,fontFamily:"'Orbitron',monospace" }}>🔥{streak}</span>}
            <span style={{ color:rank.color,fontSize:9,fontFamily:"'Orbitron',monospace",textShadow:`0 0 6px ${rank.color}` }}>{rank.id} — {rank.title}</span>
          </div>
        </div>

        {tab==="facette"&&(
          <div>
            <div style={{ background:`linear-gradient(180deg,rgba(${f?.rgb||"0,255,204"},.055) 0%,transparent 100%)`,borderBottom:`1px solid ${f?.color||"#00ffcc"}15` }}>
              <FacetteHUD f={f||FACETTES[0]} fRank={fRank} fXP={fcs.xp||0} streak={streak} identite={state.identite} joursFaits={Object.keys(state.histoire||{}).length} kryosDaily={state.kryosDaily}/>
            </div>
            <div style={{ padding:"13px 16px 0" }}>
              <p style={{ color:"rgba(255,255,255,.15)",fontSize:8,fontFamily:"'Orbitron',monospace",letterSpacing:2,marginBottom:9 }}>
                {new Date().toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"}).toUpperCase()}
              </p>
              <div style={{ display:"flex",gap:5,flexWrap:"wrap",marginBottom:11 }}>
                {(VOTES_DATA[state.facetteId]||[]).map(v=>{ const done=!!(state.votesJour||{})[v.label]; return <div key={v.label} style={{ padding:"5px 8px",background:done?`${f?.color}10`:"rgba(255,255,255,.03)",border:`1px solid ${done?f?.color+"2a":"rgba(255,255,255,.04)"}`,borderRadius:3,fontSize:11,color:done?f?.color:"rgba(255,255,255,.18)",transition:"all .2s" }}>{v.icon} {done?"✓":"·"}</div>; })}
                <div style={{ padding:"5px 8px",background:state.sommeilJour?"rgba(96,165,250,.09)":"rgba(255,255,255,.03)",border:`1px solid ${state.sommeilJour?"#60a5fa2a":"rgba(255,255,255,.04)"}`,borderRadius:3,fontSize:11,color:state.sommeilJour?"#60a5fa":"rgba(255,255,255,.18)" }}>🌙 {state.sommeilJour?"✓":"·"}</div>
              </div>
              <button onClick={()=>setTab("votes")} style={{ width:"100%",padding:"10px",background:`${f?.color}07`,border:`1px solid ${f?.color}1e`,borderRadius:5,color:f?.color,fontFamily:"'Orbitron',monospace",fontSize:9,letterSpacing:3,cursor:"pointer",transition:"all .2s" }}>VOIR LES VOTES DU JOUR →</button>
            </div>
          </div>
        )}

        {tab==="votes"&&<VotesScreen state={state} onVote={handleVote} onSommeil={handleSommeil} onEnergie={n=>update({energieJour:n})} onAurele={()=>{ const q=getNextAurele(state.usedAureles||[]); update({aureleJour:q,usedAureles:[...(state.usedAureles||[]),q]}); }} onAureleAnswer={t=>update({aureleAnswer:t})} onBoss={handleBoss} onDayClose={()=>setShowDayClose(true)} onProgCheck={handleProgCheck}/>}
        {tab==="profil"&&<ProfileScreen state={state} onKryos={setKryos}/>}
        {tab==="quetes"&&<QuestsScreen state={state} onChangeFacette={handleChangeFacette} onKryos={setKryos}/>}
        {tab==="retour"&&<FeedbackScreen state={state} onSubmit={handleFeedback}/>}
        {tab==="programme"&&<ProgrammeScreen state={state} onKryos={setKryos}/>}
        {showBilan&&bilanData&&<BilanCycleScreen state={state} bilan={bilanData} onNextCycle={handleNextCycle} onClose={()=>setShowBilan(false)}/>}
        {showQuestionnaire&&<KryosQuestionnaire facetteId={state.facetteId} onDone={handleQuestionnaireSubmit} onSkip={()=>{setShowQuestionnaire(false);handleGenererProgramme({});}} />}

        {/* Bottom nav */}
        <div style={{ position:"fixed",bottom:0,left:0,right:0,background:"rgba(4,4,15,.97)",borderTop:"1px solid rgba(0,255,200,.06)",display:"flex",justifyContent:"space-around",padding:"9px 0 20px",backdropFilter:"blur(24px)",zIndex:100 }}>
          {TABS.map(t=>{ const active=tab===t.id; const ac=active?(f?.color||"#00ffcc"):"rgba(255,255,255,.18)"; return (
            <button key={t.id} onClick={()=>setTab(t.id)} style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:3,background:"none",border:"none",cursor:"pointer",padding:"4px 18px" }}>
              <span style={{ fontSize:14,color:ac,textShadow:active?`0 0 12px ${ac}`:"none",transition:"all .2s" }}>{t.icon}</span>
              <span style={{ fontSize:7,color:ac,fontFamily:"'Orbitron',monospace",letterSpacing:2,transition:"all .2s" }}>{t.label}</span>
              {active&&<div style={{ width:16,height:1,background:ac,boxShadow:`0 0 4px ${ac}`,borderRadius:1 }}/>}
            </button>
          ); })}
        </div>
      </div>
    </>
  );
}
