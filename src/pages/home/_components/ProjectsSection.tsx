import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, BedDouble, MapPin, Maximize } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Residence Al Maqam",
    location: "Hydra, Alger",
    type: "Appartements & Penthouses",
    surface: "80 - 320 m2",
    rooms: "2 - 5 pieces",
    status: "En cours",
    statusColor: "text-green-400",
    price: "A partir de 45 M DA",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Les Terrasses de Sidi Yahia",
    location: "Sidi Yahia, Alger",
    type: "Duplex & Appartements",
    surface: "100 - 250 m2",
    rooms: "3 - 6 pieces",
    status: "Disponible",
    statusColor: "text-primary",
    price: "A partir de 62 M DA",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Bois des Arcades Tower",
    location: "Bab Ezzouar, Alger",
    type: "Bureaux & Residentiel",
    surface: "60 - 180 m2",
    rooms: "1 - 4 pieces",
    status: "Pre-vente",
    statusColor: "text-yellow-400",
    price: "A partir de 28 M DA",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="group relative cursor-pointer overflow-hidden border border-border bg-card transition-all duration-500 hover:border-primary/50"
      initial={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
    >
      <div className="relative h-72 overflow-hidden">
        <img
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={project.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <div className="absolute left-4 top-4">
          <span
            className={`bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm ${project.statusColor}`}
          >
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <p className="mb-2 text-xs uppercase tracking-widest text-primary">{project.type}</p>
        <h3 className="mb-2 font-serif text-xl font-bold text-foreground">{project.name}</h3>
        <div className="mb-5 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="text-primary" size={12} />
          <span>{project.location}</span>
        </div>

        <div className="mb-5 flex gap-4">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Maximize className="text-primary" size={13} />
            <span>{project.surface}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <BedDouble className="text-primary" size={13} />
            <span>{project.rooms}</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-4">
          <p className="text-sm font-semibold text-foreground">{project.price}</p>
          <Link
            className="group/btn flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary transition-all hover:gap-2.5"
            to="/projets"
          >
            Voir le Projet
            <ArrowRight
              className="transition-transform group-hover/btn:translate-x-1"
              size={13}
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
              Nos Realisations
            </span>
          </div>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              Projets en Vedette
            </h2>
            <Link
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              to="/projets"
            >
              Voir tous les projets
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={14} />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} index={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
