import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Building2, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { siteInfo } from "../../lib/site";

const values = [
  {
    icon: Sparkles,
    title: "Standing",
    desc: "Une résidence pensée pour l'élégance, le confort et le raffinement dans chaque détail.",
  },
  {
    icon: Building2,
    title: "Architecture",
    desc: "Des espaces spacieux, une écriture contemporaine et des prestations haut de gamme.",
  },
  {
    icon: MapPin,
    title: "Adresse",
    desc: "Saïd Hamdine, un emplacement stratégique connecté aux pôles essentiels d'Alger.",
  },
  {
    icon: ShieldCheck,
    title: "Service",
    desc: "Gestion de copropriété, sécurité 24/24 et accompagnement signé AMK Hebbache Immobilier.",
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
          alt="À propos"
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
            À Propos
          </h1>
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
              <span className="italic text-primary">à Saïd Hamdine</span>
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              {siteInfo.promoter}, fondée par {siteInfo.founder}, occupe une position
              prééminente dans la promotion immobilière à Alger avec plus de 30 ans
              d'expérience et plusieurs réalisations prestigieuses.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Avec {siteInfo.residence}, le promoteur signe une résidence haut standing de{" "}
              {siteInfo.apartments}, déclinés en {siteInfo.typologies}, au cœur d'un quartier
              recherché pour son accessibilité et son calme.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Chaque espace a été conçu pour offrir une vie luxueuse et contemporaine, avec un
              niveau de finition premium, des équipements modernes et une vraie qualité
              résidentielle au quotidien.
            </p>
          </AnimSection>

          <AnimSection delay={0.2}>
            <div className="relative">
              <img
                alt="Résidence La Renaissance"
                className="aspect-[4/3] w-full object-cover"
                src="https://images.unsplash.com/photo-1604107050756-b5ac1578b0b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900"
              />
              <div className="absolute -bottom-6 -right-6 hidden border border-primary bg-card p-6 md:block">
                <p className="font-serif text-4xl font-bold text-primary">30+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Ans d'expertise
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
              <span className="text-xs uppercase tracking-[0.35em] text-primary">Repères</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="font-serif text-4xl font-bold text-foreground">La Promotion en Chiffres</h2>
          </div>
        </AnimSection>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            { value: "28", label: "Appartements" },
            { value: "F4/F5", label: "Typologies principales" },
            { value: "161 m²", label: "Surface de départ" },
            { value: "24/24", label: "Sécurité et gestion" },
          ].map((item, index) => (
            <AnimSection key={item.label} delay={index * 0.1}>
              <div className="border border-border bg-card p-8 text-center">
                <p className="font-serif text-4xl font-bold text-primary">{item.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  {item.label}
                </p>
              </div>
            </AnimSection>
          ))}
        </div>

        <AnimSection delay={0.2}>
          <div className="mt-20 border border-border bg-card p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">Prestations</span>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {siteInfo.features.map((feature) => (
                <div
                  key={feature}
                  className="border border-border/80 bg-background/50 px-4 py-4 text-sm text-muted-foreground"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </AnimSection>
      </div>
    </div>
  );
}
