import { Reveal } from "./motion";
import { useLanguage } from "@/context/LanguageContext";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const ITEMS = [
  {
    name: "Фарход А.",
    role: "CEO, Bellissimo Pizza",
    img: a1,
    text: "Шохрух собрал нам маркетинг как функцию, а не как набор акций. Появились команда, бюджетная дисциплина и понятная отчётность по каждому каналу.",
  },
  {
    name: "Дониёр Н.",
    role: "Основатель, PastaPasta",
    img: a2,
    text: "Мы годами зависели от агрегаторов. За несколько месяцев работы собственная доставка стала основным каналом, а экономика заказа — прозрачной.",
  },
  {
    name: "Баходир Т.",
    role: "Сооснователь, PIPLS",
    img: a3,
    text: "Сеть перестала управляться в ручном режиме. Оргструктура, недельный ритм и финансовый контур дали управляемость на 20+ филиалах.",
  },
];

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="border-b border-[#3D352F] py-24 sm:py-32 bg-[#181513]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-3xl font-black tracking-tight text-[#FDFBF7] sm:text-5xl">
            {t.reviews.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.07}>
              <figure className="flex h-full flex-col rounded-lg border border-[#3D352F] bg-[#24201D] p-7 transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#302B27] hover:shadow-xl">
                <blockquote className="text-sm leading-relaxed text-[#B8AEA5]">
                  "{item.text}"
                </blockquote>
                <figcaption className="mt-8 flex min-w-0 items-center gap-4 border-t border-[#3D352F] pt-6">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="h-11 w-11 shrink-0 rounded-full object-cover grayscale contrast-125 border border-[#3D352F]"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-[#FDFBF7]">{item.name}</p>
                    <p className="truncate text-xs text-[#877D74]">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
