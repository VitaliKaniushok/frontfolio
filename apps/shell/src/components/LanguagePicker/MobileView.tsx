import { type FC } from "react";
import clsx from "clsx";

import styles from "./MobileView.module.scss";

import type { MobileLanguagePickerViewProps } from "./types";

import { LANGUAGES, LANGUAGE_LABELS } from "../../constants";

export const MobileView: FC<MobileLanguagePickerViewProps> = ({
  onLanguageChange,
  selectedLanguage,
}) => {
  return (
    <div className={styles.container}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => onLanguageChange(lang)}
          className={clsx(styles.languageButton, {
            [styles.active]: lang === selectedLanguage,
            [styles.inactive]: lang !== selectedLanguage,
          })}
        >
          {LANGUAGE_LABELS[lang]}
        </button>
      ))}
    </div>
  );
};
