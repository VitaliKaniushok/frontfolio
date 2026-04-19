import { type FC } from "react";

import { DesktopView } from "./DesktopView";
import { MobileView } from "./MobileView";

import { useLanguagePicker } from "./hooks";

import type { LanguagePickerProps } from "./types";

import { LANGUAGE_PICKER_VARIANTS } from "./constants";

const LanguagePicker: FC<LanguagePickerProps> = ({ variant }) => {
  const { isDropdownOpen, selectedLanguage, selectLanguage, toggleDropdown } =
    useLanguagePicker();

  if (variant === LANGUAGE_PICKER_VARIANTS.desktop) {
    return (
      <DesktopView
        isDropdownOpen={isDropdownOpen}
        onLanguageChange={selectLanguage}
        onToggleDropdown={toggleDropdown}
        selectedLanguage={selectedLanguage}
      />
    );
  }

  return (
    <MobileView
      onLanguageChange={selectLanguage}
      selectedLanguage={selectedLanguage}
    />
  );
};

export default LanguagePicker;
