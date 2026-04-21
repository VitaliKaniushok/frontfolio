import { useTranslation } from "react-i18next";

import { EXPERIENCE_TECH } from "./portfolioData.constants";
import type { ExperienceEntry } from "./portfolioData.types";

export const usePortfolioExperience = (): ExperienceEntry[] => {
  const { t } = useTranslation();
  const experience = t("portfolio.experience.items", {
    returnObjects: true,
  }) as Array<Omit<ExperienceEntry, "tech">>;

  return experience.map((entry, index) => ({
    ...entry,
    tech: EXPERIENCE_TECH[index] ?? [],
  }));
};
