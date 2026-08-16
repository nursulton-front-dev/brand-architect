import { Reveal } from "./motion";
import { useLanguage } from "@/context/LanguageContext";

// 1. Bellissimo Pizza logo
function BellissimoLogo({ className = "h-8 sm:h-10 w-auto max-w-[140px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 60" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, 4)">
        <path
          d="M 22 2 C 12 2 4 10 4 20 C 4 30 12 44 22 44 C 32 44 40 30 40 20 C 40 10 32 2 22 2 Z"
          fill="none"
          stroke="#EF4444"
          strokeWidth="3"
        />
        <path d="M 9 17 C 9 10 15 4 22 4 C 29 4 35 10 35 17 Z" fill="#22C55E" />
        <rect x="8" y="20" width="13" height="13" rx="2" fill="#EF4444" />
        <circle cx="14.5" cy="26.5" r="3.5" fill="#0C0B0A" />
        <path d="M 23 20 L 36 20 C 36 27 30 34 23 34 Z" fill="#22C55E" />
      </g>
      <text x="52" y="29" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="24" letterSpacing="-0.5" fill="#FAFAF9">
        Bellissimo
      </text>
      <text x="52" y="49" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="20" letterSpacing="-0.5" fill="#FAFAF9">
        Pizza
      </text>
    </svg>
  );
}

// 2. PASTA PASTA logo
function PastaPastaLogo({ className = "h-8 sm:h-10 w-auto max-w-[140px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 190 60" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="186" height="56" rx="8" fill="none" stroke="#E7E5E4" strokeWidth="2" opacity="0.4" />
      <text x="14" y="26" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1.5" fill="#FAFAF9">
        PASTA<tspan fontSize="11" dy="-10">®</tspan>
      </text>
      <text x="14" y="46" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1.5" fill="#FAFAF9">
        PASTA
      </text>
      <path d="M 110 40 Q 130 35 150 42 Q 165 47 178 40" fill="none" stroke="#EF4444" strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
    </svg>
  );
}

// 3. PIPLS logo
function PiplsLogo({ className = "h-8 sm:h-10 w-auto max-w-[140px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 50" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="40" fontFamily="'Impact', 'Arial Black', system-ui, sans-serif" fontWeight="900" fontSize="46" letterSpacing="2" fill="#FAFAF9">
        PIPLS
      </text>
      <circle cx="150" cy="35" r="4" fill="#BA9A74" />
    </svg>
  );
}

// 4. Sariq Bola Pizza logo
function SariqBolaLogo({ className = "h-8 sm:h-10 w-auto max-w-[140px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 230 60" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(4, 4)">
        <circle cx="25" cy="25" r="23" fill="none" stroke="#EAB308" strokeWidth="2.5" />
        <path d="M 12 18 C 14 9 28 7 36 12 C 40 9 46 11 46 18 C 50 18 52 21 48 23 C 40 22 16 22 8 23 C 5 21 7 18 12 18 Z" fill="#EAB308" />
        <circle cx="18" cy="28" r="2" fill="#0C0B0A" />
        <circle cx="32" cy="28" r="2" fill="#0C0B0A" />
        <path d="M 20 33 Q 25 38 30 33" fill="none" stroke="#0C0B0A" strokeWidth="2" strokeLinecap="round" />
      </g>
      <text x="60" y="30" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="19" letterSpacing="0.8" fill="#FAFAF9">
        SARIQ BOLA
      </text>
      <text x="135" y="50" fontFamily="'Brush Script MT', 'Caveat', cursive, sans-serif" fontStyle="italic" fontWeight="700" fontSize="23" fill="#EAB308">
        pizza
      </text>
    </svg>
  );
}

// 5. Hoty Dogy logo
function HotyDogyLogo({ className = "h-8 sm:h-10 w-auto max-w-[140px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 54" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <text x="2" y="24" fontFamily="'Arial Black', 'Impact', system-ui, sans-serif" fontWeight="900" fontSize="24" letterSpacing="1" fill="#F97316">
        HOTY
      </text>
      <text x="2" y="48" fontFamily="'Arial Black', 'Impact', system-ui, sans-serif" fontWeight="900" fontSize="24" letterSpacing="1" fill="#FAFAF9">
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

export function Ecosystem() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="border-b border-border py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          {/* Overline Header */}
          <p className="text-xs font-mono tracking-[0.2em] text-[#78716C] uppercase text-center mb-8">
            {t.logos.overline}
          </p>

          {/* Authentic Clean Logos Single Centered Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-20 max-w-6xl mx-auto py-10 px-4">
            {BRANDS.map((b) => {
              const Logo = b.Component;
              return (
                <div
                  key={b.name}
                  className="flex items-center justify-center opacity-75 transition-all duration-300 hover:opacity-100 hover:scale-105 cursor-pointer"
                >
                  <Logo className="h-8 sm:h-10 w-auto max-w-[140px] object-contain" />
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
