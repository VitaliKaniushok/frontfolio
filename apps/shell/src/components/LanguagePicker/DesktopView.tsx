import { type FC } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";
import { SUPPORTED_LANGUAGES } from "@frontfolio/i18n";
import { useTranslation } from "react-i18next";

import styles from "./DesktopView.module.scss";

import type { DesktopLanguagePickerViewProps } from "./types";

export const DesktopView: FC<DesktopLanguagePickerViewProps> = ({
  onLanguageChange,
  onToggleDropdown,
  isDropdownOpen,
  selectedLanguage,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={onToggleDropdown}
        className={styles.trigger}
        aria-expanded={isDropdownOpen}
        aria-haspopup="listbox"
      >
        <Globe className={styles.icon} />
        {selectedLanguage.toUpperCase()}
        <ChevronDown
          className={clsx(styles.chevron, isDropdownOpen && styles.isOpen)}
        />
      </button>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className={styles.dropdown}
            role="listbox"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => onLanguageChange(lang)}
                className={clsx(
                  styles.option,
                  lang === selectedLanguage ? styles.active : styles.inactive,
                )}
                aria-selected={lang === selectedLanguage}
              >
                {t(`common.languages.${lang}`)}
                <span className={styles.langCode}>{lang.toUpperCase()}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
