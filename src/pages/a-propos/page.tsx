import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Award, Building2, Handshake, Users } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    desc: "Chaque detail est pense pour depasser vos attentes. Nous ne livrons que ce qui nous rend fiers.",
  },
  {
    icon: Building2,
    title: "Innovation",
    desc: "Architecture avant-gardiste et technologies de construction de pointe pour des biens durables.",
  },
  {
    icon: Users,
    title: "Proximite",
    desc: "Une equipe dediee vous accompagne de la signature a la remise des cles, et au-dela.",
  },
  {
    icon: Handshake,
    title: "Confiance",
    desc: "Plus de 850 familles nous ont fait confiance depuis 15 ans. Notre reputation est notre fierte.",
  },
];

const team = [
  {
    name: "Noureddine Mansouri",
    role: "Fondateur & PDG",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    name: "Yasmine Bouzidi",
    role: "Directrice Architecturale",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    name: "Mehdi Khelifa",
    role: "Directeur Commercial",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    name: "Sara Ait Ahmed",
    role: "Responsable Clientele",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
];

function AnimSection({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="relative h-64 overflow-hidden">
        <img
          alt="A propos"
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1604107050756-b5ac1578b0b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs uppercase tracking-[0.35em] text-primary">Notre Histoire</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h1 className="text-center font-serif text-4xl font-bold text-foreground md:text-6xl">
            A Propos
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-28 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <AnimSection>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">Depuis 2009</span>
            </div>
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground">
              Batir l'Alger
              <br />
              <span className="italic text-primary">de Demain</span>
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Fondee en 2009 par Noureddine Mansouri, Alger Premium Immobilier est nee d'une
              vision simple mais ambitieuse : offrir aux Algerois un cadre de vie qui rivalise
              avec les plus grandes metropoles mondiales.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              En 15 ans, nous avons livre plus de 12 projets residentiels haut de gamme dans les
              quartiers les plus prises d'Alger - Hydra, Sidi Yahia, Telemly, Cheraga - et nous
              continuons a repousser les frontieres de l'excellence.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Notre approche est fondee sur trois piliers : l'architecture signature, les
              materiaux de premiere qualite, et un service client d'exception qui dure bien
              au-dela de la remise des cles.
            </p>
          </AnimSection>

          <AnimSection delay={0.2}>
            <div className="relative">
              <img
                alt="Alger Premium bureau"
                className="aspect-[4/3] w-full object-cover"
                src="https://images.unsplash.com/photo-1604107050756-b5ac1578b0b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900"
              />
              <div className="absolute -bottom-6 -right-6 hidden border border-primary bg-card p-6 md:block">
                <p className="font-serif text-4xl font-bold text-primary">15</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Annees d'excellence
                </p>
              </div>
            </div>
          </AnimSection>
        </div>

        <AnimSection>
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">ADN</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-foreground">Nos Valeurs</h2>
          </div>
        </AnimSection>

        <div className="mb-28 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <AnimSection key={value.title} delay={index * 0.1}>
              <div className="border border-border bg-card p-8 text-center transition-colors hover:border-primary/50">
                <value.icon className="mx-auto mb-4 text-primary" size={28} />
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
              </div>
            </AnimSection>
          ))}
        </div>

        <AnimSection>
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">L'equipe</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-foreground">Notre Direction</h2>
          </div>
        </AnimSection>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {team.map((member, index) => (
            <AnimSection key={member.name} delay={index * 0.1}>
              <div className="group text-center">
                <div className="relative mb-4 aspect-square overflow-hidden">
                  <img
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={member.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h4 className="font-semibold text-foreground">{member.name}</h4>
                <p className="mt-1 text-xs uppercase tracking-wider text-primary">{member.role}</p>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </div>
  );
}
