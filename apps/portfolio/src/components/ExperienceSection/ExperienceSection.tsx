import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import { SectionWrapper } from "../ui";
import ExperienceCard from "./ExperienceCard";

import { EXPERIENCE } from "@/constants/dataViews";

import styles from "./ExperienceSection.module.scss";

const ExperienceSection = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <SectionWrapper id="experience" overTitle="Career" title="Experience">
      <div className={styles.timeline}>
        {/* Timeline line */}
        <div className={styles.timeline__line} />

        <div className={styles.timeline__content}>
          {EXPERIENCE.map((experience, i) => {
            const isExpanded = expanded === i;

            return (
              <motion.div
                key={i}
                initial={{ x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={styles.item}
              >
                {/* Timeline dot */}
                <div
                  className={clsx(
                    styles.item__dot,
                    isExpanded && styles["item__dot--active"],
                  )}
                />

                <ExperienceCard
                  experience={experience}
                  index={i}
                  expanded={isExpanded}
                  setExpanded={setExpanded}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
