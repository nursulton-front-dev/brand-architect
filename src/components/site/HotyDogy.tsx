import { Reveal } from "./motion";
import { useLanguage } from "@/context/LanguageContext";
import proof2 from "@/assets/proof-2.jpg";
import proof3 from "@/assets/proof-3.jpg";
import proof4 from "@/assets/proof-4.jpg";

export function HotyDogy() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column (lg:col-span-6) */}
          <Reveal className="lg:col-span-6">
            <div>
              <p className="mb-4 text-xs font-mono uppercase tracking-[0.2em] text-[#BA9A74]">
                {t.hotyDogy.overline}
              </p>
              <h2 className="text-3xl font-black leading-[1.12] text-[#FAFAF9] sm:text-4xl lg:text-5xl">
                {t.hotyDogy.titleLine1}
                <br />
                <span className="text-[#BA9A74]">{t.hotyDogy.titleLine2}</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#A8A29E] sm:text-lg">
                {t.hotyDogy.desc}
              </p>

              {/* Metrics Card Container */}
              <div className="mt-8 grid grid-cols-2 gap-4 rounded-lg border border-[#292524] bg-[#161413]/80 p-6 backdrop-blur-sm">
                <div className="flex flex-col justify-center">
                  <div className="text-2xl font-extrabold tracking-tight text-[#BA9A74] sm:text-3xl lg:text-4xl">
                    {t.hotyDogy.metric1Value}{" "}
                    <span className="text-base font-normal text-[#A8A29E]">
                      {t.hotyDogy.metric1Unit}
                    </span>
                  </div>
                  <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#78716C] sm:text-xs">
                    {t.hotyDogy.metric1Label}
                  </span>
                </div>

                <div className="flex flex-col justify-center border-l border-[#292524] pl-4 sm:pl-6">
                  <div className="text-2xl font-extrabold tracking-tight text-[#BA9A74] sm:text-3xl lg:text-4xl">
                    {t.hotyDogy.metric2Value}
                  </div>
                  <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#78716C] sm:text-xs">
                    {t.hotyDogy.metric2Label}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column (lg:col-span-6): 3-photo Bento grid */}
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1: Top kitchen shot (h-56, col-span-2) */}
              <div className="group relative col-span-2 h-56 overflow-hidden rounded-lg border border-[#292524] bg-[#161413]">
                <img
                  src={proof3}
                  alt={t.hotyDogy.titleLine1}
                  loading="lazy"
                  width={900}
                  height={600}
                  className="h-full w-full object-cover saturate-[0.85] transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]" />
              </div>

              {/* Card 2: Bottom Left packaging shot (h-44, col-span-1) */}
              <div className="group relative col-span-1 h-44 overflow-hidden rounded-lg border border-[#292524] bg-[#161413]">
                <img
                  src={proof2}
                  alt={t.hotyDogy.metric1Label}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover saturate-[0.85] transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]" />
              </div>

              {/* Card 3: Bottom Right analytics dashboard (h-44, col-span-1) */}
              <div className="group relative col-span-1 h-44 overflow-hidden rounded-lg border border-[#292524] bg-[#161413]">
                <img
                  src={proof4}
                  alt={t.hotyDogy.metric2Label}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover saturate-[0.85] transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
