import { Reveal } from "./motion";
import { useLanguage } from "@/context/LanguageContext";

const BRAND_LOGOS = [
  { name: "Bellissimo Pizza", src: "/logos/bellissimo.svg", h: "h-8 sm:h-9" },
  { name: "PastaPasta", src: "/logos/pasta-pasta.svg", h: "h-7 sm:h-8" },
  { name: "PIPLS", src: "/logos/pipls.svg", h: "h-8 sm:h-9" },
  { name: "Sariq Bola Pizza", src: "/logos/sariq-bola.svg", h: "h-7 sm:h-8" },
  { name: "Hoty Dogy", src: "/logos/hoty-dogy.svg", h: "h-8 sm:h-9" },
];

export function Ecosystem() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="w-full bg-[#0C0B0A] py-12 sm:py-16 border-y border-[#292524]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <p className="text-center font-mono text-[11px] sm:text-xs tracking-[0.25em] text-[#78716C] uppercase mb-10">
            {t.logos.overline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14 lg:gap-20">
            {BRAND_LOGOS.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className={`${brand.h} w-auto max-w-[150px] object-contain filter brightness-110`}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
