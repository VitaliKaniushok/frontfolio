import { SECTION_IDS } from "@devfolio/constants";
import { TooltipProvider } from "@devfolio/ui";
import { useTranslation } from "react-i18next";

import { SectionWrapper } from "../ui";
import TechCategoryCard from "./TechCategoryCard";

import { useTechStack } from "@/hooks";

import styles from "./TechStackSection.module.scss";

const TechStackSection = () => {
  const { t } = useTranslation();
  const techStack = useTechStack();

  return (
    <TooltipProvider delayDuration={0} skipDelayDuration={0}>
      <SectionWrapper
        id={SECTION_IDS.techStack}
        className={styles.section}
        overTitle={t("portfolio.techStack.overTitle")}
        title={t("portfolio.techStack.title")}
      >
        <div className={styles.grid}>
          {techStack.map((category, i) => (
            <TechCategoryCard
              key={category.title}
              category={category}
              index={i}
            />
          ))}
        </div>
      </SectionWrapper>
    </TooltipProvider>
  );
};

export default TechStackSection;
