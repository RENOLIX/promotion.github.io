import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const footerProjects = [
  "Residence Al Maqam",
  "Terrasses de Sidi Yahia",
  "Bois des Arcades Tower",
  "Palais du Telemly",
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/25">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,oklch(0.76_0.13_72/0.14),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-14 grid gap-8 border border-border bg-card/70 p-8 backdrop-blur-sm lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">
              Promotion immobiliere haut de gamme
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Un footer au niveau du reste du site, pense comme une derniere impression de luxe.
            </h2>
          </div>
          <div className="flex items-end justify-start lg:justify-end">
            <Link
              className="inline-flex items-center gap-3 bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
              to="/contact"
            >
              Demander un rappel <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="flex size-12 items-center justify-center border border-primary/50 bg-background font-serif text-xl font-bold text-primary">
                AP
              </span>
              <div>
                <p className="font-serif text-2xl font-bold text-foreground">Alger Premium</p>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Residence & investissement
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Des biens signatures a Alger, une experience digitale premium et un accompagnement
              commercial qui commence des la premiere seconde.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Navigation
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <Link className="block transition-colors hover:text-primary" to="/">
                Accueil
              </Link>
              <Link className="block transition-colors hover:text-primary" to="/projets">
                Projets
              </Link>
              <Link className="block transition-colors hover:text-primary" to="/visite-3d">
                Visite 3D
              </Link>
              <Link className="block transition-colors hover:text-primary" to="/a-propos">
                A propos
              </Link>
              <Link className="block transition-colors hover:text-primary" to="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Portefeuille
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              {footerProjects.map((project) => (
                <p key={project}>{project}</p>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Contact direct
            </h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-primary" />
                18 Rue Didouche Mourad, Alger Centre
              </p>
              <p className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 text-primary" />
                +213 770 000 000
              </p>
              <p className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 text-primary" />
                contact@algerpremium.dz
              </p>
              <p className="flex items-start gap-3">
                <Clock3 size={15} className="mt-0.5 text-primary" />
                Dim - Jeu : 09h00 - 18h00
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-xs uppercase tracking-[0.24em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>Promotion locale premium construite avec React, Vite et Tailwind.</p>
          <p>© 2026 Alger Premium Immobilier. Tous droits reserves.</p>
        </div>
      </div>
    </footer>
  );
}
