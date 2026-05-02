import { useState } from "react";
import { SECTION_IDS } from "@devfolio/constants";
import { useTranslation } from "react-i18next";

import { SectionWrapper } from "../ui";
import ProjectsCard from "./ProjectsCard";

import { useProjects } from "@/hooks";

import styles from "./ProjectsSection.module.scss";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<number | null>(null);

  const projects = useProjects();

  const handleExpand = (index: number) => {
    setExpanded((prev: number | null) => (prev === index ? null : index));
  };

  return (
    <SectionWrapper
      id={SECTION_IDS.projects}
      overTitle={t("portfolio.projects.overTitle")}
      title={t("portfolio.projects.title")}
    >
      <p className={styles.description}>
        {t("portfolio.projects.description")}
      </p>
      <div className={styles.grid}>
        {projects?.map((project, i) => (
          <ProjectsCard
            key={project.title}
            project={project}
            index={i}
            expanded={expanded === i}
            onExpand={() => handleExpand(i)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
