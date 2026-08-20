import { useState } from "react";
import { Reveal } from "./motion";
import { useLanguage } from "@/context/LanguageContext";

interface CaseMediaProps {
  number: string;
  brand: string;
  logoSrc?: string;
  imageSrc?: string;
  hideLogo?: boolean;
}

export const CaseMedia = ({
  number,
  brand,
  logoSrc,
  imageSrc,
  hideLogo = false,
}: CaseMediaProps) => {
  const { t } = useLanguage();
  const [photoError, setPhotoError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="relative h-72 sm:h-88 lg:h-[380px] w-full overflow-hidden rounded-xl border border-[#3D352F] bg-[#24201D] group flex items-center justify-center col-span-12 lg:col-span-4 shadow-md transition-all duration-300 hover:border-[#D4AF37]/50">
      {/* Background Image (Photo if available) */}
      {imageSrc && !photoError ? (
        <>
          <img
            src={imageSrc}
            alt={brand}
            onError={() => setPhotoError(true)}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 saturate-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181513] via-[#181513]/40 to-transparent pointer-events-none" />
        </>
      ) : (
        /* Fallback: Pure Logo Display in center of brand card */
        <div className="flex flex-col items-center justify-center text-center p-8 select-none">
          {!hideLogo && logoSrc && !logoError ? (
            <img
              src={logoSrc}
              alt={brand}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src.endsWith('.svg')) {
                  target.src = logoSrc.replace('.svg', '.png');
                } else if (target.src.endsWith('.png')) {
                  target.src = logoSrc.replace('.png', '.svg');
                } else {
                  setLogoError(true);
                }
              }}
              className="max-h-24 sm:max-h-32 w-auto max-w-[180px] object-contain filter brightness-110 transition-transform duration-500 group-hover:scale-105 mb-3"
            />
          ) : (
            <span className="text-6xl sm:text-7xl font-black font-mono text-[#3D352F] group-hover:text-[#D4AF37]/40 transition-colors duration-300">
              {number}
            </span>
          )}
          <span className="text-xs uppercase tracking-[0.2em] text-[#877D74] mt-2 font-mono">
            {t.cases.casePrefix} {number} · {brand}
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
    </div>
  );
};

