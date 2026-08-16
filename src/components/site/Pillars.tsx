import { Reveal } from "./motion";

const PILLARS = [
  {
    n: "01",
    title: "OPERATIONS",
    text: "Процессы, стандарты, KPI, эффективность кухонь и залов.",
  },
  {
    n: "02",
    title: "MARKETING",
    text: "Трафик, бренд, путь гостя, повторные продажи, LTV/CAC.",
  },
  {
    n: "03",
    title: "FINANCE",
    text: "P&L, Unit-экономика, Cash Flow, управление фудкостом и лейбором.",
  },
  {
    n: "04",
    title: "PEOPLE / HR",
    text: "Найм, система грейдов, мотивация, аттестация и культура.",
  },
  {
    n: "05",
    title: "PRODUCT",
    text: "R&D, матрица меню, ценообразование, стандарты вкуса.",
  },
  {
    n: "06",
    title: "IT & DATA",
    text: "Автоматизация (iiko/r_keeper), сквозная аналитика, Telegram-боты, BI-дашборды.",
  },
];

export function Pillars() {
  return (
    <section className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-black tracking-tight text-foreground sm:text-5xl">
            ОТ СОТРУДНИКОВ ДО ФИНАНСОВ.
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Смотрю на ресторан не через одну функцию, а как на единую бизнес-систему.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.05}>
              <article className="h-full border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-bronze/50 hover:bg-surface-hover">
                <span className="font-mono text-xs tracking-widest text-text-muted">{p.n}</span>
                <h3 className="mt-6 text-lg font-extrabold uppercase tracking-tight text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
