import styles from "./Logo.module.scss";

export const Logo = () => (
  <a href="#" className={styles.logo} aria-label="Frontfolio Logo">
    dev<span className={styles.logo__glow}>.folio</span>
  </a>
);
