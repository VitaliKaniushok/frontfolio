import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Building2 } from "lucide-react";
import clsx from "clsx";

import { GlassCard, TechBadge } from "./ui";

import styles from "./ExperienceCard.module.scss";

interface Experience {
  company: string;
  role: string;
  dates: string;
  tech: string[];
  achievements: string[];
}

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  expanded: boolean;
  setExpanded: (value: number | null) => void;
}

const ExperienceCard = ({
  experience,
  index,
  expanded,
  setExpanded,
}: ExperienceCardProps) => {
  return (
    <GlassCard
      className={clsx(styles.card, expanded && styles["card--active"])}
      interactive
      onClick={() => setExpanded(expanded ? null : index)}
    >
      <div className={styles["card__top-content"]}>
        <div className="flex-1">
          <div className={styles["card__company-row"]}>
            <Building2 />
            <span>{experience.company}</span>
          </div>
          <h3 className={styles.card__role}>{experience.role}</h3>
          <p className={styles.card__dates}>{experience.dates}</p>
          <div className={styles["card__tech-list"]}>
            {experience.tech.map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>
        </div>
        <ChevronDown
          className={clsx(
            styles.chevron,
            expanded && styles["chevron--rotated"],
          )}
        />
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <ul className={styles.details}>
              {experience.achievements.map((a, j) => (
                <li key={j}>
                  <span className={styles.details__bullet} />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
};

export default ExperienceCard;
