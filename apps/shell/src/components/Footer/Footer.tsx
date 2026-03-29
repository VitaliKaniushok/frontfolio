import { footerLinks } from "./constants";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            dev<span className={styles.glow}>.folio</span>
          </a>

          <p className={styles.copy}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className={styles.socials}>
          {footerLinks.map(({ icon: Icon, href, label }) => (
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
      </div>
    </footer>
  );
};

export default Footer;
