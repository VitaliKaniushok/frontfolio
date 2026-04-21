import { GlowText } from "@frontfolio/ui";
import { useTranslation } from "react-i18next";

import styles from "./Logo.module.scss";

export const Logo = () => {
  const { t } = useTranslation();

  return (
    <a href="#" className={styles.logo} aria-label={t("shell.logo.ariaLabel")}>
      dev<GlowText>.folio</GlowText>
    </a>
  );
};
