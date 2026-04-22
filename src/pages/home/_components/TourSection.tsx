import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Rotate3D } from "lucide-react";
import { Link } from "react-router-dom";

export default function TourSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-secondary/30 py-28">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            animate={inView ? { opacity: 1, x: 0 } : {}}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
                Technologie Immersive
              </span>
            </div>
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Visitez Sans
              <br />
              <span className="italic text-primary">Vous Deplacer</span>
            </h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Explorez chaque piece, chaque detail de nos appartements grace a notre
              technologie de visite virtuelle 3D a 360°. Une experience immersive qui vous
              transporte au coeur de votre futur chez-vous.
            </p>
            <ul className="mb-10 space-y-3">
              {[
                "Navigation 360° a la souris ou au touch",
                "Mesure des espaces en temps reel",
                "Choix des materiaux et finitions",
                "Compatible VR Headset",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="size-1.5 shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              className="group inline-flex items-center gap-3 bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
              to="/visite-3d"
            >
              <Rotate3D size={16} />
              Lancer la Visite 3D
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
            </Link>
          </motion.div>

          <motion.div
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-border">
              <img
                alt="Visite 3D appartement"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/30 to-transparent" />

              <div className="absolute right-4 top-4 flex size-14 items-center justify-center rounded-full border border-primary bg-background/90 backdrop-blur-sm">
                <span className="text-xs font-bold text-primary">360°</span>
              </div>

              <Link
                className="group absolute inset-0 flex items-center justify-center"
                to="/visite-3d"
              >
                <div className="flex size-16 items-center justify-center rounded-full bg-primary/90 transition-transform group-hover:scale-110">
                  <Rotate3D className="text-primary-foreground" size={24} />
                </div>
              </Link>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden border border-border bg-card p-4 md:block">
              <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                Projets disponibles
              </p>
              <p className="font-serif text-2xl font-bold text-primary">6 Tours 3D</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
