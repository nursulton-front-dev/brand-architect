import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Pillars } from "@/components/site/Pillars";
import { HotyDogy } from "@/components/site/HotyDogy";
import { Ecosystem } from "@/components/site/Ecosystem";
import { Cases } from "@/components/site/Cases";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Шохрух Асрорходжаев — советник по ресторанному бизнесу";
const description =
  "Операции, маркетинг, финансы, HR, продукт и IT для ресторанных сетей. Основатель Hoty Dogy, кейсы PIPLS, Bellissimo Pizza, PastaPasta.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Pillars />
          <HotyDogy />
          <Ecosystem />
          <Cases />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
