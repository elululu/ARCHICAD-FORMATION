// ==========================================
// FORMATION DATA — Programme complet 20 jours
// AtelierLO — Formation ARCHICAD
// Approche immersive : on construit dès le jour 1
// ==========================================

const FORMATION_DATA = {
    title: "Formation ARCHICAD",
    formateur: "Lucien",
    structure: "AtelierLO",
    totalDays: 20,
    weeks: [
        {
            id: 1,
            title: "On construit !",
            subtitle: "De l'interface à ta première maison en 5 jours",
            days: [
                {
                    id: 1,
                    title: "Premier contact & premier bâtiment",
                    subtitle: "Prendre en main ARCHICAD en construisant directement un petit volume architectural",
                    duration: "7h",
                    week: 1,
                    objectives: [
                        "Comprendre l'interface d'ARCHICAD en 30 minutes chrono",
                        "Maîtriser la navigation 2D et 3D instinctivement",
                        "Placer ses premiers murs et voir apparaître un bâtiment en 3D",
                        "Comprendre la logique BIM : on construit, on ne dessine pas",
                        "Terminer la journée avec un petit volume habitable modélisé"
                    ],
                    keyPoints: [
                        {
                            title: "L'interface ARCHICAD — En 10 minutes",
                            content: "3 choses à retenir : la Boîte à outils à gauche (tes outils de construction), la Palette Infos en haut (les réglages de ton outil), le Navigateur (ton GPS dans le projet). C'est tout. On verra le reste en construisant."
                        },
                        {
                            title: "Navigation : deviens fluide tout de suite",
                            content: "Molette = zoom. Clic molette = déplacer la vue. Shift + clic molette = orbite 3D. F2 = plan, F3 = 3D. Tu bascules en permanence entre plan et 3D. C'est ta façon de travailler à partir de maintenant."
                        },
                        {
                            title: "La philosophie BIM",
                            content: "Dans ARCHICAD, tu ne traces pas des lignes pour représenter un mur. Tu CONSTRUIS un mur. Ce mur a une épaisseur, une hauteur, des matériaux. Il existe en plan ET en 3D simultanément. C'est comme construire une maquette numérique grandeur nature."
                        }
                    ],
                    exercise: {
                        title: "🏠 Construis ton premier volume : un studio de 30m²",
                        description: "Dès la première demi-journée, tu poses tes premiers murs et tu vois apparaître un bâtiment en 3D. On apprend en faisant.",
                        steps: [
                            "Créer un nouveau projet — on paramètre ensemble les unités (mètres)",
                            "Activer l'outil Mur (W) — régler épaisseur 20cm, hauteur 2,60m",
                            "Dessiner 4 murs extérieurs formant un rectangle de 6m × 5m",
                            "Basculer en 3D (F3) — admirer ton premier volume !",
                            "Ajouter une cloison intérieure pour créer la salle d'eau (2m × 2,5m)",
                            "Placer une porte d'entrée (90cm) et une porte intérieure (70cm)",
                            "Ajouter 2 fenêtres (120cm, allège 90cm) sur les murs extérieurs",
                            "Créer la dalle de plancher avec la Baguette magique (Espace)",
                            "Visiter ton studio en 3D — tu viens de construire ton premier bâtiment !"
                        ]
                    },
                    checklist: [
                        "Je sais naviguer en 2D et 3D sans réfléchir (molette, F2, F3)",
                        "Je sais placer des murs avec l'outil Mur",
                        "J'ai placé des portes et des fenêtres dans mes murs",
                        "J'ai créé une dalle avec la Baguette magique",
                        "J'ai un studio complet visible en 3D"
                    ],
                    formateurGuide: {
                        intro: "Jour 1 = impact maximum. On ne fait PAS un cours théorique sur l'interface. On montre un projet fini 2 minutes pour donner envie, puis on construit directement. L'apprenant doit terminer la journée avec un petit bâtiment en 3D. C'est ce qui crée la motivation pour les 19 jours suivants.",
                        timing: [
                            { time: "0h - 0h15", content: "Accueil — Montrer un projet fini en 3D pour donner envie (visite virtuelle rapide)" },
                            { time: "0h15 - 0h45", content: "Interface express : boîte à outils, palette infos, navigateur — montrer en construisant, pas en expliquant" },
                            { time: "0h45 - 1h15", content: "Navigation : zoom, pan, orbite 3D — on pratique directement sur un projet exemple" },
                            { time: "1h15 - 2h30", content: "On construit ! Outil Mur : premiers murs du studio. Basculer en 3D dès le 2ème mur" },
                            { time: "2h30 - 3h00", content: "Pause + on admire le résultat en 3D" },
                            { time: "3h00 - 4h00", content: "Portes et fenêtres dans le studio — voir le bâtiment prendre vie" },
                            { time: "4h00 - 4h30", content: "Baguette magique + dalle — le plancher apparaît" },
                            { time: "4h30 - 5h30", content: "Saisie numérique et précision : tracker, Tab, coordonnées — on corrige le studio" },
                            { time: "5h30 - 6h30", content: "Peaufiner le studio : ajuster les dimensions, vérifier en 3D" },
                            { time: "6h30 - 7h00", content: "Visite 3D du studio terminé — récap — on a construit un bâtiment le jour 1 !" }
                        ],
                        tips: [
                            "L'apprenant doit avoir un mur en 3D dans les 30 premières minutes — c'est le déclic",
                            "Ne JAMAIS faire de cours magistral sur l'interface — on apprend en construisant",
                            "La saisie numérique se découvre naturellement quand on veut un mur de 6m exactement",
                            "Terminer par une visite 3D du studio — c'est le moment de fierté du jour 1"
                        ],
                        warnings: [
                            "Ne pas perdre de temps sur la théorie — 80% de pratique dès le jour 1",
                            "Les points d'accrochage et les calques seront vus naturellement les jours suivants",
                            "Ne pas chercher la perfection — l'objectif est l'expérience de construction"
                        ],
                        exerciseSolution: "Le studio est simple : 4 murs extérieurs + 1 cloison + 1 porte d'entrée + 1 porte intérieure + 2 fenêtres + 1 dalle. L'important c'est que l'apprenant ait CONSTRUIT quelque chose le jour 1."
                    }
                },
                {
                    id: 2,
                    title: "Murs : l'art de construire des parois",
                    subtitle: "Maîtriser l'outil le plus important d'ARCHICAD pour construire comme un architecte",
                    duration: "7h",
                    week: 1,
                    objectives: [
                        "Maîtriser les différents types de murs (simples, composites, courbes)",
                        "Comprendre la ligne de référence — clé des jonctions propres",
                        "Construire des murs composites réalistes (structure + isolation + finition)",
                        "Gérer les intersections et jonctions de murs comme un pro",
                        "Construire l'enveloppe complète d'un appartement T3"
                    ],
                    keyPoints: [
                        {
                            title: "L'outil Mur — Ton outil principal",
                            content: "L'outil Mur (W) est le cœur d'ARCHICAD. Un mur est un élément 3D paramétrique : épaisseur, hauteur, matériaux, structure composite. Tu le dessines en plan et il se construit en 3D. Simple et puissant."
                        },
                        {
                            title: "Ligne de référence — La clé de voûte",
                            content: "Chaque mur a une ligne de référence qui détermine de quel côté s'étend l'épaisseur. Règle d'or : nu extérieur pour les murs de façade, centre pour les cloisons. C'est ce qui garantit des jonctions propres entre les murs."
                        },
                        {
                            title: "Murs composites — Comme en vrai",
                            content: "Un vrai mur de façade, c'est un sandwich : structure (béton ou brique), isolation, parement extérieur, placo intérieur. ARCHICAD gère tout ça avec les murs composites. Les jonctions entre couches se calculent automatiquement."
                        }
                    ],
                    exercise: {
                        title: "🏢 Construis un appartement T3",
                        description: "On passe à la vitesse supérieure : modéliser un vrai logement avec murs porteurs et cloisons, comme en agence d'architecture.",
                        steps: [
                            "Dessiner les murs extérieurs en composite (porteur 20cm + isolant 10cm + placo) — rectangle 12m × 9m",
                            "Positionner les murs porteurs intérieurs (béton 20cm) — séparation séjour/chambres",
                            "Créer les cloisons de distribution (placo 7cm) — chambres, SDB, WC, couloir",
                            "Vérifier les jonctions en plan : tout doit être propre, pas de traits parasites",
                            "Basculer en 3D (F3) — vérifier que les intersections sont correctes",
                            "Ajuster les hauteurs sous plafond (2,60m)"
                        ]
                    },
                    checklist: [
                        "Je maîtrise l'outil Mur et ses paramètres principaux",
                        "Je comprends et j'utilise correctement la ligne de référence",
                        "Je sais créer des murs composites réalistes",
                        "Les intersections de mes murs sont propres",
                        "J'ai un T3 complet avec murs porteurs et cloisons"
                    ],
                    formateurGuide: {
                        intro: "C'est LE jour crucial. L'outil Mur c'est 60% du travail en ARCHICAD. L'apprenant doit terminer avec des murs maîtrisés. On construit un vrai logement, pas des exercices abstraits.",
                        timing: [
                            { time: "0h - 0h30", content: "Récap express du jour 1 — revoir le studio en 3D — on monte en gamme aujourd'hui" },
                            { time: "0h30 - 1h30", content: "Outil Mur approfondi : boîte de dialogue (Ctrl+T), paramètres complets, méthodes de dessin" },
                            { time: "1h30 - 2h30", content: "Ligne de référence : démo visuelle en plan ET en 3D — montrer le bon et le mauvais" },
                            { time: "2h30 - 3h00", content: "Pause" },
                            { time: "3h00 - 4h00", content: "Murs composites : créer un mur réaliste couche par couche — lien avec la construction réelle" },
                            { time: "4h00 - 5h00", content: "Intersections et jonctions : priorités, nettoyage, cas courants" },
                            { time: "5h00 - 6h30", content: "Exercice T3 : construction des murs en autonomie" },
                            { time: "6h30 - 7h00", content: "Vérification 3D du T3 — récap — demain on ajoute la structure" }
                        ],
                        tips: [
                            "Basculer constamment entre plan (F2) et 3D (F3) — c'est le réflexe à ancrer",
                            "Montrer ce qui se passe quand la ligne de référence est mal positionnée — l'erreur est parlante",
                            "Faire le lien avec la construction réelle : montrer des photos de murs en chantier pour expliquer les composites",
                            "Utiliser le Pet Palette pour les modifications — c'est un outil exclusif et puissant d'ARCHICAD"
                        ],
                        warnings: [
                            "Les intersections de murs peuvent frustrer — rester patient et positif",
                            "Bien expliquer le concept de priorité de jonction avec des exemples visuels",
                            "Ne pas introduire les murs-rideaux à ce stade"
                        ],
                        exerciseSolution: "T3 : séjour/cuisine ouverte (~35m²), 3 chambres (~12m², ~10m², ~10m²), 1 SDB (~6m²), 1 WC (~2m²), entrée/couloir. Murs extérieurs composites, intérieurs porteurs 20cm, cloisons 7cm."
                    }
                },
                {
                    id: 3,
                    title: "Structure : dalles, poteaux, poutres",
                    subtitle: "Donner une ossature solide à ton bâtiment — comme un ingénieur structure",
                    duration: "7h",
                    week: 1,
                    objectives: [
                        "Créer des dalles (planchers et plafonds) avec la Baguette magique",
                        "Maîtriser les dalles composites (chape + isolant + structure)",
                        "Placer des poteaux structurels aux points stratégiques",
                        "Relier la structure avec des poutres",
                        "Avoir un bâtiment structurellement complet en fin de journée"
                    ],
                    keyPoints: [
                        {
                            title: "L'outil Dalle — Tes planchers",
                            content: "La dalle se dessine en plan par son contour. Astuce de pro : la Baguette magique (Espace) crée la dalle automatiquement en cliquant à l'intérieur des murs ! L'altitude de référence est essentielle : 0.00 pour le RDC, hauteur d'étage pour le plancher haut."
                        },
                        {
                            title: "Poteaux & Poutres — L'ossature",
                            content: "Les poteaux se placent par point (clic simple). Les poutres relient deux points. En maison individuelle, on les utilise pour les grandes portées (baies vitrées larges, double hauteur). En collectif ou tertiaire, c'est la trame structurelle."
                        },
                        {
                            title: "La Baguette magique — Productivité ×10",
                            content: "La Baguette magique (Espace) détecte les contours fermés et crée l'élément en un clic. Fonctionne avec les dalles, les zones, et bien d'autres outils. Si elle ne fonctionne pas = ton contour de murs n'est pas fermé. Zoom aux angles pour trouver le trou."
                        }
                    ],
                    exercise: {
                        title: "🏗️ Structure complète du T3",
                        description: "Ajouter toute la structure au T3 : planchers, poteaux porteurs, poutres. Le bâtiment devient un vrai volume structurel.",
                        steps: [
                            "Créer la dalle de plancher bas avec la Baguette magique — un clic et c'est fait !",
                            "Paramétrer la dalle en composite réaliste (carrelage 1cm + chape 5cm + isolant 5cm + béton 20cm)",
                            "Placer 4 poteaux porteurs (30×30cm) aux points stratégiques du plan",
                            "Créer des poutres béton (30×50cm) reliant les poteaux",
                            "Ajouter la dalle haute (plafond) — même méthode, altitude +2,60m",
                            "Vérifier la cohérence en coupe : tout doit s'emboîter"
                        ]
                    },
                    checklist: [
                        "Je maîtrise la Baguette magique pour créer des dalles",
                        "Je sais paramétrer des dalles composites réalistes",
                        "Je sais placer des poteaux aux bons endroits",
                        "Je sais créer des poutres entre les éléments porteurs",
                        "Mon bâtiment a une structure complète visible en coupe"
                    ],
                    formateurGuide: {
                        intro: "La Baguette magique est le moment 'waouh' de la journée. Un clic = une dalle complète. L'apprenant voit la puissance du logiciel. On construit la structure comme un ingénieur structure penserait le bâtiment.",
                        timing: [
                            { time: "0h - 0h30", content: "Récap jour 2 — ouvrir le T3 — aujourd'hui on lui donne sa structure" },
                            { time: "0h30 - 2h00", content: "Outil Dalle : création, composites, altitudes — démo puis pratique immédiate" },
                            { time: "2h00 - 2h30", content: "Baguette magique : démo spectaculaire puis exercice" },
                            { time: "2h30 - 3h00", content: "Pause" },
                            { time: "3h00 - 4h00", content: "Poteaux : types, sections — placer dans le projet, vérifier en 3D" },
                            { time: "4h00 - 5h00", content: "Poutres : création, profils — relier les éléments porteurs" },
                            { time: "5h00 - 6h30", content: "Exercice : structurer le T3 complet" },
                            { time: "6h30 - 7h00", content: "Vérification en 3D + coupe — le bâtiment a une ossature !" }
                        ],
                        tips: [
                            "La Baguette magique est un moment de productivité impressionnant — en profiter",
                            "Montrer la coupe instantanée pour vérifier les épaisseurs et les altitudes",
                            "Faire le parallèle avec un chantier réel : on coule d'abord les fondations, puis les planchers",
                            "Altitude = le piège classique du débutant — insister dessus avec des vérifications en coupe"
                        ],
                        warnings: [
                            "Les altitudes de dalles sont le piège n°1 — toujours vérifier en coupe",
                            "Les poutres peuvent sembler complexes — rester simple avec des profils rectangulaires",
                            "Si la Baguette magique ne marche pas → contour non fermé, zoomer aux angles"
                        ],
                        exerciseSolution: "Dalle basse à 0.00, dalle haute à +2.60. Poteaux de 0.00 à 2.60. Poutres à 2.10 (sous la dalle haute, hauteur poutre 50cm)."
                    }
                },
                {
                    id: 4,
                    title: "Portes, fenêtres & menuiseries",
                    subtitle: "Percer les ouvertures et donner vie au bâtiment — le moment où tout prend forme",
                    duration: "7h",
                    week: 1,
                    objectives: [
                        "Placer des portes dans les murs (battantes, coulissantes, entrée)",
                        "Placer des fenêtres avec les bonnes allèges selon les pièces",
                        "Maîtriser les dimensions standards de l'architecture résidentielle",
                        "Utiliser la bibliothèque d'objets ARCHICAD efficacement",
                        "Avoir un T3 complet avec toutes ses menuiseries — prêt pour la visite 3D"
                    ],
                    keyPoints: [
                        {
                            title: "Portes & fenêtres = Objets intelligents dans les murs",
                            content: "Tu cliques dans un mur, la porte ou fenêtre s'y insère et crée automatiquement l'ouverture. Pas besoin de dessiner le trou ! Chaque menuiserie est paramétrique : largeur, hauteur, type d'ouverture, matériau du cadre."
                        },
                        {
                            title: "Les dimensions standards en résidentiel",
                            content: "Portes : WC/SDB = 60-70cm, chambres = 80cm, entrée/PMR = 90cm, hauteur standard = 204cm. Fenêtres : standard chambre = 120×135cm, séjour = 140×135cm, baie vitrée = 180-240×215cm. Allèges : standard = 90cm, SDB = 130cm, baie vitrée = 0cm."
                        },
                        {
                            title: "L'allège — Le paramètre qu'on oublie",
                            content: "L'allège = distance sol → bas de la fenêtre. Standard 90cm pour les pièces de vie (protection + appui de fenêtre). 130cm pour la SDB (intimité). 0cm pour une baie vitrée toute hauteur. Toujours y penser AVANT de placer la fenêtre."
                        }
                    ],
                    exercise: {
                        title: "🪟 Le T3 prend vie : toutes les menuiseries",
                        description: "Placer toutes les portes et fenêtres du T3. En fin de journée, on fait la visite virtuelle complète !",
                        steps: [
                            "Porte d'entrée 90cm blindée avec imposte vitrée — elle donne le ton du projet",
                            "Portes des chambres 80cm — vérifier le sens d'ouverture (espace optimisé)",
                            "Porte SDB 70cm — porte coulissante pour gagner de la place",
                            "Porte WC 60cm — sens d'ouverture vers l'intérieur (convention)",
                            "Baie vitrée séjour 240cm — allège 0cm — le séjour s'ouvre sur l'extérieur",
                            "Fenêtres chambres 120×135cm — allège 90cm — lumière naturelle optimale",
                            "Fenêtre cuisine 140×135cm — allège 90cm — vue sur le jardin",
                            "Fenêtre SDB 60×45cm — allège 130cm — intimité garantie",
                            "Visite 3D complète du T3 : on entre par la porte, on parcourt chaque pièce !"
                        ]
                    },
                    checklist: [
                        "Je sais placer des portes avec le bon sens d'ouverture",
                        "Je sais placer des fenêtres avec la bonne allège",
                        "Je connais les dimensions standards en résidentiel",
                        "Je sais naviguer dans la bibliothèque d'objets",
                        "Mon T3 est complet : murs + structure + menuiseries !"
                    ],
                    formateurGuide: {
                        intro: "Séance gratifiante ! Le bâtiment prend vie avec les ouvertures. Terminer par une visite 3D du T3 complet — c'est le moment de fierté de fin de semaine 1 (presque). L'apprenant réalise qu'il sait construire un logement.",
                        timing: [
                            { time: "0h - 0h30", content: "Récap jour 3 — vue 3D du T3 actuel — aujourd'hui on perce les ouvertures" },
                            { time: "0h30 - 2h00", content: "Outil Porte : placement, sens d'ouverture, dimensions standards — pratique immédiate" },
                            { time: "2h00 - 2h30", content: "Bibliothèque : chercher le bon type de porte/fenêtre rapidement" },
                            { time: "2h30 - 3h00", content: "Pause" },
                            { time: "3h00 - 4h30", content: "Outil Fenêtre : allèges, types, baies vitrées — relier aux usages architecturaux" },
                            { time: "4h30 - 5h00", content: "Points d'accrochage et saisie numérique (rattrapé du jour 1 si besoin)" },
                            { time: "5h00 - 6h30", content: "Exercice : compléter le T3 avec toutes les menuiseries" },
                            { time: "6h30 - 7h00", content: "Visite virtuelle 3D du T3 complet — bilan — on a un vrai logement !" }
                        ],
                        tips: [
                            "Montrer le résultat 3D après chaque porte/fenêtre — c'est motivant !",
                            "Expliquer le sens d'ouverture avec la logique architecturale : 'la porte s'ouvre contre le mur pour ne pas gêner'",
                            "Terminer par une visite en perspective du T3 — tourner autour, entrer dedans",
                            "Faire le lien avec les codes architecturaux : pourquoi ces dimensions, ces allèges"
                        ],
                        warnings: [
                            "Le sens de placement (intérieur/extérieur) peut dérouter — expliquer avec un schéma",
                            "Ne pas perdre de temps dans la bibliothèque — rester sur les objets standards",
                            "Attention aux allèges : l'erreur classique c'est d'oublier de la régler"
                        ],
                        exerciseSolution: "Le T3 doit avoir 6-8 fenêtres et 6-7 portes. Vérifier en 3D que toutes les ouvertures sont cohérentes, les sens d'ouverture logiques, et les allèges correctes."
                    }
                },
                {
                    id: 5,
                    title: "Escaliers, toiture & bilan semaine 1",
                    subtitle: "Coiffer le bâtiment, relier les étages — ton T3 est un vrai projet d'archi",
                    duration: "7h",
                    week: 1,
                    objectives: [
                        "Créer un escalier paramétrique en respectant la réglementation",
                        "Maîtriser la formule de Blondel et les dimensions confortables",
                        "Créer une toiture à 2 ou 4 pans avec les bons paramètres",
                        "Rogner les murs sous la toiture — effet spectaculaire",
                        "Avoir un bâtiment complet de la fondation au faîtage"
                    ],
                    keyPoints: [
                        {
                            title: "L'outil Escalier — Relier les niveaux",
                            content: "L'outil Escalier d'ARCHICAD est un des meilleurs du marché. Tu choisis la forme (droit, quart tournant, demi-tournant), tu places les points, il calcule tout : nombre de marches, hauteur, giron, trémie dans la dalle. Formule de Blondel : 2h + g = 60-65cm."
                        },
                        {
                            title: "L'outil Toit — Couvrir le bâtiment",
                            content: "La toiture se construit pan par pan. Tu dessines la ligne de gouttière, tu donnes la pente, le pan se construit. Pentes standards : 30-35° pour tuiles, 15-25° pour ardoise, 3-5° pour toit-terrasse. Débord standard : 40-80cm."
                        },
                        {
                            title: "Rogner les murs — Moment spectaculaire",
                            content: "Après avoir posé le toit, les murs dépassent au-dessus. La commande 'Ajuster à la toiture' coupe les murs automatiquement pour qu'ils épousent la pente. L'effet est spectaculaire en 3D !"
                        }
                    ],
                    exercise: {
                        title: "🏡 Le T3 complet : de la dalle au faîtage",
                        description: "Ajouter l'escalier et la toiture. En fin de journée, le T3 est un vrai projet architectural complet.",
                        steps: [
                            "Calculer l'escalier : hauteur 2,80m → 16 marches de 17,5cm, giron 29cm (Blondel OK)",
                            "Créer un escalier quart tournant avec palier — placer dans le plan du T3",
                            "Ajouter un garde-corps (90cm de haut) le long de l'escalier",
                            "Créer une toiture 2 pans (pente 30°) sur le volume du T3",
                            "Régler les débords de toit (60cm)",
                            "Rogner les murs sous la toiture — admirer le résultat !",
                            "Visite 3D finale : le T3 est complet du sol au toit"
                        ]
                    },
                    checklist: [
                        "Je sais créer un escalier avec les bonnes proportions (Blondel)",
                        "Je sais créer une toiture à pans avec la bonne pente",
                        "Je sais rogner les murs sous la toiture",
                        "Mon T3 est complet : murs + structure + menuiseries + escalier + toit",
                        "Je suis capable de construire un volume habitable complet dans ARCHICAD"
                    ],
                    formateurGuide: {
                        intro: "Fin de semaine 1 ! On termine avec un bâtiment complet du sol au faîtage. L'escalier est technique mais le résultat est gratifiant. Le rognage des murs sous le toit est un moment 'waouh'. L'apprenant doit terminer fier de ce qu'il a construit.",
                        timing: [
                            { time: "0h - 0h30", content: "Récap — on a un T3 avec murs, structure, menuiseries — aujourd'hui on finit !" },
                            { time: "0h30 - 1h00", content: "Formule de Blondel et calcul d'escalier — court et efficace" },
                            { time: "1h00 - 2h30", content: "Outil Escalier : création d'un escalier quart tournant + garde-corps" },
                            { time: "2h30 - 3h00", content: "Pause" },
                            { time: "3h00 - 4h30", content: "Outil Toit : création de la toiture 2 pans + débords" },
                            { time: "4h30 - 5h30", content: "Rogner les murs + vérification en 3D et en coupe" },
                            { time: "5h30 - 6h30", content: "Peaufinage : corrections, ajustements, visite 3D" },
                            { time: "6h30 - 7h00", content: "BILAN SEMAINE 1 : visite du T3 complet — en 5 jours, tu construis un logement !" }
                        ],
                        tips: [
                            "Commencer par un escalier droit simple pour comprendre, puis passer au quart tournant",
                            "Le rognage des murs est un moment spectaculaire — le garder pour créer un effet 'waouh'",
                            "Faire une visite 3D complète en fin de journée — c'est valorisant",
                            "Insister : 'En 5 jours, tu as construit un logement complet. Imagine dans 15 jours...'"
                        ],
                        warnings: [
                            "L'outil Escalier a beaucoup de paramètres — ne montrer que l'essentiel",
                            "Les intersections de pans de toiture peuvent être capricieuses — sauvegarder avant",
                            "La trémie automatique peut parfois bugger — connaître la méthode manuelle"
                        ],
                        exerciseSolution: "16 marches (2800/175=16), giron 29cm. Toiture 2 pans, pente 30°, débord 60cm. Murs rognés sous le toit."
                    }
                }
            ]
        },
        {
            id: 2,
            title: "La vraie maison",
            subtitle: "Projet fil rouge : une maison individuelle complète R+1",
            days: [
                {
                    id: 6, title: "Maison individuelle — Gros œuvre RDC", subtitle: "Démarrer le vrai projet : une maison R+1 de 140m²", duration: "7h", week: 2,
                    objectives: ["Structurer un projet professionnel (calques, étages, unités)", "Modéliser les murs du RDC avec des composites réalistes", "Appliquer une méthodologie de projet efficace", "Travailler en autonomie", "Avoir le RDC complet en fin de journée"],
                    keyPoints: [
                        { title: "Méthodologie de projet", content: "Ordre pro : 1) Paramétrage projet 2) Murs extérieurs 3) Murs porteurs intérieurs 4) Cloisons 5) Menuiseries 6) Dalles. Vérifier en 3D après chaque étape." },
                        { title: "Programme de la maison", content: "RDC : entrée, séjour/salon (~35m²), cuisine ouverte (~15m²), WC, buanderie, garage. R+1 : 3 chambres, 1 SDB, palier. ~140m²." },
                        { title: "Calques et organisation", content: "Les calques s'organisent par type : murs porteurs, cloisons, menuiseries, dalles, toiture. Les combinaisons de calques passent instantanément d'un plan archi à un plan structure." }
                    ],
                    exercise: { title: "🏠 Maison — Phase 1 : RDC complet", description: "Construction du RDC en autonomie quasi-totale.", steps: ["Paramétrer le projet : unités, étages (RDC 0.00, R+1 +2.80m)", "Murs extérieurs composites (emprise ~14×10m + garage)", "Murs porteurs intérieurs", "Cloisons de distribution", "Toutes les menuiseries", "Dalles RDC + plancher R+1"] },
                    checklist: ["Projet bien paramétré", "Murs extérieurs composites", "Distribution RDC complète", "Menuiseries placées", "Dalles aux bonnes altitudes"],
                    formateurGuide: {
                        intro: "Premier jour du vrai projet ! Autonomie maximum. Fournir un plan de référence. Observer, guider, ne pas faire.",
                        timing: [{ time: "0h - 0h30", content: "Présentation du projet et du plan de référence" }, { time: "0h30 - 1h00", content: "Paramétrage ensemble" }, { time: "1h00 - 3h00", content: "Travail autonome : murs" }, { time: "3h00 - 3h30", content: "Pause + point 3D" }, { time: "3h30 - 5h30", content: "Travail autonome : menuiseries + dalles" }, { time: "5h30 - 6h30", content: "Finitions" }, { time: "6h30 - 7h00", content: "Review 3D" }],
                        tips: ["Fournir un plan lisible", "Laisser chercher 15 min avant d'aider", "Encourager régulièrement"],
                        warnings: ["Ne pas corriger trop vite", "Le RDC DOIT être fini en fin de journée"],
                        exerciseSolution: "Emprise ~14×10m avec garage. RDC complet avec menuiseries et dalles."
                    }
                },
                {
                    id: 7, title: "Maison — R+1 et toiture", subtitle: "Monter l'étage et couvrir la maison", duration: "7h", week: 2,
                    objectives: ["Copier les éléments répétitifs entre étages", "Modéliser le R+1 (chambres, SDB)", "Créer la toiture avec débords et rognage", "Avoir une maison complète du sol au faîtage"],
                    keyPoints: [
                        { title: "Copie inter-étages", content: "Copier les murs porteurs du RDC vers le R+1 : Sélectionner > Copier > Coller sur étage. Replacement automatique à la bonne altitude." },
                        { title: "Escalier et trémie", content: "Placer l'escalier RDC → R+1. Vérifier la trémie dans la dalle du R+1." },
                        { title: "Toiture complète", content: "Toiture 2 ou 4 pans. Pente adaptée au matériau. Rogner tous les murs sous la toiture." }
                    ],
                    exercise: { title: "🏡 Maison — Phase 2 : R+1 + toiture", description: "Le bâtiment prend sa forme définitive.", steps: ["Copier les murs porteurs vers le R+1", "Distribution R+1 : 3 chambres + SDB + palier", "Menuiseries du R+1", "Escalier quart tournant", "Vérifier la trémie", "Toiture 2 pans, pente 35°, débord 60cm", "Rogner les murs", "Visite 3D complète"] },
                    checklist: ["R+1 complet", "Escalier fonctionnel", "Toiture avec bons paramètres", "Murs rognés", "Cohérence 3D et coupes"],
                    formateurGuide: {
                        intro: "La maison prend sa forme finale ! Copie inter-étages + rognage = moments spectaculaires.",
                        timing: [{ time: "0h - 0h30", content: "Récap" }, { time: "0h30 - 1h30", content: "Copie inter-étages + distribution R+1" }, { time: "1h30 - 2h30", content: "Menuiseries + escalier" }, { time: "2h30 - 3h00", content: "Pause" }, { time: "3h00 - 4h30", content: "Toiture" }, { time: "4h30 - 5h30", content: "Rognage + vérifications" }, { time: "5h30 - 7h00", content: "Finitions + visite 3D" }],
                        tips: ["La copie inter-étages impressionne", "Terminer par une visite 3D tournante"],
                        warnings: ["Vérifier l'alignement des murs en coupe", "Sauvegarder avant le rognage"],
                        exerciseSolution: "Maison complète R+1 avec escalier et toiture 2 pans 35°."
                    }
                },
                {
                    id: 8, title: "Terrain, aménagements & zones", subtitle: "Poser la maison dans son contexte et calculer les surfaces", duration: "7h", week: 2,
                    objectives: ["Créer un terrain 3D avec l'outil Maillage", "Ajouter les aménagements extérieurs", "Créer les zones et calculer les surfaces", "Comprendre les surfaces réglementaires"],
                    keyPoints: [
                        { title: "L'outil Maillage", content: "Crée un terrain 3D avec des points à différentes altitudes." },
                        { title: "L'outil Zone", content: "Identifie chaque pièce : nom, catégorie, surface automatique. Baguette magique pour la détection." },
                        { title: "Surface de plancher", content: "Référence pour le permis de construire. ARCHICAD la calcule automatiquement." }
                    ],
                    exercise: { title: "🌳 Maison dans son jardin + surfaces", description: "Contexte paysager et données réglementaires.", steps: ["Maillage terrain 25×35m", "Positionner la maison", "Terrasse + végétation", "Zones RDC", "Zones R+1", "Catégories", "Vérifier les surfaces"] },
                    checklist: ["Terrain modélisé", "Aménagements présents", "Toutes les zones créées", "Surfaces calculées", "Projet complet dans son contexte"],
                    formateurGuide: {
                        intro: "On sort du bâtiment pour le contexte global. Terrain + zones = indispensable pour un dossier PC.",
                        timing: [{ time: "0h - 0h30", content: "Récap" }, { time: "0h30 - 2h00", content: "Maillage terrain" }, { time: "2h00 - 2h30", content: "Aménagements extérieurs" }, { time: "2h30 - 3h00", content: "Pause" }, { time: "3h00 - 4h30", content: "Outil Zone" }, { time: "4h30 - 5h30", content: "Surfaces réglementaires" }, { time: "5h30 - 6h30", content: "Exercice" }, { time: "6h30 - 7h00", content: "Vue 3D d'ensemble" }],
                        tips: ["Rendre concret : 'c'est ce que tu déclares au PC'", "La détection auto de zone est magique"],
                        warnings: ["Zone non détectée = mur pas fermé", "Maillage peut ralentir les machines"],
                        exerciseSolution: "Terrain avec pente douce. ~12-15 zones. Tableau des surfaces."
                    }
                },
                {
                    id: 9, title: "Coupes, élévations & vues documentaires", subtitle: "La puissance du BIM : vues générées automatiquement", duration: "7h", week: 2,
                    objectives: ["Créer des coupes stratégiques", "Générer les 4 élévations", "Paramétrer l'affichage professionnel", "Comprendre le lien dynamique maquette → vues"],
                    keyPoints: [
                        { title: "Coupes BIM = toujours à jour", content: "Ligne de coupe en plan → coupe auto avec hachures et matériaux. Modèle modifié → coupe mise à jour." },
                        { title: "4 façades en 4 clics", content: "4 marqueurs d'élévation → 4 façades auto avec menuiseries et ombres." },
                        { title: "Profondeur de vue", content: "Contrôle ce qui est visible derrière le plan de coupe." }
                    ],
                    exercise: { title: "✂️ Toutes les vues de la maison", description: "Générer les vues documentaires.", steps: ["Coupe longitudinale (séjour + escalier)", "Coupe transversale (chambres)", "4 marqueurs d'élévation", "Paramétrer les traits", "Ajuster les profondeurs", "Tester la mise à jour auto"] },
                    checklist: ["2 coupes stratégiques", "4 élévations", "Traits cohérents", "Vues bien cadrées", "Lien dynamique compris"],
                    formateurGuide: {
                        intro: "LA démonstration du BIM. Vues automatiques = des jours économisés sur un vrai projet.",
                        timing: [{ time: "0h - 0h30", content: "Récap" }, { time: "0h30 - 2h30", content: "Coupes" }, { time: "2h30 - 3h00", content: "Pause" }, { time: "3h00 - 5h00", content: "Élévations" }, { time: "5h00 - 6h30", content: "Exercice" }, { time: "6h30 - 7h00", content: "Démo : modifier un mur → MAJ partout" }],
                        tips: ["La démo modification → MAJ est le moment fort", "Expliquer le gain de temps en agence"],
                        warnings: ["Attention aux épaisseurs de traits"],
                        exerciseSolution: "2 coupes + 4 élévations. Coupes aux endroits intéressants."
                    }
                },
                {
                    id: 10, title: "Cotations, annotations & nomenclatures", subtitle: "Transformer la maquette en dossier pro", duration: "7h", week: 2,
                    objectives: ["Maîtriser la cotation architecturale", "Étiquettes automatiques", "Nomenclatures bidirectionnelles", "Plans prêts à mettre en page"],
                    keyPoints: [
                        { title: "Cotation architecturale", content: "3 niveaux de chaînes de cotes extérieures. Cotation auto des ouvertures. Cotes intérieures." },
                        { title: "Étiquettes intelligentes", content: "Liées aux éléments, MAJ automatique. Fenêtre modifiée → étiquette mise à jour." },
                        { title: "Nomenclatures BIM", content: "Bidirectionnelles. Cliquer une ligne → sélectionne l'élément. Modifier dans le tableau → modifie l'élément. Export Excel." }
                    ],
                    exercise: { title: "📏 Plans cotés + nomenclatures", description: "Documentation complète.", steps: ["Chaînes de cotes extérieures", "Cotes auto des ouvertures", "Cotes intérieures", "Étiquettes menuiseries", "Étiquettes zones", "Nomenclature fenêtres", "Nomenclature portes", "Tableau surfaces", "Export tableur"] },
                    checklist: ["Plans cotés pro", "Menuiseries étiquetées", "Zones avec nom + surface", "Nomenclatures à jour", "Plans professionnels"],
                    formateurGuide: {
                        intro: "Plans bien cotés = plans pro. Nomenclatures = vraie valeur du BIM.",
                        timing: [{ time: "0h - 0h30", content: "Récap" }, { time: "0h30 - 2h30", content: "Cotations" }, { time: "2h30 - 3h00", content: "Pause" }, { time: "3h00 - 4h30", content: "Étiquettes" }, { time: "4h30 - 6h00", content: "Nomenclatures" }, { time: "6h00 - 6h30", content: "Exercice" }, { time: "6h30 - 7h00", content: "Bilan semaine 2" }],
                        tips: ["Montrer un plan pro comme référence", "La bidirectionnalité bluffe"],
                        warnings: ["Ne pas surcoter", "Rester sur les nomenclatures standards"],
                        exerciseSolution: "Plan RDC complet coté + 3-4 nomenclatures."
                    }
                }
            ]
        },
        {
            id: 3,
            title: "Livrable pro",
            subtitle: "Mise en page, matériaux, rendus — le dossier qui impressionne",
            days: [
                {
                    id: 11, title: "Mise en page & dossier PDF", subtitle: "Planches professionnelles et export", duration: "7h", week: 3,
                    objectives: ["Maîtriser le Carnet de mise en page", "Cartouche personnalisé", "Vues aux bonnes échelles", "Export PDF pro multi-pages"],
                    keyPoints: [
                        { title: "Carnet de mise en page", content: "Feuilles A3/A1, vues liées au modèle, MAJ automatique." },
                        { title: "Gabarits et cartouches", content: "Cartouche = ta signature pro : nom projet, architecte, date, échelle, phase." },
                        { title: "Publication PDF", content: "Export multi-pages en un clic. Jeux de publication automatisés." }
                    ],
                    exercise: { title: "📄 Dossier pro complet", description: "5-6 planches A3 + export PDF.", steps: ["Gabarit A3 + cartouche", "Plan RDC coté 1/100", "Plan R+1 1/100", "Coupes", "Élévations", "Nomenclatures + surfaces", "Export PDF"] },
                    checklist: ["Cartouche pro", "Bonnes échelles", "Dossier cohérent", "PDF propre", "Présentable à un client"],
                    formateurGuide: {
                        intro: "Le livrable final ! Ce que le client voit. Montrer des exemples de vrais dossiers d'agence.",
                        timing: [{ time: "0h - 2h00", content: "Carnet + gabarits + cartouche" }, { time: "2h00 - 2h30", content: "Pause" }, { time: "2h30 - 4h00", content: "Composition des planches" }, { time: "4h00 - 5h00", content: "Publication PDF" }, { time: "5h00 - 6h30", content: "Exercice" }, { time: "6h30 - 7h00", content: "Review qualité" }],
                        tips: ["Exemples de dossiers pro", "Le cartouche donne l'aspect pro immédiatement"],
                        warnings: ["Attention aux échelles", "Soigner la composition"],
                        exerciseSolution: "5-6 feuilles A3. PDF exporté propre."
                    }
                },
                {
                    id: 12, title: "Matériaux & habillage", subtitle: "Du gris au photoréaliste — donner vie au projet", duration: "7h", week: 3,
                    objectives: ["Matériaux de façade cohérents", "Intérieurs réalistes", "Matériaux personnalisés", "Projet entièrement habillé"],
                    keyPoints: [
                        { title: "Matériaux = 3 facettes", content: "Plan (hachures) + 3D (texture) + données physiques." },
                        { title: "Palette architecturale", content: "Max 3-4 matériaux en façade. Cohérence = identité architecturale." },
                        { title: "BIMcomponents", content: "Matériaux et textures supplémentaires téléchargeables." }
                    ],
                    exercise: { title: "🎨 Relooking complet", description: "Palette contemporaine cohérente.", steps: ["Palette : enduit + bois + alu anthracite", "Enduit façades", "Bardage bois accent", "Menuiseries alu anthracite", "Parquet + carrelage intérieurs", "Terrasse bois", "Terrain gazon + gravier", "Vérifier en 3D ombré"] },
                    checklist: ["Palette cohérente", "Intérieurs habillés", "Terrain avec matériaux", "Rendu 3D esthétique", "Identité architecturale"],
                    formateurGuide: {
                        intro: "Séance créative ! Le avant/après est spectaculaire. Parler de palette architecturale comme un archi.",
                        timing: [{ time: "0h - 0h30", content: "Exemples de palettes archi" }, { time: "0h30 - 2h30", content: "Matériaux : principes + application" }, { time: "2h30 - 3h00", content: "Pause" }, { time: "3h00 - 5h00", content: "Habillage complet" }, { time: "5h00 - 6h30", content: "Matériaux perso + terrain" }, { time: "6h30 - 7h00", content: "Avant/après" }],
                        tips: ["Pinterest/ArchDaily pour l'inspiration", "Moins c'est plus en archi"],
                        warnings: ["Textures trop grandes = lenteur", "Pas trop de matériaux"],
                        exerciseSolution: "Palette enduit + bois + alu. Intérieurs parquet + carrelage."
                    }
                },
                {
                    id: 13, title: "Rendus photoréalistes", subtitle: "Images de synthèse — éclairage et ambiances", duration: "7h", week: 3,
                    objectives: ["Éclairage solaire réaliste", "Luminaires intérieurs", "Rendus avec le moteur intégré", "Rendus extérieurs et intérieurs", "Ambiances jour et nuit"],
                    keyPoints: [
                        { title: "Éclairage solaire", content: "Position exacte du soleil selon géolocalisation et date/heure." },
                        { title: "Moteur de rendu intégré", content: "CineRender/Redshift. Basse qualité d'abord pour vérifier, puis haute qualité." },
                        { title: "Conseil pro", content: "Soleil rasant matin/soir = ombres dramatiques. Éviter le midi (plat)." }
                    ],
                    exercise: { title: "📸 Images de synthèse", description: "Rendus jour et nuit.", steps: ["Géolocalisation", "Soleil été 9h", "Rendu extérieur jardin", "Rendu intérieur séjour", "Luminaires intérieurs", "Rendu de nuit", "Haute qualité"] },
                    checklist: ["Soleil réaliste", "1 rendu extérieur", "1 rendu intérieur", "1 rendu nuit", "Qualité présentable"],
                    formateurGuide: {
                        intro: "Séance préférée des apprenants ! Parler de lumière comme un photographe d'archi.",
                        timing: [{ time: "0h - 2h00", content: "Éclairage" }, { time: "2h00 - 2h30", content: "Pause" }, { time: "2h30 - 4h30", content: "Rendus" }, { time: "4h30 - 6h00", content: "Exercice" }, { time: "6h00 - 7h00", content: "Ajustements" }],
                        tips: ["Basse qualité d'abord", "Rendus de nuit spectaculaires", "Composition photo : règle des tiers"],
                        warnings: ["Rendus HQ = temps long", "Vérifier la RAM"],
                        exerciseSolution: "3 rendus : ext jour, int jour, nuit. 2000px min."
                    }
                },
                {
                    id: 14, title: "Enscape — Rendu temps réel", subtitle: "Naviguer comme dans un jeu vidéo — communication client", duration: "7h", week: 3,
                    objectives: ["Connecter Enscape à ARCHICAD", "Navigation temps réel photoréaliste", "Matériaux et éclairage Enscape", "Panoramas 360° et images HD", "Communication client"],
                    keyPoints: [
                        { title: "Enscape = jeu vidéo architectural", content: "Fenêtre rendu temps réel. WASD + souris. Qualité quasi-photoréaliste instantanée. Standard en agence." },
                        { title: "Communication client", content: "Montrer en direct, changer le point de vue, modifier l'heure. Panoramas 360° partageables." },
                        { title: "Matériaux Enscape", content: "Réflexions, émission lumineuse, bump maps avancés." }
                    ],
                    exercise: { title: "🎮 Visite virtuelle Enscape", description: "Exploration temps réel + captures.", steps: ["Lancer Enscape", "Naviguer autour de la maison", "Entrer et parcourir les pièces", "Ajuster l'heure (matin → nuit)", "Affiner les matériaux", "Capturer 3-4 images HD", "Panorama 360° du séjour"] },
                    checklist: ["Enscape connecté", "Navigation fluide", "Images capturées", "Panorama 360°", "Utilisation client comprise"],
                    formateurGuide: {
                        intro: "Séance impressionnante ! Laisser naviguer librement. Cas d'utilisation en agence.",
                        timing: [{ time: "0h - 1h00", content: "Installation + lancement" }, { time: "1h00 - 2h30", content: "Navigation + paramètres" }, { time: "2h30 - 3h00", content: "Pause" }, { time: "3h00 - 4h30", content: "Matériaux + éclairage" }, { time: "4h30 - 6h00", content: "Images + panorama" }, { time: "6h00 - 7h00", content: "Comparatif moteurs" }],
                        tips: ["Laisser naviguer librement", "Avant/après rendu intégré vs Enscape", "Panoramas = argument client"],
                        warnings: ["Bonne carte graphique requise", "Plugin à jour"],
                        exerciseSolution: "3-4 images + 1 panorama 360°. Comparatif avec rendu intégré."
                    }
                },
                {
                    id: 15, title: "3ds Max & pipeline de rendu", subtitle: "Vue d'ensemble de la production visuelle en architecture", duration: "7h", week: 3,
                    objectives: ["Workflow ARCHICAD → 3ds Max (FBX)", "Découvrir 3ds Max et V-Ray", "Comparer les moteurs", "Savoir quand utiliser quoi", "Vision complète du pipeline"],
                    keyPoints: [
                        { title: "3ds Max = haut de gamme", content: "V-Ray/Corona pour concours, promoteurs, publications. Export FBX depuis ARCHICAD." },
                        { title: "Quand utiliser quoi", content: "Intégré = visuels simples. Enscape = quotidien. 3ds Max = exceptionnel. 90% du temps, Enscape suffit." },
                        { title: "Twinmotion", content: "Alternative gratuite avec licence ARCHICAD. Plus de décor, moins bien intégré." }
                    ],
                    exercise: { title: "🖼️ Pipeline rendu complet", description: "Explorer chaque outil.", steps: ["Export FBX", "Démo 3ds Max", "Observer un rendu V-Ray", "Tester Twinmotion", "Comparatif côte à côte", "Définir son workflow idéal"] },
                    checklist: ["Export FBX maîtrisé", "Différences comprises", "Choix éclairé", "Vision du pipeline", "Workflow personnel défini"],
                    formateurGuide: {
                        intro: "Vue d'ensemble. Rester en démo pour 3ds Max. L'objectif = connaître les options.",
                        timing: [{ time: "0h - 1h00", content: "Tour d'horizon des moteurs" }, { time: "1h00 - 2h30", content: "Export FBX + démo 3ds Max" }, { time: "2h30 - 3h00", content: "Pause" }, { time: "3h00 - 4h30", content: "Twinmotion" }, { time: "4h30 - 6h00", content: "Comparatif" }, { time: "6h00 - 7h00", content: "Bilan semaine 3" }],
                        tips: ["3ds Max en survol seulement", "Montrer des exemples de rendus pro", "L'essentiel = savoir QUAND utiliser quoi"],
                        warnings: ["3ds Max = ne pas frustrer", "Tester les exports avant la séance"],
                        exerciseSolution: "Comparatif visuel. L'apprenant sait exporter et connaît les options."
                    }
                }
            ]
        },
        {
            id: 4,
            title: "Maîtrise & projet final",
            subtitle: "Interopérabilité, productivité et livrable d'exception",
            days: [
                {
                    id: 16, title: "SketchUp & interopérabilité", subtitle: "Importer, exporter, communiquer en BIM", duration: "7h", week: 4,
                    objectives: ["Importer des modèles SketchUp (3D Warehouse)", "Exporter en IFC", "Enrichir le projet avec du mobilier", "Maîtriser les formats d'échange"],
                    keyPoints: [
                        { title: "Import SketchUp", content: "ARCHICAD importe les .skp directement. Idéal pour le mobilier 3D Warehouse." },
                        { title: "Format IFC", content: "Format universel BIM. Obligatoire pour les marchés publics." },
                        { title: "3D Warehouse", content: "Bibliothèque infinie de mobilier 3D gratuit." }
                    ],
                    exercise: { title: "🔄 Meubler et échanger", description: "Mobilier + formats d'échange.", steps: ["Télécharger du mobilier 3D Warehouse", "Importer les .skp", "Meubler séjour + cuisine", "Export IFC", "Réimport IFC", "Rendu Enscape meublé"] },
                    checklist: ["Import SketchUp maîtrisé", "Projet meublé", "Export IFC fonctionnel", "Interopérabilité comprise", "Rendu avec mobilier"],
                    formateurGuide: {
                        intro: "Enrichir le projet et apprendre les échanges. Le mobilier transforme les espaces.",
                        timing: [{ time: "0h - 2h00", content: "Import SketchUp" }, { time: "2h00 - 2h30", content: "Pause" }, { time: "2h30 - 4h00", content: "Meubler le projet" }, { time: "4h00 - 5h00", content: "Export IFC" }, { time: "5h00 - 6h30", content: "Rendu Enscape meublé" }, { time: "6h30 - 7h00", content: "Récap" }],
                        tips: ["3D Warehouse en direct = fun", "Le meublé + Enscape = résultat top"],
                        warnings: ["Objets SketchUp parfois lourds", "Conversion pas toujours parfaite"],
                        exerciseSolution: "Projet meublé. Export IFC OK. Rendu meublé."
                    }
                },
                {
                    id: 17, title: "Favoris, templates & productivité", subtitle: "Les techniques de pro pour travailler 2× plus vite", duration: "7h", week: 4,
                    objectives: ["Créer des favoris pour les éléments récurrents", "Personnaliser les raccourcis", "Créer un template réutilisable", "Workflow professionnel optimisé"],
                    keyPoints: [
                        { title: "Favoris", content: "Paramètres complets d'un élément en un clic. Gain de temps énorme." },
                        { title: "Template", content: "Fichier modèle avec tout pré-configuré. Secret des agences productives." },
                        { title: "Raccourcis perso", content: "Adaptés à TA pratique. Les pros ont leurs raccourcis sur-mesure." }
                    ],
                    exercise: { title: "⚡ Environnement de travail pro", description: "Favoris + template + raccourcis.", steps: ["10 favoris essentiels", "5-10 raccourcis personnalisés", "Template de projet complet", "Tester le template", "Configurer l'espace de travail", "Sauvegarder l'environnement"] },
                    checklist: ["Favoris créés", "Raccourcis personnalisés", "Template fonctionnel", "Espace de travail optimisé", "Productivité augmentée"],
                    formateurGuide: {
                        intro: "Investissement à long terme. Ce qu'on crée aujourd'hui servira pendant des années.",
                        timing: [{ time: "0h - 2h00", content: "Favoris" }, { time: "2h00 - 2h30", content: "Pause" }, { time: "2h30 - 4h00", content: "Template" }, { time: "4h00 - 5h00", content: "Raccourcis + espace de travail" }, { time: "5h00 - 6h30", content: "Test du template" }, { time: "6h30 - 7h00", content: "Récap" }],
                        tips: ["Chronomètre avec vs sans favoris", "Template = secret des agences"],
                        warnings: ["Pas trop de favoris inutiles", "Tester le template avant usage réel"],
                        exerciseSolution: "10 favoris + template + raccourcis + espace de travail."
                    }
                },
                {
                    id: 18, title: "Projet final — Jour 1 : Nouvelle maison", subtitle: "Autonomie totale — tout mettre en pratique", duration: "7h", week: 4,
                    objectives: ["Démarrer un projet en autonomie totale", "Utiliser template et favoris", "Gros œuvre complet en une journée", "Démontrer sa maîtrise"],
                    keyPoints: [
                        { title: "Le brief", content: "Maison contemporaine R+1 160m² : double hauteur séjour, cuisine ouverte, 4 chambres, 2 SDB, bureau, terrasse couverte. Toit plat + pan incliné." },
                        { title: "Autonomie totale", content: "Le formateur n'intervient pas spontanément. L'apprenant mène le projet." },
                        { title: "Efficacité", content: "Favoris + template = démarrage rapide. Penser architecture, pas dessin." }
                    ],
                    exercise: { title: "🏡 Projet final — Gros œuvre", description: "Maison contemporaine en autonomie.", steps: ["Ouvrir le template", "Emprise au sol", "Murs + cloisons (favoris)", "Grandes baies vitrées séjour", "Dalles + terrasse", "Escalier architectural dans le séjour", "Toiture mixte toit plat + pan incliné", "Vérification 3D"] },
                    checklist: ["Template utilisé", "RDC complet", "R+1 complet", "Escalier + toiture", "Caractère architectural"],
                    formateurGuide: {
                        intro: "Jour d'examen ! L'apprenant travaille seul. Brief plus ambitieux (double hauteur, toit mixte).",
                        timing: [{ time: "0h - 0h30", content: "Brief architectural" }, { time: "0h30 - 3h00", content: "Gros œuvre RDC (autonome)" }, { time: "3h00 - 3h30", content: "Pause" }, { time: "3h30 - 5h30", content: "R+1 + escalier + toiture (autonome)" }, { time: "5h30 - 6h30", content: "Finitions" }, { time: "6h30 - 7h00", content: "Review 3D" }],
                        tips: ["Ne pas intervenir sauf demande", "Encourager les choix perso"],
                        warnings: ["Double hauteur peut poser problème — guider si besoin", "Toit mixte = défi"],
                        exerciseSolution: "Maison contemporaine 160m² avec gros œuvre complet."
                    }
                },
                {
                    id: 19, title: "Projet final — Jour 2 : Habillage & docs", subtitle: "Matériaux, rendus, plans cotés", duration: "7h", week: 4,
                    objectives: ["Palette contemporaine", "Meubler avec SketchUp", "Documentation complète", "Rendus Enscape portfolio"],
                    keyPoints: [
                        { title: "Palette contemporaine", content: "Béton apparent, bois clair, métal noir, verre. Volumes et lumière font le design." },
                        { title: "Documentation express", content: "Avec l'expérience acquise : coupes 30min, cotations 1h, nomenclatures 30min." },
                        { title: "Rendus portfolio", content: "Qualité qui donne envie de montrer. Angles soignés, lumière travaillée." }
                    ],
                    exercise: { title: "🎨📸 Habillage + docs + rendus", description: "Le projet devient beau ET documenté.", steps: ["Palette béton + bois + métal noir", "Mobilier 3D Warehouse", "Coupes et élévations", "Cotations et étiquettes", "Nomenclatures", "Rendus Enscape : 3 ext + 2 int", "Panorama 360° double hauteur"] },
                    checklist: ["Matériaux contemporains", "Projet meublé", "Plans cotés", "Nomenclatures", "Rendus portfolio"],
                    formateurGuide: {
                        intro: "Avant-dernier jour ! Efficacité maximale. Le résultat doit donner envie d'être montré.",
                        timing: [{ time: "0h - 2h00", content: "Matériaux + mobilier" }, { time: "2h00 - 2h30", content: "Pause" }, { time: "2h30 - 4h00", content: "Documentation" }, { time: "4h00 - 5h00", content: "Nomenclatures" }, { time: "5h00 - 6h30", content: "Rendus Enscape" }, { time: "6h30 - 7h00", content: "Point d'avancement" }],
                        tips: ["Autonomie 95%", "Double hauteur = rendus impressionnants"],
                        warnings: ["Gérer le temps", "Prioriser les rendus si retard"],
                        exerciseSolution: "Projet habillé, documenté, avec rendus. Prêt pour mise en page."
                    }
                },
                {
                    id: 20, title: "Projet final — Livraison & bilan", subtitle: "Dossier d'exception — tu es architecte sur ARCHICAD 🎓", duration: "7h", week: 4,
                    objectives: ["Dossier de présentation d'exception", "Mise en page soignée", "Export PDF final", "Présentation comme un architecte", "Bilan et perspectives"],
                    keyPoints: [
                        { title: "Dossier d'exception", content: "Plans cotés, coupes, élévations, 3D, nomenclatures, rendus Enscape, panorama 360°. Mise en page soignée, cartouche pro." },
                        { title: "Présentation", content: "Expliquer les choix : parti architectural, circulation, matériaux, orientation. Le dossier raconte une histoire." },
                        { title: "Et après ?", content: "Pratiquer 3×/semaine minimum. Graphisoft Learn, communauté ARCHICAD. Certification Graphisoft. Teamwork, BIM Management, IFC avancé." }
                    ],
                    exercise: { title: "🎓 Le dossier final", description: "Assembler et présenter — ton portfolio ARCHICAD.", steps: ["Revue finale du modèle", "Mise à jour vues + nomenclatures", "Mise en page A3 + cartouche", "Plans, coupes, élévations, rendus, nomenclatures", "Export PDF", "Présentation orale devant le formateur"] },
                    checklist: ["Modèle propre", "PDF complet (8-12 planches)", "Rendus qualité portfolio", "Présentation réussie", "Maîtrise professionnelle d'ARCHICAD"],
                    formateurGuide: {
                        intro: "Le grand final ! Finir avec un dossier dont l'apprenant est FIER. La présentation orale valorise le travail.",
                        timing: [{ time: "0h - 1h00", content: "Corrections finales" }, { time: "1h00 - 2h30", content: "Mise en page + PDF" }, { time: "2h30 - 3h00", content: "Pause" }, { time: "3h00 - 4h30", content: "Derniers rendus Enscape" }, { time: "4h30 - 5h30", content: "Préparation présentation" }, { time: "5h30 - 6h30", content: "Présentation + feedback" }, { time: "6h30 - 7h00", content: "BILAN : compétences, ressources, certifications 🎉" }],
                        tips: ["Laisser l'apprenant présenter — valorisant", "Certificat de fin de formation", "Note positive : 'de zéro à dossier pro en 20 jours'"],
                        warnings: ["Pas trop perfectionniste — résultat encourageant", "Garder du temps pour le bilan"],
                        exerciseSolution: "PDF 8-12 planches A3 : plans cotés, coupes, élévations, 3D, rendus Enscape, panorama 360°, nomenclatures."
                    }
                }
            ]
        }
    ]
};

