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
    "Cameroon & remote": "Cameroun & à distance",
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
    "Light Theme Enabled": "Thème clair activé"
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
