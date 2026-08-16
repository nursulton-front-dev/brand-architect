import { Reveal } from "./motion";
import { useLanguage } from "@/context/LanguageContext";
import proof1 from "@/assets/proof-1.jpg";
import proof2 from "@/assets/proof-2.jpg";
import proof3 from "@/assets/proof-3.jpg";
import proof4 from "@/assets/proof-4.jpg";

export function Cases() {
  const { t } = useLanguage();

  return (
    <section id="cases" className="border-b border-border py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* CASE 01: PASTA */}
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-12 border-t border-[#292524] first:border-t-0">
            {/* Left Image (lg:col-span-4) */}
            <div className="relative h-56 overflow-hidden rounded-lg border border-[#292524] lg:col-span-4">
              <img
                src={proof1}
                alt={t.cases.pasta.title}
                loading="lazy"
                width={600}
                height={400}
                className="h-full w-full object-cover saturate-[0.85] transition-transform duration-500 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]" />
            </div>

            {/* Center Info (lg:col-span-5) */}
            <div className="lg:col-span-5">
              <p className="mb-2 font-mono text-xs font-semibold text-[#78716C]">CASE 01</p>
              <h3 className="text-3xl font-extrabold text-[#FAFAF9]">{t.cases.pasta.title}</h3>
              <p className="mb-4 mt-1 text-sm text-[#A8A29E]">"{t.cases.pasta.subtitle}"</p>
              <ul className="space-y-2 text-sm text-[#D6D3D1]">
                {t.cases.pasta.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#BA9A74]" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Metric (lg:col-span-3) */}
            <div className="rounded-lg border border-[#292524]/60 bg-[#161413]/40 p-6 backdrop-blur-sm lg:col-span-3">
              <p className="num text-5xl font-black tracking-tight text-[#BA9A74] lg:text-6xl">
                {t.cases.pasta.metricValue}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                {t.cases.pasta.metricLabel}
              </p>
              {t.cases.pasta.resultNote && (
                <p className="mt-3 border-t border-[#292524] pt-3 text-xs leading-relaxed text-[#A8A29E]">
                  {t.cases.pasta.resultNote}
                </p>
              )}
            </div>
          </div>
        </Reveal>

        {/* CASE 02: PIPLS */}
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-12 border-t border-[#292524]">
            {/* Left Image (lg:col-span-4) */}
            <div className="relative h-56 overflow-hidden rounded-lg border border-[#292524] lg:col-span-4">
              <img
                src={proof3}
                alt={t.cases.pipls.title}
                loading="lazy"
                width={600}
                height={400}
                className="h-full w-full object-cover saturate-[0.85] transition-transform duration-500 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]" />
            </div>

            {/* Center Info (lg:col-span-5) */}
            <div className="lg:col-span-5">
              <p className="mb-1 font-mono text-xs font-semibold text-[#78716C]">CASE 02</p>
              <h3 className="text-3xl font-extrabold text-[#FAFAF9]">{t.cases.pipls.title}</h3>
              {t.cases.pipls.context && (
                <p className="mb-2 font-mono text-xs font-medium text-[#BA9A74]">
                  {t.cases.pipls.context}
                </p>
              )}
              <p className="mb-4 text-sm text-[#A8A29E]">"{t.cases.pipls.subtitle}"</p>

              {/* 6 Mini Tags Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                {t.cases.pipls.tags?.map((tag, idx) => (
                  <div key={idx} className="rounded-md border border-[#292524] bg-[#161413]/60 p-2.5">
                    <span className="block font-bold text-[#FAFAF9]">{tag.title}</span>
                    <span className="text-[11px] text-[#A8A29E]">{tag.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Metric (lg:col-span-3) */}
            <div className="rounded-lg border border-[#292524]/60 bg-[#161413]/40 p-6 backdrop-blur-sm lg:col-span-3">
              <p className="num text-5xl font-black tracking-tight text-[#BA9A74] lg:text-6xl">
                {t.cases.pipls.metricValue}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                {t.cases.pipls.metricLabel}
              </p>
              {t.cases.pipls.resultNote && (
                <p className="mt-3 border-t border-[#292524] pt-3 text-xs leading-relaxed text-[#A8A29E]">
                  {t.cases.pipls.resultNote}
                </p>
              )}
            </div>
          </div>
        </Reveal>

        {/* CASE 03: BELLISSIMO PIZZA */}
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-12 border-t border-[#292524]">
            {/* Left Image (lg:col-span-4) */}
            <div className="relative h-56 overflow-hidden rounded-lg border border-[#292524] lg:col-span-4">
              <img
                src={proof2}
                alt={t.cases.bellissimo.title}
                loading="lazy"
                width={600}
                height={400}
                className="h-full w-full object-cover saturate-[0.85] transition-transform duration-500 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]" />
            </div>

            {/* Center Info (lg:col-span-5) */}
            <div className="lg:col-span-5">
              <p className="mb-2 font-mono text-xs font-semibold text-[#78716C]">CASE 03</p>
              <h3 className="text-3xl font-extrabold text-[#FAFAF9]">{t.cases.bellissimo.title}</h3>
              <p className="mb-4 mt-1 text-sm text-[#A8A29E]">"{t.cases.bellissimo.subtitle}"</p>
              <ul className="space-y-2 text-sm text-[#D6D3D1]">
                {t.cases.bellissimo.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#BA9A74]" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Metric (lg:col-span-3) */}
            <div className="rounded-lg border border-[#292524]/60 bg-[#161413]/40 p-6 backdrop-blur-sm lg:col-span-3">
              <p className="num text-5xl font-black tracking-tight text-[#BA9A74] lg:text-6xl">
                {t.cases.bellissimo.metricValue}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                {t.cases.bellissimo.metricLabel}
              </p>
            </div>
          </div>
        </Reveal>

        {/* CASE 04: SARIQ BOLA PIZZA */}
        <Reveal>
          <div className="grid grid-cols-1 items-center gap-8 py-16 lg:grid-cols-12 border-t border-[#292524]">
            {/* Left Image (lg:col-span-4) */}
            <div className="relative h-56 overflow-hidden rounded-lg border border-[#292524] lg:col-span-4">
              <img
                src={proof4}
                alt={t.cases.sariqBola.title}
                loading="lazy"
                width={600}
                height={400}
                className="h-full w-full object-cover saturate-[0.85] transition-transform duration-500 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]" />
            </div>

            {/* Center Info (lg:col-span-5) */}
            <div className="lg:col-span-5">
              <p className="mb-2 font-mono text-xs font-semibold text-[#78716C]">CASE 04</p>
              <h3 className="text-3xl font-extrabold text-[#FAFAF9]">{t.cases.sariqBola.title}</h3>
              <p className="mb-4 mt-1 text-sm text-[#A8A29E]">"{t.cases.sariqBola.subtitle}"</p>
              <ul className="space-y-2 text-sm text-[#D6D3D1]">
                {t.cases.sariqBola.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#BA9A74]" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Metric (lg:col-span-3) */}
            <div className="rounded-lg border border-[#292524]/60 bg-[#161413]/40 p-6 backdrop-blur-sm lg:col-span-3">
              <p className="num text-4xl font-black tracking-tight text-[#BA9A74] whitespace-nowrap lg:text-5xl">
                {t.cases.sariqBola.metricValue}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#78716C]">
                {t.cases.sariqBola.metricLabel}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
