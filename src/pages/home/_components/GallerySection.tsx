import { useRef } from "react";
import { motion, useInView } from "motion/react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1758548157747-285c7012db5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    label: "Salon",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1757439402127-b786187f9bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    label: "Cuisine",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1776348065068-476a708a2d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    label: "Chambre",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1651132205872-091b35e72b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    label: "Suite Master",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1776362355123-ca966d36e29c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    label: "Séjour",
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
          <p className="section-script-title">Nos Réalisations</p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Des Intérieurs d'Exception
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
              className={`${img.span} group relative cursor-pointer overflow-hidden border border-border`}
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
