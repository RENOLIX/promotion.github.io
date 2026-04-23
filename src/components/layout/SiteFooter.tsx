import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { siteInfo } from "../../lib/site";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/25">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,oklch(0.76_0.13_72/0.14),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-14 grid gap-8 border border-border bg-card/70 p-8 backdrop-blur-sm lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">
              {siteInfo.promoter}
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              {siteInfo.residence}, une adresse signature pensée pour un art de vivre haut
              standing à Alger.
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
                LR
              </span>
              <div>
                <p className="font-serif text-2xl font-bold text-foreground">{siteInfo.residence}</p>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  {siteInfo.promoter}
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Fondée par {siteInfo.founder}, la signature AMK s'appuie sur plus de 30 ans
              d'expérience en promotion immobilière à Alger et sur plusieurs réalisations
              prestigieuses.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Liens
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <Link className="block transition-colors hover:text-primary" to="/">
                Accueil
              </Link>
              <Link className="block transition-colors hover:text-primary" to="/projets">
                La promotion
              </Link>
              <Link className="block transition-colors hover:text-primary" to="/a-propos">
                À propos
              </Link>
              <Link className="block transition-colors hover:text-primary" to="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Repères clés
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>{siteInfo.location}</p>
              <p>{siteInfo.apartments}</p>
              <p>{siteInfo.typologies}</p>
              <p>{siteInfo.surface}</p>
              <p>{siteInfo.status}</p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Contact direct
            </h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-primary" />
                {siteInfo.fullAddress}
              </p>
              {siteInfo.phones.map((phone) => (
                <p key={phone} className="flex items-start gap-3">
                  <Phone size={15} className="mt-0.5 text-primary" />
                  {phone}
                </p>
              ))}
              <p className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 text-primary" />
                {siteInfo.email}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-xs uppercase tracking-[0.24em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            {siteInfo.residence} • {siteInfo.promoter}
          </p>
          <p>© 2026 {siteInfo.promoter}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
