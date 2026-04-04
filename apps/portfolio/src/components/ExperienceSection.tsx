import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Building2 } from "lucide-react";

import clsx from "clsx";

import { SectionWrapper } from "./ui/";
import { ContainerNarrow } from "@frontfolio/ui";

import { EXPERIENCE } from "@/constants/dataViews";

import styles from "./ExperienceSection.module.scss";

const ExperienceSection = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <SectionWrapper id="experience" className={styles.section}>
      <ContainerNarrow>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.header}
        >
          <p className={clsx(styles.label, "text-glow")}>Career</p>
          <h2 className={styles.title}>Experience</h2>
        </motion.div>

        <div className={styles.timeline}>
          {/* Timeline line */}
          <div className={styles.line} />

          <div className="space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={styles.item}
              >
                {/* Timeline dot */}
                <div
                  className={clsx(styles.dot, expanded === i && styles.active)}
                />

                <div
                  className={clsx(
                    "glass-card-hover",
                    styles.card,
                    expanded === i && styles.active,
                  )}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <div className={styles.topContent}>
                    <div className="flex-1">
                      <div className={styles.companyRow}>
                        <Building2 />
                        <span>{exp.company}</span>
                      </div>
                      <h3 className={styles.role}>{exp.role}</h3>
                      <p className={styles.dates}>{exp.dates}</p>
                      <div className={styles.techList}>
                        {exp.tech.map((t) => (
                          <span key={t} className="tech-badge">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ChevronDown
                      className={clsx(
                        styles.chevron,
                        expanded === i && styles.rotated,
                      )}
                    />
                  </div>

                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.details}
                      >
                        <ul className={styles.achievements}>
                          {exp.achievements.map((a, j) => (
                            <li key={j}>
                              <span className={styles.bullet} />
                              {a}
                            </li>
                          ))}
                        </ul>
                        {/* {engineeringMode && (
                          <div
                            className={clsx("glass-card", styles.architecture)}
                          >
                            <span className={styles.archPrefix}>arch://</span>{" "}
                            {exp.architecture}
                          </div>
                        )} */}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ContainerNarrow>
    </SectionWrapper>
  );
};

export default ExperienceSection;
