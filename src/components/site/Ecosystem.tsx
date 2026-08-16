import { Reveal } from "./motion";
import { useLanguage } from "@/context/LanguageContext";

// 1. Bellissimo Pizza logo (1-to-1 official emblem & typography)
function BellissimoLogo({ className = "h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 60" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, 4)">
        {/* Heart/Box Emblem */}
        <path
          d="M 22 2 C 12 2 4 10 4 20 C 4 30 12 44 22 44 C 32 44 40 30 40 20 C 40 10 32 2 22 2 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.8"
        />
        <path d="M 9 17 C 9 10 15 4 22 4 C 29 4 35 10 35 17 Z" fill="currentColor" />
        <rect x="8" y="20" width="13" height="13" rx="2" fill="currentColor" />
        <circle cx="14.5" cy="26.5" r="3.5" fill="#161413" />
        <path d="M 23 20 L 36 20 C 36 27 30 34 23 34 Z" fill="currentColor" />
      </g>
      <text x="50" y="29" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="24" letterSpacing="-0.5" fill="currentColor">
        Bellissimo
      </text>
      <text x="50" y="49" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="20" letterSpacing="-0.5" fill="currentColor">
        Pizza
      </text>
    </svg>
  );
}

// 2. PASTA PASTA logo (1-to-1 official framed box emblem & ribbon)
function PastaPastaLogo({ className = "h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 190 60" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="186" height="56" rx="8" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <text x="14" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1.5" fill="currentColor">
        PASTA<tspan fontSize="11" dy="-10">®</tspan>
      </text>
      <text x="14" y="46" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1.5" fill="currentColor">
        PASTA
      </text>
      <path d="M 110 40 Q 130 35 150 42 Q 165 47 178 40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
    </svg>
  );
}

// 3. PIPLS logo (1-to-1 official bold condensed typography)
function PiplsLogo({ className = "h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 50" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="40" fontFamily="'Impact', 'Arial Black', system-ui, sans-serif" fontWeight="900" fontSize="48" letterSpacing="2" fill="currentColor">
        PIPLS
      </text>
    </svg>
  );
}

// 4. Sariq Bola Pizza logo (1-to-1 official Fedora hat badge & script font)
function SariqBolaLogo({ className = "h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 230 60" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(4, 4)">
        <circle cx="25" cy="25" r="23" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M 12 18 C 14 9 28 7 36 12 C 40 9 46 11 46 18 C 50 18 52 21 48 23 C 40 22 16 22 8 23 C 5 21 7 18 12 18 Z" fill="currentColor" />
        <circle cx="18" cy="28" r="2" fill="currentColor" />
        <circle cx="32" cy="28" r="2" fill="currentColor" />
        <path d="M 20 33 Q 25 38 30 33" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </g>
      <text x="60" y="30" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="19" letterSpacing="0.8" fill="currentColor">
        SARIQ BOLA
      </text>
      <text x="135" y="50" fontFamily="'Brush Script MT', 'Caveat', cursive, sans-serif" fontStyle="italic" fontWeight="700" fontSize="23" fill="currentColor" opacity="0.95">
        pizza
      </text>
    </svg>
  );
}

// 5. Hoty Dogy logo (1-to-1 official retro bold emblem)
function HotyDogyLogo({ className = "h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 54" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <text x="2" y="24" fontFamily="'Arial Black', 'Impact', system-ui, sans-serif" fontWeight="900" fontSize="24" letterSpacing="1" fill="currentColor">
        HOTY
      </text>
      <text x="2" y="48" fontFamily="'Arial Black', 'Impact', system-ui, sans-serif" fontWeight="900" fontSize="24" letterSpacing="1" fill="currentColor">
        DOGY
      </text>
    </svg>
  );
}

const BRANDS = [
  { name: "Bellissimo Pizza", Component: BellissimoLogo },
  { name: "PastaPasta", Component: PastaPastaLogo },
  { name: "PIPLS", Component: PiplsLogo },
  { name: "Sariq Bola Pizza", Component: SariqBolaLogo },
  { name: "Hoty Dogy", Component: HotyDogyLogo },
];

const content = {
  ru: {
    badge: "ОПЫТ, КОТОРЫЙ СТОИТ ЗА МОЕЙ ЭКСПЕРТИЗОЙ",
  },
  uz: {
    badge: "ТАЖРИБАМ ОРТИДА ТУРГАН БРЕНДЛАР",
  },
};

export function Ecosystem() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          {/* Header Typography Badge */}
          <div className="mb-12 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#BA9A74]/40" />
            <h3 className="bg-gradient-to-r from-[#FAFAF9] via-[#A8A29E] to-[#FAFAF9] bg-clip-text text-center text-xs font-bold uppercase tracking-[0.15em] text-transparent sm:text-sm">
              {t.logos.overline}
            </h3>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#BA9A74]/40" />
          </div>

          {/* Desktop & Mobile Responsive Monochrome Glass Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-5">
            {BRANDS.map((b) => {
              const Logo = b.Component;
              return (
                <div
                  key={b.name}
                  className="group relative flex h-28 items-center justify-center rounded-2xl border border-white/[0.08] bg-[#161413]/50 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#BA9A74]/40 hover:bg-[#161413]/90 hover:shadow-xl hover:shadow-[#BA9A74]/10"
                >
                  <div className="text-[#888888] opacity-60 transition-all duration-300 group-hover:scale-105 group-hover:text-white group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                    <Logo className="h-9 w-auto max-w-[160px]" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Infinite Marquee Ticker in Black & White */}
          <div className="relative mt-12 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee gap-6">
              {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((b, idx) => {
                const Logo = b.Component;
                return (
                  <div
                    key={`${b.name}-ticker-${idx}`}
                    className="group flex h-20 w-56 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-[#161413]/40 px-6 backdrop-blur-sm transition-all duration-300 hover:border-[#BA9A74]/30 hover:bg-[#161413]/80"
                  >
                    <div className="text-[#888888] opacity-50 transition-all duration-300 group-hover:scale-105 group-hover:text-white group-hover:opacity-100">
                      <Logo className="h-7 w-auto" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
