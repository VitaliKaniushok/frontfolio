import { SOCIAL_LINKS } from "@frontfolio/constants";
import { useTranslation } from "react-i18next";

import { Logo } from "./Logo";
import { ContainerNarrow } from "@frontfolio/ui";

import styles from "./Footer.module.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <ContainerNarrow className={styles.container}>
        <div className={styles.brand}>
          <Logo />

          <p className={styles.copy}>
            © {new Date().getFullYear()} {t("shell.footer.rightsReserved")}
          </p>
        </div>

        {/* Social Links */}
        <div className={styles.socials}>
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={styles.iconLink}
            >
              <Icon className={styles.icon} />
            </a>
          ))}
        </div>
      </ContainerNarrow>
    </footer>
  );
};

export default Footer;
