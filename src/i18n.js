import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import km from "./locales/km";
import zh from "./locales/zh";

const savedLanguage = localStorage.getItem("portfolio-language");

const browserLanguage = navigator.language?.toLowerCase();

let defaultLanguage = "en";

if (savedLanguage) {
  defaultLanguage = savedLanguage;
} else if (browserLanguage?.startsWith("km")) {
  defaultLanguage = "km";
} else if (browserLanguage?.startsWith("zh")) {
  defaultLanguage = "zh";
}

i18n.use(initReactI18next).init({
  resources: {
    en,
    km,
    zh,
  },

  lng: defaultLanguage,

  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
