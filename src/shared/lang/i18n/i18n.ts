import i18next, { type Resource } from "i18next";
import ru from "../translations/ru.json";
import en from "../translations/en.json";
import jp from "../translations/jp.json";
import kr from "../translations/kr.json";
import cn from "../translations/cn.json";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export type LangType = { code: string; label: string };
export type Languages = "ru" | "en" | "jp" | "kr" | "cn";

export const lang: LangType = JSON.parse(
  localStorage.getItem("spg_lang") || '{"code":"en","label":"English"}'
);

const resources: Resource = {
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
  jp: {
    translation: jp,
  },
  kr: {
    translation: kr,
  },
  cn: {
    translation: cn,
  },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: lang.code,
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
