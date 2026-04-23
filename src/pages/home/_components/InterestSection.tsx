import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export default function InterestSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!form.name || !form.phone || !form.email || !form.message) {
      toast.error("Veuillez remplir tous les champs demandés.");
      return;
    }

    if (!form.consent) {
      toast.error("Veuillez accepter le consentement avant l'envoi.");
      return;
    }

    toast.success("Votre intérêt a bien été enregistré.");
    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
      consent: false,
    });
  };

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-card shadow-[0_28px_80px_rgba(0,0,0,0.34)]">
          <img
            alt="Exprimez votre intérêt"
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1758548157747-285c7012db5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
          />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-y-0 left-0 w-[18%] border-r border-white/10 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-[18%] border-l border-white/10 bg-gradient-to-l from-black/80 via-black/45 to-transparent" />
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/60 to-transparent lg:block" />

          <div className="relative z-10 grid gap-10 px-6 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-14">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-primary">
                Prenons contact
              </p>
              <h2 className="hidden whitespace-pre-line font-serif text-5xl font-bold leading-[0.95] text-white lg:block">
                EXPRIMEZ{"\n"}VOTRE INTÉRÊT
              </h2>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-black/35 p-6 backdrop-blur-md lg:p-8">
              <h2 className="mb-6 whitespace-pre-line font-serif text-3xl font-bold leading-[0.95] text-white lg:hidden">
                EXPRIMEZ{"\n"}VOTRE INTÉRÊT
              </h2>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/70">
                    NOM
                  </label>
                  <input
                    className="w-full rounded-none border border-white/15 bg-white/8 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-primary"
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    placeholder="Votre nom complet"
                    type="text"
                    value={form.name}
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/70">
                      TÉLÉPHONE
                    </label>
                    <input
                      className="w-full rounded-none border border-white/15 bg-white/8 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-primary"
                      onChange={(event) => setForm({ ...form, phone: event.target.value })}
                      placeholder="+213 ..."
                      type="tel"
                      value={form.phone}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/70">
                      EMAIL
                    </label>
                    <input
                      className="w-full rounded-none border border-white/15 bg-white/8 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-primary"
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      placeholder="email@exemple.com"
                      type="email"
                      value={form.email}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/70">
                    MESSAGE
                  </label>
                  <textarea
                    className="min-h-36 w-full resize-none rounded-none border border-white/15 bg-white/8 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-primary"
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    placeholder="Décrivez votre demande..."
                    rows={6}
                    value={form.message}
                  />
                </div>

                <label className="flex items-start gap-3 text-sm leading-relaxed text-white/75">
                  <input
                    checked={form.consent}
                    className="mt-1 size-4 border border-white/20 accent-[#F7C66A]"
                    onChange={(event) => setForm({ ...form, consent: event.target.checked })}
                    type="checkbox"
                  />
                  <span>
                    CONSENTEMENT : J'accepte que mes données soient utilisées pour le traitement
                    de ma demande en conformité avec la loi 18-07 révisée et compléter par la loi
                    11-25.
                  </span>
                </label>

                <button
                  className="inline-flex items-center justify-center bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground transition-colors hover:bg-primary/90"
                  type="submit"
                >
                  PRENDRE CONTACT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
