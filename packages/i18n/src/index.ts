import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { en } from "./resources/en";
import { pl } from "./resources/pl";

export const SUPPORTED_LANGUAGES = ["en", "pl"] as const;
export type AppLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: AppLanguage = "en";
export const LANGUAGE_STORAGE_KEY = "frontfolio-language";

declare global {
  interface Window {
    __DEVFOLIO_INITIAL_LANGUAGE__?: string;
  }
}

const resources = {
  en: { translation: en },
  pl: { translation: pl },
} as const;

const isSupportedLanguage = (language: string): language is AppLanguage =>
  SUPPORTED_LANGUAGES.includes(language as AppLanguage);

export const normalizeAppLanguage = (
  language: string | undefined,
): AppLanguage => {
  const shortCode = language?.toLowerCase().split("-")[0] ?? DEFAULT_LANGUAGE;

  return isSupportedLanguage(shortCode) ? shortCode : DEFAULT_LANGUAGE;
};

const resolvePreferredLanguage = (): AppLanguage => {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (storedLanguage && isSupportedLanguage(storedLanguage)) {
    return storedLanguage;
  }

  return normalizeAppLanguage(window.navigator.language);
};

const resolveInitialLanguage = (): AppLanguage => DEFAULT_LANGUAGE;

export const resolveInitialLanguageSnapshot = (): AppLanguage => {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  return normalizeAppLanguage(window.__DEVFOLIO_INITIAL_LANGUAGE__);
};

const persistLanguage = (
  language: string,
  { persistToStorage = true }: { persistToStorage?: boolean } = {},
) => {
  const normalizedLanguage = normalizeAppLanguage(language);

  if (typeof document !== "undefined") {
    document.documentElement.lang = normalizedLanguage;
  }

  if (persistToStorage && typeof window !== "undefined") {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, normalizedLanguage);
  }
};

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources,
    lng: resolveInitialLanguage(),
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

  i18n.on("languageChanged", persistLanguage);
  persistLanguage(i18n.language, { persistToStorage: false });
}

export const changeAppLanguage = async (language: AppLanguage) => {
  await i18n.changeLanguage(language);
};

export const ensureInitialAppLanguage = () => {
  const initialLanguage = resolveInitialLanguageSnapshot();
  const activeLanguage = normalizeAppLanguage(
    i18n.resolvedLanguage ?? i18n.language,
  );

  if (activeLanguage !== initialLanguage) {
    void i18n.changeLanguage(initialLanguage);
  }

  return initialLanguage;
};

export const syncAppLanguage = async () => {
  if (typeof window === "undefined") {
    return;
  }

  const preferredLanguage = resolvePreferredLanguage();
  const activeLanguage = normalizeAppLanguage(
    i18n.resolvedLanguage ?? i18n.language,
  );

  if (activeLanguage === preferredLanguage) {
    persistLanguage(preferredLanguage);
    return;
  }

  await i18n.changeLanguage(preferredLanguage);
};

export { i18n };
export default i18n;
