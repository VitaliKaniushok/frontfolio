import { LANGUAGES } from "../../constants";
import { LANGUAGE_PICKER_VARIANTS } from "./constants";

export type LanguagePickerVariant = keyof typeof LANGUAGE_PICKER_VARIANTS;
export type LanguageCode = (typeof LANGUAGES)[number];

export interface LanguagePickerProps {
  variant: LanguagePickerVariant;
}

interface LanguagePickerSelectionProps {
  selectedLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
}

export interface DesktopLanguagePickerViewProps extends LanguagePickerSelectionProps {
  isDropdownOpen: boolean;
  onToggleDropdown: () => void;
}

export interface MobileLanguagePickerViewProps extends LanguagePickerSelectionProps {}
