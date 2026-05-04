import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  AirVent,
  ArrowUpDown,
  Building2,
  ChefHat,
  Dumbbell,
  LockKeyhole,
  MapPin,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { siteInfo } from "../../lib/site";

const values = [
  {
    icon: Building2,
    title: "Architecture",
    desc: "Une residence R+11 avec attique, facade contemporaine, atrium central et lecture premium des espaces communs.",
  },
  {
    icon: ShieldCheck,
    title: "Securite",
    desc: "Videosurveillance, reseau anti-incendie, box repartis et circulation verticale pensee des le parking.",
  },
  {
    icon: Dumbbell,
    title: "Bien-etre",
    desc: "Salle de sport, espace douche et sauna, plus un dernier etage panoramique avec duplex piscine.",
  },
  {
    icon: MapPin,
    title: "Adresse",
    desc: "Lotissement Belda a Draria, dans un secteur residentiel calme relie aux axes routiers et commodites.",
  },
] as const;

const keyFeatures = [
  { icon: Smartphone, label: "Systeme domotique integre" },
  { icon: AirVent, label: "Chauffage central et climatisation centralisee" },
  { icon: ChefHat, label: "Cuisine equipee par excellence" },
  { icon: ArrowUpDown, label: "Fenetre et porte-fenetre a commande a distance" },
  { icon: LockKeyhole, label: "Serrure d'entree intelligente" },
  { icon: Dumbbell, label: "Salle de sport, douche et sauna" },
] as const;

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
          alt={siteInfo.promoter}
          className="h-full w-full object-cover"
          src={`${import.meta.env.BASE_URL}el-azzali/facade-01.jpeg`}
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="rounded-[28px] bg-black/42 px-8 py-6 text-center shadow-[0_24px_60px_rgba(0,0,0,0.34)] backdrop-blur-[3px]">
            <div className="mb-3 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">La signature</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h1 className="text-center font-serif text-4xl font-bold text-white md:text-6xl">
              A propos
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-28 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <AnimSection>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">
                {siteInfo.promoter}
              </span>
            </div>
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground">
              {siteInfo.residence}
              <br />
              <span className="italic text-primary">a Draria</span>
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">{siteInfo.description}</p>
            <p className="mb-4 leading-relaxed text-muted-foreground">{siteInfo.longDescription}</p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              La direction generale est assuree par {siteInfo.directorGeneral}, garantissant une
              lecture exigeante de la qualite architecturale, des prestations et de
              l'accompagnement client.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Le dernier etage en attique offre des espaces exterieurs genereux et une vue
              panoramique sur la commune de Draria, dans une residence pensee pour un quotidien
              residentiel premium et durable.
            </p>
          </AnimSection>

          <AnimSection delay={0.2}>
            <div className="relative overflow-hidden rounded-[30px] border border-border bg-card shadow-[0_24px_60px_rgba(109,84,44,0.12)]">
              <img
                alt="Facade EL AZZALI"
                className="aspect-[4/3] w-full object-cover"
                src={`${import.meta.env.BASE_URL}el-azzali/hero.jpeg`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(40,28,16,0.58)] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">Signature EL AZZALI</p>
                <p className="mt-2 font-serif text-4xl font-bold text-white">R+11</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/76">
                  Architecture moderne
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
            <h2 className="font-serif text-4xl font-bold text-foreground">Nos reperes</h2>
          </div>
        </AnimSection>

        <div className="mb-28 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <AnimSection key={value.title} delay={index * 0.1}>
              <div className="rounded-[24px] border border-border bg-card p-8 text-center shadow-[0_20px_50px_rgba(109,84,44,0.08)] transition-colors hover:border-primary/50">
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
              <span className="text-xs uppercase tracking-[0.35em] text-primary">En chiffres</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-foreground">La promotion en chiffres</h2>
          </div>
        </AnimSection>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            { value: "R+11", label: "Architecture" },
            { value: "F2 a F6", label: "Typologies" },
            { value: "02", label: "Parkings sous-sol" },
            { value: "Attique", label: "Dernier niveau panoramique" },
          ].map((item, index) => (
            <AnimSection key={item.label} delay={index * 0.1}>
              <div className="rounded-[24px] border border-border bg-card p-8 text-center shadow-[0_20px_50px_rgba(109,84,44,0.08)]">
                <p className="font-serif text-4xl font-bold text-primary">{item.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  {item.label}
                </p>
              </div>
            </AnimSection>
          ))}
        </div>

        <AnimSection delay={0.2}>
          <div className="mt-20 rounded-[30px] border border-border bg-card p-8 shadow-[0_24px_60px_rgba(109,84,44,0.09)]">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">
                Prestations cles
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {keyFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 rounded-[22px] border border-border bg-background/80 px-4 py-4 text-sm text-muted-foreground"
                >
                  <feature.icon className="shrink-0 text-primary" size={18} />
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimSection>
      </div>
    </div>
  );
}
