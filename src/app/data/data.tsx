import { ReactElement } from "react";

export const about: ReactElement = (
  <>
    <span className="mb-2 md:mb-0 text-base leading-tight">
      <strong>Ancien directeur d&apos;ACM*</strong> avec plusieurs années
      d&apos;expérience dans le monde de l&apos;animation socio-culturelle.
    </span>
    <span className="text-xs italic">*Accueil collectif de Mineurs.</span>
    <span className="mt-6">
      J&apos;ai entammé une{" "}
      <strong>reconversion professionnelle dans le développement web</strong> en
      2022, en raison de ma passion pour l&apos;informatique, le code 👨🏽‍💻 et les
      jeux vidéo 🎮.
    </span>
    <span className="mt-6">
      Depuis, je passe mes journées{" "}
      <span className="text-sm italic">(et parfois mes nuits!)</span> a
      <strong> coder</strong>, <strong>apprendre et explorer</strong> cette
      nouvelle facette d&apos;internet.
    </span>
  </>
);

export const expPro = [
  {
    id: 1,
    delay: 130,
    date: "2023 — Aujourd'hui",
    title: "Développeur Web — Full Stack",
    link: "https://www.universdutelephone.fr",
    links: [
      {
        title: "Site vitrine",
        link: "https://www.universdutelephone.fr",
      },
      {
        title: "Plateforme partage",
        link: "https://www.metzys.net/projet-cloud/",
      },
    ],
    company: "L'Univers du Téléphone - Pézenas",
    htmlDom: `<span>Planification, conception, développement, déploiement et maintenance de deux projets:</span>
    <ul>
    <li>- Un site vitrine avec formulaire de contact et back-end permettant de consulter/répondre aux messages laissé par les visiteurs.</li>
    <li>- Une application web permettant le stockage/partage de fichiers avec différents accès selon le rôle attribué aux utilisateurs.</li>
    </ul>`,
    tech: ["PHP", "JavaScript", "React", "HTML & CSS", "Figma", "Illustrator"],
  },
  {
    id: 2,
    delay: 150,
    date: "2021 — 2022",
    title: "Réparateur informatique",
    // link:"https://www.francecompetences.fr/recherche/rncp/31114/",
    // detail:"Formation",
    company: "L'Univers du Téléphone - Béziers",
    htmlDom: `<span>Réparation et diagnostique pannes diverses:</span>
            <ul>
            <li>- Réception client et pré-diagnostique.</li>
            <li>- Montage/démontage PC.</li>
            <li>- Remplacement pièces hardware défectueux.</li>
            <li>- Réinitialisation/formatage PC.</li>
            <li>- Dépannage à domicile.</li>
            </ul>`,
  },
  {
    id: 3,
    delay: 150,
    date: "2018 — 2020",
    title: "Directeur Accueil Collectif de Mineurs",
    link: "https://famillesrurales-stjeandefos.jimdofree.com/",
    company: "Familles Rurales - Saint Jean de Fos",
    htmlDom: `<span>Organisation, gestion et coordination de l'ACM.</span> 
            <ul>
            <li>- Gestion d'équipe: recrutement, organisation et menée de réunions, suivi et formation du personnel...</li>
            <li>- Gestion administrative: déclarations, élaboration et rédaction du projet pédagogique, bilans, gestion des inscriptions...</li>
            <li>- Gestion et organisation des temps d'accueil: organisation de séjours/vacances scolaires... </li>
            <li>- Gestion financière: découpage et gestion du budget, recherche de subventions/d'appels à projets...</li>
            <li>- Gestion de la communication et infographie: affiches, flyers, programmes d'activités, bilans, networking, développement de partenariats...</li>
            </ul>`,
    tech: ["Photoshop", "Illustrator"],
  },
  {
    id: 4,
    delay: 150,
    date: "2017 — 2018",
    title: "Directeur adjoint Accueil Collectif de Mineurs",
    link: "https://famillesrurales-stjeandefos.jimdofree.com/",
    company: "Familles Rurales - Saint Jean de Fos",
    htmlDom: `<span>Soutien au directeur et à l'équipe d'animation dans leurs missions</span>: 
            <ul>
            <li>- Suivi du personnel et lien entre le directeur et l'équipe.</li>
            <li>- Participation à la rédaction du projet pédagogique.</li>
            <li>- Menée de réunions.</li>
            <li>- Organisation et direction de séjours.</li>
            <li>- Organisation de chantiers loisirs.</li>
            <li>- Responsable ludothèque.</li>
            </ul>`,
    tech: ["Photoshop", "Illustrator"],
  },
  {
    id: 5,
    delay: 150,
    date: "2016 — 2017",
    title: "Animateur Socioculturel (ALSH/ALP)",
    link: "https://famillesrurales-stjeandefos.jimdofree.com/",
    company: "Familles Rurales - Saint Jean de Fos",
    htmlDom: `<span>Planification et menée d'activités:</span>
            <ul>
            <li>- Rédaction de fiches d'activités.</li>
            <li>- Menée d'activité périscolaire et extrascolaire..</li>
            <li>- Participation aux séjours.</li>
            <li>- Organisation de sorties extrascolaires.</li>
            </ul>`,
  },
  {
    id: 6,
    delay: 150,
    date: "2014 — 2015",
    title: "Animateur Socioculturel (ALSH)",
    link: "https://villamont-beziers.fr/",
    company: "Villamont - Servian",
    htmlDom: `<span>Planification et menée d'activités:</span>
            <ul>
            <li>- Rédaction de fiches d'activités.</li>
            <li>- Menée d'activité périscolaire et extrascolaire.</li>
            </ul>`,
  },
];