// Raccourcis clavier ARCHICAD
const SHORTCUTS_DATA = {
    categories: [
        {
            name: "Navigation",
            shortcuts: [
                { keys: ["F2"], label: "Plan d'étage" },
                { keys: ["F3"], label: "Vue 3D" },
                { keys: ["F5"], label: "Élévation / Coupe" },
                { keys: ["Molette"], label: "Zoom avant/arrière" },
                { keys: ["Clic molette"], label: "Déplacer la vue (Pan)" },
                { keys: ["Shift", "Molette"], label: "Orbite 3D" },
                { keys: ["Ctrl", "Shift", "Z"], label: "Zoom sur sélection" },
                { keys: ["Ctrl", "0"], label: "Zoom sur tout" },
                { keys: ["Alt", "F5"], label: "Vue précédente" }
            ]
        },
        {
            name: "Fichier & Édition",
            shortcuts: [
                { keys: ["Ctrl", "S"], label: "Enregistrer" },
                { keys: ["Ctrl", "Z"], label: "Annuler" },
                { keys: ["Ctrl", "Shift", "Z"], label: "Rétablir" },
                { keys: ["Ctrl", "C"], label: "Copier" },
                { keys: ["Ctrl", "V"], label: "Coller" },
                { keys: ["Ctrl", "X"], label: "Couper" },
                { keys: ["Suppr"], label: "Supprimer la sélection" },
                { keys: ["Ctrl", "A"], label: "Tout sélectionner" },
                { keys: ["Escape"], label: "Désélectionner / Annuler outil" }
            ]
        },
        {
            name: "Outils de modélisation",
            shortcuts: [
                { keys: ["W"], label: "Outil Mur" },
                { keys: ["D"], label: "Outil Porte" },
                { keys: ["Shift", "D"], label: "Outil Fenêtre" },
                { keys: ["L"], label: "Outil Dalle" },
                { keys: ["O"], label: "Outil Objet" },
                { keys: ["1"], label: "Outil Ligne" },
                { keys: ["2"], label: "Outil Polyligne" },
                { keys: ["3"], label: "Outil Cercle/Arc" },
                { keys: ["R"], label: "Outil Toit" },
                { keys: ["Espace"], label: "Baguette magique" }
            ]
        },
        {
            name: "Édition d'éléments",
            shortcuts: [
                { keys: ["Ctrl", "D"], label: "Déplacer" },
                { keys: ["Ctrl", "Shift", "D"], label: "Copier (drag copy)" },
                { keys: ["Ctrl", "E"], label: "Rotation" },
                { keys: ["Ctrl", "M"], label: "Miroir" },
                { keys: ["Ctrl", "Shift", "M"], label: "Multiplier" },
                { keys: ["Ctrl", "G"], label: "Grouper" },
                { keys: ["Ctrl", "Shift", "G"], label: "Dégrouper" },
                { keys: ["Ctrl", "T"], label: "Ouvrir la boîte de dialogue de l'outil" }
            ]
        },
        {
            name: "Vues & Affichage",
            shortcuts: [
                { keys: ["Tab"], label: "Basculer dans le tracker" },
                { keys: ["Ctrl", "F3"], label: "Axonométrie" },
                { keys: ["Shift", "F3"], label: "Perspective" },
                { keys: ["F6"], label: "Coupe 3D" },
                { keys: ["Shift", "F6"], label: "Détail" },
                { keys: ["F7"], label: "Navigateur" },
                { keys: ["Ctrl", "1"], label: "Affichage filaire" },
                { keys: ["Ctrl", "2"], label: "Lignes cachées" },
                { keys: ["Ctrl", "3"], label: "Ombrage" }
            ]
        },
        {
            name: "Cotations & Annotations",
            shortcuts: [
                { keys: ["M"], label: "Outil Cotation" },
                { keys: ["T"], label: "Outil Texte" },
                { keys: ["K"], label: "Outil Étiquette" },
                { keys: ["Z"], label: "Outil Zone" },
                { keys: ["N"], label: "Outil Ligne de repère" },
                { keys: ["F9"], label: "Outil Hachure" }
            ]
        }
    ]
};

