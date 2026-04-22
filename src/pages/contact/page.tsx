import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    project: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Veuillez remplir les champs obligatoires.");
      return;
    }

    window.setTimeout(() => {
      setSent(true);
      toast.success("Votre message a bien ete envoye !");
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
                Prenez Rendez-Vous
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Notre equipe commerciale est disponible pour vous accompagner dans votre
                projet d'acquisition. Contactez-nous pour une consultation personnalisee.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  title: "Showroom",
                  info: "18 Rue Didouche Mourad\nAlger Centre, 16000",
                },
                {
                  icon: Phone,
                  title: "Telephone",
                  info: "+213 770 000 000\n+213 21 000 000",
                },
                {
                  icon: Mail,
                  title: "Email",
                  info: "contact@algerpremium.dz\nvente@algerpremium.dz",
                },
                {
                  icon: Clock,
                  title: "Horaires",
                  info: "Dim - Jeu : 09h00 - 18h00\nSam : 09h00 - 13h00",
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.3839226041944!2d3.0453167!3d36.7525127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb26977b85233%3A0x93df45f31aeef3de!2sRue%20Didouche%20Mourad%2C%20Alger!5e0!3m2!1sfr!2sdz!4v1716000000000!5m2!1sfr!2sdz"
                title="Localisation Alger Premium"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[500px] h-full flex-col items-center justify-center border border-primary/40 bg-card p-12 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
              >
                <CheckCircle className="mb-6 text-primary" size={56} />
                <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">
                  Message Envoye !
                </h3>
                <p className="max-w-sm text-muted-foreground">
                  Merci pour votre message. Notre equipe vous contactera dans les 24 heures
                  ouvrables.
                </p>
                <button
                  className="mt-8 cursor-pointer border border-border px-6 py-3 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  onClick={() => setSent(false)}
                  type="button"
                >
                  Envoyer un autre message
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
                      Nom complet *
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
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                      Telephone
                    </label>
                    <input
                      className="w-full border border-border bg-input px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                      onChange={(event) => setForm({ ...form, phone: event.target.value })}
                      placeholder="+213 7XX XXX XXX"
                      type="tel"
                      value={form.phone}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                      Projet Interesse
                    </label>
                    <select
                      className="w-full cursor-pointer border border-border bg-input px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none"
                      onChange={(event) => setForm({ ...form, project: event.target.value })}
                      value={form.project}
                    >
                      <option value="">Selectionner…</option>
                      <option>Residence Al Maqam</option>
                      <option>Les Terrasses de Sidi Yahia</option>
                      <option>Bois des Arcades Tower</option>
                      <option>Collines de Cheraga</option>
                      <option>Marina Bay Alger</option>
                      <option>Palais du Telemly</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                    Objet
                  </label>
                  <input
                    className="w-full border border-border bg-input px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    onChange={(event) => setForm({ ...form, subject: event.target.value })}
                    placeholder="Sujet de votre demande"
                    type="text"
                    value={form.subject}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
                    Message *
                  </label>
                  <textarea
                    className="w-full resize-none border border-border bg-input px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    placeholder="Decrivez votre projet, vos besoins…"
                    rows={5}
                    value={form.message}
                  />
                </div>

                <button
                  className="group flex w-full items-center justify-center gap-3 bg-primary py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
                  type="submit"
                >
                  <Send size={15} />
                  Envoyer le Message
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