export const formations = [
  {
    id: 1,
    delay: 0,
    date: "2022 — 2023",
    title: "Titre professionnel — Développeur Web/Web Mobile (Bac +2)",
    link: "https://www.francecompetences.fr/recherche/rncp/31114/",
    detail: "Formation",
    company: "GRETACFA Montpellier Littoral",
    htmlDom: `<span>Liste des compétences acquises:</span>
          <ul>
          <li>1) Développer la partie front-end d'une application web et/ou web mobile en intégrant les recommandations de sécurité.</li>
          <li>- Maquetter une application.</li>
          <li>- Réaliser une interface utilisateur web statique et adaptable.</li>
          <li>- Développer une interface utilisateur web dynamique.</li>
          <li>- Réaliser une interface utilisateur avec un CMS.</li>
          <br>
          <li>2) Développer la partie back-end d'une application web ou web mobile en intégrant les recommandations de sécurité</li>
          <li>- Créer une base de données.</li>
          <li>- Développer les composants d'accès aux données.</li>
          <li>- Développer la partie back-end d'une application web et/ou web mobile.</li>
          <li>- Élaborer et mettre en œuvre des composants dans un CMS.</li>
          </ul>`,
    tech: ["PHP", "JavaScript", "HTML & CSS", "Symfony", "Figma"],
  },
  {
    id: 2,
    delay: 0,
    date: "2022",
    title: "Diagnostique et réparations micro-électronique",
    link: "https://www.fixit-formation.fr/",
    detail: "Formation",
    company: "Fixit Formations - Baillargues",
    htmlDom: `<span>Compétences acquises:</span>
  <ul>
  <li>- Diagnostique carte-mère électronique.</li>
  <li>- Lecture de schémas électronique.</li>
  <li>- Micro-soudure, utilisation du matériel spécifique: microscope, fer à souder, souffleuse air chaud, etc..</li>
  <li>- Remplacement des composants électroniques</li>
  </ul>`,
  },
  {
    id: 3,
    delay: 0,
    date: "2018 — 2019",
    title: "BAFD (Brevet d'Aptitude aux Fonction de Directeur)",
    link: "https://www.cemea-occitanie.org/",
    detail: "Formation",
    company: "CEMEA - Montpellier",
    htmlDom: `<span>Compétences acquises: </span>
          <ul>
          <li>- Élaborer et mettre en œuvre un projet pédagogique en cohérence avec le projet éducatif.</li>
          <li>- Situer son engagement dans le contexte social, culturel et éducatif.</li>
          <li>- Coordonner et assurer la formation de l'équipe d'animation.</li>
          <li>- Diriger les personnels et assurer la gestion de l'accueil.</li>
          <li>- Développer les partenariats et la communication.</li>
          </ul>`,
  },
  {
    id: 4,
    delay: 0,
    date: "2015 — 2016",
    title:
      "BAFA Qualification: Surveillant de Baignade (Brevet d'Aptitude aux Fonctions d'Animateur)",
    link: "https://famillesrurales-stjeandefos.jimdofree.com/",
    detail: "Formation",
    company: "CEMEA Occitanie",
    htmlDom: `<span>Compétences acquises:</span>
          <ul>
          <li>- Assurer la sécurité physique et morale des enfants.</li>
          <li>- Participer à l'accueil, la communication et au développement des relations entre les différents acteurs.</li>
          <li>- Participer à la mise en œuvre d'un projet pédagogique.</li>
          <li>- Encadrer et animer la vie quotidienne et les activités.</li>
          <li>- Accompagner les mineurs dans la réalisation de leurs projets.</li>
          </ul>`,
  },
  {
    id: 5,
    delay: 0,
    date: "2011",
    title: "Baccalauréat Sciences et technologies de la gestion",
    link: "https://jean-moulin-beziers.mon-ent-occitanie.fr/",
    detail: "Diplôme",
    company: "Lycée Jean Moulin - Béziers",
  },
];

