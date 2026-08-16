import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/locales/translations";

export type Language = "ru" | "uz";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations["ru"];
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ru",
  setLang: () => {},
  t: translations.ru,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("ru");

  useEffect(() => {
    const saved = localStorage.getItem("app_lang") as Language;
    if (saved === "ru" || saved === "uz") {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("app_lang", newLang);
  };

  const t = translations[lang] || translations.ru;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
