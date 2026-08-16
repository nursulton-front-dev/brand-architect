import { Reveal } from "./motion";
import proof1 from "@/assets/proof-1.jpg";
import proof2 from "@/assets/proof-2.jpg";
import proof3 from "@/assets/proof-3.jpg";
import proof4 from "@/assets/proof-4.jpg";

const PHOTOS = [
  { src: proof1, alt: "Стойка заведения сети Hoty Dogy" },
  { src: proof2, alt: "Фирменная упаковка сети" },
  { src: proof3, alt: "Команда на производственной линии" },
  { src: proof4, alt: "BI-дашборд с показателями сети" },
];

export function HotyDogy() {
  return (
    <section className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Я НЕ ТОЛЬКО КОНСУЛЬТИРУЮ. Я СТРОЮ.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Основатель Hoty Dogy — QSR-сети с оборотом более 2 млрд сум в месяц и 8+ филиалами.
            Прошёл на практике через продукт, маркетинг, экономику, найм, операционку, открытия,
            доставку и масштабирование ресторанной сети.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-2">
            <div>
              <p className="num text-4xl font-extrabold text-bronze sm:text-5xl">2+ млрд сум</p>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-text-muted sm:text-xs">
                оборот сети в месяц
              </p>
            </div>
            <div>
              <p className="num text-4xl font-extrabold text-bronze sm:text-5xl">8+</p>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-text-muted sm:text-xs">
                филиалов по Узбекистану
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {PHOTOS.map((p, i) => (
              <div
                key={p.alt}
                className={`overflow-hidden border border-border bg-surface ${
                  i === 0 ? "aspect-4/5" : i === 3 ? "aspect-4/5" : "aspect-square"
                }`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  width={900}
                  height={900}
                  className="h-full w-full object-cover saturate-[0.7] transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
