import { Reveal } from "./motion";
import { useLanguage } from "@/context/LanguageContext";

export function HotyDogy() {
  const { t } = useLanguage();

  return (
    <section id="entrepreneurial-proof" className="relative border-b border-[#3D352F] py-24 sm:py-32 bg-[#181513] bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.07)_0%,_transparent_70%)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column (lg:col-span-6) */}
          <Reveal className="lg:col-span-6">
            <div>
              <p className="mb-4 text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37]">
                {t.hotyDogy.overline}
              </p>
              <h2 className="text-3xl font-black leading-[1.12] text-[#FDFBF7] sm:text-4xl lg:text-5xl">
                {t.hotyDogy.titleLine1}
                <br />
                <span className="text-[#D4AF37]">{t.hotyDogy.titleLine2}</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#B8AEA5] sm:text-lg">
                {t.hotyDogy.desc}
              </p>

              {/* Metrics Card Container */}
              <div className="mt-8 grid grid-cols-2 gap-4 rounded-lg border border-[#3D352F] bg-[#24201D] p-6 backdrop-blur-sm shadow-md">
                <div className="flex flex-col justify-center">
                  <div className="text-2xl font-extrabold tracking-tight text-[#D4AF37] sm:text-3xl lg:text-4xl">
                    {t.hotyDogy.metric1Value}{" "}
                    <span className="text-base font-normal text-[#B8AEA5]">
                      {t.hotyDogy.metric1Unit}
                    </span>
                  </div>
                  <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#877D74] sm:text-xs">
                    {t.hotyDogy.metric1Label}
                  </span>
                </div>

                <div className="flex flex-col justify-center border-l border-[#3D352F] pl-4 sm:pl-6">
                  <div className="text-2xl font-extrabold tracking-tight text-[#D4AF37] sm:text-3xl lg:text-4xl">
                    {t.hotyDogy.metric2Value}
                  </div>
                  <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#877D74] sm:text-xs">
                    {t.hotyDogy.metric2Label}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column (lg:col-span-6): 3-photo Bento grid */}
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1: Main wide kitchen photo (h-56, col-span-2) */}
              <div className="group relative col-span-2 h-56 overflow-hidden rounded-lg border border-[#3D352F] bg-[#24201D] shadow-md transition-all duration-300 hover:border-[#D4AF37]/50">
                <img
                  src="/images/hotydogy/kitchen.jpg"
                  alt="Hoty Dogy Kitchen Operations"
                  loading="lazy"
                  width={900}
                  height={600}
                  className="h-full w-full object-cover saturate-[0.9] transition-transform duration-500 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/images/cases/pasta.jpeg";
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#181513] via-transparent to-transparent opacity-80" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg" />
              </div>

              {/* Card 2: Product photo (h-44, col-span-1) */}
              <div className="group relative col-span-1 h-44 overflow-hidden rounded-lg border border-[#3D352F] bg-[#24201D] shadow-md transition-all duration-300 hover:border-[#D4AF37]/50">
                <img
                  src="/images/hotydogy/product.jpg"
                  alt="Hoty Dogy Product"
                  loading="lazy"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover saturate-[0.9] transition-transform duration-500 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/images/cases/bellissimo.jpg";
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#181513] via-transparent to-transparent opacity-80" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg" />
              </div>

              {/* Card 3: Analytics / Dashboard photo (h-44, col-span-1) */}
              <div className="group relative col-span-1 h-44 overflow-hidden rounded-lg border border-[#3D352F] bg-[#24201D] shadow-md transition-all duration-300 hover:border-[#D4AF37]/50">
                <img
                  src="/images/hotydogy/dashboard.jpg"
                  alt="Hoty Dogy Dashboard & Analytics"
                  loading="lazy"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover saturate-[0.9] transition-transform duration-500 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/images/cases/pipls.png";
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#181513] via-transparent to-transparent opacity-80" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export const HotyDogySection = HotyDogy;
