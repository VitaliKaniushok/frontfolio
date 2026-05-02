import {
  AnimatedProgressBar,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@devfolio/ui";

import type { Tech } from "@/types";

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
          <AnimatedProgressBar value={tech.level} />
        </div>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p className={styles["tooltip-description"]}>{tech.description}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default TechItem;
