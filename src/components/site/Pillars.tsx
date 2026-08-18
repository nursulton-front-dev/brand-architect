import {
  SlidersHorizontal,
  Megaphone,
  LineChart,
  Users,
  Utensils,
  Cpu,
} from "lucide-react";
import { Reveal } from "./motion";
import { useLanguage } from "@/context/LanguageContext";

export function Pillars() {
  const { t } = useLanguage();

  const pillarsData = [
    {
      icon: SlidersHorizontal,
      title: t.positioning.pillars.operations.title,
      text: t.positioning.pillars.operations.desc,
    },
    {
      icon: Megaphone,
      title: t.positioning.pillars.marketing.title,
      text: t.positioning.pillars.marketing.desc,
    },
    {
      icon: LineChart,
      title: t.positioning.pillars.finance.title,
      text: t.positioning.pillars.finance.desc,
    },
    {
      icon: Users,
      title: t.positioning.pillars.people.title,
      text: t.positioning.pillars.people.desc,
    },
    {
      icon: Utensils,
      title: t.positioning.pillars.product.title,
      text: t.positioning.pillars.product.desc,
    },
    {
      icon: Cpu,
      title: t.positioning.pillars.it.title,
      text: t.positioning.pillars.it.desc,
    },
  ];

  return (
    <section className="border-b border-[#3D352F] py-24 sm:py-32 bg-[#181513]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl text-3xl font-black tracking-tight text-[#FDFBF7] sm:text-5xl">
              {t.positioning.titleLine1} {t.positioning.titleLine2}
            </h2>
            <p className="max-w-md text-base sm:text-lg leading-relaxed text-[#B8AEA5] md:text-right">
              {t.positioning.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillarsData.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.05}>
                <article className="group h-full rounded-lg border border-[#3D352F] bg-[#24201D] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:bg-[#302B27] hover:shadow-xl hover:shadow-[#D4AF37]/5">
                  <div className="inline-flex items-center justify-center rounded-xl bg-[#D4AF37]/10 p-3.5 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#D4AF37]/20">
                    <Icon className="h-8 w-8 sm:h-9 sm:w-9 stroke-[1.75]" />
                  </div>
                  <h3 className="mt-6 text-lg font-extrabold uppercase tracking-tight text-[#D4AF37]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#B8AEA5]">{p.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
