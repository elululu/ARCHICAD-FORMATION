// ==========================================
// FORMATEUR DETAILED GUIDE
// Guide pédagogique détaillé pour le formateur
// AtelierLO — Formation ARCHICAD
// ==========================================

const FORMATEUR_GUIDE_DETAILS = {

    // ==========================================
    // JOUR 1 — Interface & environnement de travail
    // ==========================================
    1: {
        moduleExplanations: [
            {
                moduleTitle: "L'interface ARCHICAD — Décryptage complet",
                icon: "🖥️",
                duration: "~1h30",
                detailedContent: [
                    {
                        subtitle: "La Boîte à outils (Toolbox)",
                        explanation: "La boîte à outils est le panneau vertical situé à gauche de l'écran. Elle contient TOUS les outils de modélisation d'ARCHICAD, organisés par catégorie. Contrairement à AutoCAD où on tape des commandes, ici on sélectionne un outil puis on dessine.",
                        whatToSay: "Montre la boîte à outils et explique : « Chaque icône représente un élément de construction réel : un mur, une dalle, une fenêtre... Ce n'est plus du dessin, c'est de la construction virtuelle. »",
                        demoSteps: [
                            "Ouvrir un projet exemple et montrer la boîte à outils",
                            "Survoler chaque outil en expliquant brièvement à quoi il sert",
                            "Montrer que cliquer sur un outil change le curseur et les options disponibles",
                            "Expliquer la différence entre outils de modélisation (mur, dalle...) et outils d'annotation (texte, cotation...)"
                        ],
                        keyMessage: "Dans ARCHICAD, on ne dessine pas des traits — on construit des éléments réels qui ont des propriétés (matériaux, dimensions, coûts)."
                    },
                    {
                        subtitle: "La Palette d'informations (Info Box)",
                        explanation: "La palette d'informations est la barre horizontale en haut, sous les menus. Elle affiche et permet de modifier les paramètres de l'outil sélectionné AVANT de dessiner. C'est comme régler ses outils avant de travailler.",
                        whatToSay: "« Avant de dessiner un mur, on règle ici son épaisseur, sa hauteur, son matériau. C'est comme préparer son pinceau avant de peindre. »",
                        demoSteps: [
                            "Sélectionner l'outil Mur et montrer les paramètres dans l'Info Box",
                            "Changer l'épaisseur du mur dans l'Info Box et montrer le changement",
                            "Expliquer que chaque outil a ses propres paramètres dans l'Info Box",
                            "Montrer le bouton pour ouvrir la boîte de dialogue complète (double-clic sur l'outil)"
                        ],
                        keyMessage: "L'Info Box est le cockpit de pilotage : elle affiche les réglages essentiels de l'outil actif."
                    },
                    {
                        subtitle: "Le Navigateur (Navigator)",
                        explanation: "Le Navigateur est le panneau qui organise TOUTES les vues du projet : plans d'étages, coupes, élévations, 3D, mises en page. C'est la carte du projet. Il fonctionne comme un explorateur de fichiers mais pour les vues.",
                        whatToSay: "« Le Navigateur, c'est votre GPS dans le projet. Vous y trouvez toutes les vues : les plans de chaque étage, les coupes, les façades, la 3D. Tout est là, organisé. »",
                        demoSteps: [
                            "Ouvrir le panneau Navigateur (F7 ou menu Fenêtre)",
                            "Montrer l'arborescence : Plans d'étage > Coupes > Élévations > 3D",
                            "Double-cliquer sur différentes vues pour naviguer",
                            "Montrer la différence entre le Navigateur et le Mini-navigateur (en bas à gauche)"
                        ],
                        keyMessage: "Toutes les vues (plan, coupe, 3D...) sont des REPRÉSENTATIONS différentes du MÊME modèle. Modifier le modèle met à jour toutes les vues."
                    },
                    {
                        subtitle: "Les Palettes flottantes",
                        explanation: "ARCHICAD utilise des palettes flottantes qu'on peut ancrer ou laisser flotter : Coordonnées (tracker), Options rapides, Favoris, etc. On peut personnaliser leur position et leur visibilité.",
                        whatToSay: "« Comme un atelier de menuisier, tu organises tes outils sur ton établi comme tu veux. Chacun a sa disposition préférée. »",
                        demoSteps: [
                            "Montrer les principales palettes flottantes",
                            "Montrer comment les déplacer, ancrer et masquer",
                            "Recommander une disposition de travail efficace",
                            "Montrer le menu Fenêtre > Palettes pour gérer la visibilité"
                        ],
                        keyMessage: "Un bon agencement des palettes = un travail plus rapide. Prends le temps de configurer ton espace de travail."
                    }
                ]
            },
            {
                moduleTitle: "Navigation 2D et 3D — Se déplacer dans le projet",
                icon: "🧭",
                duration: "~2h",
                detailedContent: [
                    {
                        subtitle: "Navigation en plan (2D)",
                        explanation: "En vue plan, la navigation est similaire à AutoCAD mais avec quelques différences. La molette zoome (comme AutoCAD), le clic molette déplace la vue (pan). L'avantage : pas besoin de commandes, tout est à la souris.",
                        whatToSay: "« Si tu connais AutoCAD, tu retrouves tes habitudes : molette pour zoomer, clic molette pour te déplacer. Mais ARCHICAD va plus loin avec des raccourcis très efficaces. »",
                        demoSteps: [
                            "Montrer le zoom avec la molette (avant/arrière)",
                            "Montrer le pan avec le clic molette",
                            "Montrer Ctrl+0 (Zoom sur tout) — très utile pour se retrouver",
                            "Montrer le zoom sur sélection (Ctrl+Shift+Z)",
                            "Montrer la navigation avec les flèches du clavier"
                        ],
                        keyMessage: "La molette est ton meilleur ami ! Zoom, pan, c'est tout ce dont tu as besoin en 2D."
                    },
                    {
                        subtitle: "Navigation en 3D",
                        explanation: "La vue 3D est l'une des forces majeures d'ARCHICAD par rapport à AutoCAD 2D. On y accède avec F3. La navigation 3D utilise Shift + clic molette pour orbiter autour du modèle, ce qui permet de voir le bâtiment sous tous les angles.",
                        whatToSay: "« C'est LE moment 'waouh' de la formation ! En un clic (F3), tu vois ton bâtiment en 3D. Tu peux tourner autour, zoomer, entrer à l'intérieur. C'est ça la puissance du BIM. »",
                        demoSteps: [
                            "Appuyer sur F3 pour passer en 3D — faire réagir l'apprenante",
                            "Montrer l'orbite : Shift + clic molette",
                            "Montrer le zoom en 3D : molette",
                            "Montrer le pan en 3D : clic molette",
                            "Basculer entre perspective (Shift+F3) et axonométrie (Ctrl+F3)",
                            "Montrer les vues 3D prédéfinies dans le menu Vue",
                            "Revenir en plan avec F2 — montrer la fluidité du basculement"
                        ],
                        keyMessage: "F2 = plan, F3 = 3D. Bascule en permanence entre les deux ! C'est la méthode de travail BIM."
                    },
                    {
                        subtitle: "Les modes d'affichage 3D",
                        explanation: "ARCHICAD propose plusieurs modes d'affichage 3D : filaire (on voit les arêtes), lignes cachées (plus lisible), ombrage (couleurs et ombres). Chaque mode est utile selon ce qu'on fait.",
                        whatToSay: "« Le mode filaire c'est comme un dessin au trait. Le mode ombré, c'est comme une maquette peinte. Tu choisis selon ce que tu veux voir. »",
                        demoSteps: [
                            "Montrer Ctrl+1 (filaire), Ctrl+2 (lignes cachées), Ctrl+3 (ombrage)",
                            "Expliquer quand utiliser chaque mode",
                            "Montrer l'impact sur les performances (filaire = rapide, ombrage = plus lent)"
                        ],
                        keyMessage: "En phase de modélisation, travaille en lignes cachées (rapide et lisible). L'ombrage est pour vérifier le rendu."
                    }
                ]
            },
            {
                moduleTitle: "La logique BIM — Changement de paradigme",
                icon: "🏗️",
                duration: "~1h",
                detailedContent: [
                    {
                        subtitle: "Du dessin 2D à la maquette numérique",
                        explanation: "C'est le concept fondamental à faire passer. Dans AutoCAD, on dessine des LIGNES qui REPRÉSENTENT des murs. Dans ARCHICAD, on PLACE des MURS qui sont des objets 3D avec des propriétés. La différence est fondamentale : un mur AutoCAD est une suite de lignes, un mur ARCHICAD est un objet intelligent.",
                        whatToSay: "« Imagine : dans AutoCAD, tu dessines 4 lignes pour faire un mur en plan. C'est juste un dessin. Dans ARCHICAD, tu places UN mur. Ce mur, il sait qu'il fait 20cm d'épaisseur, 2m60 de haut, qu'il est en béton. Et il se dessine tout seul en plan ET en 3D. »",
                        demoSteps: [
                            "Dessiner un mur avec l'outil Mur",
                            "Cliquer dessus et montrer ses propriétés : épaisseur, hauteur, matériaux",
                            "Montrer que le mur existe en plan ET en 3D simultanément",
                            "Modifier une propriété et montrer que ça change partout",
                            "Comparer avec AutoCAD : 'ici, si tu changes l'épaisseur, tout se met à jour automatiquement'"
                        ],
                        keyMessage: "BIM = Building Information Modeling. Chaque élément est un objet intelligent avec des données. C'est bien plus qu'un dessin."
                    },
                    {
                        subtitle: "Le principe 'un modèle, toutes les vues'",
                        explanation: "Dans la logique BIM, il n'y a qu'UN seul modèle (la maquette 3D). Les plans, coupes, élévations et 3D sont des VUES différentes de ce même modèle. Modifier le modèle met à jour TOUTES les vues automatiquement. Plus de mise à jour manuelle !",
                        whatToSay: "« C'est fini le cauchemar AutoCAD : modifier le plan, puis la coupe, puis la façade... Ici, tu modifies UNE fois, et tout se met à jour. C'est ça le BIM. »",
                        demoSteps: [
                            "Ouvrir un plan en plan (F2), une coupe, et la 3D côte à côte si possible",
                            "Modifier un mur en plan (changer sa position ou son épaisseur)",
                            "Montrer que la coupe et la 3D se mettent à jour automatiquement",
                            "Insister : 'Tu as modifié UNE fois, et les 3 vues se sont mises à jour'"
                        ],
                        keyMessage: "Un modèle unique, des vues multiples. C'est le principe central du BIM."
                    },
                    {
                        subtitle: "Les données intégrées aux éléments",
                        explanation: "Chaque élément BIM porte des informations : dimensions, matériaux, fabricant, coût, phase de construction, etc. Ces données sont utilisables pour les nomenclatures, les métrés et les analyses.",
                        whatToSay: "« Un mur ARCHICAD, c'est comme une fiche technique complète : tu sais ce qu'il y a dedans, combien ça pèse, combien ça coûte. Et tu peux extraire tout ça automatiquement dans des tableaux. »",
                        demoSteps: [
                            "Sélectionner un mur et ouvrir ses propriétés complètes (Ctrl+T)",
                            "Montrer les différents onglets : géométrie, matériaux, classification, IFC",
                            "Montrer un objet (porte ou fenêtre) et ses propriétés encore plus riches",
                            "Faire le lien : 'C'est grâce à ces données qu'on peut faire des nomenclatures automatiques'"
                        ],
                        keyMessage: "Le BIM, ce n'est pas juste de la 3D. C'est de la 3D AVEC des données. C'est l'avenir de la construction."
                    }
                ]
            }
        ],
        faq: [
            {
                question: "C'est très différent d'AutoCAD, est-ce que je vais m'y retrouver ?",
                answer: "Oui ! Les principes de dessin restent les mêmes (coordonnées, accrochages, calques). La grande différence, c'est qu'on dessine des éléments 3D au lieu de lignes 2D. C'est une évolution, pas une révolution. Et la navigation (molette, pan) est identique."
            },
            {
                question: "Est-ce qu'on peut quand même dessiner en 2D dans ARCHICAD ?",
                answer: "Absolument ! ARCHICAD dispose d'outils 2D (ligne, arc, texte, hachure...) qui fonctionnent comme dans AutoCAD. On les utilise pour les annotations, les détails, et les modifications graphiques en plan."
            },
            {
                question: "Pourquoi la 3D est-elle si importante ?",
                answer: "La 3D permet de détecter les erreurs de conception (un mur qui ne monte pas assez haut, un toit qui ne ferme pas...), de communiquer avec les clients (ils comprennent mieux une 3D qu'un plan), et de générer automatiquement les coupes et élévations."
            },
            {
                question: "C'est quoi exactement le BIM ?",
                answer: "BIM = Building Information Modeling (Modélisation des Informations du Bâtiment). C'est une méthode de travail où l'on construit une maquette numérique intelligente du bâtiment. Chaque élément (mur, fenêtre, dalle...) porte des informations (dimensions, matériaux, coûts...). C'est devenu obligatoire pour les marchés publics en France."
            }
        ],
        transitionToNextDay: "Demain, on va utiliser les outils de dessin 2D pour se remettre en confiance avec des gestes familiers (lignes, arcs...). Ça va faire le lien avec tes habitudes AutoCAD avant d'attaquer la vraie modélisation BIM au jour 3."
    },

    // ==========================================
    // JOUR 2 — Outils de dessin 2D
    // ==========================================
    2: {
        moduleExplanations: [
            {
                moduleTitle: "Les outils de dessin 2D — Transition depuis AutoCAD",
                icon: "✏️",
                duration: "~2h",
                detailedContent: [
                    {
                        subtitle: "L'outil Ligne",
                        explanation: "L'outil Ligne (raccourci 1) fonctionne de manière similaire à AutoCAD. On clique un point de départ, puis un point d'arrivée. La différence : ARCHICAD affiche un tracker en temps réel avec les coordonnées, la longueur et l'angle.",
                        whatToSay: "« La ligne dans ARCHICAD, c'est comme dans AutoCAD. Mais regarde le tracker en bas : il t'affiche en temps réel la longueur et l'angle. Tu peux taper directement une valeur pour être précis. »",
                        demoSteps: [
                            "Activer l'outil Ligne (touche 1)",
                            "Tracer une ligne en cliquant deux points",
                            "Montrer le tracker (palette coordonnées) en bas de l'écran",
                            "Tracer une ligne en tapant la longueur dans le tracker (ex: 5m)",
                            "Montrer Tab pour naviguer entre les champs du tracker (longueur, angle)",
                            "Montrer la contrainte d'angle : en tenant le curseur proche d'un angle cardinal (0°, 90°...)"
                        ],
                        keyMessage: "Le tracker + Tab = précision absolue sans effort. C'est plus rapide que taper des coordonnées dans AutoCAD."
                    },
                    {
                        subtitle: "L'outil Polyligne",
                        explanation: "La polyligne (raccourci 2) permet de dessiner une suite de segments connectés, droits ou courbes. On peut mélanger lignes droites et arcs dans la même polyligne. C'est très utile pour les contours complexes.",
                        whatToSay: "« La polyligne, c'est comme la PLINE d'AutoCAD. Tu enchaînes les segments sans lever le crayon. Et tu peux passer de droit à courbe en appuyant sur la barre d'espace pour changer de méthode. »",
                        demoSteps: [
                            "Activer l'outil Polyligne (touche 2)",
                            "Dessiner un contour avec plusieurs segments",
                            "Montrer comment fermer le contour (double-clic ou revenir au point de départ)",
                            "Montrer le changement de méthode de dessin dans l'Info Box (ligne droite, arc...)"
                        ],
                        keyMessage: "La polyligne est l'outil roi pour les contours complexes. Pense à fermer le contour si tu veux l'utiliser pour créer des dalles ou des zones."
                    },
                    {
                        subtitle: "Arc, Cercle et Spline",
                        explanation: "L'outil Arc/Cercle (raccourci 3) permet de tracer des arcs et des cercles. Plusieurs méthodes existent : par centre et rayon, par 3 points, tangent... La Spline permet de tracer des courbes lisses passant par des points.",
                        whatToSay: "« Les arcs sont essentiels en architecture : murs courbes, escaliers hélicoïdaux, baies vitrées cintrées... L'outil Arc d'ARCHICAD est très complet avec plusieurs modes de tracé. »",
                        demoSteps: [
                            "Montrer le cercle par centre et rayon",
                            "Montrer l'arc par 3 points (début, point intermédiaire, fin)",
                            "Montrer l'arc tangent à un segment existant",
                            "Montrer brièvement la Spline pour les formes organiques"
                        ],
                        keyMessage: "Chaque méthode de tracé correspond à une situation architectural différente. Avec la pratique, tu choisiras instinctivement la bonne."
                    }
                ]
            },
            {
                moduleTitle: "Saisie numérique et précision",
                icon: "🔢",
                duration: "~1h",
                detailedContent: [
                    {
                        subtitle: "Le système de coordonnées",
                        explanation: "ARCHICAD utilise un système de coordonnées cartésiennes (X, Y, Z). L'origine (0, 0, 0) est un point fixe dans le projet. On peut saisir des coordonnées absolues (par rapport à l'origine) ou relatives (par rapport au dernier point cliqué).",
                        whatToSay: "« Le système de coordonnées, tu le connais déjà avec AutoCAD. Ici c'est pareil : X horizontal, Y vertical, Z en hauteur. La différence c'est le tracker qui rend la saisie beaucoup plus intuitive. »",
                        demoSteps: [
                            "Montrer l'origine du projet (point 0,0)",
                            "Tracer un point en saisissant des coordonnées absolues (X;Y)",
                            "Montrer la saisie relative avec le tracker",
                            "Expliquer la différence : 'absolu = depuis l'origine, relatif = depuis le dernier point'"
                        ],
                        keyMessage: "Utilise les coordonnées relatives dans le tracker pour 95% de ton travail. C'est plus intuitif que les coordonnées absolues."
                    },
                    {
                        subtitle: "Le Tracker (palette de coordonnées)",
                        explanation: "Le tracker est la palette de saisie numérique en bas de l'écran. Il affiche en temps réel la position du curseur, la longueur, l'angle, etc. La touche Tab permet de naviguer entre les champs. On peut taper une valeur et appuyer sur Entrée pour l'appliquer.",
                        whatToSay: "« Le tracker, c'est ton meilleur outil de précision. Tu dessines à la souris pour la direction, puis tu tapes la longueur exacte. C'est beaucoup plus rapide que de calculer des coordonnées. »",
                        demoSteps: [
                            "Commencer à dessiner une ligne",
                            "Montrer le tracker qui suit le curseur avec les valeurs en temps réel",
                            "Appuyer sur Tab pour aller dans le champ longueur",
                            "Taper '5' puis Entrée pour une ligne de 5m",
                            "Montrer Tab pour passer au champ angle",
                            "Taper '45' pour un angle de 45°"
                        ],
                        keyMessage: "La séquence magique : clic point de départ → direction à la souris → Tab → valeur → Entrée. Tu dessines à la précision du millimètre."
                    }
                ]
            },
            {
                moduleTitle: "Outils d'édition",
                icon: "🔧",
                duration: "~1h30",
                detailedContent: [
                    {
                        subtitle: "Déplacer, Copier, Rotation, Miroir",
                        explanation: "Les outils d'édition permettent de modifier les éléments existants. On sélectionne d'abord l'élément, puis on choisit l'opération. La palette Pet (le petit menu qui apparaît au survol d'un point de l'élément) propose les options contextuelles.",
                        whatToSay: "« C'est comme dans AutoCAD : tu sélectionnes, puis tu modifies. La différence, c'est le Pet Palette — ce petit menu qui apparaît quand tu survoles un point de l'élément. Il te propose les actions possibles en contexte. »",
                        demoSteps: [
                            "Dessiner un rectangle avec l'outil Ligne",
                            "Sélectionner le rectangle (clic dessus avec la flèche)",
                            "Montrer Ctrl+D pour déplacer, avec saisie de la distance",
                            "Montrer Ctrl+Shift+D pour copier à une distance",
                            "Montrer Ctrl+E pour la rotation",
                            "Montrer Ctrl+M pour le miroir",
                            "Montrer Ctrl+Shift+M pour la multiplication (copies multiples)"
                        ],
                        keyMessage: "Le Pet Palette est une exclusivité ARCHICAD. Il adapte les options au contexte : sur un coin → déplacer, sur un segment → étirer, etc."
                    },
                    {
                        subtitle: "Le Pet Palette — Édition contextuelle",
                        explanation: "Le Pet Palette est un mini-menu qui apparaît quand on survole un point caractéristique d'un élément sélectionné (nœud, arête, surface). Il propose des options d'édition contextuelles : déplacer le nœud, étirer le segment, insérer un point, etc.",
                        whatToSay: "« Le Pet Palette, c'est la fonctionnalité que tu vas adorer. Tu survoles un point d'un mur, et il te propose : déplacer ce coin, étirer ce côté, courber ce segment... C'est ultra-intuitif. »",
                        demoSteps: [
                            "Sélectionner un mur",
                            "Survoler un coin : montrer les options (déplacer nœud, angle...)",
                            "Survoler un segment : montrer les options (déplacer/étirer, offset...)",
                            "Montrer comment basculer entre les options avec des clics sur les icônes"
                        ],
                        keyMessage: "Le Pet Palette te fait gagner un temps fou. Plus besoin de chercher dans les menus : l'option dont tu as besoin est proposée directement au bon endroit."
                    }
                ]
            },
            {
                moduleTitle: "Accrochages et calques",
                icon: "📌",
                duration: "~1h",
                detailedContent: [
                    {
                        subtitle: "Points d'accrochage (Snap)",
                        explanation: "Les points d'accrochage permettent de se positionner exactement sur les points caractéristiques des éléments existants : extrémité, milieu, intersection, perpendiculaire, etc. Ils sont essentiels pour un dessin précis sans avoir à saisir de coordonnées.",
                        whatToSay: "« Les snaps, tu les connais d'AutoCAD (OSNAP). Ici ils fonctionnent pareil mais sont activés par défaut et très intuitifs. Regarde les petits symboles qui apparaissent quand tu approches d'un point caractéristique. »",
                        demoSteps: [
                            "Dessiner une ligne et approcher le curseur d'une extrémité → montrer le snap",
                            "Montrer le snap au milieu d'un segment",
                            "Montrer le snap à l'intersection de deux lignes",
                            "Montrer le snap perpendiculaire",
                            "Montrer comment activer/désactiver les types de snap dans Options > Snap"
                        ],
                        keyMessage: "Les snaps garantissent la précision : si tu vois le petit symbole, le point est EXACTEMENT sur le snap. Pas d'approximation."
                    },
                    {
                        subtitle: "Calques (Layers) — Différences avec AutoCAD",
                        explanation: "Les calques ARCHICAD fonctionnent différemment d'AutoCAD. Chaque TYPE d'outil a un calque par défaut (ex: calque 'Murs porteurs' pour les murs porteurs). Les combinaisons de calques permettent d'afficher/masquer des groupes de calques selon le type de vue (plan archi, plan structure, plan technique...).",
                        whatToSay: "« Les calques dans ARCHICAD, c'est un peu différent d'AutoCAD. D'abord, chaque outil a son calque par défaut. Ensuite, au lieu de montrer/cacher les calques un par un, on utilise des COMBINAISONS de calques — comme des presets. »",
                        demoSteps: [
                            "Ouvrir le gestionnaire de calques (Ctrl+L ou menu Documentation > Calques)",
                            "Montrer les calques existants par défaut",
                            "Montrer qu'un outil Mur est automatiquement sur le calque 'Mur'",
                            "Montrer les combinaisons de calques : 'Plan architectural', 'Plan structural'...",
                            "Basculer entre deux combinaisons pour voir l'effet"
                        ],
                        keyMessage: "Les combinaisons de calques sont la clé : elles te permettent de passer instantanément d'un plan archi à un plan structure, sans toucher aux calques un par un."
                    }
                ]
            }
        ],
        faq: [
            {
                question: "Les raccourcis clavier sont très différents d'AutoCAD ?",
                answer: "Certains sont identiques (Ctrl+Z, Ctrl+S, Ctrl+C/V). D'autres changent : pas de commande LINE à taper, on appuie sur la touche 1 pour l'outil Ligne. L'avantage c'est que c'est plus rapide — un seul appui au lieu de taper une commande entière."
            },
            {
                question: "Comment savoir quel calque utiliser pour un élément ?",
                answer: "ARCHICAD attribue automatiquement un calque par défaut à chaque outil. Pour les murs porteurs, le calque 'Mur porteur'. Pour les cloisons, le calque 'Cloison'. En général, tu n'as pas à changer le calque manuellement, sauf si tu veux une organisation personnalisée."
            },
            {
                question: "Je trouve que la saisie numérique est compliquée...",
                answer: "C'est normal au début. Le réflexe à prendre : direction à la souris, puis Tab pour entrer la valeur. Avec la pratique, ça deviendra automatique et beaucoup plus rapide que de calculer des coordonnées. Donne-toi 2-3 jours."
            }
        ],
        transitionToNextDay: "Demain, on attaque le vrai BIM : les MURS ! Tu vas construire tes premiers éléments 3D. Tout ce que tu as appris aujourd'hui (saisie numérique, accrochages) va te servir directement."
    },

    // ==========================================
    // JOUR 3 — Murs
    // ==========================================
    3: {
        moduleExplanations: [
            {
                moduleTitle: "L'outil Mur — Premier élément BIM",
                icon: "🧱",
                duration: "~2h",
                detailedContent: [
                    {
                        subtitle: "Créer un mur — Les bases",
                        explanation: "L'outil Mur (raccourci W) est l'outil central d'ARCHICAD. On dessine le mur en plan comme une ligne, mais il se construit en 3D avec une épaisseur, une hauteur, et des matériaux. C'est le premier vrai élément BIM.",
                        whatToSay: "« Aujourd'hui tu vas construire ton premier mur ! Appuie sur W, clique un point de début, un point de fin, et BAM — un mur 3D apparaît. C'est aussi simple que ça. »",
                        demoSteps: [
                            "Appuyer sur W pour activer l'outil Mur",
                            "Montrer les paramètres dans l'Info Box : épaisseur, hauteur, matériau",
                            "Dessiner un mur simple en cliquant deux points",
                            "Passer en 3D (F3) pour voir le résultat — laisser réagir l'apprenante",
                            "Revenir en plan (F2) et continuer à dessiner des murs",
                            "Montrer la méthode rectangulaire (dessiner un rectangle de murs d'un coup)"
                        ],
                        keyMessage: "Le mur est L'élément fondamental. Tu dessines en plan, tu obtiens un mur 3D complet avec épaisseur, hauteur et matériaux."
                    },
                    {
                        subtitle: "La boîte de dialogue du mur (Ctrl+T)",
                        explanation: "Double-cliquer sur l'outil Mur (ou Ctrl+T) ouvre la boîte de dialogue complète. Elle contient TOUS les paramètres du mur : géométrie (épaisseur, hauteur), position (altitude de base, altitude haute), matériaux (3 surfaces : intérieur, extérieur, coupe), et classification.",
                        whatToSay: "« La boîte de dialogue, c'est la fiche technique complète du mur. Tu y réglées tout : les dimensions, les matériaux, l'altitude, et même les propriétés IFC pour le BIM. Pour l'instant, concentre-toi sur les 3 paramètres essentiels : épaisseur, hauteur, matériaux. »",
                        demoSteps: [
                            "Ouvrir la boîte de dialogue avec Ctrl+T",
                            "Montrer le panneau Géométrie : épaisseur, hauteur",
                            "Montrer le panneau Plan et coupe : représentation en plan",
                            "Montrer le panneau Modèle : matériaux des 3 surfaces",
                            "Modifier l'épaisseur à 20cm et la hauteur à 2.60m",
                            "Dessiner un mur avec ces paramètres et vérifier en 3D"
                        ],
                        keyMessage: "Trois paramètres à régler systématiquement : épaisseur (structure), hauteur (étage), matériaux (rendu). Le reste viendra avec la pratique."
                    },
                    {
                        subtitle: "La ligne de référence",
                        explanation: "Chaque mur a une ligne de référence qui détermine de quel côté s'étend l'épaisseur du mur. Elle peut être au centre, à l'extérieur ou à l'intérieur du mur. C'est CRUCIAL pour les intersections propres. Si la ligne de référence est mal positionnée, les murs ne se connectent pas correctement.",
                        whatToSay: "« La ligne de référence, c'est LE concept le plus important avec les murs. C'est la 'colonne vertébrale' du mur. Quand tu dessines, le mur se construit d'un côté ou de l'autre de cette ligne. En architecture, on positionne généralement la ligne de référence sur le nu extérieur du mur. »",
                        demoSteps: [
                            "Dessiner un mur et montrer sa ligne de référence en plan (trait plus épais)",
                            "Changer la position de la ligne de référence : centre, intérieur, extérieur",
                            "Montrer le résultat en plan — le mur se décale",
                            "Montrer ce qui se passe avec deux murs mal alignés (ligne de réf. incohérente)",
                            "Montrer ce qui se passe avec deux murs bien alignés (ligne de réf. cohérente)",
                            "Expliquer la règle : « Nu extérieur pour les murs extérieurs, centre pour les cloisons »"
                        ],
                        keyMessage: "Règle d'or : toujours la ligne de référence côté extérieur pour les murs de façade. C'est ce qui garantit des jonctions propres."
                    }
                ]
            },
            {
                moduleTitle: "Types de murs et composites",
                icon: "🏠",
                duration: "~1h30",
                detailedContent: [
                    {
                        subtitle: "Murs simples vs murs composites",
                        explanation: "Un mur simple a une seule couche (ex: béton 20cm). Un mur composite est constitué de plusieurs couches (ex: brique 10cm + isolant 10cm + placo 1.3cm). ARCHICAD gère automatiquement les jonctions entre les couches des murs composites.",
                        whatToSay: "« En réalité, un mur de façade n'est jamais une seule couche. C'est un sandwich : la structure (béton ou brique), l'isolation, le parement extérieur, le placo intérieur. ARCHICAD sait gérer tout ça avec les murs composites. »",
                        demoSteps: [
                            "Créer un mur simple de 20cm et le visualiser en coupe",
                            "Créer un mur composite (ouvrir le gestionnaire de composites)",
                            "Montrer la composition : brique + isolation + placo",
                            "Dessiner les deux murs côte à côte et comparer en coupe",
                            "Montrer l'avantage : ARCHICAD calcule l'épaisseur totale et gère les jonctions"
                        ],
                        keyMessage: "Les murs composites sont indispensables pour des projets réalistes. Ils permettent de calculer correctement les surfaces et les quantités de matériaux."
                    },
                    {
                        subtitle: "Intersections et jonctions de murs",
                        explanation: "Quand deux murs se rencontrent, ARCHICAD calcule automatiquement l'intersection (nettoyage des traits en plan, jonction 3D). Si les murs ont la même priorité de jonction, ils fusionnent. Si les priorités diffèrent, ils se croisent de manière réaliste.",
                        whatToSay: "« C'est la magie d'ARCHICAD : quand deux murs se touchent, il comprend que c'est une jonction et il nettoie automatiquement le plan. Plus besoin de dessiner les intersections à la main comme dans AutoCAD ! »",
                        demoSteps: [
                            "Dessiner deux murs qui se croisent en T",
                            "Montrer l'intersection propre en plan (nettoyage automatique)",
                            "Montrer le résultat en 3D",
                            "Montrer un cas problématique : murs qui ne se touchent pas = pas de jonction",
                            "Montrer la solution : prolonger le mur pour qu'il touche l'autre",
                            "Montrer les priorités de jonction dans les propriétés du mur"
                        ],
                        keyMessage: "Pour que les jonctions fonctionnent : les murs doivent se TOUCHER, et les lignes de référence doivent être cohérentes. Si ça ne marche pas, vérifie ces deux points."
                    }
                ]
            },
            {
                moduleTitle: "Édition avancée des murs",
                icon: "✂️",
                duration: "~1h",
                detailedContent: [
                    {
                        subtitle: "Modifier un mur existant",
                        explanation: "Les murs existants peuvent être modifiés de nombreuses façons : étirer (changer la longueur), déplacer un nœud, changer l'épaisseur, la hauteur, diviser un mur en deux, fusionner deux murs adjacents.",
                        whatToSay: "« Pas de panique si un mur n'est pas parfait du premier coup. Tu peux tout modifier après : le rallonger, le déplacer, changer son épaisseur, le diviser... Le Pet Palette est ton meilleur ami pour ça. »",
                        demoSteps: [
                            "Sélectionner un mur et montrer le Pet Palette sur un nœud (déplacer)",
                            "Étirer un mur en déplaçant son extrémité",
                            "Montrer la division d'un mur (clic droit > Diviser)",
                            "Montrer la fusion de deux murs adjacents",
                            "Montrer le changement d'épaisseur d'un mur existant",
                            "Montrer Ctrl+T sur un mur sélectionné pour modifier tous ses paramètres"
                        ],
                        keyMessage: "N'hésite jamais à modifier un mur après coup. L'avantage du BIM, c'est la flexibilité : tout est modifiable à tout moment."
                    }
                ]
            }
        ],
        faq: [
            {
                question: "Mes murs ne se connectent pas correctement, pourquoi ?",
                answer: "3 causes principales : 1) Les murs ne se touchent pas vraiment (zoom pour vérifier). 2) Les lignes de référence sont incohérentes (une au centre, l'autre à l'extérieur). 3) Les murs sont sur des calques différents avec des priorités de jonction différentes. Vérifie ces 3 points dans cet ordre."
            },
            {
                question: "Quelle épaisseur pour les murs ?",
                answer: "Standards courants : Murs porteurs extérieurs = 20cm (béton) ou composite 30-35cm. Cloisons intérieures = 7cm (placo) ou 10cm. Murs porteurs intérieurs = 15-20cm. Murs de refend = 20cm. Ces valeurs sont des bases — à adapter selon le projet réel."
            },
            {
                question: "Comment savoir où mettre la ligne de référence ?",
                answer: "Règle simple : pour les murs extérieurs, mets la ligne de référence sur le NU EXTÉRIEUR (côté dehors). Pour les cloisons intérieures, mets-la au CENTRE. Cette convention facilite les jonctions et le calcul des surfaces."
            }
        ],
        transitionToNextDay: "Tu as maintenant les murs de ton bâtiment ! Demain on ajoute la structure : dalles (planchers), poteaux et poutres. Le bâtiment va devenir un vrai volume 3D."
    },

    // ==========================================
    // JOUR 4 — Dalles, poteaux, poutres
    // ==========================================
    4: {
        moduleExplanations: [
            {
                moduleTitle: "L'outil Dalle — Planchers et plafonds",
                icon: "⬛",
                duration: "~2h",
                detailedContent: [
                    {
                        subtitle: "Créer une dalle",
                        explanation: "La dalle se dessine en plan par son contour. On peut la tracer manuellement (polygone) ou utiliser la Baguette magique pour créer automatiquement une dalle à partir d'un contour fermé de murs. L'altitude de référence détermine la position verticale de la dalle.",
                        whatToSay: "« La dalle, c'est ton plancher et ton plafond. Tu la dessines en plan et elle se construit en 3D. Le plus magique : la Baguette magique (barre espace) qui crée la dalle automatiquement en cliquant à l'intérieur des murs ! »",
                        demoSteps: [
                            "Activer l'outil Dalle (touche L)",
                            "Méthode 1 : Dessiner manuellement un rectangle (comme une polyligne fermée)",
                            "Passer en 3D pour voir la dalle",
                            "Méthode 2 : Baguette magique — cliquer à l'intérieur d'un contour de murs",
                            "Montrer l'effet magique : la dalle épouse le contour des murs !",
                            "Expliquer l'altitude de référence : 0.00 pour le RDC, hauteur d'étage pour le plancher haut"
                        ],
                        keyMessage: "La Baguette magique (barre espace) est un gain de temps considérable. Elle détecte le contour fermé et crée la dalle en un clic."
                    },
                    {
                        subtitle: "Dalles composites et épaisseurs",
                        explanation: "Comme les murs, les dalles peuvent être composites : chape + isolation + structure béton. L'épaisseur totale et la composition influencent les calculs thermiques et structurels. L'Info Box permet de régler l'épaisseur et le type.",
                        whatToSay: "« Un plancher réel n'est pas un simple bloc de béton. C'est un sandwich : chape de finition, isolation phonique, structure béton, faux-plafond en dessous. ARCHICAD gère tout ça comme pour les murs composites. »",
                        demoSteps: [
                            "Ouvrir la boîte de dialogue de la dalle (Ctrl+T)",
                            "Montrer les paramètres : épaisseur, composite, altitude",
                            "Créer une dalle simple de 20cm",
                            "Créer une dalle composite (carrelage + chape + isolation + béton)",
                            "Comparer les deux en coupe"
                        ],
                        keyMessage: "L'altitude de référence est le piège classique ! Plancher RDC = 0.00, plancher R+1 = hauteur d'étage. Toujours vérifier en coupe."
                    },
                    {
                        subtitle: "La Baguette magique — Outil de productivité",
                        explanation: "La Baguette magique (barre espace) est un outil transversal qui fonctionne avec de nombreux outils (dalle, zone, toiture...). Elle détecte les contours fermés et crée l'élément en un clic. C'est l'un des outils les plus productifs d'ARCHICAD.",
                        whatToSay: "« La Baguette magique, c'est comme un sort dans Harry Potter : tu pointes à l'intérieur d'une pièce, et PAF, la dalle se crée toute seule en suivant les murs. Ça marche aussi pour les zones et plein d'autres choses. »",
                        demoSteps: [
                            "Activer l'outil Dalle, maintenir la barre espace (baguette magique)",
                            "Cliquer à l'intérieur d'un espace fermé par des murs",
                            "Montrer que la dalle épouse parfaitement le contour",
                            "Essayer avec un espace plus complexe (mur courbe, angles)",
                            "Montrer un cas où ça ne marche pas : contour non fermé → montrer l'erreur",
                            "Solution : trouver et fermer le trou dans les murs"
                        ],
                        keyMessage: "Si la Baguette magique ne fonctionne pas, c'est que le contour n'est pas fermé. Zoom sur les coins pour trouver le petit espace entre les murs."
                    }
                ]
            },
            {
                moduleTitle: "Poteaux et poutres",
                icon: "🏛️",
                duration: "~1h30",
                detailedContent: [
                    {
                        subtitle: "L'outil Poteau",
                        explanation: "Les poteaux se placent par point (clic simple). Ils peuvent être structurels (porteurs — béton, acier) ou architecturaux (décoratifs — bois, pierre). Leurs paramètres principaux sont la section (rectangulaire, circulaire) et la hauteur.",
                        whatToSay: "« Le poteau, c'est un élément ponctuel : tu cliques, il se place. Simple. Tu choisis sa section (carré, rond), sa hauteur, et son matériau. Il se met en place en 3D automatiquement. »",
                        demoSteps: [
                            "Activer l'outil Poteau",
                            "Montrer les paramètres : section, dimensions, hauteur",
                            "Placer un poteau rectangulaire (30x30cm) à un angle du bâtiment",
                            "Placer un poteau circulaire (diamètre 25cm)",
                            "Passer en 3D pour voir les poteaux",
                            "Montrer le lien poteau-dalle : le poteau dépasse-t-il de la dalle ? Ajuster."
                        ],
                        keyMessage: "Les poteaux sont souvent oubliés par les débutants. Ils sont pourtant essentiels pour la cohérence structurelle du modèle BIM."
                    },
                    {
                        subtitle: "L'outil Poutre",
                        explanation: "Les poutres relient deux points et ont un profil (rectangulaire, IPE, IPN...). Elles se dessinent comme une ligne : clic au point de départ, clic au point d'arrivée. L'altitude et le décalage sont importants pour les positionner correctement.",
                        whatToSay: "« La poutre relie deux poteaux (ou deux murs). Elle a un profil — rectangulaire pour du béton, en I (IPE/IPN) pour de l'acier. Tu la dessines comme une ligne entre deux points. »",
                        demoSteps: [
                            "Activer l'outil Poutre",
                            "Régler le profil : rectangulaire 30x50cm",
                            "Dessiner une poutre entre deux poteaux",
                            "Passer en 3D pour voir le résultat",
                            "Montrer le positionnement vertical : la poutre doit être sous la dalle",
                            "Montrer un profil acier (IPE) pour comparaison"
                        ],
                        keyMessage: "En architecture courante, les poutres sont surtout présentes dans les franchissements (grande portée). Les murs porteurs et les dalles suffisent souvent pour les projets simples."
                    }
                ]
            }
        ],
        faq: [
            {
                question: "Ma dalle est au mauvais niveau, comment la repositionner ?",
                answer: "Sélectionne la dalle, ouvre ses propriétés (Ctrl+T), et modifie l'altitude de référence. Tu peux aussi la sélectionner et taper une nouvelle altitude dans l'Info Box. Vérifie ensuite en coupe que la dalle est bien positionnée."
            },
            {
                question: "La Baguette magique ne crée pas la dalle, pourquoi ?",
                answer: "Le contour n'est probablement pas fermé. Zoom aux intersections des murs pour vérifier qu'il n'y a pas d'espace. Même un micro-espace (0.1mm) empêche la Baguette magique de fonctionner. Astuce : rallonge les murs un peu au-delà du croisement."
            },
            {
                question: "Faut-il mettre des poteaux dans une maison individuelle ?",
                answer: "Pour une maison à murs porteurs, les poteaux ne sont pas toujours nécessaires. Ils le sont si tu as de grandes ouvertures (baie vitrée de 4m+) ou des espaces sans mur porteur. En revanche, pour un bâtiment en structure poteaux-poutres, ils sont indispensables."
            }
        ],
        transitionToNextDay: "Le gros œuvre est presque fini ! Demain, on perce les ouvertures : portes et fenêtres. C'est le moment où le projet commence vraiment à ressembler à un bâtiment habitable."
    },

    // ==========================================
    // JOUR 5 — Portes & fenêtres
    // ==========================================
    5: {
        moduleExplanations: [
            {
                moduleTitle: "L'outil Porte — Ouvrir les espaces",
                icon: "🚪",
                duration: "~2h",
                detailedContent: [
                    {
                        subtitle: "Placer une porte dans un mur",
                        explanation: "Les portes sont des objets paramétriques qui se placent DANS les murs. Quand on place une porte, ARCHICAD crée automatiquement l'ouverture dans le mur. La porte détecte le mur sous le curseur et s'y insère.",
                        whatToSay: "« Tu cliques dans un mur, et hop, la porte se place et perce le mur automatiquement. Plus besoin de dessiner l'ouverture, les traits de la porte, l'arc d'ouverture... ARCHICAD fait tout. »",
                        demoSteps: [
                            "Activer l'outil Porte (touche D)",
                            "Montrer les paramètres dans l'Info Box : largeur, hauteur, type",
                            "Approcher le curseur d'un mur — montrer que la porte 's'accroche' au mur",
                            "Cliquer pour placer la porte",
                            "Montrer le curseur à 4 positions : il définit le côté d'ouverture",
                            "Passer en 3D pour voir la porte percée dans le mur"
                        ],
                        keyMessage: "La porte est liée au mur. Si tu déplaces le mur, la porte suit. Si tu supprimes le mur, la porte disparaît. C'est la logique BIM."
                    },
                    {
                        subtitle: "Paramétrer une porte",
                        explanation: "Chaque porte a de nombreux paramètres : largeur de passage, hauteur, type d'ouverture (battante, coulissante, pivotante), matériau du vantail, type de poignée, seuil, imposte... La boîte de dialogue (Ctrl+T) donne accès à tout.",
                        whatToSay: "« La porte ARCHICAD, c'est une vraie porte : tu choisis sa largeur (60, 70, 80, 90cm), son type (battante, coulissante), le sens d'ouverture, et même le type de poignée. C'est beaucoup plus qu'un trait sur un plan. »",
                        demoSteps: [
                            "Ouvrir la boîte de dialogue d'une porte (Ctrl+T sur la porte sélectionnée)",
                            "Montrer les dimensions : largeur 80cm, hauteur 204cm (standards)",
                            "Changer le type d'ouverture : battante simple, double, coulissante",
                            "Montrer le sens d'ouverture et comment l'inverser",
                            "Montrer l'aperçu en plan et en 3D dans la boîte de dialogue",
                            "Donner les largeurs standards : WC/SDB = 60-70cm, chambres = 80cm, entrée = 90cm, PMR = 90cm min"
                        ],
                        keyMessage: "Dimensions standards à retenir : WC = 60cm, SDB = 70cm, chambres = 80cm, entrée/PMR = 90cm, hauteur standard = 204cm."
                    }
                ]
            },
            {
                moduleTitle: "L'outil Fenêtre — Éclairer les espaces",
                icon: "🪟",
                duration: "~2h",
                detailedContent: [
                    {
                        subtitle: "Placer et paramétrer une fenêtre",
                        explanation: "L'outil Fenêtre (Shift+D) fonctionne comme la porte : on clique dans un mur et la fenêtre se place automatiquement. Le paramètre supplémentaire clé est l'ALLÈGE : la distance entre le sol fini et le bas de la fenêtre.",
                        whatToSay: "« La fenêtre, c'est comme la porte mais avec un paramètre en plus : l'allège. L'allège, c'est la hauteur entre le sol et le bas de la fenêtre. Standard : 90cm pour les pièces de vie, 130cm pour la salle de bain (pour l'intimité), 0cm pour une baie vitrée. »",
                        demoSteps: [
                            "Activer l'outil Fenêtre (Shift+D)",
                            "Régler les paramètres : largeur 120cm, hauteur 135cm, allège 90cm",
                            "Placer la fenêtre dans un mur extérieur",
                            "Montrer le résultat en 3D — la fenêtre est bien à la bonne hauteur",
                            "Changer l'allège à 0cm pour montrer une baie vitrée",
                            "Montrer l'allège à 130cm pour une fenêtre de salle de bain"
                        ],
                        keyMessage: "L'allège est le paramètre le plus oublié ! Toujours vérifier l'allège avant de placer une fenêtre. 90cm = standard, 0cm = baie vitrée, 130cm = SDB."
                    },
                    {
                        subtitle: "La bibliothèque d'objets",
                        explanation: "ARCHICAD dispose d'une bibliothèque riche de portes et fenêtres (et de tous les autres objets). On peut naviguer dans la bibliothèque pour trouver le bon type de porte/fenêtre. BIMcomponents.com propose des objets supplémentaires téléchargeables.",
                        whatToSay: "« La bibliothèque, c'est un catalogue de menuiseries. Tu y trouves des portes battantes, coulissantes, à galandage, des fenêtres à la française, oscillo-battantes, des baies vitrées... Il y en a pour tous les projets. »",
                        demoSteps: [
                            "Ouvrir la boîte de dialogue de la fenêtre",
                            "Naviguer dans la bibliothèque : montrer les différents types",
                            "Montrer une fenêtre à la française",
                            "Montrer une baie coulissante",
                            "Montrer comment chercher par nom dans la bibliothèque",
                            "Évoquer BIMcomponents.com pour les objets spéciaux"
                        ],
                        keyMessage: "La bibliothèque standard couvre 90% des besoins. Pour les cas particuliers, BIMcomponents.com est la référence."
                    }
                ]
            }
        ],
        faq: [
            {
                question: "Comment inverser le sens d'ouverture d'une porte déjà placée ?",
                answer: "Sélectionne la porte, ouvre ses propriétés (Ctrl+T), et cherche l'option 'Miroir' ou 'Inverser'. Tu peux aussi utiliser le Pet Palette : survole la porte sélectionnée et utilise l'option de retournement. Ou plus simple : supprime et replace en cliquant du bon côté."
            },
            {
                question: "Quelles sont les dimensions standards de fenêtres ?",
                answer: "Fenêtres standards : 60x45cm (WC), 90x95cm (petite), 120x135cm (standard chambre), 140x135cm (standard séjour), 180x215cm (porte-fenêtre), 240x215cm+ (baie vitrée coulissante). Allège : 90cm standard, 130cm SDB, 0cm baie vitrée."
            },
            {
                question: "Ma porte est à l'envers (s'ouvre du mauvais côté) ?",
                answer: "Quand tu places une porte, ARCHICAD utilise 4 positions de curseur pour définir le côté d'ouverture. Si la porte est mal orientée, le plus simple est de la supprimer et la replacer en faisant attention au clic : le premier clic définit le côté charnière, le second le sens d'ouverture."
            }
        ],
        transitionToNextDay: "La semaine 1 est terminée ! Tu as un T3 complet avec murs, dalles, portes et fenêtres. La semaine prochaine, on monte d'un niveau : escaliers, toitures, plusieurs étages. Le projet va prendre de l'envergure."
    },

    // ==========================================
    // JOUR 6 — Escaliers & garde-corps
    // ==========================================
    6: {
        moduleExplanations: [
            {
                moduleTitle: "L'outil Escalier — Relier les étages",
                icon: "🪜",
                duration: "~2h30",
                detailedContent: [
                    {
                        subtitle: "Principes de conception d'un escalier",
                        explanation: "Avant de dessiner, il faut comprendre les règles : la formule de Blondel (2h + g = 60 à 65cm), où h est la hauteur de marche et g le giron. Pour un confort optimal : h = 17-18cm et g = 27-28cm. La règle réglementaire impose h ≤ 21cm en ERP.",
                        whatToSay: "« Avant de dessiner un escalier, on fait un peu de math. La formule de Blondel, c'est ce qui fait qu'un escalier est confortable ou pas. 2 fois la hauteur de marche + le giron doit donner entre 60 et 65cm. Un bon escalier : 17cm de hauteur, 28cm de giron. »",
                        demoSteps: [
                            "Écrire la formule au tableau ou à l'écran : 2h + g = 60-65cm",
                            "Calculer ensemble : hauteur d'étage 2.80m → 2800/170 = 16.5 → 16 marches",
                            "Vérifier : h = 2800/16 = 175mm, g = 640 - 2×175 = 290mm → OK !",
                            "Montrer les valeurs idéales et les valeurs limites",
                            "Montrer un escalier confortable vs inconfortable en exemple"
                        ],
                        keyMessage: "Formule de Blondel : 2h + g = 60-65cm. C'est la règle d'or. Un escalier qui ne la respecte pas sera inconfortable ou dangereux."
                    },
                    {
                        subtitle: "Créer un escalier dans ARCHICAD",
                        explanation: "L'outil Escalier d'ARCHICAD est très puissant. On commence par choisir un type (droit, quart tournant, demi-tournant, hélicoïdal), puis on place l'escalier en plan. ARCHICAD calcule automatiquement le nombre de marches en fonction de la hauteur d'étage.",
                        whatToSay: "« L'outil Escalier d'ARCHICAD est un des meilleurs du marché. Tu choisis la forme, tu places les points, et il calcule tout : nombre de marches, hauteur, giron, trémie dans la dalle. C'est bluffant. »",
                        demoSteps: [
                            "Activer l'outil Escalier",
                            "Montrer les formes prédéfinies : droit, quart tournant, demi-tournant",
                            "Choisir un escalier droit pour commencer (plus simple)",
                            "Régler la hauteur connectée (vérifier l'étage de départ et d'arrivée)",
                            "Placer l'escalier en plan : clic début, clic fin",
                            "Passer en 3D pour voir le résultat",
                            "Montrer le réglage individuel des marches dans l'éditeur"
                        ],
                        keyMessage: "L'outil Escalier gère la trémie automatiquement ! Vérifie en 3D et en coupe que le percement dans la dalle est correct."
                    }
                ]
            },
            {
                moduleTitle: "Les garde-corps",
                icon: "🏗️",
                duration: "~1h30",
                detailedContent: [
                    {
                        subtitle: "L'outil Garde-corps",
                        explanation: "L'outil Garde-corps est indépendant de l'escalier. On le dessine comme une polyligne le long de l'escalier, du balcon ou du vide. Il est très paramétrique : type de main courante, barreaux, remplissage (verre, câbles, panneaux).",
                        whatToSay: "« Le garde-corps n'est pas lié à l'escalier : c'est un outil séparé. Tu le dessines le long du parcours que tu veux protéger. L'avantage : tu peux mettre un garde-corps n'importe où, pas seulement sur un escalier. »",
                        demoSteps: [
                            "Activer l'outil Garde-corps",
                            "Montrer les types prédéfinis dans la bibliothèque",
                            "Dessiner un garde-corps le long d'un escalier",
                            "Paramétrer : hauteur 90cm (minimum réglementaire), type de remplissage",
                            "Montrer un garde-corps sur un balcon",
                            "Passer en 3D pour voir le résultat"
                        ],
                        keyMessage: "Réglementation : hauteur minimum 90cm pour un garde-corps, 100cm si la hauteur de chute dépasse 1m. Espacement entre barreaux : 11cm max."
                    }
                ]
            }
        ],
        faq: [
            {
                question: "Combien de marches pour une hauteur de 2.80m ?",
                answer: "16 marches de 17.5cm (2800/16 = 175mm). Giron avec Blondel : 64cm - 2×17.5 = 29cm. C'est un escalier très confortable. Alternative : 17 marches de 16.5cm avec giron de 31cm (plus doux)."
            },
            {
                question: "L'escalier ne 'perce' pas la dalle ?",
                answer: "Vérifie que l'escalier est bien connecté aux bons étages (étage de départ et d'arrivée). Sinon, il faut créer la trémie manuellement : dessiner un trou dans la dalle haute avec le Solid Element Operations ou en soustrayant une forme."
            }
        ],
        transitionToNextDay: "Demain, on couvre le bâtiment avec les toitures ! C'est un sujet technique mais avec un résultat visuel très satisfaisant."
    },

    // ==========================================
    // JOUR 7 — Toitures
    // ==========================================
    7: {
        moduleExplanations: [
            {
                moduleTitle: "Créer des toitures",
                icon: "🏠",
                duration: "~3h",
                detailedContent: [
                    {
                        subtitle: "Le principe des pans de toiture",
                        explanation: "Dans ARCHICAD, une toiture se construit pan par pan. Chaque pan est défini par sa ligne de base (gouttière), sa pente, et son épaisseur. ARCHICAD calcule ensuite les intersections entre les pans (faîtage, arêtier, noue).",
                        whatToSay: "« La toiture dans ARCHICAD, on la construit comme en vrai : pan par pan. Tu dessines la ligne de gouttière, tu donnes la pente, et le pan se construit. Si tu fais plusieurs pans, ARCHICAD calcule les intersections automatiquement. »",
                        demoSteps: [
                            "Activer l'outil Toit (touche R)",
                            "Montrer les paramètres : pente (en degrés), épaisseur, débord",
                            "Dessiner un toit simple à 2 pans : tracer un pan d'un côté, puis l'autre",
                            "Montrer l'intersection automatique : le faîtage se crée",
                            "Passer en 3D pour voir la toiture",
                            "Montrer un toit à 4 pans (croupe) : même principe mais sur les 4 côtés"
                        ],
                        keyMessage: "La pente standard en France : 30-35° pour des tuiles, 15-25° pour de l'ardoise, 3-5° pour une toiture-terrasse. Adapte la pente au matériau de couverture."
                    },
                    {
                        subtitle: "Rogner les murs sous la toiture",
                        explanation: "Après avoir créé la toiture, les murs dépassent au-dessus. Il faut les 'rogner' : l'outil 'Ajuster éléments au toit' (menu Design) coupe automatiquement les murs pour qu'ils épousent la pente du toit.",
                        whatToSay: "« Après avoir posé le toit, tes murs dépassent au-dessus. Pas de panique : la commande 'Ajuster à la toiture' coupe les murs pile à la bonne forme. C'est un effet spectaculaire ! »",
                        demoSteps: [
                            "Montrer les murs qui dépassent au-dessus du toit en 3D",
                            "Sélectionner les murs à ajuster",
                            "Menu Design > Ajuster éléments au toit (ou Connect > Trim Elements to Roof)",
                            "Cliquer sur le toit",
                            "Voir les murs se couper automatiquement — moment 'waouh'",
                            "Montrer le résultat en 3D"
                        ],
                        keyMessage: "Le rognage des murs est une opération à faire APRÈS avoir finalisé la forme du toit. Si tu modifies le toit après, il faudra peut-être refaire le rognage."
                    }
                ]
            }
        ],
        faq: [
            {
                question: "Les pans de toit ne se rejoignent pas au faîtage ?",
                answer: "Vérifie que les deux pans ont la même pente et que leurs lignes de base sont bien alignées. Utilise 'Connecter les toits' dans le menu Design pour forcer l'intersection."
            },
            {
                question: "Quel débord de toit ?",
                answer: "Débord standard : 40-80cm. Plus le débord est grand, plus il protège les murs de la pluie. En architecture contemporaine, on réduit souvent le débord (30-40cm). Pour une maison traditionnelle : 60cm est un bon standard."
            }
        ],
        transitionToNextDay: "Demain, on ajoute un étage ! Le bâtiment va doubler de volume. Tu vas apprendre à gérer les niveaux et à copier des éléments entre les étages."
    },

    // ==========================================
    // JOURS 8-20 — Guides synthétiques
    // ==========================================
    8: {
        moduleExplanations: [
            {
                moduleTitle: "Gestion des étages — Le projet grandit",
                icon: "🏢",
                duration: "~3h",
                detailedContent: [
                    {
                        subtitle: "Créer et gérer les étages",
                        explanation: "La palette Étages (Design > Étages) permet de créer, renommer et gérer les niveaux du projet. Chaque étage a une altitude et une hauteur. Les éléments sont liés à un étage et suivent ses modifications d'altitude.",
                        whatToSay: "« C'est le moment où ton bâtiment prend de la hauteur ! La palette Étages, c'est comme l'ascenseur de ton projet. Tu crées le R+1, tu définis sa hauteur (2.80m), et tu peux commencer à construire dessus. »",
                        demoSteps: [
                            "Ouvrir la palette Étages (menu Design > Étages)",
                            "Montrer les étages existants : sous-sol, RDC, R+1...",
                            "Créer un nouvel étage : définir la hauteur (2.80m)",
                            "Naviguer entre les étages (double-clic dans la palette ou flèches)",
                            "Montrer que le plan change selon l'étage actif"
                        ],
                        keyMessage: "L'étage actif détermine la vue en plan. Les éléments que tu crées sont automatiquement liés à l'étage actif. Vérifie toujours quel étage est actif avant de dessiner !"
                    },
                    {
                        subtitle: "Copie entre étages",
                        explanation: "On peut copier des éléments d'un étage à l'autre. C'est très utile pour les murs porteurs, les poteaux et les dalles qui se répètent. La copie conserve les propriétés et repositionne les éléments à la bonne altitude.",
                        whatToSay: "« Gros gain de temps : tu as dessiné tous tes murs porteurs au RDC ? Tu peux les copier au R+1 en un clic. Sélectionne > Copier > Coller sur étage. ARCHICAD les place automatiquement à la bonne altitude. »",
                        demoSteps: [
                            "Sélectionner les murs porteurs du RDC",
                            "Édition > Copier (Ctrl+C)",
                            "Aller au R+1 (changer d'étage)",
                            "Édition > Coller sur place sur un étage (menu spécial)",
                            "Montrer que les murs sont bien à la bonne altitude",
                            "Vérifier en coupe que tout est aligné"
                        ],
                        keyMessage: "Copie entre étages = gain de temps énorme. Mais attention : modifie ensuite les cloisons du R+1 car la distribution est rarement identique entre les étages."
                    }
                ]
            }
        ],
        faq: [
            {
                question: "Les éléments copiés sont au bon niveau ?",
                answer: "Oui, si tu utilises 'Coller sur place sur l'étage'. Les éléments sont automatiquement repositionnés à l'altitude du nouvel étage. Vérifie toujours en coupe pour être sûr."
            }
        ],
        transitionToNextDay: "Demain, on calcule les surfaces ! Zones, SHAB, surface de plancher... C'est indispensable pour les permis de construire et les métrés."
    },

    9: {
        moduleExplanations: [
            {
                moduleTitle: "Zones et calcul de surfaces",
                icon: "📐",
                duration: "~3h",
                detailedContent: [
                    {
                        subtitle: "L'outil Zone",
                        explanation: "L'outil Zone (touche Z) permet de définir les espaces/pièces. La zone détecte automatiquement les murs autour d'elle et calcule la surface. On peut nommer chaque zone (séjour, chambre 1, cuisine...) et lui attribuer une catégorie.",
                        whatToSay: "« L'outil Zone, c'est ce qui transforme des volumes en pièces identifiées. Tu cliques à l'intérieur d'une pièce fermée, la zone détecte les murs, et elle te donne la surface automatiquement. C'est ARCHICAD qui calcule, plus besoin de faire les métrés à la main ! »",
                        demoSteps: [
                            "Activer l'outil Zone (touche Z)",
                            "Utiliser la Baguette magique à l'intérieur d'une pièce fermée",
                            "Montrer l'étiquette qui apparaît : nom de la pièce + surface",
                            "Personnaliser : nommer la zone (« Séjour »), catégorie (« Habitable »)",
                            "Répéter pour toutes les pièces du RDC",
                            "Montrer le code couleur par catégorie en plan"
                        ],
                        keyMessage: "Zone = pièce identifiée avec un nom, une catégorie et une surface calculée automatiquement. C'est la base de tout calcul de surfaces réglementaires."
                    },
                    {
                        subtitle: "Surfaces réglementaires",
                        explanation: "La surface de plancher (SDP) est la référence depuis 2012 en France. Elle se calcule à partir de la somme des surfaces de plancher de chaque niveau, en déduisant les murs, les trémies, et les hauteurs sous plafond inférieures à 1.80m. ARCHICAD calcule tout ça automatiquement à partir des zones.",
                        whatToSay: "« La surface de plancher, c'est ce qu'on met dans le formulaire CERFA du permis de construire. ARCHICAD la calcule automatiquement à partir des zones. Plus de calculs manuels avec un kutch et une calculatrice ! »",
                        demoSteps: [
                            "Montrer les catégories de zones : habitable, annexe, circulation",
                            "Montrer le calcul automatique de surface dans les propriétés de zone",
                            "Créer un tableau récapitulatif des surfaces (nomenclature de zones)",
                            "Montrer le total par catégorie",
                            "Expliquer : SDP = somme des surfaces closes et couvertes, sous condition de hauteur (1.80m)"
                        ],
                        keyMessage: "Surface de plancher ≠ surface habitable ≠ emprise au sol. Chaque notion a sa définition réglementaire précise. ARCHICAD aide à calculer tout ça mais il faut comprendre les concepts."
                    }
                ]
            }
        ],
        faq: [
            {
                question: "La zone ne se crée pas (pas de détection) ?",
                answer: "Même cause que pour les dalles : le contour de murs n'est pas fermé. Vérifie les coins et les jonctions. Un micro-espace empêche la détection. Alternativement, dessine la zone manuellement (mode polygone au lieu de Baguette magique)."
            }
        ],
        transitionToNextDay: "Demain, c'est le grand projet fil rouge ! Tu vas modéliser une maison individuelle complète en autonomie. C'est le test de tout ce que tu as appris depuis le début."
    },

    10: {
        moduleExplanations: [
            {
                moduleTitle: "Projet fil rouge — Méthodologie",
                icon: "🎯",
                duration: "Toute la journée",
                detailedContent: [
                    {
                        subtitle: "Méthodologie de modélisation",
                        explanation: "L'ordre de modélisation est crucial : 1) Paramétrage projet 2) Murs extérieurs RDC 3) Murs intérieurs 4) Dalle RDC 5) Portes et fenêtres 6) Poteaux si nécessaire. Toujours vérifier en 3D et en coupe après chaque étape.",
                        whatToSay: "« Aujourd'hui tu es en autonomie. Tu construis une maison de A à Z. Je suis là pour t'aider si tu bloques, mais l'objectif c'est que tu trouves tes propres solutions. Suis l'ordre : murs extérieurs → cloisons → dalles → menuiseries. »",
                        demoSteps: [
                            "Distribuer le plan de référence (PDF ou impression)",
                            "Aider au paramétrage initial : unités, grille, calques",
                            "Laisser travailler en autonomie — observer sans intervenir",
                            "Intervenir uniquement sur demande ou si blocage prolongé (> 15 min)",
                            "Faire des points réguliers : vérifier le travail en 3D"
                        ],
                        keyMessage: "L'autonomie est l'objectif ! Ce projet fil rouge valide les acquis des 9 premiers jours. L'apprenante doit pouvoir modéliser sans aide constante."
                    }
                ]
            }
        ],
        faq: [],
        transitionToNextDay: "La semaine prochaine, on passe à la documentation : coupes, élévations, cotations, nomenclatures... Le modèle 3D devient un dossier de plans professionnel."
    },

    11: {
        moduleExplanations: [
            {
                moduleTitle: "Finalisation du projet et terrain",
                icon: "🌳",
                duration: "~7h",
                detailedContent: [
                    {
                        subtitle: "L'outil Maillage (terrain)",
                        explanation: "L'outil Maillage permet de créer un terrain 3D. On définit des points avec des altitudes différentes pour simuler la topographie. Le maillage peut recevoir des matériaux (herbe, gravier) et être modifié en ajoutant/déplaçant des points.",
                        whatToSay: "« Le terrain, c'est ce qui donne du réalisme au projet. On modélise la parcelle avec l'outil Maillage : tu places des points avec des altitudes et ARCHICAD crée le relief entre les points. C'est comme sculpter la terre. »",
                        demoSteps: [
                            "Activer l'outil Maillage",
                            "Dessiner un contour de parcelle rectangulaire (20x30m)",
                            "Modifier l'altitude de certains sommets pour créer une pente",
                            "Placer la maison sur le terrain",
                            "Ajouter un matériau 'herbe' au terrain",
                            "Passer en 3D pour voir le résultat"
                        ],
                        keyMessage: "Le terrain donne du contexte au projet. Il est aussi utile pour calculer les volumes de terrassement (déblai/remblai)."
                    }
                ]
            }
        ],
        faq: [],
        transitionToNextDay: "Demain, on génère les coupes et élévations ! Tu vas voir la magie du BIM : les vues se créent automatiquement depuis la maquette 3D."
    },

    12: {
        moduleExplanations: [
            {
                moduleTitle: "Coupes et élévations",
                icon: "✂️",
                duration: "~7h",
                detailedContent: [
                    {
                        subtitle: "Créer des coupes",
                        explanation: "Les coupes dans ARCHICAD sont des vues dynamiques générées automatiquement depuis la maquette 3D. On place une ligne de coupe en plan, et la vue correspondante se crée dans le Navigateur. Tout changement dans le modèle se répercute dans la coupe.",
                        whatToSay: "« C'est LA preuve de la puissance du BIM ! Tu places une ligne de coupe en plan, et ARCHICAD génère automatiquement la coupe avec toutes les épaisseurs, les matériaux, les hachures. Et si tu modifies le modèle, la coupe se met à jour toute seule. Fini les mises à jour manuelles ! »",
                        demoSteps: [
                            "Menu Documentation > Outil Coupe/Façade/Intérieur",
                            "Tracer une ligne de coupe en plan (choisir le passage intéressant)",
                            "Montrer la flèche qui indique la direction de vue",
                            "Double-cliquer sur le marqueur pour ouvrir la vue de coupe",
                            "Montrer le résultat : coupe générée avec hachures, épaisseurs, matériaux",
                            "Modifier un mur en plan et montrer la mise à jour automatique en coupe"
                        ],
                        keyMessage: "Les coupes BIM sont TOUJOURS à jour. C'est la fin des incohérences plan/coupe qui sont le cauchemar des agences d'archi en 2D."
                    },
                    {
                        subtitle: "Les 4 élévations (façades)",
                        explanation: "Les élévations fonctionnent comme les coupes mais pour les façades. On place 4 marqueurs d'élévation autour du bâtiment (Nord, Sud, Est, Ouest). ARCHICAD génère les 4 façades automatiquement.",
                        whatToSay: "« Les 4 façades en un clic chacune. Tu places le marqueur d'élévation, et la façade se génère. Les matériaux, les menuiseries, les ombres... tout est là, automatiquement. »",
                        demoSteps: [
                            "Placer les 4 marqueurs d'élévation autour du bâtiment",
                            "Ouvrir chaque élévation depuis le Navigateur",
                            "Montrer le paramètre de profondeur de vue",
                            "Ajuster les épaisseurs de traits : lignes de coupe plus épaisses que les lignes vues"
                        ],
                        keyMessage: "Profondeur de vue = combien de 'profondeur' est visible derrière le plan de coupe. Ajuste-la pour que ta coupe soit lisible sans être surchargée."
                    }
                ]
            }
        ],
        faq: [],
        transitionToNextDay: "Demain, on habille les plans : cotations, étiquettes, annotations. C'est ce qui fait la différence entre un dessin amateur et un plan professionnel."
    },

    13: {
        moduleExplanations: [
            {
                moduleTitle: "Cotations et annotations",
                icon: "📏",
                duration: "~7h",
                detailedContent: [
                    {
                        subtitle: "Cotation linéaire et chaîne de cotes",
                        explanation: "L'outil Cotation (touche M) permet de coter les éléments. On peut créer des cotations individuelles ou des chaînes de cotes (extérieures). La cotation automatique détecte les ouvertures dans les murs et les cote d'un seul coup.",
                        whatToSay: "« La cotation, c'est l'art de rendre un plan professionnel. Les architectes utilisent des conventions : chaînes de cotes extérieures (3 lignes minimum), cotes intérieures des pièces, cotes des ouvertures. ARCHICAD automatise une grande partie de ce travail. »",
                        demoSteps: [
                            "Activer l'outil Cotation (touche M)",
                            "Créer une cotation linéaire entre deux points",
                            "Créer une chaîne de cotes extérieure (tous les murs d'un côté)",
                            "Montrer la cotation automatique : sélectionner un mur, coter automatiquement les ouvertures",
                            "Ajouter les cotes de dimension des pièces",
                            "Montrer la personnalisation : police, taille, format (m, cm, mm)"
                        ],
                        keyMessage: "Convention architecturale : 3 niveaux de chaînes de cotes extérieures. 1) Ouvertures, 2) Entre murs, 3) Hors-tout. Seul le niveau 1 peut être automatisé, les autres sont manuels."
                    },
                    {
                        subtitle: "Étiquettes automatiques",
                        explanation: "Les étiquettes sont liées aux éléments et affichent leurs informations automatiquement. Une étiquette de fenêtre affiche ses dimensions, une étiquette de zone affiche le nom et la surface. Si l'élément change, l'étiquette se met à jour !",
                        whatToSay: "« Les étiquettes, c'est comme des post-it intelligents. Tu les colles sur un élément, et elles affichent automatiquement ses caractéristiques. Si tu changes la fenêtre, l'étiquette se met à jour. C'est du BIM ! »",
                        demoSteps: [
                            "Activer l'outil Étiquette (touche K)",
                            "Placer une étiquette sur une fenêtre → montrer l'affichage dimensions",
                            "Placer une étiquette sur une porte → montrer le type et les dimensions",
                            "Placer des étiquettes de zones → nom + surface",
                            "Modifier une fenêtre et montrer que l'étiquette se met à jour"
                        ],
                        keyMessage: "Les étiquettes automatiques éliminent les erreurs. Plus de cote qui ne correspond plus à la réalité après une modification !"
                    }
                ]
            }
        ],
        faq: [],
        transitionToNextDay: "Demain, on extrait les données du modèle : nomenclatures, tableaux, métrés. C'est là que le BIM montre toute sa valeur ajoutée par rapport au 2D."
    },

    14: {
        moduleExplanations: [
            {
                moduleTitle: "Nomenclatures et métrés",
                icon: "📊",
                duration: "~7h",
                detailedContent: [
                    {
                        subtitle: "Nomenclatures bidirectionnelles",
                        explanation: "Les nomenclatures ARCHICAD sont connectées au modèle : cliquer sur une ligne du tableau sélectionne l'élément dans le plan, et modifier un paramètre dans le tableau modifie l'élément. C'est du vrai BIM bidirectionnel.",
                        whatToSay: "« C'est ici qu'on voit toute la puissance du BIM. Tu veux la liste de toutes les fenêtres avec leurs dimensions ? Un clic. Tu veux modifier une fenêtre depuis le tableau ? Tu peux. Essaie de faire ça avec AutoCAD ! »",
                        demoSteps: [
                            "Menu Documentation > Nomenclatures > Nomenclature d'éléments",
                            "Créer une nomenclature de fenêtres",
                            "Montrer les colonnes disponibles : référence, dimensions, vitrage, matériau",
                            "Cliquer sur une ligne : montrer la sélection dans le plan",
                            "Modifier une valeur dans le tableau : montrer que l'élément change",
                            "Exporter en Excel"
                        ],
                        keyMessage: "La nomenclature, ce n'est pas un tableau qu'on remplit à la main. C'est une VUE du modèle, comme un plan ou une coupe. Elle est toujours à jour automatiquement."
                    }
                ]
            }
        ],
        faq: [],
        transitionToNextDay: "Demain, c'est la mise en page ! On compose des planches professionnelles et on exporte le dossier en PDF. C'est le livrable final du travail."
    },

    15: {
        moduleExplanations: [
            {
                moduleTitle: "Mise en page et publication",
                icon: "📄",
                duration: "~7h",
                detailedContent: [
                    {
                        subtitle: "Le Carnet de mise en page",
                        explanation: "Le Carnet de mise en page est l'endroit où on compose les planches de présentation. On y place des vues (plans, coupes, 3D) sur des feuilles au format souhaité (A4, A3, A1). Chaque vue est un lien vers le modèle — si le modèle change, la mise en page se met à jour.",
                        whatToSay: "« Le Carnet de mise en page, c'est ton dossier de plans. Tu crées des feuilles, tu y places tes vues, tu ajoutes un cartouche... et tu exportes en PDF. C'est aussi simple que ça. Et si tu modifies le projet, les planches se mettent à jour ! »",
                        demoSteps: [
                            "Ouvrir le Carnet de mise en page dans le Navigateur",
                            "Créer une nouvelle feuille A3 avec un gabarit",
                            "Glisser une vue (plan RDC) depuis le Navigateur vers la feuille",
                            "Ajuster l'échelle (1/100 pour un plan d'habitation)",
                            "Créer un cartouche personnalisé avec les outils 2D",
                            "Ajouter d'autres vues : coupe, 3D",
                            "Exporter tout en PDF"
                        ],
                        keyMessage: "Le Carnet de mise en page produit les livrables. C'est la dernière étape du workflow BIM : du modèle vers le document imprimable."
                    }
                ]
            }
        ],
        faq: [],
        transitionToNextDay: "La semaine prochaine, on entre dans la partie visuelle et créative : matériaux, rendus, Enscape ! Le projet va devenir photoréaliste."
    },

    16: {
        moduleExplanations: [
            {
                moduleTitle: "Matériaux et textures",
                icon: "🎨",
                duration: "~7h",
                detailedContent: [
                    {
                        subtitle: "Appliquer des matériaux",
                        explanation: "Les matériaux dans ARCHICAD ont 3 facettes : l'apparence en plan (hachures), l'apparence en 3D (texture/couleur), et les propriétés physiques (densité, conductivité). On peut appliquer des matériaux différents pour chaque surface d'un élément.",
                        whatToSay: "« C'est le moment relooking du projet ! On va passer du gris uniforme à un projet avec des vrais matériaux : bois, pierre, verre, béton... Et ARCHICAD gère même les propriétés physiques pour les calculs thermiques. »",
                        demoSteps: [
                            "Ouvrir le gestionnaire de matériaux (Options > Attributs)",
                            "Montrer la bibliothèque de textures disponibles",
                            "Appliquer un matériau de façade (enduit blanc) aux murs extérieurs",
                            "Appliquer un bardage bois sur un pan de mur",
                            "Montrer le résultat en 3D ombré",
                            "Personnaliser un matériau : changer la couleur, la texture, la réflexion"
                        ],
                        keyMessage: "Les matériaux donnent vie au projet. Choisis une palette cohérente (3-4 matériaux principaux max) pour un rendu harmonieux."
                    }
                ]
            }
        ],
        faq: [],
        transitionToNextDay: "Demain, on passe aux rendus photoréalistes ! Éclairage, rendus, et premières images de synthèse du projet."
    },

    17: {
        moduleExplanations: [
            {
                moduleTitle: "Éclairage et rendu",
                icon: "💡",
                duration: "~7h",
                detailedContent: [
                    {
                        subtitle: "Éclairage solaire et rendus",
                        explanation: "ARCHICAD simule la position du soleil en fonction de la géolocalisation du projet et de la date/heure. Le moteur de rendu intégré (CineRender/Redshift) produit des images photoréalistes avec ombres, reflets et matériaux.",
                        whatToSay: "« On va faire des photos de ta maison... avant même qu'elle soit construite ! ARCHICAD calcule la position exacte du soleil, les ombres, les reflets. Le résultat peut être bluffant de réalisme. »",
                        demoSteps: [
                            "Paramétrer la géolocalisation du projet",
                            "Régler la date et l'heure pour le soleil",
                            "Placer des luminaires intérieurs",
                            "Lancer un rendu test (basse qualité → rapide)",
                            "Ajuster les paramètres et relancer en meilleure qualité",
                            "Montrer la différence entre perspective extérieure et vue intérieure"
                        ],
                        keyMessage: "Commence toujours par un rendu basse qualité (rapide) pour vérifier le cadrage et l'ambiance. Augmente la qualité seulement pour le rendu final."
                    }
                ]
            }
        ],
        faq: [],
        transitionToNextDay: "Demain, on découvre Enscape : le rendu en temps réel ! C'est comme naviguer dans un jeu vidéo mais avec ton projet d'architecture."
    },

    18: {
        moduleExplanations: [
            {
                moduleTitle: "Enscape et 3ds Max",
                icon: "🎮",
                duration: "~7h",
                detailedContent: [
                    {
                        subtitle: "Enscape — Rendu en temps réel",
                        explanation: "Enscape est un plugin qui s'intègre directement dans ARCHICAD. Il ouvre une fenêtre de rendu en temps réel : tu te déplaces dans le modèle comme dans un jeu vidéo, avec une qualité quasi-photoréaliste. Tu peux capturer des images, créer des panoramas 360° et même des animations vidéo.",
                        whatToSay: "« Enscape, c'est le jeu vidéo de l'architecte. Tu cliques sur 'Start', et tu te balades dans ton projet en rendu photoréaliste en temps réel. Tu peux montrer ça directement à un client sur ton écran ou lui envoyer un panorama 360°. C'est un outil de communication incroyable. »",
                        demoSteps: [
                            "Vérifier que le plugin Enscape est installé et à jour",
                            "Cliquer sur le bouton Enscape dans la barre d'outils",
                            "Laisser le modèle se charger — observer la qualité du rendu en temps réel",
                            "Naviguer avec WASD (comme un jeu vidéo) + souris pour regarder autour",
                            "Montrer les paramètres d'ambiance : heure du jour, météo, saison",
                            "Capturer une image haute résolution",
                            "Montrer le panorama 360° et l'export"
                        ],
                        keyMessage: "Enscape est devenu indispensable en agence : rendu instantané pour les décisions de conception, communication client, et production de visuels rapides."
                    },
                    {
                        subtitle: "3ds Max — Rendus haut de gamme",
                        explanation: "3ds Max est le logiciel de référence pour les rendus photo-réalistes de très haute qualité. Le workflow typique : export FBX depuis ARCHICAD, import dans 3ds Max, application de matériaux V-Ray ou Corona, mise en scène (environnement, mobilier, végétation), rendu final.",
                        whatToSay: "« 3ds Max, c'est le 'haut de gamme' du rendu. On l'utilise pour les images de concours d'architecture, les promotions immobilières, les publications. C'est un logiciel complexe — aujourd'hui on va juste voir le principe du workflow. »",
                        demoSteps: [
                            "Exporter le modèle ARCHICAD en FBX",
                            "Ouvrir 3ds Max et importer le FBX (si installé, sinon montrer en vidéo/captures)",
                            "Montrer l'interface 3ds Max et les matériaux V-Ray",
                            "Montrer un rendu d'exemple pour comparer les niveaux de qualité",
                            "Expliquer le positionnement : Enscape = rapide et quotidien, 3ds Max = final et exceptionnel"
                        ],
                        keyMessage: "Enscape pour 90% des besoins quotidiens. 3ds Max pour les 10% de visuels exceptionnels (concours, publications, promoteurs)."
                    }
                ]
            }
        ],
        faq: [
            {
                question: "Enscape ou Twinmotion ?",
                answer: "Les deux sont des moteurs de rendu en temps réel. Enscape est mieux intégré à ARCHICAD (synchronisation directe). Twinmotion est gratuit avec une licence ARCHICAD et offre plus d'éléments de décor (personnages, végétation, véhicules). Recommandation : teste les deux et choisis celui qui te convient."
            },
            {
                question: "Faut-il apprendre 3ds Max ?",
                answer: "Pas obligatoirement. Enscape couvre la majorité des besoins actuels. 3ds Max est un plus pour les agences qui font beaucoup de communication visuelle. C'est un investissement en temps d'apprentissage (plusieurs mois). Concentre-toi d'abord sur ARCHICAD + Enscape."
            }
        ],
        transitionToNextDay: "Demain, on fait le pont SketchUp ↔ ARCHICAD ! Tu vas pouvoir importer tes meubles 3D Warehouse et exporter vers SketchUp."
    },

    19: {
        moduleExplanations: [
            {
                moduleTitle: "Passerelle SketchUp — ARCHICAD",
                icon: "🔄",
                duration: "~7h",
                detailedContent: [
                    {
                        subtitle: "Import de fichiers SketchUp",
                        explanation: "ARCHICAD peut importer directement les fichiers .skp (SketchUp). Les éléments arrivent comme des objets ou des morph. C'est très utile pour importer du mobilier depuis 3D Warehouse, des éléments de décor, ou des modèles existants créés dans SketchUp.",
                        whatToSay: "« Tu connais SketchUp et 3D Warehouse. Bonne nouvelle : tu peux importer tout ça dans ARCHICAD ! Le mobilier, les accessoires, les éléments de décor... tout ce qui manque dans la bibliothèque ARCHICAD, tu le trouves sur 3D Warehouse. »",
                        demoSteps: [
                            "Télécharger un objet depuis 3D Warehouse (canapé, table, etc.)",
                            "Menu Fichier > Interopérabilité > Ouvrir un fichier .skp",
                            "Montrer les options d'import : conversion en objet, en morph, etc.",
                            "Placer l'objet importé dans le projet",
                            "Ajuster la taille et la position si nécessaire",
                            "Vérifier le résultat en 3D"
                        ],
                        keyMessage: "3D Warehouse + ARCHICAD = bibliothèque infinie de mobilier et d'objets 3D. C'est un workflow quotidien dans les agences."
                    },
                    {
                        subtitle: "Le format IFC — L'échange BIM universel",
                        explanation: "L'IFC (Industry Foundation Classes) est le format standard d'échange BIM. Il permet de communiquer avec TOUS les logiciels BIM (Revit, SketchUp, Allplan, Tekla...). C'est le format obligatoire pour les marchés publics BIM en France.",
                        whatToSay: "« L'IFC, c'est l'esperanto du BIM. Peu importe si ton ingénieur utilise Revit et ton économiste un autre logiciel : l'IFC permet à tout le monde de lire la maquette. C'est le format obligatoire en BIM public. »",
                        demoSteps: [
                            "Menu Fichier > Enregistrer sous > IFC",
                            "Montrer les options d'export IFC",
                            "Exporter le projet en IFC",
                            "Réimporter l'IFC pour vérifier la qualité de l'échange",
                            "Évoquer les viewers IFC gratuits (BIMvision, Solibri Model Viewer)"
                        ],
                        keyMessage: "L'IFC est incontournable en BIM. Apprends à exporter proprement en IFC, c'est une compétence demandée par toutes les agences."
                    }
                ]
            }
        ],
        faq: [],
        transitionToNextDay: "Demain, c'est le jour final ! On assemble le dossier complet et on fait le bilan de toute la formation."
    },

    20: {
        moduleExplanations: [
            {
                moduleTitle: "Projet final et bilan",
                icon: "🎓",
                duration: "~7h",
                detailedContent: [
                    {
                        subtitle: "Assemblage du dossier final",
                        explanation: "Le dossier final doit être un livrable professionnel complet : plans cotés de chaque niveau, coupes et élévations, vue 3D, nomenclatures, tableau de surfaces, rendus photoréalistes (ARCHICAD + Enscape). Tout mis en page dans un carnet et exporté en PDF.",
                        whatToSay: "« C'est le grand final ! Tu vas assembler tout ce que tu as appris en 20 jours dans un seul dossier. C'est ce que tu pourrais présenter à un client ou à un jury. Prends le temps de tout vérifier et de soigner la présentation. »",
                        demoSteps: [
                            "Revue complète du modèle 3D (corrections finales)",
                            "Mettre à jour toutes les vues (plans, coupes, élévations)",
                            "Vérifier les cotations et les étiquettes",
                            "Compléter les nomenclatures",
                            "Générer les rendus finaux",
                            "Assembler le carnet de mise en page",
                            "Exporter en PDF"
                        ],
                        keyMessage: "Le dossier final est la preuve de tes compétences. Un PDF propre et complet vaut mieux que mille paroles."
                    },
                    {
                        subtitle: "Bilan et perspectives",
                        explanation: "Le bilan de la formation doit couvrir : ce qui a été acquis, les points à approfondir, les ressources pour continuer à apprendre, et les prochaines étapes. C'est aussi le moment de valoriser les progrès de l'apprenante.",
                        whatToSay: "« En 20 jours, tu es passée de débutante à capable de modéliser un bâtiment complet, de le documenter et de le présenter. C'est énorme ! Bien sûr, la pratique quotidienne va tout consolider. Voici les ressources pour continuer... »",
                        demoSteps: [
                            "Faire présenter le dossier par l'apprenante",
                            "Donner un feedback constructif et valorisant",
                            "Identifier les 3 points forts et les 3 axes d'amélioration",
                            "Remettre la liste des ressources pour continuer",
                            "Évoquer les certifications ARCHICAD (Graphisoft Certified User)",
                            "Planifier un suivi post-formation si possible"
                        ],
                        keyMessage: "La formation est un tremplin. La vraie compétence se développe avec la pratique quotidienne sur des projets réels. Encourage la pratique régulière."
                    }
                ]
            }
        ],
        faq: [
            {
                question: "Comment continuer à progresser après la formation ?",
                answer: "3 recommandations : 1) Pratiquer sur des projets réels ou personnels. 2) Suivre les tutos Graphisoft Learn et YouTube. 3) Rejoindre la communauté ARCHICAD (forums Graphisoft). Le plus important : ouvrir ARCHICAD au moins 3 fois par semaine pour ne pas oublier."
            },
            {
                question: "Quelles formations complémentaires ?",
                answer: "Après cette base : 1) ARCHICAD avancé (Teamwork, BIM Server, MEP). 2) Rendu avancé (Enscape, Twinmotion). 3) IFC et BIM Management. 4) 3ds Max si besoin de rendus haut de gamme. 5) Certification Graphisoft."
            }
        ],
        transitionToNextDay: null
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FORMATEUR_GUIDE_DETAILS };
}
