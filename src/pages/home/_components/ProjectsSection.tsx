import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import { useMobile } from "../../../hooks/use-mobile";
import { lifestyleCollections } from "../../../lib/site";

function getOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;
  const half = Math.floor(total / 2);

  if (offset > half) offset -= total;
  if (offset < -half) offset += total;

  return offset;
}

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const isMobile = useMobile();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % lifestyleCollections.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    setPhotoIndex(0);
  }, [activeIndex]);

  useEffect(() => {
    const activeCollection = lifestyleCollections[activeIndex];

    const interval = window.setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % activeCollection.images.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, [activeIndex]);

  const activeItem = lifestyleCollections[activeIndex];
  const activeImage = activeItem.images[photoIndex];

  const cards = useMemo(
    () =>
      lifestyleCollections.map((item, index) => ({
        ...item,
        offset: getOffset(index, activeIndex, lifestyleCollections.length),
      })),
    [activeIndex],
  );

  const goNext = () => setActiveIndex((prev) => (prev + 1) % lifestyleCollections.length);
  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + lifestyleCollections.length) % lifestyleCollections.length);

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="section-script-title">Un Style de Vie</p>
          <h2 className="mt-7 text-3xl font-semibold uppercase tracking-[0.34em] text-foreground md:mt-8 md:text-5xl">
            LUXUEUX ET MODERNE
          </h2>
        </div>

        {isMobile ? (
          <div className="mx-auto max-w-xl">
            <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem.label}-${photoIndex}`}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative"
                  exit={{ opacity: 0, x: -40 }}
                  initial={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <img
                    alt={activeItem.label}
                    className="h-[500px] w-full object-cover"
                    src={activeImage}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/18 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs uppercase tracking-[0.34em] text-primary">
                      {activeItem.kicker}
                    </span>
                    <h3 className="mt-3 font-serif text-4xl font-bold text-white">
                      {activeItem.label}
                    </h3>

                    <div className="mt-5 grid grid-cols-4 gap-2">
                      {activeItem.images.map((image, index) => (
                        <button
                          key={image}
                          className={`overflow-hidden rounded-2xl border ${
                            photoIndex === index
                              ? "border-primary"
                              : "border-white/12 hover:border-primary/60"
                          }`}
                          onClick={() => setPhotoIndex(index)}
                          type="button"
                        >
                          <img
                            alt={`${activeItem.label} ${index + 1}`}
                            className="h-16 w-full object-cover"
                            src={image}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white/80 transition-colors hover:border-primary hover:text-primary"
                onClick={goPrev}
                type="button"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-2">
                {lifestyleCollections.map((item, index) => (
                  <button
                    key={item.label}
                    aria-label={item.label}
                    className={`h-2.5 rounded-full transition-all ${
                      activeIndex === index ? "w-10 bg-primary" : "w-2.5 bg-white/25"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    type="button"
                  />
                ))}
              </div>

              <button
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white/80 transition-colors hover:border-primary hover:text-primary"
                onClick={goNext}
                type="button"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        ) : (
          <div className="relative mx-auto h-[660px] max-w-6xl overflow-hidden">
            {cards.map((item, index) => {
              const isCenter = item.offset === 0;
              const isSide = Math.abs(item.offset) === 1;
              const hidden = Math.abs(item.offset) > 1;
              const displayedImage = isCenter ? item.images[photoIndex] : item.images[0];

              const transform =
                item.offset === 0
                  ? "translate(-50%, 0) scale(1)"
                  : item.offset === -1
                    ? "translate(calc(-50% - 25rem), 2.6rem) scale(0.84)"
                    : item.offset === 1
                      ? "translate(calc(-50% + 25rem), 2.6rem) scale(0.84)"
                      : item.offset < 0
                        ? "translate(calc(-50% - 42rem), 4rem) scale(0.72)"
                        : "translate(calc(-50% + 42rem), 4rem) scale(0.72)";

              return (
                <motion.div
                  key={item.label}
                  animate={{
                    opacity: hidden ? 0 : isCenter ? 1 : 0.6,
                    filter: isCenter ? "blur(0px)" : isSide ? "blur(2px)" : "blur(8px)",
                  }}
                  className="absolute left-1/2 top-0 h-[560px] w-[440px] overflow-hidden rounded-[32px] border border-white/12 bg-card text-left transition-all duration-700 ease-out"
                  initial={false}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    transform,
                    zIndex: isCenter ? 30 : isSide ? 20 : 10,
                    pointerEvents: hidden ? "none" : "auto",
                  }}
                >
                  <AnimatePresence mode={isCenter ? "wait" : "sync"}>
                    <motion.img
                      key={`${item.label}-${displayedImage}`}
                      alt={item.label}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full w-full object-cover"
                      exit={isCenter ? { opacity: 0 } : undefined}
                      initial={isCenter ? { opacity: 0, scale: 1.03 } : false}
                      src={displayedImage}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    />
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/12 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-xs uppercase tracking-[0.34em] text-primary">
                      {item.kicker}
                    </span>
                    <h3 className="mt-4 font-serif text-5xl font-bold text-white">{item.label}</h3>

                    {isCenter ? (
                      <div className="mt-5 flex items-center gap-3">
                        <div className="flex flex-1 gap-2">
                          {item.images.map((image, imageIndex) => (
                            <button
                              key={image}
                              className={`overflow-hidden rounded-2xl border ${
                                photoIndex === imageIndex
                                  ? "border-primary"
                                  : "border-white/12 hover:border-primary/60"
                              }`}
                              onClick={(event) => {
                                event.stopPropagation();
                                setPhotoIndex(imageIndex);
                              }}
                              type="button"
                            >
                              <img
                                alt={`${item.label} ${imageIndex + 1}`}
                                className="h-16 w-20 object-cover"
                                src={image}
                              />
                            </button>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-white/12 bg-black/25 px-3 py-2 text-xs uppercase tracking-[0.24em] text-white/70">
                          <Images size={14} />
                          {item.images.length} vues
                        </div>
                      </div>
                    ) : (
                      <p className="mt-4 text-xs uppercase tracking-[0.28em] text-white/65">
                        {item.images.length} photos
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}

            <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-background to-transparent" />

            <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-4">
              <button
                className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white/80 transition-colors hover:border-primary hover:text-primary"
                onClick={goPrev}
                type="button"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-3">
                {lifestyleCollections.map((item, index) => (
                  <button
                    key={item.label}
                    className={`pointer-events-auto text-xs uppercase tracking-[0.28em] transition-colors ${
                      activeIndex === index ? "text-primary" : "text-white/45"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    type="button"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <button
                className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-white/80 transition-colors hover:border-primary hover:text-primary"
                onClick={goNext}
                type="button"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
