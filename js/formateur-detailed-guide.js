// ==========================================
// GUIDE DÉTAILLÉ DU FORMATEUR — 20 jours
// AtelierLO — Formation ARCHICAD
// Approche immersive : on construit dès le jour 1
// ==========================================

const FORMATEUR_GUIDE_DETAILS = {
    // ========== JOUR 1 ==========
    jour1: {
        title: "Premier contact & premier bâtiment",
        approachPhilosophy: "Impact maximum. Zéro cours magistral. L'apprenant voit un projet fini en 3D, puis il construit son propre volume dans les 30 premières minutes. Le déclic vient de l'action, pas de la théorie.",
        moduleExplanations: {
            interface: {
                whatToSay: "Bienvenue dans ARCHICAD. Je ne vais pas te faire un tour de l'interface pendant 2 heures — on va apprendre en construisant. Retiens 3 choses : la boîte à outils à gauche (tes outils de construction), la palette d'infos en haut (les réglages de ton outil actif), et le navigateur qui est ton GPS dans le projet. C'est tout pour le moment.",
                demoSteps: [
                    "Montrer un projet terminé : visite 3D rapide (2 min max) pour donner envie",
                    "Pointer la boîte à outils : 'Chaque icône = un élément de construction (mur, dalle, toit...)'",
                    "Palette d'infos : 'C'est ici que tu règles les paramètres de l'outil que tu utilises'",
                    "Navigateur : 'Plans, coupes, 3D... tout est là. F2 = plan, F3 = 3D'"
                ]
            },
            navigation: {
                whatToSay: "La navigation c'est le geste le plus fréquent dans ARCHICAD. Il faut que ce soit instinctif, comme conduire une voiture. Molette = zoom. Clic molette maintenu = pan. Et le plus important : Shift + molette = orbite en 3D. F2 pour revenir en plan, F3 pour la 3D. On va pratiquer ça jusqu'à ce que tes doigts le fassent sans réfléchir.",
                demoSteps: [
                    "Ouvrir un projet exemple avec du contenu 3D",
                    "Montrer zoom/pan/orbite en direct — le faire de manière fluide",
                    "Faire pratiquer immédiatement pendant 5 minutes",
                    "Vérifier que le réflexe F2/F3 est ancré"
                ]
            },
            philosophieBIM: {
                whatToSay: "Avant de commencer à construire, je vais te dire le truc le plus important de toute la formation : dans ARCHICAD, tu ne DESSINES pas. Tu CONSTRUIS. Quand tu traces un mur, ce n'est pas deux lignes parallèles — c'est un vrai mur avec une épaisseur, une hauteur, des matériaux. Il existe en plan ET en 3D en même temps. Tu es en train de monter une maquette numérique à l'échelle 1:1. Pense toujours 'construction', jamais 'dessin'.",
                demoSteps: [
                    "Tracer un mur et basculer immédiatement en 3D",
                    "Montrer que le mur a une épaisseur, une hauteur — c'est un objet 3D",
                    "Cliquer sur le mur : montrer ses propriétés (matériau, hauteur...)",
                    "Faire le parallèle : 'C'est exactement comme poser une brique sur un chantier, sauf que c'est numérique'"
                ]
            },
            premiersMurs: {
                whatToSay: "C'est parti. On construit. Active l'outil Mur avec la touche W. En haut, dans la palette d'infos, règle l'épaisseur à 20cm et la hauteur à 2,60m. Maintenant, clique quelque part sur le plan, déplace ta souris, et clique une deuxième fois. Tu viens de construire ton premier mur. Appuie sur F3 — regarde, il est là en 3D !",
                demoSteps: [
                    "Touche W → outil Mur actif",
                    "Palette d'infos : montrer épaisseur (20cm) et hauteur (2,60m)",
                    "Tracer le premier mur en plan — lentement, en expliquant",
                    "F3 immédiatement → 'Voilà ton mur en 3D !'",
                    "Revenir en plan (F2), tracer les 3 autres murs",
                    "F3 → 'Tu as un volume !' — moment de fierté"
                ]
            },
            portesEtFenetres: {
                whatToSay: "Maintenant on perce des ouvertures. Outil Porte (D), clique dans un mur. La porte se place et crée l'ouverture toute seule. Outil Fenêtre (Shift+D), pareil : clic dans un mur. Pense à régler l'allège — c'est la distance entre le sol et le bas de la fenêtre. 90cm en standard.",
                demoSteps: [
                    "Touche D → placer une porte de 90cm dans un mur extérieur",
                    "Basculer en 3D : 'L'ouverture s'est créée automatiquement dans le mur'",
                    "Shift+D → placer une fenêtre, montrer l'allège dans les paramètres",
                    "Revenir en plan : montrer la représentation automatique (sens d'ouverture, etc.)"
                ]
            },
            baguetteMagique: {
                whatToSay: "Et maintenant, le tour de magie. Sélectionne l'outil Dalle (L), puis appuie sur la barre Espace — c'est la Baguette magique. Clique à l'intérieur de tes murs. BOUM. La dalle est créée automatiquement en suivant le contour des murs. Un seul clic. C'est la productivité ARCHICAD.",
                demoSteps: [
                    "Outil Dalle (L) → paramètres : épaisseur 20cm",
                    "Appuyer sur Espace pour activer la Baguette magique",
                    "Cliquer à l'intérieur du contour de murs → dalle créée instantanément",
                    "F3 → montrer la dalle en 3D : 'Tu as un plancher maintenant !'"
                ]
            }
        },
        FAQ: [
            { question: "Mes murs ne se connectent pas entre eux", answer: "Zoome au maximum sur l'intersection. Utilise les points d'accrochage (petits symboles oranges). Le curseur doit 'accrocher' l'extrémité du mur existant. Si les murs ne sont pas connectés, la Baguette magique ne fonctionnera pas non plus." },
            { question: "La vue 3D est toute noire / bizarre", answer: "Clique sur le bouton 'Zoom sur tout' (ou Ctrl+0) pour recentrer la vue. Si tes éléments sont très loin de l'origine, ils peuvent sembler invisibles." },
            { question: "Je n'arrive pas à naviguer en 3D", answer: "Shift + clic molette = orbite. Si rien ne se passe, vérifie que tu es bien en vue 3D (F3) et non en plan. La molette seule fait le zoom, le clic molette fait le pan." },
            { question: "La Baguette magique ne fonctionne pas", answer: "Tes murs ne forment probablement pas un contour fermé. Zoome à chaque angle pour vérifier que les murs se touchent réellement. Un seul petit écart de 1mm suffit à empêcher la détection." }
        ],
        transitionToNextDay: "Bravo ! Tu as construit un studio en une journée. Demain on passe aux choses sérieuses : les murs composites, la ligne de référence, et on construit un appartement T3 complet. Tu vas voir, les murs dans ARCHICAD c'est beaucoup plus puissant que ce qu'on a vu aujourd'hui."
    },

    // ========== JOUR 2 ==========
    jour2: {
        title: "Murs : l'art de construire des parois",
        approachPhilosophy: "L'outil Mur représente 60% du travail quotidien en ARCHICAD. Aujourd'hui on en fait le tour complet. La ligne de référence est la clé de voûte — sans elle, les jonctions seront toujours bancales. Les murs composites font le lien avec la construction réelle.",
        moduleExplanations: {
            outilMurApprofondi: {
                whatToSay: "Hier tu as posé tes premiers murs — simple, droit au but. Aujourd'hui on va creuser. L'outil Mur est ton outil principal. Tu vas l'utiliser 1000 fois par projet. Donc il faut le maîtriser parfaitement. Ctrl+T : ça ouvre la boîte de dialogue complète. Là tu as TOUS les paramètres. Épaisseur, hauteur, matériaux, structure composite. C'est là que tu définis si c'est un mur de façade en béton, une cloison placo, ou un mur en pierre de taille.",
                demoSteps: [
                    "Touche W → Ctrl+T pour la boîte de dialogue complète",
                    "Montrer les paramètres essentiels : épaisseur, hauteur, matériaux",
                    "Montrer les 3 méthodes de dessin : droit, trapèze, courbe",
                    "Tracer un mur courbe → F3 : 'Regarde, même les murs courbes sont en 3D'",
                    "Montrer le pet palette pour modifier un mur existant"
                ]
            },
            ligneDeReference: {
                whatToSay: "La ligne de référence, c'est LE concept à comprendre pour des plans propres. Chaque mur a une ligne de référence — c'est la ligne de construction. L'épaisseur du mur se développe d'un côté ou de l'autre de cette ligne. Règle d'or : pour les murs de façade, place la ligne de référence côté extérieur. Pour les cloisons intérieures, au centre. Ça garantit des jonctions propres entre tous tes murs.",
                demoSteps: [
                    "Tracer un mur et montrer la ligne de référence en pointillé",
                    "Changer le côté de développement : montrer l'effet en plan ET en 3D",
                    "Faire un angle de 2 murs avec ligne de réf. extérieure : jonction propre",
                    "Faire le même angle avec ligne de réf. au mauvais endroit : jonction sale",
                    "L'apprenant voit immédiatement la différence → déclic"
                ]
            },
            mursComposites: {
                whatToSay: "En vrai, un mur de façade c'est pas juste 20cm de béton. C'est un sandwich : structure béton ou brique porteuse, puis l'isolant, puis le parement extérieur, puis le placo intérieur. ARCHICAD gère ça avec les murs composites. Tu définis chaque couche avec son épaisseur et son matériau. Et la magie : les jonctions entre les couches se calculent automatiquement. La structure rejoint la structure, l'isolant rejoint l'isolant.",
                demoSteps: [
                    "Ouvrir un mur composite existant dans les paramètres",
                    "Montrer la composition couche par couche",
                    "Modifier une couche : changer l'épaisseur de l'isolant par exemple",
                    "En plan : montrer les hachures différentes par couche",
                    "Jonction de 2 murs composites : montrer la continuité des couches",
                    "Montrer une photo de mur en chantier : 'C'est exactement ça dans ARCHICAD'"
                ]
            },
            intersectionsEtJonctions: {
                whatToSay: "Les intersections de murs, c'est le test de qualité d'un plan. Si les jonctions sont propres, c'est que tu as bien travaillé. Si c'est le bazar avec des traits qui se croisent, c'est que la ligne de référence est mal placée ou que les priorités de jonction ne sont pas bonnes. La règle : la couche porteuse a la priorité la plus forte. Elle passe toujours devant l'isolant et le placo.",
                demoSteps: [
                    "Montrer un T de murs avec bonne priorité → jonction propre",
                    "Montrer le même T avec mauvaise priorité → jonction cassée",
                    "Expliquer les numéros de priorité : plus c'est fort, plus ça traverse",
                    "Montrer la commande de nettoyage des intersections"
                ]
            }
        },
        FAQ: [
            { question: "Mes murs se chevauchent en plan — traits parasites", answer: "C'est un problème de ligne de référence. Vérifie que tous tes murs de façade ont la ligne de réf. du même côté (extérieur). Sélectionne le mur, regarde dans les paramètres, inverse le côté si nécessaire." },
            { question: "Comment créer mon propre mur composite ?", answer: "Ctrl+T → bouton 'Composites' ou va dans Options > Composites du projet. Tu crées un nouveau composite en ajoutant des couches une par une. Donne des noms explicites (Béton 20, Iso 10, Placo 1.3)." },
            { question: "Les couches de mes murs ne se connectent pas correctement", answer: "C'est une question de priorité de jonction. La couche porteuse doit avoir la priorité la plus forte. Va dans les paramètres du composite et ajuste les numéros de priorité." },
            { question: "Comment transformer un mur simple en mur composite ?", answer: "Sélectionne le mur → Ctrl+T → dans la section structure, passe de 'Simple' à 'Composite'. Tu peux alors choisir un composite existant ou en créer un nouveau." }
        ],
        transitionToNextDay: "Tu maîtrises les murs. C'est la base de tout. Demain on passe à la structure : dalles composites, poteaux, poutres. Tu vas donner une ossature solide à ton bâtiment — comme un ingénieur structure."
    },

    // ========== JOUR 3 ==========
    jour3: {
        title: "Structure : dalles, poteaux, poutres",
        approachPhilosophy: "La Baguette magique est le moment 'waouh' de la journée. L'apprenant voit la puissance réelle du logiciel. On construit la structure comme un ingénieur structure penserait le bâtiment — du bas vers le haut.",
        moduleExplanations: {
            dallesApprofondies: {
                whatToSay: "Hier tu as utilisé la Baguette magique pour créer une dalle simple. Aujourd'hui on va beaucoup plus loin. Une dalle, en vrai, c'est pas juste du béton. C'est un plancher complet : carrelage en finition, chape de pose, isolant phonique, dalle béton en structure. Comme les murs composites, ARCHICAD gère les dalles composites avec des couches superposées. Et l'altitude de référence est CRUCIALE — c'est le piège numéro 1 du débutant.",
                demoSteps: [
                    "Outil Dalle (L) → Ctrl+T : montrer tous les paramètres",
                    "Créer une dalle composite : carrelage 1cm + chape 5cm + isolant 5cm + béton 20cm",
                    "Montrer l'altitude de référence : 0.00 pour le RDC",
                    "Baguette magique dans le T3 d'hier : dalle en un clic !",
                    "Vérifier en coupe : montrer que les couches sont là"
                ]
            },
            baguetteMagiqueAvancee: {
                whatToSay: "La Baguette magique, c'est l'outil de productivité d'ARCHICAD. Tu sélectionnes n'importe quel outil (dalle, zone, hachure...), tu appuies sur Espace, et tu cliques dans un contour fermé — l'élément se crée automatiquement en épousant le contour. Ça marche avec les dalles, les zones, les hachures... Si ça ne marche pas, c'est que ton contour n'est pas fermé. Zoome aux angles, tu trouveras le trou.",
                demoSteps: [
                    "Montrer la Baguette magique avec la dalle → un clic = plancher",
                    "Montrer avec l'outil Zone → un clic = zone calculée",
                    "Cas où ça ne marche pas → zoomer sur l'angle problématique → connecter les murs → réessayer"
                ]
            },
            poteauxEtPoutres: {
                whatToSay: "Les poteaux et les poutres, c'est l'ossature du bâtiment. En maison individuelle, tu les utilises quand tu as une grande ouverture (baie vitrée de 4m, garage sans mur porteur) ou une double hauteur. En collectif ou en tertiaire, c'est la trame structurelle complète. Un poteau se place par un simple clic. Une poutre relie deux points. Pense toujours 'descente de charges' — comme un ingénieur.",
                demoSteps: [
                    "Outil Poteau : section 30×30cm, hauteur étage complet",
                    "Placer 4 poteaux aux angles d'une grande ouverture",
                    "Outil Poutre : relier les poteaux, section 30×50cm",
                    "Vérifier en 3D : les poteaux portent les poutres",
                    "Vérifier en coupe : cohérence des altitudes"
                ]
            }
        },
        FAQ: [
            { question: "Ma dalle est au mauvais niveau", answer: "Sélectionne la dalle → paramètres → vérifie l'altitude de référence. 0.00 pour le RDC, +2.80 (ou la hauteur de ton étage) pour le plancher du R+1. L'altitude se règle par rapport à l'étage courant ou par rapport au projet." },
            { question: "La Baguette magique ne détecte pas le contour", answer: "Ton contour de murs n'est pas fermé. Zoome à chaque angle pour vérifier. Même un écart de 0.5mm empêche la détection. Utilise les points d'accrochage pour reconnecter les murs." },
            { question: "Mon poteau traverse la dalle", answer: "Vérifie les altitudes du poteau et de la dalle. Le poteau doit aller de 0.00 à la sous-face de la dalle (par exemple 2.60m). Pas jusqu'au dessus de la dalle." },
            { question: "La poutre ne se connecte pas au poteau", answer: "Utilise les points d'accrochage pour attraper le centre ou l'angle du poteau. La poutre doit démarrer et finir exactement sur un poteau ou un mur porteur." }
        ],
        transitionToNextDay: "La structure est en place. Demain c'est le jour des menuiseries : portes, fenêtres, baies vitrées. C'est le moment où le bâtiment prend vraiment vie — on va percer toutes les ouvertures et faire une visite 3D !"
    },

    // ========== JOUR 4 ==========
    jour4: {
        title: "Portes, fenêtres & menuiseries",
        approachPhilosophy: "Séance gratifiante ! Chaque porte/fenêtre transforme le bâtiment. On fait le lien avec les codes architecturaux : pourquoi ces dimensions, ces allèges, ces sens d'ouverture. L'apprenant pense comme un architecte, pas comme un dessinateur.",
        moduleExplanations: {
            portes: {
                whatToSay: "Les portes dans ARCHICAD, c'est simple et puissant. Tu actives l'outil Porte (D), tu cliques dans un mur, la porte s'insère et l'ouverture se crée automatiquement. Le truc important, c'est de connaître les standards : 90cm pour une porte d'entrée ou PMR, 80cm pour les chambres, 70cm pour la SDB, 60cm pour le WC. Hauteur standard 204cm. Et le sens d'ouverture : la porte s'ouvre toujours contre le mur pour ne pas gêner la circulation dans la pièce.",
                demoSteps: [
                    "Touche D → outil Porte",
                    "Montrer les paramètres : largeur, hauteur, type (battante, coulissante)",
                    "Placer une porte de 90cm dans un mur → montrer l'insertion automatique",
                    "F3 : l'ouverture dans le mur est parfaite en 3D",
                    "Montrer le sens d'ouverture : intérieur/extérieur, gauche/droite",
                    "Astuce : cliquer des deux côtés du mur pendant le placement pour choisir le sens"
                ]
            },
            fenetres: {
                whatToSay: "Outil Fenêtre (Shift+D). Même logique que la porte, mais avec un paramètre en plus : l'allège. L'allège c'est la distance entre le sol et le bas de la fenêtre. Standard 90cm — ça correspond à la hauteur d'un appui de fenêtre confortable. Mais ça change selon les pièces : 130cm pour la SDB (intimité), 0cm pour une baie vitrée toute hauteur. Pense toujours à l'usage de la pièce avant de choisir ton allège.",
                demoSteps: [
                    "Shift+D → outil Fenêtre",
                    "Montrer le paramètre allège dans la palette d'infos",
                    "Placer une fenêtre standard (120×135cm, allège 90cm) → vérifier en 3D",
                    "Placer une baie vitrée (240×215cm, allège 0cm) → effet spectaculaire en 3D",
                    "Placer une fenêtre haute de SDB (60×45cm, allège 130cm)",
                    "Comparer les 3 en 3D : 'Chaque type de fenêtre a son usage architectural'"
                ]
            },
            bibliotheque: {
                whatToSay: "ARCHICAD a une bibliothèque intégrée très riche. Tu y trouves des dizaines de types de portes et fenêtres : battantes, coulissantes, oscillo-battantes, à galandage, vitrées, pleines... Ne perds pas de temps à tout explorer maintenant. Les standards suffisent pour 90% des projets. Tu iras chercher les objets spéciaux quand tu en auras besoin.",
                demoSteps: [
                    "Ouvrir la bibliothèque de portes : montrer les catégories",
                    "Choisir une porte d'entrée avec imposte vitrée",
                    "Choisir une porte coulissante pour la SDB",
                    "Montrer rapidement les types de fenêtres disponibles",
                    "Conseil : 'Reste simple, utilise les standards. Tu personnaliseras plus tard.'"
                ]
            }
        },
        FAQ: [
            { question: "Ma porte est du mauvais côté du mur", answer: "Pendant le placement, tu peux cliquer des deux côtés du mur pour choisir de quel côté la porte s'ouvre. Si elle est déjà placée, sélectionne-la et utilise le pet palette pour l'inverser (miroir)." },
            { question: "L'allège de ma fenêtre n'est pas bonne", answer: "Sélectionne la fenêtre → paramètres → modifie la valeur d'allège. 90cm standard, 130cm SDB, 0cm baie vitrée. La modification est immédiate en 3D." },
            { question: "Comment placer une baie vitrée toute hauteur ?", answer: "C'est une fenêtre avec allège = 0cm et hauteur = hauteur sous plafond (ou légèrement inférieure). Largeur : 180cm minimum pour l'effet 'baie vitrée'. Tu peux aller jusqu'à 300cm ou plus." },
            { question: "Mes fenêtres ne sont pas alignées entre elles", answer: "Utilise le tracker (Tab) pour entrer la distance exacte depuis un point de référence. Ou utilise un guide temporaire (ligne d'aide) pour aligner les axes des fenêtres." }
        ],
        transitionToNextDay: "Le T3 a toutes ses ouvertures ! Demain on finit la semaine 1 en beauté : escalier et toiture. Ton bâtiment sera complet de la dalle au faîtage. Et le rognage des murs sous le toit… tu vas adorer l'effet."
    },

    // ========== JOUR 5 ==========
    jour5: {
        title: "Escaliers, toiture & bilan semaine 1",
        approachPhilosophy: "Fin de semaine 1 = bilan spectaculaire. L'escalier est technique mais le résultat est gratifiant. Le rognage des murs sous le toit est LE moment 'waouh'. L'apprenant termine fier avec un bâtiment complet du sol au faîtage.",
        moduleExplanations: {
            escalier: {
                whatToSay: "L'outil Escalier d'ARCHICAD est un des meilleurs sur le marché. Tu choisis la forme (droit, quart tournant, demi-tournant), tu places tes points de départ et d'arrivée, et ARCHICAD calcule tout : nombre de marches, hauteur de marche, giron, et même la trémie dans la dalle du dessus. La règle d'or c'est la formule de Blondel : 2h + g doit être entre 60 et 65cm. h = hauteur de marche, g = giron (profondeur de marche). Pour une hauteur d'étage de 2,80m : 16 marches de 17,5cm avec un giron de 29cm. Blondel = 2×17,5 + 29 = 64. Parfait.",
                demoSteps: [
                    "Calculer ensemble : h=2800/16=175mm, g=290mm, Blondel=640mm ✓",
                    "Outil Escalier : choisir 'Quart tournant avec palier'",
                    "Entrer les paramètres calculés",
                    "Placer l'escalier dans le plan — 2 clics pour le départ et l'arrivée",
                    "F3 : voir l'escalier en 3D — résultat spectaculaire",
                    "Ajouter le garde-corps de 90cm",
                    "Vérifier en coupe que la trémie est cohérente"
                ]
            },
            toiture: {
                whatToSay: "La toiture, c'est la signature architecturale de la maison. Toit à 2 pans classique, 4 pans bourgeois, toit plat contemporain — chaque forme raconte quelque chose. Dans ARCHICAD, tu construis la toiture pan par pan. Tu dessines la ligne de gouttière, tu donnes la pente, le logiciel construit le pan. Pentes standards : 30-35° pour des tuiles, 15-25° pour de l'ardoise, 3-5° pour un toit-terrasse avec étanchéité. Débord standard : 40 à 80cm selon l'esthétique.",
                demoSteps: [
                    "Outil Toit (R) : montrer les paramètres (pente, débord, épaisseur)",
                    "Créer le premier pan : tracer la ligne de gouttière, pente 30°",
                    "Créer le deuxième pan en face",
                    "Vérifier l'intersection en 3D : la ligne de faîtage apparaît",
                    "Ajuster les débords (60cm) et l'épaisseur (30cm pour tuiles + charpente)"
                ]
            },
            rognageMurs: {
                whatToSay: "Et maintenant, le moment magique. Regarde en 3D : tes murs dépassent au-dessus du toit. C'est logique, ils sont encore à la hauteur d'étage. On va les couper pour qu'ils suivent la pente du toit. Sélectionne les murs concernés, puis Conception > Ajuster à la toiture. BOOM. Les murs épousent la pente du toit. C'est propre, c'est auto, c'est beau.",
                demoSteps: [
                    "Montrer le 'avant' en 3D : murs qui dépassent = pas joli",
                    "Sélectionner les murs sous le toit",
                    "Conception > Ajuster à la toiture (ou raccourci)",
                    "Les murs se coupent instantanément → effet 'waouh'",
                    "Montrer le résultat final en orbite 3D"
                ]
            },
            bilanSemaine1: {
                whatToSay: "Regarde ce que tu as fait en 5 jours. Tu es parti de zéro, tu ne connaissais pas ARCHICAD, et tu as un bâtiment complet devant toi. Murs composites, structure, menuiseries, escalier, toiture. C'est un vrai volume architectural, habitable, constructible. La semaine prochaine, on passe au projet fil rouge : une vraie maison individuelle R+1 de 140m². Tu vas travailler en autonomie comme en agence d'architecture.",
                demoSteps: [
                    "Visite 3D complète du T3 terminé — orbite lente",
                    "Montrer en coupe : du plancher au faîtage, tout est cohérent",
                    "Récapituler les outils maîtrisés : Mur, Dalle, Porte, Fenêtre, Poteau, Poutre, Escalier, Toit",
                    "Teaser semaine 2 : 'Une vraie maison, travail en autonomie, comme en agence'"
                ]
            }
        },
        FAQ: [
            { question: "Mon escalier a un nombre de marches bizarre", answer: "Vérifie la hauteur d'étage dans les paramètres de l'escalier. Elle doit correspondre exactement à la différence d'altitude entre les deux niveaux (ex: 2,80m). ARCHICAD calcule ensuite le nombre de marches optimal." },
            { question: "Les pans de toiture ne se rejoignent pas au faîtage", answer: "Vérifie que les deux pans ont la même pente et que les lignes de gouttière sont à la même altitude. Si les pentes sont différentes, le faîtage ne sera pas au centre." },
            { question: "Le rognage ne fonctionne pas", answer: "Vérifie que : 1) Le toit est bien au-dessus des murs, 2) Les murs sont bien sélectionnés, 3) Tu utilises bien 'Ajuster à la toiture' et pas 'Ajuster au plan' . Le toit doit être un objet toit, pas une dalle inclinée." },
            { question: "La trémie de l'escalier ne se fait pas dans la dalle", answer: "Va dans les paramètres de l'escalier → onglet Structure → vérifie que l'option 'Trémie automatique' est activée. Si ça ne fonctionne toujours pas, tu peux créer la trémie manuellement avec une opération booléenne sur la dalle." }
        ],
        transitionToNextDay: "Semaine 1 terminée. En 5 jours tu as maîtrisé les outils fondamentaux et construit un bâtiment complet. Lundi, on attaque le vrai projet : une maison individuelle R+1 de 140m². Tu travailleras en autonomie comme un architecte en agence. C'est parti pour la semaine 2 !"
    },

    // ========== JOUR 6 ==========
    jour6: {
        title: "Maison individuelle — Gros œuvre RDC",
        approachPhilosophy: "Premier jour du vrai projet. Autonomie maximale. L'apprenant doit travailler comme en agence : plan de référence, réflexion avant action, qualité professionnelle. Le formateur observe, guide, ne fait pas.",
        moduleExplanations: {
            methodologieProjet: {
                whatToSay: "À partir d'aujourd'hui, tu travailles comme en agence d'architecture. Je te donne un programme, un plan de référence, et tu construis. L'ordre de travail professionnel c'est toujours le même : 1) Paramétrage du projet (unités, étages, calques), 2) Murs extérieurs, 3) Murs porteurs intérieurs, 4) Cloisons, 5) Menuiseries, 6) Dalles. À chaque étape, tu vérifies en 3D. C'est cette méthodologie qui fait la différence entre un plan propre et un plan amateur.",
                demoSteps: [
                    "Présenter le plan de la maison (format papier ou écran)",
                    "Montrer le programme : séjour, cuisine, garage, 3 chambres, SDB...",
                    "Paramétrer ensemble : unités en mètres, 2 étages (RDC à 0.00, R+1 à +2.80)",
                    "Créer les calques de base : A-Mur-Ext, A-Mur-Port, A-Cloison, A-Menu, A-Dalle",
                    "Lancer l'apprenant en autonomie"
                ]
            },
            calquesEtOrganisation: {
                whatToSay: "Les calques, c'est l'organisation de ton projet. Pense-les comme des dossiers : tout ce qui est mur extérieur sur un calque, les cloisons sur un autre, les menuiseries sur un autre. L'intérêt ? Les combinaisons de calques. En un clic tu passes d'un plan architectural (tout visible) à un plan structure (que les murs porteurs et les dalles). C'est comme des filtres intelligents sur ta maquette.",
                demoSteps: [
                    "Montrer la gestion des calques (Ctrl+L ou menu Document)",
                    "Créer 5-6 calques pertinents pour le projet",
                    "Montrer une combinaison de calques : tout visible → que la structure",
                    "Montrer qu'en masquant les cloisons, on voit la trame structurelle"
                ]
            },
            travailAutonome: {
                whatToSay: "C'est parti. Tu as ton plan, tu as ta méthode, tu as tes outils. Construis le RDC. Je suis là si tu bloques, mais essaie d'abord de trouver par toi-même. C'est en cherchant que tu apprends. Pense à vérifier en 3D régulièrement — F3 est ton meilleur ami.",
                demoSteps: [
                    "Distribuer le plan de référence",
                    "Laisser travailler en autonomie",
                    "Passer toutes les 15-20 min pour vérifier : jonctions, altitudes, calques",
                    "Ne corriger que si l'apprenant est bloqué depuis plus de 15 minutes",
                    "Faire un point 3D collectif à mi-journée"
                ]
            }
        },
        FAQ: [
            { question: "Comment créer un deuxième étage ?", answer: "Menu Conception > Niveaux d'étage. Crée un nouvel étage avec la bonne altitude (+2.80m par exemple). Double-clique sur l'étage dans le navigateur pour y accéder." },
            { question: "Mes calques sont en désordre", answer: "Pas de panique. Va dans la gestion des calques, renomme-les proprement avec un préfixe logique (A- pour architecture). Range chaque élément sur le bon calque. En sélectionnant un élément, tu peux changer son calque dans les paramètres." },
            { question: "Le plan de référence est flou/petit", answer: "Importe-le avec Fichier > Placer image externe, ou utilise-le comme fond de plan (calque dédié). Redimensionne-le à la bonne échelle en utilisant une cote connue du plan." }
        ],
        transitionToNextDay: "Le RDC est posé ! Demain on monte : R+1, escalier, et toiture. La maison va prendre sa forme définitive. Tu vas utiliser la copie inter-étages — un gain de temps énorme."
    },

    // ========== JOUR 7 ==========
    jour7: {
        title: "Maison — R+1 et toiture",
        approachPhilosophy: "La copie inter-étages est un moment d'efficacité pure. L'apprenant voit que ce qu'il a construit au RDC se réutilise intelligemment. La toiture finalise le volume — la maison est reconnaissable.",
        moduleExplanations: {
            copieInterEtages: {
                whatToSay: "Les murs porteurs du RDC se prolongent au R+1. Plutôt que de les redessiner, on les copie d'un étage à l'autre. Sélectionne tes murs porteurs au RDC, Copie, passe au R+1, Colle sur étage courant. Les murs se placent automatiquement à la bonne altitude, exactement au-dessus de ceux du RDC. C'est de la productivité intelligente.",
                demoSteps: [
                    "Sélectionner les murs porteurs et extérieurs du RDC",
                    "Edition > Copier",
                    "Naviguer vers le R+1 (double-clic dans le navigateur)",
                    "Edition > Coller sur étage courant",
                    "Vérifier en 3D : les murs sont au bon endroit, bonne altitude"
                ]
            },
            distributionR1: {
                whatToSay: "Le R+1 a sa propre distribution : 3 chambres, 1 SDB, un palier d'escalier. Les cloisons du R+1 n'ont rien à voir avec celles du RDC — elles dépendent de l'agencement des pièces de nuit. Pense à l'intimité, à l'orientation (chambres au calme, SDB accessible), à la lumière naturelle.",
                demoSteps: [
                    "Sur le R+1, tracer les cloisons de distribution",
                    "Placer les menuiseries du R+1",
                    "Vérifier en 3D étage par étage"
                ]
            },
            toitureComplete: {
                whatToSay: "On coiffe la maison. Deux pans, pente 35°, débord de 60cm. Comme la semaine dernière sur le T3, mais en plus grand. Après le rognage des murs, la maison a sa silhouette définitive. C'est le moment où tu peux prendre du recul et voir un vrai projet d'architecture.",
                demoSteps: [
                    "Créer les pans de toiture depuis le R+1",
                    "Ajuster la pente (35°) et les débords (60cm)",
                    "Rogner les murs du R+1 sous la toiture",
                    "Visite 3D tournante de la maison complète"
                ]
            }
        },
        FAQ: [
            { question: "Les murs copiés ne sont pas au bon niveau", answer: "Utilise 'Coller sur étage courant' (et pas juste 'Coller'). Vérifie que tu es bien sur l'étage R+1 dans le navigateur avant de coller." },
            { question: "L'escalier ne traverse pas les 2 étages correctement", answer: "Vérifie les altitudes : base de l'escalier = 0.00 (RDC), arrivée = +2.80 (R+1). La trémie doit être dans la dalle du R+1. Vérifie en coupe longitudinale." },
            { question: "Le toit ne couvre pas toute la maison", answer: "Les pans doivent être assez larges pour couvrir l'emprise complète avec les débords. Élargis la ligne de gouttière si nécessaire." }
        ],
        transitionToNextDay: "La maison est construite ! Structure complète du sol au faîtage. Demain on sort du bâtiment : terrain, aménagements extérieurs, et les zones pour calculer les surfaces. C'est ce qui transforme une maquette en dossier de permis de construire."
    },

    // ========== JOUR 8 ==========
    jour8: {
        title: "Terrain, aménagements & zones",
        approachPhilosophy: "On sort du bâtiment pour voir le projet dans son ensemble. Le terrain et les zones sont indispensables pour un dossier de permis de construire. L'outil Zone avec la Baguette magique = productivité instantanée.",
        moduleExplanations: {
            maillage: {
                whatToSay: "Le terrain se modélise avec l'outil Maillage. Tu crées une surface avec des points à différentes altitudes. Chaque point peut avoir sa propre hauteur — c'est comme ça que tu crées une pente, un talus, un terrassement. Pour une maison, un terrain de 25×35m suffit généralement. Le maillage se combine ensuite avec la maison en 3D pour des visualisations réalistes.",
                demoSteps: [
                    "Outil Maillage : créer un rectangle 25×35m",
                    "Modifier les altitudes de certains points pour créer une pente douce",
                    "Positionner la maison sur le terrain",
                    "Vérifier en 3D : la maison est dans son jardin"
                ]
            },
            zones: {
                whatToSay: "L'outil Zone, c'est ce qui transforme ta maquette en document réglementaire. Chaque pièce reçoit une zone : nom, catégorie (habitable, humide, circulations...), et ARCHICAD calcule la surface automatiquement. Baguette magique dans chaque pièce = zone créée en un clic. Nom + surface apparaissent dans le plan. Et c'est bidirectionnel : si tu modifies un mur, la surface de la zone se met à jour toute seule.",
                demoSteps: [
                    "Outil Zone (Z) → paramétrer la catégorie",
                    "Baguette magique dans le séjour : 'Séjour' + surface auto",
                    "Faire toutes les pièces du RDC rapidement",
                    "Passer au R+1",
                    "Montrer le tableau de surfaces auto-généré"
                ]
            }
        },
        FAQ: [
            { question: "La zone ne se crée pas avec la Baguette magique", answer: "Comme pour la dalle : le contour doit être fermé. Un mur non connecté = pas de détection. Zoome aux angles suspects." },
            { question: "Comment calculer la surface de plancher ?", answer: "ARCHICAD peut générer un tableau de surfaces basé sur les catégories de zones. Les zones 'habitables' et 'utiles' contribuent à la surface de plancher (après déduction des murs et surfaces sous 1.80m)." },
            { question: "Le maillage est très lent", answer: "Le maillage est gourmand en ressources. Limite le nombre de points. Pour une maison, un terrain simple avec 4-6 points d'altitude suffit. Pas besoin de modéliser chaque caillou." }
        ],
        transitionToNextDay: "Le projet est dans son contexte : terrain, surfaces calculées. Demain on attaque la documentation BIM : coupes, élévations — générées automatiquement depuis la maquette. C'est là que tu vas comprendre la vraie puissance du BIM."
    },

    // ========== JOUR 9 ==========
    jour9: {
        title: "Coupes, élévations & vues documentaires",
        approachPhilosophy: "C'est LA démonstration de la valeur du BIM. Les vues se génèrent automatiquement. Modifier un mur → toutes les coupes et élévations se mettent à jour. Ça représente des jours de travail économisés sur un vrai projet.",
        moduleExplanations: {
            coupes: {
                whatToSay: "Les coupes dans ARCHICAD sont magiques. Tu places une ligne de coupe sur ton plan, et la coupe se génère automatiquement avec les hachures, les matériaux, les épaisseurs. Tu ne dessines RIEN. La maquette fournit tout. Et le mieux : si tu modifies un mur dans le modèle, la coupe se met à jour toute seule. Fini les heures à redessiner les coupes après chaque modification. C'est ça le BIM.",
                demoSteps: [
                    "Outil Coupe : placer une ligne de coupe longitudinale dans le T3",
                    "Double-cliquer sur le marqueur → la coupe apparaît",
                    "Montrer les hachures auto, les matériaux, les épaisseurs",
                    "Revenir en plan, déplacer un mur de 50cm",
                    "Retourner dans la coupe : 'Regarde, ça s'est mis à jour tout seul'",
                    "Effet garanti — l'apprenant comprend la puissance du BIM"
                ]
            },
            elevations: {
                whatToSay: "Les 4 élévations (façades) se créent en 4 clics. Un marqueur d'élévation par direction — nord, sud, est, ouest. ARCHICAD génère les façades avec les menuiseries, les matériaux, les ombres portées. Même logique que les coupes : tout est dynamique, toujours à jour.",
                demoSteps: [
                    "Placer 4 marqueurs d'élévation autour du bâtiment",
                    "Ouvrir chaque élévation : les 4 façades sont là",
                    "Montrer les menuiseries, les matériaux, les ombres",
                    "Modifier une fenêtre en plan → montrer la MAJ dans l'élévation"
                ]
            },
            profondeurDeVue: {
                whatToSay: "La profondeur de vue, c'est ce qui contrôle ce que tu vois derrière le plan de coupe. Une profondeur courte = juste la coupe pure. Une profondeur longue = la coupe + tout ce qui est derrière en projection. Pour une coupe architecturale standard, tu veux voir ce qui est derrière pour donner de la profondeur au dessin.",
                demoSteps: [
                    "Montrer une coupe avec profondeur courte : juste la section",
                    "Augmenter la profondeur : les éléments derrière apparaissent",
                    "Trouver le bon réglage : informatif sans être surchargé"
                ]
            }
        },
        FAQ: [
            { question: "La coupe n'affiche rien / est vide", answer: "Vérifie que la ligne de coupe passe bien à travers le bâtiment. La flèche indique le sens de regard. Vérifie aussi que les calques ne masquent pas les éléments coupés." },
            { question: "Les hachures ne sont pas bonnes dans la coupe", answer: "Les hachures viennent des matériaux de section des murs/dalles. Va dans les paramètres du mur > section coupée > vérifie le matériau de remplissage." },
            { question: "L'élévation est trop chargée", answer: "Ajuste la profondeur de vue. Une profondeur trop grande montrera des éléments lointains qui surchargent le dessin. Joue aussi avec les combinaisons de calques pour masquer certains éléments." }
        ],
        transitionToNextDay: "Coupes et élévations générées automatiquement — tu comprends maintenant pourquoi le BIM fait gagner des semaines sur un projet. Demain on termine la semaine 2 avec les cotations, étiquettes et nomenclatures. Tes plans vont passer de 'maquette 3D' à 'dossier professionnel'."
    },

    // ========== JOUR 10 ==========
    jour10: {
        title: "Cotations, annotations & nomenclatures",
        approachPhilosophy: "Les cotations et nomenclatures transforment une maquette en document professionnel. La bidirectionnalité des nomenclatures est le moment fort — l'apprenant comprend que la maquette BIM est une base de données architecturale vivante.",
        moduleExplanations: {
            cotation: {
                whatToSay: "Un plan sans cotation, c'est un plan inutile. Personne ne sort son mètre pour mesurer à l'échelle. Les règles professionnelles : 3 chaînes de cotes extérieures minimum — première chaîne : les ouvertures et trumeaux, deuxième : les axes porteurs, troisième : la cote globale. Cotes intérieures dans chaque pièce. ARCHICAD a une cotation architecturale automatique qui place tout ça très vite.",
                demoSteps: [
                    "Outil Cotation (M) : montrer les différents types",
                    "Chaîne de cotes extérieure : cliquer les points, valider",
                    "Cotation auto des ouvertures : sélectionner le mur + lancer la commande",
                    "Cotes intérieures : largeur × longueur de chaque pièce",
                    "Montrer un plan pro en référence : 'Voilà le standard à atteindre'"
                ]
            },
            etiquettes: {
                whatToSay: "Les étiquettes sont des textes intelligents liés aux éléments. Tu places une étiquette sur une fenêtre, elle affiche automatiquement les dimensions (120×135cm). Tu modifies la fenêtre → l'étiquette se met à jour. Pareil pour les zones : l'étiquette affiche le nom et la surface. Plus besoin de retaper les infos à la main.",
                demoSteps: [
                    "Outil Étiquette (K) : placer sur une fenêtre → dimensions auto",
                    "Placer sur une porte → dimensions + type",
                    "Placer sur une zone → nom + surface",
                    "Modifier une fenêtre → montrer la MAJ auto de l'étiquette"
                ]
            },
            nomenclatures: {
                whatToSay: "Les nomenclatures, c'est la cerise sur le gâteau du BIM. ARCHICAD génère des tableaux automatiques : liste de toutes les fenêtres avec leurs dimensions, liste des portes, tableau des surfaces par pièce. Et c'est BIDIRECTIONNEL. Tu cliques sur une ligne du tableau → l'élément correspondant se sélectionne dans le plan. Tu modifies une valeur dans le tableau → l'élément se modifie dans la maquette. Le tableau et la maquette sont un même objet.",
                demoSteps: [
                    "Créer une nomenclature de fenêtres : nom, dimensions, allège, calque",
                    "Montrer le tableau auto-généré",
                    "Cliquer sur une ligne → l'élément se sélectionne (aller-retour)",
                    "Modifier une dimension dans le tableau → vérifier dans le plan",
                    "Créer un tableau de surfaces à partir des zones"
                ]
            }
        },
        FAQ: [
            { question: "Mes cotes sont illisibles / trop petites", answer: "Vérifie l'échelle de la vue. Les cotes s'adaptent à l'échelle : à 1/100 elles ont une taille, à 1/50 une autre. Si elles sont trop petites, augmente la taille de police dans les paramètres de cotation." },
            { question: "L'étiquette n'affiche pas les bonnes infos", answer: "Change le type d'étiquette dans les paramètres. Il existe des étiquettes pour portes, fenêtres, zones, murs... Chaque type affiche des informations différentes." },
            { question: "Comment exporter la nomenclature en Excel ?", answer: "Sélectionne la nomenclature → Fichier > Enregistrer sous → format .xlsx ou .csv. Tu peux aussi copier-coller directement dans Excel." }
        ],
        transitionToNextDay: "Plans cotés, étiquetés, avec nomenclatures. Tu as un dossier professionnel. Semaine 3 : mise en page, matériaux, rendus. On passe du technique à l'esthétique — on va rendre ce projet beau et présentable à un client."
    },

    // ========== JOUR 11 ==========
    jour11: {
        title: "Mise en page & dossier PDF",
        approachPhilosophy: "Le livrable final est ce que le client voit. Un dossier bien mis en page avec un cartouche professionnel fait toute la différence. C'est le passage de 'je sais modéliser' à 'je sais livrer'.",
        moduleExplanations: {
            carnetMiseEnPage: {
                whatToSay: "Le carnet de mise en page, c'est là que tu assembles ton dossier. Pense-le comme InDesign mais intégré à ARCHICAD. Tu crées des feuilles (A3, A1...), tu y places tes vues (plans, coupes, élévations), et tout reste lié au modèle. Si tu modifies la maquette, les vues dans la mise en page se mettent à jour. Plus jamais de plan pas à jour dans un dossier.",
                demoSteps: [
                    "Ouvrir le carnet de mise en page (navigateur > mise en page)",
                    "Créer un gabarit A3 paysage",
                    "Placer le plan RDC à l'échelle 1/100",
                    "Placer une coupe sur la même feuille",
                    "Modifier un mur dans le modèle → montrer la MAJ dans la mise en page"
                ]
            },
            cartouche: {
                whatToSay: "Le cartouche, c'est ta signature professionnelle. Nom du projet, nom de l'architecte, date, échelle, numéro de planche, phase (APS, APD, DCE...). Un cartouche soigné donne immédiatement un aspect pro à ton dossier. On va en créer un avec tes infos.",
                demoSteps: [
                    "Créer un cartouche dans le gabarit : rectangle bas de page",
                    "Ajouter les textes auto (nom projet, date, échelle, numéro)",
                    "Personnaliser avec le nom de l'agence",
                    "Appliquer le gabarit à toutes les feuilles"
                ]
            },
            exportPDF: {
                whatToSay: "La publication PDF, c'est la finalité. Tu configures un jeu de publication : quelles feuilles, dans quel ordre, quel format. Un clic et tout s'exporte en PDF multi-pages. Tu peux avoir un jeu 'Permis de construire', un jeu 'Client', un jeu 'Chantier' — chacun avec les planches pertinentes.",
                demoSteps: [
                    "Créer un jeu de publication 'Dossier complet'",
                    "Ajouter les feuilles dans l'ordre logique",
                    "Publier → PDF multi-pages",
                    "Ouvrir le PDF et vérifier la qualité"
                ]
            }
        },
        FAQ: [
            { question: "Ma vue n'est pas à la bonne échelle dans la mise en page", answer: "Vérifie l'échelle de la vue source dans le navigateur (pas dans la mise en page). La mise en page utilise l'échelle de la vue. Si tu veux du 1/100, la vue source doit être en 1/100." },
            { question: "Le cartouche ne s'affiche pas sur toutes les feuilles", answer: "Le cartouche doit être dans le gabarit, pas sur une feuille individuelle. Crée-le dans le gabarit et applique ce gabarit à toutes les feuilles." },
            { question: "Le PDF est trop lourd", answer: "Dans les options de publication, réduis la résolution des images (150 dpi suffit pour un envoi mail, 300 dpi pour l'impression). Vérifie aussi que tu n'as pas inclus de très grandes images ou textures." }
        ],
        transitionToNextDay: "Le dossier PDF est prêt ! Demain on passe à l'esthétique : matériaux et habillage. On va transformer la maquette grise en projet photoréaliste. C'est le avant/après le plus spectaculaire de la formation."
    },

    // ========== JOUR 12 ==========
    jour12: {
        title: "Matériaux & habillage",
        approachPhilosophy: "Séance créative. On parle palette architecturale, cohérence matériaux, identité du projet. Le avant/après est spectaculaire et motivant. Moins c'est plus en architecture.",
        moduleExplanations: {
            paletteArchitecturale: {
                whatToSay: "En architecture, la palette de matériaux définit l'identité du projet. Règle d'or : maximum 3-4 matériaux en façade. Enduit blanc + bardage bois + menuiseries alu anthracite = contemporain classique. Béton apparent + métal noir + verre = brutalisme élégant. Trop de matériaux = chaos visuel. Moins c'est plus. Regarde les projets publiés sur ArchDaily : les meilleures maisons utilisent 2-3 matériaux maximum.",
                demoSteps: [
                    "Montrer 3-4 exemples de palettes cohérentes (photos de projets réels)",
                    "Choisir une palette pour le projet : enduit + bois + alu anthracite",
                    "Ouvrir les paramètres de matériaux de surface dans ARCHICAD"
                ]
            },
            applicationMateriaux: {
                whatToSay: "Dans ARCHICAD, un matériau a 3 facettes : en plan (hachure), en 3D (texture), et les données physiques (densité, conductivité...). Pour le rendu, c'est la texture 3D qui compte. Tu l'appliques sur les éléments via leurs paramètres. Chaque face d'un mur peut avoir un matériau différent : enduit extérieur, placo intérieur. C'est la réalité constructive.",
                demoSteps: [
                    "Appliquer l'enduit blanc sur les façades principales",
                    "Bardage bois sur un mur accent",
                    "Menuiseries alu anthracite sur toutes les fenêtres",
                    "Intérieurs : parquet chêne + carrelage blanc",
                    "F3 → avant/après spectaculaire"
                ]
            }
        },
        FAQ: [
            { question: "Comment changer le matériau d'une seule face du mur ?", answer: "Dans les paramètres du mur, section 'Surfaces', tu as 3 options : face extérieure, face intérieure, tranche. Tu peux attribuer un matériau différent à chaque face." },
            { question: "Ma texture est trop grande / trop petite en 3D", answer: "Dans les paramètres de la surface, ajuste la taille de la texture (scale). Un parquet a des lames de 10-15cm, un carrelage fait 30×30 ou 60×60... Adapte l'échelle à la réalité." },
            { question: "Où trouver d'autres matériaux ?", answer: "BIMcomponents.com pour des matériaux ARCHICAD natifs. Sinon, tu peux créer tes propres matériaux en important une texture (image JPG ou PNG) et en réglant les paramètres de réflexion." }
        ],
        transitionToNextDay: "Le projet a une identité visuelle. Demain on passe aux rendus photoréalistes ! Éclairage solaire, ambiances jour et nuit. C'est la séance préférée de tous les apprenants."
    },

    // ========== JOUR 13 ==========
    jour13: {
        title: "Rendus photoréalistes",
        approachPhilosophy: "Séance préférée des apprenants ! Parler de lumière comme un photographe d'architecture. Le soleil rasant du matin/soir donne les plus belles ombres. Les rendus de nuit avec éclairage intérieur sont spectaculaires.",
        moduleExplanations: {
            eclairageSolaire: {
                whatToSay: "La qualité d'un rendu architectural dépend à 80% de la lumière. Le soleil d'été à 9h du matin ou 18h donne des ombres longues et dramatiques — c'est ce que cherchent les photographes d'architecture. Le soleil de midi est plat, sans relief. Règle le soleil en fonction de la géolocalisation de ton projet et choisis une heure de 'golden hour' pour tes rendus. C'est ce qui fait la différence entre un rendu amateur et un rendu pro.",
                demoSteps: [
                    "Paramétrer la géolocalisation du projet (France, ville)",
                    "Régler la date : été (ombres moins dures qu'en hiver)",
                    "Régler l'heure : 9h du matin → ombres longues et douces",
                    "Comparer avec midi : plat, sans relief → 'Tu vois la différence ?'"
                ]
            },
            moteurRendu: {
                whatToSay: "ARCHICAD intègre un moteur de rendu (CineRender ou Redshift selon ta version). La règle : commence TOUJOURS par un rendu en basse qualité pour vérifier le cadrage, la lumière, les matériaux. Un rendu basse qualité = 30 secondes. Un rendu haute qualité = 15-30 minutes. Tu ne veux pas attendre 30 minutes pour découvrir que ton cadrage était mauvais.",
                demoSteps: [
                    "Placer la caméra : vue extérieure depuis le jardin, à hauteur d'homme (1.6m)",
                    "Rendu basse qualité : vérifier cadrage, lumière, matériaux",
                    "Ajuster si nécessaire (c'est rapide)",
                    "Lancer le rendu haute qualité",
                    "Pendant l'attente : préparer la vue intérieure"
                ]
            },
            rendusNuit: {
                whatToSay: "Les rendus de nuit sont spectaculaires quand le projet a de grandes baies vitrées. La lumière intérieure qui sort vers l'extérieur crée une ambiance chaleureuse. Il faut placer des luminaires intérieurs : plafonniers, spots, lampes. Ou simplement activer les sources de lumière existantes des objets de la bibliothèque.",
                demoSteps: [
                    "Placer quelques luminaires dans les pièces principales",
                    "Régler l'heure sur 21h → ciel sombre",
                    "Rendu basse qualité pour vérifier l'ambiance",
                    "Ajuster l'intensité des luminaires",
                    "Rendu haute qualité → résultat spectaculaire"
                ]
            }
        },
        FAQ: [
            { question: "Mon rendu est trop sombre / trop clair", answer: "Ajuste l'exposition dans les paramètres de rendu. Ou modifie l'intensité du soleil. Un rendu trop sombre peut aussi venir d'un ciel couvert — vérifie les paramètres du ciel." },
            { question: "Les matériaux sont moches dans le rendu", answer: "Vérifie les paramètres de réflexion et de rugosité des surfaces. Un parquet trop brillant aura l'air plastique. Un mur trop mat sera plat. L'ajustement fin des matériaux fait la différence." },
            { question: "Le rendu met trop de temps", answer: "Réduis la résolution (1920×1080 suffit), ou baisse la qualité (nombre de passes, de rebonds). Pour les tests, utilise toujours la basse qualité." }
        ],
        transitionToNextDay: "Tu as tes premiers rendus ! Demain on passe à Enscape — le rendu temps réel. Tu vas naviguer dans ton projet comme dans un jeu vidéo, en qualité quasi-photoréaliste. C'est l'outil que toutes les agences utilisent au quotidien."
    },

    // ========== JOUR 14 ==========
    jour14: {
        title: "Enscape — Rendu temps réel",
        approachPhilosophy: "Enscape est devenu un standard en agence. La navigation temps réel est impressionnante. Laisser l'apprenant explorer librement — c'est le moment ludique de la formation. Les panoramas 360° sont un argument client redoutable.",
        moduleExplanations: {
            enscapeDecouverte: {
                whatToSay: "Enscape, c'est la révolution du rendu en architecture. Tu cliques sur un bouton et une fenêtre s'ouvre avec ton projet en rendu quasi-photoréaliste. WASD comme dans un jeu vidéo pour te déplacer, souris pour regarder. Tout est en temps réel — tu modifies un mur dans ARCHICAD, il se met à jour dans Enscape instantanément. C'est devenu le standard en agence pour la conception et la communication client.",
                demoSteps: [
                    "Lancer Enscape depuis ARCHICAD (bouton dans la barre d'outils)",
                    "Naviguer autour de la maison : WASD + souris",
                    "Entrer dans le bâtiment, parcourir chaque pièce",
                    "Changer l'heure avec le slider : matin → midi → soir → nuit",
                    "Laisser l'apprenant naviguer librement pendant 10-15 minutes"
                ]
            },
            materiauxEnscape: {
                whatToSay: "Enscape améliore les matériaux avec des réflexions temps réel, des bump maps, et de l'émission lumineuse. Un carrelage brillant reflète vraiment la pièce. Un parquet a du relief. Et tu peux rendre un matériau émissif — il émet de la lumière, comme un écran de TV ou un luminaire. Tout ça se règle dans le panneau matériaux d'Enscape.",
                demoSteps: [
                    "Ouvrir le panneau matériaux Enscape",
                    "Augmenter la réflexion d'un carrelage → effet miroir",
                    "Ajouter un bump map sur le bois → texture tactile",
                    "Rendre un objet émissif → il éclaire son environnement"
                ]
            },
            captures: {
                whatToSay: "Enscape permet de capturer des images HD et des panoramas 360°. Les images HD sont parfaites pour les présentations. Les panoramas 360° sont un argument client énorme : tu envoies un lien, le client visite le projet sur son téléphone en tournant dans tous les sens. Effet garanti.",
                demoSteps: [
                    "Trouver un bon point de vue (composition, lumière)",
                    "Capturer une image HD",
                    "Se placer au centre du séjour",
                    "Capturer un panorama 360°",
                    "Montrer le panorama sur téléphone si possible"
                ]
            }
        },
        FAQ: [
            { question: "Enscape est lent / saccade", answer: "Enscape demande une bonne carte graphique (GPU). Si ça rame, réduis la qualité dans les paramètres Enscape. Ferme les autres applications gourmandes. Un GPU dédié (NVIDIA ou AMD récent) est recommandé." },
            { question: "Les matériaux sont différents entre ARCHICAD et Enscape", answer: "C'est normal, chaque moteur interprète différemment. Utilise le panneau matériaux d'Enscape pour ajuster les paramètres spécifiques (réflexion, rugosité, bump) sans modifier les matériaux ARCHICAD." },
            { question: "Comment partager le panorama 360° ?", answer: "Enscape génère un fichier que tu peux uploader sur un service web (ou sur le cloud Enscape). Tu obtiens un lien à envoyer au client. Il ouvre le lien sur son navigateur ou téléphone pour une visite immersive." }
        ],
        transitionToNextDay: "Enscape, c'est fait. Tu sais produire des visuels en temps réel et des panoramas 360° pour tes clients. Demain, vue d'ensemble du pipeline de rendu : 3ds Max, Twinmotion — pour savoir quand utiliser quoi. Et on boucle la semaine 3."
    },

    // ========== JOUR 15 ==========
    jour15: {
        title: "3ds Max & pipeline de rendu",
        approachPhilosophy: "Vue d'ensemble, pas de formation approfondie. L'objectif : savoir quand utiliser chaque outil. Enscape = quotidien. 3ds Max = exceptionnel (concours, publications). Twinmotion = alternative gratuite. L'apprenant doit pouvoir faire un choix éclairé.",
        moduleExplanations: {
            pipeline: {
                whatToSay: "En architecture, il y a une hiérarchie de rendu. Pour le quotidien (réunions client, études) : Enscape — temps réel, rapide, suffisant dans 90% des cas. Pour les concours ou les publications : 3ds Max avec V-Ray ou Corona — qualité maximale mais temps de production long. Pour les vidéos et le paysage : Twinmotion — beaucoup de végétation et d'ambiance, gratuit avec ta licence ARCHICAD. L'important c'est de savoir QUAND utiliser quoi.",
                demoSteps: [
                    "Montrer un comparatif côte à côte : même vue en Enscape, moteur intégré, et rendu 3ds Max",
                    "Discuter des différences : qualité, temps de production, difficulté",
                    "Conclusion : 'Enscape pour le quotidien, 3ds Max pour l'exceptionnel'"
                ]
            },
            export3dsMax: {
                whatToSay: "Pour envoyer ton modèle vers 3ds Max, tu exportes en FBX. C'est le format le plus propre pour garder les géométries, les matériaux de base, et les calques. L'export se fait en 2 clics depuis ARCHICAD. Après, dans 3ds Max, tu réappliques les matériaux V-Ray (qui sont bien plus riches), tu ajoutes l'éclairage pro, et tu lances le rendu. Je te montre le processus en démo, pas en exercice — c'est un logiciel à part entière.",
                demoSteps: [
                    "Export FBX depuis ARCHICAD : Fichier > Enregistrer sous > FBX",
                    "Ouvrir le FBX dans 3ds Max (démo formateur)",
                    "Montrer l'application rapide de matériaux V-Ray",
                    "Lancer un rendu V-Ray → qualité exceptionnelle",
                    "Comparer avec Enscape : 'La différence est là, mais le temps de production aussi'"
                ]
            },
            twinmotion: {
                whatToSay: "Twinmotion est gratuit avec ta licence ARCHICAD. C'est un excellent outil pour la végétation, les vidéos de promenade, et les présentations avec ambiance (pluie, neige, saisons). L'import depuis ARCHICAD est direct. L'interface est très intuitive — si tu connais Enscape, tu maîtrises Twinmotion en 30 minutes.",
                demoSteps: [
                    "Montrer l'export vers Twinmotion (plug-in direct)",
                    "Ajouter de la végétation : arbres, haies, gazon réaliste",
                    "Changer les saisons : été → automne → hiver",
                    "Comparer : 'Plus de décor que Enscape, mais moins bien intégré'"
                ]
            }
        },
        FAQ: [
            { question: "Faut-il apprendre 3ds Max ?", answer: "Pas forcément. En agence, c'est souvent un infographiste dédié qui fait les rendus 3ds Max. L'architecte prépare le modèle et exporte le FBX. Si tu veux le faire toi-même, c'est une formation à part (plusieurs semaines). Enscape couvre 90% des besoins." },
            { question: "Twinmotion ou Enscape ?", answer: "Enscape pour le travail en direct (temps réel bidirectionnel avec ARCHICAD). Twinmotion pour la végétation et les vidéos d'ambiance. Beaucoup d'agences utilisent les deux." },
            { question: "L'export FBX perd les matériaux ?", answer: "Le FBX conserve les noms des matériaux et les textures de base, mais les paramètres avancés (réflexion, bump...) doivent être recréés dans 3ds Max avec les shaders V-Ray." }
        ],
        transitionToNextDay: "Semaine 3 terminée ! Tu maîtrises la mise en page, les matériaux, le rendu intégré, Enscape et tu connais le pipeline complet. Semaine 4 : interopérabilité, productivité avancée, et le PROJET FINAL. En 3 jours, tu construis une maison contemporaine de A à Z — en autonomie totale."
    },

    // ========== JOUR 16 ==========
    jour16: {
        title: "SketchUp & interopérabilité",
        approachPhilosophy: "Enrichir le projet avec du mobilier 3D et comprendre les échanges de fichiers. Le mobilier transforme un volume vide en espace de vie. L'IFC est incontournable dans le monde BIM professionnel.",
        moduleExplanations: {
            importSketchUp: {
                whatToSay: "3D Warehouse de SketchUp, c'est une bibliothèque infinie de mobilier 3D gratuit. Tu télécharges un canapé, une table, une cuisine — et tu l'importes directement dans ARCHICAD en format .skp. C'est comme ça qu'on meuble un projet rapidement. Un intérieur meublé en Enscape, c'est 10 fois plus impactant qu'un volume vide.",
                demoSteps: [
                    "Ouvrir 3D Warehouse dans le navigateur",
                    "Chercher 'sofa modern' → télécharger en .skp",
                    "Importer dans ARCHICAD : Fichier > Interopérabilité > Fusionner > fichier .skp",
                    "Positionner le canapé dans le séjour",
                    "Vérifier en 3D et dans Enscape"
                ]
            },
            formatIFC: {
                whatToSay: "L'IFC (Industry Foundation Classes), c'est le format universel du BIM. C'est comme le PDF, mais pour les maquettes 3D. Quand tu travailles avec un ingénieur structure (Revit), un bureau d'études fluides, ou pour un marché public — tu échanges en IFC. ARCHICAD exporte et importe l'IFC nativement. C'est devenu obligatoire dans beaucoup de projets.",
                demoSteps: [
                    "Export IFC : Fichier > Enregistrer sous > IFC",
                    "Montrer les options d'export (version IFC, traducteur)",
                    "Ouvrir le fichier IFC dans un viewer gratuit (BIM Vision par exemple)",
                    "Réimporter dans ARCHICAD pour vérifier la fidélité"
                ]
            }
        },
        FAQ: [
            { question: "L'objet SketchUp est énorme / minuscule", answer: "Problème d'unités. Certains modèles SketchUp sont en pouces, d'autres en mètres. Après l'import, sélectionne l'objet et utilise l'outil Redimensionner pour l'ajuster." },
            { question: "L'import SketchUp ralentit ARCHICAD", answer: "Certains modèles 3D Warehouse sont très lourds (millions de polygones). Avant de télécharger, vérifie la taille du fichier. Préfère les modèles 'low poly' quand c'est possible." },
            { question: "L'export IFC perd des informations", answer: "L'IFC est un format d'échange, pas de production. Certains détails spécifiques à ARCHICAD ne se traduisent pas en IFC. Pour un export fidèle, utilise le bon traducteur IFC et vérifie le résultat dans un viewer." }
        ],
        transitionToNextDay: "Le projet est meublé et tu maîtrises les échanges de fichiers. Demain : productivité avancée. Favoris, templates, raccourcis personnalisés — les techniques des pros qui travaillent 2 fois plus vite que les autres."
    },

    // ========== JOUR 17 ==========
    jour17: {
        title: "Favoris, templates & productivité",
        approachPhilosophy: "Investissement à long terme. Ce qu'on crée aujourd'hui servira pendant des années de pratique. Les favoris et le template sont le secret des agences productives. Chronomètre avec/sans = démonstration convaincante.",
        moduleExplanations: {
            favoris: {
                whatToSay: "Un favori, c'est tous les paramètres d'un élément sauvegardés en un clic. Ton mur de façade composite préféré, ta fenêtre standard, ta porte d'entrée — tu les sauves en favoris. La prochaine fois, un double-clic sur le favori et tu traces directement avec les bons paramètres. Plus jamais besoin de re-régler 15 paramètres à chaque fois. C'est LE secret de productivité d'ARCHICAD.",
                demoSteps: [
                    "Sélectionner un mur composite bien paramétré",
                    "Clic droit > Appliquer aux favoris > 'Mur façade composite'",
                    "Tester : activer le favori → tracer un mur → paramètres parfaits",
                    "Créer 10 favoris essentiels : 3 types de murs, 2 dalles, 2 portes, 2 fenêtres, 1 cloison",
                    "Chrono : tracer un mur SANS favori (30 sec) vs AVEC favori (5 sec)"
                ]
            },
            template: {
                whatToSay: "Le template, c'est le fichier de départ de tous tes projets. Tu pré-configures : les calques, les favoris, les composites, le cartouche, les combinaisons de calques, les étages standards, les pen sets. Quand tu crées un nouveau projet, tu ouvres le template et tu es directement opérationnel. Plus de temps perdu à tout reconfigurer. Toutes les agences sérieuses travaillent avec un template.",
                demoSteps: [
                    "Créer un nouveau fichier vide",
                    "Configurer les calques standards (A-Mur-Ext, A-Cloison, etc.)",
                    "Importer les favoris créés",
                    "Créer un cartouche standard",
                    "Paramétrer les étages types (RDC, R+1)",
                    "Enregistrer comme template (.tpl)"
                ]
            },
            raccourcisPerso: {
                whatToSay: "Les raccourcis clavier par défaut d'ARCHICAD sont bons, mais les pros les personnalisent. Les commandes que TU utilises le plus souvent méritent des raccourcis sur-mesure. Va dans Options > Environnement de travail > Raccourcis clavier. Tu peux tout personnaliser. Conseil : mets les commandes fréquentes sur des touches faciles (gauche du clavier, près de WASD).",
                demoSteps: [
                    "Montrer le panneau de personnalisation des raccourcis",
                    "Créer 5 raccourcis personnalisés pour les commandes fréquentes",
                    "Tester en situation réelle",
                    "Sauvegarder le profil d'environnement de travail"
                ]
            }
        },
        FAQ: [
            { question: "Comment partager les favoris avec un collègue ?", answer: "Les favoris s'exportent : Fichier > Bibliothèques et objets > Gestionnaire de favoris > Exporter. Ton collègue les importe dans son projet." },
            { question: "Le template est-il spécifique à une version d'ARCHICAD ?", answer: "Oui, le template (.tpl) est lié à une version. Mais tu peux ouvrir un ancien template dans une version récente — ARCHICAD le convertira (avec quelques avertissements)." },
            { question: "Est-ce que je peux utiliser les favoris d'un autre projet ?", answer: "Oui. Ouvre le projet source, exporte les favoris, puis importe-les dans ton nouveau projet. Ou mieux : mets-les dans ton template !" }
        ],
        transitionToNextDay: "Tu as créé ton environnement de travail pro : favoris, template, raccourcis. À partir de demain, c'est le PROJET FINAL. 3 jours en autonomie totale pour construire une maison contemporaine de A à Z avec tout ce que tu as appris. C'est l'examen final !"
    },

    // ========== JOUR 18 ==========
    jour18: {
        title: "Projet final — Jour 1 : Nouvelle maison",
        approachPhilosophy: "Autonomie totale. Le formateur n'intervient pas spontanément — il attend qu'on lui demande. Brief ambitieux : double hauteur, toit mixte. L'apprenant doit mobiliser tout ce qu'il a appris. C'est le moment de vérité.",
        moduleExplanations: {
            brief: {
                whatToSay: "Voici ton brief. Maison contemporaine R+1 de 160m² habitables. Programme : RDC → entrée, grand séjour double hauteur, cuisine ouverte, bureau, WC, terrasse couverte. R+1 → 4 chambres dont une suite parentale avec SDB, une SDB partagée, palier ouvert sur le séjour (mezzanine). Toiture mixte : toit plat sur la majorité + un pan incliné (zinc ou bac acier) sur un volume. Caractère contemporain affirmé : volumes francs, grandes ouvertures, matériaux nobles. Tu ouvres ton template, tu utilises tes favoris, et tu construis. Je suis là si tu as besoin d'aide, mais aujourd'hui c'est TOI l'architecte.",
                demoSteps: [
                    "Distribuer le brief écrit (pas de plan — l'apprenant conçoit lui-même)",
                    "Montrer 2-3 exemples de maisons contemporaines similaires (inspiration, pas copie)",
                    "Laisser l'apprenant réfléchir 15 minutes à son parti architectural",
                    "L'apprenant démarre — le formateur observe"
                ]
            },
            accompagnement: {
                whatToSay: "Je ne vais pas te guider pas à pas aujourd'hui. Tu sais tout ce qu'il faut. Si tu bloques, réfléchis d'abord, essaie une solution, et si ça ne marche vraiment pas, demande-moi. Je suis là pour les vrais blocages, pas pour les questions dont tu connais la réponse. Fais-toi confiance.",
                demoSteps: [
                    "Passer toutes les 30-40 minutes pour vérifier l'avancement",
                    "Ne corriger que les erreurs structurelles (altitudes, jonctions)",
                    "Encourager les choix personnels : 'Bien pensé !' / 'Intéressant, pourquoi ce choix ?'",
                    "Point 3D à mi-journée pour valider la direction"
                ]
            }
        },
        FAQ: [
            { question: "Comment faire la double hauteur ?", answer: "Le séjour doit traverser 2 étages. Au RDC, dessine les murs du séjour normalement. Au R+1, ne mets PAS de murs ni de dalle au-dessus du séjour. Les murs du séjour auront une hauteur de 2 étages (5.60m par ex). Vérifie en coupe." },
            { question: "Le toit plat, c'est juste une dalle ?", answer: "Oui, mais avec une très légère pente (1-3%) pour l'écoulement des eaux. Tu peux utiliser l'outil Dalle avec une légère inclinaison, ou simplement un toit à pente très faible. Acrotères (rebords) de 30-50cm." },
            { question: "Comment faire la mezzanine ouverte sur le séjour ?", answer: "Au R+1, crée la dalle du palier/mezzanine mais arrête-la au bord du vide sur le séjour. Ajoute un garde-corps de 1m minimum. En coupe, tu verras le séjour traversant et la mezzanine en balcon intérieur." }
        ],
        transitionToNextDay: "Le gros œuvre est posé ! Demain : matériaux, mobilier, documentation et rendus. On habille le projet et on prépare le dossier de présentation. Dernière ligne droite !"
    },

    // ========== JOUR 19 ==========
    jour19: {
        title: "Projet final — Jour 2 : Habillage & docs",
        approachPhilosophy: "Autonomie 95%. L'apprenant doit démontrer son efficacité sur toute la chaîne : matériaux, mobilier, documentation, rendus. Le temps est compté — c'est une simulation de conditions réelles en agence.",
        moduleExplanations: {
            habillageComplet: {
                whatToSay: "Aujourd'hui tu habilles et tu documentes. Palette contemporaine : béton apparent, bois clair (chêne ou pin), métal noir (menuiseries), verre. À l'intérieur : parquet chêne partout sauf zones humides (béton ciré ou grand carrelage). Meubles depuis 3D Warehouse. Et ensuite : coupes, cotations, nomenclatures, rendus Enscape. C'est une journée marathon — priorise bien.",
                demoSteps: [
                    "L'apprenant travaille en autonomie toute la journée",
                    "Matin : matériaux + mobilier",
                    "Après-midi : documentation + rendus",
                    "Point rapide à mi-journée : vérifier l'avancement",
                    "Conseils de composition pour les rendus Enscape"
                ]
            },
            rendusPortfolio: {
                whatToSay: "Tes rendus Enscape doivent être de qualité portfolio. Pense comme un photographe d'architecture : règle des tiers, lignes de fuite, horizon droit. La double hauteur avec la lumière qui rentre par les grandes baies — c'est ta image de couverture. Intérieur nuit avec luminaires chauds — c'est ton ambiance. 3 extérieurs + 2 intérieurs minimum.",
                demoSteps: [
                    "Conseiller sur les points de vue (ne pas choisir à sa place)",
                    "Rappeler la règle des tiers en composition",
                    "Vérifier la qualité des matériaux dans Enscape avant le rendu final"
                ]
            }
        },
        FAQ: [
            { question: "Je n'ai pas le temps de tout faire", answer: "Priorise : 1) Matériaux façade (ça change tout), 2) Rendus Enscape (le résultat visible), 3) Documentation (cotations minimum), 4) Mobilier (si le temps le permet). Mieux vaut 3 rendus magnifiques que 6 rendus bâclés." },
            { question: "Ma double hauteur ne rend pas bien en rendu", answer: "Place la caméra en bas, légèrement décentrée, avec un grand angle. La double hauteur doit être vue depuis le séjour, en contre-plongée légère. L'éclairage naturel zénithal (verrière ?) peut enrichir l'effet." }
        ],
        transitionToNextDay: "Demain c'est le dernier jour. Tu finalises le dossier, tu fais la mise en page, l'export PDF, et tu présentes ton projet comme un architecte devant un client. C'est la dernière ligne droite — donne tout !"
    },

    // ========== JOUR 20 ==========
    jour20: {
        title: "Projet final — Livraison & bilan",
        approachPhilosophy: "Le grand final. Finir avec un dossier dont l'apprenant est FIER. La présentation orale devant le formateur valorise le travail accompli. Le bilan met en perspective : de zéro à dossier professionnel en 20 jours. C'est la preuve que l'apprenant est capable.",
        moduleExplanations: {
            finalisationDossier: {
                whatToSay: "C'est le dernier jour. Ce matin tu finalises tout : dernières corrections dans le modèle, mise à jour des vues (coupes, élévations), derniers rendus Enscape si nécessaire. Cet après-midi : mise en page A3, cartouche, export PDF. Et en fin de journée, tu présentes ton projet. Pas un exposé technique — une présentation d'architecte. Tu expliques tes choix : le parti architectural, la circulation, l'orientation, les matériaux. Le dossier raconte une histoire.",
                demoSteps: [
                    "Matin : corrections finales + rendus",
                    "Début d'après-midi : mise en page + export PDF",
                    "Fin d'après-midi : préparation de la présentation",
                    "Présentation devant le formateur (10-15 minutes)"
                ]
            },
            presentation: {
                whatToSay: "Présente-moi ton projet comme si j'étais ton client. Commence par le contexte (le terrain, l'orientation), puis le parti architectural (pourquoi ces volumes, cette disposition), puis la visite (pièce par pièce), et termine par les ambiances (rendus Enscape). Un architecte ne présente pas une liste de surfaces — il raconte une histoire de vie dans un espace.",
                demoSteps: [
                    "L'apprenant présente pendant 10-15 minutes",
                    "Le formateur pose des questions comme un client",
                    "Feedback constructif et positif",
                    "Valoriser les points forts et les choix personnels"
                ]
            },
            bilan: {
                whatToSay: "Regarde le chemin parcouru. Il y a 20 jours, tu n'avais jamais ouvert ARCHICAD. Aujourd'hui, tu as devant toi un dossier d'architecture complet : plans cotés, coupes, élévations, 3D, nomenclatures, rendus photoréalistes, panorama 360°. Tu sais construire un bâtiment de A à Z dans ARCHICAD. Tu sais produire un dossier professionnel. Tu sais communiquer un projet à un client. C'est exactement ce qu'un architecte fait au quotidien. Maintenant, la clé c'est la pratique. Utilise ARCHICAD 3 fois par semaine minimum pour garder les réflexes. Graphisoft Learn pour approfondir. La certification Graphisoft si tu veux. Et surtout : construis des projets. C'est en construisant qu'on devient architecte.",
                demoSteps: [
                    "Récapituler les compétences acquises (liste visuelle)",
                    "Montrer les ressources pour la suite (Graphisoft Learn, communauté, certification)",
                    "Remettre les fichiers de formation (projets, template, favoris)",
                    "Certificat de fin de formation si applicable",
                    "Note finale : 'De zéro à dossier professionnel en 20 jours — bravo ! 🎉'"
                ]
            }
        },
        FAQ: [
            { question: "Comment continuer à progresser ?", answer: "1) Pratique régulière (3×/semaine minimum). 2) Graphisoft Learn (gratuit). 3) Communauté Graphisoft et ARCHICAD Talk. 4) Certification Graphisoft. 5) Explorer le Teamwork pour le travail collaboratif. 6) BIM Management et IFC avancé pour les gros projets." },
            { question: "Quelles sont les prochaines compétences à développer ?", answer: "En priorité : le Teamwork (travail collaboratif), les profils complexes (moulures, corniches), les formes libres (Morph), les escaliers hélicoïdaux, et l'IFC avancé pour les échanges BIM." },
            { question: "Faut-il passer la certification Graphisoft ?", answer: "C'est un plus sur un CV. La certification valide tes compétences auprès des employeurs. Elle se passe en ligne sur le site Graphisoft. Avec ce que tu as appris en 20 jours, tu as le niveau pour la préparer." }
        ],
        transitionToNextDay: "C'est la fin de la formation ! Tu es prêt. Construis, conçois, crée. ARCHICAD est ton outil, l'architecture est ton métier. 🎉"
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FORMATEUR_GUIDE_DETAILS };
}
