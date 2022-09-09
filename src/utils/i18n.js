import { I18n } from "i18n-js";

import { en } from "i18n-js/json/en.json";
import { es } from "i18n-js/json/es.json";

import { DEFAULT_LANGUAGE } from "../constants/locale";

import translations from "../lang";

const i18n = new I18n({
  en: {
    ...translations.en,
    ...en,
  },
  es: {
    ...translations.es,
    ...es,
  },
});

i18n.defaultLocale = DEFAULT_LANGUAGE;
i18n.locale = DEFAULT_LANGUAGE;
i18n.enableFallback = true;
i18n.missingBehavior = "guess";

export default i18n;
