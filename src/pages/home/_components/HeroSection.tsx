import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "12+", label: "Projets Livrés" },
  { value: "850+", label: "Familles Satisfaites" },
  { value: "15 ans", label: "D'Expertise" },
  { value: "4", label: "Wilayas Couvertes" },
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Résidence de luxe à Alger"
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1701158662878-ca7c70d87504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.76 0.13 72) 1px, transparent 1px), linear-gradient(90deg, oklch(0.76 0.13 72) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-7xl items-start px-6 pb-44 pt-32 lg:px-8">
        <div className="max-w-3xl lg:max-w-4xl">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.38, delay: 0.08 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
                Alger - Résidences d'Exception
              </span>
            </div>
          </motion.div>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-serif text-5xl leading-[1.05] text-balance text-foreground md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 22 }}
            transition={{ duration: 0.48, delay: 0.16 }}
          >
            L'Art de
            <br />
            <span className="italic text-primary">Vivre</span>
            <br />à Alger
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.42, delay: 0.24 }}
          >
            Des résidences pensées pour l'élite algéroise. Architecture contemporaine,
            finitions haut de gamme, vues imprenables sur la Méditerranée.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.36, delay: 0.3 }}
          >
            <Link
              className="group flex items-center gap-3 bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
              to="/projets"
            >
              Découvrir
              <ArrowRight
                className="transition-transform group-hover:translate-x-1"
                size={16}
              />
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ opacity: 1 }}
        className="absolute bottom-32 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        transition={{ delay: 0.42, duration: 0.45 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          className="h-10 w-px bg-gradient-to-b from-primary to-transparent"
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-background/72 backdrop-blur-md"
        initial={{ opacity: 0, y: 26 }}
        transition={{ duration: 0.45, delay: 0.34 }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="hero-stat-card border-r border-white/8 px-6 py-6 text-center last:border-r-0 md:px-8"
            >
              <p className="font-serif text-2xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
