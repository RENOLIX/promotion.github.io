import { motion } from "motion/react";
import {
  AirVent,
  ArrowRight,
  ArrowUpDown,
  Bath,
  Building2,
  CarFront,
  ChefHat,
  KeyRound,
  MapPin,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { siteInfo } from "../../lib/site";

const visuals = [
  "https://images.unsplash.com/photo-1701158662878-ca7c70d87504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  "https://images.unsplash.com/photo-1758448617677-2f8bebc56d9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  "https://images.unsplash.com/photo-1764101498799-802446f744d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  "https://images.unsplash.com/photo-1763241178029-85a7c05b6108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  "https://images.unsplash.com/photo-1651009793956-6684bba370f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  "https://images.unsplash.com/photo-1776362355123-ca966d36e29c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
];

const featureItems = [
  { icon: ChefHat, label: "Cuisine équipée" },
  { icon: Bath, label: "Salle de bain moderne" },
  { icon: Smartphone, label: "Domotique" },
  { icon: ArrowUpDown, label: "Ascenseurs" },
  { icon: CarFront, label: "Parking sous-sol" },
  { icon: ShieldCheck, label: "Sécurité 24/24" },
  { icon: KeyRound, label: "Gestion de copropriété" },
  { icon: AirVent, label: "Chauffage et climatisation centralisés" },
];

export default function ProjetsPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="relative h-64 overflow-hidden">
        <img
          alt={siteInfo.residence}
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1663191703641-f1150919746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs uppercase tracking-[0.35em] text-primary">
              Une seule signature
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h1 className="text-center font-serif text-4xl font-bold text-foreground md:text-6xl">
            {siteInfo.residence}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">
                La promotion
              </span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              Un art de vivre
              <br />
              <span className="italic text-primary">haut standing</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {siteInfo.description}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {siteInfo.longDescription}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Building2, title: "Configuration", value: siteInfo.typologies },
                { icon: Sparkles, title: "Surface", value: siteInfo.surface },
                { icon: ShieldCheck, title: "Statut", value: siteInfo.status },
                { icon: MapPin, title: "Emplacement", value: siteInfo.location },
              ].map((item) => (
                <div key={item.title} className="border border-border bg-card p-5">
                  <item.icon className="mb-4 text-primary" size={18} />
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    {item.title}
                  </p>
                  <p className="mt-2 font-serif text-2xl text-foreground">{item.value}</p>
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
              alt="Intérieur luxe"
              className="h-[560px] w-full object-cover"
              src="https://images.unsplash.com/photo-1776362355123-ca966d36e29c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
            />
            <div className="border-t border-border px-6 py-6">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Signature</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Une lecture contemporaine du luxe résidentiel à Alger, pensée pour une clientèle
                exigeante en quête de confort, d'image et de qualité durable.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <div className="mb-10 text-center">
            <p className="section-script-title">Ambiances</p>
            <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.34em] text-foreground md:text-5xl">
              INTÉRIEURS & PRESTATIONS
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visuals.map((image, index) => (
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

        <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">
                Prestations & finitions
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {featureItems.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 border border-border/70 bg-background/45 px-4 py-4 text-sm text-muted-foreground"
                >
                  <feature.icon className="shrink-0 text-primary" size={18} />
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs uppercase tracking-[0.35em] text-primary">
                Emplacement stratégique
              </span>
            </div>
            <div className="space-y-4">
              {siteInfo.nearby.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-1 size-2 rounded-full bg-primary" />
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
