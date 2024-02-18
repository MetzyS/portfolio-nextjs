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
