import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { galleryImages } from "../../../lib/site";

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
          <p className="section-script-title">Signatures</p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            EL AZZALI EN IMAGES
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
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/70 to-transparent p-4">
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
