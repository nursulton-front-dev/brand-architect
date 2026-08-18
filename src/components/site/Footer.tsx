import { ArrowUp, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#3D352F] py-12 bg-[#181513]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-5 sm:px-8 md:grid-cols-2">
        <p className="text-xs text-[#877D74]">
          {t.footer.rights}
        </p>
        <div className="flex items-center gap-6 md:justify-end">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8AEA5] transition-colors hover:text-[#D4AF37]"
          >
            <Send className="h-3.5 w-3.5" /> Telegram
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8AEA5] transition-colors hover:text-[#D4AF37]"
          >
            ↑ <ArrowUp className="h-3.5 w-3.5 hidden" />
          </a>
        </div>
      </div>
    </footer>
  );
}
