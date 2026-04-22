import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  BedDouble,
  MapPin,
  Maximize,
  SlidersHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";

const ALL_PROJECTS = [
  {
    id: 1,
    name: "Residence Al Maqam",
    location: "Hydra, Alger",
    type: "Penthouse",
    category: "penthouse",
    surface: "80 - 320 m2",
    rooms: "2 - 5 pieces",
    status: "En cours",
    statusColor: "text-green-400",
    price: "A partir de 45 M DA",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
    description:
      "Une residence d'exception au coeur de Hydra, le quartier le plus prise d'Alger. Vues panoramiques sur la Mediterranee, finitions marbre et bois noble.",
    features: ["Piscine sur le toit", "Concierge 24h/24", "Parking securise", "Salle de sport"],
  },
  {
    id: 2,
    name: "Les Terrasses de Sidi Yahia",
    location: "Sidi Yahia, Alger",
    type: "Duplex",
    category: "duplex",
    surface: "100 - 250 m2",
    rooms: "3 - 6 pieces",
    status: "Disponible",
    statusColor: "text-primary",
    price: "A partir de 62 M DA",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    description:
      "Des duplex lumineux avec terrasses privatives dans le quartier diplomatique. Architecture moderne et jardins paysagers.",
    features: ["Terrasses privees", "Jardins paysagers", "Domotique integree", "Double parking"],
  },
  {
    id: 3,
    name: "Bois des Arcades Tower",
    location: "Bab Ezzouar, Alger",
    type: "Appartement",
    category: "appartement",
    surface: "60 - 180 m2",
    rooms: "1 - 4 pieces",
    status: "Pre-vente",
    statusColor: "text-yellow-400",
    price: "A partir de 28 M DA",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    description:
      "Une tour residentielle moderne a proximite du Technopole d'Alger. Ideal pour les jeunes actifs et investisseurs.",
    features: ["Acces direct metro", "Hall grand standing", "Securite 24h/24", "Commerce en RDC"],
  },
  {
    id: 4,
    name: "Collines de Cheraga",
    location: "Cheraga, Alger",
    type: "Villa",
    category: "villa",
    surface: "200 - 500 m2",
    rooms: "4 - 8 pieces",
    status: "Disponible",
    statusColor: "text-primary",
    price: "A partir de 120 M DA",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
    description:
      "Des villas contemporaines dans un domaine prive securise sur les hauteurs de Cheraga. Grand jardin et piscine privee.",
    features: ["Piscine privee", "Grand jardin", "Domaine securise", "Salle de cinema"],
  },
  {
    id: 5,
    name: "Marina Bay Alger",
    location: "Ain Benian, Alger",
    type: "Appartement",
    category: "appartement",
    surface: "70 - 150 m2",
    rooms: "2 - 4 pieces",
    status: "En cours",
    statusColor: "text-green-400",
    price: "A partir de 35 M DA",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    description:
      "Face a la mer a Ain Benian, cette residence offre des vues incomparables sur la Mediterranee depuis chaque appartement.",
    features: ["Vue mer directe", "Club nautique", "Plage privee", "Restaurant gastronomique"],
  },
  {
    id: 6,
    name: "Palais du Telemly",
    location: "Telemly, Alger",
    type: "Penthouse",
    category: "penthouse",
    surface: "150 - 400 m2",
    rooms: "4 - 7 pieces",
    status: "Disponible",
    statusColor: "text-primary",
    price: "A partir de 85 M DA",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80",
    description:
      "Le summum du luxe algerois sur les hauteurs du Telemly. Vue 360° sur la baie d'Alger, finitions exclusives importees.",
    features: ["Vue 360° baie d'Alger", "Ascenseur privatif", "Spa & hammam", "Terrasse 100m²"],
  },
];

const CATEGORIES = [
  { label: "Tous", value: "all" },
  { label: "Appartement", value: "appartement" },
  { label: "Duplex", value: "duplex" },
  { label: "Penthouse", value: "penthouse" },
  { label: "Villa", value: "villa" },
];

export default function ProjetsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? ALL_PROJECTS
      : ALL_PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="relative h-64 overflow-hidden">
        <img
          alt="Nos projets"
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1920&q=80"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs uppercase tracking-[0.35em] text-primary">
              Notre Portefeuille
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h1 className="text-center font-serif text-4xl font-bold text-foreground md:text-6xl">
            Nos Projets
          </h1>
        </div>
      </div>

      <div className="sticky top-20 z-20 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto px-6 py-4 lg:px-8">
          <SlidersHorizontal className="shrink-0 text-primary" size={15} />
          <div className="flex gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category.value}
                className={`whitespace-nowrap px-4 py-2 text-xs font-medium uppercase tracking-widest transition-all ${
                  activeCategory === category.value
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
                onClick={() => setActiveCategory(category.value)}
                type="button"
              >
                {category.label}
              </button>
            ))}
          </div>
          <span className="ml-auto shrink-0 text-xs text-muted-foreground">
            {filtered.length} projet{filtered.length > 1 ? "s" : ""}
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              animate={{ opacity: 1, y: 0 }}
              className="group overflow-hidden border border-border bg-card transition-all duration-500 hover:border-primary/50"
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={project.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <span
                  className={`absolute left-3 top-3 bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm ${project.statusColor}`}
                >
                  {project.status}
                </span>
                <span className="absolute right-3 top-3 bg-primary px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary-foreground">
                  {project.type}
                </span>
              </div>

              <div className="p-6">
                <h3 className="mb-1 font-serif text-xl font-bold text-foreground">{project.name}</h3>
                <div className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="text-primary" size={12} />
                  <span>{project.location}</span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.features.slice(0, 2).map((feature) => (
                    <span key={feature} className="border border-border px-2 py-1 text-xs text-muted-foreground">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mb-4 flex gap-4">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Maximize className="text-primary" size={12} />
                    <span>{project.surface}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <BedDouble className="text-primary" size={12} />
                    <span>{project.rooms}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-border pt-4">
                  <p className="text-sm font-bold text-foreground">{project.price}</p>
                  <Link
                    className="group/btn flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary transition-all hover:gap-2.5"
                    to="/contact"
                  >
                    Renseignements
                    <ArrowRight
                      className="transition-transform group-hover/btn:translate-x-1"
                      size={12}
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
