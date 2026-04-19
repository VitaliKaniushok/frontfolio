import { useState } from "react";

import type { LanguageCode } from "../types";

export const useLanguagePicker = (initialLanguage: LanguageCode = "pl") => {
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageCode>(initialLanguage);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const selectLanguage = (language: LanguageCode) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };

  return {
    isDropdownOpen,
    selectedLanguage,
    selectLanguage,
    toggleDropdown,
  };
};
