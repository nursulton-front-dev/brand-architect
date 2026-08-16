import { useState, type FormEvent } from "react";
import { Reveal } from "./motion";

const FIELD =
  "w-full border border-border bg-background p-4 text-sm text-foreground outline-none transition-colors placeholder:text-text-muted focus:border-bronze";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const required = ["name", "company", "branches", "task", "contact"];
    const next: Record<string, boolean> = {};
    required.forEach((k) => {
      if (!String(data.get(k) ?? "").trim()) next[k] = true;
    });
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  return (
    <section id="contact" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
            НЕ КАЖДОМУ БИЗНЕСУ НУЖЕН СОВЕТНИК.
          </h2>
          <div className="mt-8 max-w-lg space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Я подключаюсь к ограниченному количеству проектов и работаю там, где могу реально
              повлиять на результат.
            </p>
            <p>
              Если у вас ресторанный бизнес, есть амбиция расти и вы считаете, что мой опыт может
              быть полезен — расскажите немного о компании и задаче.
            </p>
            <p>Если поймём, что подходим друг другу — поговорим.</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-border bg-surface p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] sm:p-8">
            {sent ? (
              <div className="flex min-h-[420px] flex-col justify-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-bronze">
                  Заявка отправлена
                </p>
                <p className="mt-5 text-lg leading-relaxed text-foreground">
                  Спасибо. Посмотрю информацию и свяжусь, если увижу, что мой опыт может быть
                  полезен в вашей ситуации.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-4">
                <input
                  name="name"
                  placeholder="Имя"
                  className={`${FIELD} ${errors.name ? "border-destructive" : ""}`}
                />
                <input
                  name="company"
                  placeholder="Компания / бренд"
                  className={`${FIELD} ${errors.company ? "border-destructive" : ""}`}
                />
                <select
                  name="branches"
                  defaultValue=""
                  className={`${FIELD} ${errors.branches ? "border-destructive" : ""}`}
                >
                  <option value="" disabled>
                    Количество филиалов
                  </option>
                  <option value="1">1</option>
                  <option value="2-5">2–5</option>
                  <option value="6-15">6–15</option>
                  <option value="15+">15+</option>
                </select>
                <input name="revenue" placeholder="Оборот компании (опционально)" className={FIELD} />
                <textarea
                  name="task"
                  rows={4}
                  placeholder="Какая задача стоит перед бизнесом?"
                  className={`${FIELD} resize-none ${errors.task ? "border-destructive" : ""}`}
                />
                <input
                  name="contact"
                  placeholder="Telegram / Телефон"
                  className={`${FIELD} ${errors.contact ? "border-destructive" : ""}`}
                />

                {Object.keys(errors).length > 0 && (
                  <p className="text-xs text-destructive">Заполните обязательные поля.</p>
                )}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 bg-bronze px-6 py-4 text-sm font-bold uppercase tracking-widest text-background transition-colors hover:bg-bronze-hover"
                >
                  Отправить
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
                <p className="mt-4 text-xs leading-relaxed text-text-muted">
                  Спасибо. Посмотрю информацию и свяжусь, если увижу, что мой опыт может быть
                  полезен в вашей ситуации.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
