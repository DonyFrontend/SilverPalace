import i18next, { type Resource } from "i18next";
import ru from "../translations/ru.json";
import en from "../translations/en.json";
import jp from "../translations/jp.json";
import kr from "../translations/kr.json";
import cn from "../translations/cn.json";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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
    lng: "ru",
    debug: true,
    fallbackLng: "kg",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
