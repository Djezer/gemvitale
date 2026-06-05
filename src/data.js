// ═══════════════════════════════════════════════════════════
// RANGS
// ═══════════════════════════════════════════════════════════
export const RANKS = [
  { id:"E", minXP:0,   color:"#4b5563", rgb:"75,85,99",     title:"Corrompue" },
  { id:"D", minXP:50,  color:"#22c55e", rgb:"34,197,94",    title:"Initiée" },
  { id:"C", minXP:150, color:"#3b82f6", rgb:"59,130,246",   title:"Intégrée" },
  { id:"B", minXP:300, color:"#a855f7", rgb:"168,85,247",   title:"Maîtrisée" },
  { id:"A", minXP:500, color:"#f59e0b", rgb:"245,158,11",   title:"Transcendante" },
  { id:"S", minXP:800, color:"#ef4444", rgb:"239,68,68",    title:"Légendaire" },
];
export const GLOBAL_RANKS = [
  { id:"E",   minScore:0,  color:"#4b5563", rgb:"75,85,99",   title:"Corrompue" },
  { id:"D",   minScore:1,  color:"#22c55e", rgb:"34,197,94",  title:"Éveillée" },
  { id:"C",   minScore:2,  color:"#3b82f6", rgb:"59,130,246", title:"Façonnée" },
  { id:"B",   minScore:3,  color:"#a855f7", rgb:"168,85,247", title:"Affinée" },
  { id:"A",   minScore:4,  color:"#f59e0b", rgb:"245,158,11", title:"Rayonnante" },
  { id:"S",   minScore:6,  color:"#ef4444", rgb:"239,68,68",  title:"Légendaire" },
  { id:"SS",  minScore:8,  color:"#ff00ff", rgb:"255,0,255",  title:"Transcendante" },
  { id:"SSS", minScore:12, color:"#ffffff", rgb:"255,255,255",title:"Absolue" },
];

// ═══════════════════════════════════════════════════════════
// FACETTES
// ═══════════════════════════════════════════════════════════
export const FACETTES = [
  { id:"athlete",      label:"Athlète",      icon:"⚡", color:"#00ffcc", rgb:"0,255,204",   stat:"VIT", desc:"Corps forgé, énergie maîtrisée" },
  { id:"createur",     label:"Créateur",     icon:"✦",  color:"#ff6eb4", rgb:"255,110,180", stat:"CRE", desc:"Vision manifestée, art vivant" },
  { id:"entrepreneur", label:"Entrepreneur", icon:"◈",  color:"#ffd700", rgb:"255,215,0",   stat:"STR", desc:"Empire bâti, richesse créée" },
  { id:"sage",         label:"Sage",         icon:"◎",  color:"#a78bfa", rgb:"167,139,250", stat:"INT", desc:"Sagesse profonde, paix intérieure" },
  { id:"explorateur",  label:"Explorateur",  icon:"✧",  color:"#38bdf8", rgb:"56,189,248",  stat:"AGI", desc:"Horizons repoussés, vie vécue" },
  { id:"guerrier",     label:"Guerrier",     icon:"⚔",  color:"#f97316", rgb:"249,115,22",  stat:"FOR", desc:"Mental d'acier, résilience totale" },
];

// ═══════════════════════════════════════════════════════════
// VOTES PAR FACETTE
// ═══════════════════════════════════════════════════════════
export const VOTES_DATA = {
  athlete:      [{label:"Séance de sport",xp:15,icon:"⚡"},{label:"Sommeil 8h",xp:10,icon:"🌙"},{label:"Repas sain",xp:8,icon:"🍃"},{label:"Hydratation 2L",xp:5,icon:"💧"},{label:"Mobilité/stretch",xp:7,icon:"🔥"}],
  createur:     [{label:"Création 30min",xp:15,icon:"✦"},{label:"Publier/partager",xp:12,icon:"📡"},{label:"Lecture/inspiration",xp:8,icon:"📖"},{label:"Protéger son flow",xp:10,icon:"🛡"},{label:"Journaling créatif",xp:7,icon:"✍"}],
  entrepreneur: [{label:"Tâche haute valeur",xp:15,icon:"💎"},{label:"Prospection",xp:12,icon:"⚡"},{label:"Revue métriques",xp:8,icon:"📊"},{label:"Apprendre",xp:8,icon:"🧠"},{label:"Bloquer distractions",xp:7,icon:"🔒"}],
  sage:         [{label:"Méditation",xp:15,icon:"◎"},{label:"Lecture profonde",xp:12,icon:"📜"},{label:"Journaling",xp:10,icon:"✍"},{label:"Temps en nature",xp:8,icon:"🌿"},{label:"Silence intentionnel",xp:7,icon:"🌑"}],
  explorateur:  [{label:"Nouvelle expérience",xp:15,icon:"✧"},{label:"Sortir routine",xp:12,icon:"🌀"},{label:"Curiosité cultivée",xp:8,icon:"🔍"},{label:"Rencontre humaine",xp:10,icon:"🤝"},{label:"Documenter",xp:7,icon:"📝"}],
  guerrier:     [{label:"Défi inconfortable",xp:15,icon:"⚔"},{label:"Résister tentation",xp:12,icon:"🛡"},{label:"Focus 90min",xp:10,icon:"🎯"},{label:"Affronter une peur",xp:15,icon:"🔥"},{label:"Récupération active",xp:7,icon:"⚡"}],
};

// ═══════════════════════════════════════════════════════════
// BOSS LIST
// ═══════════════════════════════════════════════════════════
export const BOSS_LIST = [
  "Jeûne de 16h","2h de création sans interruption","Contacter 5 personnes clés",
  "Méditation 30min + journaling 1h","Sortir totalement de ta zone de confort",
  "Aucun écran avant midi","Entraînement double session",
];

// ═══════════════════════════════════════════════════════════
// VALEURS
// ═══════════════════════════════════════════════════════════
export const VALEURS_CATEGORIES = [
  { cat:"IDENTITÉ",   color:"#00ffcc", vals:["Authenticité","Intégrité","Courage","Dignité","Indépendance","Fierté","Originalité","Singularité"] },
  { cat:"FORCE",      color:"#f97316", vals:["Discipline","Résilience","Persévérance","Maîtrise de soi","Détermination","Endurance","Audace","Rigueur"] },
  { cat:"RELATION",   color:"#ff6eb4", vals:["Famille","Amour","Amitié","Loyauté","Générosité","Empathie","Connexion","Présence"] },
  { cat:"CROISSANCE", color:"#a78bfa", vals:["Sagesse","Apprentissage","Curiosité","Évolution","Humilité","Créativité","Vision","Excellence"] },
  { cat:"IMPACT",     color:"#ffd700", vals:["Impact","Service","Leadership","Héritage","Justice","Contribution","Influence","Responsabilité"] },
  { cat:"ÊTRE",       color:"#38bdf8", vals:["Paix","Liberté","Équilibre","Santé","Abondance","Gratitude","Joie","Plénitude"] },
];

export const PRE_IDENTITES = {
  athlete:      ["Je suis quelqu'un qui prend soin de son corps comme de son arme principale.","Je suis quelqu'un dont l'énergie physique est la fondation de tout le reste.","Je suis un·e athlète — mon corps est un projet permanent.","Je suis quelqu'un qui se dépasse physiquement pour forger son mental.","Je suis quelqu'un qui honore son corps par la discipline quotidienne."],
  createur:     ["Je suis quelqu'un qui transforme ses idées en œuvres concrètes.","Je suis quelqu'un dont la créativité est un muscle qu'on entraîne chaque jour.","Je suis un·e créateur·rice — je produis, je partage, je laisse une trace.","Je suis quelqu'un qui crée même quand il/elle n'en a pas envie.","Je suis quelqu'un dont la voix intérieure mérite d'exister dans le monde."],
  entrepreneur: ["Je suis quelqu'un qui construit quelque chose qui existera après moi.","Je suis quelqu'un qui transforme la valeur créée en impact économique réel.","Je suis un·e entrepreneur·e — chaque journée est un investissement dans mon empire.","Je suis quelqu'un qui pense en termes de systèmes, pas de tâches.","Je suis quelqu'un dont la vision dépasse largement sa situation actuelle."],
  sage:         ["Je suis quelqu'un qui cherche à comprendre avant d'agir.","Je suis quelqu'un dont la paix intérieure est la richesse première.","Je suis un·e sage — je cultive la clarté mentale comme d'autres cultivent la force.","Je suis quelqu'un qui observe le monde avec curiosité et sans jugement hâtif.","Je suis quelqu'un qui sait que la sagesse s'acquiert dans le silence autant que dans l'action."],
  explorateur:  ["Je suis quelqu'un pour qui chaque jour est une opportunité d'expérimenter.","Je suis quelqu'un qui refuse de mourir sans avoir vraiment vécu.","Je suis un·e explorateur·rice — l'inconfort est mon territoire naturel.","Je suis quelqu'un qui apprend en faisant, pas en attendant d'être prêt·e.","Je suis quelqu'un dont la vie est une collection d'expériences intentionnelles."],
  guerrier:     ["Je suis quelqu'un qui fait face à ce que les autres fuient.","Je suis quelqu'un dont le mental est forgé dans la résistance quotidienne.","Je suis un·e guerrier·ère — la difficulté est mon entraînement, pas mon ennemi.","Je suis quelqu'un qui choisit délibérément l'inconfort pour grandir.","Je suis quelqu'un dont la volonté est l'arme la plus redoutable."],
};

