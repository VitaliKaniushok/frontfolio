import { type FC } from "react";
import clsx from "clsx";
import { SUPPORTED_LANGUAGES } from "@devfolio/i18n";
import { useTranslation } from "react-i18next";

import styles from "./MobileView.module.scss";

import type { LanguagePickerSelectionProps } from "./types";

export const MobileView: FC<LanguagePickerSelectionProps> = ({
  onLanguageChange,
  selectedLanguage,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      {SUPPORTED_LANGUAGES.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => onLanguageChange(lang)}
          className={clsx(styles.languageButton, {
            [styles.active]: lang === selectedLanguage,
            [styles.inactive]: lang !== selectedLanguage,
          })}
        >
          {t(`common.languages.${lang}`)}
        </button>
      ))}
    </div>
  );
};