// Ressources utiles
const RESOURCES_DATA = [
    {
        category: "Documentation officielle",
        items: [
            { title: "Graphisoft Help Center", description: "Documentation officielle complète d'ARCHICAD", url: "https://help.graphisoft.com/" },
            { title: "Graphisoft Learn", description: "Plateforme d'apprentissage gratuite Graphisoft", url: "https://learn.graphisoft.com/" },
            { title: "BIMcomponents", description: "Bibliothèque d'objets BIM téléchargeables", url: "https://bimcomponents.com/" }
        ]
    },
    {
        category: "Tutoriels vidéo",
        items: [
            { title: "Chaîne YouTube Graphisoft", description: "Tutoriels officiels en vidéo", url: "https://www.youtube.com/@GRAPHISOFT" },
            { title: "ARCHICAD Tutorials FR", description: "Tutoriels en français", url: "https://www.youtube.com/results?search_query=archicad+tutoriel+fran%C3%A7ais" },
            { title: "Eric Bobrie (YouTube)", description: "Formation ARCHICAD francophone", url: "https://www.youtube.com/results?search_query=archicad+eric+bobrie" }
        ]
    },
    {
        category: "Communauté & Forums",
        items: [
            { title: "Graphisoft Community", description: "Forum officiel de la communauté ARCHICAD", url: "https://community.graphisoft.com/" },
            { title: "ARCHICAD Talk", description: "Forum d'entraide international", url: "https://archicad-talk.graphisoft.com/" }
        ]
    },
    {
        category: "Outils 3D & Rendu",
        items: [
            { title: "Enscape", description: "Moteur de rendu en temps réel pour ARCHICAD", url: "https://enscape3d.com/" },
            { title: "3ds Max (Autodesk)", description: "Logiciel de référence pour les rendus haut de gamme", url: "https://www.autodesk.com/products/3ds-max/" },
            { title: "Twinmotion", description: "Rendu temps réel (gratuit avec ARCHICAD)", url: "https://www.twinmotion.com/" },
            { title: "V-Ray", description: "Moteur de rendu photoréaliste pour 3ds Max", url: "https://www.chaos.com/vray" }
        ]
    },
    {
        category: "Ressources architecturales",
        items: [
            { title: "ArchDaily", description: "Inspiration architecturale mondiale — projets, matériaux, détails", url: "https://www.archdaily.com/" },
            { title: "3D Warehouse", description: "Bibliothèque de modèles 3D SketchUp (mobilier, objets)", url: "https://3dwarehouse.sketchup.com/" },
            { title: "Pinterest Architecture", description: "Inspiration visuelle pour palettes de matériaux et ambiances", url: "https://pinterest.com/" }
        ]
    }
];