export function Cases() {
  const { t } = useLanguage();

  return (
    <section id="cases" className="border-b border-[#3D352F] py-12 bg-[#181513]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* CASE 01: PASTA */}
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-12 border-t border-[#3D352F] first:border-t-0">
            {/* Left Media Block */}
            <CaseMedia number="01" brand="PASTA" logoSrc="/logos/pastapasta.png" imageSrc="/images/cases/pasta.jpeg" />

            {/* Center Info (col-span-12 lg:col-span-5) */}
            <div className="col-span-12 lg:col-span-5">
              <p className="mb-2 font-mono text-xs font-semibold text-[#877D74]">
                {t.cases.casePrefix} 01
              </p>
              <h3 className="text-3xl font-extrabold text-[#FDFBF7]">{t.cases.pasta.title}</h3>
              <p className="mb-4 mt-1 text-sm text-[#B8AEA5]">"{t.cases.pasta.subtitle}"</p>
              <ul className="space-y-2 text-sm text-[#B8AEA5]">
                {t.cases.pasta.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Metric (col-span-12 lg:col-span-3) */}
            <div className="col-span-12 rounded-lg border border-[#3D352F] bg-[#24201D] p-6 backdrop-blur-sm shadow-md lg:col-span-3">
              <p className="num text-5xl font-black tracking-tight text-[#D4AF37] lg:text-6xl">
                {t.cases.pasta.metricValue}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#877D74]">
                {t.cases.pasta.metricLabel}
              </p>
              {t.cases.pasta.resultNote && (
                <p className="mt-3 border-t border-[#3D352F] pt-3 text-xs leading-relaxed text-[#B8AEA5]">
                  {t.cases.pasta.resultNote}
                </p>
              )}
            </div>
          </div>
        </Reveal>

        {/* CASE 02: PIPLS */}
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-12 border-t border-[#3D352F]">
            {/* Left Media Block */}
            <CaseMedia number="02" brand="PIPLS" logoSrc="/logos/pipls.svg" imageSrc="/images/cases/pipls.png" hideLogo={true} />

            {/* Center Info (col-span-12 lg:col-span-5) */}
            <div className="col-span-12 lg:col-span-5">
              <p className="mb-1 font-mono text-xs font-semibold text-[#877D74]">
                {t.cases.casePrefix} 02
              </p>
              <h3 className="text-3xl font-extrabold text-[#FDFBF7]">{t.cases.pipls.title}</h3>
              {t.cases.pipls.context && (
                <p className="mb-2 font-mono text-xs font-medium text-[#D4AF37]">
                  {t.cases.pipls.context}
                </p>
              )}
              <p className="mb-4 text-sm text-[#B8AEA5]">"{t.cases.pipls.subtitle}"</p>

              {/* 6 Mini Tags Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {t.cases.pipls.tags?.map((tag, idx) => (
                  <div key={idx} className="rounded-md border border-[#3D352F] bg-[#24201D] p-2.5">
                    <span className="block font-bold text-[#FDFBF7]">{tag.title}</span>
                    <span className="text-[11px] text-[#B8AEA5]">{tag.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Metric (col-span-12 lg:col-span-3) */}
            <div className="col-span-12 rounded-lg border border-[#3D352F] bg-[#24201D] p-6 backdrop-blur-sm shadow-md lg:col-span-3">
              <p className="num text-5xl font-black tracking-tight text-[#D4AF37] lg:text-6xl">
                {t.cases.pipls.metricValue}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#877D74]">
                {t.cases.pipls.metricLabel}
              </p>
              {t.cases.pipls.resultNote && (
                <p className="mt-3 border-t border-[#3D352F] pt-3 text-xs leading-relaxed text-[#B8AEA5]">
                  {t.cases.pipls.resultNote}
                </p>
              )}
            </div>
          </div>
        </Reveal>

        {/* CASE 03: BELLISSIMO PIZZA */}
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-12 border-t border-[#3D352F]">
            {/* Left Media Block */}
            <CaseMedia number="03" brand="BELLISSIMO" logoSrc="/logos/bellissimo-dark.png" imageSrc="/images/cases/bellissimo.jpg" />

            {/* Center Info (col-span-12 lg:col-span-5) */}
            <div className="col-span-12 lg:col-span-5">
              <p className="mb-2 font-mono text-xs font-semibold text-[#877D74]">
                {t.cases.casePrefix} 03
              </p>
              <h3 className="text-3xl font-extrabold text-[#FDFBF7]">{t.cases.bellissimo.title}</h3>
              <p className="mb-4 mt-1 text-sm text-[#B8AEA5]">"{t.cases.bellissimo.subtitle}"</p>
              <ul className="space-y-2 text-sm text-[#B8AEA5]">
                {t.cases.bellissimo.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Metric (col-span-12 lg:col-span-3) */}
            <div className="col-span-12 rounded-lg border border-[#3D352F] bg-[#24201D] p-6 backdrop-blur-sm shadow-md lg:col-span-3">
              <p className="num text-5xl font-black tracking-tight text-[#D4AF37] lg:text-6xl">
                {t.cases.bellissimo.metricValue}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#877D74]">
                {t.cases.bellissimo.metricLabel}
              </p>
            </div>
          </div>
        </Reveal>

        {/* CASE 04: SARIQ BOLA PIZZA */}
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-12 border-t border-[#3D352F]">
            {/* Left Media Block */}
            <CaseMedia number="04" brand="SARIQ BOLA" logoSrc="/logos/sariq-bola.png" imageSrc="/images/cases/sariq-bola.png" />

            {/* Center Info (col-span-12 lg:col-span-5) */}
            <div className="col-span-12 lg:col-span-5">
              <p className="mb-2 font-mono text-xs font-semibold text-[#877D74]">
                {t.cases.casePrefix} 04
              </p>
              <h3 className="text-3xl font-extrabold text-[#FDFBF7]">{t.cases.sariqBola.title}</h3>
              <p className="mb-4 mt-1 text-sm text-[#B8AEA5]">"{t.cases.sariqBola.subtitle}"</p>
              <ul className="space-y-2 text-sm text-[#B8AEA5]">
                {t.cases.sariqBola.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Metric (col-span-12 lg:col-span-3) */}
            <div className="col-span-12 rounded-lg border border-[#3D352F] bg-[#24201D] p-6 backdrop-blur-sm shadow-md lg:col-span-3">
              <p className="num text-4xl font-black tracking-tight text-[#D4AF37] whitespace-nowrap lg:text-5xl">
                {t.cases.sariqBola.metricValue}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#877D74]">
                {t.cases.sariqBola.metricLabel}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
