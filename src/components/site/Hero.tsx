import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative border-b border-border pt-28 sm:pt-32">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-bronze sm:text-xs">
            {t.hero.role}
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {t.hero.name.split(" ")[0]}
            <br />
            {t.hero.name.split(" ")[1] || ""}
          </h1>
          <p className="mb-8 font-mono text-[10px] uppercase tracking-wider text-text-muted sm:text-sm">
            {t.hero.disciplines}
          </p>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {t.hero.descriptor}
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-bronze px-7 py-4 text-sm font-bold uppercase tracking-widest text-background transition-colors hover:bg-bronze-hover"
          >
            {t.hero.cta.replace(" →", "")}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="group relative overflow-hidden border border-border bg-surface">
            <img
              src={portrait}
              alt={t.hero.name}
              width={912}
              height={1200}
              className="h-full w-full object-cover contrast-[1.05] saturate-[0.85] transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
