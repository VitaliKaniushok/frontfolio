import { GlowText } from "@frontfolio/ui";

import styles from "./Logo.module.scss";

export const Logo = () => (
  <a href="#" className={styles.logo} aria-label="Frontfolio Logo">
    dev<GlowText>.folio</GlowText>
  </a>
);
