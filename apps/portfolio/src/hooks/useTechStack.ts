import { useTranslation } from "react-i18next";

import type { TechCategory } from "./portfolioData.types";

export const useTechStack = (): TechCategory[] => {
  const { t } = useTranslation();

  return t("portfolio.techStack.categories", {
    returnObjects: true,
  }) as TechCategory[];
};