// ==========================================
// QUIZ DATA — Quiz interactifs par jour
// ==========================================
const QUIZ_DATA = {
    1: {
        title: "Quiz — Jour 1 : Premier contact",
        questions: [
            { q: "Quel raccourci permet de basculer en vue 3D ?", options: ["F2", "F3", "F5", "F7"], answer: 1 },
            { q: "Que fait la Baguette magique (Espace) avec l'outil Dalle ?", options: ["Elle supprime la dalle", "Elle crée une dalle en suivant le contour fermé des murs", "Elle duplique la dalle", "Elle change le matériau"], answer: 1 },
            { q: "Dans ARCHICAD, quand tu traces un mur, que crées-tu réellement ?", options: ["Deux lignes parallèles", "Un élément 3D paramétrique avec épaisseur et hauteur", "Un dessin 2D uniquement", "Un bloc de texte"], answer: 1 },
            { q: "Quel raccourci active l'outil Mur ?", options: ["M", "W", "D", "L"], answer: 1 },
            { q: "Comment déplacer la vue en plan (pan) ?", options: ["Clic droit", "Shift + molette", "Clic molette maintenu", "Double-clic"], answer: 2 }
        ]
    },
    2: {
        title: "Quiz — Jour 2 : Les murs",
        questions: [
            { q: "Où doit se trouver la ligne de référence pour un mur de façade ?", options: ["Au centre", "Côté intérieur", "Côté extérieur", "Peu importe"], answer: 2 },
            { q: "Un mur composite dans ARCHICAD représente :", options: ["Un mur en 2D uniquement", "Un sandwich de couches (structure, isolant, finition)", "Un mur temporaire", "Un mur sans épaisseur"], answer: 1 },
            { q: "Quel raccourci ouvre la boîte de dialogue complète d'un outil ?", options: ["Ctrl+O", "Ctrl+T", "Ctrl+D", "Ctrl+W"], answer: 1 },
            { q: "Qu'est-ce qui détermine quelle couche traverse l'autre aux jonctions ?", options: ["L'épaisseur", "La couleur", "La priorité de jonction", "L'ordre de création"], answer: 2 },
            { q: "Pour une cloison intérieure, la ligne de référence est placée :", options: ["Côté extérieur", "Au centre", "En bas", "Côté gauche"], answer: 1 }
        ]
    },
    3: {
        title: "Quiz — Jour 3 : Structure",
        questions: [
            { q: "Quel est le piège n°1 du débutant avec les dalles ?", options: ["La couleur", "L'épaisseur", "L'altitude de référence", "Le nom du calque"], answer: 2 },
            { q: "Si la Baguette magique ne détecte pas le contour, c'est que :", options: ["Le fichier est corrompu", "Le contour des murs n'est pas fermé", "L'outil est désactivé", "Il manque un calque"], answer: 1 },
            { q: "Un poteau se place par :", options: ["Un rectangle", "Un simple clic (par point)", "Un tracé de polyligne", "Un copier-coller"], answer: 1 },
            { q: "Quel outil utilise le raccourci L ?", options: ["Ligne", "Dalle (slab)", "Luminaire", "Légende"], answer: 1 }
        ]
    },
    4: {
        title: "Quiz — Jour 4 : Menuiseries",
        questions: [
            { q: "Quelle est l'allège standard pour une fenêtre de chambre ?", options: ["0 cm", "60 cm", "90 cm", "130 cm"], answer: 2 },
            { q: "Quelle largeur pour une porte d'entrée standard ?", options: ["60 cm", "70 cm", "80 cm", "90 cm"], answer: 3 },
            { q: "L'allège d'une fenêtre de SDB est généralement de :", options: ["0 cm", "90 cm", "130 cm", "200 cm"], answer: 2 },
            { q: "Quel raccourci active l'outil Fenêtre ?", options: ["F", "W", "D", "Shift+D"], answer: 3 },
            { q: "Une baie vitrée a typiquement une allège de :", options: ["0 cm", "45 cm", "90 cm", "130 cm"], answer: 0 }
        ]
    },
    5: {
        title: "Quiz — Jour 5 : Escaliers & toiture",
        questions: [
            { q: "La formule de Blondel est :", options: ["h + g = 60-65 cm", "2h + g = 60-65 cm", "h × g = 60-65", "2h × g = 65"], answer: 1 },
            { q: "Pour des tuiles, la pente standard est de :", options: ["3-5°", "15-25°", "30-35°", "45-50°"], answer: 2 },
            { q: "La commande pour couper les murs sous le toit s'appelle :", options: ["Couper les murs", "Ajuster à la toiture", "Rogner les éléments", "Fusionner"], answer: 1 },
            { q: "Combien de marches pour une hauteur de 2,80m (hauteur ~17,5cm) ?", options: ["12", "14", "16", "18"], answer: 2 }
        ]
    },
    6: {
        title: "Quiz — Jour 6 : Projet maison RDC",
        questions: [
            { q: "L'ordre professionnel de modélisation est :", options: ["Menuiseries → Murs → Dalles", "Murs ext → Murs porteurs → Cloisons → Menuiseries → Dalles", "Dalles → Murs → Menuiseries", "Toiture → Murs → Dalles"], answer: 1 },
            { q: "À quoi servent les combinaisons de calques ?", options: ["À changer les couleurs", "À passer d'un affichage à un autre en un clic", "À supprimer des éléments", "À exporter en PDF"], answer: 1 },
            { q: "Pour les calques, quel préfixe pour l'architecture ?", options: ["S-", "A-", "M-", "X-"], answer: 1 }
        ]
    },
    7: {
        title: "Quiz — Jour 7 : R+1 & Toiture",
        questions: [
            { q: "Pour copier des murs d'un étage à l'autre, on utilise :", options: ["Copier / Coller simple", "Copier / Coller sur étage courant", "Glisser-déposer", "Dupliquer le fichier"], answer: 1 },
            { q: "Avant de rogner les murs, il est recommandé de :", options: ["Fermer le fichier", "Sauvegarder", "Supprimer les dalles", "Changer de vue"], answer: 1 }
        ]
    },
    8: {
        title: "Quiz — Jour 8 : Terrain & zones",
        questions: [
            { q: "L'outil pour modéliser le terrain est :", options: ["L'outil Dalle", "L'outil Maillage", "L'outil Zone", "L'outil Mur"], answer: 1 },
            { q: "L'outil Zone calcule automatiquement :", options: ["Le volume", "La surface de la pièce", "Le nombre de murs", "L'altitude"], answer: 1 },
            { q: "Si la zone ne se crée pas avec la Baguette magique :", options: ["Il manque un calque", "Le contour de murs n'est pas fermé", "Le projet est trop grand", "L'outil est cassé"], answer: 1 }
        ]
    },
    9: {
        title: "Quiz — Jour 9 : Coupes & élévations",
        questions: [
            { q: "Dans ARCHICAD, les coupes sont :", options: ["Dessinées manuellement", "Générées automatiquement depuis la maquette", "Importées depuis un autre logiciel", "Créées en 3D uniquement"], answer: 1 },
            { q: "Combien de marqueurs d'élévation pour les 4 façades ?", options: ["1", "2", "4", "8"], answer: 2 },
            { q: "Quand on modifie un mur, les coupes :", options: ["Restent inchangées", "Se mettent à jour automatiquement", "Sont supprimées", "Deviennent floues"], answer: 1 }
        ]
    },
    10: {
        title: "Quiz — Jour 10 : Cotations & nomenclatures",
        questions: [
            { q: "Combien de chaînes de cotes extérieures minimum sur un plan pro ?", options: ["1", "2", "3", "5"], answer: 2 },
            { q: "Les nomenclatures ARCHICAD sont bidirectionnelles, cela signifie :", options: ["Elles s'affichent horizontalement et verticalement", "Modifier le tableau modifie le modèle et vice versa", "Elles fonctionnent en 2D et 3D", "On peut les lire de gauche à droite et inversement"], answer: 1 },
            { q: "Quel raccourci pour l'outil Cotation ?", options: ["C", "M", "K", "D"], answer: 1 }
        ]
    },
    11: {
        title: "Quiz — Jour 11 : Mise en page",
        questions: [
            { q: "Le cartouche doit être créé dans :", options: ["Chaque feuille individuellement", "Le gabarit de mise en page", "Le plan d'étage", "Les paramètres du projet"], answer: 1 },
            { q: "Les vues dans la mise en page sont liées au modèle. Si on modifie la maquette :", options: ["Rien ne change", "Les vues se mettent à jour", "Il faut refaire la mise en page", "Le PDF se régénère"], answer: 1 }
        ]
    },
    12: {
        title: "Quiz — Jour 12 : Matériaux",
        questions: [
            { q: "Règle d'or pour la palette de façade :", options: ["Minimum 6 matériaux", "Maximum 3-4 matériaux", "Un seul matériau", "Aucune règle"], answer: 1 },
            { q: "Un matériau dans ARCHICAD a combien de facettes ?", options: ["1 (texture)", "2 (plan + 3D)", "3 (plan, 3D, physique)", "4"], answer: 2 }
        ]
    },
    13: {
        title: "Quiz — Jour 13 : Rendus",
        questions: [
            { q: "Pour un rendu extérieur, la meilleure heure du soleil est :", options: ["12h (midi)", "9h ou 18h (golden hour)", "Minuit", "15h"], answer: 1 },
            { q: "Avant un rendu haute qualité, il faut toujours :", options: ["Exporter en PDF", "Faire un rendu basse qualité pour vérifier", "Supprimer les murs", "Changer de vue"], answer: 1 },
            { q: "La qualité d'un rendu dépend à 80% de :", options: ["Le nombre de polygones", "La lumière", "La résolution", "Le format d'export"], answer: 1 }
        ]
    },
    14: {
        title: "Quiz — Jour 14 : Enscape",
        questions: [
            { q: "Enscape permet de naviguer :", options: ["Uniquement en plan", "En temps réel comme un jeu vidéo (WASD)", "Uniquement en orbite", "Avec des boutons seulement"], answer: 1 },
            { q: "Les panoramas 360° Enscape sont utiles pour :", options: ["L'export DWG", "La communication client (visite immersive)", "Le calcul de structure", "L'impression"], answer: 1 }
        ]
    },
    15: {
        title: "Quiz — Jour 15 : Pipeline rendu",
        questions: [
            { q: "Pour le travail quotidien en agence, quel outil de rendu suffit dans 90% des cas ?", options: ["3ds Max", "Blender", "Enscape", "Cinema 4D"], answer: 2 },
            { q: "Le format d'export vers 3ds Max est :", options: ["DWG", "IFC", "FBX", "PDF"], answer: 2 }
        ]
    },
    16: {
        title: "Quiz — Jour 16 : Interopérabilité",
        questions: [
            { q: "Le format universel BIM est :", options: ["DWG", "SKP", "IFC", "FBX"], answer: 2 },
            { q: "3D Warehouse contient du mobilier au format :", options: [".dwg", ".skp", ".ifc", ".fbx"], answer: 1 }
        ]
    },
    17: {
        title: "Quiz — Jour 17 : Productivité",
        questions: [
            { q: "Un favori dans ARCHICAD sauvegarde :", options: ["Uniquement la couleur", "Tous les paramètres complets d'un élément", "Le nom du calque", "La position"], answer: 1 },
            { q: "Le template (.tpl) est :", options: ["Un rendu", "Un fichier modèle avec tout pré-configuré", "Un format d'export", "Un plugin"], answer: 1 }
        ]
    },
    18: {
        title: "Quiz — Jour 18 : Projet final J1",
        questions: [
            { q: "Pour une double hauteur de séjour, les murs doivent :", options: ["Avoir la hauteur d'un étage", "Traverser les 2 étages (ex: 5,60m)", "Être supprimés au R+1", "Être en cloison"], answer: 1 },
            { q: "Un toit plat nécessite une pente minimale de :", options: ["0% (plat strict)", "1-3% (écoulement des eaux)", "15%", "30%"], answer: 1 }
        ]
    },
    19: {
        title: "Quiz — Jour 19 : Projet final J2",
        questions: [
            { q: "La palette contemporaine classique comprend :", options: ["Brique + enduit rouge", "Béton + bois clair + métal noir", "Pierre + tuile", "Tout en blanc"], answer: 1 }
        ]
    },
    20: {
        title: "Quiz — Jour 20 : Bilan final",
        questions: [
            { q: "Pour continuer à progresser après la formation, il faut :", options: ["Ne plus toucher ARCHICAD", "Pratiquer 3×/semaine minimum", "Attendre la prochaine formation", "Acheter 3ds Max"], answer: 1 },
            { q: "La certification Graphisoft se passe :", options: ["En présentiel uniquement", "En ligne sur le site Graphisoft", "Par courrier", "À l'université"], answer: 1 }
        ]
    }
};

