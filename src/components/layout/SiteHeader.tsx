import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";

const links = [
  { label: "Accueil", to: "/" },
  { label: "Projets", to: "/projets" },
  { label: "Visite 3D", to: "/visite-3d" },
  { label: "A propos", to: "/a-propos" },
  { label: "Contact", to: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link className="flex items-center gap-4" to="/">
          <span className="flex size-11 items-center justify-center border border-primary/50 bg-secondary font-serif text-lg font-bold text-primary">
            AP
          </span>
          <div className="hidden sm:block">
            <p className="font-serif text-lg font-bold text-foreground">Alger Premium</p>
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Immobilier Signature
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary",
                  isActive && "text-primary",
                )
              }
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            className="inline-flex items-center gap-3 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
            to="/contact"
          >
            Reserver une visite
          </Link>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex size-11 items-center justify-center border border-border text-foreground lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div className={cn("border-t border-border/70 bg-background/95 lg:hidden", !open && "hidden")}>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 lg:px-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) =>
                cn(
                  "px-2 py-3 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary",
                  isActive && "text-primary",
                )
              }
              to={link.to}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            className="mt-2 inline-flex items-center justify-center gap-3 bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground"
            to="/contact"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </header>
  );
}