export const projects = [
  {
    id: 0,
    title: "Portfolio MetzyS",
    description: `<p> Mon portfolio, la création de celui-ci m'a permis d'apprendre à me servir de : </p> 
    <ul>
    <li>- React + Zustand (state management),</li>
    <li>- NextJS + TypeScript.</li>
    </ul>
    <p>Je me suis même amusé a créer mes propres SVG (avec Illustrator) et a permettre à l'utilisateur de modifier quelques détails (couleur de peau, du t-shirt, de l'ordinateur.. en cliquant sur l'élement voulu), ce qui se répercute sur tout les SVG présent sur le site (uniquement en version desktop).</p>`,
    link: "https://www.metzys.net/",
    img: "/images/projects/portfolio.jpg",
    tech: [
      "NextJS",
      "React",
      "Zustand",
      "JavaScript",
      "Tailwind",
      "Illustrator",
    ],
    github: "https://github.com/MetzyS/portfolio-nextjs",
  },
  {
    id: 1,
    title: "Projet Cloud",
    description: `<p>Plateforme de partage, d'archivage et de gestion de fichiers crée pour une entreprise from scratch.</p><p>Plusieurs rôles avec différents droits/accès</p>
      <ul>
      <li>- Superadmin: Gestion des comptes (création, suppression, modification, attribution des rôles..),</li>
      <li>- Admin: Gestion des fichiers et dossiers, gestions des comptes (utilisateurs seulement)</li>
      <li>- Utilisateur: Consultation des fichiers uniquement</li>
      </ul>`,
    link: "https://cloud.metzys.net/www/cloud/public/",
    img: "/images/projects/cloud_homepage.jpg",
    tech: ["PHP", "JavaScript", "MySQL", "HTML", "CSS", "PHPMailer", "Figma"],
    github: "https://github.com/MetzyS/cloud",
  },
  {
    id: 2,
    title: "L'Univers du Téléphone",
    description: `
    <p>Site vitrine avec back-end.</p>
    <p>Le backend possède diverses fonctionnalités telles que:</p>
    <ul>
    <li>- Consultation/lecture des messages reçu (via le formulaire de contact)</li>
    <li>- Réponse aux messages (PHPMailer)</li>
    <li>- Changement du statut des messages ("lu", "non-lu", "traîté")</li>
    <li>- Suppression des messages</li>
    </ul>
    `,
    link: "https://universdutelephone.fr/",
    img: "/images/projects/univtel.jpg",
    tech: ["PHP", "JavaScript", "MySQL", "HTML", "CSS", "PHPMailer", "Figma"],
    github: "https://github.com/MetzyS/univtel",
  },
  {
    id: 3,
    title: "Mini Walkman Player (JS)",
    description: `
    <p>Petit lecteur audio retro.</p>
    <p>Réalisé au cours de ma formation (DWWM), ce petit projet avait pour objectif de mettre en avant nos capacités en JavaScript (vanilla, aucun framework autorisé).</p>
    `,
    link: "https://walkman.metzys.net/",
    img: "/images/projects/mediaplayer.jpg",
    tech: ["JavaScript", "HTML", "CSS", "Illustrator"],
    github: "https://github.com/MetzyS/mediaPlayer",
  },
  {
    id: 4,
    title: "Association Pelote et Rebelote",
    description: `
    <p>Site associatif (fictif).</p>
    <p>Réalisé au cours de ma formation (DWWM), ce petit projet avait pour objectif de mettre en avant nos capacités en HTML/CSS.</p>
    <p>C'est mon tout premier site web static!</p>
    `,
    link: "https://www.pelote.metzys.net/",
    img: "/images/projects/pelote.jpg",
    tech: ["HTML", "CSS", "Figma"],
    github: "https://github.com/MetzyS/pelote-et-rebelote",
  },
];

