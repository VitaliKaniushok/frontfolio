import { motion } from "framer-motion";
import { LanguagesIcon } from "lucide-react";

import { SectionWrapper, GlassCard } from "./ui";

import { COMMUNICATION_LANGUAGES, LANGUAGES_LEVEL_PERCENT } from "@/constants";

import styles from "./LanguageSection.module.scss";

const LanguagesSection = () => {
  return (
    <SectionWrapper
      id="languages"
      title="Languages"
      overTitle="Communication"
      className={styles.section}
    >
      <div className={styles.grid}>
        {COMMUNICATION_LANGUAGES.map((lang, i) => {
          const pct = LANGUAGES_LEVEL_PERCENT[lang.level.toLowerCase()] ?? 50;
          return (
            <motion.div
              key={lang.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard className={styles["languages-card"]} interactive>
                <div className={styles.iconWrapper}>
                  <LanguagesIcon className={styles.icon} />
                </div>
                <div className={styles.info}>
                  <div className={styles.topRow}>
                    <h3 className={styles.langName}>{lang.nameKey}</h3>
                    <span className={styles.langCode}>{lang.code}</span>
                  </div>
                  <p className={styles.levelText}>{lang.levelKey}</p>
                  <div className={styles.progressTrack}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2 + i * 0.08,
                        ease: "easeOut",
                      }}
                      className={styles.progressBar}
                    />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default LanguagesSection;