// ═══════════════════════════════════════════════════════════
// QUESTIONS QUESTIONNAIRE PAR FACETTE
// ═══════════════════════════════════════════════════════════
export const QUESTIONS_PROGRAMME = {
  athlete: [
    { id:"horaires",     label:"Tu travailles à quels horaires ?",                        type:"select", options:["Matin (fini avant 14h)","Journée classique (9h-18h)","Soir/nuit","Variable/freelance"] },
    { id:"lieu",         label:"Tu t'entraînes où ?",                                     type:"select", options:["Salle de sport complète","Home gym basique","Extérieur/running","Plusieurs selon les jours"] },
    { id:"duree",        label:"Temps réel par séance",                                   type:"select", options:["30 minutes max","45 minutes","1 heure","1h30 et plus"] },
    { id:"niveau",       label:"Ton niveau sportif actuel",                               type:"select", options:["Débutant — moins de 3 mois","Intermédiaire — 3 à 12 mois","Avancé — plus d'1 an","Compétiteur/sportif confirmé"] },
    { id:"sport_actuel", label:"Tu fais quoi comme sport en ce moment ?",                 type:"text",   placeholder:"Ex: footing 2x/sem, salle 1x/sem... ou rien depuis 6 mois" },
    { id:"point_faible", label:"Ton point faible physique le plus honnête",               type:"select", options:["Endurance — je m'essoufle vite","Force — je manque de puissance","Régularité — je commence et j'arrête","Alimentation — c'est là que ça coince","Récupération — je dors mal"] },
    { id:"contrainte",   label:"Contrainte physique à prendre en compte",                 type:"select", options:["Aucune — je peux tout faire","Dos/lombaires fragiles","Genoux sensibles","Épaules fragiles","Autre blessure"] },
    { id:"objectif",     label:"Ton objectif principal ces 15 jours",                     type:"select", options:["Perdre du poids/recomposition","Prendre de la masse","Améliorer mes performances","Retrouver de l'énergie","Esthétique"] },
    { id:"chiffre",      label:"Objectif chiffré ou résultat concret visé",               type:"text",   placeholder:"Ex: perdre 2kg, courir 5km, faire 10 tractions..." },
    { id:"seances",      label:"Séances sport/semaine — ce que tu peux vraiment tenir",   type:"select", options:["2 séances","3 séances","4 séances","5 séances ou plus"] },
    { id:"jours_fixes",  label:"Jours fixes disponibles",                                 type:"text",   placeholder:"Ex: lundi, mercredi, vendredi soir" },
    { id:"creneau",      label:"Tu préfères t'entraîner quand ?",                         type:"select", options:["Matin avant 9h","Midi","Après-midi","Soir après 18h"] },
    { id:"alim_actuelle",label:"Ton alimentation actuelle",                               type:"select", options:["Chaos total","Structure partielle","Plutôt propre","Déjà structurée"] },
    { id:"alim_probleme",label:"Ton plus grand problème alimentaire",                     type:"select", options:["Grignotage","Restaurants/repas sociaux","Portions trop grandes","Pas assez de protéines","Aucune structure"] },
    { id:"sommeil",      label:"Tu dors combien d'heures en moyenne ?",                   type:"select", options:["Moins de 6h","6-7h","7-8h","8h et plus"] },
    { id:"stress",       label:"Ton niveau de stress général",                            type:"select", options:["Bas","Modéré","Élevé","Très élevé"] },
    { id:"echec",        label:"Ce que tu as déjà essayé et abandonné",                   type:"text",   placeholder:"Ex: salle 3x/sem, régime, running le matin..." },
    { id:"pourquoi",     label:"Pourquoi ça n'a pas tenu selon toi ?",                    type:"text",   placeholder:"Sois honnête — manque de temps, motivation, résultats trop lents..." },
  ],
  createur: [
    { id:"medium",       label:"Ton medium créatif principal",                            type:"select", options:["Écriture/contenu","Vidéo/photo","Design/art visuel","Musique/son","Code/produit","Autre"] },
    { id:"projet",       label:"Ton projet en ce moment",                                 type:"text",   placeholder:"Décris ce sur quoi tu travailles ou veux travailler" },
    { id:"rythme",       label:"Temps de création actuel par jour",                       type:"select", options:["0 — je ne crée pas encore","15-30 min","30-60 min","Plus d'1h"] },
    { id:"objectif",     label:"Objectif créatif ces 15 jours",                           type:"select", options:["Construire une audience","Terminer un projet","Monétiser ma création","M'exprimer/me libérer","Créer une habitude"] },
    { id:"blocage",      label:"Ta résistance principale",                                type:"select", options:["Peur du jugement","Perfectionnisme","Manque d'inspiration","Manque de temps","Procrastination"] },
    { id:"environnement",label:"Ton environnement de création",                           type:"select", options:["J'ai un espace dédié calme","Je crée partout/nomade","Environnement bruyant/perturbé","Je n'ai pas encore d'espace"] },
    { id:"dispo",        label:"Créneaux disponibles",                                    type:"select", options:["Matin uniquement","Soir uniquement","Week-end principalement","Flexible"] },
    { id:"publie",       label:"Tu publies en ce moment ?",                               type:"select", options:["Non, jamais","Rarement/irrégulièrement","Oui mais pas assez","Oui régulièrement"] },
    { id:"inspiration",  label:"Ce qui t'inspire le plus",                                type:"text",   placeholder:"Artistes, œuvres, créateurs qui t'allument..." },
    { id:"echec",        label:"Ce que tu as essayé et abandonné",                        type:"text",   placeholder:"Ex: blog arrêté, chaîne YouTube, projet non terminé..." },
  ],
  entrepreneur: [
    { id:"stade",        label:"Stade de ton projet",                                     type:"select", options:["Idée — pas encore démarré","Validation — premiers clients","Croissance — revenus réguliers","Scale — optimiser et déléguer"] },
    { id:"secteur",      label:"Secteur/type de business",                                type:"select", options:["Service/conseil","Produit digital","E-commerce/physique","SaaS/tech","Autre"] },
    { id:"revenus",      label:"Revenus mensuels actuels (business)",                     type:"select", options:["0€ — pas encore","1-500€","500-2000€","2000-5000€","Plus de 5000€"] },
    { id:"objectif",     label:"Objectif revenus ces 15 jours",                           type:"select", options:["Premiers 500€","1000-3000€/mois","5000-10000€/mois","Plus de 10000€/mois"] },
    { id:"blocage",      label:"Ton blocage principal",                                   type:"select", options:["Trouver des clients","Passer à l'action","Gestion du temps","Mindset/peur d'échouer","Compétences manquantes"] },
    { id:"dispo",        label:"Heures dédiées/semaine au projet",                        type:"select", options:["Moins de 5h","5-15h","15-30h","Plus de 30h — full time"] },
    { id:"force",        label:"Ta force principale",                                     type:"select", options:["Créer/construire","Vendre/convaincre","Analyser/optimiser","Réseau/relations"] },
    { id:"perte_temps",  label:"Ta plus grande perte de temps actuelle",                  type:"select", options:["Réseaux sociaux","Emails/messages","Tâches peu importantes","Réunions inutiles","Procrastination"] },
    { id:"contexte",     label:"Ton contexte",                                            type:"text",   placeholder:"Salarié en parallèle? Étudiant? Full entrepreneur? Famille?" },
    { id:"echec",        label:"Ce qui a déjà échoué",                                    type:"text",   placeholder:"Ex: projet arrêté, client perdu, produit non lancé..." },
  ],
  sage: [
    { id:"pratique",     label:"Ta pratique contemplative actuelle",                      type:"select", options:["Aucune — je commence","Méditation occasionnelle","Pratique régulière","Pratique avancée"] },
    { id:"objectif",     label:"Ce que tu cherches",                                      type:"select", options:["Calmer l'anxiété","Clarté mentale/décisions","Connexion à soi/sens","Paix intérieure durable"] },
    { id:"tradition",    label:"Approche qui te parle",                                   type:"select", options:["Stoïcisme/philosophie","Bouddhisme/pleine conscience","Psychologie moderne","Spiritualité libre","Aucune préférence"] },
    { id:"dispo",        label:"Temps possible par jour",                                 type:"select", options:["5-10 min","15-20 min","30 min","Plus d'1h"] },
    { id:"obstacle",     label:"Ton obstacle principal",                                  type:"select", options:["Esprit agité — difficile de me poser","Manque de régularité","Scepticisme","Environnement bruyant"] },
    { id:"lecture",      label:"Type de lectures qui t'attirent",                         type:"select", options:["Philosophie/essais","Psychologie/neurosciences","Biographies","Fiction inspirante"] },
    { id:"sommeil",      label:"Qualité de ton sommeil",                                  type:"select", options:["Mauvaise — je dors mal","Irrégulière","Correcte","Bonne"] },
    { id:"ecrans",       label:"Temps écran quotidien estimé",                            type:"select", options:["Moins de 2h","2-4h","4-6h","Plus de 6h"] },
    { id:"question",     label:"La question profonde que tu portes en ce moment",         type:"text",   placeholder:"Ce qui t'habite, ce que tu cherches à comprendre sur toi-même..." },
    { id:"echec",        label:"Ce que tu as essayé et abandonné",                        type:"text",   placeholder:"Ex: méditation 30j, journaling, retraite..." },
  ],
  explorateur: [
    { id:"style",        label:"Ton style d'exploration préféré",                         type:"select", options:["Voyages/géographique","Expériences humaines/sociales","Apprentissages/compétences","Aventure physique/nature"] },
    { id:"frein",        label:"Ce qui te retient le plus",                               type:"select", options:["Argent/budget","Temps/obligations","Peur/zone de confort","Solitude/pas de compagnon","Habitudes bien ancrées"] },
    { id:"frequence",    label:"Fréquence d'aventures souhaitée",                         type:"select", options:["Quelque chose de nouveau chaque jour","1 expérience forte/semaine","1 grande aventure/mois"] },
    { id:"objectif",     label:"Ce que tu veux vivre ces 15j",                            type:"select", options:["Sortir de ma routine","Voyager quelque part","Rencontrer des gens différents","Développer une compétence inattendue"] },
    { id:"budget",       label:"Budget mensuel exploration",                              type:"select", options:["Moins de 50€","50-200€","200-500€","Pas de limite"] },
    { id:"inconfort",    label:"Ton plus grand inconfort à traverser",                    type:"select", options:["Parler à des inconnus","Voyager seul","Essayer quelque chose où je suis nul","M'engager dans l'incertain"] },
    { id:"routine",      label:"Ton niveau de routine actuel",                            type:"select", options:["Très routinier — tout est planifié","Assez routinier","Un peu routinier","Plutôt imprévisible"] },
    { id:"derniere",     label:"Dernière vraie aventure vécue",                           type:"text",   placeholder:"Quand? Quoi? Ce que ça t'a apporté..." },
    { id:"reve",         label:"L'expérience que tu rêves de vivre",                      type:"text",   placeholder:"Ce que tu n'as jamais osé faire mais qui t'attire..." },
    { id:"docs",         label:"Tu documentes tes expériences ?",                         type:"select", options:["Jamais","Parfois en photos","Journal/écriture","Contenu partagé"] },
  ],
  guerrier: [
    { id:"combat",       label:"Ton combat principal en ce moment",                       type:"select", options:["Discipline/régularité","Gestion des émotions","Résistance à la douleur/effort","Peur/courage","Dépendances/mauvaises habitudes"] },
    { id:"niveau",       label:"Ton niveau mental actuel honnêtement",                    type:"select", options:["Je cède souvent à la facilité","Je résiste parfois mais pas toujours","Je suis relativement discipliné","Je cherche le niveau supérieur"] },
    { id:"pratique",     label:"Ta pratique de renforcement actuelle",                    type:"select", options:["Aucune structure","Sport régulier","Méditation/stoïcisme","Exposition volontaire à l'inconfort"] },
    { id:"intensite",    label:"Intensité souhaitée",                                     type:"select", options:["Je veux commencer doucement","Prêt pour un rythme soutenu","Je veux quelque chose d'extrême"] },
    { id:"ennemi",       label:"Ton ennemi intérieur principal",                          type:"select", options:["La procrastination","Le confort/la mollesse","La colère/réactivité","Le doute de soi","Les distractions"] },
    { id:"dependance",   label:"Une habitude que tu veux éliminer",                       type:"select", options:["Réseaux sociaux excessifs","Alcool/substances","Nourriture/sucre","Pornographie","Autre"] },
    { id:"physique",     label:"Ta pratique physique actuelle",                           type:"select", options:["Aucune","Sport 1-2x/sem","Sport 3-4x/sem","Sport quotidien"] },
    { id:"victoire",     label:"Ta dernière grande victoire sur toi-même",                type:"text",   placeholder:"Quelque chose de difficile que tu as accompli..." },
    { id:"objectif",     label:"Ce que tu veux forger en 15j",                            type:"text",   placeholder:"Quelle version de toi veux-tu être à la fin du protocole?" },
    { id:"peur",         label:"La peur que tu évites le plus",                           type:"text",   placeholder:"Sois honnête — qu'est-ce qui te fait reculer systématiquement?" },
  ],
};

// ═══════════════════════════════════════════════════════════
// INTROS KRYOS PAR FACETTE (questionnaire)
// ═══════════════════════════════════════════════════════════
export const KRYOS_PROGRAMME_INTRO = {
  athlete:      { title:"PROGRAMME ATHLÈTE",      mood:"stern",   lines:["Avant de te donner un programme.","J'ai besoin de savoir exactement où tu en es.","Pas pour te juger. Pour ne pas te donner quelque chose d'inadapté.","Réponds honnêtement. C'est pour toi."] },
  createur:     { title:"PROGRAMME CRÉATEUR",     mood:"curious", lines:["Un programme créatif sans contexte, c'est du bruit.","Je veux comprendre ton univers avant de construire quelque chose.","10 questions. Sois précis.","Ce que tu mets ici oriente ton programme vers ton cas exact."] },
  entrepreneur: { title:"PROGRAMME ENTREPRENEUR", mood:"wise",    lines:["Un entrepreneur sans programme adapté à son stade perd du temps.","Je vais te poser des questions sur ta situation réelle.","Pas sur tes rêves. Sur là où tu en es maintenant.","C'est la seule façon de construire quelque chose d'utile."] },
  sage:         { title:"PROGRAMME SAGE",         mood:"wise",    lines:["La sagesse commence par la connaissance de soi.","Avant de te donner un chemin, je veux comprendre où tu es.","Ces questions sont une pratique en elles-mêmes.","Réponds lentement. Observe ce qui monte."] },
  explorateur:  { title:"PROGRAMME EXPLORATEUR",  mood:"curious", lines:["L'exploration sans intention est du tourisme.","Je veux comprendre ce que tu cherches vraiment.","Pas l'aventure de surface. L'aventure qui compte.","10 questions. Sois honnête sur tes freins."] },
  guerrier:     { title:"PROGRAMME GUERRIER",     mood:"stern",   lines:["Un guerrier connaît ses ennemis.","Y compris les intérieurs.","Je vais te poser des questions directes.","Réponds sans filtres. C'est là que le programme devient redoutable."] },
};

