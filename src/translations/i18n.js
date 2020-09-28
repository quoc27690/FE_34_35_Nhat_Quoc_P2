import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_en from "./en/common.json";
import common_vi from "./vi/common.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    common: common_en,
  },
  vi: {
    common: common_vi,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
