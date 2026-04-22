import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function DoorIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"doors" | "zoom" | "done">("doors");

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("zoom"), 1400);
    const t2 = window.setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 3000);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        key="door-overlay"
        animate={phase === "zoom" ? { opacity: 0 } : { opacity: 1 }}
        className="fixed inset-0 z-[100] flex"
        initial={{ opacity: 1 }}
        transition={phase === "zoom" ? { duration: 1.2, delay: 0.8, ease: "easeInOut" } : {}}
      >
        <motion.div
          animate={phase !== "doors" ? { x: "-100%" } : { x: 0 }}
          className="relative h-full w-1/2 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.06 0.008 240) 0%, oklch(0.12 0.015 240) 100%)",
          }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 flex flex-col justify-center gap-6 px-8">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-sm border border-[oklch(0.76_0.13_72/20%)]"
                style={{ height: i === 1 || i === 2 ? "28%" : "12%" }}
              />
            ))}
          </div>
          <div className="absolute right-3 top-1/2 h-16 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-primary/60 via-primary to-primary/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ opacity: 1 }}
              className="text-center"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="font-serif text-3xl font-bold tracking-widest text-primary md:text-5xl">
                ALGER
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          animate={phase !== "doors" ? { x: "100%" } : { x: 0 }}
          className="relative h-full w-1/2 overflow-hidden"
          style={{
            background:
              "linear-gradient(225deg, oklch(0.06 0.008 240) 0%, oklch(0.12 0.015 240) 100%)",
          }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 flex flex-col justify-center gap-6 px-8">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-sm border border-[oklch(0.76_0.13_72/20%)]"
                style={{ height: i === 1 || i === 2 ? "28%" : "12%" }}
              />
            ))}
          </div>
          <div className="absolute left-3 top-1/2 h-16 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-primary/60 via-primary to-primary/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ opacity: 1 }}
              className="text-center"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="font-serif text-3xl font-bold tracking-widest text-primary md:text-5xl">
                PREMIUM
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary to-transparent" />

        <motion.div
          animate={phase !== "doors" ? { scale: 1 } : { scale: 1.3 }}
          className="absolute inset-0 -z-10"
          initial={{ scale: 1.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img
            alt="Appartement de luxe"
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1920&q=80"
          />
          <div className="absolute inset-0 bg-background/60" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