// ==========================================
// BADGES DATA — Gamification
// ==========================================
const BADGES_DATA = [
    { id: "first_building", icon: "🏠", title: "Premier bâtiment", description: "Terminer le Jour 1", condition: function(progress) { return progress[1]; } },
    { id: "wall_master", icon: "🧱", title: "Maître des murs", description: "Terminer le Jour 2", condition: function(progress) { return progress[2]; } },
    { id: "week1", icon: "⭐", title: "Semaine 1 complète", description: "Terminer les 5 premiers jours", condition: function(progress) { return [1,2,3,4,5].every(function(d){return progress[d];}); } },
    { id: "real_house", icon: "🏡", title: "La vraie maison", description: "Terminer la semaine 2", condition: function(progress) { return [6,7,8,9,10].every(function(d){return progress[d];}); } },
    { id: "render_pro", icon: "📸", title: "Rendu pro", description: "Terminer le jour des rendus (J13)", condition: function(progress) { return progress[13]; } },
    { id: "enscape_master", icon: "🎮", title: "Maître Enscape", description: "Terminer le jour Enscape (J14)", condition: function(progress) { return progress[14]; } },
    { id: "week3", icon: "🎨", title: "Livrable pro", description: "Terminer la semaine 3", condition: function(progress) { return [11,12,13,14,15].every(function(d){return progress[d];}); } },
    { id: "quiz_perfect", icon: "🧠", title: "Quiz parfait", description: "Obtenir 100% sur un quiz", condition: function(progress, quizScores) { return Object.values(quizScores || {}).some(function(s) { return s === 100; }); } },
    { id: "quiz_5", icon: "📝", title: "Quizzeur assidu", description: "Compléter 5 quiz", condition: function(progress, quizScores) { return Object.keys(quizScores || {}).length >= 5; } },
    { id: "halfway", icon: "🎯", title: "Mi-parcours", description: "Terminer 10 jours", condition: function(progress) { return Object.keys(progress).filter(function(k){return progress[k];}).length >= 10; } },
    { id: "final_project", icon: "🏗️", title: "Projet final", description: "Terminer les 3 jours du projet final", condition: function(progress) { return [18,19,20].every(function(d){return progress[d];}); } },
    { id: "graduate", icon: "🎓", title: "Diplômé ARCHICAD", description: "Terminer les 20 jours", condition: function(progress) { return Object.keys(progress).filter(function(k){return progress[k];}).length >= 20; } }
];

// Export pour utilisation dans app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FORMATION_DATA, SHORTCUTS_DATA, RESOURCES_DATA, QUIZ_DATA, BADGES_DATA };
}
