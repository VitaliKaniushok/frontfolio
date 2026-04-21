import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

import Image from "next/image";
import profilePhoto from "../assets/profile-photo.png";

import { GlowText, Button, ContainerNarrow } from "@frontfolio/ui";

import styles from "./HeroSection.module.scss";
import { usePortfolioQuotes } from "../hooks";
import { SOCIAL_LINKS } from "@frontfolio/constants";

const HeroSection = () => {
  const { t } = useTranslation();
  const quotes = usePortfolioQuotes();
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section className={styles.hero}>
      {/* Background Layers */}
      <div className={styles.background}>
        <div className={`${styles.blob} ${styles["blob--1"]}`} />
        <div className={`${styles.blob} ${styles["blob--2"]}`} />
        <div className={styles["grid-overlay"]} />
      </div>

      <ContainerNarrow className={styles.container}>
        <div className={styles.content}>
          <motion.div
            initial={{ y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className={styles.label}>{t("portfolio.hero.role")}</p>
            <h1 className={styles.title}>
              {t("portfolio.hero.titlePrefix")}{" "}
              <GlowText>{t("portfolio.hero.titleHighlight")}</GlowText>
              <br />
              {t("portfolio.hero.titleSuffix")}
            </h1>
          </motion.div>

          <motion.p
            className={styles.description}
            initial={{ y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t("portfolio.hero.description")}
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button asChild size="lg">
              <a href="#experience">
                {t("portfolio.hero.viewExperience")}
                <ArrowDown className={styles["actions__btn-icon"]} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">{t("portfolio.hero.viewProjects")}</a>
            </Button>
          </motion.div>

          <motion.div
            className={styles.socials}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {SOCIAL_LINKS.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles["social-link"]}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>

          <div className={styles["quote-wrapper"]}>
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIndex}
                initial={{ y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className={styles.quote}
              >
                {quotes[quoteIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Photo Section */}
        <motion.div
          className={styles.visual}
          initial={{ scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className={styles["image-wrapper"]}>
            <div className={styles["image-glow"]} />
            <div className={styles["image-container"]}>
              <Image
                src={profilePhoto}
                alt={t("portfolio.hero.portraitAlt")}
                fill
                className={styles.image}
                priority
                unoptimized
              />
            </div>
            {/* {engineeringMode && (
              <div className={styles.debug_badge}>PID: 1337 | CPU: 2.1%</div>
            )} */}
          </div>
        </motion.div>
      </ContainerNarrow>
    </section>
  );
};

export default HeroSection;