// ═══════════════════════════════════════════════════════════
// 10 PROGRAMMES PAR FACETTE (statiques, sélectionnés par questionnaire)
// ═══════════════════════════════════════════════════════════
export const PROGRAMMES = {
  athlete: [
    {
      id: "A1",
      profil: "Débutant · Perte de poids · 3x/sem",
      match: a => a.niveau?.includes("Débutant") && a.objectif?.includes("Perdre") && ["2 séances","3 séances"].includes(a.seances),
      titre_cycle: "CYCLE 1 — REPRISE & RECOMPOSITION",
      objectif_cycle: "Installer la régularité, créer le déficit calorique, -1 à -2kg en 15j",
      sport: [
        "Séance A (Lun/Jeu) — Circuit full body: Squat 3×15, Pompes 3×10, Rowing haltères 3×12, Planche 3×30s",
        "Séance B (Sam) — Cardio 30min: marche rapide ou vélo à 70% FCmax — finir aussi frais qu'au départ",
        "Règle d'or: ne jamais aller à l'échec — s'arrêter 2 reps avant. Progresser quand les séries sont propres",
        "Échauffement obligatoire: 5min vélo/rameur + 1 série légère avant chaque exercice",
      ],
      lectures: [
        "Atomic Habits — James Clear (construire la régularité, pas la motivation)",
        "The Body Fat Solution — Tom Venuto (recomposition sans obsession calorique)",
        "Born to Run — Christopher McDougall (retrouver le plaisir du mouvement)",
      ],
      habitudes: [
        "~130g de protéines/jour — une grosse source à chaque repas (paume de main = portion)",
        "Règle de l'assiette: ½ légumes, ¼ protéine, ¼ féculents — moins de féculents les jours sans sport",
        "Pesée 3x/sem le matin — piloter sur la moyenne hebdo, cible -0.3 à -0.5kg/sem",
        "Marche 20-30min les jours sans séance — ça compte dans le bilan calorique",
      ],
      planning: [
        "Lun: Séance A (45min) — circuit full body",
        "Mar: Marche 25min + repas structuré",
        "Mer: Repos actif — mobilité 15min ou marche",
        "Jeu: Séance A (45min) — même circuit, tenter de progresser",
        "Ven: Marche 30min + préparation repas semaine suivante",
        "Sam: Séance B (30min cardio)",
        "Dim: Repos total — récupération prioritaire",
      ],
      non_negotiables: [
        "3 séances minimum, pas de semaine blanche quelle que soit la raison",
        "130g de protéines chaque jour — c'est le levier anti-fonte musculaire",
        "Pas de pesée quotidienne — seulement lundi/mercredi/vendredi matin",
        "Finir les footings aussi frais qu'au départ — lenteur = entraînement",
        "Dormir 7h minimum les nuits avant séance",
      ],
    },
    {
      id: "A2",
      profil: "Débutant · Prise de masse · Salle complète",
      match: a => a.niveau?.includes("Débutant") && a.objectif?.includes("masse") && a.lieu?.includes("Salle"),
      titre_cycle: "CYCLE 1 — FONDATIONS MUSCULAIRES",
      objectif_cycle: "Maîtriser les mouvements de base, créer le surplus calorique, poser les fondations",
      sport: [
        "Séance A Push (Lun/Jeu) — Développé couché 3×8-10, Développé épaules 3×10, Dips ou pompes lestées 3×10, Triceps poulie 3×12",
        "Séance B Pull (Mar/Ven) — Tirage vertical 3×8-10, Rowing barre 3×8-10, Curl biceps 3×12, Face pull 3×15",
        "Séance C Jambes (Mer ou Sam) — Squat 3×10, Presse 3×12, Leg curl 3×12, Mollets 4×15",
        "Règle d'or: technique parfaite avant d'augmenter la charge — film-toi pour vérifier",
      ],
      lectures: [
        "Starting Strength — Mark Rippetoe (bible des mouvements de base pour débutant)",
        "The New Encyclopedia of Modern Bodybuilding — Arnold (vision complète de la musculation)",
        "Bigger Leaner Stronger — Michael Matthews (programme scientifique pour débutant)",
      ],
      habitudes: [
        "~160g de protéines/jour — whey post-séance si difficile d'atteindre l'objectif",
        "Surplus calorique de 300-400 kcal les jours de séance seulement",
        "Manger dans les 30-60min après la séance — fenêtre anabolique réelle",
        "Dormir 8h minimum — c'est pendant le sommeil que les muscles se construisent",
      ],
      planning: [
        "Lun: Séance A Push — haut du corps",
        "Mar: Séance B Pull — dos et biceps",
        "Mer: Séance C Jambes",
        "Jeu: Repos ou cardio léger 20min",
        "Ven: Séance A Push — progression sur les charges",
        "Sam: Séance B Pull",
        "Dim: Repos total — sortie, marche, récupération",
      ],
      non_negotiables: [
        "4 séances minimum par semaine — la fréquence est le principal levier débutant",
        "160g de protéines chaque jour sans exception",
        "Jamais à l'échec les 4 premières semaines — technique d'abord",
        "Augmenter la charge seulement quand les séries sont propres sur toute la fourchette",
        "8h de sommeil — c'est une séance à part entière",
      ],
    },
    {
      id: "A3",
      profil: "Intermédiaire · Recomposition · 4-5x/sem",
      match: a => a.niveau?.includes("Intermédiaire") && (a.objectif?.includes("recomposition") || a.objectif?.includes("Perdre")) && ["4 séances","5 séances"].includes(a.seances),
      titre_cycle: "CYCLE 1 — RECOMPOSITION INTERMÉDIAIRE",
      objectif_cycle: "Maintenir la masse musculaire, réduire la graisse, améliorer la définition",
      sport: [
        "Séance Push — Développé couché 4×6-8, Développé incliné 3×10, Épaules 3×10, Triceps 3×12",
        "Séance Pull — Tractions 4×6-8, Rowing haltères 3×10, Biceps 3×12, Face pull 3×15",
        "Séance Jambes — Squat 4×6-8, Soulevé de terre roumain 3×10, Fentes 3×12, Mollets 4×15",
        "Cardio HIIT 2x/sem — 20min max: 30s effort intense / 30s récup × 10 rounds",
      ],
      lectures: [
        "Burn the Fat, Feed the Muscle — Tom Venuto (recomposition scientifique)",
        "The Lean Muscle Diet — Lou Schuler (alimentation ciblée pour la recomposition)",
        "Can't Hurt Me — David Goggins (mental pour maintenir l'intensité sur la durée)",
      ],
      habitudes: [
        "~180g de protéines/jour — maintenir la masse en déficit calorique modéré",
        "Déficit de 300 kcal les jours sans sport, maintenance les jours de séance lourde",
        "Mesures corporelles 1x/sem — tour de taille + photos: meilleur indicateur que la balance",
        "Pas d'alcool en semaine — 400 kcal vides qui sabotent la recomposition",
      ],
      planning: [
        "Lun: Push lourd",
        "Mar: Pull + HIIT 20min",
        "Mer: Repos actif — marche ou mobilité",
        "Jeu: Jambes lourd",
        "Ven: Push + HIIT 20min",
        "Sam: Pull léger / pump",
        "Dim: Repos total",
      ],
      non_negotiables: [
        "180g de protéines/jour — le levier anti-catabolisme numéro 1",
        "HIIT 2x maximum — pas plus, risque de surentraînement en déficit",
        "Mesures 1x/sem pas plus — la balance quotidienne rend fou",
        "Progresser sur au moins 1 exercice par semaine — sinon c'est du cardio déguisé",
        "Dormir 7-8h — le cortisol détruit la recomposition",
      ],
    },
    {
      id: "A4",
      profil: "Intermédiaire · Performance running",
      match: a => a.niveau?.includes("Intermédiaire") && a.objectif?.includes("performances"),
      titre_cycle: "CYCLE 1 — BASE AÉROBIE & RENFORCEMENT",
      objectif_cycle: "Construire le moteur aérobie, renforcer les appuis, prévenir les blessures",
      sport: [
        "Footings EF 4x/sem — 100% endurance fondamentale à ~75% FCmax, allure confortable",
        "Séance muscu A (Lun) — Squat 3×10, Hip thrust 3×12, Gainage 3×45s, Mollets 4×15",
        "Séance muscu B (Jeu) — Fentes 3×12, Soulevé de terre roumain 3×10, Step-up 3×12",
        "1 sortie longue/sem (Dim) — 15-20min de plus que la semaine précédente, allure EF",
      ],
      lectures: [
        "80/20 Running — Matt Fitzgerald (la règle d'or de l'entraînement en endurance)",
        "Born to Run — Christopher McDougall (retrouver la mécanique naturelle)",
        "The Runner's Body — Ross Tucker (physiologie du coureur expliquée simplement)",
      ],
      habitudes: [
        "~150g de protéines/jour — protéger le muscle en volume de course",
        "Glucides avant la sortie longue — pain complet, flocons d'avoine, banane",
        "Mobilité hanche + cheville 10min après chaque footing",
        "Carnet de bord: noter allure, cardio, ressenti après chaque sortie",
      ],
      planning: [
        "Lun: Footing EF 30min + muscu A",
        "Mar: Footing EF 25min",
        "Mer: Repos ou marche active",
        "Jeu: Footing EF 30min + muscu B",
        "Ven: Footing EF court 20min",
        "Sam: Repos — préparation sortie longue",
        "Dim: Sortie longue EF",
      ],
      non_negotiables: [
        "100% EF sur les footings — aucune séance 'parce que j'ai de l'énergie'",
        "Muscu 2x/sem minimum — le renforcement prévient 80% des blessures",
        "Mobilité après chaque sortie — 10min qui changent tout sur la durée",
        "Augmenter le volume de max 10% par semaine",
        "Dormir 7-8h — la récupération est l'entraînement",
      ],
    },
    {
      id: "A5",
      profil: "Avancé · Force · Salle complète",
      match: a => (a.niveau?.includes("Avancé") || a.niveau?.includes("Compétiteur")) && a.objectif?.includes("performances") && a.lieu?.includes("Salle"),
      titre_cycle: "CYCLE 1 — FORCE MAXIMALE",
      objectif_cycle: "Progresser sur les lifts principaux, atteindre de nouveaux maxima",
      sport: [
        "Séance A Squat/Push (Lun) — Squat 5×5 (85%RM), Développé couché 4×5, Dips lestés 3×8",
        "Séance B Deadlift/Pull (Mer) — Soulevé de terre 4×4 (87%RM), Tractions lestées 4×6, Rowing barre 3×8",
        "Séance C Overhead/Accessoires (Ven) — Développé militaire 4×5, Squat frontal 3×6, Accessoires",
        "Jamais deux séances lourdes dos-à-dos — minimum 48h entre chaque",
      ],
      lectures: [
        "Practical Programming — Rippetoe & Kilgore (programmation force avancée)",
        "The Science and Practice of Strength Training — Zatsiorsky (approche scientifique)",
        "Extreme Ownership — Jocko Willink (mental pour maintenir l'intensité)",
      ],
      habitudes: [
        "~200g de protéines/jour — masse musculaire élevée = besoins élevés",
        "Surplus calorique modéré 200-300 kcal — gain de force pur, pas de masse excessive",
        "Journal de séance obligatoire — noter chaque charge, chaque rep, chaque sensation",
        "Cryothérapie ou bain froid après séance lourde — inflammation maîtrisée",
      ],
      planning: [
        "Lun: Séance A — Squat + Push lourd",
        "Mar: Repos actif — cardio léger 20min ou mobilité",
        "Mer: Séance B — Deadlift + Pull lourd",
        "Jeu: Repos — récupération complète",
        "Ven: Séance C — Overhead + accessoires",
        "Sam: Repos ou sport plaisir",
        "Dim: Repos total — préparation semaine suivante",
      ],
      non_negotiables: [
        "Suivre le programme — pas d'improvisation sur les charges ou exercices",
        "200g de protéines chaque jour",
        "Journal de séance rempli à chaque entraînement",
        "Dormir 8h — les adaptations neuromusculaires se font la nuit",
        "Déload toutes les 4 semaines — 60% des charges, volume réduit",
      ],
    },
    {
      id: "A6",
      profil: "Contrainte physique · Remise en forme douce",
      match: a => a.contrainte && !a.contrainte.includes("Aucune"),
      titre_cycle: "CYCLE 1 — REMISE EN FORME ADAPTÉE",
      objectif_cycle: "Retrouver la mobilité, renforcer sans aggraver, installer une routine durable",
      sport: [
        "Séance A (Lun/Jeu) — Travail adapté: exercices sans charge axiale, mobilité douce",
        "Marche active 30min × 4/sem — cadence modérée, terrain plat, chaussures adaptées",
        "Natation ou vélo si disponible — activité portée, zéro impact articulaire",
        "Kiné/mobilité 15min quotidien — spécifique à la zone concernée",
      ],
      lectures: [
        "Healing Back Pain — John Sarno (comprendre la douleur chronique différemment)",
        "Becoming a Supple Leopard — Kelly Starrett (mobilité et prévention blessures)",
        "The 4-Hour Body — Tim Ferriss (minimal effective dose pour le corps)",
      ],
      habitudes: [
        "~130g de protéines/jour — maintenir la masse musculaire pendant la rééducation",
        "Anti-inflammatoires naturels: curcuma, oméga-3, sommeil",
        "Écouter la douleur — douleur = signal, pas ennemi. Distinguer inconfort et blessure",
        "Consulter un kiné pour valider les exercices avant de commencer",
      ],
      planning: [
        "Lun: Séance A adaptée + mobilité 15min",
        "Mar: Marche 30min",
        "Mer: Natation/vélo 30min ou repos",
        "Jeu: Séance A adaptée + mobilité 15min",
        "Ven: Marche 30min",
        "Sam: Activité douce au choix",
        "Dim: Repos et récupération",
      ],
      non_negotiables: [
        "Valider chaque exercice avec un professionnel de santé",
        "Zéro douleur aiguë pendant les exercices — inconfort ok, douleur non",
        "Régularité > intensité — 4 séances légères valent mieux que 2 séances intenses",
        "Sommeil 8h — la réparation tissulaire se fait la nuit",
        "Patience — une remise en forme adaptée prend 2x plus de temps mais dure 10x plus",
      ],
    },
    {
      id: "A7",
      profil: "Peu de temps · HIIT · 30min max",
      match: a => a.duree?.includes("30 minutes"),
      titre_cycle: "CYCLE 1 — EFFICACITÉ MAXIMALE 30MIN",
      objectif_cycle: "Maximum de résultats en minimum de temps, installer la régularité",
      sport: [
        "Circuit HIIT A (Lun/Mer/Ven) — 25min: Burpees 3×10, Squat sauté 3×15, Pompes 3×12, Mountain climbers 3×20, Gainage 3×30s",
        "Cardio court (Mar/Jeu) — 20min: Corde à sauter ou sprint 30s/30s × 10 rounds",
        "Progression: augmenter les reps ou diminuer les temps de repos — pas la durée",
        "Pas d'échauffement = blessure. 5min obligatoires avant chaque circuit",
      ],
      lectures: [
        "Spark — John Ratey (l'exercice court transforme le cerveau — la motivation vient après)",
        "The One-Minute Workout — Martin Gibala (la science du HIIT, court et efficace)",
        "Atomic Habits — James Clear (enchaîner les petites habitudes pour durer)",
      ],
      habitudes: [
        "~120g de protéines/jour — objectif réaliste pour quelqu'un de très occupé",
        "Préparer sa tenue la veille — réduire la friction à zero",
        "Entraîner à la même heure chaque jour — ancrage comportemental",
        "Pas de perfection — une séance de 20min vaut mieux que rien",
      ],
      planning: [
        "Lun: Circuit HIIT A (25min)",
        "Mar: Cardio court (20min)",
        "Mer: Circuit HIIT A (25min)",
        "Jeu: Cardio court (20min)",
        "Ven: Circuit HIIT A (25min)",
        "Sam: Marche ou repos",
        "Dim: Repos total",
      ],
      non_negotiables: [
        "5 séances minimum — le volume compense l'intensité modérée",
        "Jamais sauter lundi — le début de semaine donne le ton",
        "Préparer sa tenue et son espace la veille",
        "Minimum 120g de protéines — l'alimentation fait 70% du résultat",
        "Si une séance tombe — la refaire le lendemain, pas l'annuler",
      ],
    },
    {
      id: "A8",
      profil: "Avancé · Endurance trail/running",
      match: a => (a.niveau?.includes("Avancé") || a.niveau?.includes("Compétiteur")) && a.sport_actuel?.toLowerCase().includes("run"),
      titre_cycle: "CYCLE 1 — VOLUME & SPÉCIFICITÉ",
      objectif_cycle: "Construire le volume kilométrique, renforcer les appuis, optimiser la nutrition course",
      sport: [
        "Volume hebdo: 50-60km répartis sur 5-6 sorties à dominante EF (80% du volume)",
        "1 séance qualité/sem — seuil 20min ou VMA courts 6×1000m",
        "Renforcement spécifique 2x/sem — fessiers, ischio, mollets, stabilisateurs cheville",
        "Sortie longue progressive — +10% volume/semaine maximum",
      ],
      lectures: [
        "Running with the Kenyans — Adharanand Finn (comprendre l'entraînement d'élite)",
        "Training for the Uphill Athlete — Killian Jornet (méthode trail avancée)",
        "The Sports Gene — David Epstein (science de la performance et adaptabilité)",
      ],
      habitudes: [
        "~170g de protéines/jour + glucides adaptés au volume",
        "Nutrition avant/pendant/après — gels ou dattes sur les sorties >1h",
        "Récupération active: bain froid ou compression post-séance longue",
        "Analyse Strava hebdo — tendances cardio, allures, zones d'effort",
      ],
      planning: [
        "Lun: Footing EF 45min + renforcement",
        "Mar: Footing EF 1h",
        "Mer: Séance qualité (seuil ou VMA)",
        "Jeu: Footing EF 50min + renforcement",
        "Ven: Footing EF récupération 30min",
        "Sam: Repos",
        "Dim: Sortie longue EF",
      ],
      non_negotiables: [
        "80% du volume en EF — pas de héros sur les footings faciles",
        "Renforcement 2x/sem sans exception — prévention blessures",
        "Nutrition pendant les sorties longues — ne jamais partir à jeun >1h",
        "Augmentation volume max 10%/semaine",
        "1 semaine de décharge toutes les 4 semaines",
      ],
    },
    {
      id: "A9",
      profil: "Intermédiaire · Home gym",
      match: a => a.niveau?.includes("Intermédiaire") && a.lieu?.includes("Home gym"),
      titre_cycle: "CYCLE 1 — TRANSFORMATION HOME GYM",
      objectif_cycle: "Progresser avec le matériel disponible, optimiser l'entraînement à domicile",
      sport: [
        "Séance A (Lun/Jeu) — Tractions 4×max, Pompes lestées 3×15, Rowing avec haltères 3×12, Gainage 3×45s",
        "Séance B (Mar/Ven) — Squat haltères 4×12, Soulevé de terre haltères 3×10, Fentes 3×12/jambe, Mollets 4×15",
        "Cardio (Mer) — Running ou corde à sauter 25min",
        "Progression: augmenter charge ou reps chaque semaine sur au moins 1 exercice",
      ],
      lectures: [
        "Convict Conditioning — Paul Wade (progressions poids du corps jusqu'au niveau avancé)",
        "Never Gymless — Ross Enamait (athlétisme sans équipement, approche brutale)",
        "Atomic Habits — James Clear (système pour ne jamais sauter une séance)",
      ],
      habitudes: [
        "~160g de protéines/jour",
        "Espace d'entraînement permanent — pas de mise en place à chaque séance",
        "Journal de progression obligatoire — ce qui n'est pas mesuré ne progresse pas",
        "Musique/podcast dédié à l'entraînement — signal contextuel pour le cerveau",
      ],
      planning: [
        "Lun: Séance A — haut du corps",
        "Mar: Séance B — bas du corps",
        "Mer: Cardio 25min",
        "Jeu: Séance A — progression charges",
        "Ven: Séance B — progression charges",
        "Sam: Cardio ou repos actif",
        "Dim: Repos total",
      ],
      non_negotiables: [
        "Espace de travail prêt en permanence — la friction tue la régularité",
        "Journal de séance rempli à chaque entraînement",
        "160g de protéines/jour",
        "Progresser sur au moins 1 mouvement par semaine",
        "Pas d'écran pendant la séance — focus total",
      ],
    },
    {
      id: "A10",
      profil: "Tous niveaux · Énergie & santé générale",
      match: a => a.objectif?.includes("énergie") || a.objectif?.includes("santé"),
      titre_cycle: "CYCLE 1 — VITALITÉ & FONDATIONS",
      objectif_cycle: "Retrouver l'énergie quotidienne, établir des fondations durables",
      sport: [
        "Marche rapide 30min × 5/sem — la base la plus sous-estimée de la santé",
        "Renforcement doux 2x/sem (Lun/Jeu) — Squat chaise 3×15, Pompes genoux 3×10, Bird dog 3×10, Gainage 3×30s",
        "Yoga ou étirements 15min quotidien — matin ou soir selon la préférence",
        "1 activité plaisir/sem — sport collectif, danse, natation — quelque chose qui donne de l'énergie",
      ],
      lectures: [
        "Why We Sleep — Matthew Walker (le sommeil comme fondation de tout le reste)",
        "Spark — John Ratey (l'exercice transforme l'énergie et la cognition)",
        "The Circadian Code — Satchin Panda (synchroniser le corps avec son rythme naturel)",
      ],
      habitudes: [
        "~120g de protéines/jour — minimum pour maintenir l'énergie et la satiété",
        "Lumière naturelle dans les 30min après le réveil — régule le cortisol et la mélatonine",
        "Pas d'écran 1h avant le lit — qualité du sommeil directement impactée",
        "Repas à horaires réguliers — stabilise la glycémie et l'énergie",
      ],
      planning: [
        "Lun: Renforcement doux 30min + marche 20min",
        "Mar: Marche 30min + yoga 15min",
        "Mer: Activité plaisir ou marche 30min",
        "Jeu: Renforcement doux 30min",
        "Ven: Marche 30min + yoga 15min",
        "Sam: Activité en plein air",
        "Dim: Repos et récupération",
      ],
      non_negotiables: [
        "Marche 30min minimum 5j/sem — pas négociable",
        "Lumière naturelle le matin — avant tout écran",
        "Pas d'écran 1h avant le lit",
        "120g de protéines — protéger le muscle et stabiliser l'énergie",
        "Mesurer l'énergie sur 10 chaque soir — piloter sur les tendances",
      ],
    },
  ],

  // Les autres facettes auront 3 programmes de base pour l'instant
  createur: [
    {
      id: "C1",
      profil: "Débutant · Construire l'habitude de création",
      match: a => a.rythme?.includes("0") || a.rythme?.includes("15"),
      titre_cycle: "CYCLE 1 — INSTALLER LE FLUX",
      objectif_cycle: "Créer 15 jours consécutifs, vaincre la résistance initiale",
      sport: ["Création 20min/jour minimum — même mauvaise, même inachevée","Journaling créatif 10min le matin — avant les écrans","1 publication par semaine — peu importe la qualité","Lecture/inspiration 30min × 3/sem"],
      lectures: ["The War of Art — Pressfield (comprendre et vaincre la résistance)","Atomic Habits — Clear (construire l'habitude créative)","Big Magic — Gilbert (créer depuis la légèreté, pas la peur)"],
      habitudes: ["Créer avant de consommer — aucun contenu avant sa propre création","Carnet d'idées toujours accessible — noter tout, filtrer après","Même heure de création chaque jour — ancrage neurologique","Déconnecter les notifications pendant la session"],
      planning: ["Lun: Création 25min + journaling","Mar: Consommation inspirante 30min","Mer: Création 25min — itérer sur la veille","Jeu: Publication ou partage (brouillon ok)","Ven: Création 25min + revue de la semaine","Sam: Projet libre — explorateur","Dim: Repos créatif — recharger"],
      non_negotiables: ["Créer AVANT de consommer chaque matin","20min minimum sans exception — même les mauvais jours","1 publication minimum par semaine","Carnet d'idées rempli chaque jour","Pas de réseaux sociaux les 30 premières minutes de la journée"],
    },
    {
      id: "C2",
      profil: "Intermédiaire · Construire une audience",
      match: a => a.objectif?.includes("audience") && !a.rythme?.includes("0"),
      titre_cycle: "CYCLE 1 — COHÉRENCE & VISIBILITÉ",
      objectif_cycle: "Publier 3x/sem, analyser ce qui résonne, construire la régularité publique",
      sport: ["Création deep work 2h/matin × 5j — premier bloc avant tout","Publication 3x/sem minimum — qualité suffit, régularité prime","Analyse mensuel: posts qui ont marché, tendances, ajustements","Interaction 30min/jour — commenter, répondre, construire les relations"],
      lectures: ["Show Your Work — Kleon (partager le processus, pas le résultat)","This is Marketing — Godin (comprendre son audience profondément)","Contagious — Berger (pourquoi les idées se propagent)"],
      habitudes: ["Contenu batché: créer 3 posts en une session, publier au fil de la semaine","Recycler ses meilleures idées — reformater, remixer, republier","Étudier ses métriques 1x/sem — engagement > reach","Construire la liste email dès le premier jour — l'audience qu'on possède"],
      planning: ["Lun: Deep work création + batch 3 posts","Mar: Publication + interaction 30min","Mer: Création contenu + inspiration 30min","Jeu: Publication + analyse métriques","Ven: Création + publication","Sam: Interaction communauté + idées semaine suivante","Dim: Déconnexion totale"],
      non_negotiables: ["3 publications/sem minimum — la régularité bat la qualité","Deep work création avant tout autre tâche","Analyser les métriques chaque vendredi","Répondre à chaque commentaire les 48 premières heures","Une idée de contenu capturée chaque jour"],
    },
    {
      id: "C3",
      profil: "Avancé · Terminer un projet",
      match: a => a.objectif?.includes("Terminer"),
      titre_cycle: "CYCLE 1 — LIVRAISON",
      objectif_cycle: "Terminer le projet en cours, dépasser le perfectionnisme, publier",
      sport: ["Sessions de travail en blocs de 90min — Pomodoro adapté au travail profond","Deadline quotidienne — un livrable précis à finir avant 18h","Pas de nouvelles idées pendant le sprint — noter et ignorer","Revue quotidienne 15min — ce qui est fait, ce qui reste, blocages"],
      lectures: ["The Lean Startup — Ries (lancer vite, itérer — parfait est l'ennemi du bien)","Finish — Miller (l'art de terminer ce qu'on commence)","Deep Work — Newport (focus radical pour créer des œuvres importantes)"],
      habitudes: ["Définir 'terminé' précisément avant de commencer — évite le scope creep","Travailler en public — annoncer sa deadline à quelqu'un","Protéger les matinées pour le travail profond — aucune réunion avant 14h","Célébrer chaque milestone — le cerveau a besoin de reconnaissance"],
      planning: ["Lun: Session 90min — livrable spécifique","Mar: Session 90min — suite","Mer: Session 90min + revue mi-semaine","Jeu: Session 90min — sprint","Ven: Session 90min + livraison semaine","Sam: Repos du projet","Dim: Planification semaine suivante"],
      non_negotiables: ["1 session de 90min minimum par jour","Définir le livrable du jour la veille au soir","Couper internet pendant les sessions si nécessaire","Pas de nouvelles fonctionnalités — finir ce qui est commencé","Date de publication fixée et annoncée publiquement"],
    },
  ],
  entrepreneur: [
    {
      id: "E1",
      profil: "Idée / Validation · Premiers clients",
      match: a => a.stade?.includes("Idée") || a.stade?.includes("Validation"),
      titre_cycle: "CYCLE 1 — VALIDATION TERRAIN",
      objectif_cycle: "Parler à 30 prospects, obtenir 3 premiers clients ou pré-commandes",
      sport: ["MIT quotidien: 1 seule tâche haute valeur à faire absolument","Prospection 2h/jour — appels, messages, rencontres — pas d'emails froids","Revue métriques quotidienne: prospects contactés, réponses, conversions","Bloc deep work 2h/matin — avant emails et réseaux"],
      lectures: ["The Mom Test — Fitzpatrick (poser les bonnes questions à ses prospects)","$100M Offers — Hormozi (créer une offre irrésistible)","Zero to One — Thiel (construire quelque chose de vraiment nouveau)"],
      habitudes: ["Parler à 5 prospects minimum par jour — rien ne remplace le terrain","Documenter chaque refus — les objections sont de l'or","Pas de code/design avant validation — vendre d'abord, construire après","Réseau quotidien: 1 message de valeur à 1 personne de son réseau"],
      planning: ["Lun: Identification 20 prospects + 5 premiers contacts","Mar: 5 contacts + 2 appels si possible","Mer: Revue feedback + ajustement offre","Jeu: 5 contacts + itération message","Ven: 5 contacts + bilan semaine + pipeline","Sam: Stratégie semaine suivante","Dim: Repos"],
      non_negotiables: ["5 contacts prospects minimum par jour","Documenter chaque conversation — insights terrain","Pas de perfectionnisme produit avant validation","MIT fait avant 10h chaque matin","Revue pipeline chaque vendredi"],
    },
    {
      id: "E2",
      profil: "Croissance · Revenus réguliers",
      match: a => a.stade?.includes("Croissance"),
      titre_cycle: "CYCLE 1 — SYSTÈMES & SCALE",
      objectif_cycle: "Documenter les processus, doubler la prospection, déléguer 1 tâche",
      sport: ["Bloc stratégie 2h/sem (lundi matin) — travailler SUR le business pas DANS","Prospection systématisée: 10 contacts/jour via système répétable","Métriques hebdo: CAC, LTV, taux de conversion, MRR","Déléguer 1 tâche récurrente cette semaine"],
      lectures: ["$100M Leads — Hormozi (systèmes d'acquisition clients scalables)","The E-Myth Revisited — Gerber (travailler sur le business, pas dedans)","Traction — Weinberg (canaux d'acquisition qui fonctionnent vraiment)"],
      habitudes: ["Revue métriques chaque lundi matin — piloter les chiffres","Créer une SOP pour chaque processus répété plus de 3 fois","Blocs de travail en thèmes — lundi stratégie, mardi prospection...","Investir 10% des revenus en formation ou outils qui scalent"],
      planning: ["Lun: Stratégie + revue métriques + planning semaine","Mar: Prospection + vente","Mer: Livraison client + ops","Jeu: Prospection + partenariats","Ven: Bilan semaine + contenu/visibilité","Sam: Formation ou projet stratégique","Dim: Repos"],
      non_negotiables: ["Revue métriques chaque lundi sans exception","10 contacts prospects/jour","1 SOP créée par semaine","MIT fait avant 10h","1 tâche déléguée ou automatisée par semaine"],
    },
    {
      id: "E3",
      profil: "Scale · Optimisation",
      match: a => a.stade?.includes("Scale"),
      titre_cycle: "CYCLE 1 — LEVERAGE & IMPACT",
      objectif_cycle: "Identifier les 20% d'actions qui génèrent 80% des résultats, éliminer le reste",
      sport: ["Audit 80/20: quelles actions génèrent 80% des revenus?","Déléguer ou éliminer tout ce qui n'est pas dans ce 20%","Travailler 4h de deep work maximum — qualité sur quantité","Vision 90j: objectif précis, indicateurs clés, actions quotidiennes"],
      lectures: ["The 4-Hour Workweek — Ferriss (leverage et élimination)","Essentialism — McKeown (faire moins, mieux)","Good to Great — Collins (ce qui sépare les grandes entreprises"],
      habitudes: ["Calendrier par blocs — chaque heure a un type de travail assigné","Réunions maximum 30min avec agenda clair","Inbox zero 2x/jour — email n'est pas du travail","Décision framework: si pas maintenant, jamais"],
      planning: ["Lun: Vision + OKR + délégation","Mar: Deep work — projets haute valeur","Mer: Réunions + management","Jeu: Deep work — stratégie","Ven: Bilan + planning + visibilité","Sam: Formation ou repos","Dim: Repos complet"],
      non_negotiables: ["4h de deep work minimum par jour","Déléguer tout ce qui n'est pas à votre niveau de valeur","Métriques clés revues chaque matin en 10min","Pas d'email avant 10h","Décision dans les 24h — les décisions qui traînent coûtent de l'énergie"],
    },
  ],
  sage: [
    {
      id: "S1",
      profil: "Débutant · Calmer l'anxiété",
      match: a => (a.pratique?.includes("Aucune") || a.pratique?.includes("occasionnelle")) && a.objectif?.includes("anxiété"),
      titre_cycle: "CYCLE 1 — ANCRAGE & CALME",
      objectif_cycle: "Installer une pratique quotidienne, réduire le niveau de bruit mental",
      sport: ["Méditation guidée 10min/matin — app Calm, Headspace ou YouTube","Respiration cohérence cardiaque 5min × 3/jour — 5s inspirez, 5s expirez","Journaling 10min le soir — vider le mental avant de dormir","Marche méditative 20min × 3/sem — sans téléphone"],
      lectures: ["L'Art de la Méditation — Matthieu Ricard (introduction accessible)","Wherever You Go, There You Are — Kabat-Zinn (pleine conscience sans ésotérisme)","The Anxiety and Worry Workbook — Clark & Beck (approche cognitive pratique)"],
      habitudes: ["Pas d'écran dans les 30min après le réveil — commencer par la méditation","Cohérence cardiaque avant les situations stressantes","Journaling soir: 3 choses positives + 1 inquiétude déposée sur papier","Réduire la consommation de news à 1x/jour maximum"],
      planning: ["Lun: Méditation 10min + journaling soir","Mar: Cohérence cardiaque + marche méditative","Mer: Méditation 10min + lecture 20min","Jeu: Cohérence cardiaque + journaling","Ven: Méditation + marche méditative","Sam: Pratique longue 20min + temps en nature","Dim: Repos contemplatif"],
      non_negotiables: ["Méditation 10min chaque matin avant tout écran","Cohérence cardiaque 3x/jour","Journaling soir 10min","Pas de news/réseaux avant 10h","Sommeil à heures fixes"],
    },
    {
      id: "S2",
      profil: "Intermédiaire · Clarté & décisions",
      match: a => !a.pratique?.includes("Aucune") && a.objectif?.includes("Clarté"),
      titre_cycle: "CYCLE 1 — DISCERNEMENT",
      objectif_cycle: "Approfondir la pratique, développer la clarté décisionnelle",
      sport: ["Méditation 20min/matin — sans guidage, observer sans juger","Journaling profond 20min — questions de fond, pas de surface","Lecture philosophique 30min/jour — Stoïciens, Bouddhisme, Psychologie","Silence intentionnel 1h/sem — aucun contenu, aucune conversation"],
      lectures: ["Méditations — Marc Aurèle (sagesse stoïcienne quotidienne)","Man's Search for Meaning — Frankl (trouver le sens dans n'importe quelle condition)","The Power of Now — Tolle (présence radicale comme outil de clarté)"],
      habitudes: ["Questions de journaling: 'Qu'est-ce qui est sous mon contrôle aujourd'hui?'","Dichotomie du contrôle — distinguer ce qui dépend et ne dépend pas de soi","Mémoriser une citation philosophique par semaine","Pratique de l'inconfort volontaire 1x/sem — douche froide, jeûne, silence"],
      planning: ["Lun: Méditation 20min + journaling profond","Mar: Lecture 30min + réflexion","Mer: Méditation + pratique inconfort","Jeu: Journaling + lecture","Ven: Méditation + revue semaine","Sam: Silence intentionnel 1h + nature","Dim: Lecture + préparation semaine"],
      non_negotiables: ["Méditation 20min chaque matin","Journaling profond 4x/sem minimum","Lecture philosophique quotidienne","1h de silence par semaine","Pas de décision importante sans nuit de sommeil"],
    },
    {
      id: "S3",
      profil: "Avancé · Paix intérieure",
      match: a => a.pratique?.includes("avancée") || a.pratique?.includes("régulière"),
      titre_cycle: "CYCLE 1 — INTÉGRATION PROFONDE",
      objectif_cycle: "Intégrer la pratique dans l'action quotidienne, vivre la philosophie",
      sport: ["Méditation 30-45min/matin — vipassana ou zazen selon tradition","Retraite d'une journée 1x/cycle — silence total, nature, déconnexion","Pratique informelle — pleine conscience dans chaque activité","Mentoring ou partage — enseigner ce qu'on a intégré"],
      lectures: ["Being Peace — Thich Nhat Hanh (la paix comme pratique active)","The Untethered Soul — Singer (se libérer de la voix intérieure)","Letters from a Stoic — Sénèque (sagesse appliquée au quotidien)"],
      habitudes: ["Journaling de contemplation 30min — sans questions, juste observer","Pratique de la gratitude radicale — même les difficultés","Enseigner une pratique à quelqu'un — consolide l'intégration","Revue mensuelle de ses valeurs — est-ce que j'y vis?"],
      planning: ["Lun-Ven: Méditation 30-45min matin + pratique informelle","Sam: Retraite personnelle 4h ou journée complète","Dim: Journaling de contemplation + préparation semaine"],
      non_negotiables: ["Méditation 30min minimum chaque matin","1 journée de retraite ce cycle","Pratique informelle consciente chaque jour","Partager/enseigner 1x/sem","Revue des valeurs chaque dimanche soir"],
    },
  ],
  explorateur: [
    {
      id: "EX1",
      profil: "Très routinier · Sortir du confort",
      match: a => a.routine?.includes("Très routinier") || a.frein?.includes("zone de confort"),
      titre_cycle: "CYCLE 1 — RUPTURE DE ROUTINE",
      objectif_cycle: "1 nouvelle chose par jour, 1 aventure significative par semaine",
      sport: ["1 micro-aventure quotidienne — prendre un chemin différent, essayer un restaurant inconnu","1 aventure hebdo — activité jamais faite, lieu jamais visité","Parler à 1 inconnu par jour — commencer une conversation","Documenter chaque expérience — photos, notes, ressentis"],
      lectures: ["Vagabonding — Potts (l'art de vivre l'aventure au quotidien)","Comfort Crisis — Easter (l'inconfort comme chemin vers la vitalité)","The Alchemist — Coelho (suivre sa légende personnelle)"],
      habitudes: ["Règle du oui: dire oui à toute proposition nouvelle les 15 premiers jours","Route différente chaque jour — activer la plasticité cérébrale","Carnet d'expériences: noter 1 chose nouvelle vécue chaque soir","Planifier l'aventure hebdo le dimanche soir"],
      planning: ["Lun: Nouvelle activité matinale + 1 inconnu parle","Mar: Route différente + lieu inexploré","Mer: Expérience culturelle ou sociale","Jeu: Sortir sa zone de confort précise","Ven: Aventure spontanée","Sam: Grande aventure de la semaine","Dim: Documentation + planification"],
      non_negotiables: ["1 chose nouvelle chaque jour — sans exception","Parler à 1 inconnu par jour","1 aventure significative par semaine","Documenter dans le carnet chaque soir","Dire oui par défaut ces 15 jours"],
    },
    {
      id: "EX2",
      profil: "Explorateur voyages · Budget limité",
      match: a => a.style?.includes("Voyages") && (a.budget?.includes("50") || a.budget?.includes("200")),
      titre_cycle: "CYCLE 1 — EXPLORER SANS ARGENT",
      objectif_cycle: "Découvrir sa région comme un touriste, maximiser l'exploration avec peu de budget",
      sport: ["Touriste local 1x/sem — explorer sa ville/région comme si c'était la première fois","Couchsurfing ou échange d'hospitalité — rencontrer des gens différents","Randonnées et explorations gratuites — nature, patrimoine, quartiers","Volontariat 1 demi-journée — s'immerger dans une communauté différente"],
      lectures: ["Vagabonding — Potts (voyager longtemps avec peu d'argent)","The Art of Travel — De Botton (pourquoi on voyage et ce qu'on cherche vraiment)","Into the Wild — Krakauer (l'appel de l'aventure brute)"],
      habitudes: ["Liste de 20 endroits à explorer dans un rayon de 100km","Budget exploration dédié — même 10€/sem = 20€ en 15 jours","Photographier avec intention — pas en mode touriste","Parler aux locaux, pas aux touristes"],
      planning: ["Lun: Planification aventures semaine","Mar: Exploration locale (quartier, musée, parc)","Mer: Rencontre humaine intentionnelle","Jeu: Randonnée ou exploration nature","Ven: Expérience culturelle gratuite","Sam: Grande aventure du week-end","Dim: Documentation + prochaine destination"],
      non_negotiables: ["1 sortie exploratoire minimum par semaine","Parler à 3 locaux par semaine","Documenter chaque aventure","Budget exploration respecté","Téléphone en mode avion pendant les aventures"],
    },
    {
      id: "EX3",
      profil: "Explorateur compétences · Apprentissage",
      match: a => a.style?.includes("Apprentissages"),
      titre_cycle: "CYCLE 1 — COMPÉTENCES INATTENDUES",
      objectif_cycle: "Commencer 2 nouvelles compétences totalement inattendues",
      sport: ["Choisir 2 compétences radicalement nouvelles — pas dans son domaine habituel","30min de pratique délibérée par compétence × 5j/sem","Trouver un mentor ou communauté pour chaque compétence","Documenter la progression — vidéos, notes, partage"],
      lectures: ["The First 20 Hours — Kaufman (apprendre n'importe quoi en 20h)","Range — Epstein (pourquoi les généralistes réussissent dans un monde spécialisé)","Ultralearning — Young (protocoles d'apprentissage accéléré)"],
      habitudes: ["Débutant délibéré — accepter d'être mauvais et le montrer","Pratique en public — partager ses progrès même imparfaits","Connecter les nouvelles compétences à ses compétences existantes","Journal d'apprentissage: ce qui bloque, ce qui avance, insights"],
      planning: ["Lun: Compétence A (30min) + compétence B (30min)","Mar: Approfondissement compétence A","Mer: Approfondissement compétence B","Jeu: Pratique combinée A + B","Ven: Application/projet qui combine les deux","Sam: Partage/enseignement d'un aspect","Dim: Revue apprentissage + planification"],
      non_negotiables: ["30min minimum par compétence × 5j/sem","Partager les progrès chaque semaine","Accepter d'être nul — c'est le point de départ","Journal d'apprentissage quotidien","Trouver une communauté pour chaque compétence"],
    },
  ],
  guerrier: [
    {
      id: "G1",
      profil: "Débutant mental · Installer la discipline",
      match: a => a.niveau?.includes("cède souvent") || a.intensite?.includes("doucement"),
      titre_cycle: "CYCLE 1 — FONDATIONS DE DISCIPLINE",
      objectif_cycle: "Ne jamais manquer deux jours consécutifs, tenir les 5 engagements quotidiens",
      sport: ["Lever à heure fixe 7j/7 — même le week-end, ±30min maximum","Douche froide 30s après la douche chaude — inconfort contrôlé quotidien","1 défi physique/jour — marche 30min, sport, ou exercice difficile","Journaling de guerre 10min le soir — ce que j'ai fait, ce que j'ai évité"],
      lectures: ["Extreme Ownership — Willink (responsabilité totale, aucune excuse)","The Obstacle is the Way — Holiday (transformer les difficultés en carburant)","Can't Hurt Me — Goggins (repousser les limites mentales)"],
      habitudes: ["Liste des 5 engagements quotidiens — cochés chaque soir","Règle des 2 minutes: si ça prend moins de 2min, maintenant","Éliminer 1 source de confort inutile cette semaine","Dire non à 1 chose facile par jour — construire le muscle du refus"],
      planning: ["Lun: Lever fixe + douche froide + défi physique + journaling","Mar: Idem + confronter 1 chose évitée","Mer: Idem + réduire 1 distraction","Jeu: Idem + défi social (parler à quelqu'un d'intimidant)","Ven: Idem + bilan semaine","Sam: Défi plus intense","Dim: Revue + planification défis semaine suivante"],
      non_negotiables: ["Lever à heure fixe 7j/7","Douche froide quotidienne","Journaling de guerre chaque soir","Jamais 2 jours sans défi","5 engagements cochés chaque soir"],
    },
    {
      id: "G2",
      profil: "Intermédiaire · Forger le mental",
      match: a => a.niveau?.includes("parfois") || a.niveau?.includes("relativement"),
      titre_cycle: "CYCLE 1 — FORGE MENTALE",
      objectif_cycle: "Augmenter la tolérance à l'inconfort, éliminer l'ennemi intérieur identifié",
      sport: ["Exposition volontaire quotidienne à l'inconfort — froid, effort, social, jeûne","Méditation 15min/matin — observer les pensées sans les suivre","Entraînement physique intense 4x/sem — le corps forge le mental","Journaling de guerre 15min — analyse honnête de ses batailles"],
      lectures: ["Discipline Equals Freedom — Willink (la liberté vient de la discipline)","Meditations — Marc Aurèle (stoïcisme appliqué au combat quotidien)","The Willpower Instinct — McGonigal (neuroscience de l'autocontrôle)"],
      habitudes: ["Identifier son ennemi intérieur quotidien — et lui résister une fois","Pratique du jeûne intermittent 16:8 — maîtrise physiologique","Cold shower complète 2min — pas seulement 30 secondes","Revue hebdo: victoires et défaites — honnêteté totale"],
      planning: ["Lun: Entraînement + méditation + inconfort volontaire","Mar: Défi mental (faire ce qu'on évite le plus)","Mer: Entraînement + journaling profond","Jeu: Exposition à la peur identifiée","Ven: Entraînement + bilan semaine","Sam: Défi physique ou mental intense","Dim: Récupération + préparation semaine"],
      non_negotiables: ["1 inconfort volontaire quotidien — sans exception","Méditation 15min chaque matin","4 entraînements physiques intenses","Journaling de guerre chaque soir","Identifier et nommer son ennemi intérieur chaque jour"],
    },
    {
      id: "G3",
      profil: "Avancé · Niveau supérieur",
      match: a => a.niveau?.includes("niveau supérieur") || a.intensite?.includes("extrême"),
      titre_cycle: "CYCLE 1 — GUERRE TOTALE",
      objectif_cycle: "Repousser les limites connues, forger une identité de guerrier inébranlable",
      sport: ["Entraînement physique intense 6x/sem — jamais deux jours de suite sans","Jeûne 24h 1x/cycle — maîtrise absolue du corps","Exposition au froid 5min/jour — bain froid, douche froide totale","1 défi extrême cette semaine — marathon, jeûne, défi social intense"],
      lectures: ["Living with a SEAL — Itzler (30 jours avec David Goggins — limite mentale)","Gates of Fire — Pressfield (l'esprit guerrier des Spartiates)","Antifragile — Taleb (ce qui ne nous tue pas nous renforce vraiment)"],
      habitudes: ["Lever 5h30 — avant tout le monde, temps pour soi seul","Journal de guerre: victoires, défaites, leçons — 20min minimum","Éliminer toute dépendance identifiée — pas de négociation","Enseigner la discipline à quelqu'un — consolide l'identité"],
      planning: ["Lun-Sam: Lever 5h30 + entraînement + défi quotidien + journaling","Dim: Récupération + revue de cycle + planification"],
      non_negotiables: ["Lever 5h30 chaque jour","Entraînement physique intense 6x/sem","Jeûne 24h ce cycle","Journal de guerre 20min chaque soir","Éliminer 1 dépendance totalement ces 15 jours"],
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// SÉLECTEUR DE PROGRAMME
// ═══════════════════════════════════════════════════════════
export const selectProgramme = (facetteId, answers = {}) => {
  const pool = PROGRAMMES[facetteId];
  if (!pool) return null;
  // Try to find matching programme
  const match = pool.find(p => p.match && p.match(answers));
  // Fallback to first programme
  return match || pool[0];
};

// ═══════════════════════════════════════════════════════════
// AURÈLE — 80 QUESTIONS
// ═══════════════════════════════════════════════════════════
export const AURELIS = [
  "Quelle valeur dois-je honorer aujourd'hui ?","Est-ce que j'agis depuis la peur ou la force ?",
  "Qu'est-ce que je fuis en ce moment ?","Si ma version la plus haute me regardait — que verrait-elle ?",
  "Qu'est-ce qui est authentique vs ce qui est de l'ego ?","Quelle habitude me coûte le plus cher en silence ?",
  "Suis-je en train de polir la bonne facette ?","Est-ce que je me bats pour quelque chose ou contre quelque chose ?",
  "Quelle décision j'évite depuis trop longtemps ?","Est-ce que je me mens sur quelque chose en ce moment ?",
  "Qu'est-ce que je ferais si je n'avais pas peur du jugement ?","Quelle partie de moi résiste le plus à cette transformation ?",
  "Est-ce que mes actions d'aujourd'hui sont alignées avec qui je veux être ?",
  "Qu'est-ce que j'accepte dans ma vie mais que je ne devrais plus accepter ?",
  "Est-ce que je cherche à impressionner ou à incarner ?",
  "Quelle pensée récurrente m'empêche d'avancer ?","Qu'est-ce qui occupe mon énergie sans me nourrir ?",
  "Si j'avais 6 mois à vivre, est-ce que je ferais la même chose aujourd'hui ?",
  "Quel serait mon plus grand regret si je continuais comme maintenant ?",
  "Quelle croyance sur moi-même me limite le plus ?","Est-ce que je suis en train de construire ou de maintenir ?",
  "Qu'est-ce que j'attendrais de moi si j'étais mon propre mentor ?",
  "Quelle émotion j'évite le plus souvent ?","Est-ce que je vis ou est-ce que je survie en ce moment ?",
  "Qu'est-ce que le silence révèle que le bruit cache ?","Qui dans mon entourage m'élève ? Qui me pèse ?",
  "Est-ce que mon environnement soutient ou sabote ma transformation ?",
  "Qu'est-ce que j'aurais besoin de dire à quelqu'un et que je ne dis pas ?",
  "Est-ce que je donne plus que je ne reçois, ou l'inverse ?","Qui j'aimerais être pour les personnes que j'aime ?",
  "Comment mon corps se sent-il aujourd'hui — vraiment ?","Est-ce que je récupère autant que je produis ?",
  "Quelle habitude physique me coûte de l'énergie mentale ?",
  "Est-ce que je respecte mon corps comme un outil ou comme un temple ?",
  "Qu'est-ce que j'ai besoin de relâcher physiquement ?",
  "Dans 5 ans, quelle version de moi vais-je remercier pour ce que je fais aujourd'hui ?",
  "Est-ce que ma vision est assez grande pour me faire peur ?",
  "Qu'est-ce que je construis qui survivra après moi ?",
  "Est-ce que je joue à être grand·e ou est-ce que je joue réellement grand ?",
  "Quelle opportunité est devant moi que je refuse de voir ?",
  "Est-ce que je suis à ma place ou est-ce que je me cache dans le confort ?",
  "Quel impact est-ce que je veux avoir sur les gens autour de moi ?",
  "Est-ce que mon ambition vient de moi ou de ce que les autres attendent ?",
  "Quelle action répétée m'a le plus éloigné·e de qui je veux être ?",
  "Quelle micro-habitude pourrait changer le plus de choses si je la tenais 15 jours ?",
  "Est-ce que je fais des choix ou des habitudes en ce moment ?",
  "Quelle résistance j'ai surmontée récemment dont je suis fier·ère ?",
  "Est-ce que j'agis par défaut ou par intention ?","Qui suis-je quand personne ne me regarde ?",
  "Quelle partie de mon ancienne identité dois-je laisser derrière ?",
  "Est-ce que je me définis par ce que je fais ou par ce que je suis ?",
  "Qu'est-ce qui resterait de moi si on enlevait tout ce que je possède ?",
  "Quelle identité suis-je en train de choisir par mes actions d'aujourd'hui ?",
  "Est-ce que je suis la même personne seul·e et en public ?",
  "Quelle version de moi dois-je mettre à la retraite aujourd'hui ?",
  "Qu'est-ce que j'ai aujourd'hui que je ne valorise pas assez ?",
  "Quel moment de la semaine passée m'a le plus rappelé qui je veux être ?",
  "Qu'est-ce que j'ai appris sur moi-même ces derniers jours ?",
  "Qu'est-ce qui était difficile il y a 3 mois et qui est devenu naturel ?",
  "Quel obstacle récurrent est en réalité une leçon déguisée ?",
  "Est-ce que j'utilise mes contraintes comme excuses ou comme terrain d'entraînement ?",
  "Qu'est-ce que le dernier échec m'a appris sur moi-même ?",
  "Est-ce que je cherche le confort ou la croissance en ce moment ?",
  "Quelle difficulté actuelle me rendra plus fort·e dans 6 mois ?",
  "Est-ce que je suis présent·e dans ce que je fais, ou juste présent·e ?",
  "Quelle partie de ma journée ai-je vécue pleinement aujourd'hui ?",
  "Est-ce que mon esprit est dans le passé, le futur, ou maintenant ?",
  "Qu'est-ce que ce moment m'enseigne si je l'écoute vraiment ?",
  "Qu'est-ce que la mort m'apprend sur la façon dont je vis ?",
  "Si je devais définir le succès sans argent ni statut — à quoi il ressemblerait ?",
  "Qu'est-ce que je veux vraiment, pas ce que je pense devoir vouloir ?",
  "Quel serait l'acte le plus courageux que je pourrais accomplir cette semaine ?",
  "Est-ce que je construis une vie ou une image de vie ?",
  "Qu'est-ce qui me rend vraiment vivant·e ?",
  "Si j'étais déjà la personne que je veux devenir — qu'est-ce que je ferais différemment aujourd'hui ?",
  "Quelle question est-ce que j'évite de me poser depuis trop longtemps ?",
  "Est-ce que mes priorités déclarées et mes actions réelles sont alignées ?",
  "Qu'est-ce que je ferais aujourd'hui si j'avais toute confiance en moi ?",
  "Quelle peur me déguise-t-elle en raison logique ?",
];
export const getNextAurele = (used = []) => {
  const rem = AURELIS.filter(q => !used.includes(q));
  const pool = rem.length > 0 ? rem : AURELIS;
  return pool[Math.floor(Math.random() * pool.length)];
};

// ═══════════════════════════════════════════════════════════
// KRYOS DAILY THOUGHTS
// ═══════════════════════════════════════════════════════════
export const KRYOS_DAILY = {
  athlete:      ["Ton corps est le hardware. Tout le reste est software. Entraîne le hardware.","La fatigue ce matin ? C'est de la myéline en train de se former.","Les athlètes s'entraînent même quand ils n'en ont pas envie. C'est ça la différence.","Vote pour le corps que tu veux avoir dans 15 jours.","Les plateaux sont des périodes de consolidation, pas d'échec."],
  createur:     ["La créativité n'attend pas l'inspiration. Elle la crée.","Publier imparfait aujourd'hui vaut mieux que perfectionner éternellement.","Chaque création laisse une trace dans le monde.","La peur du jugement est inversement proportionnelle au nombre d'œuvres créées.","Ton flux créatif est un muscle. Il s'atrophie sans usage."],
  entrepreneur: ["Les entrepreneurs qui réussissent travaillent sur les bonnes choses.","Une tâche haute valeur vaut 10 tâches secondaires. Laquelle aujourd'hui ?","L'empire se construit un vote à la fois.","La prospection n'est pas une option. C'est le sang de l'entreprise.","Les métriques que tu ne regardes pas existent quand même."],
  sage:         ["La sagesse n'est pas l'accumulation de connaissances. C'est l'intégration.","Le silence : l'espace où la pensée devient claire.","Ce que tu lis façonne ton cerveau autant que ce que tu manges façonne ton corps.","La méditation n'est pas une fuite. C'est un entraînement à être présent.","Aujourd'hui, observe avant de réagir. Une fois. Vois ce que ça change."],
  explorateur:  ["La zone de confort est la zone de stagnation.","Qu'est-ce que tu n'as jamais fait et qui t'attire ? Fais-le.","Les meilleures histoires commencent par 'un jour j'ai décidé...'","La curiosité non satisfaite se transforme en regret.","L'inconfort que tu ressens — c'est la direction dans laquelle aller."],
  guerrier:     ["La résistance est proportionnelle à la croissance disponible.","Aujourd'hui, fais une chose que tu évites. Une seule.","Le mental se forge comme le corps : par la résistance progressive.","La peur est une boussole. Elle pointe vers ce qui compte.","Un guerrier cherche la difficulté qui le fait grandir."],
};
export const getKryosDaily = (facetteId) => {
  const pool = KRYOS_DAILY[facetteId] || KRYOS_DAILY.athlete;
  return pool[Math.floor(Math.random() * pool.length)];
};

// ═══════════════════════════════════════════════════════════
// DIALOGUES KRYOS
// ═══════════════════════════════════════════════════════════
export const DIALOGUES = {
  welcome:        { title:"PREMIÈRE RENCONTRE", mood:"wise", lines:["Ah. Te voilà.","Je vais être direct. Je n'ai pas de temps pour les discours motivationnels creux.","Tu es ici parce que quelque chose ne fonctionne pas. Des habitudes que tu reprends. Des objectifs que tu abandonnes. Une version de toi que tu n'arrives pas à incarner durablement.","Le problème n'est pas ta discipline. Le problème est ton approche.","Voici ce que la neuroscience dit : ton cerveau est gouverné par un principe appelé la cohérence identitaire. Il cherche en permanence à agir en accord avec qui il pense être.","Si tu te vois comme quelqu'un de sédentaire — ton cerveau sabote chaque tentative sportive. Pas par faiblesse. Par cohérence.","La majorité des méthodes attaquent les comportements. Ce protocole attaque l'identité en premier.","Comment ? Par ce que les psychologues appellent les identity-based votes. Chaque action que tu accomplis est un vote pour une certaine version de toi.","Un vote ne décide pas d'une élection. Mais 50 votes... 100 votes... et ton cerveau recode qui tu es. Pas par affirmation. Par preuve.","C'est ça, la Gemme Vitale. Tu choisis une facette identitaire. Tu votes pour elle chaque jour. Pendant 15 jours par cycle.","La gemme, c'est toi. Brute. Avec des facettes corrompues à polir.","Alors. Quelle facette veux-tu polir en premier ?"] },
  noyau_why:      { title:"POURQUOI LE NOYAU ?", mood:"wise", lines:["Avant de choisir une facette à polir, tu dois faire quelque chose que la plupart ignorent.","Identifier ton noyau.","Le noyau, c'est l'ensemble de tes valeurs profondes — ce qui reste quand tout le reste s'effondre.","La self-determination theory montre que la motivation durable vient uniquement des comportements alignés avec nos valeurs intrinsèques.","Si tu choisis une facette qui n'est pas connectée à ce qui compte vraiment pour toi — tu poliras une gemme qui n'est pas la tienne.","Choisis celles qui résonnent vraiment. Pas celles qui impressionnent. Pas celles que tu penses devoir avoir.","Celles qui te font dire : 'Oui. C'est ça. C'est moi.'","Prends le temps qu'il faut. C'est la décision la plus importante de ce protocole."] },
  rank_D:         { title:"RANG D — INITIATION", mood:"curious", lines:["Rang D.","92% des personnes qui commencent un programme de changement abandonnent dans les 3 premières semaines.","Tu es dans les 8%.","Chaque vote a activé ton système de récompense dopaminergique. Ton cerveau associe maintenant cette facette à une récompense.","Continue à voter. Chaque vote rend le prochain plus facile."] },
  rank_C:         { title:"RANG C — INTÉGRATION", mood:"wise", lines:["Rang C. L'intégration.","Est-ce que tu remarques que certains votes sont devenus moins difficiles ?","C'est la cognitive ease. Ton cerveau a créé des raccourcis pour ces comportements.","Tu n'as pas besoin d'y croire au départ. Tu as juste besoin de voter.","Continue. Tu es à mi-chemin de l'ancrage profond."] },
  rank_B:         { title:"RANG B — MAÎTRISE", mood:"proud", lines:["Rang B.","Tu as traversé la valley of despair. La période entre l'enthousiasme du début et l'automatisation réelle.","C'est là que 80% des gens abandonnent. Pas au début. Au milieu.","Toi tu l'as traversée.","Le Rang A est proche. C'est là que tout devient différent."] },
  rank_A:         { title:"RANG A — TRANSCENDANCE", mood:"proud", lines:["Arrête-toi une seconde.","Rang A.","Ton cerveau a mis à jour ton soi possible. Et ça change tout — tes décisions, ton attention, tes opportunités perçues.","Il y a aussi le behavioral spillover. Une identité forte dans un domaine contamine positivement les autres.","Une seule facette te sépare du Rang S. Ce qui t'attend de l'autre côté n'est pas une récompense. C'est une transformation."] },
  rank_S:         { title:"RANG S — LÉGENDAIRE", mood:"proud", lines:["...","Rang S.","Ce n'est pas une habitude. Une habitude peut disparaître. Une identité ancrée résiste au stress, à la fatigue, aux périodes difficiles.","Parce qu'elle n'est plus dans la mémoire explicite. Elle est dans la mémoire procédurale. Automatique. Profonde.","Tu ne fais plus ces choses parce que tu t'y obliges. Tu les fais parce que ne pas les faire créerait une dissonance identitaire.","Cette facette est permanente."] },
  first_vote:     { title:"PREMIER VOTE", mood:"curious", lines:["Un vote.","Minuscule, non ?","Mais voilà ce que ton cerveau vient de faire : une micro-dose de dopamine associée à l'accomplissement.","C'est le début d'une boucle de renforcement.","Reviens demain."] },
  streak_3:       { title:"STREAK 3 JOURS", mood:"curious", lines:["Trois jours consécutifs.","Il y a un biais cognitif appelé le completion effect. Notre cerveau ressent une pression inconsciente à compléter les séquences commencées.","En créant un streak, tu as activé ce biais en ta faveur. Briser la série va maintenant créer un inconfort psychologique.","Tu as transformé la motivation externe en contrainte interne.","Ne brise pas le fil."] },
  streak_7:       { title:"7 JOURS CONSÉCUTIFS", mood:"wise", lines:["Sept jours.","Les axones liés à ces comportements sont en cours de myélinisation. La myéline est une gaine isolante qui accélère la transmission des signaux nerveux.","Plus tu votes, plus cette gaine s'épaissit. Plus le comportement devient rapide, précis, automatique.","C'est littéralement de la biologie en train de se remodeler.","7 jours ne suffisent pas pour l'ancrage complet. Mais c'est suffisant pour que le circuit existe."] },
  streak_broken:  { title:"STREAK BRISÉ", mood:"stern", lines:["Le streak est brisé.","Ce que tu ne dois pas faire : la what-the-hell effect. C'est un biais documenté où après un écart, les gens abandonnent complètement.","C'est ton cerveau qui essaie de te ramener à l'ancienne identité.","Refuse cette logique.","Un jour raté ne détruit pas 100 votes. Il ne remet pas à zéro la myélinisation.","Vote aujourd'hui. Reconstruis le streak."] },
  boss_defeated:  { title:"BOSS VAINCU", mood:"stern", lines:["Ha.","Tu as relevé le défi.","Les défis difficiles créent des peak experiences. Ton cerveau encode ces moments avec plus d'émotion, plus de permanence mémorielle.","C'est aussi un test du self-efficacy — la croyance en ta propre capacité.","Tu viens d'investir dans ta croyance en toi-même."] },
  votes_50:       { title:"50 VOTES", mood:"proud", lines:["Cinquante votes.","Phillippa Lally de l'UCL a montré que le point d'inflexion comportemental se situe en moyenne autour de 66 répétitions.","Tu approches du seuil où le comportement devient semi-automatique.","La personne sédentaire se demande pourquoi elle devrait faire du sport. L'athlète se demande pourquoi elle ne le ferait pas.","Tu glisses vers la deuxième catégorie."] },
  votes_100:      { title:"100 VOTES", mood:"proud", lines:["Cent votes.","La behavioral confirmation : quand tu agis suffisamment de fois en accord avec une identité, cette identité devient une croyance stable et résistante.","Elle résiste aux mauvaises journées. Au manque de motivation. Au doute.","Parce qu'elle n'est plus basée sur une aspiration. Elle est basée sur 100 preuves concrètes.","L'identité est ancrée."] },
  aurelis_answered:{ title:"AURÈLE A PARLÉ", mood:"wise", lines:["Tu as répondu à la question intérieure.","Il existe la self-discrepancy theory de Tory Higgins. La souffrance psychologique vient de l'écart entre le soi actuel et le soi idéal.","Mais beaucoup polissent le mauvais soi idéal. Celui que la société attend. Pas celui aligné avec leurs valeurs profondes.","Aurèle est là pour ça. T'obliger à regarder : est-ce que je polis la bonne facette ?","Tu viens de vérifier ton alignement."] },
  sommeil_logged: { title:"SOMMEIL ENREGISTRÉ", mood:"neutral", lines:["Le sommeil. Enfin tu le loggues.","Une nuit à 6h de sommeil pendant 10 jours produit des déficits cognitifs équivalents à 24h de privation totale.","Pour ce protocole : la consolidation mémorielle des nouvelles habitudes se fait pendant le sommeil profond.","Le sommeil n'est pas un luxe. C'est l'infrastructure."] },
  energie_low:    { title:"ÉNERGIE BASSE", mood:"stern", lines:["Énergie basse.","Le glucose préfrontal — le carburant de ta volonté — est épuisé.","Dans cet état, ton cerveau cherche le chemin de moindre résistance. Il va essayer de te ramener à tes anciens patterns.","Voici ce que tu fais : tu trouves le vote le plus petit. Juste pour garder le circuit actif.","Récupère cette nuit. Demain tu repars."] },
  facette_changed:{ title:"NOUVELLE FACETTE", mood:"wise", lines:["Tu as activé une nouvelle facette.","La facette que tu viens de maîtriser — elle est permanente. Les circuits neuronaux sont myélinisés.","Cette nouvelle facette. Tu es au Rang E. Elle semble corrompue, lointaine.","Mais tu as un avantage que tu n'avais pas la première fois.","Tu as la preuve que ça fonctionne. Utilise cette certitude. C'est ton arme la plus puissante."] },
  daily_start:    { title:"NOUVELLE JOURNÉE", mood:"neutral", lines:["Nouvelle journée.","Le rituel d'intention matinal active l'implementation intention. Formuler 'je suis X' avant d'agir double la probabilité de passer à l'action.","Alors : qui es-tu aujourd'hui ?","Dis-le. Même en silence. Surtout en silence.","Puis va voter."] },
  day_close:      { title:"JOURNÉE SCELLÉE", mood:"proud", lines:["Tu as scellé cette journée.","Chaque vote est une preuve supplémentaire pour ton cerveau.","Le sommeil qui suit consolide ces nouvelles connexions neuronales.","Demain, le comportement sera légèrement plus facile.","Repos maintenant. Tu as fait ce qu'il fallait."] },
};

// ═══════════════════════════════════════════════════════════
// TIERS
// ═══════════════════════════════════════════════════════════
export const TIERS = [
  {
    id: "gratuit", label: "GEMME BRUTE", price: "Gratuit", color: "#4b5563", rgb: "75,85,99", icon: "◇",
    mood: "neutral",
    desc: "Programme personnalisé selon ton profil. 15 jours pour tester le protocole.",
    features: ["Programme adapté à ton profil","Planning semaine type","Suivi quotidien","Kryos — dialogues complets","1 cycle complet"],
  },
  {
    id: "faconne", label: "GEMME POLIE", price: "9€/mois", color: "#00ffcc", rgb: "0,255,204", icon: "◈",
    mood: "curious",
    locked: true,
    desc: "Kryos analyse ton cycle 1. Tu reçois un programme semi-personnalisé pour le cycle 2.",
    tease: "Kryos a analysé ton cycle 1. Il a des ajustements précis à te proposer.",
    features: ["Tout le plan Gratuit","Bilan cycle 1 envoyé au coach","Programme semi-perso cycle 2","Suivi progression adapté"],
  },
  {
    id: "maitrise", label: "GEMME ABSOLUE", price: "Sur devis", color: "#ffd700", rgb: "255,215,0", icon: "✦",
    mood: "wise",
    locked: true,
    desc: "Programme 100% construit avec toi. Contact direct, appel de cadrage, suivi humain.",
    tease: "Ton cas est unique. Le programme doit l'être aussi.",
    features: ["Programme entièrement sur mesure","Appel de cadrage avec le coach","Suivi humain + protocole adapté","Multi-cycles planifiés"],
  },
];

// ═══════════════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════════════
export const SAVE_KEY = "gemvitale_v6";
export const CYCLE_DAYS = 15;
export const CONTACT_EMAIL = "kouchamehdi1@gmail.com";

export const today = () => new Date().toISOString().split("T")[0];
export const load = () => { try { return JSON.parse(localStorage.getItem(SAVE_KEY)) || {}; } catch { return {}; } };
export const persist = s => { try { localStorage.setItem(SAVE_KEY, JSON.stringify(s)); } catch {} };
export const getRank = xp => [...RANKS].reverse().find(r => xp >= r.minXP) || RANKS[0];
export const getNextRank = xp => RANKS.find(r => r.minXP > xp);
export const getGlobalScore = (fs = {}) => FACETTES.reduce((sc, f) => { const r = getRank((fs[f.id] || { xp: 0 }).xp); if (r.id === "S") return sc + 2; if (r.id === "A") return sc + 1; return sc; }, 0);
export const getGlobalRank = (fs = {}) => { const sc = getGlobalScore(fs); return [...GLOBAL_RANKS].reverse().find(r => sc >= r.minScore) || GLOBAL_RANKS[0]; };
export const getStreak = hist => {
  if (!hist) return 0;
  let s = 0;
  for (let i = 0; i < 200; i++) {
    const d = new Date(); d.setDate(d.getDate() - i);
    if (hist[d.toISOString().split("T")[0]]) s++; else break;
  }
  return s;
};
export const getWeekKey = () => {
  const d = new Date(); const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  const m = new Date(d); m.setDate(diff);
  return m.toISOString().split("T")[0];
};
export const getCycleDay = (cycleStart) => {
  if (!cycleStart) return 1;
  const diff = Math.floor((new Date() - new Date(cycleStart)) / 86400000);
  return diff + 1;
};
export const isCycleEnd = (cycleStart) => getCycleDay(cycleStart) >= CYCLE_DAYS;
