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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#3D352F] bg-[#181513]/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <a
          href="#top"
          className="min-w-0 truncate text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FDFBF7] sm:text-xs"
        >
          {t.hero.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-[#B8AEA5] transition-colors hover:text-[#FDFBF7]"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-3">
          {/* Language Switcher */}
          <div className="flex items-center rounded-lg border border-[#3D352F] bg-[#24201D] p-0.5 text-[11px] font-bold uppercase tracking-wider text-[#B8AEA5]">
            <button
              onClick={() => setLang("ru")}
              className={`rounded-md px-2.5 py-1 transition-all ${
                lang === "ru"
                  ? "bg-[#D4AF37] text-[#181513] shadow-sm font-extrabold"
                  : "hover:text-[#FDFBF7]"
              }`}
            >
              RU
            </button>
            <button
              onClick={() => setLang("uz")}
              className={`rounded-md px-2.5 py-1 transition-all ${
                lang === "uz"
                  ? "bg-[#D4AF37] text-[#181513] shadow-sm font-extrabold"
                  : "hover:text-[#FDFBF7]"
              }`}
            >
              UZ
            </button>
          </div>

          <a
            href="#contact"
            className="hidden rounded-md border border-[#3D352F] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#B8AEA5] transition-colors hover:border-[#D4AF37] hover:text-[#D4AF37] sm:inline-flex"
          >
            {t.nav.cta}
          </a>
          <button
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#3D352F] text-[#B8AEA5] lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#3D352F] bg-[#181513] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2 sm:px-8">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#3D352F]/60 py-3 text-sm text-[#B8AEA5] last:border-0 hover:text-[#FDFBF7]"
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
