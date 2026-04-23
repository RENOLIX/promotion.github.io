import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { siteInfo } from "../../lib/site";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    if (!form.consent) {
      toast.error("Veuillez accepter le consentement avant l'envoi.");
      return;
    }

    window.setTimeout(() => {
      setSent(true);
      toast.success("Votre demande a bien été envoyée.");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="relative h-52 overflow-hidden">
        <img
          alt="Contact"
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1588142842388-9844c5814bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs uppercase tracking-[0.35em] text-primary">
              Parlons de votre projet
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h1 className="text-center font-serif text-4xl font-bold text-foreground md:text-6xl">
            Contact
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="mb-2 font-serif text-2xl font-bold text-foreground">
                Une équipe vous répond
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Contactez {siteInfo.promoter} pour découvrir {siteInfo.residence}, connaître les
                disponibilités et être accompagné dans votre projet d'acquisition.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  title: "Adresse",
                  info: siteInfo.fullAddress,
                },
                {
                  icon: Phone,
                  title: "Téléphone",
                  info: siteInfo.phones.join("\n"),
                },
                {
                  icon: Mail,
                  title: "Email",
                  info: siteInfo.email,
                },
                {
                  icon: MapPin,
                  title: "La promotion",
                  info: `${siteInfo.residence}\n${siteInfo.location}`,
                },
              ].map(({ icon: Icon, title, info }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex size-9 shrink-0 items-center justify-center border border-primary/50">
                    <Icon className="text-primary" size={14} />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-foreground">
                      {title}
                    </p>
                    <p className="whitespace-pre-line text-sm text-muted-foreground">{info}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative h-48 overflow-hidden border border-border">
              <iframe
                className="h-full w-full grayscale"
                loading="lazy"
                src="https://maps.google.com/maps?q=Campagne%20Semmar%20Residence%20El%20Djenane%20Tixeraine%20Birkhadem%20Alger&t=&z=14&ie=UTF8&iwloc=&output=embed"
                title="Localisation AMK Hebbache Immobilier"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[500px] flex-col items-center justify-center border border-primary/40 bg-card p-12 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
              >
                <CheckCircle className="mb-6 text-primary" size={56} />
                <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">
                  Demande envoyée
                </h3>
                <p className="max-w-sm text-muted-foreground">
                  Merci pour votre message. Un conseiller AMK Hebbache Immobilier vous
                  recontactera rapidement.
                </p>
                <button
                  className="mt-8 cursor-pointer border border-border px-6 py-3 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  onClick={() => setSent(false)}
                  type="button"
                >
                  Envoyer une autre demande
                </button>
              </motion.div>
            ) : (
              <motion.form
                animate={{ opacity: 1, y: 0 }}
                className="space-y-5 border border-border bg-card p-8"
                initial={{ opacity: 0, y: 20 }}
                onSubmit={handleSubmit}
              >
                <h3 className="mb-2 font-serif text-xl font-bold text-foreground">
                  Formulaire de Contact
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                      Nom *
                    </label>
                    <input
                      className="w-full border border-border bg-input px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      placeholder="Votre nom"
                      type="text"
                      value={form.name}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                      Téléphone *
                    </label>
                    <input
                      className="w-full border border-border bg-input px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                      onChange={(event) => setForm({ ...form, phone: event.target.value })}
                      placeholder="+213 ..."
                      type="tel"
                      value={form.phone}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                    Email *
                  </label>
                  <input
                    className="w-full border border-border bg-input px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    placeholder="email@exemple.com"
                    type="email"
                    value={form.email}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                    Message *
                  </label>
                  <textarea
                    className="w-full resize-none border border-border bg-input px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    placeholder="Décrivez votre demande..."
                    rows={5}
                    value={form.message}
                  />
                </div>

                <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <input
                    checked={form.consent}
                    className="mt-1 size-4 accent-[#F7C66A]"
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
                  className="group flex w-full items-center justify-center gap-3 bg-primary py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
                  type="submit"
                >
                  <Send size={15} />
                  Prendre contact
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
