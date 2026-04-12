import { TooltipProvider } from "@frontfolio/ui";

import { SectionWrapper } from "../ui";
import TechCategoryCard from "./TechCategoryCard";

import { TECH_STACK } from "@/constants/dataViews";

import styles from "./TechStackSection.module.scss";

const TechStackSection = () => {
  return (
    <TooltipProvider delayDuration={0} skipDelayDuration={0}>
      <SectionWrapper
        id="techstack"
        className={styles.section}
        overTitle="Skills"
        title="Tech Stack"
      >
        <div className={styles.grid}>
          {TECH_STACK.map((category, i) => (
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
