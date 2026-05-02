import { useTranslation } from "react-i18next";

import { EXPERIENCE_TECH } from "@/constants";
import type { ExperienceEntry } from "@/types";

export const usePortfolioExperience = (): ExperienceEntry[] => {
  const { t } = useTranslation();
  const experience = t("portfolio.experience.items", {
    returnObjects: true,
  }) as Array<Omit<ExperienceEntry, "tech">>;

  return experience.map((entry) => ({
    ...entry,
    tech: EXPERIENCE_TECH[entry.id] ?? [],
  }));
};
