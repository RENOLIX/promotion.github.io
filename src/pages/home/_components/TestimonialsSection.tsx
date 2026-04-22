import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Karim Benzara",
    role: "Investisseur, Hydra",
    text: "Un niveau de prestations inegale a Alger. Les finitions sont dignes des plus grands promoteurs europeens. Je recommande sans hesitation.",
    rating: 5,
  },
  {
    name: "Lina Touati",
    role: "Directrice Commerciale",
    text: "La visite 3D m'a permis de choisir mon appartement depuis Dubai. A la livraison, c'etait exactement comme sur la visite virtuelle. Remarquable.",
    rating: 5,
  },
  {
    name: "Ahmed Messaoud",
    role: "Architecte, Alger",
    text: "En tant qu'architecte, je suis difficile a impressionner. Alger Premium a reussi a creer quelque chose de vraiment exceptionnel dans notre ville.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-secondary/20 py-28">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
              Temoignages
            </span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Ils Nous Font Confiance
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="border border-border bg-card p-8 transition-colors hover:border-primary/40"
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Quote className="mb-5 text-primary/40" size={28} />
              <p className="mb-6 italic leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, indexRating) => (
                  <div key={indexRating} className="size-3 rounded-full bg-primary" />
                ))}
              </div>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-xs tracking-wider text-muted-foreground">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          animate={inView ? { opacity: 1 } : {}}
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Link
            className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
            to="/contact"
          >
            Prendre Rendez-vous
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
