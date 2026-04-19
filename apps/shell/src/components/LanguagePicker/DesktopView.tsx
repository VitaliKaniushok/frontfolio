import { type FC } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";

import styles from "./DesktopView.module.scss";

import type { DesktopLanguagePickerViewProps } from "./types";

import { LANGUAGES, LANGUAGE_LABELS } from "../../constants";

export const DesktopView: FC<DesktopLanguagePickerViewProps> = ({
  onLanguageChange,
  onToggleDropdown,
  isDropdownOpen,
  selectedLanguage,
}) => {
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
            {LANGUAGES.map((lang) => (
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
                {LANGUAGE_LABELS[lang]}
                <span className={styles.langCode}>{lang.toUpperCase()}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
