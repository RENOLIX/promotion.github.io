import { Link } from "react-router-dom";
import SiteFooter from "../components/layout/SiteFooter";
import SiteHeader from "../components/layout/SiteHeader";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="flex min-h-[70vh] items-center justify-center px-6 pt-28 lg:px-8">
        <div className="max-w-2xl border border-border bg-card p-10 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">404</p>
          <h1 className="mb-5 font-serif text-4xl font-bold text-foreground md:text-6xl">
            Cette page ne mene a aucun appartement.
          </h1>
          <p className="mb-8 leading-relaxed text-muted-foreground">
            Le lien que vous avez suivi n'existe plus ou n'a jamais ete active.
          </p>
          <Link
            className="inline-flex items-center gap-3 bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            to="/"
          >
            Retour a l'accueil
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
