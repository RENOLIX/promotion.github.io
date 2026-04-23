import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMobile } from "../../../hooks/use-mobile";

const lifestyleCards = [
  {
    label: "CUISINE",
    image:
      "https://images.unsplash.com/photo-1757439402127-b786187f9bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    label: "SÉJOUR",
    image:
      "https://images.unsplash.com/photo-1776362355123-ca966d36e29c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    label: "SUITE",
    image:
      "https://images.unsplash.com/photo-1651132205872-091b35e72b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
  {
    label: "PISCINE",
    image:
      "https://images.unsplash.com/photo-1758448617677-2f8bebc56d9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
  },
  {
    label: "SALLE D'EAU",
    image:
      "https://images.unsplash.com/photo-1776348065068-476a708a2d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
  },
];

function getOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;
  const half = Math.floor(total / 2);

  if (offset > half) offset -= total;
  if (offset < -half) offset += total;

  return offset;
}

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const isMobile = useMobile();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % lifestyleCards.length);
    }, 4800);

    return () => window.clearInterval(interval);
  }, []);

  const activeItem = lifestyleCards[activeIndex];

  const cards = useMemo(
    () =>
      lifestyleCards.map((item, index) => ({
        ...item,
        offset: getOffset(index, activeIndex, lifestyleCards.length),
      })),
    [activeIndex],
  );

  const goNext = () => setActiveIndex((prev) => (prev + 1) % lifestyleCards.length);
  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + lifestyleCards.length) % lifestyleCards.length);

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="section-script-title">Un Style de Vie</p>
          <h2 className="mt-4 text-3xl font-semibold uppercase tracking-[0.34em] text-foreground md:text-5xl">
            LUXUEUX ET MODERNE
          </h2>
        </div>

        {isMobile ? (
          <div className="mx-auto max-w-xl">
            <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.label}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative"
                  exit={{ opacity: 0, x: -40 }}
                  initial={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <img
                    alt={activeItem.label}
                    className="h-[460px] w-full object-cover"
                    src={activeItem.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs uppercase tracking-[0.34em] text-primary">
                      Un style de vie
                    </span>
                    <h3 className="mt-3 font-serif text-4xl font-bold text-white">
                      {activeItem.label}
                    </h3>
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
                {lifestyleCards.map((item, index) => (
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
          <div className="relative mx-auto h-[600px] max-w-6xl overflow-hidden">
            {cards.map((item, index) => {
              const isCenter = item.offset === 0;
              const isSide = Math.abs(item.offset) === 1;
              const hidden = Math.abs(item.offset) > 1;

              const transform =
                item.offset === 0
                  ? "translate(-50%, 0) scale(1)"
                  : item.offset === -1
                    ? "translate(calc(-50% - 24rem), 2.2rem) scale(0.84)"
                    : item.offset === 1
                      ? "translate(calc(-50% + 24rem), 2.2rem) scale(0.84)"
                      : item.offset < 0
                        ? "translate(calc(-50% - 40rem), 4rem) scale(0.72)"
                        : "translate(calc(-50% + 40rem), 4rem) scale(0.72)";

              return (
                <button
                  key={item.label}
                  className="absolute left-1/2 top-0 h-[520px] w-[430px] overflow-hidden rounded-[32px] border border-white/12 bg-card text-left transition-all duration-700 ease-out"
                  onClick={() => setActiveIndex(index)}
                  style={{
                    transform,
                    opacity: hidden ? 0 : isCenter ? 1 : 0.55,
                    filter: isCenter ? "blur(0px)" : isSide ? "blur(2px)" : "blur(8px)",
                    zIndex: isCenter ? 30 : isSide ? 20 : 10,
                    pointerEvents: hidden ? "none" : "auto",
                  }}
                  type="button"
                >
                  <img alt={item.label} className="h-full w-full object-cover" src={item.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-xs uppercase tracking-[0.34em] text-primary">
                      Intérieur signature
                    </span>
                    <h3 className="mt-4 font-serif text-5xl font-bold text-white">
                      {item.label}
                    </h3>
                  </div>
                </button>
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
                {lifestyleCards.map((item, index) => (
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
