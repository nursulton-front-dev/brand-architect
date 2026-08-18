import { useState, type FormEvent } from "react";
import { Reveal } from "./motion";
import { useLanguage } from "@/context/LanguageContext";

const FIELD =
  "w-full rounded-md border border-[#3D352F] bg-[#181513] p-4 text-sm text-[#FDFBF7] outline-none transition-colors placeholder:text-[#877D74] focus:border-[#D4AF37]";

export function Contact() {
  const { lang, t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const required = ["name", "company", "branches", "task", "contact"];
    const next: Record<string, boolean> = {};
    required.forEach((k) => {
      if (!String(data.get(k) ?? "").trim()) next[k] = true;
    });
    setErrors(next);

    if (Object.keys(next).length === 0) {
      setIsSubmitting(true);
      const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;
      const payload = {
        name: String(data.get("name") ?? "").trim(),
        company: String(data.get("company") ?? "").trim(),
        branches: String(data.get("branches") ?? "").trim(),
        revenue: String(data.get("revenue") ?? "").trim(),
        message: String(data.get("task") ?? "").trim(),
        task: String(data.get("task") ?? "").trim(),
        contact: String(data.get("contact") ?? "").trim(),
        language: lang,
        timestamp: new Date().toISOString(),
      };

      try {
        if (webhookUrl) {
          await fetch(webhookUrl, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });
        } else {
          await new Promise((resolve) => setTimeout(resolve, 600));
        }
      } catch (err) {
        console.error("Webhook submit error:", err);
      } finally {
        setIsSubmitting(false);
        setSent(true);
      }
    }
  }

  return (
    <section id="contact" className="border-b border-[#3D352F] py-24 sm:py-32 bg-[#181513]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#FDFBF7] sm:text-5xl">
            {t.contact.title}
          </h2>
          <div className="mt-8 max-w-lg space-y-5 text-base leading-relaxed text-[#B8AEA5]">
            <p>{t.contact.text1}</p>
            <p>{t.contact.text2}</p>
            <p>{t.contact.text3}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-xl border border-[#3D352F] bg-[#24201D] p-6 shadow-xl sm:p-8">
            {sent ? (
              <div className="flex min-h-[420px] flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                  ✓
                </p>
                <p className="mt-5 text-lg leading-relaxed text-[#FDFBF7]">
                  {t.contact.form.successMsg}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-4">
                <input
                  name="name"
                  placeholder={t.contact.form.namePlaceholder}
                  className={`${FIELD} ${errors["name"] ? "border-red-500" : ""}`}
                />
                <input
                  name="company"
                  placeholder={t.contact.form.companyPlaceholder}
                  className={`${FIELD} ${errors["company"] ? "border-red-500" : ""}`}
                />
                <select
                  name="branches"
                  defaultValue=""
                  className={`${FIELD} ${errors["branches"] ? "border-red-500" : ""}`}
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
                  className={`${FIELD} resize-none ${errors["task"] ? "border-red-500" : ""}`}
                />
                <input
                  name="contact"
                  placeholder={t.contact.form.contactPlaceholder}
                  className={`${FIELD} ${errors["contact"] ? "border-red-500" : ""}`}
                />

                {Object.keys(errors).length > 0 && (
                  <p className="text-xs text-red-400">
                    {t.contact.form.requiredError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-3 rounded-md bg-[#D4AF37] px-6 py-4 text-sm font-bold uppercase tracking-widest text-[#181513] transition-all hover:bg-[#E5C358] disabled:opacity-50"
                >
                  {isSubmitting ? t.contact.form.submitting : t.contact.form.submitBtn}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
