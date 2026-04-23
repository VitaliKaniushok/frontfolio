import type { AppLanguage } from "@devfolio/i18n";
import { LANGUAGE_PICKER_VARIANTS } from "./constants";

export type LanguagePickerVariant = keyof typeof LANGUAGE_PICKER_VARIANTS;
export type LanguageCode = AppLanguage;

export interface LanguagePickerProps {
  variant: LanguagePickerVariant;
}

export interface LanguagePickerSelectionProps {
  selectedLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
}

export interface DesktopLanguagePickerViewProps extends LanguagePickerSelectionProps {
  isDropdownOpen: boolean;
  onToggleDropdown: () => void;
}
