import {
  ArrowRight,
  Building2,
  Dumbbell,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";
import { siteInfo } from "../../lib/site";

const footerHighlights = [
  {
    icon: Building2,
    title: "Architecture",
    value: "Immeuble R+11 avec attique et vues ouvertes",
  },
  {
    icon: ShieldCheck,
    title: "Infrastructure",
    value: siteInfo.parking,
  },
  {
    icon: Dumbbell,
    title: "Lifestyle",
    value: "Salle de sport, douche, sauna et duplex piscine",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: siteInfo.location,
  },
] as const;

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[#6f5330]/16 bg-[linear-gradient(180deg,#43311e_0%,#2f2115_100%)] text-[#f4ead9]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,198,106,0.18),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <img
                alt={siteInfo.promoter}
                className="h-20 w-20 object-contain"
                src={siteInfo.logoUrl}
              />
              <div>
                <p className="font-serif text-3xl font-bold text-white">{siteInfo.promoter}</p>
                <p className="text-xs uppercase tracking-[0.32em] text-[#e6d4b4]">
                  {siteInfo.residence} - {siteInfo.location}
                </p>
              </div>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed text-[#efe2cf]/82">
              Une promotion residentielle premium pensee pour un mode de vie elegant, intelligent
              et serein a Draria.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-[22px] border border-white/10 bg-white/6 px-4 py-4 text-sm text-[#f3e8d6]">
                <UserRound size={18} className="mt-0.5 shrink-0 text-primary" />
                <span>Direction generale assuree par {siteInfo.directorGeneral}.</span>
              </div>
              <a
                className="flex items-center gap-3 rounded-[22px] border border-white/10 bg-white/6 px-4 py-4 text-sm text-[#f3e8d6] transition-colors hover:border-primary"
                href={`tel:${siteInfo.phoneHref}`}
              >
                <Phone size={18} className="shrink-0 text-primary" />
                <span>{siteInfo.phone}</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center justify-center gap-3 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
                to="/contact"
              >
                Prendre contact
                <ArrowRight size={16} />
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-3 border border-white/12 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#efe2cf] transition-colors hover:border-primary hover:text-primary"
                to="/projets"
              >
                Explorer la promotion
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-3 text-sm text-[#f0e3d0]/82">
              <Waves size={16} className="text-primary" />
              Dernier etage en attique avec vues panoramiques sur Draria.
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {footerHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm"
              >
                <item.icon className="mb-4 text-primary" size={18} />
                <p className="text-xs uppercase tracking-[0.28em] text-[#d8c39b]">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#f5ecdd]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-[#dbc8ab] md:flex-row md:items-center md:justify-between">
          <p>
            {siteInfo.promoter} - {siteInfo.residence}
          </p>
          <p>© 2026 {siteInfo.promoter}. Tous droits reserves.</p>
          <p>Direction generale : {siteInfo.directorGeneral}</p>
          <p>Developed by SITEMAGIQUE</p>
        </div>
      </div>
    </footer>
  );
}
