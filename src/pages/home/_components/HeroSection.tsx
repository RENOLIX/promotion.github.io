import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { heroStats, siteInfo } from "../../../lib/site";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt={siteInfo.promoter}
          className="h-full w-full object-cover"
          src={`${import.meta.env.BASE_URL}el-azzali/hero.jpeg`}
        />
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.76 0.13 72) 1px, transparent 1px), linear-gradient(90deg, oklch(0.76 0.13 72) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-7xl items-start px-6 pb-[22rem] pt-32 md:pb-56 lg:px-8">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl rounded-[32px] bg-black/42 px-6 py-7 shadow-[0_24px_60px_rgba(0,0,0,0.36)] backdrop-blur-[3px] md:px-8 md:py-8 lg:max-w-4xl"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.42, delay: 0.08 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-primary">
              Draria - Lotissement Belda
            </span>
          </div>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-serif text-5xl leading-[1.05] text-balance text-white md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 22 }}
            transition={{ duration: 0.48, delay: 0.14 }}
          >
            L'Art de
            <br />
            <span className="italic text-primary">Vivre</span>
            <br />a Draria
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 max-w-2xl text-lg leading-relaxed text-white/82"
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.42, delay: 0.2 }}
          >
            {siteInfo.heroDescription}
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-4 pb-2"
            initial={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.36, delay: 0.26 }}
          >
            <Link
              className="group flex items-center gap-3 bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90"
              to="/projets"
            >
              Decouvrir
              <ArrowRight
                className="transition-transform group-hover:translate-x-1"
                size={16}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ opacity: 1 }}
        className="absolute bottom-52 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 md:bottom-32"
        initial={{ opacity: 0 }}
        transition={{ delay: 0.42, duration: 0.45 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/72">Defiler</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          className="h-10 w-px bg-gradient-to-b from-primary to-transparent"
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-[-10px] left-0 right-0 translate-y-3 border-t border-black/10 bg-background/88 backdrop-blur-md md:bottom-0 md:translate-y-0"
        initial={{ opacity: 0, y: 26 }}
        transition={{ duration: 0.45, delay: 0.34 }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {heroStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`hero-stat-card px-5 py-5 text-center md:px-8 md:py-6 ${
                index % 2 === 0 ? "border-r border-black/6" : ""
              } ${index < 2 ? "border-b border-black/6 md:border-b-0" : ""} ${
                index !== heroStats.length - 1 ? "md:border-r md:border-black/6" : ""
              }`}
            >
              <p className="font-serif text-2xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
