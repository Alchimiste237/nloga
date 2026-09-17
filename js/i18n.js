/* ============================================================
   NLOGA — EN/FR internationalization
   White (light) default language is English; French via EN|FR toggle.
   Strategy: text-node + attribute mapping (no HTML edits needed).
   ============================================================ */
(function () {
  'use strict';

  /* Exact English (decoded) -> French. Brand names, icon ligatures,
     emails, numbers and codes are intentionally absent (never translated). */
  var FR_RAW = {
    "NLOGA — Digital Products · Design · Technology": "NLOGA — Produits numériques · Design · Technologie",
    "Nloga is a multidisciplinary company building digital products, experiences, and brands from strategy through execution.": "Nloga est une société pluridisciplinaire qui conçoit des produits numériques, des expériences et des marques, de la stratégie jusqu’à l’exécution.",
    "Venturing forward": "Cap sur l’avenir",
    "Initializing studio matrix": "Initialisation de la matrice du studio",
    "Home": "Accueil",
    "About": "À propos",
    "Capabilities": "Expertises",
    "Work": "Réalisations",
    "Ecosystem": "Écosystème",
    "Insights": "Perspectives",
    "Contact": "Contact",
    "Start a project": "Démarrer un projet",
    "Switch to dark theme": "Passer au thème sombre",
    "Switch to light theme": "Passer au thème clair",
    "Toggle theme": "Changer de thème",
    "Digital products · Design · Technology": "Produits numériques · Design · Technologie",
    "Strategy": "Stratégie",
    "Build": "Construire",
    "Launch": "Lancement",
    "Evolve": "Évolution",
    "Ideas are everywhere.": "Les idées sont partout.",
    "We turn the right ones into": "Nous transformons les meilleures en",
    "something real.": "quelque chose de concret.",
    "At Nloga, we bring strategy, product design, technology, and creative thinking together to build digital products and brands that people can understand, use, trust, and remember.": "Chez Nloga, nous réunissons la stratégie, le design produit, la technologie et la pensée créative pour construire des produits numériques et des marques que les gens comprennent, utilisent, en qui ils ont confiance et dont ils se souviennent.",
    "From the first idea to the final experience, we help transform complexity into clarity and possibility into execution.": "De l’idée initiale à l’expérience finale, nous vous aidons à transformer la complexité en clarté et les opportunités en réalisations concrètes.",
    "Start a conversation": "Démarrer une conversation",
    "Explore our capabilities": "Découvrir nos expertises",
    "Ecosystem pillars": "Piliers de l’écosystème",
    "Strategy to execution": "De la stratégie à l’exécution",
    "Digital products & software": "Produits numériques & logiciels",
    "Brand, visual & creative design": "Marque, design visuel & créatif",
    "Learning, training & development": "Apprentissage, formation & développement",
    "Empower": "Former",
    "The Nloga ecosystem": "L’écosystème Nloga",
    "One company.": "Une seule entreprise.",
    "Three forces.": "Trois forces.",
    "Building technology. Shaping experiences. Creating identities. Developing people.": "Nous développons des technologies. Nous façonnons des expériences. Nous créons des identités. Nous formons des talents.",
    "What we do": "Ce que nous faisons",
    "We don’t just make things look good.": "Nous ne nous contentons pas de soigner l’apparence.",
    "We make ideas work.": "Nous rendons vos idées opérationnelles.",
    "A good product needs more than code. A strong brand needs more than a logo. And a promising idea needs more than enthusiasm.": "Un bon produit a besoin de plus que du code. Une marque forte a besoin de plus qu’un logo. Et une idée prometteuse a besoin de plus que de l’enthousiasme.",
    "It needs clarity, strategy, thoughtful design, solid technology, and the discipline to bring everything together. That’s where Nloga comes in. We work across the space between": "Il faut de la clarté, de la stratégie, un design réfléchi, une technologie solide et la rigueur d’assembler l’ensemble. C’est là que Nloga intervient. Nous travaillons à l’intersection",
    "It needs clarity, strategy, thoughtful design, solid technology, and the discipline to bring everything together. That’s where Nloga comes in.": "Il faut de la clarté, de la stratégie, un design réfléchi, une technologie solide et la rigueur d’assembler l’ensemble. C’est là que Nloga intervient.",
    "We work across the space between": "Nous travaillons à l’intersection",
    "business, people, design, and technology": "des affaires, de l’humain, du design et de la technologie",
    "to create solutions that are not only visually compelling, but functional, usable, technically sound, and built with purpose.": "pour créer des solutions non seulement visuellement convaincantes, mais aussi fonctionnelles, utilisables, techniquement solides et conçues avec intention.",
    "01 / Pillar": "01 / Pilier",
    "02 / Pillar": "02 / Pilier",
    "03 / Pillar": "03 / Pilier",
    "04 / Pillar": "04 / Pilier",
    "Business": "Affaires",
    "We start from objectives, constraints, and opportunities so the solution has a reason to exist beyond the brief.": "Nous partons de vos objectifs, de vos contraintes et de vos opportunités pour que la solution ait une raison d’exister au-delà du brief.",
    "People": "Humain",
    "We care about what people actually need, understand, and experience — not just what a specification says.": "Nous nous soucions de ce dont les gens ont réellement besoin, de ce qu’ils comprennent et vivent — et pas seulement de ce qu’exige un cahier des charges.",
    "Structure, simplicity, consistency, and clarity — turned into interfaces and identities people can use and remember.": "Structure, simplicité, cohérence et clarté — transformées en interfaces et en identités que les gens peuvent utiliser et mémoriser.",
    "Technology": "Technologie",
    "Architecture, performance, maintainability, and scalability — because beautiful interfaces alone are not enough.": "Architecture, performance, maintenabilité et évolutivité — car de belles interfaces ne suffisent pas.",
    "Whether you are starting something new, improving something that already exists, or trying to turn a complex problem into a practical solution, we help you move forward.": "Que vous lanciez un nouveau projet, amélioriez l’existant ou cherchiez à transformer un problème complexe en solution pratique, nous vous aidons à avancer.",
    "Our capabilities": "Nos expertises",
    "One vision.": "Une seule vision.",
    "Multiple disciplines.": "Des expertises multiples.",
    "Understanding the problem before building the solution.": "Comprendre le problème avant de construire la solution.",
    "01 / Software": "01 / Logiciel",
    "From idea to working product.": "De l’idée au produit opérationnel.",
    "Product & Software": "Produit & Logiciels",
    "Discovery, architecture, web apps, mobile, SaaS, internal tools, APIs, and custom software.": "Cadrage, architecture, applications web, mobile, SaaS, outils internes, API et logiciels sur mesure.",
    "Web apps": "Applications web",
    "Explore product & software": "Découvrir les produits & logiciels",
    "02 / Interaction": "02 / Interaction",
    "Make complex things feel simple.": "Rendre la complexité simple.",
    "UX/UI & Product Design": "UX/UI & Design produit",
    "Research, architecture, flows, wireframes, interfaces, prototypes, and design systems.": "Recherche, architecture, parcours, maquettes filaires, interfaces, prototypes et design systems.",
    "UX research": "Recherche UX",
    "Wireframes": "Maquettes filaires",
    "UI design": "Design UI",
    "Systems": "Systèmes",
    "Explore product design": "Découvrir le design produit",
    "03 / Branding": "03 / Image de marque",
    "Give ideas a recognizable presence.": "Donnez à vos idées une présence reconnaissable.",
    "Brand & Creative": "Marque & Création",
    "Strategy, identity, graphic design, and communication assets people remember.": "Stratégie, identité, design graphique et supports de communication dont on se souvient.",
    "Identity": "Identité",
    "Branding": "Image de marque",
    "Decks": "Présentations",
    "Explore brand & creative": "Découvrir la marque & la création",
    "04 / Knowledge": "04 / Connaissances",
    "Build better people, better solutions.": "De meilleurs talents, de meilleures solutions.",
    "Training & Knowledge": "Formation & Connaissances",
    "Practical skills in design, technology, product thinking, and creative problem solving.": "Des compétences pratiques en design, en technologie, en pensée produit et en résolution créative de problèmes.",
    "Product": "Produit",
    "Dev": "Développement",
    "Workflows": "Flux de travail",
    "Explore learning": "Découvrir la formation",
    "Our approach": "Notre approche",
    "Think deeply.": "Réfléchissez en profondeur.",
    "Design intentionally.": "Concevez avec intention.",
    "Build properly.": "Construisez avec rigueur.",
    "The best solutions connect disciplines instead of working in isolated boxes.": "Les meilleures solutions relient les disciplines au lieu de fonctionner en silos.",
    "Understand": "Comprendre",
    "What problem are we solving?": "Quel problème résolvons-nous ?",
    "Context, people, objectives, constraints.": "Contexte, utilisateurs, objectifs, contraintes.",
    "What should it feel like?": "Quelle expérience souhaitez-vous créer ?",
    "Structure and simplify into usable experiences.": "Structurer et simplifier pour créer des expériences utilisables.",
    "How do we make it real?": "Comment lui donnons-nous vie ?",
    "Robust, maintainable, scalable products.": "Des produits robustes, maintenables et évolutifs.",
    "How does it keep improving?": "Comment continue-t-il de s’améliorer ?",
    "Learn, measure, improve, and adapt.": "Apprendre, mesurer, améliorer et adapter.",
    "What we help with": "Ce que nous prenons en charge",
    "From “we have an idea” to": "De “nous avons une idée” à",
    "“this actually works.”": "“ça fonctionne vraiment.”",
    "Six situations we meet most often — and how we move each one forward.": "Six situations que nous rencontrons le plus souvent — et comment nous les faisons avancer.",
    "You have an idea.": "Vous avez une idée.",
    "We help turn an abstract concept into a structured product opportunity.": "Nous vous aidons à transformer un concept abstrait en une opportunité produit structurée.",
    "Your existing product is confusing.": "Votre produit actuel manque de clarté.",
    "We identify friction, rethink the experience, and design a clearer product.": "Nous identifions les frictions, repensons l’expérience et concevons un produit plus clair.",
    "Your business has outgrown its tools.": "Votre entreprise a dépassé ses outils.",
    "We design and build digital systems that support the next stage of your operations.": "Nous concevons et développons des systèmes numériques qui accompagnent la prochaine étape de vos opérations.",
    "Your brand no longer reflects your business.": "Votre marque ne reflète plus votre entreprise.",
    "We reposition and redesign your visual identity and communication system.": "Nous repositionnons et repensons votre identité visuelle ainsi que votre système de communication.",
    "Your organization wants to innovate.": "Votre organisation souhaite innover.",
    "We help teams explore, design, prototype, and build practical digital solutions.": "Nous aidons vos équipes à explorer, concevoir, prototyper et développer des solutions numériques concrètes.",
    "Your team needs new skills.": "Votre équipe a besoin de nouvelles compétences.",
    "Learning experiences focused on practical design, development, and product thinking.": "Des formations axées sur le design pratique, le développement et la pensée produit.",
    "Why Nloga": "Pourquoi Nloga",
    "Good execution starts with": "Une bonne exécution commence par",
    "good thinking.": "une bonne réflexion.",
    "One roof for strategy, design, technology, and creativity — nothing lost in translation between idea and working product.": "Un même toit pour la stratégie, le design, la technologie et la créativité — rien ne se perd entre l’idée et le produit opérationnel.",
    "Zero translation friction": "Zéro friction dans la transmission",
    "Engineers beside identity directors: products ship faster with zero visual degradation.": "Des ingénieurs aux côtés des directeurs d’identité visuelle : des produits livrés plus vite, sans aucune dégradation visuelle.",
    "01 · Multidisciplinary": "01 · Multidisciplinarité",
    "Convergence, not silos": "La convergence, pas les silos",
    "Strategy, design, technology, and creativity working together instead of in isolation.": "La stratégie, le design, la technologie et la créativité travaillent ensemble, et non en silos.",
    "02 · Human-centered": "02 · Centré sur l’humain",
    "Built for real people": "Conçu pour des personnes réelles",
    "What people need, understand, and experience — not just what a brief says.": "Ce dont les utilisateurs ont besoin, ce qu’ils comprennent et ce qu’ils vivent — et non pas seulement ce qu’indique un brief.",
    "03 · Technically conscious": "03 · Conscience technique",
    "Beautiful and buildable": "Beau et réalisable",
    "Architecture, performance, and scalability considered from the first sketch.": "L’architecture, la performance et l’évolutivité sont prises en compte dès la première esquisse.",
    "04 · Business-aware": "04 · Sens des affaires",
    "Objectives before pixels": "Les objectifs avant les pixels",
    "Constraints and opportunities shape every decision.": "Les contraintes et les opportunités orientent chacune de vos décisions.",
    "05 · Built for evolution": "05 · Conçu pour évoluer",
    "Foundations that adapt": "Des fondations qui s’adaptent",
    "Designed for today, built to grow with users and needs.": "Pensé pour aujourd’hui, construit pour grandir avec vos utilisateurs et vos besoins.",
    "Selected work": "Réalisations sélectionnées",
    "Ideas brought": "Des idées devenues",
    "closer to reality.": "plus concrètes.",
    "All": "Tout",
    "Software": "Logiciel",
    "Brand": "Marque",
    "Education": "Formation",
    "Learning": "Formation",
    "Engineering": "Ingénierie",
    "Case 01": "Cas 01",
    "Case 02": "Cas 02",
    "Case 03": "Cas 03",
    "Case 04": "Cas 04",
    "Digital Product": "Produit numérique",
    "From concept to a user-centered digital experience.": "Du concept à une expérience numérique centrée sur l’utilisateur.",
    "Brand and Experience": "Marque et Expérience",
    "A stronger identity around a growing idea.": "Une identité plus forte autour d’une idée en pleine croissance.",
    "Product Engineering": "Ingénierie produit",
    "Complex requirements, practical digital system.": "Des exigences complexes, un système numérique pragmatique.",
    "Design and Technology": "Design et Technologie",
    "Interface, experience, and engineering together.": "L’interface, l’expérience et l’ingénierie réunies.",
    "View case study": "Voir l’étude de cas",
    "Have an idea of your own?": "Vous avez vous-même une idée ?",
    "Every project starts differently. Tell us where yours begins.": "Chaque projet commence différemment. Dites-nous où commence le vôtre.",
    "Talk about it": "Parlons-en",
    "Different disciplines.": "Des disciplines différentes.",
    "One ecosystem.": "Un seul écosystème.",
    "Technology, design, brand, learning, and innovation — connected by one philosophy.": "La technologie, le design, la marque, la formation et l’innovation — reliés par une même philosophie.",
    "Pillar 01 · Technology": "Pilier 01 · Technologie",
    "Pillar 02 · Creative": "Pilier 02 · Création",
    "Pillar 03 · Learning": "Pilier 03 · Formation",
    "WE": "NOUS",
    "BUILD": "BÂTISSONS",
    "DESIGN": "DESIGNONS",
    "EMPOWER": "TRANSMETTONS",
    "Product engineering, web and mobile apps, SaaS, APIs, and technical architecture. Turn ideas into reliable technology.": "Ingénierie produit, applications web et mobiles, SaaS, API et architecture technique. Transformez vos idées en technologies fiables.",
    "Build · Engineer · Scale": "Construire · Développer · Déployer",
    "Talk to Forgeware": "Échanger avec Forgeware",
    "Brand identity, graphic design, marketing visuals, and creative direction. Make the idea visible — and memorable.": "Identité de marque, design graphique, visuels marketing et direction créative. Rendez votre idée visible — et mémorable.",
    "Identity · Visuals · Voice": "Identité · Visuels · Voix",
    "Shape your brand": "Façonnez votre marque",
    "Practical training in design, technology, and creative problem solving. Knowledge becomes powerful when it becomes capability.": "Des formations pratiques en design, technologie et résolution créative de problèmes. Le savoir devient puissant lorsqu’il devient compétence.",
    "Learn · Create · Grow": "Apprendre · Créer · Grandir",
    "Start learning": "Commencer à vous former",
    "Ecosystem promise": "La promesse de l’écosystème",
    "We build more than deliverables. We build capability.": "Nous construisons bien plus que des livrables. Nous construisons des compétences.",
    "More clarity. Better decisions. Stronger experiences. New opportunities. Better businesses. More capable people.": "Plus de clarté. De meilleures décisions. Des expériences plus fortes. De nouvelles opportunités. Des entreprises plus performantes. Des personnes plus compétentes.",
    "Who we work with": "Avec qui nous travaillons",
    "For people building what comes next.": "Pour ceux qui construisent l’avenir.",
    "Startups & Founders": "Startups & Fondateurs",
    "You have an idea and need strategy, design, and technology to move it forward.": "Vous avez une idée et avez besoin de stratégie, de design et de technologie pour la faire avancer.",
    "SMEs & Growing Businesses": "PME & Entreprises en croissance",
    "Your business is evolving — your systems and brand need to evolve with it.": "Votre entreprise évolue — vos systèmes et votre marque doivent évoluer avec elle.",
    "Organizations": "Organisations",
    "Thoughtful digital solutions and stronger communication with users.": "Des solutions numériques réfléchies et une communication renforcée avec vos utilisateurs.",
    "Teams & Institutions": "Équipes & Institutions",
    "Strengthen your team’s ability to think, design, build, and innovate.": "Renforcez la capacité de votre équipe à penser, concevoir, développer et innover.",
    "Creators & Innovators": "Créateurs & Innovateurs",
    "You have something worth building — we make it tangible.": "Vous avez quelque chose qui mérite d’être construit — nous le rendons concret.",
    "About Nloga": "À propos de Nloga",
    "We believe complex ideas deserve": "Nous sommes convaincus que les idées complexes méritent",
    "better execution.": "une meilleure exécution.",
    "Nloga exists at the intersection of design, technology, business, and creativity. We create digital products and brands for people and organizations that want to solve meaningful problems and build things that last.": "Nloga se situe à l’intersection du design, de la technologie, des affaires et de la créativité. Nous créons des produits numériques et des marques pour les personnes et les organisations qui souhaitent résoudre des problèmes significatifs et bâtir des solutions durables.",
    "Nloga started with a simple belief.": "Nloga est née d’une conviction simple.",
    "There are many good ideas in the world, and many talented people. But turning an idea into something genuinely useful requires understanding, collaboration, design, technology — and above all, execution. Nloga brings these capabilities closer together so ambitious ideas move from concept to reality. We are building an ecosystem where software, design, creativity, and learning reinforce one another.": "Il existe de nombreuses bonnes idées dans le monde, et de nombreux talents. Mais transformer une idée en une solution véritablement utile exige de la compréhension, de la collaboration, du design, de la technologie — et surtout, de l’exécution. Nloga rapproche ces compétences afin que les idées ambitieuses passent du concept à la réalité. Nous bâtissons un écosystème où le logiciel, le design, la créativité et l’apprentissage se renforcent mutuellement.",
    "Our vision": "Notre vision",
    "Our mission": "Notre mission",
    "To become a trusted force for building useful, human-centered solutions from Africa and beyond.": "Devenir une force de confiance pour bâtir des solutions utiles et centrées sur l’humain, depuis l’Afrique et au-delà.",
    "Build. Design. Enable.": "Construire. Concevoir. Accompagner.",
    "Technology to build": "La technologie pour construire",
    "Design to simplify": "Le design pour simplifier",
    "Strategy to guide": "La stratégie pour orienter",
    "Creativity to differentiate": "La créativité pour se démarquer",
    "Learning to enable": "L’apprentissage pour autonomiser",
    "Strategy · Design · Technology": "Stratégie · Design · Technologie",
    "Our values": "Nos valeurs",
    "The principles behind the work.": "Les principes qui guident notre travail.",
    "Curiosity": "Curiosité",
    "We question assumptions and explore better possibilities.": "Nous questionnons les acquis et explorons de meilleures possibilités.",
    "Clarity": "Clarté",
    "Complexity should be understood before it is solved.": "La complexité doit être comprise avant d’être résolue.",
    "Craft": "Savoir-faire",
    "Details shape the experience. We care about them.": "Les détails façonnent l’expérience. Nous y accordons une grande importance.",
    "Purpose": "Sens",
    "Technology and design should solve real problems.": "La technologie et le design doivent résoudre des problèmes réels.",
    "Continuous learning": "Apprentissage continu",
    "Nothing is finished forever. We keep improving.": "Rien n’est jamais définitivement achevé. Nous nous améliorons en continu.",
    "Responsibility": "Responsabilité",
    "We build with awareness of the people affected.": "Nous construisons en tenant compte des personnes concernées.",
    "How we work": "Notre méthode de travail",
    "A clear process from ambiguity": "Un processus clair, de l’ambiguïté",
    "to execution.": "à l’exécution.",
    "Six moves, one discipline: understand first, then build what matters.": "Six étapes, une discipline : comprendre d’abord, puis construire ce qui compte.",
    "Discover": "Découvrir",
    "Objectives, users, constraints, opportunities — and what success should look like.": "Objectifs, utilisateurs, contraintes, opportunités — et ce à quoi le succès devrait ressembler.",
    "Output:": "Résultat :",
    "a clearer opportunity and direction.": "une opportunité et une orientation plus claires.",
    "Define": "Définir",
    "Priorities, scope, requirements, and a shared understanding of what we build.": "Priorités, périmètre, exigences et une compréhension partagée de ce que nous construisons.",
    "a focused roadmap.": "une feuille de route ciblée.",
    "Flows, architecture, wireframes, interfaces, and prototypes.": "Parcours, architecture, maquettes, interfaces et prototypes.",
    "a validated experience.": "une expérience validée.",
    "Engineering guided by product goals, design decisions, and long-term needs.": "Un développement guidé par les objectifs du produit, les choix de design et les besoins à long terme.",
    "a functional, tested solution.": "une solution fonctionnelle et testée.",
    "Launch": "Lancement",
    "Deployment, handover, and the move from development to real use.": "Déploiement, transmission et passage du développement à l’utilisation réelle.",
    "a product ready for the world.": "un produit prêt pour le marché.",
    "Feedback, observation, and performance guide what happens next.": "Les retours, l’observation et la performance guident les prochaines étapes.",
    "a product that keeps getting better.": "un produit qui ne cesse de s’améliorer.",
    "Ideas worth thinking about.": "Des idées qui méritent réflexion.",
    "Notes on product, design, technology, brand, and learning — from the studio.": "Réflexions sur le produit, le design, la technologie, la marque et l’apprentissage — par le studio.",
    "Why building the product is not the same as solving the problem": "Pourquoi construire le produit ne revient pas à résoudre le problème",
    "A product can work perfectly and still solve the wrong problem. Clarity comes before implementation.": "Un produit peut parfaitement fonctionner tout en répondant au mauvais problème. La clarté précède la réalisation.",
    "Good design is not decoration": "Le bon design n’est pas de la décoration",
    "It is the process of making a product understandable, useful, and enjoyable to use.": "C’est l’art de rendre un produit compréhensible, utile et agréable à utiliser.",
    "One studio, three forces: build, design, empower": "Un studio, trois forces : construire, concevoir, autonomiser",
    "How Forgeware, CreativePics Art, and Now Just Create reinforce one another.": "Comment Forgeware, CreativePics Art et Now Just Create se renforcent mutuellement.",
    "Read article": "Lire l’article",
    "What people say": "Ce qu’on dit de nous",
    "Good work should speak through the people who experience it.": "Le bon travail devrait s’exprimer à travers ceux qui en bénéficient.",
    "We are building this section one successful collaboration at a time.": "Nous construisons cette rubrique au fil de nos collaborations réussies.",
    "Let’s talk": "Discutons-en",
    "Tell us what you’re trying": "Dites-nous ce que vous cherchez",
    "to build.": "à construire.",
    "You don’t need a perfect brief. Tell us the problem — we’ll take it from there.": "Vous n’avez pas besoin d’un cahier des charges parfait. Exposez-nous le problème — nous prendrons le relais.",
    "Full name": "Nom complet",
    "Your name": "Votre nom",
    "Email address": "Adresse e-mail",
    "Company / Organization": "Entreprise / Organisation",
    "Your company or organization": "Votre entreprise ou organisation",
    "What do you need help with?": "Pour quel besoin sollicitez-vous notre accompagnement ?",
    "Product / Software": "Produit / Logiciel",
    "UX/UI Design": "Design UX/UI",
    "Brand / Creative": "Marque / Création",
    "Training": "Formation",
    "Digital Strategy": "Stratégie numérique",
    "Other": "Autre",
    "Budget range": "Fourchette budgétaire",
    "Not sure yet": "Pas encore défini",
    "Let’s discuss": "À discuter",
    "Timeline": "Délai",
    "As soon as possible": "Dès que possible",
    "Within 1 month": "Sous 1 mois",
    "1-3 months": "1–3 mois",
    "3-6 months": "3–6 mois",
    "Tell us about your project": "Parlez-nous de votre projet",
    "What are you trying to build, improve, solve, or launch?": "Que cherchez-vous à construire, améliorer, résoudre ou lancer ?",
    "Send project enquiry": "Envoyer votre demande de projet",
    "Prefer a direct conversation?": "Vous préférez un échange direct ?",
    "Cameroon · Remote worldwide": "Cameroun · À distance, dans le monde entier",
    "Contact Nloga": "Contacter Nloga",
    "FAQ shortcut": "Accès rapide à la FAQ",
    "No spec needed. One conversation is enough to find the right next step.": "Aucun cahier des charges requis. Un seul échange suffit pour déterminer la prochaine étape.",
    "Questions & clarity": "Questions & clarifications",
    "Frequently asked questions": "Questions fréquemment posées",
    "Everything you need to know about working with Nloga.": "Tout ce que vous devez savoir pour collaborer avec Nloga.",
    "Do I need a complete specification first?": "Dois-je disposer d’un cahier des charges complet au préalable ?",
    "No. Come with an idea, a problem, or an existing product — the first conversation is about understanding where you are.": "Non. Venez avec une idée, un problème ou un produit existant — le premier échange vise à comprendre votre situation.",
    "Do you only work with tech companies?": "Travaillez-vous uniquement avec des entreprises technologiques ?",
    "No. Startups, SMEs, organizations, institutions, creators — the common factor is a meaningful problem to solve well.": "Non. Startups, PME, organisations, institutions, créateurs — le point commun est un problème significatif à résoudre avec exigence.",
    "Can you work on an existing product?": "Pouvez-vous intervenir sur un produit existant ?",
    "Yes — UX, design, architecture, development, performance, branding, or a larger transformation.": "Oui — UX, design, architecture, développement, performance, image de marque ou transformation globale.",
    "Can you handle both design and development?": "Prenez-vous en charge à la fois le design et le développement ?",
    "Yes. Design decisions sit next to technical realities, not in separate phases.": "Oui. Les décisions de design avancent de pair avec les réalités techniques, et non dans des phases séparées.",
    "Do you work with international clients?": "Travaillez-vous avec des clients internationaux ?",
    "Yes. Nloga works beyond Cameroon through remote collaboration.": "Oui. Nloga intervient au-delà du Cameroun grâce à la collaboration à distance.",
    "Do you offer training?": "Proposez-vous des formations ?",
    "Yes — through Now Just Create, our learning and development initiative.": "Oui — à travers Now Just Create, notre initiative dédiée à l’apprentissage et au développement.",
    "Can we engage only one pillar?": "Pouvons-nous ne solliciter qu’un seul pôle ?",
    "Yes. Engage only design, only software, only branding — or the combination your project needs.": "Oui. Sollicitez uniquement le design, uniquement le logiciel, uniquement l’image de marque — ou la combinaison dont votre projet a besoin.",
    "Have something in mind?": "Vous avez une idée en tête ?",
    "Something worth building?": "Un projet qui mérite d’être construit ?",
    "Let’s figure out what it should become.": "Définissons ensemble ce qu’il devrait devenir.",
    "Whether it is a prototype, an enterprise system, or a brand — we are ready to partner with you.": "Qu’il s’agisse d’un prototype, d’un système d’entreprise ou d’une marque — nous sommes prêts à collaborer avec vous.",
    "Talk to Nloga": "Échanger avec Nloga",
    "Direct dispatch": "Contact direct",
    "Douala & Yaoundé, Cameroon": "Douala & Yaoundé, Cameroun",
    "Building digital products and brands from strategy through execution.": "Nous concevons des produits numériques et des marques, de la stratégie jusqu’à l’exécution.",
    "Global presence & HQ": "Présence mondiale & siège",
    "Cameroon": "Cameroun",
    "Navigate": "Navigation",
    "Digital products & software.": "Produits numériques & logiciels.",
    "Brand, visual & creative design.": "Marque, design visuel & créatif.",
    "Learning, training & development.": "Apprentissage, formation & développement.",
    "Connect": "Nous suivre",
    "Studio dispatch": "Lettre du studio",
    "Studio philosophy": "Philosophie du studio",
    "“Think deeply. Design intentionally. Build properly.”": "“Réfléchir en profondeur. Concevoir avec intention. Construire avec rigueur.”",
    "Nloga. All rights reserved.": "Nloga. Tous droits réservés.",
    "Privacy Policy": "Politique de confidentialité",
    "Terms & Conditions": "Conditions générales",
    "Filter projects": "Filtrer les projets",
    "Capabilities carousel controls": "Contrôles du carrousel des expertises",
    "Previous capabilities": "Expertises précédentes",
    "Next capabilities": "Expertises suivantes",
    "Mobile navigation": "Navigation mobile",
    "Primary": "Principale",
    "Mobile": "Mobile",
    "Language": "Langue",
    "Open menu": "Ouvrir le menu",
    "Nloga — home": "Nloga — accueil",
    "The Nloga ecosystem at a glance": "L’écosystème Nloga en un coup d’œil",
    "The Nloga studio at work": "Le studio Nloga au travail",
    "Digital product by Nloga": "Produit numérique par Nloga",
    "Brand identity by CreativePics Art": "Identité de marque par CreativePics Art",
    "Engineering system by Forgeware": "Système d’ingénierie par Forgeware",
    "Learning session by Now Just Create": "Session de formation par Now Just Create",
    "Forgeware software and technology": "Logiciels et technologies Forgeware",
    "CreativePics Art brand and visual design": "Marque et design visuel par CreativePics Art",
    "Now Just Create learning and training": "Formation et apprentissage Now Just Create",
    "Nloga monogram": "Monogramme Nloga",
    "Please complete your name, a valid email, and a short project note.": "Veuillez indiquer votre nom, un e-mail valide et quelques mots sur votre projet.",
    "Please complete the highlighted fields": "Veuillez compléter les champs surlignés",
    "Thank you. We’ve received your message and will review your project details before getting back to you.": "Merci. Nous avons bien reçu votre message et examinerons les détails de votre projet avant de revenir vers vous.",
    "Enquiry sent — thank you": "Demande envoyée — merci",
    "Project Enquiry Received": "Demande de projet reçue",
    "Dark Theme Enabled": "Thème sombre activé",
    "Light Theme Enabled": "Thème clair activé",
    "Close dialog": "Fermer la boîte de dialogue",
    "Close viewer": "Fermer la visionneuse",
    "Previous image": "Image précédente",
    "Next image": "Image suivante",
    "Details": "Détails",
    "Back to top": "Retour en haut",
    "Chat on WhatsApp": "Discuter sur WhatsApp",
    "Forgeware · Case study": "Forgeware · Étude de cas",
    "CreativePics Art · Case study": "CreativePics Art · Étude de cas",
    "Now Just Create · Case study": "Now Just Create · Étude de cas",
    "HRConnect — payroll people can actually use": "HRConnect — une paie enfin simple à utiliser",
    "An HR team was running payroll across spreadsheets and chat threads. We designed and built HRConnect: one workspace for people, time, and pay.": "Une équipe RH gérait la paie entre tableurs et fils de discussion. Nous avons conçu et développé HRConnect : un espace unique pour vos collaborateurs, le temps de travail et la paie.",
    "The challenge": "Le défi",
    "Hours, leave, and overtime lived in different places, so every payroll run meant days of reconciliation and room for error.": "Les heures, les congés et les heures supplémentaires étaient dispersés, si bien que chaque cycle de paie exigeait des jours de rapprochement avec un risque d’erreur élevé.",
    "What we built": "Ce que nous avons construit",
    "Employee directory with roles, contracts, and history.": "Répertoire des employés avec rôles, contrats et historique.",
    "Time, attendance, leave, and overtime tracking in one flow.": "Suivi du temps, des présences, des congés et des heures supplémentaires dans un flux unique.",
    "Payroll summaries generated from verified data — no retyping.": "Synthèses de paie générées à partir de données vérifiées — sans ressaisie.",
    "Outcome": "Résultat",
    "Payroll runs go from days of reconciliation to a single review pass.": "Vos cycles de paie passent de plusieurs jours de rapprochement à une simple revue.",
    "Managers and staff see the same numbers — fewer disputes.": "Managers et collaborateurs voient les mêmes chiffres — moins de litiges.",
    "A maintainable codebase the team can extend module by module.": "Une base de code maintenable que votre équipe peut étendre module par module.",
    "Web app": "Application web",
    "Start a similar project": "Démarrer un projet similaire",
    "IMANI-J Style — an identity ready to be worn": "IMANI-J Style — une identité prête à être portée",
    "A growing fashion retailer needed more than a logo: a full identity system that works on cards, packaging, and fabric.": "Une enseigne de mode en pleine croissance avait besoin de plus qu’un logo : un système d’identité complet, efficace sur les cartes, les emballages et les tissus.",
    "The business had outgrown its first visuals. Every new touchpoint — flyers, tags, socials — looked like a different brand.": "L’entreprise avait dépassé ses premiers visuels. Chaque nouveau support — prospectus, étiquettes, réseaux sociaux — ressemblait à une marque différente.",
    "Logo suite with color, typography, and usage rules.": "Suite de logos avec couleurs, typographies et règles d’utilisation.",
    "Business cards, price tags, and shopping-bag-ready lockups.": "Cartes de visite, étiquettes de prix et déclinaisons prêtes pour sacs d’achat.",
    "Launch visuals for menswear and womenswear lines.": "Visuels de lancement pour les lignes homme et femme.",
    "One recognizable identity across every customer touchpoint.": "Une identité reconnaissable sur chaque point de contact client.",
    "Print-ready files the owner reuses without a designer on call.": "Des fichiers prêts à imprimer que le dirigeant réutilise sans designer dédié.",
    "A brand that photographs well — built for social selling.": "Une marque qui se photographie bien — pensée pour la vente sur les réseaux sociaux.",
    "Operations systems that grow with the business": "Des systèmes de gestion qui grandissent avec votre entreprise",
    "When off-the-shelf tools stop fitting, we design internal systems around the way the business really operates.": "Lorsque les outils standards ne conviennent plus, nous concevons des systèmes internes adaptés à votre fonctionnement réel.",
    "Critical workflows lived in people's heads and inboxes. Onboarding took weeks, and reporting meant manual assembly.": "Les processus critiques reposaient sur la mémoire des équipes et les boîtes de réception. L’intégration prenait des semaines et le reporting exigeait un assemblage manuel.",
    "Mapped the real process with the team before writing code.": "Cartographie du processus réel avec votre équipe avant d’écrire la moindre ligne de code.",
    "Role-based workspaces with clear permissions and audit trails.": "Espaces de travail par rôle avec permissions claires et pistes d’audit.",
    "Dashboards that answer daily questions without exports.": "Des tableaux de bord qui répondent aux questions quotidiennes sans export.",
    "New joiners become productive in days, not weeks.": "Vos nouvelles recrues deviennent opérationnelles en quelques jours, et non en plusieurs semaines.",
    "Decisions run on live data instead of assembled reports.": "Vos décisions reposent sur des données en temps réel plutôt que sur des rapports assemblés.",
    "Architecture ready for the next three modules, not just this one.": "Une architecture prête pour les trois prochains modules, et non pour le seul module actuel.",
    "Design and technology, taught by building": "Le design et la technologie, appris par la pratique",
    "A practical learning program where participants ship real work — not just watch slides.": "Un programme d’apprentissage concret où les participants livrent de vrais projets — et ne se contentent pas de regarder des diapositives.",
    "Teams knew the vocabulary of design and tech but stumbled when applying it to real constraints and deadlines.": "Les équipes connaissaient le vocabulaire du design et de la tech, mais peinaient à l’appliquer face aux contraintes et aux délais réels.",
    "Studio-style cohorts mixing design thinking and hands-on tooling.": "Des cohortes façon studio mêlant design thinking et outils pratiques.",
    "Briefs drawn from real business problems, reviewed like client work.": "Des briefs issus de problèmes réels d’entreprise, revus comme des travaux clients.",
    "Mentorship through the first shipped portfolio piece.": "Un mentorat jusqu’à la première pièce de portfolio livrée.",
    "Graduates leave with portfolio proof, not just attendance.": "Les diplômés repartent avec une preuve en portfolio, et non une simple attestation.",
    "Employers get juniors who already know studio workflows.": "Les employeurs obtiennent des juniors qui maîtrisent déjà les méthodes de studio.",
    "A growing alumni community that keeps sharing work.": "Une communauté d’anciens qui continue de partager ses réalisations.",
    "HRConnect payroll interface by Forgeware": "Interface de paie HRConnect par Forgeware",
    "IMANI-J Style brand identity by CreativePics Art": "Identité de marque IMANI-J Style par CreativePics Art",
    "Operations dashboard by Forgeware": "Tableau de bord opérationnel par Forgeware",
    "Now Just Create training session": "Session de formation Now Just Create",
    "Product · Studio notes": "Produit · Notes du studio",
    "A product can work perfectly and still solve the wrong problem. We see it often: a team ships on time, the app runs smoothly — and nobody uses it. The code was correct; the understanding was not.": "Un produit peut parfaitement fonctionner tout en répondant au mauvais problème. Nous le constatons souvent : une équipe livre dans les délais, l’application est fluide — et personne ne l’utilise. Le code était correct ; la compréhension ne l’était pas.",
    "That is why our process starts before any screen or database. We ask who is struggling, what they tried already, and what success would change in their week. Only then do we decide what to build — and just as importantly, what not to build.": "C’est pourquoi notre processus commence avant tout écran ou base de données. Nous cherchons qui rencontre des difficultés, ce qui a déjà été tenté, et ce que le succès changerait dans votre semaine. C’est seulement ensuite que nous décidons ce qu’il faut construire — et, tout aussi important, ce qu’il ne faut pas construire.",
    "Clarity is cheaper than code. An hour of honest discovery can save a month of rebuilding. If you take one habit from this article: write the problem in one sentence before you write a single requirement.": "La clarté coûte moins cher que le code. Une heure de découverte honnête peut éviter un mois de refonte. Si vous ne deviez retenir qu’une habitude de cet article : rédigez le problème en une phrase avant d’écrire la moindre exigence.",
    "Takeaway": "À retenir",
    "Build the smallest thing that proves the problem is understood — then expand with confidence.": "Construisez la plus petite solution qui prouve que le problème est compris — puis étendez-la en toute confiance.",
    "Design · Studio notes": "Design · Notes du studio",
    "Decoration asks “does it look nice?” Design asks “does it work for the person using it?” A beautiful button nobody finds is a failed button, however elegant.": "La décoration demande « est-ce beau ? » Le design demande « est-ce utile pour la personne qui l’utilise ? » Un beau bouton que personne ne trouve est un bouton raté, aussi élégant soit-il.",
    "Good design is mostly invisible: the form that explains itself, the pricing page that answers objections before they form, the dashboard that shows today's answer without exporting anything. That invisibility takes deliberate work — hierarchy, consistency, and ruthless removal.": "Le bon design est le plus souvent invisible : le formulaire qui s’explique de lui-même, la page tarifaire qui répond aux objections avant qu’elles ne naissent, le tableau de bord qui affiche la réponse du jour sans rien exporter. Cette invisibilité exige un travail délibéré — hiérarchie, cohérence et suppressions rigoureuses.",
    "When we review interfaces, we look for friction first and style second. If a user hesitates, the design has something to say — our job is to listen, then simplify.": "Lorsque nous auditons des interfaces, nous cherchons d’abord les frictions, et le style ensuite. Si un utilisateur hésite, c’est que le design a quelque chose à dire — notre rôle est d’écouter, puis de simplifier.",
    "Judge every screen by what the user can do next, not by how it photographs.": "Jugez chaque écran à ce que l’utilisateur peut faire ensuite, et non à son rendu en photo.",
    "Nloga · Studio notes": "Nloga · Notes du studio",
    "Most projects fail in the handoffs: strategy hands to design, design hands to engineering, engineering hands to users — and something is lost each time. Nloga exists to remove those seams.": "La plupart des projets échouent lors des transmissions : la stratégie transmet au design, le design transmet à l’ingénierie, l’ingénierie transmet aux utilisateurs — et quelque chose se perd à chaque fois. Nloga existe pour supprimer ces ruptures.",
    "Forgeware builds the technology, CreativePics Art gives it identity and voice, and Now Just Create makes sure the capability stays with people, not just vendors. Each force sharpens the others: engineers who understand branding ship more coherent products; designers who understand systems design things that can actually be built.": "Forgeware construit la technologie, CreativePics Art lui donne identité et voix, et Now Just Create veille à ce que la compétence reste à vos équipes, et non aux seuls prestataires. Chaque force aiguise les autres : des ingénieurs qui comprennent l’image de marque livrent des produits plus cohérents ; des designers qui comprennent les systèmes conçoivent des solutions réellement constructibles.",
    "You can engage one pillar alone. But the compounding happens when they move together — which is how ambitious ideas survive contact with reality.": "Vous pouvez solliciter un seul pilier. Mais l’effet cumulé opère lorsqu’ils avancent ensemble — c’est ainsi que les idées ambitieuses survivent à l’épreuve du réel.",
    "Convergence beats handoffs: keep strategy, design, and engineering in the same conversation.": "La convergence surpasse les transmissions : gardez la stratégie, le design et l’ingénierie dans la même conversation.",
    "“Nloga turned our scattered idea into a product our team actually uses every day. The process was clear from the first call to launch.”": "« Nloga a transformé notre idée encore floue en un produit que notre équipe utilise chaque jour. Le processus a été clair, du premier appel jusqu’au lancement. »",
    "“Our old tools were slowing us down. They rebuilt the system around how we really work — and our brand finally looks like the business we have become.”": "« Nos anciens outils nous ralentissaient. Ils ont reconstruit le système autour de notre manière réelle de travailler — et notre marque reflète enfin l’entreprise que nous sommes devenus. »",
    "“The training was practical from day one. Our team left with skills we still use — not just certificates.”": "« La formation a été pratique dès le premier jour. Notre équipe en est repartie avec des compétences que nous utilisons encore — et pas seulement des certificats. »",
    "Founder, Douala-based retail startup": "Fondateur, startup de distribution basée à Douala",
    "Operations Manager, Yaoundé SME": "Responsable des opérations, PME basée à Yaoundé",
    "Program Coordinator, training cohort": "Coordinateur de programme, cohorte de formation",
    "What clients and partners tell us after working together.": "Ce que nous disent nos clients et partenaires après une collaboration.",
    "Legal": "Mentions légales",
    "Nloga collects only what is needed to respond to you and deliver its services.": "Nloga ne collecte que les informations nécessaires pour vous répondre et vous fournir ses services.",
    "What we collect": "Ce que nous collectons",
    "Contact details you share through the enquiry form (name, email, organization, project notes).": "Les coordonnées que vous partagez via le formulaire de demande (nom, e-mail, organisation, détails du projet).",
    "Messages you send us by email or WhatsApp.": "Les messages que vous nous adressez par e-mail ou WhatsApp.",
    "Preferences stored on your own device (theme and language) — never sent anywhere.": "Les préférences enregistrées sur votre propre appareil (thème et langue) — elles ne sont transmises nulle part.",
    "How we use it": "Comment nous les utilisons",
    "To reply to enquiries and prepare quotes.": "Pour répondre à vos demandes et préparer vos devis.",
    "Never sold, never shared with advertisers, never used for spam.": "Ni vendues, ni partagées avec des annonceurs, ni utilisées à des fins de prospection non sollicitée.",
    "Your rights": "Vos droits",
    "Write to studio@nloga.com at any time to access, correct, or delete your data.": "Écrivez à studio@nloga.com à tout moment pour accéder à vos données, les corriger ou les supprimer.",
    "Working with Nloga is simple: clear scope, honest timelines, and mutual respect.": "Travailler avec Nloga est simple : un périmètre clair, des délais honnêtes et un respect mutuel.",
    "Engagements": "Engagements",
    "Every project starts with an agreed scope, timeline, and quote before work begins.": "Chaque projet débute par un périmètre, un calendrier et un devis convenus avant le démarrage des travaux.",
    "Changes in scope are discussed and re-quoted — never billed silently.": "Toute modification du périmètre est discutée et fait l’objet d’un nouveau devis — jamais facturée sans votre accord.",
    "Intellectual property": "Propriété intellectuelle",
    "On final payment, deliverables created for you become yours.": "Après le paiement final, les livrables créés pour vous vous appartiennent.",
    "Nloga may showcase completed work in its portfolio unless agreed otherwise.": "Nloga peut présenter les travaux réalisés dans son portfolio, sauf accord contraire.",
    "Confidentiality": "Confidentialité",
    "Ideas and documents you share during discussions stay confidential, quoted or not.": "Les idées et les documents que vous partagez pendant nos échanges restent confidentiels, qu’un devis soit établi ou non."
  };

  /* Context-sensitive overrides (same English word, different French by
     location). Applied after the generic map; locked nodes are skipped
     by the generic walker. */
  var STEP_FR = ["Découvrir", "Définir", "Concevoir", "Construire", "Lancer", "Faire évoluer"];
  var LOCK_MATCH = {
    ".module-tag": { "Build": "Réalisation", "Empower": "Formation" },
    ".flow-pill b, .flow-pill span, .flow-pill em, .flow-line b, .flow-line span, .flow-line em": { "Build": "Réalisation" }
  };

  function norm(s) {
    return String(s)
      .replace(/\u00A0/g, " ")
      .replace(/[‘’‚‛]/g, "'")
      .replace(/[“”„‟]/g, '"')
      .replace(/[–—]/g, "-")
      .replace(/\s+/g, " ")
      .trim();
  }

  var FR = {};
  Object.keys(FR_RAW).forEach(function (k) {
    var v = FR_RAW[k];
    if (v && v !== k) FR[norm(k)] = v;
  });

  var nodeOrig = new WeakMap();   /* Text -> original text */
  var lockOrig = new WeakMap();   /* Element -> original text */
  var attrOrig = new Map();       /* Element -> {attr: original} (Map: iterable for restore) */
  var titleOrig = null;
  var metaOrig = null;

  function getLang() {
    return document.documentElement.getAttribute("lang") === "fr" ? "fr" : "en";
  }

  function isSkipped(node) {
    var el = node.parentElement;
    if (!el) return true;
    var tag = el.tagName;
    if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return true;
    if (el.closest && el.closest("[data-i18n-lock]")) return true;
    return false;
  }

  function splitAffixes(s) {
    var m = /^(\s*)([\s\S]*?)(\s*)$/.exec(s);
    return { pre: m[1], core: m[2], post: m[3] };
  }

  function translateNode(node) {
    var parts = splitAffixes(node.nodeValue);
    if (!parts.core) return;
    var hit = FR[norm(parts.core)];
    if (hit === undefined) return;
    if (!nodeOrig.has(node)) nodeOrig.set(node, node.nodeValue);
    node.nodeValue = parts.pre + hit + parts.post;
  }

  function restoreNode(node) {
    if (nodeOrig.has(node)) node.nodeValue = nodeOrig.get(node);
  }

  function walkText(mode) {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (isSkipped(n)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (n) { mode === "fr" ? translateNode(n) : restoreNode(n); });
  }

  function collectLocks() {
    var locked = [];
    document.querySelectorAll("#process .step h3").forEach(function (h, i) {
      if (i < STEP_FR.length) {
        h.setAttribute("data-i18n-lock", "1");
        locked.push({ el: h, fr: STEP_FR[i] });
      }
    });
    Object.keys(LOCK_MATCH).forEach(function (sel) {
      var dict = LOCK_MATCH[sel];
      document.querySelectorAll(sel).forEach(function (el) {
        var key = norm(el.textContent || "");
        if (dict[key] !== undefined) {
          el.setAttribute("data-i18n-lock", "1");
          locked.push({ el: el, fr: dict[key] });
        }
      });
    });
    return locked;
  }
  var locks = [];

  function applyLocks(lang) {
    locks.forEach(function (l) {
      if (lang === "fr") {
        if (!lockOrig.has(l.el)) lockOrig.set(l.el, l.el.textContent);
        l.el.textContent = l.fr;
      } else if (lockOrig.has(l.el)) {
        l.el.textContent = lockOrig.get(l.el);
      }
    });
  }

  var ATTR_NAMES = ["placeholder", "aria-label", "title", "alt"];

  function translateAttrs() {
    document.querySelectorAll("[" + ATTR_NAMES.join("],[") + "]").forEach(function (el) {
      ATTR_NAMES.forEach(function (a) {
        if (!el.hasAttribute(a)) return;
        var cur = el.getAttribute(a);
        var hit = FR[norm(cur)];
        if (hit === undefined) return;
        var bag = attrOrig.get(el);
        if (!bag) { bag = {}; attrOrig.set(el, bag); }
        if (!(a in bag)) bag[a] = cur;
        el.setAttribute(a, hit);
      });
    });
  }

  function restoreAttrs() {
    attrOrig.forEach(function (bag, el) {
      Object.keys(bag).forEach(function (a) { el.setAttribute(a, bag[a]); });
    });
  }

  function translateHead() {
    var t = norm(document.title);
    if (FR[t] !== undefined) {
      if (titleOrig === null) titleOrig = document.title;
      document.title = FR[t];
    }
    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      var c = norm(meta.getAttribute("content") || "");
      if (FR[c] !== undefined) {
        if (metaOrig === null) metaOrig = meta.getAttribute("content");
        meta.setAttribute("content", FR[c]);
      }
    }
  }

  function restoreHead() {
    if (titleOrig !== null) document.title = titleOrig;
    var meta = document.querySelector('meta[name="description"]');
    if (meta && metaOrig !== null) meta.setAttribute("content", metaOrig);
  }

  function syncButtons(lang) {
    document.querySelectorAll(".lang-switch").forEach(function (group) {
      group.querySelectorAll(".lang-btn").forEach(function (b) {
        b.classList.toggle("active", b.getAttribute("data-lang") === lang);
      });
    });
  }

  function toast(msg) {
    if (typeof window.showToast === "function") window.showToast(msg);
    else {
      var t = document.getElementById("toast");
      if (t) {
        t.textContent = msg;
        t.classList.add("show");
        setTimeout(function () { t.classList.remove("show"); }, 2600);
      }
    }
  }

  function setLang(lang, opts) {
    var next = lang === "fr" ? "fr" : "en";
    var silent = opts && opts.silent;
    document.documentElement.setAttribute("lang", next);
    try { localStorage.setItem("nloga-lang", next); } catch (e) {}
    if (next === "fr") {
      walkText("fr");
      applyLocks("fr");
      translateAttrs();
      translateHead();
    } else {
      walkText("en");
      applyLocks("en");
      restoreAttrs();
      restoreHead();
    }
    syncButtons(next);
    /* Refresh theme toggle labels in the active language. */
    try {
      var theme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      if (typeof window.setNlogaTheme === "function") window.setNlogaTheme(theme, true);
    } catch (e) {}
    if (!silent) {
      if (typeof window.triggerStudioPulse === "function") {
        window.triggerStudioPulse(next === "fr" ? "Version française activée" : "English version enabled");
      }
      toast(next === "fr" ? "Langue : français" : "Language: English");
    }
    try { window.dispatchEvent(new CustomEvent("nloga:langchange", { detail: { lang: next } })); } catch (e) {}
  }

  if (typeof window !== "undefined") {
    window.setNlogaLang = setLang;
    window.NLOGA_getLang = getLang;
  }

  /* Collect context locks, then apply stored language (default English). */
  if (typeof document !== "undefined") {
    locks = collectLocks();
    var initial = "en";
    try {
      var saved = localStorage.getItem("nloga-lang");
      if (saved === "fr" || saved === "en") initial = saved;
      else if (document.documentElement.getAttribute("lang") === "fr") initial = "fr";
    } catch (e) {}
    if (initial === "fr") setLang("fr", { silent: true });
    else syncButtons("en");
  }

  /* Node export (harmless in browsers) for automated coverage tests. */
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { FR_RAW: FR_RAW, norm: norm, STEP_FR: STEP_FR };
  }

})();
