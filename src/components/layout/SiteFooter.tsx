import { Building2, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { siteInfo } from "../../lib/site";

const footerHighlights = [
  {
    icon: Sparkles,
    title: "Typologies",
    value: siteInfo.typologies,
  },
  {
    icon: ShieldCheck,
    title: "Infrastructure",
    value: siteInfo.parking,
  },
  {
    icon: Building2,
    title: "Lifestyle",
    value: "Salle de sport, sauna, douche et duplex piscine au dernier etage",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: siteInfo.location,
  },
] as const;

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/25">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,oklch(0.76_0.13_72/0.14),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <img
                alt={siteInfo.promoter}
                className="h-14 w-14 object-contain"
                src={siteInfo.logoUrl}
              />
              <div>
                <p className="font-serif text-2xl font-bold text-foreground">{siteInfo.promoter}</p>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  {siteInfo.residence} • {siteInfo.location}
                </p>
              </div>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {siteInfo.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
                to="/contact"
              >
                Prendre contact
              </Link>
              <Link
                className="inline-flex items-center justify-center border border-border px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                to="/projets"
              >
                Voir la promotion
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {footerHighlights.map((item) => (
              <div key={item.title} className="border border-border bg-card p-5">
                <item.icon className="mb-4 text-primary" size={18} />
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-xs uppercase tracking-[0.24em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            {siteInfo.promoter} • {siteInfo.residence}
          </p>
          <p>© 2026 {siteInfo.promoter}. Tous droits reserves.</p>
        </div>
      </div>
    </footer>
  );
}
