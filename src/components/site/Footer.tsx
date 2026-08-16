import { ArrowUp, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-5 sm:px-8 md:grid-cols-2">
        <p className="text-xs text-text-muted">
          © 2024 Shokhrukh Asrorxodjaev. All rights reserved.
        </p>
        <div className="flex items-center gap-6 md:justify-end">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-bronze"
          >
            <Send className="h-3.5 w-3.5" /> Telegram
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-bronze"
          >
            Наверх <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
