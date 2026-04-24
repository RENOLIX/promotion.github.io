import { motion } from "motion/react";
import {
  AirVent,
  ArrowRight,
  ArrowUpDown,
  BatteryCharging,
  CarFront,
  ChefHat,
  Dumbbell,
  Flame,
  LockKeyhole,
  MapPin,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { residenceFacts, siteInfo } from "../../lib/site";

const visualGrid = [
  `${import.meta.env.BASE_URL}el-azzali/facade-02.jpeg`,
  `${import.meta.env.BASE_URL}el-azzali/atrium-01.jpeg`,
  `${import.meta.env.BASE_URL}el-azzali/hall-01.jpeg`,
  `${import.meta.env.BASE_URL}el-azzali/suite-02.jpeg`,
  `${import.meta.env.BASE_URL}el-azzali/bath-02.jpeg`,
  `${import.meta.env.BASE_URL}el-azzali/lobby-01.jpeg`,
];

const interiorItems = [
  { icon: Smartphone, label: "Système domotique intégré" },
  { icon: AirVent, label: "Chauffage central et climatisation centralisée" },
  { icon: ChefHat, label: "Cuisine équipée par excellence" },
  { icon: LockKeyhole, label: "Serrure d'entrée intelligente" },
  { icon: ArrowUpDown, label: "Fenêtres et porte-fenêtres à commande à distance" },
  { icon: Sparkles, label: "Finitions haut standing dans chaque appartement" },
];

const buildingItems = [
  { icon: CarFront, label: "02 parkings sous-sol et 3 entre-sols" },
  { icon: ShieldCheck, label: "Caméras de surveillance et sécurité renforcée" },
  { icon: Flame, label: "Réseau anti-incendie intégré" },
  { icon: BatteryCharging, label: "Alimentation dédiée aux véhicules électriques" },
  { icon: Dumbbell, label: "Salle de sport au sein de la résidence" },
  { icon: Sparkles, label: "Douche, sauna et attique panoramique" },
];

export default function ProjetsPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="relative h-64 overflow-hidden">
        <img
          alt={siteInfo.promoter}
          className="h-full w-full object-cover"
          src={`${import.meta.env.BASE_URL}el-azzali/facade-02.jpeg`}
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="rounded-[28px] bg-black/42 px-8 py-6 text-center shadow-[0_24px_60px_rgba(0,0,0,0.34)] backdrop-blur-[3px]">
            <div className="mb-3 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">
                La promotion
              </span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h1 className="text-center font-serif text-4xl font-bold text-white md:text-6xl">
              {siteInfo.promoterShort} - {siteInfo.residence}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">
                Adresse signature
              </span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              Une promotion pensée
              <br />
              <span className="italic text-primary">pour Draria</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {siteInfo.description}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {siteInfo.longDescription}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {residenceFacts.map((item) => (
                <div key={item.title} className="border border-border bg-card p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    {item.title}
                  </p>
                  <p className="mt-3 font-serif text-2xl leading-tight text-foreground">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="overflow-hidden rounded-[30px] border border-white/12 bg-card"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <img
              alt="Atrium EL AZZALI"
              className="h-[560px] w-full object-cover"
              src={`${import.meta.env.BASE_URL}el-azzali/atrium-01.jpeg`}
            />
            <div className="border-t border-border px-6 py-6">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Belda, Draria</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Une écriture architecturale moderne, des circulations premium et un dernier
                niveau pensé comme une expérience panoramique à part entière.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <div className="mb-10 text-center">
            <p className="section-script-title">Regards</p>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.34em] text-foreground md:text-5xl">
              ARCHITECTURE & ATMOSPHÈRES
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visualGrid.map((image, index) => (
              <motion.div
                key={image}
                animate={{ opacity: 1, y: 0 }}
                className="overflow-hidden rounded-[26px] border border-white/12 bg-card"
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <img alt={`Visuel ${index + 1}`} className="h-72 w-full object-cover" src={image} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <div className="border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">
                Dans les appartements
              </span>
            </div>
            <div className="grid gap-3">
              {interiorItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 border border-border/70 bg-background/45 px-4 py-4 text-sm text-muted-foreground"
                >
                  <item.icon className="shrink-0 text-primary" size={18} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">
                Résidence & infrastructure
              </span>
            </div>
            <div className="grid gap-3">
              {buildingItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 border border-border/70 bg-background/45 px-4 py-4 text-sm text-muted-foreground"
                >
                  <item.icon className="shrink-0 text-primary" size={18} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">
                Typologies disponibles
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {siteInfo.typologyDetails.map((item) => (
                <span
                  key={item}
                  className="border border-border px-4 py-3 text-sm uppercase tracking-[0.2em] text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">
                Implantation
              </span>
            </div>
            <div className="space-y-4">
              {siteInfo.nearby.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <MapPin className="mt-0.5 shrink-0 text-primary" size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Besoin d'informations ?
              </p>
              <Link
                className="mt-4 inline-flex items-center gap-3 bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
                to="/contact"
              >
                Prendre contact
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
