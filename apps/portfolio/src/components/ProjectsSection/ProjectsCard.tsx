import { motion, AnimatePresence } from "framer-motion";

import { Briefcase, ExternalLink, Github, CheckCircle2 } from "lucide-react";

import { GlassCard, TechBadge } from "@/components/ui";

import type { ProjectItemType } from "@/types";

import { PROJECT_ITEM_LINK_TYPES } from "@/constants";

import styles from "./ProjectsCard.module.scss";

interface ProjectsCardProps {
  project: ProjectItemType;
  index: number;
  expanded: boolean;
  onExpand: () => void;
}

const ProjectsCard = ({
  project,
  index,
  expanded,
  onExpand,
}: ProjectsCardProps) => {
  const showGithubIcon = project.linkType === PROJECT_ITEM_LINK_TYPES.github;

  return (
    <motion.div
      initial={{ y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <GlassCard interactive className={styles.card} onClick={onExpand}>
        <div className={styles["card-header"]}>
          <div className={styles["title-wrapper"]}>
            <h3 className={styles["project-title"]}>{project.title}</h3>
            {project.company && (
              <p className={styles.company}>
                <Briefcase className={styles["icon-small"]} />
                {project.company}
              </p>
            )}
          </div>
        </div>

        <p className={styles.role}>{project.role}</p>

        <p className={styles["project-description"]}>{project.description}</p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}
            >
              {" "}
              <ul className={styles["features-list"]}>
                {project.keyFeatures.map((featureKey) => (
                  <li
                    key={featureKey}
                    className={styles["features-list__item"]}
                  >
                    <CheckCircle2 className={styles["features-list__icon"]} />
                    <span>{featureKey}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={styles["tech-stack"]}>
          {project.tech.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        <div className={styles["card-footer"]}>
          <span className={styles.status}>{project.status}</span>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {showGithubIcon && (
                <>
                  <Github className={styles["icon-github"]} /> Code
                </>
              )}
              <ExternalLink className={styles["icon-external"]} />
            </a>
          )}
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default ProjectsCard;
