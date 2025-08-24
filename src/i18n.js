import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as RNLocalize from "react-native-localize";

import en from "./locales/en.json";
import hi from "./locales/hi.json";

const resources = {
  en: { translation: en },
  hi: { translation: hi }
};

const fallback = { languageTag: "en", isRTL: false };

let languageTag = "en";

if (RNLocalize.findBestLanguageTag) {
  const bestLang = RNLocalize.findBestLanguageTag(Object.keys(resources));
  languageTag = bestLang?.languageTag || fallback.languageTag;
  console.log("TTTTT",languageTag)
} else {
  console.warn("⚠️ RNLocalize not working, falling back to English",Object.keys(resources));
}

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3",
    resources,
    lng: languageTag,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
