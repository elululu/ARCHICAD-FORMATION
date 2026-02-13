// ==========================================
// FORMATION DATA — Programme complet 20 jours
// AtelierLO — Formation ARCHICAD
// ==========================================

const FORMATION_DATA = {
    title: "Formation ARCHICAD",
    formateur: "Lucien",
    structure: "AtelierLO",
    totalDays: 20,
    weeks: [
        {
            id: 1,
            title: "Fondamentaux",
            subtitle: "Prise en main et outils de base",
            days: [
                {
                    id: 1,
                    title: "Interface & environnement de travail",
                    subtitle: "Découvrir l'interface d'ARCHICAD et apprendre à naviguer efficacement",
                    duration: "7h",
                    week: 1,
                    objectives: [
                        "Comprendre l'interface d'ARCHICAD et ses différents panneaux",
                        "Maîtriser la navigation 2D et 3D (zoom, rotation, déplacement)",
                        "Configurer son espace de travail et ses préférences",
                        "Comprendre la logique BIM (différence avec le dessin 2D classique)",
                        "Ouvrir, créer et sauvegarder un projet"
                    ],
                    keyPoints: [
                        {
                            title: "L'interface ARCHICAD",
                            content: "ARCHICAD est organisé autour de la fenêtre Plan (vue en plan), la fenêtre 3D, et les palettes d'outils. La Boîte à outils à gauche contient tous les outils de modélisation. La palette Infos en haut permet de paramétrer chaque outil."
                        },
                        {
                            title: "Navigation 2D/3D",
                            content: "Molette pour zoomer, clic molette pour déplacer la vue. En 3D : Shift + clic molette pour orbiter. Les raccourcis F2 (plan), F3 (3D), F5 (élévation) permettent de basculer rapidement entre les vues."
                        },
                        {
                            title: "Logique BIM",
                            content: "Contrairement à AutoCAD, dans ARCHICAD on ne dessine pas des lignes mais on place des éléments de construction (murs, dalles, toitures). Chaque élément contient des informations (matériaux, dimensions, coûts). C'est la base du BIM."
                        }
                    ],
                    exercise: {
                        title: "Exploration d'un projet exemple",
                        description: "Ouvrir le projet résidentiel exemple fourni par ARCHICAD et explorer toutes les vues disponibles.",
                        steps: [
                            "Ouvrir le projet exemple depuis Fichier > Ouvrir",
                            "Explorer le plan du RDC : identifier les murs, portes, fenêtres",
                            "Passer en vue 3D (F3) et naviguer autour du bâtiment",
                            "Ouvrir une coupe et une élévation depuis le navigateur",
                            "Modifier la couleur d'un mur dans les réglages pour observer le changement en 3D",
                            "Sauvegarder le projet sous un nouveau nom"
                        ]
                    },
                    checklist: [
                        "Je sais identifier les différents panneaux de l'interface",
                        "Je sais naviguer en 2D (zoom, déplacement)",
                        "Je sais naviguer en 3D (orbite, zoom, déplacement)",
                        "Je comprends la différence entre BIM et dessin 2D",
                        "Je sais ouvrir et sauvegarder un projet"
                    ],
                    formateurGuide: {
                        intro: "Première séance : c'est crucial de mettre à l'aise. Commencer par montrer un projet fini pour donner envie, puis décortiquer l'interface.",
                        timing: [
                            { time: "0h - 0h30", content: "Accueil, présentation de la formation, tour d'horizon d'ARCHICAD" },
                            { time: "0h30 - 1h30", content: "Présentation de l'interface : boîte à outils, palette infos, navigateur, mini-navigateur" },
                            { time: "1h30 - 2h30", content: "Navigation 2D : zoom, pan, raccourcis. Montrer la différence avec AutoCAD" },
                            { time: "2h30 - 3h00", content: "Pause + questions" },
                            { time: "3h00 - 4h00", content: "Navigation 3D : orbite, perspectives, axonométries. Vues prédéfinies" },
                            { time: "4h00 - 5h00", content: "Concept BIM : expliquer avec un mur (on clique dessus, on voit toutes ses propriétés)" },
                            { time: "5h00 - 6h30", content: "Exercice pratique : exploration du projet exemple" },
                            { time: "6h30 - 7h00", content: "Récap, questions, préparation du jour 2" }
                        ],
                        tips: [
                            "Faire le parallèle avec AutoCAD que l'apprenante connaît déjà — ça rassure",
                            "Montrer la vue 3D très tôt pour créer l'effet 'waouh' vs le 2D d'AutoCAD",
                            "Ne pas surcharger d'informations : se concentrer sur la navigation fluide",
                            "Laisser l'apprenante manipuler dès que possible, ne pas faire de démo trop longue"
                        ],
                        warnings: [
                            "Attention au syndrome 'c'est pas comme AutoCAD' — recadrer positivement",
                            "Ne pas introduire trop d'outils dès le jour 1, rester sur la navigation",
                            "Vérifier que la version d'ARCHICAD est bien installée et activée avant la séance"
                        ],
                        exerciseSolution: "L'objectif n'est pas de réussir parfaitement mais de manipuler. Guider l'apprenante si elle bloque sur la navigation 3D. Montrer Shift+molette pour l'orbite."
                    }
                },
                {
                    id: 2,
                    title: "Outils de dessin 2D",
                    subtitle: "Maîtriser les outils de dessin et d'édition 2D fondamentaux",
                    duration: "7h",
                    week: 1,
                    objectives: [
                        "Utiliser les outils Ligne, Arc, Cercle, Polyligne, Spline",
                        "Maîtriser les outils d'édition : déplacer, copier, rotation, miroir",
                        "Comprendre le système de coordonnées et la saisie numérique",
                        "Utiliser les guides, grilles et points d'accrochage",
                        "Travailler avec les calques et les combinaisons de calques"
                    ],
                    keyPoints: [
                        {
                            title: "Saisie des coordonnées",
                            content: "ARCHICAD utilise un système de coordonnées cartésiennes. On peut saisir des coordonnées absolues (X, Y) ou relatives (dx, dy). Le tracker en bas de l'écran affiche les coordonnées en temps réel. Tab permet de basculer entre les champs."
                        },
                        {
                            title: "Points d'accrochage",
                            content: "Les points d'accrochage (snap) permettent de se positionner précisément sur les éléments existants : extrémité, milieu, intersection, perpendiculaire. Ils sont essentiels pour un dessin précis."
                        },
                        {
                            title: "Calques (Layers)",
                            content: "Les calques dans ARCHICAD fonctionnent différemment d'AutoCAD. Chaque outil a un calque par défaut. Les combinaisons de calques permettent d'afficher/masquer des groupes de calques selon le type de vue."
                        }
                    ],
                    exercise: {
                        title: "Reproduire un plan simple en 2D",
                        description: "Reproduire le plan 2D d'un studio (une pièce avec salle de bain) en utilisant uniquement les outils de dessin 2D.",
                        steps: [
                            "Créer un nouveau projet avec les unités en mètres",
                            "Dessiner un rectangle de 6m x 4m avec l'outil Ligne",
                            "Ajouter une cloison intérieure pour créer la salle de bain (2m x 3m)",
                            "Dessiner un arc pour représenter l'ouverture de porte",
                            "Ajouter des cotations manuelles avec l'outil Ligne",
                            "Organiser les éléments sur les calques appropriés"
                        ]
                    },
                    checklist: [
                        "Je sais tracer des lignes, arcs et rectangles",
                        "Je sais déplacer, copier et faire pivoter des éléments",
                        "Je comprends le système de coordonnées",
                        "Je sais utiliser les points d'accrochage",
                        "Je comprends le principe des calques"
                    ],
                    formateurGuide: {
                        intro: "Cette séance fait le lien avec AutoCAD — les outils 2D sont familiers. En profiter pour montrer les différences et les améliorations d'ARCHICAD.",
                        timing: [
                            { time: "0h - 0h30", content: "Récap jour 1 + questions" },
                            { time: "0h30 - 1h30", content: "Outils de dessin : Ligne, Polyligne, Arc, Cercle, Rectangle" },
                            { time: "1h30 - 2h30", content: "Saisie numérique : coordonnées absolues, relatives, tracker" },
                            { time: "2h30 - 3h00", content: "Pause + questions" },
                            { time: "3h00 - 4h00", content: "Outils d'édition : déplacer, copier, rotation, miroir, multiplier" },
                            { time: "4h00 - 4h30", content: "Grilles, guides et accrochages" },
                            { time: "4h30 - 5h00", content: "Introduction aux calques" },
                            { time: "5h00 - 6h30", content: "Exercice : reproduire le plan du studio" },
                            { time: "6h30 - 7h00", content: "Récap + préparation jour 3" }
                        ],
                        tips: [
                            "Comparer systématiquement avec AutoCAD : 'Dans AutoCAD tu faisais X, ici c'est Y'",
                            "Insister sur le tracker et la saisie numérique — c'est un gain de temps énorme",
                            "Montrer la touche Tab pour naviguer dans le tracker",
                            "Faire manipuler immédiatement après chaque démonstration"
                        ],
                        warnings: [
                            "Ne pas passer trop de temps sur le 2D pur — rappeler que l'objectif est le BIM 3D",
                            "Les calques dans ARCHICAD sont différents d'AutoCAD — bien expliquer la logique"
                        ],
                        exerciseSolution: "Le plan est simple volontairement. L'important est la précision de la saisie et l'utilisation correcte des accrochages."
                    }
                },
                {
                    id: 3,
                    title: "Murs : types, épaisseurs, intersections",
                    subtitle: "Créer et paramétrer des murs pour la modélisation architecturale",
                    duration: "7h",
                    week: 1,
                    objectives: [
                        "Créer des murs droits, courbes et trapézoïdaux",
                        "Paramétrer les murs : épaisseur, hauteur, matériaux, composites",
                        "Comprendre les intersections et jonctions de murs",
                        "Utiliser les lignes de référence des murs",
                        "Modifier des murs existants (étirer, diviser, fusionner)"
                    ],
                    keyPoints: [
                        {
                            title: "L'outil Mur",
                            content: "L'outil Mur est l'outil principal en ARCHICAD. Un mur est un élément 3D paramétrique : il a une épaisseur, une hauteur, des matériaux de surface et une structure composite. On le dessine en plan et il se construit automatiquement en 3D."
                        },
                        {
                            title: "Ligne de référence",
                            content: "Chaque mur a une ligne de référence (centre, extérieur ou intérieur). C'est crucial pour les intersections propres. Toujours vérifier la position de la ligne de référence avant de dessiner."
                        },
                        {
                            title: "Murs composites",
                            content: "Un mur composite est constitué de plusieurs couches (ex : brique + isolation + placo). ARCHICAD gère automatiquement les jonctions entre murs composites. C'est un des atouts majeurs du BIM."
                        }
                    ],
                    exercise: {
                        title: "Dessiner les murs d'un appartement T3",
                        description: "Créer la structure murale complète d'un appartement T3 avec murs porteurs et cloisons.",
                        steps: [
                            "Créer les murs extérieurs en mur composite (20cm) formant un rectangle de 12m x 9m",
                            "Ajouter les murs porteurs intérieurs (20cm) pour séparer les espaces",
                            "Créer les cloisons de distribution (10cm) pour les chambres et la salle de bain",
                            "Vérifier les intersections des murs en vue 3D",
                            "Ajuster les hauteurs des murs (2,60m sous plafond)",
                            "Vérifier que tous les murs ont les bonnes épaisseurs et matériaux"
                        ]
                    },
                    checklist: [
                        "Je sais créer un mur avec l'outil Mur",
                        "Je sais paramétrer l'épaisseur et la hauteur d'un mur",
                        "Je comprends la ligne de référence",
                        "Je sais gérer les intersections de murs",
                        "Je sais modifier un mur existant"
                    ],
                    formateurGuide: {
                        intro: "C'est le jour où on entre vraiment dans le BIM ! Premier vrai élément de construction. Montrer la magie : on dessine en plan, ça se construit en 3D.",
                        timing: [
                            { time: "0h - 0h30", content: "Récap jour 2 + transition vers les éléments 3D" },
                            { time: "0h30 - 1h30", content: "Outil Mur : création, paramètres, boîte de dialogue" },
                            { time: "1h30 - 2h30", content: "Ligne de référence : pourquoi c'est important, exercice de positionnement" },
                            { time: "2h30 - 3h00", content: "Pause" },
                            { time: "3h00 - 4h00", content: "Types de murs : simples, composites, profils complexes" },
                            { time: "4h00 - 5h00", content: "Intersections et jonctions : nettoyage, priorités" },
                            { time: "5h00 - 6h30", content: "Exercice : T3 complet" },
                            { time: "6h30 - 7h00", content: "Vérification en 3D + récap" }
                        ],
                        tips: [
                            "Faire basculer constamment entre plan et 3D pour montrer le résultat",
                            "Montrer ce qui se passe quand la ligne de référence est mal positionnée",
                            "Utiliser la Baguette magique pour sélectionner des murs liés",
                            "Montrer le Pet Palette pour les options de modification"
                        ],
                        warnings: [
                            "Les intersections de murs peuvent être source de frustration — rester patient",
                            "Bien expliquer le concept de priorité de jonction",
                            "Ne pas introduire les murs-rideaux à ce stade"
                        ],
                        exerciseSolution: "L'appartement T3 doit comprendre : séjour/cuisine, 3 chambres, 1 SDB, 1 WC, 1 entrée/couloir. Commencer par les murs extérieurs puis ajouter les cloisons."
                    }
                },
                {
                    id: 4,
                    title: "Dalles, poteaux, poutres",
                    subtitle: "Créer la structure complète d'un bâtiment",
                    duration: "7h",
                    week: 1,
                    objectives: [
                        "Créer des dalles (planchers et plafonds)",
                        "Paramétrer les dalles : épaisseur, matériaux, composites",
                        "Placer des poteaux structurels et architecturaux",
                        "Utiliser l'outil Poutre pour la structure",
                        "Comprendre les liens entre éléments structurels"
                    ],
                    keyPoints: [
                        {
                            title: "L'outil Dalle",
                            content: "La dalle se dessine en plan par son contour (rectangle, polygone ou baguette magique sur les murs). Elle peut être simple ou composite. L'altitude de référence est essentielle pour placer la dalle au bon niveau."
                        },
                        {
                            title: "Poteaux & Poutres",
                            content: "Les poteaux se placent par point. Ils peuvent être structurels (porteurs) ou architecturaux (décoratifs). Les poutres relient deux points et peuvent avoir des profils variés (rectangulaire, IPN, etc.)."
                        },
                        {
                            title: "La Baguette magique",
                            content: "La Baguette magique (barre espace) permet de créer une dalle en cliquant à l'intérieur d'un contour fermé de murs. C'est un outil de productivité majeur dans ARCHICAD."
                        }
                    ],
                    exercise: {
                        title: "Structurer le T3 : dalle et éléments porteurs",
                        description: "Ajouter la structure complète au T3 du jour précédent : dalles, poteaux et poutres.",
                        steps: [
                            "Créer la dalle de plancher bas du T3 avec la Baguette magique",
                            "Paramétrer la dalle en composite (chape + isolant + structure)",
                            "Ajouter 4 poteaux porteurs aux angles principaux",
                            "Créer des poutres reliant les poteaux",
                            "Ajouter la dalle haute (plafond/plancher étage)",
                            "Vérifier la cohérence en 3D et en coupe"
                        ]
                    },
                    checklist: [
                        "Je sais créer une dalle à partir d'un contour",
                        "Je sais utiliser la Baguette magique",
                        "Je sais placer des poteaux",
                        "Je sais créer des poutres",
                        "Je comprends les altitudes de référence"
                    ],
                    formateurGuide: {
                        intro: "On complète la structure du bâtiment. La Baguette magique sera un moment fort — montrer comme c'est rapide de créer une dalle.",
                        timing: [
                            { time: "0h - 0h30", content: "Récap jour 3 + ouverture du projet T3" },
                            { time: "0h30 - 2h00", content: "Outil Dalle : création, paramètres, composites, altitudes" },
                            { time: "2h00 - 2h30", content: "Baguette magique : démonstration et pratique" },
                            { time: "2h30 - 3h00", content: "Pause" },
                            { time: "3h00 - 4h00", content: "Poteaux : types, sections, paramètres" },
                            { time: "4h00 - 5h00", content: "Poutres : création, profils, connexions" },
                            { time: "5h00 - 6h30", content: "Exercice : structurer le T3" },
                            { time: "6h30 - 7h00", content: "Vérification 3D + récap" }
                        ],
                        tips: [
                            "La Baguette magique est un moment 'waouh' — en profiter pour montrer la puissance d'AC",
                            "Montrer la coupe instantanée (Ctrl+clic) pour vérifier les épaisseurs",
                            "Bien expliquer le concept d'altitude de référence — source de beaucoup d'erreurs",
                            "Comparer avec SketchUp : montrer que les infos sont intégrées aux éléments"
                        ],
                        warnings: [
                            "Les altitudes de dalles sont le piège classique des débutants",
                            "Ne pas oublier de vérifier en coupe que tout est bien aligné",
                            "Les poutres peuvent sembler complexes — rester simple avec des profils rectangulaires"
                        ],
                        exerciseSolution: "Dalle basse à 0.00, dalle haute à +2.60. Poteaux de 0.00 à 2.60. Les poutres relient les poteaux à 2.40 (sous la dalle haute)."
                    }
                },
                {
                    id: 5,
                    title: "Portes & fenêtres",
                    subtitle: "Placer et paramétrer les menuiseries dans le projet",
                    duration: "7h",
                    week: 1,
                    objectives: [
                        "Placer des portes dans les murs (simples, doubles, coulissantes)",
                        "Placer des fenêtres (fixes, ouvrantes, baies vitrées)",
                        "Paramétrer les dimensions, seuils et tableaux",
                        "Utiliser la bibliothèque d'objets ARCHICAD",
                        "Personnaliser l'affichage en plan des menuiseries"
                    ],
                    keyPoints: [
                        {
                            title: "Portes et Fenêtres = Objets dans les murs",
                            content: "Les portes et fenêtres sont des objets paramétriques qui se placent dans les murs. Ils créent automatiquement l'ouverture dans le mur. Leurs paramètres (largeur, hauteur, allège, type d'ouverture) se règlent dans la boîte de dialogue."
                        },
                        {
                            title: "La bibliothèque ARCHICAD",
                            content: "ARCHICAD dispose d'une bibliothèque riche de portes et fenêtres. Chaque objet a de nombreux paramètres : dimensions, matériaux, type de vitrage, ferrures, etc. On peut aussi importer des objets depuis BIMcomponents.com."
                        },
                        {
                            title: "Allège et hauteur d'ouverture",
                            content: "L'allège est la distance entre le sol et le bas de la fenêtre. Elle se paramètre dans les réglages de la fenêtre. Pour les portes, la hauteur de passage et le seuil sont les paramètres clés."
                        }
                    ],
                    exercise: {
                        title: "Compléter le T3 avec les menuiseries",
                        description: "Ajouter toutes les portes et fenêtres du T3 pour obtenir un plan complet.",
                        steps: [
                            "Placer la porte d'entrée (90cm, avec imposte vitrée)",
                            "Ajouter les portes intérieures : chambres (80cm), SDB (70cm), WC (60cm)",
                            "Placer les fenêtres du séjour : une baie vitrée (240cm) et une fenêtre (120cm)",
                            "Ajouter les fenêtres des chambres (120cm, allège 90cm)",
                            "Placer la fenêtre de salle de bain (60cm, allège 130cm)",
                            "Vérifier le résultat en 3D et ajuster les paramètres si nécessaire"
                        ]
                    },
                    checklist: [
                        "Je sais placer une porte dans un mur",
                        "Je sais placer une fenêtre et régler l'allège",
                        "Je sais naviguer dans la bibliothèque d'objets",
                        "Je sais modifier les dimensions des menuiseries",
                        "Je sais changer le sens d'ouverture d'une porte"
                    ],
                    formateurGuide: {
                        intro: "Séance gratifiante — le projet commence à ressembler à quelque chose ! Les menuiseries rendent le projet vivant en 3D.",
                        timing: [
                            { time: "0h - 0h30", content: "Récap jour 4 + vue d'ensemble du T3 en 3D" },
                            { time: "0h30 - 2h00", content: "Outil Porte : placement, paramètres, types, sens d'ouverture" },
                            { time: "2h00 - 2h30", content: "Bibliothèque : navigation, recherche, favoris" },
                            { time: "2h30 - 3h00", content: "Pause" },
                            { time: "3h00 - 4h30", content: "Outil Fenêtre : placement, allège, types, baies vitrées" },
                            { time: "4h30 - 5h00", content: "Représentation en plan : affichage, options" },
                            { time: "5h00 - 6h30", content: "Exercice : compléter le T3" },
                            { time: "6h30 - 7h00", content: "Visite 3D du T3 terminé + bilan semaine 1" }
                        ],
                        tips: [
                            "Montrer le résultat 3D après chaque porte/fenêtre — c'est motivant",
                            "Expliquer le côté de placement (intérieur/extérieur) avec un schéma simple",
                            "Montrer BIMcomponents.com pour les objets supplémentaires",
                            "Terminer par une 'visite virtuelle' du T3 en perspective — moment fort de fin de semaine"
                        ],
                        warnings: [
                            "Le sens de la porte (intérieur/extérieur) peut être déroutant au début",
                            "Ne pas perdre de temps sur la bibliothèque — rester sur les objets standards",
                            "Attention aux allèges : erreur fréquente de mettre 0 au lieu de 90cm"
                        ],
                        exerciseSolution: "Le T3 doit avoir environ 6-8 fenêtres et 6-7 portes. Vérifier en 3D que toutes les ouvertures sont correctes et que les sens d'ouverture sont logiques."
                    }
                }
            ]
        },
        {
            id: 2,
            title: "Modélisation complète",
            subtitle: "Éléments avancés et projet complet",
            days: [
                {
                    id: 6,
                    title: "Escaliers & garde-corps",
                    subtitle: "Créer des escaliers et garde-corps paramétriques",
                    duration: "7h",
                    week: 2,
                    objectives: [
                        "Créer des escaliers droits, tournants et hélicoïdaux",
                        "Paramétrer les marches, contremarches et girons",
                        "Ajouter des garde-corps aux escaliers et aux balcons",
                        "Comprendre les réglementations (hauteur de marche, giron)",
                        "Modifier un escalier existant"
                    ],
                    keyPoints: [
                        { title: "L'outil Escalier", content: "L'outil Escalier d'ARCHICAD est très puissant. Il gère automatiquement la trémie dans la dalle, le nombre de marches en fonction de la hauteur d'étage, et propose de nombreuses formes prédéfinies." },
                        { title: "Règles de conception", content: "Formule de Blondel : 2h + g = 60-65cm (h = hauteur de marche, g = giron). Hauteur de marche idéale : 17-18cm. Giron idéal : 27-28cm. Garde-corps minimum : 90cm de hauteur." },
                        { title: "Garde-corps", content: "L'outil Garde-corps est indépendant de l'escalier. On peut l'appliquer à un escalier, un balcon, ou le long d'un vide. Il est très paramétrique : barreaux, main courante, remplissage." }
                    ],
                    exercise: {
                        title: "Ajouter un escalier au projet",
                        description: "Créer un escalier droit un quart tournant reliant le RDC au R+1.",
                        steps: [
                            "Calculer le nombre de marches pour une hauteur de 2,80m",
                            "Créer un escalier quart tournant avec palier intermédiaire",
                            "Paramétrer : giron 28cm, hauteur de marche 17,5cm",
                            "Vérifier la trémie dans la dalle",
                            "Ajouter un garde-corps le long de l'escalier",
                            "Vérifier le résultat en 3D et en coupe"
                        ]
                    },
                    checklist: [
                        "Je sais créer un escalier avec l'outil Escalier",
                        "Je connais la formule de Blondel",
                        "Je sais paramétrer les marches et girons",
                        "Je sais ajouter un garde-corps",
                        "Je sais vérifier un escalier en coupe"
                    ],
                    formateurGuide: {
                        intro: "Sujet technique mais avec un résultat visuel impressionnant en 3D. L'outil Escalier d'AC est vraiment performant.",
                        timing: [
                            { time: "0h - 0h30", content: "Récap semaine 1 + introduction aux escaliers" },
                            { time: "0h30 - 2h00", content: "Outil Escalier : interface, types, paramètres de base" },
                            { time: "2h00 - 2h30", content: "Réglementation : Blondel, normes, accessibilité" },
                            { time: "2h30 - 3h00", content: "Pause" },
                            { time: "3h00 - 4h30", content: "Garde-corps : création, paramètres, application" },
                            { time: "4h30 - 5h00", content: "Trémie et liaison entre étages" },
                            { time: "5h00 - 6h30", content: "Exercice : escalier dans le projet" },
                            { time: "6h30 - 7h00", content: "Récap + questions" }
                        ],
                        tips: [
                            "Commencer par un escalier droit simple avant le quart tournant",
                            "Montrer le calculateur intégré d'ARCHICAD",
                            "Faire le lien avec SketchUp : montrer la supériorité du paramétrique"
                        ],
                        warnings: [
                            "L'outil Escalier a beaucoup de paramètres — ne pas tout montrer d'un coup",
                            "La trémie automatique peut parfois ne pas fonctionner — montrer la méthode manuelle"
                        ],
                        exerciseSolution: "16 marches (2800/175=16), giron 28cm. Escalier quart tournant avec palier à mi-hauteur."
                    }
                },
                {
                    id: 7,
                    title: "Toitures",
                    subtitle: "Créer des toitures simples et complexes",
                    duration: "7h",
                    week: 2,
                    objectives: [
                        "Créer des toitures à un ou plusieurs pans",
                        "Paramétrer les pentes, débords et épaisseurs",
                        "Utiliser l'outil Forme pour des toitures complexes",
                        "Gérer les intersections de pans de toiture",
                        "Créer des lucarnes et des ouvertures de toit"
                    ],
                    keyPoints: [
                        { title: "Outil Toit", content: "L'outil Toit permet de créer des toitures par pans. On dessine la ligne de base (gouttière) et on définit la pente. L'outil calcule automatiquement les intersections entre les pans." },
                        { title: "Outil Forme (Shell)", content: "Pour les toitures complexes (courbes, voûtes, formes libres), l'outil Forme est plus adapté. Il fonctionne par extrusion, révolution ou règle." },
                        { title: "Jonctions mur-toiture", content: "ARCHICAD peut ajuster automatiquement les murs sous la toiture avec l'outil 'Rogner les éléments à la toiture'. Les murs épousent alors la pente du toit." }
                    ],
                    exercise: {
                        title: "Créer différents types de toitures",
                        description: "Réaliser trois types de toitures sur des volumes simples.",
                        steps: [
                            "Créer une toiture à 2 pans (30°) sur un volume rectangulaire",
                            "Créer une toiture à 4 pans (croupe) sur un volume carré",
                            "Créer une toiture mono-pente (toit terrasse incliné)",
                            "Ajuster les débords de toit (60cm)",
                            "Rogner les murs sous les toitures",
                            "Vérifier en 3D et en coupe"
                        ]
                    },
                    checklist: [
                        "Je sais créer une toiture à pans",
                        "Je sais régler les pentes et débords",
                        "Je sais rogner les murs sous la toiture",
                        "Je connais l'outil Forme pour les toitures complexes",
                        "Je sais vérifier la toiture en coupe"
                    ],
                    formateurGuide: {
                        intro: "Les toitures sont un sujet complexe mais essentiel. Commencer par les formes simples, puis montrer les possibilités avancées.",
                        timing: [
                            { time: "0h - 0h30", content: "Récap jour 6" },
                            { time: "0h30 - 2h00", content: "Outil Toit : création de pans, pentes, paramètres" },
                            { time: "2h00 - 3h00", content: "Multi-pans : intersections automatiques" },
                            { time: "3h00 - 3h30", content: "Pause" },
                            { time: "3h30 - 4h30", content: "Rogner les murs + débords" },
                            { time: "4h30 - 5h00", content: "Outil Forme (aperçu)" },
                            { time: "5h00 - 6h30", content: "Exercice : 3 types de toitures" },
                            { time: "6h30 - 7h00", content: "Récap" }
                        ],
                        tips: [
                            "Commencer par un toit 2 pans — le plus simple et le plus courant",
                            "Montrer la vue 3D en permanence pendant la construction du toit",
                            "Le rognage des murs est un effet spectaculaire — bon pour la motivation"
                        ],
                        warnings: [
                            "Les intersections de pans complexes peuvent planter — sauvegarder avant",
                            "L'outil Forme peut attendre le jour 11 si c'est trop lourd"
                        ],
                        exerciseSolution: "3 petits volumes simples (6x4m chacun) avec une toiture différente. Pente standard 30° pour le 2 pans et la croupe."
                    }
                },
                {
                    id: 8,
                    title: "Gestion des étages",
                    subtitle: "Travailler avec plusieurs niveaux dans un projet",
                    duration: "7h",
                    week: 2,
                    objectives: [
                        "Créer et gérer les étages (niveaux) d'un projet",
                        "Copier des éléments d'un étage à l'autre",
                        "Comprendre les altitudes de référence par étage",
                        "Utiliser la coupe pour vérifier la cohérence verticale",
                        "Maîtriser la navigation entre étages"
                    ],
                    keyPoints: [
                        { title: "Gestion des étages", content: "Dans ARCHICAD, les étages se gèrent depuis la palette Étages (Design > Étages). Chaque étage a une altitude et une hauteur. Les éléments sont liés à un étage de référence." },
                        { title: "Copie inter-étages", content: "On peut copier des éléments d'un étage à l'autre avec Édition > Copier/Coller sur étage. C'est très efficace pour les éléments répétitifs (murs porteurs, structure)." },
                        { title: "Éléments multi-étages", content: "Certains éléments comme les murs et les poteaux peuvent s'étendre sur plusieurs étages. C'est pratique pour les murs de cage d'escalier par exemple." }
                    ],
                    exercise: {
                        title: "Créer un R+1 complet",
                        description: "Ajouter un étage au T3 et créer les espaces du R+1.",
                        steps: [
                            "Créer l'étage R+1 avec une hauteur de 2,80m",
                            "Copier les murs porteurs du RDC vers le R+1",
                            "Modifier les cloisons du R+1 (distribution différente)",
                            "Ajouter les menuiseries du R+1",
                            "Vérifier l'alignement des murs en coupe",
                            "Ajouter la toiture sur le R+1"
                        ]
                    },
                    checklist: [
                        "Je sais créer un nouvel étage",
                        "Je sais copier des éléments entre étages",
                        "Je comprends les altitudes par étage",
                        "Je sais naviguer entre les étages",
                        "Je sais vérifier la cohérence en coupe"
                    ],
                    formateurGuide: {
                        intro: "Étape clé : le projet passe de plan à bâtiment complet. La copie inter-étages est un gain de temps énorme.",
                        timing: [
                            { time: "0h - 0h30", content: "Récap jour 7" },
                            { time: "0h30 - 1h30", content: "Palette Étages : création, hauteurs, altitudes" },
                            { time: "1h30 - 2h30", content: "Copie entre étages : méthodes et bonnes pratiques" },
                            { time: "2h30 - 3h00", content: "Pause" },
                            { time: "3h00 - 4h00", content: "Éléments multi-étages : murs, poteaux" },
                            { time: "4h00 - 5h00", content: "Vérification en coupe et navigation" },
                            { time: "5h00 - 6h30", content: "Exercice : créer le R+1" },
                            { time: "6h30 - 7h00", content: "Vue 3D du bâtiment complet + récap" }
                        ],
                        tips: [
                            "C'est le moment où le projet prend forme — exploiter le côté motivant",
                            "Montrer la coupe en temps réel pendant qu'on ajoute des éléments",
                            "Faire une mini 'visite virtuelle' du bâtiment complet à la fin"
                        ],
                        warnings: [
                            "Les altitudes entre étages sont une source d'erreurs courante",
                            "Bien vérifier que les murs copiés sont correctement ancrés au nouvel étage"
                        ],
                        exerciseSolution: "Le R+1 peut avoir une distribution différente : 2 grandes chambres + 1 SDB + mezzanine ouverte sur le séjour."
                    }
                },
                {
                    id: 9,
                    title: "Zones, surfaces & calculs",
                    subtitle: "Créer des zones et calculer les surfaces réglementaires",
                    duration: "7h",
                    week: 2,
                    objectives: [
                        "Créer des zones (pièces) avec l'outil Zone",
                        "Paramétrer les catégories de zones (habitable, annexe, etc.)",
                        "Calculer les surfaces : SHAB, SHON, surface de plancher",
                        "Afficher les étiquettes de zone en plan",
                        "Créer un tableau récapitulatif des surfaces"
                    ],
                    keyPoints: [
                        { title: "L'outil Zone", content: "L'outil Zone permet de définir les pièces et espaces du projet. Une zone se crée en cliquant à l'intérieur d'un espace fermé (murs). Elle détecte automatiquement les contours." },
                        { title: "Catégories de zones", content: "Les zones peuvent être classées par catégorie : habitable, circulation, technique, annexe. Ces catégories servent aux calculs réglementaires de surfaces." },
                        { title: "Surface de plancher", content: "La surface de plancher (SDP) remplace la SHON depuis 2012. Elle se calcule automatiquement dans ARCHICAD à partir des zones, en déduisant les murs et les éléments non comptabilisés." }
                    ],
                    exercise: {
                        title: "Calculer les surfaces du projet",
                        description: "Créer toutes les zones du projet et générer un tableau de surfaces.",
                        steps: [
                            "Créer les zones de chaque pièce du RDC",
                            "Créer les zones du R+1",
                            "Attribuer les catégories : habitable, circulation, annexe",
                            "Personnaliser l'affichage des étiquettes (nom + surface)",
                            "Créer un tableau récapitulatif des surfaces",
                            "Calculer la surface de plancher totale"
                        ]
                    },
                    checklist: [
                        "Je sais créer une zone avec l'outil Zone",
                        "Je sais attribuer des catégories de zones",
                        "Je sais afficher les surfaces en plan",
                        "Je comprends la notion de surface de plancher",
                        "Je sais créer un tableau de surfaces"
                    ],
                    formateurGuide: {
                        intro: "Sujet un peu théorique mais indispensable en pratique. Montrer l'utilité concrète : les calculs de surfaces pour les permis de construire.",
                        timing: [
                            { time: "0h - 0h30", content: "Récap jour 8" },
                            { time: "0h30 - 2h00", content: "Outil Zone : création, détection automatique, paramètres" },
                            { time: "2h00 - 2h30", content: "Catégories et réglementation des surfaces" },
                            { time: "2h30 - 3h00", content: "Pause" },
                            { time: "3h00 - 4h00", content: "Étiquettes et affichage en plan" },
                            { time: "4h00 - 5h00", content: "Tableaux et listes de surfaces" },
                            { time: "5h00 - 6h30", content: "Exercice : zones complètes du projet" },
                            { time: "6h30 - 7h00", content: "Récap + introduction au projet fil rouge" }
                        ],
                        tips: [
                            "Rendre le sujet concret : 'c'est ce que tu mets dans le formulaire de PC'",
                            "Montrer le code couleur par catégorie — c'est visuel et parlant",
                            "La détection automatique de zone est un moment 'magie'"
                        ],
                        warnings: [
                            "Les zones non détectées = souvent un mur pas fermé — montrer comment débugger",
                            "Ne pas trop entrer dans les détails réglementaires, rester pratique"
                        ],
                        exerciseSolution: "Environ 10-15 zones pour le projet complet (RDC + R+1). Le tableau doit montrer nom, catégorie, surface, étage."
                    }
                },
                {
                    id: 10,
                    title: "Projet fil rouge — Maison individuelle (1/2)",
                    subtitle: "Commencer la modélisation complète d'une maison",
                    duration: "7h",
                    week: 2,
                    objectives: [
                        "Appliquer toutes les compétences acquises sur un projet complet",
                        "Modéliser une maison individuelle de A à Z",
                        "Structurer un projet de manière professionnelle",
                        "Travailler en autonomie avec l'aide du formateur",
                        "Gérer son temps sur un projet de modélisation"
                    ],
                    keyPoints: [
                        { title: "Méthodologie de projet", content: "Commencer par les murs extérieurs du RDC, puis les cloisons intérieures, puis les menuiseries. Ensuite la structure (dalles, poteaux), puis l'étage, et enfin la toiture. Toujours vérifier en 3D et en coupe régulièrement." },
                        { title: "Programme de la maison", content: "RDC : entrée, séjour/salon, cuisine ouverte, WC, buanderie, garage. R+1 : 3 chambres, 1 SDB, 1 bureau/mezzanine. Surface totale : environ 140m²." },
                        { title: "Bonnes pratiques", content: "Sauvegarder régulièrement. Nommer les calques de manière cohérente. Vérifier les intersections de murs au fur et à mesure. Utiliser les favoris pour les éléments récurrents." }
                    ],
                    exercise: {
                        title: "Maison individuelle — Phase 1",
                        description: "Modéliser le RDC complet de la maison individuelle.",
                        steps: [
                            "Créer un nouveau projet avec les paramètres adaptés",
                            "Dessiner les murs extérieurs du RDC (emprise au sol selon le plan fourni)",
                            "Ajouter les cloisons intérieures du RDC",
                            "Placer toutes les portes et fenêtres du RDC",
                            "Créer la dalle de plancher du RDC",
                            "Vérifier la cohérence en 3D et corriger si nécessaire"
                        ]
                    },
                    checklist: [
                        "Le RDC est entièrement modélisé (murs, cloisons)",
                        "Toutes les menuiseries sont placées",
                        "La dalle de plancher est créée",
                        "Les dimensions correspondent au programme",
                        "Le résultat est cohérent en 3D"
                    ],
                    formateurGuide: {
                        intro: "Premier jour du projet fil rouge ! L'apprenante travaille en autonomie maximum. Tu es là pour débloquer, conseiller et corriger. C'est le test de la première semaine et demie.",
                        timing: [
                            { time: "0h - 0h30", content: "Présentation du projet, du programme et des plans de référence" },
                            { time: "0h30 - 1h00", content: "Aide au démarrage : paramétrage du projet, grille, calques" },
                            { time: "1h00 - 3h00", content: "Travail autonome : murs extérieurs et intérieurs (accompagner sans faire)" },
                            { time: "3h00 - 3h30", content: "Pause + point d'avancement" },
                            { time: "3h30 - 5h00", content: "Travail autonome : menuiseries et dalles" },
                            { time: "5h00 - 6h00", content: "Travail autonome : finitions et corrections" },
                            { time: "6h00 - 7h00", content: "Review du travail : corrections, conseils, récap" }
                        ],
                        tips: [
                            "Fournir un plan de référence (image ou PDF) à reproduire",
                            "Laisser l'apprenante chercher avant de donner la solution",
                            "Encourager régulièrement — c'est un exercice de synthèse important",
                            "Prendre des notes sur les difficultés pour adapter la suite"
                        ],
                        warnings: [
                            "Ne pas corriger trop vite — les erreurs font partie de l'apprentissage",
                            "Si l'apprenante bloque sur un point, revenir aux bases",
                            "Gérer le temps : le RDC doit être fini en fin de journée"
                        ],
                        exerciseSolution: "Plan type : emprise de 14x10m, avec garage accolé. Le RDC doit être complet avec menuiseries et dalles. Vérifier en 3D."
                    }
                }
            ]
        },
        {
            id: 3,
            title: "Documentation & Plans",
            subtitle: "De la maquette 3D aux documents professionnels",
            days: [
                {
                    id: 11, title: "Projet fil rouge (2/2) + terrains", subtitle: "Finaliser la maison et modéliser le terrain", duration: "7h", week: 3,
                    objectives: ["Finaliser le R+1 et la toiture de la maison", "Créer un terrain 3D avec l'outil Maillage", "Placer la maison sur le terrain", "Ajouter des éléments extérieurs (terrasse, clôture)", "Avoir un projet complet prêt à documenter"],
                    keyPoints: [
                        { title: "Outil Maillage", content: "L'outil Maillage permet de créer un terrain 3D. On définit des points avec leurs altitudes pour modéliser la topographie. Le maillage peut être modifié en ajoutant/déplaçant des points." },
                        { title: "Aménagements extérieurs", content: "Les terrasses se modélisent avec des dalles. Les clôtures avec l'outil Garde-corps. Les aménagements paysagers avec des objets de la bibliothèque (arbres, végétation)." },
                        { title: "Finalisation du projet", content: "Avant de passer à la documentation, vérifier que le modèle est complet : pas de trous dans les murs, dalles bien positionnées, toiture fermée, escalier fonctionnel." }
                    ],
                    exercise: { title: "Finaliser la maison + terrain", description: "Terminer le R+1, ajouter la toiture et créer le terrain.", steps: ["Créer le R+1 (copie des murs porteurs + nouvelles cloisons)", "Ajouter les menuiseries du R+1", "Créer la toiture (2 pans, pente 35°)", "Rogner les murs sous la toiture", "Créer un maillage de terrain (parcelle 20x30m)", "Ajouter une terrasse et des éléments extérieurs"] },
                    checklist: ["La maison est complète (RDC + R+1 + toiture)", "Le terrain est modélisé", "La maison est positionnée sur le terrain", "Les aménagements extérieurs sont présents", "Le modèle est cohérent en 3D"],
                    formateurGuide: {
                        intro: "Deuxième jour du projet fil rouge. L'autonomie doit être encore plus grande. L'objectif est d'avoir un projet complet en fin de journée.",
                        timing: [{ time: "0h - 3h00", content: "Finalisation R+1 + toiture" }, { time: "3h00 - 3h30", content: "Pause" }, { time: "3h30 - 5h30", content: "Terrain et aménagements extérieurs" }, { time: "5h30 - 7h00", content: "Vérifications + corrections + vue 3D finale" }],
                        tips: ["Laisser beaucoup d'autonomie, n'intervenir que si blocage", "L'outil Maillage peut être déstabilisant — faire une démo rapide", "Finir par une visite 3D complète du projet — moment gratifiant"],
                        warnings: ["Si le R+1 n'est pas fini, prioriser la toiture et le terrain", "Le maillage peut ralentir les machines moins puissantes"],
                        exerciseSolution: "Le projet complet doit permettre de faire toutes les vues documentaires de la semaine."
                    }
                },
                {
                    id: 12, title: "Coupes & élévations", subtitle: "Créer et paramétrer les vues de coupes et d'élévations", duration: "7h", week: 3,
                    objectives: ["Créer des coupes longitudinales et transversales", "Créer les 4 élévations (façades)", "Paramétrer l'affichage des coupes et élévations", "Annoter et enrichir les vues", "Comprendre le lien entre maquette et vues"],
                    keyPoints: [
                        { title: "Coupes", content: "Les coupes dans ARCHICAD sont des vues générées automatiquement à partir de la maquette 3D. On place une ligne de coupe en plan, et la vue se génère. Tout changement dans la maquette se répercute dans la coupe." },
                        { title: "Élévations", content: "Les élévations (façades) fonctionnent comme les coupes : on place un marqueur d'élévation et la vue se génère. On peut avoir des élévations intérieures pour les aménagements." },
                        { title: "Profondeur de vue", content: "La profondeur de vue détermine ce qui est visible derrière le plan de coupe. C'est un paramètre important pour obtenir des coupes lisibles." }
                    ],
                    exercise: { title: "Coupes et élévations de la maison", description: "Créer toutes les vues de coupe et d'élévation nécessaires.", steps: ["Créer une coupe longitudinale passant par le séjour et l'escalier", "Créer une coupe transversale passant par les chambres", "Créer les 4 élévations extérieures", "Paramétrer les épaisseurs de traits (coupé/vu)", "Ajuster les profondeurs de vue", "Vérifier la cohérence de toutes les vues"] },
                    checklist: ["Je sais placer une ligne de coupe", "Je sais créer les 4 élévations", "Je sais paramétrer l'affichage", "Je comprends la profondeur de vue", "Mes coupes sont lisibles et cohérentes"],
                    formateurGuide: {
                        intro: "On entre dans la documentation — le métier d'architecte. Montrer que les vues sont automatiques à partir de la maquette 3D. C'est la puissance du BIM.",
                        timing: [{ time: "0h - 2h30", content: "Coupes : création, paramètres, affichage" }, { time: "2h30 - 3h00", content: "Pause" }, { time: "3h00 - 5h00", content: "Élévations : création, paramètres" }, { time: "5h00 - 6h30", content: "Exercice" }, { time: "6h30 - 7h00", content: "Récap" }],
                        tips: ["Insister sur l'automatisme : 'tu modifies un mur en plan, la coupe se met à jour'", "Montrer les vues 3D coupées aussi — très parlant"],
                        warnings: ["Les coupes peuvent être lourdes sur les gros projets", "Attention aux épaisseurs de traits — souvent négligées par les débutants"],
                        exerciseSolution: "2 coupes + 4 élévations minimum. Les coupes doivent passer par les endroits intéressants (escalier, double hauteur si applicable)."
                    }
                },
                {
                    id: 13, title: "Cotations, annotations, étiquettes", subtitle: "Coter et annoter les plans de manière professionnelle", duration: "7h", week: 3,
                    objectives: ["Maîtriser l'outil Cotation (linéaire, angulaire, radiale)", "Créer des cotations automatiques", "Placer des étiquettes et des textes", "Utiliser les lignes de repère", "Respecter les normes de cotation architecturale"],
                    keyPoints: [
                        { title: "Cotation automatique", content: "ARCHICAD peut coter automatiquement les ouvertures de murs. C'est un gain de temps considérable. On peut aussi coter manuellement pour plus de contrôle." },
                        { title: "Étiquettes", content: "Les étiquettes sont liées aux éléments (murs, portes, fenêtres). Elles affichent automatiquement les informations de l'élément (dimensions, matériaux, référence). Si l'élément change, l'étiquette se met à jour." },
                        { title: "Normes de cotation", content: "En architecture, les cotations suivent des conventions : chaînes de cotes extérieures (axes, nu de murs, ouvertures), cotations intérieures (pièces, cloisons). Les cotes sont en mètres ou centimètres." }
                    ],
                    exercise: { title: "Coter entièrement un plan", description: "Coter le plan du RDC de la maison avec toutes les cotations nécessaires.", steps: ["Créer les chaînes de cotes extérieures (4 côtés)", "Coter les ouvertures dans les murs", "Ajouter les cotations intérieures des pièces", "Placer les étiquettes de portes et fenêtres", "Ajouter les étiquettes de zones (nom + surface)", "Vérifier la lisibilité globale du plan"] },
                    checklist: ["Je sais créer des cotations linéaires", "Je sais utiliser la cotation automatique", "Je sais placer des étiquettes", "Mes cotations respectent les normes", "Mon plan est lisible et complet"],
                    formateurGuide: {
                        intro: "Séance technique mais fondamentale. Des plans bien cotés = des plans professionnels. C'est ce qui distingue un bon dossier.",
                        timing: [{ time: "0h - 2h30", content: "Cotations : linéaire, chaîne, automatique" }, { time: "2h30 - 3h00", content: "Pause" }, { time: "3h00 - 4h30", content: "Étiquettes et textes" }, { time: "4h30 - 5h00", content: "Normes et bonnes pratiques" }, { time: "5h00 - 6h30", content: "Exercice" }, { time: "6h30 - 7h00", content: "Récap" }],
                        tips: ["Montrer un plan bien coté comme référence visuelle", "La cotation automatique est un moment de productivité fort", "Faire le parallèle avec les usages AutoCAD de l'apprenante"],
                        warnings: ["Ne pas surcoter — un plan surchargé est illisible", "Bien expliquer la différence entre cotes associatives et manuelles"],
                        exerciseSolution: "Plan RDC complet avec chaînes de cotes extérieures, cotes d'ouvertures, cotes intérieures et étiquettes. Tout doit être lisible à l'échelle 1/100."
                    }
                },
                {
                    id: 14, title: "Nomenclatures, listes, métrés", subtitle: "Extraire les données du modèle BIM", duration: "7h", week: 3,
                    objectives: ["Créer des nomenclatures de portes et fenêtres", "Générer des listes de surfaces et de zones", "Extraire des quantités (métrés)", "Personnaliser les tableaux", "Comprendre l'intérêt BIM de ces données"],
                    keyPoints: [
                        { title: "Nomenclatures interactives", content: "Les nomenclatures ARCHICAD sont bidirectionnelles : cliquer sur une ligne du tableau sélectionne l'élément dans le plan. Modifier un paramètre dans le tableau modifie l'élément. C'est du vrai BIM." },
                        { title: "Types de listes", content: "ARCHICAD propose des listes d'éléments (inventaire), des listes de composants (matériaux), et des listes de zones (surfaces). On peut créer des listes personnalisées." },
                        { title: "Export des données", content: "Les listes peuvent être exportées en Excel pour un traitement complémentaire (chiffrage, DPGF). C'est un workflow courant dans les agences." }
                    ],
                    exercise: { title: "Générer les nomenclatures du projet", description: "Créer toutes les nomenclatures nécessaires pour un dossier complet.", steps: ["Créer une nomenclature de portes (référence, dimensions, type)", "Créer une nomenclature de fenêtres (référence, dimensions, vitrage)", "Générer un tableau des surfaces par zone", "Créer une liste de matériaux avec quantités", "Personnaliser la mise en forme des tableaux", "Exporter une nomenclature en format tableur"] },
                    checklist: ["Je sais créer une nomenclature de menuiseries", "Je sais générer un tableau de surfaces", "Je comprends les listes interactives", "Je sais personnaliser un tableau", "Je sais exporter les données"],
                    formateurGuide: {
                        intro: "C'est ici que le BIM montre sa vraie valeur ajoutée par rapport au 2D pur. Toutes ces données sortent automatiquement du modèle !",
                        timing: [{ time: "0h - 2h00", content: "Nomenclatures : création, paramètres, personnalisation" }, { time: "2h00 - 2h30", content: "Pause" }, { time: "2h30 - 4h00", content: "Listes de zones et de matériaux" }, { time: "4h00 - 5h00", content: "Export et workflow Excel" }, { time: "5h00 - 6h30", content: "Exercice" }, { time: "6h30 - 7h00", content: "Récap" }],
                        tips: ["Insister sur le gain de temps vs faire les tableaux manuellement", "La bidirectionnalité est un moment 'waouh'", "Montrer un vrai exemple d'export Excel utilisé en agence"],
                        warnings: ["Les nomenclatures peuvent être complexes à configurer", "Rester sur les nomenclatures standards, ne pas chercher à tout personnaliser"],
                        exerciseSolution: "3-4 nomenclatures différentes, toutes basées sur le projet fil rouge."
                    }
                },
                {
                    id: 15, title: "Mise en page & impression", subtitle: "Créer un dossier de plans professionnel", duration: "7h", week: 3,
                    objectives: ["Comprendre le Carnet de mise en page", "Placer des vues sur les feuilles", "Créer des cartouches personnalisés", "Gérer les échelles de représentation", "Exporter en PDF un dossier complet"],
                    keyPoints: [
                        { title: "Le Carnet de mise en page", content: "Le Carnet de mise en page (Layout Book) est l'espace où l'on compose les planches de présentation. On y place des vues (plans, coupes, 3D) sur des feuilles au format souhaité (A4, A3, A1...)." },
                        { title: "Gabarits et cartouches", content: "Un gabarit de page définit le cadre, le cartouche et les informations automatiques (nom du projet, date, échelle). ARCHICAD en fournit des modèles qu'on peut personnaliser." },
                        { title: "Publication", content: "La publication permet d'exporter tout le carnet (ou une sélection) en PDF, DWG, ou image. On peut configurer des jeux de publication pour automatiser l'export." }
                    ],
                    exercise: { title: "Créer un dossier de plans complet", description: "Composer un dossier de plans professionnel prêt à imprimer.", steps: ["Créer un gabarit A3 avec cartouche (nom du projet, date, échelle)", "Placer le plan RDC coté sur une feuille A3 au 1/100", "Placer le plan R+1 sur une deuxième feuille", "Créer une feuille avec les coupes et élévations", "Ajouter une feuille avec la vue 3D et les nomenclatures", "Exporter le dossier complet en PDF"] },
                    checklist: ["Je sais utiliser le Carnet de mise en page", "Je sais placer des vues sur les feuilles", "Je sais créer un cartouche", "Je sais gérer les échelles", "Je sais exporter en PDF"],
                    formateurGuide: {
                        intro: "Dernière étape de la documentation : la mise en page. C'est le livrable final du projet. Le résultat doit être professionnel.",
                        timing: [{ time: "0h - 2h00", content: "Carnet de mise en page : principes, gabarits, cartouches" }, { time: "2h00 - 2h30", content: "Pause" }, { time: "2h30 - 4h00", content: "Composition des planches, échelles" }, { time: "4h00 - 5h00", content: "Publication et export PDF" }, { time: "5h00 - 6h30", content: "Exercice : dossier complet" }, { time: "6h30 - 7h00", content: "Bilan semaine 3 + intro semaine 4" }],
                        tips: ["Montrer des exemples de dossiers professionnels pour donner le niveau attendu", "Le cartouche personnalisé peut être fait avec les outils 2D — montrer", "L'export PDF multi-pages est très pratique"],
                        warnings: ["La mise en page demande un sens graphique — guider sur les choix", "Attention aux échelles : erreur classique de mettre le mauvais échelle"],
                        exerciseSolution: "4-5 feuilles A3 minimum : plan RDC, plan R+1, coupes/élévations, 3D + nomenclatures. PDF exporté propre."
                    }
                }
            ]
        },
        {
            id: 4,
            title: "Rendu 3D & Productivité",
            subtitle: "Techniques avancées de visualisation avec Enscape & 3ds Max",
            days: [
                {
                    id: 16, title: "Matériaux, textures & surfaces", subtitle: "Habiller le projet avec des matériaux réalistes", duration: "7h", week: 4,
                    objectives: ["Appliquer des matériaux aux éléments du projet", "Personnaliser les textures et les couleurs", "Créer des matériaux personnalisés", "Comprendre les surfaces de remplacement", "Préparer le projet pour le rendu"],
                    keyPoints: [
                        { title: "Matériaux de construction", content: "Dans ARCHICAD, les matériaux ont trois composantes : apparence en plan (hachures), apparence en 3D (texture), et propriétés physiques. On peut les appliquer surface par surface." },
                        { title: "Bibliothèque de matériaux", content: "ARCHICAD dispose d'une large bibliothèque de matériaux réalistes : bois, pierres, métaux, béton, etc. On peut importer des textures personnalisées et créer ses propres matériaux." },
                        { title: "Surfaces", content: "Les surfaces contrôlent l'apparence 3D : couleur, réflexion, transparence, bump map. Un même matériau peut avoir différentes surfaces selon le rendu souhaité." }
                    ],
                    exercise: { title: "Habiller le projet", description: "Appliquer des matériaux réalistes à toute la maison.", steps: ["Appliquer des matériaux de façade (enduit, pierre, bardage bois)", "Modifier les matériaux intérieurs (peinture, carrelage, parquet)", "Personnaliser les menuiseries (bois, aluminium)", "Créer un matériau personnalisé pour la terrasse", "Appliquer des textures au terrain (gazon, gravier)", "Vérifier le rendu global en 3D"] },
                    checklist: ["Je sais appliquer un matériau à un élément", "Je sais modifier une texture", "Je sais créer un matériau personnalisé", "Je comprends la différence entre matériau et surface", "Mon projet est entièrement habillé"],
                    formateurGuide: {
                        intro: "On embellit le projet ! C'est une séance créative et motivante. Le projet va passer du gris au réaliste.",
                        timing: [{ time: "0h - 2h30", content: "Matériaux : principes, bibliothèque, application" }, { time: "2h30 - 3h00", content: "Pause" }, { time: "3h00 - 5h00", content: "Textures, surfaces, personnalisation" }, { time: "5h00 - 6h30", content: "Exercice" }, { time: "6h30 - 7h00", content: "Récap" }],
                        tips: ["Montrer le avant/après : gris vs habillé — très motivant", "Ne pas trop entrer dans les paramètres techniques des surfaces", "Montrer Pinterest ou des références pour choisir les ambiances"],
                        warnings: ["Les textures trop grandes ralentissent la 3D", "Rester sobre : pas trop de matériaux différents"],
                        exerciseSolution: "Le projet doit avoir un look cohérent et réaliste. Palette de matériaux harmonieuse."
                    }
                },
                {
                    id: 17, title: "Éclairage & rendu", subtitle: "Produire des images de synthèse du projet", duration: "7h", week: 4,
                    objectives: ["Paramétrer l'éclairage naturel (soleil, environnement)", "Placer des sources lumineuses intérieures", "Réaliser des rendus avec le moteur intégré", "Explorer les options de rendu (qualité, résolution)", "Créer des ambiances jour et nuit"],
                    keyPoints: [
                        { title: "Éclairage solaire", content: "ARCHICAD simule la position du soleil selon la géolocalisation et la date/heure. On peut créer des études d'ensoleillement pour analyser l'impact des ombres sur le projet." },
                        { title: "Moteur de rendu", content: "ARCHICAD intègre un moteur de rendu (CineRender basé sur Cinema 4D ou Redshift selon la version). Il produit des images photoréalistes avec gestion des matériaux, éclairage et environnement." },
                        { title: "Twinmotion", content: "Pour des rendus encore plus rapides et interactifs, Twinmotion (gratuit avec licence ARCHICAD) offre un rendu en temps réel et des animations. La connexion est directe via un plugin." }
                    ],
                    exercise: { title: "Rendus de la maison", description: "Produire des rendus jour et nuit de la maison.", steps: ["Paramétrer la géolocalisation du projet (Chemillé-en-Anjou)", "Régler la position du soleil (été, 10h)", "Placer des luminaires intérieurs (salon, chambres)", "Faire un rendu extérieur (perspective jardin)", "Faire un rendu intérieur (séjour)", "Créer un rendu de nuit avec éclairage artificiel"] },
                    checklist: ["Je sais paramétrer l'éclairage solaire", "Je sais placer des luminaires", "Je sais lancer un rendu", "Je sais ajuster la qualité de rendu", "J'ai produit au moins 3 rendus du projet"],
                    formateurGuide: {
                        intro: "Séance très gratifiante : le projet devient photo-réaliste. C'est souvent le moment préféré des apprenants.",
                        timing: [{ time: "0h - 2h00", content: "Éclairage : soleil, environnement, luminaires" }, { time: "2h00 - 2h30", content: "Pause" }, { time: "2h30 - 4h00", content: "Rendus : paramètres, lancement, optimisation" }, { time: "4h00 - 5h00", content: "Twinmotion (démo)" }, { time: "5h00 - 6h30", content: "Exercice" }, { time: "6h30 - 7h00", content: "Récap" }],
                        tips: ["Commencer avec un rendu basse qualité rapide, puis augmenter", "Montrer Twinmotion pour l'effet temps réel — très impressionnant", "Les rendus de nuit sont visuellement forts — garder pour la fin"],
                        warnings: ["Les rendus haute qualité peuvent être très longs", "S'assurer que la machine a assez de RAM"],
                        exerciseSolution: "3 rendus minimum : 1 extérieur jour, 1 intérieur, 1 nuit. Résolution minimum 2000px de large."
                    }
                },
                {
                    id: 18, title: "Rendu 3D — Enscape & 3ds Max", subtitle: "Produire des rendus photoréalistes avec des moteurs externes", duration: "7h", week: 4,
                    objectives: ["Découvrir Enscape et sa connexion avec ARCHICAD", "Paramétrer un rendu en temps réel avec Enscape", "Comprendre le workflow ARCHICAD → 3ds Max", "Explorer les matériaux et l'éclairage dans Enscape", "Comparer les moteurs de rendu : intégré vs Enscape vs 3ds Max"],
                    keyPoints: [
                        { title: "Enscape", content: "Enscape est un moteur de rendu en temps réel connecté directement à ARCHICAD via un plugin. Il permet de visualiser le projet en qualité photoréaliste instantanément, de naviguer dans le modèle et de générer des images et panoramas 360°." },
                        { title: "3ds Max", content: "3ds Max est le logiciel de référence pour les rendus haut de gamme en architecture. Le workflow ARCHICAD → 3ds Max passe par l’export FBX ou 3DS. On y retrouve des moteurs comme V-Ray ou Corona pour des rendus d'exception." },
                        { title: "Choix du moteur", content: "Enscape est idéal pour des rendus rapides en phase conception. 3ds Max convient aux rendus de présentation finale. Le moteur intégré ARCHICAD reste utile pour des visuels simples sans logiciel supplémentaire." }
                    ],
                    exercise: { title: "Rendus avec Enscape", description: "Utiliser Enscape pour produire des rendus photoréalistes du projet.", steps: ["Installer et connecter le plugin Enscape à ARCHICAD", "Lancer la fenêtre de rendu en temps réel", "Paramétrer l'ambiance : soleil, ciel, environnement", "Ajuster les matériaux spécifiques Enscape (réflexion, émission)", "Générer un panorama 360° de l'intérieur", "Comparer le résultat avec le rendu intégré ARCHICAD"] },
                    checklist: ["Je sais connecter Enscape à ARCHICAD", "Je sais naviguer dans la fenêtre Enscape", "Je sais paramétrer l'éclairage et l'ambiance", "Je comprends la différence entre les moteurs de rendu", "J'ai produit des rendus avec Enscape"],
                    formateurGuide: {
                        intro: "Séance impressionnante : le rendu en temps réel bluff les apprenants. Montrer l'instantanéité d'Enscape vs le rendu classique.",
                        timing: [{ time: "0h - 1h00", content: "Introduction aux moteurs de rendu externes : Enscape, 3ds Max, V-Ray" }, { time: "1h00 - 2h30", content: "Enscape : installation, interface, navigation temps réel" }, { time: "2h30 - 3h00", content: "Pause" }, { time: "3h00 - 4h30", content: "Matériaux Enscape, éclairage, paramètres de rendu" }, { time: "4h30 - 5h30", content: "Démo workflow 3ds Max (export FBX, import, rendu V-Ray)" }, { time: "5h30 - 6h30", content: "Exercice : rendus Enscape du projet" }, { time: "6h30 - 7h00", content: "Comparatif des moteurs + récap" }],
                        tips: ["Montrer le avant/après rendu intégré vs Enscape — l'effet est saisissant", "Laisser naviguer librement dans Enscape — c'est ludique", "3ds Max : rester en démo, ne pas entrer dans les détails du logiciel", "Montrer des exemples de rendus d'agences réalisés avec Enscape"],
                        warnings: ["Enscape nécessite une carte graphique correcte", "Vérifier que le plugin est installé et fonctionnel avant la séance", "3ds Max est complexe — rester en survol"],
                        exerciseSolution: "Au moins 4-5 rendus Enscape : 2 extérieurs, 2 intérieurs, 1 panorama 360°. Comparatif avec rendu intégré."
                    }
                },
                {
                    id: 19, title: "Passerelle SketchUp ↔ ARCHICAD", subtitle: "Importer et exporter entre SketchUp et ARCHICAD", duration: "7h", week: 4,
                    objectives: ["Importer un modèle SketchUp dans ARCHICAD", "Exporter un modèle ARCHICAD vers SketchUp", "Comprendre la conversion des éléments", "Gérer les fichiers IFC pour l'interopérabilité", "Définir le bon workflow selon le projet"],
                    keyPoints: [
                        { title: "Import SketchUp", content: "ARCHICAD peut importer les fichiers .skp directement. Les éléments SketchUp arrivent comme des objets ou des morph. On peut ensuite les convertir en éléments ARCHICAD natifs (murs, dalles, etc.)." },
                        { title: "Export vers SketchUp", content: "L'export vers SketchUp (.skp) permet de récupérer la maquette dans SketchUp pour des modifications spécifiques ou l'utilisation de plugins SketchUp (rendu, modélisation organique)." },
                        { title: "Format IFC", content: "L'IFC (Industry Foundation Classes) est le format standard d'échange BIM. Il permet de communiquer avec tous les logiciels BIM (Revit, SketchUp, etc.). C'est le format à privilégier pour l'interopérabilité." }
                    ],
                    exercise: { title: "Workflow SketchUp ↔ ARCHICAD", description: "Pratiquer l'import et l'export entre les deux logiciels.", steps: ["Importer un modèle SketchUp (mobilier ou décoration) dans le projet", "Positionner et ajuster les objets importés", "Exporter la maison ARCHICAD vers SketchUp", "Ouvrir le fichier dans SketchUp et vérifier le résultat", "Exporter la maison en IFC", "Comparer les 3 formats d'échange (skp, ifc, 3ds)"] },
                    checklist: ["Je sais importer un fichier SketchUp", "Je sais exporter vers SketchUp", "Je comprends le format IFC", "Je sais choisir le bon format d'échange", "Je connais les limites de chaque méthode"],
                    formateurGuide: {
                        intro: "L'apprenante connaît SketchUp — cette séance crée le pont entre ses compétences existantes et ARCHICAD. Important pour son workflow futur.",
                        timing: [{ time: "0h - 2h00", content: "Import SketchUp : méthodes, paramètres, conversion" }, { time: "2h00 - 2h30", content: "Pause" }, { time: "2h30 - 4h00", content: "Export vers SketchUp : paramètres, vérification" }, { time: "4h00 - 5h00", content: "Format IFC et interopérabilité" }, { time: "5h00 - 6h30", content: "Exercice pratique" }, { time: "6h30 - 7h00", content: "Récap + préparation du projet final" }],
                        tips: ["S'appuyer sur l'expérience SketchUp de l'apprenante", "Montrer des cas concrets : importer du mobilier 3D Warehouse dans AC", "L'IFC peut sembler abstrait — montrer un import concret"],
                        warnings: ["Les textures peuvent ne pas se transférer correctement", "La conversion SketchUp vers éléments natifs AC n'est pas toujours parfaite", "Préparer un fichier SketchUp de test avant la séance"],
                        exerciseSolution: "L'apprenante doit avoir importé du mobilier SketchUp dans le projet AC et exporté le projet complet."
                    }
                },
                {
                    id: 20, title: "Projet final & bilan", subtitle: "Livrer un dossier professionnel complet", duration: "7h", week: 4,
                    objectives: ["Finaliser le projet avec tous les éléments", "Créer un dossier de présentation complet", "Générer les visuels finaux (rendus classiques + Enscape)", "Faire le bilan des compétences acquises", "Définir les axes de progression post-formation"],
                    keyPoints: [
                        { title: "Dossier professionnel", content: "Un dossier de projet complet comprend : plans cotés (RDC, étages), coupes et élévations, vue 3D/perspectives, nomenclatures, tableau de surfaces, rendus photoréalistes, et visuels Enscape. Le tout mis en page dans un carnet professionnel." },
                        { title: "Check-list qualité", content: "Avant de livrer : vérifier les intersections de murs, les jonctions de dalles, la cohérence des cotes, la lisibilité des plans, la qualité des rendus, la complétude des nomenclatures." },
                        { title: "Progression continue", content: "Après la formation, continuer à pratiquer est essentiel. Les ressources en ligne (Graphisoft Learn, YouTube, forums) permettent de progresser. Pratiquer sur des projets réels est le meilleur apprentissage." }
                    ],
                    exercise: { title: "Livraison du projet final", description: "Assembler et présenter le dossier complet de la maison.", steps: ["Faire une revue complète du modèle 3D (corrections finales)", "Mettre à jour toutes les vues (plans, coupes, élévations)", "Vérifier et compléter les nomenclatures", "Générer les rendus finaux (3 minimum)", "Créer des visuels Enscape (2 minimum)", "Assembler le carnet de mise en page complet et exporter en PDF"] },
                    checklist: ["Mon modèle 3D est complet et sans erreur", "Tous les plans sont cotés et annotés", "Les nomenclatures sont à jour", "J'ai produit des rendus de qualité", "Le dossier PDF est exporté et prêt"],
                    formateurGuide: {
                        intro: "Dernier jour ! L'objectif est de finir avec un dossier professionnel dont l'apprenante peut être fière. C'est aussi le moment du bilan et des perspectives.",
                        timing: [{ time: "0h - 1h00", content: "Revue du modèle : corrections, ajustements" }, { time: "1h00 - 2h30", content: "Finalisation des vues et nomenclatures" }, { time: "2h30 - 3h00", content: "Pause" }, { time: "3h00 - 4h30", content: "Rendus finaux et visuels Enscape" }, { time: "4h30 - 5h30", content: "Mise en page et export PDF" }, { time: "5h30 - 6h30", content: "Présentation du dossier + échanges" }, { time: "6h30 - 7h00", content: "Bilan de la formation + ressources pour la suite" }],
                        tips: ["Laisser l'apprenante présenter son travail — c'est valorisant", "Préparer un certificat ou une attestation de formation", "Donner une liste de ressources pour continuer à apprendre", "Terminer sur une note positive et encourageante"],
                        warnings: ["Ne pas être trop perfectionniste — le résultat doit être encourageant", "Garder du temps pour le bilan — c'est important pour la suite"],
                        exerciseSolution: "Le PDF final doit contenir 8-10 planches : plans cotés, coupes, élévations, 3D, rendus, visuels Enscape, nomenclatures. C'est le livrable de la formation."
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
        category: "Passerelle SketchUp",
        items: [
            { title: "3D Warehouse", description: "Bibliothèque de modèles 3D SketchUp", url: "https://3dwarehouse.sketchup.com/" },
            { title: "Guide import/export SKP", description: "Documentation sur l'échange SketchUp ↔ ARCHICAD", url: "https://help.graphisoft.com/" }
        ]
    }
];

// Export pour utilisation dans app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FORMATION_DATA, SHORTCUTS_DATA, RESOURCES_DATA };
}
