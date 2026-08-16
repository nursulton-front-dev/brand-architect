import { Reveal } from "./motion";

type CaseItem = {
  id: string;
  title: string;
  subtitle: string;
  context?: string;
  blocks: { label: string; text: string }[];
  metric?: { value: string; label: string };
};

const CASES: CaseItem[] = [
  {
    id: "01",
    title: "PASTA",
    subtitle: "От зависимости от агрегаторов — к собственной доставке.",
    blocks: [
      { label: "Задача", text: "Снизить зависимость от агрегаторов и построить свой канал продаж." },
      { label: "Решение", text: "Цифровизация СВД и delivery funnel, стандартизация процессов доставки." },
      { label: "Маркетинг", text: "Реновация маркетинговой системы и удержания гостя." },
    ],
    metric: { value: "300+", label: "заказов в день через собственный канал" },
  },
  {
    id: "02",
    title: "PIPLS",
    subtitle: "Из ручного управления — в операционную систему.",
    context: "20+ филиалов · ~2,4 млрд сум оборота в месяц",
    blocks: [
      { label: "Organization", text: "Оргструктура C-level и территориальных управляющих." },
      { label: "Operations", text: "Чек-листы, 5S, графики и стандарты смен." },
      { label: "Management", text: "KPI и недельный управленческий ритм." },
      { label: "Control", text: "Аудит, служба безопасности, тайный гость." },
      { label: "Finance", text: "P&L / CF / Balance, сверки, фудкост." },
      { label: "People", text: "HR-система и аттестация персонала." },
    ],
  },
  {
    id: "03",
    title: "BELLISSIMO PIZZA",
    subtitle: "Построение маркетинговой функции в период масштабирования.",
    blocks: [
      { label: "Команда", text: "Формирование in-house маркетинговой команды с нуля." },
      { label: "Бренд", text: "Масштабирование бренда до лидера рынка." },
    ],
    metric: { value: "$1M+", label: "advertising budget managed" },
  },
  {
    id: "04",
    title: "SARIQ BOLA PIZZA",
    subtitle: "Маркетинг, построенный вокруг цифр.",
    blocks: [
      { label: "Аналитика", text: "Система сквозных дашбордов: продажи, доставка, RFM." },
      { label: "Retention", text: "Запуск CRM и программ удержания гостей." },
    ],
    metric: { value: "100 → 800", label: "заказов доставки в день" },
  },
];

export function Cases() {
  return (
    <section id="cases" className="border-b border-border">
      {CASES.map((c, i) => (
        <div key={c.id} className="border-b border-border last:border-0 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div
                className={`flex flex-col gap-12 lg:gap-20 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="lg:w-1/2">
                  <span className="font-mono text-xs tracking-widest text-text-muted">
                    CASE {c.id}
                  </span>
                  <h2 className="mt-5 text-3xl font-black tracking-tight text-foreground sm:text-5xl">
                    {c.title}
                  </h2>
                  {c.context && (
                    <p className="mt-3 font-mono text-xs text-bronze sm:text-sm">{c.context}</p>
                  )}
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
                    {c.subtitle}
                  </p>

                  {c.metric && (
                    <div className="mt-12 border-t border-border pt-8">
                      <p className="num break-words text-5xl font-black leading-none text-bronze sm:text-6xl lg:text-7xl">
                        {c.metric.value}
                      </p>
                      <p className="mt-3 text-[10px] uppercase tracking-widest text-text-muted sm:text-xs">
                        {c.metric.label}
                      </p>
                    </div>
                  )}
                </div>

                <div className="grid gap-px self-start overflow-hidden border border-border bg-border sm:grid-cols-2 lg:w-1/2">
                  {c.blocks.map((b) => (
                    <div
                      key={b.label}
                      className="bg-surface p-6 transition-colors duration-300 hover:bg-surface-hover"
                    >
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-bronze">
                        {b.label}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      ))}
    </section>
  );
}
