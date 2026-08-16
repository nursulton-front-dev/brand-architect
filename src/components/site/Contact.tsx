import { useState, type FormEvent } from "react";
import { Reveal } from "./motion";
import { useLanguage } from "@/context/LanguageContext";

const FIELD =
  "w-full border border-border bg-background p-4 text-sm text-foreground outline-none transition-colors placeholder:text-text-muted focus:border-bronze";

export function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    if (Object.keys(next).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSent(true);
      }, 600);
    }
  }

  return (
    <section id="contact" className="border-b border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
            {t.contact.title}
          </h2>
          <div className="mt-8 max-w-lg space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>{t.contact.text1}</p>
            <p>{t.contact.text2}</p>
            <p>{t.contact.text3}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-border bg-surface p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] sm:p-8">
            {sent ? (
              <div className="flex min-h-[420px] flex-col justify-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-bronze">
                  ✓
                </p>
                <p className="mt-5 text-lg leading-relaxed text-foreground">
                  {t.contact.form.successMsg}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-4">
                <input
                  name="name"
                  placeholder={t.contact.form.namePlaceholder}
                  className={`${FIELD} ${errors['name'] ? "border-destructive" : ""}`}
                />
                <input
                  name="company"
                  placeholder={t.contact.form.companyPlaceholder}
                  className={`${FIELD} ${errors['company'] ? "border-destructive" : ""}`}
                />
                <select
                  name="branches"
                  defaultValue=""
                  className={`${FIELD} ${errors['branches'] ? "border-destructive" : ""}`}
                >
                  <option value="" disabled>
                    {t.contact.form.branchesPlaceholder}
                  </option>
                  <option value="1">1</option>
                  <option value="2-5">2–5</option>
                  <option value="6-15">6–15</option>
                  <option value="15+">15+</option>
                </select>
                <input name="revenue" placeholder={t.contact.form.revenuePlaceholder} className={FIELD} />
                <textarea
                  name="task"
                  rows={4}
                  placeholder={t.contact.form.taskPlaceholder}
                  className={`${FIELD} resize-none ${errors['task'] ? "border-destructive" : ""}`}
                />
                <input
                  name="contact"
                  placeholder={t.contact.form.contactPlaceholder}
                  className={`${FIELD} ${errors['contact'] ? "border-destructive" : ""}`}
                />

                {Object.keys(errors).length > 0 && (
                  <p className="text-xs text-destructive">
                    {t.contact.form.namePlaceholder}... (Required)
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-3 bg-bronze px-6 py-4 text-sm font-bold uppercase tracking-widest text-background transition-colors hover:bg-bronze-hover disabled:opacity-50"
                >
                  {isSubmitting ? t.contact.form.submitting : t.contact.form.submitBtn}
                </button>
                <p className="mt-4 text-xs leading-relaxed text-text-muted">
                  {t.contact.form.successMsg}
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
