import { useState } from "react";
import { changeAppLanguage, normalizeAppLanguage } from "@frontfolio/i18n";
import { useTranslation } from "react-i18next";

import type { LanguageCode } from "../types";

export const useLanguagePicker = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { i18n } = useTranslation();

  const selectedLanguage = normalizeAppLanguage(
    i18n.resolvedLanguage ?? i18n.language,
  );

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const selectLanguage = (language: LanguageCode) => {
    void changeAppLanguage(language);
    setDropdownOpen(false);
  };

  return {
    isDropdownOpen,
    selectedLanguage,
    selectLanguage,
    toggleDropdown,
  };
};
