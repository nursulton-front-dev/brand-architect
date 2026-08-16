import { Reveal } from "./motion";

const BRANDS = ["Bellissimo Pizza", "PastaPasta", "PIPLS", "Sariq Bola Pizza"];

export function Ecosystem() {
  return (
    <section id="experience" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-10 text-center text-[10px] uppercase tracking-[0.2em] text-text-muted sm:text-xs">
            Опыт, который стоит за моей экспертизой.
          </p>
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
            {BRANDS.map((b) => (
              <div
                key={b}
                className="flex items-center justify-center bg-background px-4 py-10 opacity-50 transition-opacity duration-300 hover:opacity-100"
              >
                <span className="text-center text-sm font-extrabold uppercase tracking-tight text-foreground sm:text-base">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
