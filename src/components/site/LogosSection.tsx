import { useLanguage } from "@/context/LanguageContext";

export const PARTNER_LOGOS = [
  { id: 'bellissimo', name: 'Bellissimo Pizza', src: '/logos/bellissimo.svg', fallbackText: 'BELLISSIMO PIZZA' },
  { id: 'pastapasta', name: 'PastaPasta', src: '/logos/pastapasta.png', fallbackText: 'PASTAPASTA' },
  { id: 'pipls', name: 'PIPLS', src: '/logos/pipls.svg', fallbackText: 'PIPLS' },
  { id: 'sariqbola', name: 'Sariq Bola Pizza', src: '/logos/sariq-bola.svg', fallbackText: 'SARIQ BOLA PIZZA' },
  { id: 'hotydogy', name: 'Hoty Dogy', src: '/logos/hoty-dogy.svg', fallbackText: 'HOTY DOGY' },
];

export const LogosSection = ({ lang }: { lang?: 'ru' | 'uz' }) => {
  const { lang: contextLang } = useLanguage();
  const activeLang = lang || contextLang || 'ru';

  return (
    <section id="experience" className="w-full bg-[#181513] py-14 border-y border-[#3D352F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center font-mono text-xs tracking-[0.2em] text-[#877D74] uppercase mb-10">
          {activeLang === 'ru' ? 'ОПЫТ, КОТОРЫЙ СТОИТ ЗА МОЕЙ ЭКСПЕРТИЗОЙ' : 'MENING TAJRIBAM ORTIDA TURGAN AMALIYOT'}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {PARTNER_LOGOS.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105">
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 sm:h-10 w-auto max-w-[140px] object-contain filter brightness-110"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.endsWith('.svg')) {
                    target.src = logo.src.replace('.svg', '.png');
                  } else {
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }
                }}
              />
              <span className="hidden text-sm font-bold font-mono tracking-wider text-[#B8AEA5]">
                {logo.fallbackText}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