export const imagesCarousel = [
  {
    id: 0,
    src: "/images/carousel/0.jpg",
    alt: "Réalisation graphique - Page de garde du projet pédagogique de la ludothèque",
    desc: "Page de garde projet pédagogique ludothèque Familles Rurales",
  },
  {
    id: 1,
    src: "/images/carousel/1.jpg",
    alt: "Réalisation graphique - Flyer ludothèque",
    desc: "Flyer ludothèque Familles Rurales",
  },
  {
    id: 2,
    src: "/images/carousel/2.jpg",
    alt: "Réalisation graphique - Dépliant programme d'activités vacances d'hiver 2019",
    desc: "Dépliant programme d'activités (hiver 2019) Familles Rurales",
  },
  {
    id: 3,
    src: "/images/carousel/3.jpg",
    alt: "Réalisation graphique - Dépliant programme d'activités des mercredis",
    desc: "Dépliant programme d'activités (mercredis) Familles Rurales",
  },
  {
    id: 4,
    src: "/images/carousel/4.jpg",
    alt: "Réalisation graphique - Dépliant programme d'activités vacances de la Toussaint",
    desc: "Dépliant programme d'activités (toussaint 2019) Familles Rurales",
  },
  {
    id: 5,
    src: "/images/carousel/5.jpg",
    alt: "Réalisation graphique - Flyer loto des jeunes Familles Rurales",
    desc: "Flyer loto des jeunes - Familles Rurales",
  },
  {
    id: 6,
    src: "/images/carousel/6.jpg",
    alt: "Réalisation graphique - Infographie Bilan CEJ 2018 1ère page",
    desc: "Infographie bilan CEJ 2018 (page 1)",
  },
  {
    id: 7,
    src: "/images/carousel/7.jpg",
    alt: "Réalisation graphique - Infographie Bilan CEJ 2018 2ème page",
    desc: "Infographie bilan CEJ 2018 (page 2)",
  },
  {
    id: 8,
    src: "/images/carousel/8.jpg",
    alt: "Réalisation graphique - Infographie Bilan CEJ 2018 3ème page",
    desc: "Infographie bilan CEJ 2018 (page 3)",
  },
  {
    id: 9,
    src: "/images/carousel/9.jpg",
    alt: "Réalisation graphique - Flyer publicitaire Hérault Carte Grise recto",
    desc: "Flyer publicitaire Hérault Carte Grise recto",
  },
  {
    id: 10,
    src: "/images/carousel/10.jpg",
    alt: "Réalisation graphique - Flyer publicitaire Hérault Carte Grise verso",
    desc: "Flyer publicitaire Hérault Carte Grise verso",
  },
  {
    id: 11,
    src: "/images/carousel/11.jpg",
    alt: "Réalisation graphique - Flyer publicitaire Univers du Téléphone 1",
    desc: "Flyer publicitaire Univers du Téléphone",
  },
  {
    id: 12,
    src: "/images/carousel/12.jpg",
    alt: "Réalisation graphique - Flyer publicitaire Univers du Téléphone 2",
    desc: "Flyer publicitaire Univers du Téléphone",
  },
  {
    id: 13,
    src: "/images/carousel/13.jpg",
    alt: "Réalisation graphique - Flyer jeu concours CareCover",
    desc: "Flyer jeu concours instagram CareCover",
  },
  {
    id: 14,
    src: "/images/carousel/14.jpg",
    alt: "Réalisation graphique - Flyer Tournoi Football FC Villeneuve les Béziers",
    desc: "Flyer publicitaire tournois football FC Villeneuve-Les-Béziers",
  },
  {
    id: 15,
    src: "/images/carousel/15.jpg",
    alt: "Réalisation graphique - Flyer Entreprise NDébarras",
    desc: "Flyer publicitaire NDebarras",
  },
];
