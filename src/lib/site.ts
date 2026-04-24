const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const siteInfo = {
  promoter: "EL AZZALI real estate",
  promoterShort: "EL AZZALI",
  residence: "Lotissement Belda",
  residenceShort: "Belda",
  logoUrl: "https://i.ibb.co/60gTvkfp/Chat-GPT-Image-24-avr-2026-17-24-10.png",
  location: "Lotissement Belda, Draria, Alger",
  fullAddress: "Lotissement Belda, Draria, Alger",
  architecture: "R+11 avec attique",
  typologies: "F2, F3, F4, F5, F6, duplex et penthouses",
  parking: "02 parkings sous-sol et 3 entre-sols",
  heroDescription:
    "Une signature residentielle a Draria, pensee pour allier architecture contemporaine, confort intelligent, securite renforcee et espaces exterieurs de prestige.",
  description:
    "Situee dans le secteur residentiel calme de Belda a Draria, cette promotion immobiliere de haut standing s'inscrit dans un environnement preserve, proche des axes routiers principaux et des commodites urbaines.",
  longDescription:
    "EL AZZALI real estate developpe un immeuble moderne en R+11 couronne par un attique, avec des duplex a piscine au dernier etage, des penthouses panoramiques et une lecture premium des espaces communs comme des appartements.",
  nearby: [
    "Quartier residentiel preserve, a l'ecart de l'agitation tout en restant proche des ecoles et commerces.",
    "Acces rapide aux axes routiers principaux pour rejoindre facilement les principaux poles d'Alger.",
    "Une adresse calibree pour une vie quotidienne confortable, familiale et haut de gamme a Draria.",
  ],
  typologyDetails: ["F2", "F3", "F4", "F5", "F6", "Duplex avec piscine", "Penthouses"],
  interiorFeatures: [
    "Systeme domotique integre",
    "Chauffage central",
    "Climatisation centralisee",
    "Cuisine equipee par excellence",
    "Fenetre et porte-fenetre a commande a distance",
    "Serrure d'entree intelligente",
  ],
  buildingFeatures: [
    "Ascenseur demarrant depuis le parking",
    "02 parkings sous-sol",
    "3 entre-sols",
    "Parking avec cameras de surveillance",
    "Box bien repartis",
    "Reseau anti-incendie",
    "Alimentation electrique dans chaque box pour vehicules electriques",
  ],
  lifestyleFeatures: [
    "Salle de sport",
    "Partie douche et sauna",
    "Attique avec grands espaces exterieurs",
    "Vue panoramique sur Draria",
    "Duplex piscine au dernier etage",
    "Espaces communs a l'ecriture premium",
  ],
  contactFacts: [
    {
      title: "Adresse du projet",
      value: "Lotissement Belda, Draria, Alger",
    },
    {
      title: "Cadre de vie",
      value:
        "Un secteur residentiel calme, preserve de l'agitation et proche des ecoles, commerces et services urbains.",
    },
    {
      title: "Architecture",
      value: "Immeuble R+11 avec attique, vues degagees et dernier niveau panoramique.",
    },
    {
      title: "Commercialisation",
      value: "Visites, disponibilites et accompagnement via le formulaire de contact integre.",
    },
  ],
} as const;

export const heroStats = [
  { value: "R+11", label: "Architecture" },
  { value: "F2 a F6", label: "Typologies" },
  { value: "Duplex piscine", label: "Dernier etage" },
  { value: "02 parkings", label: "Sous-sol" },
] as const;

export const whyChooseItems = [
  {
    title: "CONFORT INTELLIGENT",
    description:
      "Domotique, chauffage central, climatisation centralisee, cuisine equipee et ouvrants motorises pour un quotidien fluide et premium.",
  },
  {
    title: "SECURITE & STATIONNEMENT",
    description:
      "Ascenseur depuis le parking, cameras de surveillance, reseau anti-incendie, box repartis et alimentation dediee aux vehicules electriques.",
  },
  {
    title: "BIEN-ETRE & ATTIQUE",
    description:
      "Salle de sport, espace douche et sauna, penthouses, duplex avec piscine et vues panoramiques sur la commune de Draria.",
  },
] as const;

export const lifestyleCollections = [
  {
    label: "Hall d'entree",
    kicker: "Accueil signature",
    images: [
      withBase("el-azzali/hall-01.jpeg"),
      withBase("el-azzali/hall-02.jpeg"),
      withBase("el-azzali/hall-03.jpeg"),
      withBase("el-azzali/hall-04.jpeg"),
    ],
  },
  {
    label: "Espace bureau",
    kicker: "Fonction & elegance",
    images: [
      withBase("el-azzali/bureau-01.jpeg"),
      withBase("el-azzali/bureau-02.jpeg"),
      withBase("el-azzali/bureau-03.jpeg"),
      withBase("el-azzali/bureau-04.jpeg"),
    ],
  },
  {
    label: "Suite parentale",
    kicker: "Confort nuit",
    images: [
      withBase("el-azzali/suite-01.jpeg"),
      withBase("el-azzali/suite-02.jpeg"),
      withBase("el-azzali/suite-03.jpeg"),
      withBase("el-azzali/suite-04.jpeg"),
    ],
  },
  {
    label: "Chambre 2",
    kicker: "Esprit familial",
    images: [
      withBase("el-azzali/family-01.jpeg"),
      withBase("el-azzali/family-02.jpeg"),
      withBase("el-azzali/family-03.jpeg"),
    ],
  },
  {
    label: "Salle d'eau",
    kicker: "Marbre & lumiere",
    images: [
      withBase("el-azzali/bath-01.jpeg"),
      withBase("el-azzali/bath-02.jpeg"),
      withBase("el-azzali/bath-03.jpeg"),
      withBase("el-azzali/bath-04.jpeg"),
    ],
  },
  {
    label: "Architecture",
    kicker: "Facade & atrium",
    images: [
      withBase("el-azzali/lobby-01.jpeg"),
      withBase("el-azzali/facade-01.jpeg"),
      withBase("el-azzali/facade-02.jpeg"),
      withBase("el-azzali/atrium-01.jpeg"),
    ],
  },
] as const;

export const galleryImages = [
  {
    src: withBase("el-azzali/facade-02.jpeg"),
    label: "Facade",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: withBase("el-azzali/hall-01.jpeg"),
    label: "Hall d'entree",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: withBase("el-azzali/suite-02.jpeg"),
    label: "Suite parentale",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: withBase("el-azzali/family-01.jpeg"),
    label: "Chambre 2",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: withBase("el-azzali/atrium-02.jpeg"),
    label: "Atrium",
    span: "md:col-span-2 md:row-span-1",
  },
] as const;

export const residenceFacts = [
  {
    title: "Configuration",
    value: "Immeuble R+11 avec attique panoramique",
  },
  {
    title: "Typologies",
    value: "F2 a F6, duplex et penthouses",
  },
  {
    title: "Mobilite",
    value: "Ascenseur depuis le parking et circulation fluide",
  },
  {
    title: "Cadre de vie",
    value: "Belda, Draria, proche ecoles, commerces et axes structurants",
  },
] as const;
