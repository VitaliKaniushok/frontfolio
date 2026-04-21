import { type FC } from "react";
import clsx from "clsx";
import { SUPPORTED_LANGUAGES } from "@frontfolio/i18n";
import { useTranslation } from "react-i18next";

import styles from "./MobileView.module.scss";

import type { MobileLanguagePickerViewProps } from "./types";

export const MobileView: FC<MobileLanguagePickerViewProps> = ({
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
