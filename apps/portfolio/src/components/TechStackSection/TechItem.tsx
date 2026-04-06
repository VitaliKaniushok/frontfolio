import { motion } from "framer-motion";

import { Tooltip, TooltipContent, TooltipTrigger } from "@frontfolio/ui";

import type { Tech } from "@/constants/dataViews";

import styles from "./TechItem.module.scss";

interface TechItemProps {
  tech: Tech;
}

const TechItem = ({ tech }: TechItemProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className={styles.tech}>
          <div className={styles.tech__info}>
            <span className={styles.tech__name}>{tech.name}</span>
            {/* {engineeringMode && (
              <span className={styles.tech__level}>
                {tech.level}%
              </span>
            )} */}
          </div>
          <div className={styles.tech__progressbar}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${tech.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className={styles["tech__progress-fill"]}
            />
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p className={styles["tooltip-description"]}>{tech.description}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default TechItem;
