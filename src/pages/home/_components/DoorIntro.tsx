import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { siteInfo } from "../../../lib/site";

export default function DoorIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"doors" | "zoom" | "done">("doors");

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("zoom"), 1700);
    const t2 = window.setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 5200);

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
        transition={phase === "zoom" ? { duration: 1.25, delay: 1.7, ease: "easeInOut" } : {}}
      >
        <motion.div
          animate={phase !== "doors" ? { x: "-100%" } : { x: 0 }}
          className="relative h-full w-1/2 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.06 0.008 240) 0%, oklch(0.12 0.015 240) 100%)",
          }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 flex flex-col justify-center gap-6 px-6 md:px-8">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-sm border border-[oklch(0.76_0.13_72/20%)]"
                style={{ height: i === 1 || i === 2 ? "28%" : "12%" }}
              />
            ))}
          </div>
          <div className="absolute right-3 top-1/2 h-16 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-primary/60 via-primary to-primary/60" />
          <div className="absolute inset-y-0 left-0 right-10 flex items-center justify-center md:right-14">
            <motion.div
              animate={{ opacity: 1 }}
              className="text-center"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="font-serif text-lg font-semibold tracking-[0.3em] text-primary md:text-3xl md:tracking-[0.36em]">
                EL
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
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 flex flex-col justify-center gap-6 px-6 md:px-8">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-sm border border-[oklch(0.76_0.13_72/20%)]"
                style={{ height: i === 1 || i === 2 ? "28%" : "12%" }}
              />
            ))}
          </div>
          <div className="absolute left-3 top-1/2 h-16 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-primary/60 via-primary to-primary/60" />
          <div className="absolute inset-y-0 left-10 right-0 flex items-center justify-center md:left-14">
            <motion.div
              animate={{ opacity: 1 }}
              className="text-center"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="font-serif text-lg font-semibold tracking-[0.14em] text-primary md:text-3xl md:tracking-[0.22em]">
                AZZALI
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary to-transparent" />

        <motion.div
          animate={phase !== "doors" ? { scale: 1 } : { scale: 1.28 }}
          className="absolute inset-0 -z-10"
          initial={{ scale: 1.28 }}
          transition={{ duration: 2.4, ease: "easeOut" }}
        >
          <img
            alt={siteInfo.promoter}
            className="h-full w-full object-cover"
            src={`${import.meta.env.BASE_URL}el-azzali/door-intro.jpeg`}
          />
          <div className="absolute inset-0 bg-background/60" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
