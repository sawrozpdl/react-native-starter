import React, { useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import i18n from "../utils/i18n";

import {
  LOCALE_OPTIONS,
  LOCALE_PREF_KEY,
  DEFAULT_LANGUAGE,
} from "../constants/locale";

const LocaleContext = React.createContext({});

const loadLocale = async (cb) => {
  try {
    const localePref = await AsyncStorage.getItem(LOCALE_PREF_KEY);

    if (
      localePref &&
      Boolean(LOCALE_OPTIONS.find((opt) => opt.value === localePref))
    ) {
      cb(localePref);
    }
  } catch (e) {
    console.warn("Error loading locale preference from local storage.");
  }
};

const saveLocaleLocally = async (localePref) => {
  try {
    if (
      localePref &&
      Boolean(LOCALE_OPTIONS.find((opt) => opt.value === localePref))
    ) {
      await AsyncStorage.setItem(LOCALE_PREF_KEY, localePref);
    }
  } catch (e) {
    console.warn("Error saving locale preference to local storage.");
  }
};

const LocaleProvider = (props) => {
  const { children } = props;
  const [locale, setLocale] = useState(DEFAULT_LANGUAGE);

  const setLanguage = (loc) => {
    i18n.locale = loc;
    setLocale(loc);
  };

  React.useEffect(() => {
    loadLocale(setLanguage);
  }, []);

  React.useEffect(() => {
    saveLocaleLocally(locale);
  }, [locale]);

  const translate = (...props) => {
    return i18n.translate(...props);
  };

  return (
    <LocaleContext.Provider value={{ i18n, locale, t: translate, setLanguage }}>
      {children}
    </LocaleContext.Provider>
  );
};

const useTranslation = () => useContext(LocaleContext);

export { LocaleContext, LocaleProvider, useTranslation as default };
