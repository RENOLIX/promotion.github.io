import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const [tourOpen, setTourOpen] = useState(false);

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

      <div className="relative mx-auto flex w-full max-w-7xl items-start px-6 pb-14 pt-32 lg:px-8">
        <div className="max-w-3xl lg:max-w-4xl">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 3.4 }}
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
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 3.6 }}
          >
            L'Art de
            <br />
            <span className="italic text-primary">Vivre</span>
            <br />à Alger
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 3.9 }}
          >
            Des résidences pensées pour l'élite algéroise. Architecture contemporaine,
            finitions haut de gamme, vues imprenables sur la Méditerranée.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 4.1 }}
          >
            <Link
              className="group flex items-center gap-3 bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
              to="/projets"
            >
              Découvrir les Projets
              <ArrowRight
                className="transition-transform group-hover:translate-x-1"
                size={16}
              />
            </Link>
            <button
              className="group flex items-center gap-3 border border-border px-7 py-4 text-sm font-semibold uppercase tracking-widest text-foreground transition-all hover:border-primary hover:text-primary"
              onClick={() => setTourOpen(true)}
              type="button"
            >
              <div className="flex size-6 items-center justify-center rounded-full border border-current">
                <Play className="ml-0.5" fill="currentColor" size={10} />
              </div>
              Visite Virtuelle
            </button>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 4.2 }}
          >
            {[
              { value: "12+", label: "Projets Livrés" },
              { value: "850+", label: "Familles Satisfaites" },
              { value: "15 ans", label: "D'Expertise" },
              { value: "4", label: "Wilayas Couvertes" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="hero-stat-card border border-white/8 px-6 py-5 text-left"
              >
                <p className="font-serif text-2xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ opacity: 1 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        transition={{ delay: 4.5, duration: 1 }}
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

      {tourOpen ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background/95 p-6 backdrop-blur-sm"
          onClick={() => setTourOpen(false)}
        >
          <div
            className="aspect-video w-full max-w-5xl overflow-hidden border border-border bg-card"
            onClick={(event) => event.stopPropagation()}
          >
            <iframe
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
              className="h-full w-full"
              src="https://my.matterport.com/show/?m=SxQL3iGyvYk&play=1&qs=1&lang=fr"
              title="Preview 3D"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
