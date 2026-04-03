// import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import profilePhoto from "../assets/profile-photo.png";

import { GlowText } from "@frontfolio/ui";

import styles from "./HeroSection.module.scss";

import { QUOTES } from "../constants";
import { SOCIAL_LINKS } from "@frontfolio/constants";

const HeroSection = () => {
  const quoteIndex = 0;
  // const [quoteIndex, setQuoteIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className={styles.hero}>
      {/* Background Layers */}
      <div className={styles.hero__background}>
        <div className={`${styles.hero__blob} ${styles["hero__blob--1"]}`} />
        <div className={`${styles.hero__blob} ${styles["hero__blob--2"]}`} />
        <div className={styles["hero__grid-overlay"]} />
      </div>

      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className={styles.hero__label}>Frontend Developer</p>
            <h1 className={styles.hero__title}>
              Building <GlowText>scalable</GlowText>
              <br />
              digital systems.
            </h1>
          </motion.div>

          <motion.p
            className={styles.hero__description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Crafting high-performance applications with modern architectures. 9+
            years of shipping production-grade software.
          </motion.p>

          <motion.div
            className={styles.hero__actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* <Button asChild size="lg" className={styles.hero__btn + ' ' + styles.hero__btn_primary}>
              <a href="#experience">
                View Experience <ArrowDown className={styles.hero__btn_icon} />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className={styles.hero__btn + ' ' + styles.hero__btn_outline}
            >
              <a href="#projects">View Projects</a>
            </Button> */}
          </motion.div>

          <motion.div
            className={styles.hero__socials}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {SOCIAL_LINKS.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles["hero__social-link"]}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>

          <div className={styles["hero__quote-wrapper"]}>
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className={styles.hero__quote}
              >
                {QUOTES[quoteIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Photo Section */}
        <motion.div
          className={styles.hero__visual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className={styles["hero__image-wrapper"]}>
            <div className={styles["hero__image-glow"]} />
            <div className={styles["hero__image-container"]}>
              <Image
                src={profilePhoto}
                alt="Developer portrait"
                fill
                className={styles.hero__image}
                priority
                unoptimized
              />
            </div>
            {/* {engineeringMode && (
              <div className={styles.hero__debug_badge}>PID: 1337 | CPU: 2.1%</div>
            )} */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
