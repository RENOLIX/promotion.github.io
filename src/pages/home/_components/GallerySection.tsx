import { useRef } from "react";
import { motion, useInView } from "motion/react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    label: "Salon",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
    label: "Cuisine",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    label: "Chambre",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    label: "Suite Master",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    label: "Sejour",
    span: "md:col-span-2 md:row-span-1",
  },
];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
              Galerie
            </span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Des Interieurs d'Exception
          </h2>
        </motion.div>

        <motion.div
          animate={inView ? { opacity: 1 } : {}}
          className="grid auto-rows-[200px] grid-cols-1 gap-3 md:h-[600px] md:grid-cols-3 md:grid-rows-3"
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.label}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              className={`${img.span} group relative overflow-hidden cursor-pointer border border-border`}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.1 * index + 0.3 }}
            >
              <img
                alt={img.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={img.src}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-sm font-medium uppercase tracking-wider text-foreground">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
