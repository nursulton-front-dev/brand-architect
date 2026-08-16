import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.cases, href: "#cases" },
    { label: t.nav.reviews, href: "#testimonials" },
    { label: t.nav.contacts, href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <a
          href="#top"
          className="min-w-0 truncate text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground sm:text-xs"
        >
          {t.hero.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-3">
          {/* Language Switcher */}
          <div className="flex items-center rounded-lg border border-[#292524] bg-[#161413]/80 p-0.5 text-[11px] font-bold uppercase tracking-wider text-[#A8A29E]">
            <button
              onClick={() => setLang("ru")}
              className={`rounded-md px-2 py-1 transition-all ${
                lang === "ru"
                  ? "bg-[#BA9A74] text-[#161413] shadow-sm"
                  : "hover:text-[#FAFAF9]"
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLang("uz")}
              className={`rounded-md px-2 py-1 transition-all ${
                lang === "uz"
                  ? "bg-[#BA9A74] text-[#161413] shadow-sm"
                  : "hover:text-[#FAFAF9]"
              }`}
            >
              UZ
            </button>
          </div>

          <a
            href="#contact"
            className="hidden border border-border px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:border-bronze hover:text-bronze sm:inline-flex"
          >
            {t.nav.cta}
          </a>
          <button
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center border border-border text-muted-foreground lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2 sm:px-8">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm text-muted-foreground last:border-0"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
